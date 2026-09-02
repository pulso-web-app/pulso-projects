# Pulso Projects

Pulso Projects is the project-management remote for the Pulso web application. It is an independent Angular 22 and Nx 23 workspace, exposed through Native Federation and deployable separately from the host.

## Current status

This repository is intentionally at scaffold stage. It currently provides:

- An Angular application bootstrap.
- A router outlet for future routed features.
- A loading overlay used during application startup.
- A Native Federation remote named `projects` that exposes `./Routes`.
- A feature-first placeholder project that owns the current default route.

The exposed route list currently renders an explicit placeholder screen. Project lists, details, editing, persistence, permissions, and domain rules are not implemented. Documentation and tests must continue to distinguish this current behavior from intended future product capabilities.

## Federation contract

- Remote name: `projects`.
- Exposed module: `./Routes`.
- Standalone development URL: <http://localhost:4202>.
- Host route: <http://localhost:4200/projects>.

Any change to the name, exposure, bootstrap, or top-level route is a cross-repository contract change with `pulso-shell`.

## Prerequisites

- Git and npm.
- Node.js `^22.22.3`, `^24.15.0`, or `^26.0.0`.
- Playwright browsers for E2E: `npm exec playwright install`.

## Recommended integrated setup

1. Clone [`pulso-tooling`](https://github.com/pulso-web-app/pulso-tooling) beside the Pulso application repositories.
2. Run `npm ci` in `pulso-tooling`.
3. Run `npm run setup`, then `npm run doctor`.
4. Run `npm run open` to open the multi-root VS Code workspace.
5. Start `Pulso: dev all` from **Terminal → Run Task**.
6. Open <http://localhost:4200/projects> after authenticating through the shell.

## Standalone setup

1. Clone this repository.
2. Run `npm ci`.
3. Run `npm run dev`.
4. Open <http://localhost:4202>.

Standalone mode validates the remote bootstrap and loading experience. Use integrated mode whenever the exposed route contract or host interaction changes.

## Commands

| Command                 | Purpose                                                          |
| ----------------------- | ---------------------------------------------------------------- |
| `npm run dev`           | Serve Projects on port 4202.                                     |
| `npm run build`         | Create a production build.                                       |
| `npm run lint`          | Run ESLint.                                                      |
| `npm test`              | Run Vitest once.                                                 |
| `npm run test:watch`    | Run unit tests in watch mode.                                    |
| `npm run e2e`           | Run Playwright against standalone Projects.                      |
| `npm run format`        | Apply Nx formatting.                                             |
| `npm run format:check`  | Check formatting without writing.                                |
| `npm run docs:check`    | Lint authored Markdown.                                          |
| `npm run spec:validate` | Strictly validate all OpenSpec artifacts.                        |
| `npm run spec:update`   | Refresh OpenSpec-managed agent integrations.                     |
| `npm run check`         | Run docs, specs, lint, unit tests, and production build.         |
| `npm run graph`         | Open the Nx project graph.                                       |
| `npm run affected`      | Lint, test, and build projects affected by the current Git diff. |

## Adding the first features

The app is now a thin composition project. `projects-feature-placeholder` owns the current route and screen, while `shared-ui` owns domain-neutral loading feedback. New approved capabilities should replace the placeholder with intentionally named feature-first Nx projects and define domain ownership, route, state, data source, loading, empty, success, failure, and authorization assumptions.

Cross-project imports use `@pulso-projects/*` public APIs and Nx tags enforce dependency direction. Do not create broad shared modules, speculative persistence layers, or a new MFE for every screen.

From the multi-root workspace, use **Pulso: Create Feature Here** for a vertical slice or new capability and **Pulso: Create Library Here** for a justified domain, data-access, UI, or util boundary. The commands update `architecture.config.json` and public aliases automatically.

## Testing

Vitest covers isolated application behavior, and Playwright validates the standalone loading and browser experience. Install the browser once with `npm exec playwright install`.

Preserve accessible loading feedback and deterministic tests. For route, bootstrap, or federation changes, run all three apps and confirm that authenticated navigation through <http://localhost:4200/projects> loads the remote without console or federation errors.

## Spec-driven and agent-assisted work

`AGENTS.md` is authoritative, with scoped application rules below `apps/projects/src/app`. The canonical `pulso-projects-feature` Skill is under `.agents/skills`; `pulso-tooling` mirrors it for Claude and Copilot.

Meaningful work follows explore, propose, human review, apply, strict validation, repository checks, and archive. Cross-repository changes share one kebab-case ID with the tooling umbrella and every affected repository.

## Shared persistence contract

Future project persistence uses root `projects/{projectId}` records shared by all authenticated users, with no owner filtering. Shell owns the corresponding rules and indexes. This storage contract does not add project listing or editing to the current placeholder. See [architecture](docs/architecture.md).

## CI and deployment

Firebase workflows validate documentation and OpenSpec before lint, unit tests, and the production build. Pull requests use Hosting preview channels; the main branch targets the configured live Projects site.

Deployment, hosting, secrets, and environment changes require explicit approval.

## Troubleshooting

- **The shell cannot load Projects:** verify port 4202, `remoteEntry.json`, remote name `projects`, and the `./Routes` exposure.
- **The page only shows the scaffold:** that is the current product maturity; confirm an approved feature specification exists before adding behavior.
- **Nx is unavailable:** run `npm ci` and use repository-local scripts.
- **Playwright has no browser:** run `npm exec playwright install`.
- **Nx Console targets another repository:** use the multi-root `Pulso:` tasks for normal workflows.

See [CONTRIBUTING.md](CONTRIBUTING.md) and [docs/architecture.md](docs/architecture.md).
