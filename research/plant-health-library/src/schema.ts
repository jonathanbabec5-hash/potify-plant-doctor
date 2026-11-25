import { z } from "zod";

/**
 * Plant Health Library — profile schema.
 *
 * Every profile must be COMPLETE: no empty arrays for required list fields,
 * no placeholder text, and at least one authoritative source with a real URL.
 * The validation script (validate.ts) enforces the 300+ count and rejects
 * incomplete records at build/test time.
 */

export const CONDITION_CATEGORIES = [
  "nutrient-deficiency",
  "nutrient-toxicity",
  "ph-ec-lockout",
  "watering-root-zone",
  "fungal-disease",
  "bacterial-disease",
  "viral-disease",
  "insect-pest",
  "mite-pest",
  "nematode-pest",
  "environmental-stress",
  "lighting-damage",
  "temperature-humidity",
  "physical-injury",
  "transplant-shock",
  "flowering-pollination",
  "lookalike-condition",
] as const;

export const PLANT_GROUPS = [
  "houseplants",
  "vegetable-garden",
  "ornamentals",
  "fruit-trees",
  "berries",
  "herbs",
  "trees-shrubs",
  "lawns-turf",
  "succulents-cacti",
  "specialty-cultivation",
] as const;

export const GROWTH_STAGES = [
  "seed-seedling",
  "vegetative",
  "flowering",
  "fruiting",
  "mature",
  "dormant",
  "all-stages",
] as const;

const nonEmptyString = z
  .string()
  .min(12, "Field must be a complete sentence, not a placeholder")
  .refine(
    (s) => !/\b(TODO|TBD|PLACEHOLDER|FIXME|XXX|lorem ipsum)\b/i.test(s),
    "Placeholder text is not allowed",
  );

const shortString = z
  .string()
  .min(3)
  .refine(
    (s) => !/\b(TODO|TBD|PLACEHOLDER|FIXME|XXX)\b/i.test(s),
    "Placeholder text is not allowed",
  );

export const sourceSchema = z.object({
  label: shortString,
  url: z
    .string()
    .url()
    .refine(
      (u) =>
        /\.(edu|gov|org)\b/.test(u) ||
        /extension|usda|ipm|epa|royal|rhs|agriculture|university/i.test(u),
      "Source must be an authoritative institution (USDA, university extension, IPM program, or equivalent)",
    ),
});

export const lookalikeSchema = z.object({
  condition: shortString,
  differentiator: nonEmptyString,
});

export const treatmentSchema = z.object({
  situation: shortString,
  treatment: nonEmptyString,
});

export const plantProblemProfileSchema = z.object({
  id: z
    .string()
    .regex(/^[a-z0-9-]+$/, "id must be kebab-case")
    .min(5),
  name: shortString,
  category: z.enum(CONDITION_CATEGORIES),
  affectedPlants: z.array(z.enum(PLANT_GROUPS)).min(1),
  specificHosts: z.array(shortString).min(1),
  growthStages: z.array(z.enum(GROWTH_STAGES)).min(1),
  symptomLocations: z.array(shortString).min(1),
  symptomProgression: nonEmptyString,
  observableSigns: z.array(nonEmptyString).min(2),
  favorableConditions: z.array(nonEmptyString).min(1),
  lookalikes: z.array(lookalikeSchema).min(1),
  immediateActions: z.array(nonEmptyString).min(2),
  treatments: z.array(treatmentSchema).min(2),
  avoid: z.array(nonEmptyString).min(1),
  recoveryTimeline: nonEmptyString,
  prevention: z.array(nonEmptyString).min(2),
  monitoringThresholds: z.array(nonEmptyString).min(1),
  escalationCriteria: z.array(nonEmptyString).min(1),
  sources: z.array(sourceSchema).min(1),
});

export type PlantProblemProfile = z.infer<typeof plantProblemProfileSchema>;
export type ConditionCategory = (typeof CONDITION_CATEGORIES)[number];
export type PlantGroup = (typeof PLANT_GROUPS)[number];
export type GrowthStage = (typeof GROWTH_STAGES)[number];
export type ProfileSource = z.infer<typeof sourceSchema>;
export type ProfileLookalike = z.infer<typeof lookalikeSchema>;
export type ProfileTreatment = z.infer<typeof treatmentSchema>;

export const MINIMUM_LIBRARY_SIZE = 300;
