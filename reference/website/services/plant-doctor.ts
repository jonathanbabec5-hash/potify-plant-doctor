/**
 * Plant Doctor diagnosis service.
 *
 * Grounded AI diagnosis: the model must select condition ids from the
 * plant-health library (300+ validated profiles). Structured output is
 * enforced via JSON schema. If the AI service is unavailable, a
 * deterministic library-based fallback ranking is returned with
 * aiGrounded=false so the client can label it honestly.
 */
import { z } from "zod";
import { openai } from "@workspace/integrations-openai-ai-server";
import { logger } from "../lib/logger";
import {
  allProfiles,
  searchProfiles,
  getProfileById,
  type PlantProblemProfile,
} from "@workspace/plant-health-library";

// ---------- Types mirrored from the OpenAPI contract ----------

export interface IntakeData {
  species: string;
  plantGroup?: string;
  symptoms?: string[];
  commonName?: string;
  growthStage?: string;
  setting?: "indoor" | "outdoor" | "greenhouse";
  growingMedium?: string;
  region?: string;
  symptomLocation: string;
  symptomOnset: string;
  symptomProgression?: string;
  wateringFrequency?: string;
  rootZoneMoisture?: string;
  drainageQuality?: string;
  ph?: string;
  ec?: string;
  nutrients?: string;
  temperature?: string;
  humidity?: string;
  lightSource?: string;
  lightHours?: string;
  airflow?: string;
  recentChanges?: string;
  pestEvidence?: string;
  rootEvidence?: string;
  priorTreatments?: string;
  additionalNotes?: string;
}

export interface DiagnosisEntry {
  conditionId: string;
  conditionName: string;
  category: string;
  confidenceLow: number;
  confidenceHigh: number;
  evidenceFor: string[];
  evidenceAgainst: string[];
  lookalikesRuledOut: string[];
  avoid: string[];
  immediateActions: string[];
  sevenDayPlan: string[];
  monitoringThresholds: string[];
  preventionTips: string[];
  escalationCriteria: string[];
  recoveryTimeline: string;
  sources: string[];
}

export interface DiagnosisResult {
  diagnoses: DiagnosisEntry[];
  followUpQuestions: string[];
  evidenceSummary: string;
  insufficientEvidence: boolean;
  insufficientEvidenceReason?: string | null;
  isolationRequired: boolean;
  professionalConsultRequired: boolean;
  labTestingRequired: boolean;
  aiGrounded: boolean;
  safetyNotice?: string | null;
  imageAnalysisIncluded: boolean;
}

// ---------- Image validation ----------

const MAX_IMAGE_BYTES = 5 * 1024 * 1024;
const ALLOWED_MIME = new Set(["image/jpeg", "image/png", "image/webp"]);

const MAGIC_BYTES: Record<string, (buf: Buffer) => boolean> = {
  "image/jpeg": (b) => b.length > 4 && b[0] === 0xff && b[1] === 0xd8 && b[2] === 0xff && b[b.length - 2] === 0xff && b[b.length - 1] === 0xd9,
  "image/png": (b) =>
    b.length >= 45 &&
    b[0] === 0x89 &&
    b[1] === 0x50 &&
    b[2] === 0x4e &&
    b[3] === 0x47 &&
    b.toString("ascii", 12, 16) === "IHDR" &&
    b.readUInt32BE(16) > 0 &&
    b.readUInt32BE(20) > 0 &&
    b.toString("ascii", b.length - 8, b.length - 4) === "IEND",
  "image/webp": (b) =>
    b.length > 12 &&
    b.toString("ascii", 0, 4) === "RIFF" &&
    b.toString("ascii", 8, 12) === "WEBP" &&
    b.readUInt32LE(4) + 8 === b.length &&
    ["VP8 ", "VP8L", "VP8X"].includes(b.toString("ascii", 12, 16)),
};

