# Pulso Projects Architecture

## System role

Pulso Projects is an independently built and deployed Native Federation remote. It runs on port 4202 during development, exposes `./Routes`, and is mounted below the shell's protected `/projects` route.

The repository is the future Projects team, deployment, dependency, and CI boundary. Nx projects are smaller internal ownership, dependency, test, build, and cache boundaries. A routed feature does not automatically require another microfrontend.

## Feature-first project map

```text
apps/
  projects/                      # bootstrap and federation adapter
  projects-e2e/                  # remote-level browser behavior
libs/
  projects/
    feature-placeholder/         # current placeholder route and screen
  shared/
    ui/                          # accessible startup feedback
```

The remote now exposes a real placeholder route from `@pulso-projects/projects-feature-placeholder`; it is no longer an empty route list. The explicit project name records current maturity: project lists, details, editing, persistence, permissions, and domain rules are still not implemented.

## Evolution rules

Replace the placeholder with intentionally named capabilities as approved behavior arrives. Begin with the smallest coherent feature library. Add `domain` only for concrete business rules and add `data-access` only for real state or integrations. Avoid a permanent catch-all feature and speculative shared abstractions.

The application project remains a thin composition root. Imports cross project boundaries only through `@pulso-projects/*` public APIs. Nx tags enforce that applications compose features and that future lower-level domain, data-access, and UI projects cannot depend back on features.

Capability permissions live in `architecture.config.json` and are converted into ESLint module-boundary constraints. Use the Tooling feature generator for vertical slices or a real new capability, and its library generator only for a coherent lower-level boundary.

## Federation boundary

The shell owns authentication and the protected mount point. Projects owns routes and behavior inside it. Remote name, `./Routes`, bootstrap expectations, port, and manifest endpoint are public contracts. A future MFE split needs an independent runtime ownership and deployment reason, not merely a new page.

The exposed module provides the common `REMOTE_ROUTES` contract. `PROJECTS_ROUTES` remains an identity-compatible alias for existing consumers.

## Why Nx is material here

Even at scaffold stage, the graph distinguishes bootstrap, placeholder capability, shared UI, and E2E behavior. Repository scripts cover all projects, builds traverse dependencies, targets are cacheable, `nx affected` can select impacted work, and lint rules prevent invalid dependencies as the product grows.

Native Federation remains responsible for runtime composition; Nx is responsible for the repository's source and task graph.

## Testing and delivery

Vitest covers project boundaries and Playwright validates standalone browser behavior. Route-contract changes also require a shell smoke test. Firebase workflows call public repository scripts so new libraries automatically enter quality gates.

Projects retains its own Nx configuration, package lock, dependencies, cache, CI, and hosting target and does not import source code from sibling repositories.
