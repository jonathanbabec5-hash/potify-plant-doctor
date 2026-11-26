import type { Express, Request, Response, NextFunction } from "express";
import { type Server } from "http";
import { createHmac, timingSafeEqual } from "crypto";
import multer from "multer";
import { fromError } from "zod-validation-error";
import {
  intakeSchema,
  refineAnswersSchema,
  diagnosisResultSchema,
} from "@shared/diagnosis";
import { runDiagnosis } from "./diagnosis/analyze";
import { NoProviderError, ProviderCallError, providerStatus, type ImageInput } from "./diagnosis/provider";
import { AnalysisFormatError } from "./diagnosis/analyze";
import { knowledgeBaseStats } from "./diagnosis/knowledge-base";
import { log } from "./logger";

const ALLOWED_MIMES = new Set(["image/jpeg", "image/png", "image/webp"]);
const MAX_FILE_BYTES = 10 * 1024 * 1024;
const MAX_FILES = 3;
const MAX_TOTAL_BYTES = 25 * 1024 * 1024;
const RATE_WINDOW_MS = 15 * 60 * 1000;
const RATE_MAX = 10;
const rateWindows = new Map<string, { startedAt: number; count: number }>();
const activeByIp = new Map<string, number>();
let activeGlobal = 0;

class UploadValidationError extends Error {}

function diagnosisGuard(req: Request, res: Response, next: NextFunction) {
  const ip = req.ip || req.socket.remoteAddress || "unknown";
  const now = Date.now();
  const current = rateWindows.get(ip);
  const window = !current || now - current.startedAt >= RATE_WINDOW_MS
    ? { startedAt: now, count: 0 }
    : current;
  if (window.count >= RATE_MAX) {
    return res.status(429).json({ error: "Too many diagnosis requests. Please wait about 15 minutes and try again." });
  }
  if ((activeByIp.get(ip) ?? 0) >= 2 || activeGlobal >= 4) {
    return res.status(429).json({ error: "The diagnosis service is busy. Please wait for the current analysis to finish." });
  }
  window.count += 1;
  rateWindows.set(ip, window);
  activeByIp.set(ip, (activeByIp.get(ip) ?? 0) + 1);
  activeGlobal += 1;
  let released = false;
  const release = () => {
    if (released) return;
    released = true;
    const remaining = Math.max(0, (activeByIp.get(ip) ?? 1) - 1);
    if (remaining) activeByIp.set(ip, remaining);
    else activeByIp.delete(ip);
    activeGlobal = Math.max(0, activeGlobal - 1);
  };
  res.once("finish", release);
  res.once("close", release);
  next();
}

const upload = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: MAX_FILE_BYTES, files: MAX_FILES },
  fileFilter: (_req, file, cb) => {
    if (ALLOWED_MIMES.has(file.mimetype)) cb(null, true);
    else cb(new Error(`Unsupported image type "${file.mimetype}". Please upload JPEG, PNG, or WebP photos.`));
  },
});

/** Wrap multer so its errors become clean 400s instead of stack traces. */
function photosUpload(req: Request, res: Response, next: NextFunction) {
  upload.array("photos", MAX_FILES)(req, res, (err: unknown) => {
    if (!err) return next();
    let message = "Photo upload failed.";
    if (err instanceof multer.MulterError) {
      if (err.code === "LIMIT_FILE_SIZE") message = "Each photo must be under 10MB. Try a smaller image.";
      else if (err.code === "LIMIT_FILE_COUNT" || err.code === "LIMIT_UNEXPECTED_FILE") message = `You can upload at most ${MAX_FILES} photos.`;
      else message = `Photo upload failed: ${err.message}`;
    } else if (err instanceof Error) {
      message = err.message;
    }
    return res.status(400).json({ error: message });
  });
}

function filesToImages(req: Request): ImageInput[] {
  const files = (req.files as Express.Multer.File[] | undefined) ?? [];
  const total = files.reduce((sum, file) => sum + file.size, 0);
  if (total > MAX_TOTAL_BYTES) throw new UploadValidationError("The combined photo upload must be under 25MB.");
  return files.map((f) => {
    const b = f.buffer;
    const detected =
      b.length >= 3 && b[0] === 0xff && b[1] === 0xd8 && b[2] === 0xff
        ? "image/jpeg"
        : b.length >= 8 && b.subarray(0, 8).equals(Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]))
          ? "image/png"
          : b.length >= 12 && b.subarray(0, 4).toString("ascii") === "RIFF" && b.subarray(8, 12).toString("ascii") === "WEBP"
            ? "image/webp"
            : null;
    if (!detected || detected !== f.mimetype) {
      throw new UploadValidationError("One uploaded file is not a valid JPEG, PNG, or WebP image.");
    }
    return { mime: detected, base64: b.toString("base64") };
  });
}

function diagnosisSigningKey(): string {
  const key = process.env.SESSION_SECRET;
  if (!key) throw new Error("SESSION_SECRET is required for diagnosis refinement.");
  return key;
}

function unsignedResult(result: ReturnType<typeof diagnosisResultSchema.parse>) {
  const copy = { ...result };
  delete copy.refinementToken;
  return copy;
}

