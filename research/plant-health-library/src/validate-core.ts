import {
  plantProblemProfileSchema,
  MINIMUM_LIBRARY_SIZE,
  type PlantProblemProfile,
} from "./schema";

export interface LibraryValidationResult {
  ok: boolean;
  totalProfiles: number;
  errors: string[];
}

/**
 * Validates the entire library:
 * - every profile passes the strict schema (no placeholders, no empty lists)
 * - all ids are unique
 * - the library holds at least MINIMUM_LIBRARY_SIZE complete profiles
 */
export function validateLibrary(
  profiles: PlantProblemProfile[],
): LibraryValidationResult {
  const errors: string[] = [];
  const seenIds = new Set<string>();
  const seenNames = new Set<string>();

  for (const profile of profiles) {
    const parsed = plantProblemProfileSchema.safeParse(profile);
    if (!parsed.success) {
      const issues = parsed.error.issues
        .map((i) => `${i.path.join(".")}: ${i.message}`)
        .join("; ");
      errors.push(`Profile "${profile?.id ?? "<missing id>"}": ${issues}`);
      continue;
    }
    if (seenIds.has(profile.id)) {
      errors.push(`Duplicate profile id: ${profile.id}`);
    }
    seenIds.add(profile.id);
    const nameKey = profile.name.toLowerCase().trim();
    if (seenNames.has(nameKey)) {
      errors.push(`Duplicate profile name: ${profile.name}`);
    }
    seenNames.add(nameKey);
  }

  if (profiles.length < MINIMUM_LIBRARY_SIZE) {
    errors.push(
      `Library has ${profiles.length} profiles but requires at least ${MINIMUM_LIBRARY_SIZE}.`,
    );
  }

  return {
    ok: errors.length === 0,
    totalProfiles: profiles.length,
    errors,
  };
}
