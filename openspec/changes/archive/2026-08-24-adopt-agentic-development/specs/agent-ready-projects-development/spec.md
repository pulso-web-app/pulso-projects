## Purpose

Defines truthful repository guidance and validation for growing the Pulso Projects remote from its current scaffold through reviewed, agent-assisted changes.

## ADDED Requirements

### Requirement: Accurate Projects documentation

The repository SHALL document the empty route contract, loading/router scaffold, absent product and persistence behavior, startup modes, tests, CI, deployment, and troubleshooting in English.

#### Scenario: Contributor evaluates repository maturity

- **WHEN** a contributor reads the project documentation
- **THEN** they can identify implemented scaffold behavior separately from intended future project-management capabilities

### Requirement: Spec-led feature growth

The authoritative instructions SHALL require real product behavior to define feature, domain, state, data, loading, failure, and federation boundaries before new architecture is introduced.

#### Scenario: Agent proposes the first product feature

- **WHEN** an agent plans new Projects behavior
- **THEN** it documents ownership and observable states in a reviewed local specification instead of adding speculative layers

### Requirement: Local specification and documentation gates

The repository SHALL validate authored Markdown and all OpenSpec artifacts strictly before lint, unit tests, and production build in public checks and Firebase workflows.

#### Scenario: Invalid change reaches CI

- **WHEN** documentation or specifications are invalid
- **THEN** the Firebase workflow fails before build and deployment steps

### Requirement: Focused portable Skill

The repository SHALL provide one canonical Projects feature Skill and synchronized discovery layouts for Codex, Claude Code, and GitHub Copilot.

#### Scenario: Supported agent begins Projects work

- **WHEN** the agent discovers repository Skills
- **THEN** it receives the same scaffold-aware feature workflow in its supported layout
