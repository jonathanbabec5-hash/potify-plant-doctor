# Plant Doctor

[Complete repository directory tree](docs/DIRECTORY.md)

**Recovered diagnostic module.** Turn a grower's observations into a short list of causes and a sensible next check.

### Setup and usage

Node.js 24 and npm. Run the install command before running the build checks.

```sh
npm ci
npm run dev
```

Try one example and submit a reproducible correction. Open http://127.0.0.1:5173 in a browser. For a data-only view, run `node examples/list-profiles.mjs`. The authored JSON reference contains 37 profiles. The executable rules live in `src/diagnosis.ts`.

### Developer entry points

The TypeScript rules score observations against authored care profiles. The JSON is a portable reference dataset. A browser screen in the original app collects symptoms separately. Explore `art/`, `data/`, `examples/`, `src/`, `tests/` in the full tree.

### Verification

Five diagnostic cases passed. A local Chromium session selected observations in the original form and rendered a ranked care plan. The build compiled the recovered React screen.

```sh
node --test tests/plant-doctor.test.mjs
npm run build
```

### Release scope

The ruleset covers 37 authored profiles. Standalone Replit service, private notes and independent field validation are outstanding. potify-launch-room at `6aabc005854f87b5c3bc9065cbc62383e1b58f83`. Diagnostic rules and regression fixtures. Care data and five original project art files come from the November 25 recovery snapshot. The original assessment UI now runs as a standalone Vite application built against the same diagnosis module. A separate profile inventory is available with node examples/list-profiles.mjs.

[Technical whitepaper](docs/WHITEPAPER.md) · [Marketing and sales plan](docs/MARKETING.md) · [Dated developer log](docs/BUILD-LOG.md)

Existing asset and code terms remain applicable. Public access to a recording, illustration, brand or manuscript does not itself grant commercial reuse rights.
