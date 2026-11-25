# November 25, 2026 · Plant Doctor

**Question.** Turn a grower's observations into a short list of causes and a sensible next check.

**Source and change.** potify-launch-room at `6aabc005854f87b5c3bc9065cbc62383e1b58f83`. Diagnostic rules and regression fixtures. Care data and five original project art files come from the November 25 recovery snapshot. The original assessment UI now runs as a standalone Vite application built against the same diagnosis module. A separate profile inventory is available with node examples/list-profiles.mjs. Separately recovered the complete website plant-health-library and original website diagnostic service and UI component sources from potify-website main at b40b28683e548a04619f1e018814dd91aec1256d. Website service is shown as integration source; the public screening UI runs locally. The website validation script independently counted 313 complete entries at this revision, and all 12 original library regression tests passed. This checks structure, uniqueness and search behavior; it does not establish diagnostic accuracy.

**Observed result.** The standalone UI rendered a ranked care plan and its five original rule tests passed. The separate website library validated 313 records and passed all 12 original library tests.

```sh
node --test tests/plant-doctor.test.mjs
npm run build
npm run validate:library
npm run test:library
```

**Next acceptance check.** A contributor can change a fixture and reproduce how the ranking changes, including ambiguous symptoms.

**Owner and decision.** Chance owns the public release and approves campaign copy. Both rule libraries and the original website diagnosis code are recovered. Case records, private grow histories, photos, an independent accuracy study and parity with the standalone Replit project remain open.

This dated record describes the developer package. Verify remote commit and tree in the publication receipt before announcing a GitHub release.
