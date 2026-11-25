# Plant Doctor
## Whitepaper · public developer edition

**November 25, 2026 · Recovered diagnostic module**

### Goal and audience

Turn a grower's observations into a short list of causes and a sensible next check. The immediate audience is home growers and horticulture-tool developers.

### Design and implementation

The TypeScript rules score observations against authored care profiles. The JSON is a portable reference dataset. A browser screen in the original app collects symptoms separately. Keep scoring in TypeScript as the source of truth. Reviewers should change one observation at a time, since yellowing alone can fit several conditions.

### What a contributor can establish

Five diagnostic cases passed. A local Chromium session selected observations in the original form and rendered a ranked care plan. The build compiled the recovered React screen. A useful correction names the fixture, the original ranking and the proposed change. An anecdote may suggest a test without warranting a rule change.

### Evidence and outstanding work

The ruleset covers 37 authored profiles. Standalone Replit service, private notes and independent field validation are outstanding. The next acceptance case is concrete. A contributor can change a fixture and reproduce how the ranking changes, including ambiguous symptoms.

### Place in POTIFY

Test interest in a paid illustrated care notebook after users finish a free assessment. The marketing plan gives the test window and the evidence for a commercial outcome.

[Source provenance](source.json) · [Build log](BUILD-LOG.md) · [Marketing plan](MARKETING.md)
