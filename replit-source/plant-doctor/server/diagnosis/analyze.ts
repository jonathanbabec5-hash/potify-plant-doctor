import {
  diagnosisResultSchema,
  type DiagnosisResult,
  type Intake,
  type RefineAnswer,
} from "@shared/diagnosis";
import { buildSystemPrompt, buildUserText, buildRefineText } from "./prompt";
import { callVisionModel, type ImageInput } from "./provider";
import { CAUSES, INTERACTIONS } from "./knowledge-base";
import { log } from "../logger";

export class AnalysisFormatError extends Error {
  constructor(detail: string) {
    super(`The AI response could not be validated: ${detail}`);
    this.name = "AnalysisFormatError";
  }
}

function stripFences(raw: string): string {
  let s = raw.trim();
  if (s.startsWith("```")) {
    s = s.replace(/^```(?:json)?\s*/i, "").replace(/\s*```\s*$/, "");
  }
  // Some models prepend/append prose despite instructions — extract outermost object.
  const first = s.indexOf("{");
  const last = s.lastIndexOf("}");
  if (first > 0 || (last !== -1 && last < s.length - 1)) {
    if (first !== -1 && last > first) s = s.slice(first, last + 1);
  }
  return s;
}

export function parseAndValidate(raw: string): { ok: true; result: DiagnosisResult } | { ok: false; error: string } {
  let parsed: unknown;
  try {
    parsed = JSON.parse(stripFences(raw));
  } catch (e: any) {
    return { ok: false, error: `invalid JSON (${e?.message ?? "parse error"})` };
  }
  const check = diagnosisResultSchema.safeParse(parsed);
  if (!check.success) {
    const issues = check.error.issues
      .slice(0, 5)
      .map((i) => `${i.path.join(".")}: ${i.message}`)
      .join("; ");
    return { ok: false, error: issues };
  }
  const result = check.data;
  const causesById = new Map(CAUSES.map((cause) => [cause.id, cause]));
  if (result.status === "ok" && (result.candidates.length < 2 || result.candidates.length > 6)) {
    return { ok: false, error: "status ok requires 2-6 candidates" };
  }
  if (result.status !== "ok" && (result.candidates.length || result.interactions.length || result.primaryDiagnosis)) {
    return { ok: false, error: `status ${result.status} must not contain diagnoses or interactions` };
  }
  for (const candidate of result.candidates) {
    if (!causesById.has(candidate.id)) return { ok: false, error: `unknown cause id: ${candidate.id}` };
  }
  const candidateIds = new Set(result.candidates.map((candidate) => candidate.id));
  if (candidateIds.size !== result.candidates.length) {
    return { ok: false, error: "candidate ids must be unique" };
  }
  const allowedInteractions = new Map(
    INTERACTIONS.map((rule) => [[...rule.causes].sort().join("|"), rule]),
  );
  for (const interaction of result.interactions) {
    if (interaction.causes.some((id) => !causesById.has(id))) {
      return { ok: false, error: "interaction contains an unknown cause id" };
    }
    if (interaction.causes.some((id) => !candidateIds.has(id))) {
      return { ok: false, error: "interaction causes must all appear in the ranked candidates" };
    }
    const canonical = allowedInteractions.get([...interaction.causes].sort().join("|"));
    if (!canonical) return { ok: false, error: "interaction is not grounded in the interaction library" };
  }
  result.interactions = result.interactions.map((interaction) => {
    const canonical = allowedInteractions.get([...interaction.causes].sort().join("|"))!;
    return { causes: canonical.causes, explanation: canonical.rule };
  });
  result.candidates = result.candidates.map((candidate) => {
    const canonical = causesById.get(candidate.id)!;
    return {
      ...candidate,
      name: canonical.name,
      category: canonical.category,
      lookalikes: canonical.lookalikes,
      confirmSteps: canonical.confirmSteps,
    };
  }).sort((a, b) => b.likelihoodPct - a.likelihoodPct);
  if (result.status === "ok") result.primaryDiagnosis = result.candidates[0].name;
  return { ok: true, result };
}

/** Server-side enforcement of the honesty caps, independent of the model obeying the prompt. */
function enforceHonesty(result: DiagnosisResult, intake: Intake, photoCount: number): DiagnosisResult {
  const out: DiagnosisResult = { ...result };

  const phKnown = !!(intake.phIn?.trim() || intake.phRunoff?.trim());
  const feedKnown = !!(intake.ecPpm?.trim() || intake.feedStrength?.trim());
  let cap = 100;
  if (!phKnown && !feedKnown) cap = Math.min(cap, 75);
  if (photoCount < 2) cap = Math.min(cap, 85);
  if (out.confidencePct > cap) {
    out.confidencePct = cap;
    out.confidenceRationale = out.confidenceRationale
      ? `${out.confidenceRationale} (Capped at ${cap}% because key data is missing: ${[!phKnown && !feedKnown ? "pH and feed strength unknown" : "", photoCount < 2 ? "single photo" : ""].filter(Boolean).join(", ")}.)`
      : `Capped at ${cap}% due to missing data.`;
  }

  // Ranked order, defensively.
  out.candidates = [...out.candidates].sort((a, b) => b.likelihoodPct - a.likelihoodPct);

  // Consistency: non-"ok" statuses carry no primary diagnosis.
  if (out.status !== "ok") {
    out.primaryDiagnosis = null;
    out.candidates = [];
    out.interactions = [];
    out.carePlan.fixNow = [];
    out.carePlan.thisWeek = [];
    if (out.status === "not_plant") out.carePlan = { fixNow: [], thisWeek: [], monitor: [], prevent: [] };
    if (out.status !== "insufficient") out.followUpQuestions = out.status === "healthy" ? out.followUpQuestions : [];
  } else if (!out.primaryDiagnosis && out.candidates.length > 0) {
    out.primaryDiagnosis = out.candidates[0].name;
  }

  return out;
}

export interface AnalyzeArgs {
  images: ImageInput[];
  intake: Intake;
  previousResult?: DiagnosisResult;
  answers?: RefineAnswer[];
}

export async function runDiagnosis(args: AnalyzeArgs): Promise<{ result: DiagnosisResult; provider: string; model: string }> {
  const system = buildSystemPrompt();
  const userText =
    args.previousResult && args.answers?.length
      ? buildRefineText(args.intake, args.images.length, args.previousResult, args.answers)
      : buildUserText(args.intake, args.images.length);

  const first = await callVisionModel(system, userText, args.images);
  let attempt = parseAndValidate(first.raw);

  if (!attempt.ok) {
    log(`diagnosis: first response invalid (${attempt.error}); retrying once`, "diagnosis");
    const retry = await callVisionModel(
      system,
      `${userText}\n\nYOUR PREVIOUS RESPONSE WAS INVALID: ${attempt.error}\nReturn ONLY the corrected, complete JSON object exactly matching the required schema. No other text.`,
      args.images,
    );
    attempt = parseAndValidate(retry.raw);
    if (!attempt.ok) {
      throw new AnalysisFormatError(attempt.error);
    }
  }

  return {
    result: enforceHonesty(attempt.result, args.intake, args.images.length),
    provider: first.provider,
    model: first.model,
  };
}