export function validateImage(
  imageBase64: string,
  mimeType: string,
): { ok: true; buffer: Buffer } | { ok: false; error: string } {
  if (!ALLOWED_MIME.has(mimeType)) {
    return { ok: false, error: /hei[cf]/i.test(mimeType)
      ? "HEIC/HEIF photos are not supported. Export or convert to JPEG, PNG, or WebP."
      : `Unsupported image type ${mimeType}. Use JPEG, PNG, or WebP.` };
  }
  if (imageBase64.length > Math.ceil(MAX_IMAGE_BYTES / 3) * 4 + 4) {
    return { ok: false, error: "Image exceeds the 5MB limit. Please resize or compress it." };
  }
  if (!imageBase64) {
    return { ok: false, error: "Photo is empty. Choose a non-empty JPEG, PNG, or WebP image." };
  }
  if (imageBase64.length % 4 !== 0 || !/^[A-Za-z0-9+/]+={0,2}$/.test(imageBase64) || imageBase64.indexOf("=") < imageBase64.length - 2 && imageBase64.includes("=")) {
    return { ok: false, error: "Image data is not valid base64." };
  }
  let buffer: Buffer;
  try {
    buffer = Buffer.from(imageBase64, "base64");
  } catch {
    return { ok: false, error: "Image data is not valid base64." };
  }
  if (buffer.length === 0) {
    return { ok: false, error: "Image data is empty." };
  }
  if (buffer.length > MAX_IMAGE_BYTES) {
    return {
      ok: false,
      error: `Image is ${(buffer.length / 1024 / 1024).toFixed(1)}MB — the limit is 5MB. Please resize or compress it.`,
    };
  }
  const magicCheck = MAGIC_BYTES[mimeType];
  if (!magicCheck(buffer)) {
    return {
      ok: false,
      error: "Image contents do not match the declared format. Please upload a real JPEG, PNG, or WebP photo.",
    };
  }
  return { ok: true, buffer };
}

// ---------- Evidence sufficiency ----------

export function assessEvidenceSufficiency(intake: IntakeData): {
  sufficient: boolean;
  missing: string[];
} {
  const missing: string[] = [];
  if (!intake.species || intake.species.trim().length < 2) {
    missing.push("What plant is affected (species or common name)?");
  }
  if (!intake.symptomLocation || intake.symptomLocation.trim().length < 3) {
    missing.push("Where on the plant do you see the symptoms (new growth, old leaves, stems, roots, fruit)?");
  }
  // "Unknown" is a valid observation, not a reason to guess a date.
  // The public API requires a string; clients can send "Unknown".
  return { sufficient: missing.length === 0, missing };
}

const NO_OBVIOUS_DAMAGE = /no (?:obvious|visible|clear|other|apparent) (?:damage|symptoms?|disease|issues?|pests?)|(?:looks|appears|seems) healthy|normal variegation|natural variegation|healthy variegat/i;
const POSITIVE_DAMAGE = /(?:brown|black|necrotic|dead|dying|soft|rotting|wilting|drooping|webbing|insects?|spots?|lesions?|spreading|progressive|mushy|burnt|scorched|holes?|stunted|chlorosis)(?:\b|ing)/i;

function observationFirst(
  intake: IntakeData,
  aiGrounded: boolean,
  imageAnalysisIncluded: boolean,
  evidenceSummary = "",
  photoSupportsNormalVariation = false,
): DiagnosisResult {
  const photoContext = photoSupportsNormalVariation
    ? "The photo appears consistent with normal variegation, but an image alone cannot confirm the plant's health. "
    : "";
  const providerContext = aiGrounded ? "" : "AI analysis was unavailable; the photo was not assessed. ";
  return {
    diagnoses: [],
    followUpQuestions: [
      "Are these markings present on older leaves too, or are they new and spreading?",
      "Apart from the regular color pattern, do you see browning, wilting, damaged tissue, insects, or declining growth?",
      "If known, how often is the growing medium watered, and has fertilizer or light changed recently?",
    ],
    evidenceSummary: `${providerContext}${photoContext}${evidenceSummary || "The reported pattern could be natural variation; no specific injury has been established."} Observe before treating. Do not add fertilizer, flush the medium, or apply a pesticide based on leaf color alone.`,
    insufficientEvidence: true,
    insufficientEvidenceReason: "No confirmed damage or progression separates normal variation from a treatable condition. Monitor the plant and answer the checks below before making changes.",
    isolationRequired: false,
    professionalConsultRequired: false,
    labTestingRequired: false,
    aiGrounded,
    safetyNotice: null,
    imageAnalysisIncluded,
  };
}

function isObservationOnlyReport(intake: IntakeData): boolean {
  const notes = [intake.additionalNotes, intake.pestEvidence, intake.rootEvidence, intake.symptomProgression].filter(Boolean).join(" ");
  return NO_OBVIOUS_DAMAGE.test(notes) && !POSITIVE_DAMAGE.test(notes) &&
    (!intake.symptoms?.length || intake.symptoms.every(s => /no obvious|normal variation|healthy/i.test(s)));
}

