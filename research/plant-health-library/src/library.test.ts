import { describe, it, expect } from "vitest";
import { allProfiles, searchProfiles, getProfileById, profilesByCategory } from "./library";
import { validateLibrary } from "./validate-core";
import { MINIMUM_LIBRARY_SIZE, plantProblemProfileSchema } from "./schema";

describe("plant health library", () => {
  it(`contains at least ${MINIMUM_LIBRARY_SIZE} profiles`, () => {
    expect(allProfiles.length).toBeGreaterThanOrEqual(MINIMUM_LIBRARY_SIZE);
  });

  it("passes full validation (schema, uniqueness, completeness)", () => {
    const result = validateLibrary(allProfiles);
    if (!result.ok) {
      console.error(result.errors.slice(0, 20));
    }
    expect(result.ok).toBe(true);
  });

  it("every profile has at least one authoritative source with a URL", () => {
    for (const p of allProfiles) {
      expect(p.sources.length).toBeGreaterThanOrEqual(1);
      for (const s of p.sources) {
        expect(s.url).toMatch(/^https?:\/\//);
      }
    }
  });

  it("every profile documents at least one look-alike with a differentiator", () => {
    for (const p of allProfiles) {
      expect(p.lookalikes.length).toBeGreaterThanOrEqual(1);
      for (const l of p.lookalikes) {
        expect(l.differentiator.length).toBeGreaterThanOrEqual(12);
      }
    }
  });

  it("rejects an incomplete profile", () => {
    const bad = {
      ...allProfiles[0],
      id: "bad-test-profile",
      name: "Bad Test Profile",
      observableSigns: [],
    };
    const parsed = plantProblemProfileSchema.safeParse(bad);
    expect(parsed.success).toBe(false);
  });

  it("rejects placeholder text", () => {
    const bad = {
      ...allProfiles[0],
      id: "todo-test-profile",
      name: "Placeholder Test Profile",
      symptomProgression: "TODO fill this in later with a real description",
    };
    const parsed = plantProblemProfileSchema.safeParse(bad);
    expect(parsed.success).toBe(false);
  });

  it("validateLibrary flags duplicate ids", () => {
    const dupes = [allProfiles[0], allProfiles[0], ...allProfiles.slice(1)];
    const result = validateLibrary(dupes);
    expect(result.ok).toBe(false);
    expect(result.errors.some((e) => e.includes("Duplicate"))).toBe(true);
  });

  it("validateLibrary fails below the minimum count", () => {
    const result = validateLibrary(allProfiles.slice(0, 10));
    expect(result.ok).toBe(false);
    expect(result.errors.some((e) => e.includes("requires at least"))).toBe(true);
  });

  it("searchProfiles finds spider mites from symptom keywords", () => {
    const results = searchProfiles("fine webbing stippling leaves mites");
    expect(results.length).toBeGreaterThan(0);
    expect(
      results.slice(0, 5).some((p) => p.name.toLowerCase().includes("mite")),
    ).toBe(true);
  });

  it("searchProfiles returns empty for nonsense", () => {
    expect(searchProfiles("zz")).toHaveLength(0);
  });

  it("getProfileById round-trips", () => {
    const first = allProfiles[0];
    expect(getProfileById(first.id)?.name).toBe(first.name);
    expect(getProfileById("does-not-exist")).toBeUndefined();
  });

  it("covers a broad set of categories", () => {
    const categories = new Set(allProfiles.map((p) => p.category));
    expect(categories.size).toBeGreaterThanOrEqual(10);
    // every declared category with profiles is retrievable
    for (const cat of categories) {
      expect(profilesByCategory(cat as never).length).toBeGreaterThan(0);
    }
  });
});
