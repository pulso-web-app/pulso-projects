# Contributing to Pulso Projects

## Before you start

Read `AGENTS.md`, the scoped application rules, and `docs/architecture.md`. Begin by confirming the repository's actual current behavior; do not infer a product feature from its name or from future-looking folders.

Use a reviewed OpenSpec change for non-trivial behavior. Cross-repository work uses the same kebab-case change ID in every affected repository and an umbrella proposal in `pulso-tooling`.

## Development workflow

1. Run `npm ci`.
2. Explore the scaffold, route contract, loading behavior, and tests.
3. Specify the user outcome, maturity change, feature ownership, states, failure behavior, and non-goals.
4. Introduce the smallest coherent feature-first Nx project and replace the placeholder when real behavior supersedes it.
5. Import other projects through public `@pulso-projects/*` APIs and add focused project tests.
6. Inspect `npm run graph` or run `npm run affected` when useful, then run `npm run check`.
7. Verify shell integration for route or bootstrap contract changes.
8. Complete the pull-request template with evidence and deployment impact.

Avoid speculative abstractions, unrelated refactors, and broad formatting changes. Never commit credentials, tokens, customer data, or unapproved environment configuration.

## Pull requests

State clearly what became implemented and what remains a scaffold. Link the OpenSpec change, include UI evidence where applicable, and document federation, data, hosting, and rollback considerations.
