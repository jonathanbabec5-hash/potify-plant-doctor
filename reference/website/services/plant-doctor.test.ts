import { describe, it, expect, vi } from "vitest";
import { openai } from "@workspace/integrations-openai-ai-server";
import {
  validateImage,
  assessEvidenceSufficiency,
  shortlistCandidates,
  fallbackDiagnosis,
  isTransientProviderError,
  PLANT_DOCTOR_MODEL,
  PLANT_DOCTOR_REASONING_EFFORT,
  diagnose,
  type IntakeData,
} from "./plant-doctor";

const baseIntake: IntakeData = {
  species: "Tomato",
  symptomLocation: "lower/older leaves",
  symptomOnset: "one week ago",
};

describe("validateImage", () => {
  const tinyPngBase64 =
    "iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPhfDwAChwGA60e6kgAAAABJRU5ErkJggg==";

  it("accepts a real PNG", () => {
    const result = validateImage(tinyPngBase64, "image/png");
    expect(result.ok).toBe(true);
  });

  it("rejects a PNG declared as JPEG (magic byte mismatch)", () => {
    const result = validateImage(tinyPngBase64, "image/jpeg");
    expect(result.ok).toBe(false);
    if (!result.ok) expect(result.error).toMatch(/do not match/i);
  });

  it("rejects unsupported mime types", () => {
    const result = validateImage(tinyPngBase64, "image/gif");
    expect(result.ok).toBe(false);
  });

  it("rejects oversized images", () => {
    // 6MB of zeros, base64-encoded, declared as PNG with valid magic bytes prefix
    const pngHeader = Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]);
    const big = Buffer.concat([pngHeader, Buffer.alloc(6 * 1024 * 1024)]);
    const result = validateImage(big.toString("base64"), "image/png");
    expect(result.ok).toBe(false);
    if (!result.ok) expect(result.error).toMatch(/5MB/);
  });

  it("rejects empty data", () => {
    const result = validateImage("", "image/png");
    expect(result.ok).toBe(false);
    if (!result.ok) expect(result.error).toMatch(/empty/i);
  });

  it("gives HEIC conversion guidance", () => {
    const result = validateImage(tinyPngBase64, "image/heic");
    expect(result.ok).toBe(false);
    if (!result.ok) expect(result.error).toMatch(/HEIC.*convert/i);
  });

  it("rejects malformed base64 instead of decoding permissively", () => {
    expect(validateImage("%%%invalid", "image/png").ok).toBe(false);
  });

  it("rejects a truncated image with a valid PNG header", () => {
    const header = Buffer.from("89504e470d0a1a0a", "hex");
    expect(validateImage(header.toString("base64"), "image/png").ok).toBe(false);
  });
});

describe("assessEvidenceSufficiency", () => {
  it("accepts a complete minimal intake", () => {
    expect(assessEvidenceSufficiency(baseIntake).sufficient).toBe(true);
  });

  it("flags missing species", () => {
    const r = assessEvidenceSufficiency({ ...baseIntake, species: "" });
    expect(r.sufficient).toBe(false);
    expect(r.missing.some((m) => m.toLowerCase().includes("plant"))).toBe(true);
  });

  it("flags missing symptom location and onset", () => {
    const r = assessEvidenceSufficiency({
      species: "Rose",
      symptomLocation: "",
      symptomOnset: "",
    });
    expect(r.sufficient).toBe(false);
    expect(r.missing.length).toBe(1);
  });

  it("accepts unknown history without inventing a timeline", () => {
    expect(assessEvidenceSufficiency({ ...baseIntake, symptomOnset: "Unknown" }).sufficient).toBe(true);
  });
});

describe("shortlistCandidates", () => {
  it("returns a non-empty diverse candidate list even for vague intake", () => {
    const candidates = shortlistCandidates({
      species: "Ficus",
      symptomLocation: "leaves",
      symptomOnset: "recently",
    });
    expect(candidates.length).toBeGreaterThanOrEqual(10);
  });

  it("surfaces relevant conditions for a specific symptom description", () => {
    const candidates = shortlistCandidates({
      species: "Tomato",
      symptomLocation: "lower leaves",
      symptomOnset: "two weeks ago",
      additionalNotes:
        "concentric ring spots with yellow halos spreading upward, blight-like",
    });
    expect(
      candidates
        .slice(0, 15)
        .some((p) => /blight|septoria|leaf spot/i.test(p.name)),
    ).toBe(true);
  });
});

