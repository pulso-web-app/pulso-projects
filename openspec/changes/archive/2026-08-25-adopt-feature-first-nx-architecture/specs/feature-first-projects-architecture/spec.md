## Purpose

Defines the minimal project ownership and validation guarantees that keep Pulso Projects feature-first while its product behavior remains intentionally limited.

## ADDED Requirements

### Requirement: Thin Projects composition root

The Projects application project SHALL own bootstrap, application configuration, remote exposure, and root composition while the implemented placeholder destination and shared loading presentation are owned by explicit internal Nx projects.

#### Scenario: Contributor inspects current ownership

- **WHEN** a contributor opens the Nx graph or architecture documentation
- **THEN** the current placeholder and shared UI owners are explicit and `apps/projects` contains only runtime composition and infrastructure concerns

### Requirement: Maturity-driven project creation

Projects SHALL introduce domain, data-access, state, or additional feature projects only with approved implemented behavior and SHALL continue distinguishing current placeholder behavior from intended product capabilities.

#### Scenario: Contributor proposes a future Projects capability

- **WHEN** the capability has no approved data, state, route, or user behavior
- **THEN** the repository does not add speculative Nx projects for it

### Requirement: Enforced Projects dependency direction

The Projects workspace SHALL reject imports that cross declared feature-first type or scope boundaries while allowing the application composition root to assemble Projects-owned projects.

#### Scenario: Shared UI attempts to import placeholder behavior

- **WHEN** lint evaluates an import from shared UI to the placeholder feature
- **THEN** the module-boundary quality gate fails before build or deployment

### Requirement: Project-aware Projects validation

Public Projects quality commands SHALL lint and test every applicable application, library, and E2E project and SHALL build project dependencies before the production application.

#### Scenario: Placeholder project test fails

- **WHEN** a contributor runs the documented Projects check
- **THEN** the command returns a non-zero result and identifies the failing Nx project

### Requirement: Stable placeholder behavior during internal evolution

Internal project organization SHALL preserve the `projects` remote name, `./Routes` exposure, port 4202, Brazilian Portuguese placeholder, accessible loading transition, transparent parent integration, and absence of false actions unless a separate approved behavior change modifies them.

#### Scenario: Feature-first migration completes

- **WHEN** Projects runs standalone or through Shell
- **THEN** the placeholder and loading behavior remain observably equivalent to the existing specification
