---
name: pulso-projects-feature
description: Grow the Pulso Projects remote from its current scaffold through spec-driven, feature-bounded changes. Use when adding Projects domain behavior, routes, screens, state, persistence, loading behavior, or shell integration.
---

# Pulso Projects Feature

1. Read the root, library, and Projects application `AGENTS.md` files.
2. Verify what is actually implemented; treat future behavior as a requirement, not existing functionality.
3. Create or update the local OpenSpec change and define user outcomes, feature ownership, loading, empty, failure, and integration behavior.
4. Introduce the smallest coherent feature-first Nx project, replace rather than enlarge the placeholder when appropriate, and avoid generic shared layers or speculative abstractions.
5. Use `@pulso-projects/*` public entry points across projects and preserve Nx scope/type dependency constraints.
6. Keep the `./Routes` federation exposure stable unless the approved change explicitly updates shell integration.
7. Add focused project tests, run the remote on port 4202, and test through shell port 4200 when the public route contract changes.
8. Run `npm run check` and document maturity, graph, federation, UI, data, and deployment impact.

Do not claim scaffolded behavior is complete, introduce secrets, or deploy.
