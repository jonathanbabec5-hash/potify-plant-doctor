/**
 * Vision-model provider abstraction. Supports any ONE of:
 *   - Replit xAI connector (managed credentials, preferred)
 *   - XAI_API_KEY     (xAI Grok, OpenAI-compatible API)
 *   - OPENAI_API_KEY  (OpenAI)
 *   - GEMINI_API_KEY  (Google Gemini)
 * Model names are overridable via XAI_MODEL / OPENAI_MODEL / GEMINI_MODEL.
 * No provider configured → NoProviderError (surfaced honestly, never faked).
 */
import { ReplitConnectors } from "@replit/connectors-sdk";

export interface ImageInput {
  mime: string;
  base64: string;
}

export class NoProviderError extends Error {
  constructor() {
    super("No AI provider is configured. Connect an xAI, OpenAI, or Gemini API key to enable analysis.");
    this.name = "NoProviderError";
  }
}

export class ProviderCallError extends Error {
  status?: number;
  constructor(message: string, status?: number) {
    super(message);
    this.name = "ProviderCallError";
    this.status = status;
  }
}

interface ProviderConfig {
  kind: "replit-xai" | "openai-compatible" | "gemini";
  label: string;
  model: string;
  apiKey: string;
  baseUrl: string;
}

export function resolveProvider(): ProviderConfig | null {
  if (process.env.XAI_API_KEY) {
    return {
      kind: "openai-compatible",
      label: "xAI Grok",
      model: process.env.XAI_MODEL || "grok-4.3",
      apiKey: process.env.XAI_API_KEY,
      baseUrl: "https://api.x.ai/v1",
    };
  }
  if (process.env.OPENAI_API_KEY) {
    return {
      kind: "openai-compatible",
      label: "OpenAI",
      model: process.env.OPENAI_MODEL || "gpt-4o",
      apiKey: process.env.OPENAI_API_KEY,
      baseUrl: "https://api.openai.com/v1",
    };
  }
  if (process.env.GEMINI_API_KEY) {
    return {
      kind: "gemini",
      label: "Google Gemini",
      model: process.env.GEMINI_MODEL || "gemini-2.5-flash",
      apiKey: process.env.GEMINI_API_KEY,
      baseUrl: "https://generativelanguage.googleapis.com/v1beta",
    };
  }
  if (process.env.REPLIT_CONNECTORS_HOSTNAME && process.env.REPL_IDENTITY) {
    return {
      kind: "replit-xai",
      label: "xAI Grok (Replit)",
      model: process.env.XAI_MODEL || "grok-4.3",
      apiKey: "",
      baseUrl: "",
    };
  }
  return null;
}

export function providerStatus(): { configured: boolean; provider: string | null } {
  const p = resolveProvider();
  return { configured: !!p, provider: p ? p.label : null };
}

const CALL_TIMEOUT_MS = 90_000;

async function timedFetch(url: string, init: RequestInit): Promise<Response> {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), CALL_TIMEOUT_MS);
  try {
    return await fetch(url, { ...init, signal: controller.signal });
  } catch (err: any) {
    if (err?.name === "AbortError") {
      throw new ProviderCallError("The AI analysis timed out. Please try again.", 504);
    }
    throw new ProviderCallError(`Could not reach the AI provider: ${err?.message ?? err}`);
  } finally {
    clearTimeout(timer);
  }
}

