# Projects Library Rules

- Organize new behavior feature-first under `libs/<capability>/<type>` and expose only intentional APIs from `src/index.ts`.
- Start with the smallest cohesive feature project. Add `domain` or `data-access` projects only when approved behavior creates real rules, state, or integration boundaries.
- Import projects through `@pulso-projects/*`; never reach into another library's `src/lib` internals.
- Keep dependency direction compatible with enforced Nx tags and keep the application project as a composition root.
- Reserve `shared/ui` for Projects-local, domain-neutral presentation; avoid speculative common abstractions.
- Add focused tests for each new boundary and run repository-level scripts before handoff.