// ---------- Candidate shortlisting (used for grounding AND fallback) ----------

export function shortlistCandidates(intake: IntakeData, limit = 40): PlantProblemProfile[] {
  const queryParts = [
    intake.species,
    intake.plantGroup ?? "",
    ...(intake.symptoms ?? []),
    intake.commonName ?? "",
    intake.symptomLocation,
    intake.symptomProgression ?? "",
    intake.pestEvidence ?? "",
    intake.rootEvidence ?? "",
    intake.rootZoneMoisture ?? "",
    intake.additionalNotes ?? "",
    intake.recentChanges ?? "",
  ].filter(Boolean);
  const query = queryParts.join(" ");
  const matched = searchProfiles(query, limit);
  if (matched.length >= 10) return matched;
  // Broaden: include category-diverse sample so AI always has options
  const seen = new Set(matched.map((p) => p.id));
  const extras: PlantProblemProfile[] = [];
  for (const p of allProfiles) {
    if (extras.length + matched.length >= limit) break;
    if (!seen.has(p.id)) {
      extras.push(p);
      seen.add(p.id);
    }
  }
  return [...matched, ...extras];
}

// ---------- Deterministic fallback ranking ----------

function keywordScore(profile: PlantProblemProfile, intake: IntakeData): { score: number; hits: string[] } {
  const text = [
    intake.species,
    intake.plantGroup ?? "",
    ...(intake.symptoms ?? []),
    intake.commonName ?? "",
    intake.symptomLocation,
    intake.symptomProgression ?? "",
    intake.pestEvidence ?? "",
    intake.rootEvidence ?? "",
    intake.rootZoneMoisture ?? "",
    intake.additionalNotes ?? "",
    intake.recentChanges ?? "",
    intake.wateringFrequency ?? "",
    intake.humidity ?? "",
  ]
    .join(" ")
    .toLowerCase();
  const terms = new Set(text.split(/[^a-z0-9]+/).filter((t) => t.length > 3));

  let score = 0;
  const hits: string[] = [];
  const check = (haystack: string, weight: number, label: string) => {
    const hs = haystack.toLowerCase();
    for (const term of terms) {
      if (hs.includes(term)) {
        score += weight;
        hits.push(`${label} mentions "${term}"`);
      }
    }
  };
  check(profile.name, 5, "Condition name");
  check(profile.observableSigns.join(" "), 2, "Observable signs");
  check(profile.symptomLocations.join(" "), 3, "Symptom location");
  check(profile.specificHosts.join(" "), 2, "Host plants");
  check(profile.favorableConditions.join(" "), 1, "Favorable conditions");
  return { score, hits: [...new Set(hits)].slice(0, 4) };
}

export function fallbackDiagnosis(intake: IntakeData): DiagnosisResult {
  if (isObservationOnlyReport(intake)) return observationFirst(intake, false, false);
  const candidates = shortlistCandidates(intake, 60);
  const scored = candidates
    .map((profile) => ({ profile, ...keywordScore(profile, intake) }))
    .filter((e) => e.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, 3);

  if (scored.length === 0) {
    return {
      diagnoses: [],
      followUpQuestions: [
        "Can you describe the exact color and pattern of the damage (spots, yellowing, wilting, holes)?",
        "Do you see any insects, webbing, sticky residue, or powdery coating on the plant?",
        "Has anything changed recently — watering, fertilizer, location, or weather?",
      ],
      evidenceSummary:
        "The description did not match any condition in the library strongly enough to rank causes. The AI diagnosis service is also currently unavailable, so only library matching was possible.",
      insufficientEvidence: true,
      insufficientEvidenceReason:
        "No library conditions matched the described symptoms well enough for a responsible ranking.",
      isolationRequired: false,
      professionalConsultRequired: false,
      labTestingRequired: false,
      aiGrounded: false,
      safetyNotice: null,
      imageAnalysisIncluded: false,
    };
  }

  const maxScore = scored[0].score;
  const diagnoses: DiagnosisEntry[] = scored.map((entry) => {
    const rel = entry.score / maxScore;
    // Fallback confidence is deliberately conservative
    const high = Math.min(60, Math.round(rel * 60));
    const low = Math.max(5, high - 25);
    return profileToEntry(entry.profile, low, high, entry.hits, [
      "Ranking is keyword-based (AI unavailable) — treat as a starting point, not a confirmed diagnosis.",
    ]);
  });

  return {
    diagnoses,
    followUpQuestions: [
      "Does the damage appear on new growth, old growth, or both?",
      "Can you check the undersides of leaves for insects, webbing, or eggs?",
    ],
    evidenceSummary:
      "AI diagnosis was unavailable, so these matches were ranked by symptom keyword overlap against the validated condition library. Confidence is capped accordingly.",
    insufficientEvidence: false,
    isolationRequired: diagnoses.some((d) => /viral|bacterial/.test(d.category)),
    professionalConsultRequired: false,
    labTestingRequired: diagnoses.some((d) => /viral/.test(d.category)),
    aiGrounded: false,
    safetyNotice:
      "This result was produced without AI analysis. Re-run the diagnosis later for a more thorough evaluation.",
    imageAnalysisIncluded: false,
  };
}

