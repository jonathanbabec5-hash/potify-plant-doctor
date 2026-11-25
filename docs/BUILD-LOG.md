# November 25, 2026 · Plant Doctor

**Question.** Turn a grower's observations into a short list of causes and a sensible next check.

**Source and change.** potify-launch-room at `6aabc005854f87b5c3bc9065cbc62383e1b58f83`. Diagnostic rules and regression fixtures. Care data and five original project art files come from the November 25 recovery snapshot. The original assessment UI now runs as a standalone Vite application built against the same diagnosis module. A separate profile inventory is available with node examples/list-profiles.mjs.

**Observed result.** Five diagnostic cases passed. A local Chromium session selected observations in the original form and rendered a ranked care plan. The build compiled the recovered React screen.

```sh
node --test tests/plant-doctor.test.mjs
npm run build
```

**Next acceptance check.** A contributor can change a fixture and reproduce how the ranking changes, including ambiguous symptoms.

**Owner and decision.** Chance owns the public release and approves campaign copy. The ruleset covers 37 authored profiles. Standalone Replit service, private notes and independent field validation are outstanding.

This dated record describes the developer package. Verify remote commit and tree in the publication receipt before announcing a GitHub release.