function signDiagnosis(result: ReturnType<typeof diagnosisResultSchema.parse>): string {
  return createHmac("sha256", diagnosisSigningKey())
    .update(JSON.stringify(unsignedResult(result)))
    .digest("base64url");
}

function validDiagnosisSignature(result: ReturnType<typeof diagnosisResultSchema.parse>): boolean {
  if (!result.refinementToken) return false;
  const expected = Buffer.from(signDiagnosis(result));
  const actual = Buffer.from(result.refinementToken);
  return expected.length === actual.length && timingSafeEqual(expected, actual);
}

function parseJsonField(raw: unknown, field: string): unknown {
  if (typeof raw !== "string" || !raw.trim()) throw new Error(`Missing "${field}" data.`);
  try {
    return JSON.parse(raw);
  } catch {
    throw new Error(`"${field}" is not valid JSON.`);
  }
}

function handleDiagnosisError(res: Response, err: unknown) {
  if (err instanceof NoProviderError) {
    return res.status(503).json({ error: err.message, code: "no_provider" });
  }
  if (err instanceof ProviderCallError) {
    log(`provider error: ${err.message}`, "diagnosis");
    return res.status(502).json({
      error: "The AI provider rejected the analysis request. Please try again in a moment.",
      detail: err.message.slice(0, 300),
    });
  }
  if (err instanceof AnalysisFormatError) {
    log(`format error: ${err.message}`, "diagnosis");
    return res.status(502).json({
      error: "The AI returned an unusable response twice. Nothing was made up instead — please try again.",
    });
  }
  if (err instanceof UploadValidationError) {
    return res.status(400).json({ error: err.message });
  }
  log(`unexpected diagnosis error: ${(err as Error)?.stack ?? err}`, "diagnosis");
  return res.status(500).json({ error: "Unexpected server error during analysis." });
}

export async function registerRoutes(
  httpServer: Server,
  app: Express,
): Promise<Server> {
  // Whether a vision provider is configured (UI shows honest setup state).
  app.get("/api/diagnose/status", (_req, res) => {
    const stats = knowledgeBaseStats();
    res.json({ ...providerStatus(), knowledgeBase: stats });
  });

  app.post("/api/diagnose", diagnosisGuard, photosUpload, async (req, res) => {
    try {
      const images = filesToImages(req);
      if (images.length === 0) {
        return res.status(400).json({ error: "Please add at least one photo of the plant." });
      }

      let intake;
      try {
        const parsed = intakeSchema.safeParse(parseJsonField(req.body?.intake, "intake"));
        if (!parsed.success) {
          return res.status(400).json({ error: fromError(parsed.error).toString() });
        }
        intake = parsed.data;
      } catch (e: any) {
        return res.status(400).json({ error: e.message });
      }

      const started = Date.now();
      const { result, provider, model } = await runDiagnosis({ images, intake });
      log(`diagnosis ok via ${provider}/${model} in ${Date.now() - started}ms (status=${result.status})`, "diagnosis");
      return res.json({ ...result, refinementToken: signDiagnosis(result) });
    } catch (err) {
      return handleDiagnosisError(res, err);
    }
  });

  app.post("/api/diagnose/refine", diagnosisGuard, photosUpload, async (req, res) => {
    try {
      const images = filesToImages(req);
      if (images.length === 0) {
        return res.status(400).json({ error: "Photos are required again for a refinement round." });
      }

      let intake, previousResult, answers;
      try {
        const parsedIntake = intakeSchema.safeParse(parseJsonField(req.body?.intake, "intake"));
        if (!parsedIntake.success) {
          return res.status(400).json({ error: fromError(parsedIntake.error).toString() });
        }
        intake = parsedIntake.data;

        const parsedPrev = diagnosisResultSchema.safeParse(parseJsonField(req.body?.previousResult, "previousResult"));
        if (!parsedPrev.success) {
          return res.status(400).json({ error: "The previous result payload was invalid." });
        }
        previousResult = parsedPrev.data;
        if (!validDiagnosisSignature(previousResult)) {
          return res.status(400).json({ error: "This prior diagnosis cannot be verified. Please run a new analysis." });
        }

        const parsedAnswers = refineAnswersSchema.safeParse(parseJsonField(req.body?.answers, "answers"));
        if (!parsedAnswers.success) {
          return res.status(400).json({ error: "Please answer at least one follow-up question before refining." });
        }
        answers = parsedAnswers.data;
        const questionsById = new Map(previousResult.followUpQuestions.map((q) => [q.id, q]));
        if (answers.some((answer) => !questionsById.has(answer.questionId))) {
          return res.status(400).json({ error: "One or more answers do not match this diagnosis's follow-up questions." });
        }
      } catch (e: any) {
        return res.status(400).json({ error: e.message });
      }

      const started = Date.now();
      const { result, provider, model } = await runDiagnosis({ images, intake, previousResult, answers });
      log(`refine ok via ${provider}/${model} in ${Date.now() - started}ms (status=${result.status})`, "diagnosis");
      return res.json({ ...result, refinementToken: signDiagnosis(result) });
    } catch (err) {
      return handleDiagnosisError(res, err);
    }
  });

  return httpServer;
}