function profileToEntry(
  profile: PlantProblemProfile,
  low: number,
  high: number,
  evidenceFor: string[],
  evidenceAgainst: string[],
): DiagnosisEntry {
  return {
    conditionId: profile.id,
    conditionName: profile.name,
    category: profile.category,
    confidenceLow: low,
    confidenceHigh: high,
    evidenceFor,
    evidenceAgainst,
    lookalikesRuledOut: profile.lookalikes.map(
      (l) => `${l.condition}: ${l.differentiator}`,
    ),
    avoid: profile.avoid,
    immediateActions: profile.immediateActions,
    sevenDayPlan: profile.treatments.map((t) => `${t.situation}: ${t.treatment}`),
    monitoringThresholds: profile.monitoringThresholds,
    preventionTips: profile.prevention,
    escalationCriteria: profile.escalationCriteria,
    recoveryTimeline: profile.recoveryTimeline,
    sources: profile.sources.map((s) => `${s.label} — ${s.url}`),
  };
}

// ---------- AI structured output schema ----------

const aiResponseSchema = z.object({
  diagnoses: z
    .array(
      z.object({
        conditionId: z.string(),
        confidenceLow: z.number().int().min(0).max(100),
        confidenceHigh: z.number().int().min(0).max(100),
        evidenceFor: z.array(z.string()),
        evidenceAgainst: z.array(z.string()),
        lookalikesRuledOut: z.array(z.string()),
        tailoredImmediateActions: z.array(z.string()),
        tailoredSevenDayPlan: z.array(z.string()),
      }),
    )
    .max(4),
  followUpQuestions: z.array(z.string()).max(5),
  evidenceSummary: z.string(),
  insufficientEvidence: z.boolean(),
  insufficientEvidenceReason: z.string().nullable(),
  isolationRequired: z.boolean(),
  professionalConsultRequired: z.boolean(),
  labTestingRequired: z.boolean(),
  safetyNotice: z.string().nullable(),
});

const AI_JSON_SCHEMA = {
  type: "object",
  additionalProperties: false,
  properties: {
    diagnoses: {
      type: "array",
      items: {
        type: "object",
        additionalProperties: false,
        properties: {
          conditionId: { type: "string" },
          confidenceLow: { type: "integer" },
          confidenceHigh: { type: "integer" },
          evidenceFor: { type: "array", items: { type: "string" } },
          evidenceAgainst: { type: "array", items: { type: "string" } },
          lookalikesRuledOut: { type: "array", items: { type: "string" } },
          tailoredImmediateActions: { type: "array", items: { type: "string" } },
          tailoredSevenDayPlan: { type: "array", items: { type: "string" } },
        },
        required: [
          "conditionId",
          "confidenceLow",
          "confidenceHigh",
          "evidenceFor",
          "evidenceAgainst",
          "lookalikesRuledOut",
          "tailoredImmediateActions",
          "tailoredSevenDayPlan",
        ],
      },
    },
    followUpQuestions: { type: "array", items: { type: "string" } },
    evidenceSummary: { type: "string" },
    insufficientEvidence: { type: "boolean" },
    insufficientEvidenceReason: { type: ["string", "null"] },
    isolationRequired: { type: "boolean" },
    professionalConsultRequired: { type: "boolean" },
    labTestingRequired: { type: "boolean" },
    safetyNotice: { type: ["string", "null"] },
  },
  required: [
    "diagnoses",
    "followUpQuestions",
    "evidenceSummary",
    "insufficientEvidence",
    "insufficientEvidenceReason",
    "isolationRequired",
    "professionalConsultRequired",
    "labTestingRequired",
    "safetyNotice",
  ],
} as const;

