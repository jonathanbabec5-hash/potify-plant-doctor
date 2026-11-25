# Plant Doctor

[Complete repository directory tree](docs/DIRECTORY.md)

**Diagnostic app and original website condition library.** Turn a grower's observations into a short list of causes and a sensible next check.

### Setup and usage

Node.js 24 and npm. Run the install command before running the build checks.

```sh
npm ci
npm run dev
```

Try one example and submit a reproducible correction. Open http://127.0.0.1:5173 in a browser. For a data-only view, run `node examples/list-profiles.mjs`. The authored JSON reference contains 37 profiles. The executable rules live in `src/diagnosis.ts`.

### Developer entry points

The standalone assessment uses the 37 authored Launch Room care profiles. A distinct 313-profile condition library from the main website contains source-linked condition records, validation and search. The main website diagnosis service uses a shortlist, structured output and a deterministic fallback. Explore `art/`, `data/`, `examples/`, `reference/`, `research/`, `src/`, `tests/` in the full tree.

### Verification

The standalone UI rendered a ranked care plan and its five original rule tests passed. The separate website library validated 313 records and passed all 12 original library tests.

```sh
node --test tests/plant-doctor.test.mjs
npm run build
npm run validate:library
npm run test:library
```

### Release scope

Both rule libraries and the original website diagnosis code are recovered. Case records, private grow histories, photos, an independent accuracy study and parity with the standalone Replit project remain open. potify-launch-room at `6aabc005854f87b5c3bc9065cbc62383e1b58f83`. Diagnostic rules and regression fixtures. Care data and five original project art files come from the November 25 recovery snapshot. The original assessment UI now runs as a standalone Vite application built against the same diagnosis module. A separate profile inventory is available with node examples/list-profiles.mjs. Separately recovered the complete website plant-health-library and original website diagnostic service and UI component sources from potify-website main at b40b28683e548a04619f1e018814dd91aec1256d. Website service is shown as integration source; the public screening UI runs locally. The website validation script independently counted 313 complete entries at this revision, and all 12 original library regression tests passed. This checks structure, uniqueness and search behavior; it does not establish diagnostic accuracy.

[Technical whitepaper](docs/WHITEPAPER.md) · [Marketing and sales plan](docs/MARKETING.md) · [Dated developer log](docs/BUILD-LOG.md)

Existing asset and code terms remain applicable. Public access to a recording, illustration, brand or manuscript does not itself grant commercial reuse rights.
