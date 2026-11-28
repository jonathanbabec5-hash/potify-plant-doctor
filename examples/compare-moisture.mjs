import { diagnosePlant } from "../src/diagnosis.ts";

// A fictional indoor foliage plant. Keep every observation except moisture fixed.
const plant = {
  plantGroup: "indoor-foliage",
  stage: "active",
  symptoms: ["yellowing"],
  area: "whole",
  medium: "potting-soil",
  drainage: "unknown",
  ph: "unknown",
  temperature: "comfortable",
  humidity: "balanced",
  light: "balanced",
  recentChange: "none",
  pestEvidence: "none",
  rootEvidence: "not-seen",
};

for (const moisture of ["unknown", "stays-wet"]) {
  const [first] = diagnosePlant({ ...plant, moisture });
  console.log([
    `Moisture: ${moisture}`,
    `First suggestion: ${first.title}`,
    `Pattern strength: ${first.strength}`,
    `First check: ${first.checks[0]}`,
    "",
  ].join("\n"));
}