describe("fallbackDiagnosis (AI-unavailable path)", () => {
  it("does not recommend treatment for a reported healthy variegated plant", () => {
    const result = fallbackDiagnosis({
      species: "Golden Pothos", symptomLocation: "Not sure / checking leaf color",
      symptomOnset: "Unknown", symptoms: ["No obvious damage / checking normal variation"],
      additionalNotes: "Normal variegation; no visible damage. History unknown.",
    });
    expect(result).toMatchObject({ aiGrounded: false, insufficientEvidence: true, diagnoses: [] });
    expect(result.evidenceSummary).toMatch(/AI analysis was unavailable/);
    expect(result.followUpQuestions.length).toBeGreaterThan(0);
  });
  it("is honestly labeled non-AI with capped confidence", () => {
    const result = fallbackDiagnosis({
      species: "Cucumber",
      symptomLocation: "upper leaf surfaces",
      symptomOnset: "this week",
      additionalNotes: "white powdery coating on leaves, spreading",
    });
    expect(result.aiGrounded).toBe(false);
    expect(result.diagnoses.length).toBeGreaterThan(0);
    for (const d of result.diagnoses) {
      expect(d.confidenceHigh).toBeLessThanOrEqual(60);
      expect(d.confidenceLow).toBeLessThanOrEqual(d.confidenceHigh);
      expect(d.sources.length).toBeGreaterThan(0);
      expect(d.immediateActions.length).toBeGreaterThanOrEqual(2);
      expect(d.sevenDayPlan.length).toBeGreaterThanOrEqual(2);
      expect(d.lookalikesRuledOut.length).toBeGreaterThanOrEqual(1);
    }
  });

  it("finds powdery mildew for the classic description", () => {
    const result = fallbackDiagnosis({
      species: "Cucumber",
      symptomLocation: "leaves",
      symptomOnset: "5 days ago",
      additionalNotes: "white powdery mildew coating spots on leaves",
    });
    expect(
      result.diagnoses.some((d) => /powdery mildew/i.test(d.conditionName)),
    ).toBe(true);
  });

  it("returns insufficient-evidence with follow-up questions when nothing matches", () => {
    const result = fallbackDiagnosis({
      species: "Xq",
      symptomLocation: "zzz",
      symptomOnset: "qqq",
    });
    expect(result.insufficientEvidence).toBe(true);
    expect(result.diagnoses).toHaveLength(0);
    expect(result.followUpQuestions.length).toBeGreaterThanOrEqual(3);
  });

  it("differentiates spider mites from nutrient issues on stippling+webbing evidence", () => {
    const result = fallbackDiagnosis({
      species: "Houseplant palm",
      symptomLocation: "leaf undersides",
      symptomOnset: "two weeks",
      pestEvidence: "fine webbing between leaves, tiny stippling speckles",
      humidity: "very dry indoor air",
    });
    expect(result.diagnoses.length).toBeGreaterThan(0);
    expect(result.diagnoses.some((d) => /mite/i.test(d.conditionName))).toBe(true);
  });
});

