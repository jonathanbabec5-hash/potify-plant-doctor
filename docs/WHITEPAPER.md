# Plant Doctor
## Whitepaper · public developer edition

**November 25, 2026 · Diagnostic app and original website condition library**

### Goal and audience

Turn a grower's observations into a short list of causes and a sensible next check. The immediate audience is home growers and horticulture-tool developers.

### Design and implementation

The standalone assessment uses the 37 authored Launch Room care profiles. A distinct 313-profile condition library from the main website contains source-linked condition records, validation and search. The main website diagnosis service uses a shortlist, structured output and a deterministic fallback. Keep scoring in TypeScript as the source of truth. Reviewers should change one observation at a time, since yellowing alone can fit several conditions.

### What a contributor can establish

The standalone UI rendered a ranked care plan and its five original rule tests passed. The separate website library validated 313 records and passed all 12 original library tests. A useful correction names the fixture, the original ranking and the proposed change. An anecdote may suggest a test without warranting a rule change.

### Evidence and outstanding work

Both rule libraries and the original website diagnosis code are recovered. Case records, private grow histories, photos, an independent accuracy study and parity with the standalone Replit project remain open. The next acceptance case is concrete. A contributor can change a fixture and reproduce how the ranking changes, including ambiguous symptoms.

### Place in POTIFY

Test interest in a paid illustrated care notebook after users finish a free assessment. The marketing plan gives the test window and the evidence for a commercial outcome.

[Source provenance](source.json) · [Build log](BUILD-LOG.md) · [Marketing plan](MARKETING.md)
