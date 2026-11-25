import type { PlantProblemProfile, ConditionCategory } from "./schema";
import { nutrientDeficiencyProfiles } from "./profiles/nutrient-deficiencies";
import { nutrientToxicityPhProfiles } from "./profiles/nutrient-toxicity-ph";
import { fungalDiseaseProfiles } from "./profiles/fungal-diseases";
import { bacterialViralProfiles } from "./profiles/bacterial-viral";
import { insectPestProfiles } from "./profiles/insect-pests";
import { miteNematodeProfiles } from "./profiles/mites-nematodes";
import { environmentalProfiles } from "./profiles/environmental";

export const allProfiles: PlantProblemProfile[] = [
  ...nutrientDeficiencyProfiles,
  ...nutrientToxicityPhProfiles,
  ...fungalDiseaseProfiles,
  ...bacterialViralProfiles,
  ...insectPestProfiles,
  ...miteNematodeProfiles,
  ...environmentalProfiles,
];

export function profilesByCategory(
  category: ConditionCategory,
): PlantProblemProfile[] {
  return allProfiles.filter((p) => p.category === category);
}

export function getProfileById(id: string): PlantProblemProfile | undefined {
  return allProfiles.find((p) => p.id === id);
}

/**
 * Simple relevance search across name, hosts, signs, and locations.
 * Returns profiles sorted by match score (best first).
 */
export function searchProfiles(
  query: string,
  limit = 25,
): PlantProblemProfile[] {
  const terms = query
    .toLowerCase()
    .split(/\s+/)
    .filter((t) => t.length > 2);
  if (terms.length === 0) return [];

  const scored = allProfiles
    .map((profile) => {
      const haystackName = profile.name.toLowerCase();
      const haystackHosts = profile.specificHosts.join(" ").toLowerCase();
      const haystackSigns = profile.observableSigns.join(" ").toLowerCase();
      const haystackLocations = profile.symptomLocations
        .join(" ")
        .toLowerCase();
      const haystackCategory = profile.category.toLowerCase();

      let score = 0;
      for (const term of terms) {
        if (haystackName.includes(term)) score += 10;
        if (haystackCategory.includes(term)) score += 4;
        if (haystackLocations.includes(term)) score += 3;
        if (haystackSigns.includes(term)) score += 2;
        if (haystackHosts.includes(term)) score += 1;
      }
      return { profile, score };
    })
    .filter((entry) => entry.score > 0);

  scored.sort((a, b) => b.score - a.score);
  return scored.slice(0, limit).map((entry) => entry.profile);
}