describe("diagnose request validation", () => {
  it("does not suppress model-observed photo injury when the grower reported no obvious damage (mock response)", async () => {
    const intake: IntakeData = {
      species: "Golden Pothos", symptomLocation: "Leaves (Lower/Old Growth)",
      symptomOnset: "Unknown", symptoms: ["No obvious damage / checking normal variation"],
      additionalNotes: "I thought this was normal variegation; no visible damage noticed.",
    };
    const profile = shortlistCandidates(intake, 20)[0];
    const create = vi.spyOn(openai.responses, "create").mockResolvedValueOnce({
      output_text: JSON.stringify({
        diagnoses: [{
          conditionId: profile.id, confidenceLow: 25, confidenceHigh: 50,
          evidenceFor: ["Brown lesions are visible in the supplied photo"],
          evidenceAgainst: ["History is unknown"], lookalikesRuledOut: [],
          tailoredImmediateActions: ["Inspect affected leaves"],
          tailoredSevenDayPlan: ["Day 1: document new damage"],
        }],
        evidenceSummary: "The photo shows normal variegation as well as brown lesions distinct from the natural markings.",
        followUpQuestions: ["Is damage spreading?"], insufficientEvidence: false,
        insufficientEvidenceReason: null, isolationRequired: false,
        professionalConsultRequired: false, labTestingRequired: false, safetyNotice: null,
      }),
    } as never);
    try {
      const result = await diagnose(intake, "iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPhfDwAChwGA60e6kgAAAABJRU5ErkJggg==", "image/png", null);
      expect(result.status).toBe(200);
      if (!("result" in result)) throw new Error(result.error);
      expect(result.result).toMatchObject({
        aiGrounded: true, imageAnalysisIncluded: true,
        insufficientEvidence: false,
        diagnoses: [expect.objectContaining({ conditionId: profile.id })],
      });
      expect(result.result.evidenceSummary).not.toMatch(/photo appears consistent with normal variegation/i);
    } finally {
      create.mockRestore();
    }
  });

  it("does not claim a photo shows normal variation when only the intake says so (mock response)", async () => {
    const intake: IntakeData = {
      species: "Golden Pothos", symptomLocation: "Leaves (Lower/Old Growth)",
      symptomOnset: "Unknown", symptoms: ["No obvious damage / checking normal variation"],
      additionalNotes: "I thought this was normal variegation; no visible damage noticed.",
    };
    const create = vi.spyOn(openai.responses, "create").mockResolvedValueOnce({
      output_text: JSON.stringify({
        diagnoses: [], followUpQuestions: ["Are there visible changes?"],
        evidenceSummary: "The image shows leaf markings, but the pattern is uncertain.",
        insufficientEvidence: true, insufficientEvidenceReason: "Need more observations",
        isolationRequired: false, professionalConsultRequired: false,
        labTestingRequired: false, safetyNotice: null,
      }),
    } as never);
    try {
      const result = await diagnose(intake, "iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPhfDwAChwGA60e6kgAAAABJRU5ErkJggg==", "image/png", null);
      expect(result.status).toBe(200);
      if (!("result" in result)) throw new Error(result.error);
      expect(result.result).toMatchObject({
        aiGrounded: true, imageAnalysisIncluded: true, diagnoses: [],
        evidenceSummary: "The image shows leaf markings, but the pattern is uncertain.",
      });
      expect(result.result.evidenceSummary).not.toMatch(/photo appears consistent with normal variegation/i);
    } finally {
      create.mockRestore();
    }
  });

  it("overrides a model's speculative nitrogen diagnosis when it recognizes normal variegation with no separate injury (mock response)", async () => {
    const intake: IntakeData = {
      species: "Golden Pothos", symptomLocation: "Leaves (Lower/Old Growth)",
      symptomOnset: "Unknown", symptoms: ["Yellowing or pale leaves"],
      additionalNotes: "I do not know the plant's history or care routine.",
    };
    const profile = shortlistCandidates(intake, 20)[0];
    const create = vi.spyOn(openai.responses, "create").mockResolvedValueOnce({
      output_text: JSON.stringify({
        diagnoses: [{
          conditionId: profile.id, confidenceLow: 25, confidenceHigh: 65,
          evidenceFor: ["yellow leaves"], evidenceAgainst: ["unknown history"],
          lookalikesRuledOut: ["Variegation cannot yet be ruled out"],
          tailoredImmediateActions: ["Add fertilizer now"], tailoredSevenDayPlan: ["Day 1: flush"],
        }],
        evidenceSummary: "Leaves show normal variegation. No separate injury is established.",
        followUpQuestions: ["Has the color changed?"],
        insufficientEvidence: false, insufficientEvidenceReason: null,
        isolationRequired: false, professionalConsultRequired: false,
        labTestingRequired: false, safetyNotice: null,
      }),
    } as never);
    try {
      const result = await diagnose(intake, null, null, null);
      expect(result.status).toBe(200);
      if (!("result" in result)) throw new Error(result.error);
      expect(result.result).toMatchObject({ aiGrounded: true, insufficientEvidence: true, diagnoses: [] });
      expect(result.result.evidenceSummary).toMatch(/normal variegation/i);
      expect(result.result.followUpQuestions.length).toBeGreaterThan(0);
    } finally {
      create.mockRestore();
    }
  });

  it("sends a valid image and follow-up context to the provider without claiming image analysis (mock response)", async () => {
    const create = vi.spyOn(openai.responses, "create").mockResolvedValueOnce({
      output_text: JSON.stringify({
        diagnoses: [], followUpQuestions: ["Has this changed over time?"],
        evidenceSummary: "The image does not show a plant; diagnosis would need a genuine plant photo.",
        insufficientEvidence: true, insufficientEvidenceReason: "Monitor first.",
        isolationRequired: false, professionalConsultRequired: false,
        labTestingRequired: false, safetyNotice: null,
      }),
    } as never);
    try {
      const result = await diagnose(baseIntake, "iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPhfDwAChwGA60e6kgAAAABJRU5ErkJggg==", "image/png", "New observation: stable markings");
      expect(result.status).toBe(200);
      if (!("result" in result)) throw new Error(result.error);
      expect(result.result).toMatchObject({ aiGrounded: true, imageAnalysisIncluded: false, diagnoses: [] });
      expect(create).toHaveBeenCalledWith(expect.objectContaining({
        input: [expect.objectContaining({ content: expect.arrayContaining([
          expect.objectContaining({ type: "input_text", text: expect.stringContaining("New observation: stable markings") }),
          expect.objectContaining({ type: "input_image", image_url: expect.stringMatching(/^data:image\/png;base64,/) }),
        ]) })],
      }), expect.anything());
    } finally {
      create.mockRestore();
    }
  });
  it("requests the configured GPT-5.5 reasoning model with strict structured output", async () => {
    const create = vi.spyOn(openai.responses, "create").mockRejectedValueOnce(new Error("mocked provider outage"));
    try {
      await diagnose(baseIntake, null, null, null);
      expect(PLANT_DOCTOR_MODEL).toBe("gpt-5.5");
      expect(create).toHaveBeenCalledWith(expect.objectContaining({
        model: PLANT_DOCTOR_MODEL,
        reasoning: { effort: PLANT_DOCTOR_REASONING_EFFORT },
        text: expect.objectContaining({ format: expect.objectContaining({ type: "json_schema", strict: true }) }),
      }), expect.objectContaining({ timeout: 45000, maxRetries: 0 }));
    } finally {
      create.mockRestore();
    }
  });
  it("retries only transient provider errors once, then labels library fallback", async () => {
    const create = vi.spyOn(openai.responses, "create")
      .mockRejectedValueOnce(Object.assign(new Error("rate limited"), { status: 429 }))
      .mockRejectedValueOnce(new Error("timeout"));
    try {
      const outcome = await diagnose(baseIntake, null, null, null);
      expect(create).toHaveBeenCalledTimes(2);
      expect(outcome.status).toBe(200);
      if ("result" in outcome) expect(outcome.result.aiGrounded).toBe(false);
    } finally {
      create.mockRestore();
    }
  });

  it("does not retry a non-transient provider failure", async () => {
    const create = vi.spyOn(openai.responses, "create")
      .mockRejectedValueOnce(Object.assign(new Error("invalid input"), { status: 400 }));
    try {
      const outcome = await diagnose(baseIntake, null, null, null);
      expect(create).toHaveBeenCalledTimes(1);
      if ("result" in outcome) expect(outcome.result.aiGrounded).toBe(false);
    } finally {
      create.mockRestore();
    }
  });

  it("recognizes timeout and rate limits, not validation failures", () => {
    expect(isTransientProviderError(new Error("request timed out"))).toBe(true);
    expect(isTransientProviderError({ status: 429 })).toBe(true);
    expect(isTransientProviderError({ status: 400 })).toBe(false);
  });

  it("rejects a photo without its MIME type", async () => {
    const result = await diagnose(baseIntake, "abc", null, null);
    expect(result).toMatchObject({ status: 400 });
  });

  it("rejects a MIME type without a photo", async () => {
    const result = await diagnose(baseIntake, null, "image/png", null);
    expect(result).toMatchObject({ status: 400 });
  });

  it("returns follow-up questions for blank baseline evidence", async () => {
    const result = await diagnose({ ...baseIntake, species: "  " }, null, null, null);
    expect(result.status).toBe(200);
    if ("result" in result) expect(result.result.insufficientEvidence).toBe(true);
  });

  it("labels model failure as library-only and never fake AI success", async () => {
    const create = vi.spyOn(openai.responses, "create").mockRejectedValueOnce(new Error("model offline"));
    try {
      const result = await diagnose({
        ...baseIntake,
        additionalNotes: "white powdery coating on lower leaves",
      }, null, null, null);
      expect(result.status).toBe(200);
      if ("result" in result) {
        expect(result.result.aiGrounded).toBe(false);
        expect(result.result.imageAnalysisIncluded).toBe(false);
      }
    } finally {
      create.mockRestore();
    }
  });
});

