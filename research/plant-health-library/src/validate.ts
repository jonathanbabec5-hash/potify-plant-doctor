/**
 * CLI validation entry point. Exits non-zero if the library is invalid
 * or holds fewer than the minimum required complete profiles.
 *
 * Run: pnpm --filter @workspace/plant-health-library run validate
 */
import { allProfiles } from "./library";
import { validateLibrary } from "./validate-core";

const result = validateLibrary(allProfiles);

if (!result.ok) {
  console.error(`Plant health library validation FAILED (${result.totalProfiles} profiles):`);
  for (const err of result.errors.slice(0, 50)) {
    console.error(`  - ${err}`);
  }
  if (result.errors.length > 50) {
    console.error(`  ... and ${result.errors.length - 50} more errors`);
  }
  process.exit(1);
}

console.log(
  `Plant health library OK: ${result.totalProfiles} complete profiles validated.`,
);