export const PLANT_DOCTOR_MODEL = "gpt-5.5";
export const PLANT_DOCTOR_REASONING_EFFORT = "low" as const;

// Retry only transient provider failures; malformed model output and invalid requests
// cannot be fixed by resubmission. The final library response stays explicitly non-AI.
export function isTransientProviderError(error: unknown): boolean {
  const status = (error as { status?: number })?.status;
  return status === 408 || status === 429 || (typeof status === "number" && status >= 500 && status < 600)
    || (error instanceof Error && /(?:timeout|timed out|ECONNRESET|ETIMEDOUT|ECONNREFUSED)/i.test(error.message));
}

function candidateSummary(profiles: PlantProblemProfile[]): string {
  return profiles
    .map(
      (p) =>
        `- id: ${p.id} | ${p.name} [${p.category}] | hosts: ${p.specificHosts.slice(0, 4).join(", ")} | signs: ${p.observableSigns.slice(0, 2).join(" ")} | lookalikes: ${p.lookalikes.map((l) => l.condition).join(", ")}`,
    )
    .join("\n");
}

function intakeSummary(intake: IntakeData): string {
  const lines: string[] = [];
  const add = (label: string, value?: string) => {
    if (value && value.trim()) lines.push(`${label}: ${value.trim()}`);
  };
  add("Plant species", intake.species);
  add("Plant group", intake.plantGroup);
  add("Visible symptoms", intake.symptoms?.join(", "));
  add("Common name", intake.commonName);
  add("Growth stage", intake.growthStage);
  add("Setting", intake.setting);
  add("Growing medium", intake.growingMedium);
  add("Region/climate", intake.region);
  add("Symptom location", intake.symptomLocation);
  add("Symptom onset", intake.symptomOnset);
  add("Progression", intake.symptomProgression);
  add("Watering frequency", intake.wateringFrequency);
  add("Root-zone moisture", intake.rootZoneMoisture);
  add("Drainage", intake.drainageQuality);
  add("pH", intake.ph);
  add("EC/fertility", intake.ec);
  add("Nutrients/fertilizer", intake.nutrients);
  add("Temperature", intake.temperature);
  add("Humidity", intake.humidity);
  add("Light source", intake.lightSource);
  add("Light hours", intake.lightHours);
  add("Airflow", intake.airflow);
  add("Recent changes", intake.recentChanges);
  add("Pest evidence", intake.pestEvidence);
  add("Root evidence", intake.rootEvidence);
  add("Prior treatments", intake.priorTreatments);
  add("Additional notes", intake.additionalNotes);
  return lines.join("\n");
}

const SYSTEM_PROMPT = `You are Plant Doctor, a rigorous plant-health diagnostician. You diagnose ONLY from the provided candidate condition list — every diagnosis you return MUST use a conditionId copied exactly from the candidates. Never invent conditions.

Rules:
1. Rank at most 4 candidate conditions. Confidence is a RANGE (low-high, 0-100). Be honest: wide ranges for uncertain cases. Never return a range implying certainty (high > 90) unless evidence is overwhelming and pathognomonic.
2. For each diagnosis provide concrete evidenceFor (observations from the grower's report that match) and evidenceAgainst (observations that don't fit or are missing). If a key differentiating observation was NOT reported, list it in evidenceAgainst as "not yet checked: ...".
3. Differentiate look-alikes explicitly: the lookalikesRuledOut field is displayed as neutral verification checks. State what is ruled out only if reported observations actually exclude it. Otherwise state that it remains possible and what to check next.
4. tailoredImmediateActions and tailoredSevenDayPlan must be adapted to THIS grower's plant, setting, and stated constraints — not generic copies. 3-6 items each, concrete and actionable with day-by-day structure in the seven-day plan.
5. If the evidence cannot responsibly support any ranking, set insufficientEvidence=true, give the reason, return an empty diagnoses array, and ask up to 5 sharply targeted followUpQuestions that would most reduce uncertainty. Unknown history/onset is unknown, never evidence for a condition. Healthy leaves and stable natural variegation are not nutrient deficiency: never prescribe fertilizer, flushing, pesticides or other treatments without independent signs. Prefer observation-first with empty diagnoses for a plausibly healthy plant.
6. Even when you CAN rank, include 1-3 followUpQuestions if answers would meaningfully change the ranking.
7. Set isolationRequired=true for contagious pests/diseases that spread to nearby plants. Set labTestingRequired=true when only a lab test can confirm (most viral and some bacterial/soil issues). Set professionalConsultRequired=true for valuable trees, suspected regulated diseases, or structural hazards.
8. safetyNotice: include when treatments involve pesticides/fungicides (label-following reminder, pollinator cautions) or edible crops (pre-harvest intervals); otherwise null.
9. If a photo is provided, first verify it plausibly shows a plant. Weigh visible symptoms in your evidence. If the photo does not show a plant or is too unclear to use, say so in evidenceSummary and diagnose from text only.`;

