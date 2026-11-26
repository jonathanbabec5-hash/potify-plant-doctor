import { z } from "zod";

export const GROWTH_STAGES = [
  "seedling",
  "vegetative",
  "early_flower",
  "mid_flower",
  "late_flower",
] as const;

export const MEDIUMS = ["soil", "coco", "hydro", "soilless"] as const;
export const ENVIRONMENTS = ["indoor", "outdoor", "greenhouse"] as const;

export const STAGE_LABELS: Record<(typeof GROWTH_STAGES)[number], string> = {
  seedling: "Seedling",
  vegetative: "Vegetative",
  early_flower: "Early flower (weeks 1-3)",
  mid_flower: "Mid flower (weeks 4-6)",
  late_flower: "Late flower (week 7+)",
};

export const MEDIUM_LABELS: Record<(typeof MEDIUMS)[number], string> = {
  soil: "Soil",
  coco: "Coco coir",
  hydro: "Hydroponics",
  soilless: "Soilless mix / peat",
};

/** Grower-provided context. Only stage + medium are required. */
export const intakeSchema = z.object({
  stage: z.enum(GROWTH_STAGES),
  medium: z.enum(MEDIUMS),
  environment: z.enum(ENVIRONMENTS).optional(),
  wateringFrequency: z.string().trim().max(200).optional(),
  nutrientLine: z.string().trim().max(200).optional(),
  feedStrength: z.string().trim().max(200).optional(),
  ecPpm: z.string().trim().max(100).optional(),
  phIn: z.string().trim().max(50).optional(),
  phRunoff: z.string().trim().max(50).optional(),
  lightType: z.string().trim().max(120).optional(),
  lightDistance: z.string().trim().max(120).optional(),
  lightSchedule: z.string().trim().max(120).optional(),
  temperature: z.string().trim().max(120).optional(),
  humidity: z.string().trim().max(120).optional(),
  onsetWhen: z.string().trim().max(300).optional(),
  onsetWhere: z.string().trim().max(300).optional(),
  spreadSpeed: z.string().trim().max(120).optional(),
  recentChanges: z.string().trim().max(500).optional(),
  symptomsText: z.string().trim().max(2000).optional(),
});
export type Intake = z.infer<typeof intakeSchema>;

export const candidateSchema = z.object({
  id: z.string(),
  name: z.string(),
  category: z.string(),
  likelihoodPct: z.number().min(0).max(100),
  evidenceFor: z.array(z.string()).default([]),
  evidenceAgainst: z.array(z.string()).default([]),
  lookalikes: z.array(z.string()).default([]),
  confirmSteps: z.array(z.string()).default([]),
});
export type Candidate = z.infer<typeof candidateSchema>;

export const interactionSchema = z.object({
  causes: z.array(z.string()),
  explanation: z.string(),
});
export type Interaction = z.infer<typeof interactionSchema>;

export const carePlanSchema = z.object({
  fixNow: z.array(z.string()).default([]),
  thisWeek: z.array(z.string()).default([]),
  monitor: z.array(z.string()).default([]),
  prevent: z.array(z.string()).default([]),
});
export type CarePlan = z.infer<typeof carePlanSchema>;

export const followUpQuestionSchema = z.object({
  id: z.string(),
  question: z.string(),
  why: z.string().default(""),
});
export type FollowUpQuestion = z.infer<typeof followUpQuestionSchema>;

export const diagnosisResultSchema = z.object({
  status: z.enum(["ok", "healthy", "not_plant", "insufficient"]),
  observations: z.array(z.string()).default([]),
  candidates: z.array(candidateSchema).default([]),
  interactions: z.array(interactionSchema).default([]),
  primaryDiagnosis: z.string().nullable().default(null),
  confidencePct: z.number().min(0).max(100),
  confidenceRationale: z.string().default(""),
  urgency: z.enum(["low", "medium", "high"]),
  followUpQuestions: z.array(followUpQuestionSchema).default([]),
  carePlan: carePlanSchema.default({ fixNow: [], thisWeek: [], monitor: [], prevent: [] }),
  photoQualityFeedback: z.string().default(""),
  /** Server-issued integrity token required to refine this exact result. */
  refinementToken: z.string().optional(),
});
export type DiagnosisResult = z.infer<typeof diagnosisResultSchema>;

export const refineAnswerSchema = z.object({
  questionId: z.string().max(200),
  answer: z.string().max(1000),
});
export type RefineAnswer = z.infer<typeof refineAnswerSchema>;
export const refineAnswersSchema = z.array(refineAnswerSchema).min(1).max(8);

/** GET /api/diagnose/status response */
export interface ProviderStatus {
  configured: boolean;
  provider: string | null;
}