async function callOpenAICompatible(
  cfg: ProviderConfig,
  system: string,
  userText: string,
  images: ImageInput[],
): Promise<string> {
  const res = await timedFetch(`${cfg.baseUrl}/chat/completions`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${cfg.apiKey}`,
    },
    body: JSON.stringify({
      model: cfg.model,
      temperature: 0.2,
      max_tokens: 4000,
      response_format: { type: "json_object" },
      messages: [
        { role: "system", content: system },
        {
          role: "user",
          content: [
            { type: "text", text: userText },
            ...images.map((img) => ({
              type: "image_url",
              image_url: { url: `data:${img.mime};base64,${img.base64}`, detail: "high" },
            })),
          ],
        },
      ],
    }),
  });

  if (!res.ok) {
    const body = await res.text().catch(() => "");
    throw new ProviderCallError(
      `${cfg.label} returned ${res.status}: ${body.slice(0, 400)}`,
      res.status,
    );
  }
  const json: any = await res.json();
  const content = json?.choices?.[0]?.message?.content;
  if (!content || typeof content !== "string") {
    throw new ProviderCallError(`${cfg.label} returned an empty response.`);
  }
  return content;
}

async function callReplitXai(
  cfg: ProviderConfig,
  system: string,
  userText: string,
  images: ImageInput[],
): Promise<string> {
  const connectors = new ReplitConnectors();
  let res: Response;
  try {
    res = await Promise.race([
      connectors.proxy("xai", "/v1/chat/completions", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          model: cfg.model,
          temperature: 0.2,
          max_completion_tokens: 4000,
          response_format: { type: "json_object" },
          messages: [
            { role: "system", content: system },
            {
              role: "user",
              content: [
                { type: "text", text: userText },
                ...images.map((img) => ({
                  type: "image_url",
                  image_url: { url: `data:${img.mime};base64,${img.base64}`, detail: "high" },
                })),
              ],
            },
          ],
        }),
      }),
      new Promise<never>((_, reject) =>
        setTimeout(
          () => reject(new ProviderCallError("The AI analysis timed out. Please try again.", 504)),
          CALL_TIMEOUT_MS,
        ),
      ),
    ]);
  } catch (err: any) {
    if (err instanceof ProviderCallError) throw err;
    throw new ProviderCallError(`Could not reach xAI through Replit: ${err?.message ?? err}`);
  }

  if (!res.ok) {
    const body = await res.text().catch(() => "");
    throw new ProviderCallError(
      `${cfg.label} returned ${res.status}: ${body.slice(0, 400)}`,
      res.status,
    );
  }
  const json: any = await res.json();
  const content = json?.choices?.[0]?.message?.content;
  if (!content || typeof content !== "string") {
    throw new ProviderCallError(`${cfg.label} returned an empty response.`);
  }
  return content;
}

async function callGemini(
  cfg: ProviderConfig,
  system: string,
  userText: string,
  images: ImageInput[],
): Promise<string> {
  const res = await timedFetch(
    `${cfg.baseUrl}/models/${encodeURIComponent(cfg.model)}:generateContent`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-goog-api-key": cfg.apiKey,
      },
      body: JSON.stringify({
        systemInstruction: { parts: [{ text: system }] },
        contents: [
          {
            role: "user",
            parts: [
              { text: userText },
              ...images.map((img) => ({
                inline_data: { mime_type: img.mime, data: img.base64 },
              })),
            ],
          },
        ],
        generationConfig: {
          temperature: 0.2,
          maxOutputTokens: 4000,
          responseMimeType: "application/json",
        },
      }),
    },
  );

  if (!res.ok) {
    const body = await res.text().catch(() => "");
    throw new ProviderCallError(
      `${cfg.label} returned ${res.status}: ${body.slice(0, 400)}`,
      res.status,
    );
  }
  const json: any = await res.json();
  const parts = json?.candidates?.[0]?.content?.parts;
  const text = Array.isArray(parts) ? parts.map((p: any) => p?.text ?? "").join("") : "";
  if (!text) {
    throw new ProviderCallError(`${cfg.label} returned an empty response.`);
  }
  return text;
}

export async function callVisionModel(
  system: string,
  userText: string,
  images: ImageInput[],
): Promise<{ raw: string; provider: string; model: string }> {
  const cfg = resolveProvider();
  if (!cfg) throw new NoProviderError();
  const raw =
    cfg.kind === "gemini"
      ? await callGemini(cfg, system, userText, images)
      : cfg.kind === "replit-xai"
        ? await callReplitXai(cfg, system, userText, images)
      : await callOpenAICompatible(cfg, system, userText, images);
  return { raw, provider: cfg.label, model: cfg.model };
}