export async function aiDiagnosis(
  intake: IntakeData,
  imageBuffer: Buffer | null,
  imageMimeType: string | null,
  followUpContext: string | null,
): Promise<DiagnosisResult> {
  const candidates = shortlistCandidates(intake, 20);

  const userContent: Array<
    | { type: "input_text"; text: string }
    | { type: "input_image"; image_url: string; detail: "auto" }
  > = [
    {
      type: "input_text",
      text: `GROWER REPORT:\n${intakeSummary(intake)}\n${
        followUpContext ? `\nPRIOR CONTEXT (follow-up):\n${followUpContext}\n` : ""
      }\nCANDIDATE CONDITIONS (diagnose ONLY from these ids):\n${candidateSummary(candidates)}`,
    },
  ];

  if (imageBuffer && imageMimeType) {
    userContent.push({
      type: "input_image",
      image_url: `data:${imageMimeType};base64,${imageBuffer.toString("base64")}`,
      detail: "auto",
    });
  }

  const response = await openai.responses.create({
    model: PLANT_DOCTOR_MODEL,
    reasoning: { effort: PLANT_DOCTOR_REASONING_EFFORT },
    instructions: SYSTEM_PROMPT,
    input: [{ role: "user", content: userContent }],
    text: {
      format: {
        type: "json_schema",
        name: "plant_doctor_diagnosis",
        strict: true,
        schema: AI_JSON_SCHEMA as unknown as Record<string, unknown>,
      },
    },
    max_output_tokens: 8192,
  }, { timeout: 45000, maxRetries: 0 });

  const raw = response.output_text;
  const parsed = aiResponseSchema.parse(JSON.parse(raw));

  // Ground every diagnosis against the library; drop hallucinated ids.
  const diagnoses: DiagnosisEntry[] = [];
  for (const d of parsed.diagnoses.slice(0, 3)) {
    const profile = getProfileById(d.conditionId);
    if (!profile || !candidates.some((candidate) => candidate.id === d.conditionId)) continue; // only shortlist ids are grounded
    const low = Math.min(d.confidenceLow, d.confidenceHigh);
    const high = Math.max(d.confidenceLow, d.confidenceHigh);
    diagnoses.push({
      conditionId: profile.id,
      conditionName: profile.name,
      category: profile.category,
      confidenceLow: low,
      confidenceHigh: high,
      evidenceFor: d.evidenceFor,
      evidenceAgainst: d.evidenceAgainst,
      lookalikesRuledOut: d.lookalikesRuledOut,
      avoid: profile.avoid,
      immediateActions:
        d.tailoredImmediateActions.length >= 2
          ? d.tailoredImmediateActions
          : profile.immediateActions,
      sevenDayPlan:
        d.tailoredSevenDayPlan.length >= 2
          ? d.tailoredSevenDayPlan
          : profile.treatments.map((t) => `${t.situation}: ${t.treatment}`),
      monitoringThresholds: profile.monitoringThresholds,
      preventionTips: profile.prevention,
      escalationCriteria: profile.escalationCriteria,
      recoveryTimeline: profile.recoveryTimeline,
      sources: profile.sources.map((s) => `${s.label} — ${s.url}`),
    });
  }

  const insufficientEvidence =
    parsed.insufficientEvidence || diagnoses.length === 0;

  const notes = [intake.additionalNotes, intake.pestEvidence, intake.rootEvidence, intake.symptomProgression].filter(Boolean).join(" ");
  const ambiguousSymptoms = !intake.symptoms?.length || intake.symptoms.every(s =>
    /no obvious|normal variation|healthy|yellowing or pale leaves/i.test(s));
  const normalVariegationInModel = /\b(?:normal|natural|typical) variegation\b/i.test(parsed.evidenceSummary);
  // A grower's "looks healthy" report cannot override independent symptoms seen by
  // the model in a photograph. In photo cases, require model confirmation of normal
  // variation before replacing even a speculative diagnosis with observation-first.
  const independentInjury = POSITIVE_DAMAGE.test(parsed.evidenceSummary) ||
    parsed.diagnoses.some(d => d.evidenceFor.some(sign => POSITIVE_DAMAGE.test(sign)));
  if (!independentInjury &&
    ((isObservationOnlyReport(intake) && (!imageBuffer || normalVariegationInModel)) ||
      (normalVariegationInModel && !POSITIVE_DAMAGE.test(notes) && ambiguousSymptoms)) &&
    !/photo (?:does not|doesn't) show a plant|photo is too unclear|image (?:does not|doesn't) show a plant|image is too unclear/i.test(parsed.evidenceSummary)) {
    return observationFirst(intake, true, Boolean(imageBuffer), parsed.evidenceSummary,
      Boolean(imageBuffer) && normalVariegationInModel);
  }

  return {
    diagnoses: insufficientEvidence ? [] : diagnoses,
    followUpQuestions: parsed.followUpQuestions,
    evidenceSummary: parsed.evidenceSummary,
    insufficientEvidence,
    insufficientEvidenceReason: insufficientEvidence
      ? (parsed.insufficientEvidenceReason ??
        "The reported evidence did not support a responsible diagnosis ranking.")
      : null,
    isolationRequired: parsed.isolationRequired,
    professionalConsultRequired: parsed.professionalConsultRequired,
    labTestingRequired: parsed.labTestingRequired,
    aiGrounded: true,
    safetyNotice: parsed.safetyNotice,
    imageAnalysisIncluded: Boolean(imageBuffer) && !/photo (?:does not|doesn't) show a plant|photo is too unclear|image (?:does not|doesn't) show a plant|image is too unclear/i.test(parsed.evidenceSummary),
  };
}