describe.skipIf(!process.env.AI_INTEGRATIONS_OPENAI_API_KEY || !process.env.AI_INTEGRATIONS_OPENAI_BASE_URL)(
  "live grounded diagnoses",
  () => {
    it.each([
      ["general plant", { ...baseIntake, symptoms: ["Spots, lesions, or blotches"], additionalNotes: "Concentric brown ring spots with yellow halos on lower tomato leaves after wet weather." }],
      ["cannabis", { species: "Cannabis sativa", plantGroup: "Specialty cultivation", growthStage: "Flowering", symptomLocation: "Leaves (Lower/Old Growth)", symptomOnset: "Days (1-3 days)", symptoms: ["Yellowing or pale leaves"], rootZoneMoisture: "Wet or heavy", additionalNotes: "Lower leaves yellowing and drooping; growing in soil; root zone stays wet between watering." }],
    ])("returns a real AI-grounded result for %s", async (_name, intake) => {
      const result = await diagnose(intake, null, null, null);
      expect(result.status).toBe(200);
      if (!("result" in result)) throw new Error(result.error);
      expect(result.result.aiGrounded, "model failed and fell back to library matching").toBe(true);
      expect(result.result.evidenceSummary.length).toBeGreaterThan(10);
      expect(result.result.insufficientEvidence || result.result.diagnoses.length > 0).toBe(true);
      if (result.result.diagnoses.length) {
        expect(result.result.diagnoses[0].immediateActions.length).toBeGreaterThan(0);
      }
    }, 120000);
  },
);
