## Context

Projects currently contains a loading/router scaffold and an empty exposed route list. This makes honest maturity guidance and behavior-first architecture especially important.

## Goals / Non-Goals

**Goals:** document the scaffold accurately, require spec-led feature growth, add focused agent guidance, adopt local specifications, and add documentation/specification CI gates.

**Non-Goals:** add product routes, screens, persistence, speculative architecture, federation changes, or deployment changes.

## Decisions

- Scope application rules at `apps/projects/src/app`, where future feature and route decisions occur.
- Use one instruction-only Skill that begins by verifying current implementation and maturity.
- Make OpenSpec the prerequisite for non-trivial architecture growth rather than backfilling hypothetical specifications.
- Run documentation and strict OpenSpec validation before existing Firebase quality and deployment steps.

## Risks / Trade-offs

- [Scaffold is described as a finished product] → Repeat maturity boundaries in README, architecture, OpenSpec context, and pull-request review.
- [Future work over-engineers early] → Require the smallest coherent feature boundary tied to approved observable behavior.

## Migration Plan

Add the development layer without changing application source, synchronize Skill mirrors, run local and integration validation, and archive this local change before the tooling umbrella.