export async function diagnose(
  intake: IntakeData,
  imageBase64: string | null,
  imageMimeType: string | null,
  followUpContext: string | null,
): Promise<{ status: number; result: DiagnosisResult } | { status: 400; error: string }> {
  const sufficiency = assessEvidenceSufficiency(intake);
  if (!sufficiency.sufficient) {
    return {
      status: 200,
      result: {
        diagnoses: [],
        followUpQuestions: sufficiency.missing,
        evidenceSummary:
          "Not enough baseline information was provided to attempt a diagnosis.",
        insufficientEvidence: true,
        insufficientEvidenceReason:
          "Required intake fields are missing — please answer the follow-up questions.",
        isolationRequired: false,
        professionalConsultRequired: false,
        labTestingRequired: false,
        aiGrounded: false,
        safetyNotice: null,
        imageAnalysisIncluded: false,
      },
    };
  }

  let imageBuffer: Buffer | null = null;
  if (imageBase64 != null || imageMimeType != null) {
    if (!imageBase64 || !imageMimeType) {
      return { status: 400, error: "Provide both imageBase64 and imageMimeType for a photo." };
    }
    const validation = validateImage(imageBase64, imageMimeType);
    if (!validation.ok) {
      return { status: 400, error: validation.error };
    }
    imageBuffer = validation.buffer;
  }

  try {
    try {
      return { status: 200, result: await aiDiagnosis(intake, imageBuffer, imageMimeType, followUpContext) };
    } catch (err) {
      if (!isTransientProviderError(err)) throw err;
      logger.warn({ err }, "Plant Doctor provider temporarily unavailable; retrying once");
      await new Promise((resolve) => setTimeout(resolve, 500));
      return { status: 200, result: await aiDiagnosis(intake, imageBuffer, imageMimeType, followUpContext) };
    }
  } catch (err) {
    // AI unavailable or returned malformed output — deterministic fallback
    logger.warn({ err }, "Plant Doctor AI diagnosis failed, using library fallback");
    return { status: 200, result: fallbackDiagnosis(intake) };
  }
}
