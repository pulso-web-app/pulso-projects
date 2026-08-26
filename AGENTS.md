# Pulso Projects Agent Instructions

## Purpose

This Angular/Nx repository is the Projects Native Federation remote. It currently provides a minimal loading and routing scaffold and exposes its route contract to the Pulso Shell.

## Working Agreement

- Read the nearest scoped `AGENTS.md` before changing files below it.
- Keep the remote independently installable, testable, buildable, and deployable.
- Use documented npm scripts and the local Nx installation.
- Keep authored documentation, OpenSpec artifacts, code, and user-facing copy in English unless a product requirement says otherwise.
- Describe the current maturity honestly; do not present intended features as implemented.

## Architecture Boundaries

- Projects owns future project-management domain and UI behavior.
- Keep `apps/projects` as a thin bootstrap/federation adapter and add approved behavior as feature-first Nx projects under `libs/<capability>/<type>`.
- Replace the explicit placeholder project as real capabilities arrive; do not let it become a catch-all.
- Import Nx projects only through `@pulso-projects/*` public entry points and preserve the enforced scope/type dependency direction.
- Create domain/data-access projects and new microfrontends only when concrete ownership or runtime boundaries justify them.
- The remote exposes `./Routes`; coordinate contract changes with `pulso-shell`.
- Do not import sibling repository application code or place product behavior in the shell.
- Introduce feature boundaries deliberately as real behavior is added.
- Register capabilities in `architecture.config.json`; scope constraints are derived and must not be duplicated manually in ESLint.
- Export new federation consumers through `REMOTE_ROUTES` while preserving `PROJECTS_ROUTES` compatibility.

## Commands

- `npm run dev` — serve the remote on port 4202.
- `npm test` — run unit tests once.
- `npm run e2e` — run standalone Playwright tests.
- `npm run check` — documentation, specifications, lint, unit tests, and production build.
- `npm run spec:validate` — strict OpenSpec validation.
- `npm run affected` — run lint, tests, and builds only for projects affected by the current Git diff.

## Spec-Driven Development

- Use OpenSpec for non-trivial behavior: explore, propose, human review, apply, strict validation, checks, archive.
- Use the same kebab-case change ID in tooling and all affected repositories for cross-repository work.
- Specifications here describe only Projects-owned behavior.
- Grow specifications from real changes instead of documenting hypothetical product behavior.

## Validation

- Add focused tests for new behavior and preserve the loading experience.
- Run `npm run check` before handoff.
- For route-contract changes, verify standalone port 4202 and integrated loading through shell port 4200.
- Include screenshots for visible changes when practical.

## Security and Prohibited Actions

- Never commit secrets, tokens, credentials, or customer data.
- Do not add speculative architecture, persistence, or dependencies without a concrete requirement.
- Do not change hosting, CI secrets, deployment behavior, or federation contracts without explicit approval.
- Do not deploy, push, pull, switch branches, rewrite history, or discard user changes unless explicitly requested.
- Do not manually edit OpenSpec-managed integrations; use `npm run spec:update`.
