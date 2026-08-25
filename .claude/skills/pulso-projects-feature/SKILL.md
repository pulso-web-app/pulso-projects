---
name: pulso-projects-feature
description: Grow the Pulso Projects remote from its current scaffold through spec-driven, feature-bounded changes. Use when adding Projects domain behavior, routes, screens, state, persistence, loading behavior, or shell integration.
---

# Pulso Projects Feature

1. Read the root and Projects application `AGENTS.md` files.
2. Verify what is actually implemented; treat future behavior as a requirement, not existing functionality.
3. Create or update the local OpenSpec change and define user outcomes, feature ownership, loading, empty, failure, and integration behavior.
4. Introduce the smallest coherent feature boundary; avoid generic shared layers and speculative abstractions.
5. Keep the `./Routes` federation exposure stable unless the approved change explicitly updates shell integration.
6. Add focused tests, run the remote on port 4202, and test through shell port 4200 when the public route contract changes.
7. Run `npm run check` and document maturity, federation, UI, data, and deployment impact.

Do not claim scaffolded behavior is complete, introduce secrets, or deploy.
