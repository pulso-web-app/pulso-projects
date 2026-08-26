## Context

See `proposal.md` for motivation. Projects exposes one specified Brazilian Portuguese placeholder route and an accessible loading overlay. It has no project domain, data access, state, persistence, or actions. The app and E2E project are the only Nx nodes.

## Goals / Non-Goals

**Goals:**

- Make `apps/projects` a thin runtime and federation composition root.
- Give the implemented placeholder and shared loading UI explicit project ownership.
- Establish enforceable type and scope tags without predicting future product architecture.
- Run independent library lint, tests, builds, and cacheable tasks.

**Non-Goals:**

- Introduce project-management behavior, persistence, domain models, or state.
- Create additional MFEs or empty architecture layers.
- Change placeholder content, accessibility, routes, federation, Firebase, or hosting.

## Decisions

### Model only implemented capabilities

`projects-feature-placeholder` owns the route and placeholder presentation. `shared-ui` owns the loading overlay. Future domain, data-access, and product feature projects require their own approved behavior and are intentionally absent.

### Keep remote composition in the app

The app's remote entry re-exports or composes the feature route through its public alias, retaining `./Routes` as the deployable contract. Bootstrap, environment configuration, and the root loading transition stay app-owned.

### Use buildable internal Angular libraries

The supported Nx Angular package and unit-test executors give both internal projects independent task nodes. The production app build depends on dependency builds and imports only library public APIs.

### Apply extensible type and scope rules

Shared UI cannot import feature or app behavior. The placeholder feature may use shared UI, and the app may compose both. Documentation defines how real future capabilities add scope-tagged projects.

## Risks / Trade-offs

- [Two small libraries look premature] -> Each owns existing tested behavior, and no empty domain/data layers are created.
- [Route movement breaks federation] -> Keep the app-owned `./Routes` exposure and verify the existing route-contract test plus production build.
- [Placeholder loading semantics change] -> Preserve selectors and root component behavior and run accessibility-focused tests.
- [Buildable package peers are incomplete] -> Declare imported framework peers and build every library.

## Migration Plan

1. Create tagged buildable placeholder feature and shared UI scaffolds.
2. Move source, resources, tests, and scoped instructions; expose public APIs and update app imports.
3. Add boundary rules, all-project scripts, CI validation, and maturity-accurate documentation.
4. Validate all projects, production federation build, standalone port 4202, and Shell integration if available.

Rollback restores the app-local source paths and removes library projects, aliases, and `ng-packagr`. No data migration exists.
