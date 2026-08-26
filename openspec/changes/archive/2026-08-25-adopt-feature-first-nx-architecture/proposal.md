## Why

Projects now has a real, specified placeholder destination but its feature and shared presentation still live inside the application project, leaving Nx unable to express even the current ownership boundary. A minimal feature-first structure can make the existing maturity explicit without inventing future project-management architecture.

## What Changes

- Keep `apps/projects` as the standalone and Native Federation composition root.
- Move the implemented placeholder route and screen into a buildable feature Nx project.
- Move the loading overlay into a buildable shared UI project.
- Add effective tags, dependency constraints, project-aware scripts, CI checks, and updated agent guidance.
- Continue requiring real approved behavior before adding domain, data-access, state, or additional feature projects.

## Capabilities

### New Capabilities

- `feature-first-projects-architecture`: Defines minimal composition-root, current-feature ownership, dependency, and validation guarantees for Projects.

### Modified Capabilities

- `agent-ready-projects-development`: Guidance recognizes the implemented placeholder feature project and keeps future layers evidence-based.

## Impact

Projects source paths, TypeScript aliases, Nx graph, development dependencies, task scripts, CI, documentation, tests, AGENTS, and the Projects Skill change. The `projects` remote name, `./Routes` exposure, port 4202, placeholder copy and accessibility, Firebase project, hosting target, and lack of project-management behavior remain unchanged. `ng-packagr` is added for buildable internal libraries.
