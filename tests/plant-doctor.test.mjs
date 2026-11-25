import assert from "node:assert/strict";
import test from "node:test";

import { CARE_PROFILE_COUNT, diagnosePlant } from "../src/diagnosis.ts";

const baseline = {
  plantGroup: "indoor-foliage",
  stage: "active",
  symptoms: ["yellowing"],
  area: "whole",
  medium: "potting-soil",
  moisture: "unknown",
  drainage: "unknown",
  ph: "unknown",
  temperature: "comfortable",
  humidity: "balanced",
  light: "balanced",
  recentChange: "none",
  pestEvidence: "none",
  rootEvidence: "not-seen",
};

test("Plant Doctor carries a broad care library", () => {
  assert.ok(CARE_PROFILE_COUNT >= 35);
});

test("ranks root rot above ordinary watering stress when root evidence is strong", () => {
  const [first] = diagnosePlant({
    ...baseline,
    symptoms: ["drooping", "yellowing", "dark-soft"],
    area: "roots",
    moisture: "stays-wet",
    drainage: "slow",
    rootEvidence: "odor",
  });
  assert.equal(first.id, "root-rot");
  assert.equal(first.urgency, "Isolate");
});

test("recognizes the combined webbing and stippling pattern", () => {
  const [first] = diagnosePlant({
    ...baseline,
    symptoms: ["webbing", "stippling"],
    area: "patches",
    pestEvidence: "webbing",
  });
  assert.equal(first.id, "spider-mites");
  assert.equal(first.urgency, "Isolate");
});

test("recognizes powdery mildew and adds edible-crop precautions", () => {
  const [first] = diagnosePlant({
    ...baseline,
    plantGroup: "edible",
    symptoms: ["white-powder"],
    area: "patches",
    humidity: "humid",
  });
  assert.equal(first.id, "powdery-mildew");
  assert.ok(first.actions.some((action) => action.includes("harvest interval")));
});

test("recognizes abrupt intense-light injury", () => {
  const [first] = diagnosePlant({
    ...baseline,
    symptoms: ["bleached", "curling-up"],
    area: "upper",
    light: "intense",
    recentChange: "more-light",
  });
  assert.equal(first.id, "light-burn");
});
