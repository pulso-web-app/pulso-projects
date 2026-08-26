## Purpose

Defines projects participation in generated Pulso architecture.

## ADDED Requirements

### Requirement: Declarative Projects architecture

Projects SHALL derive Nx scope constraints from its capability registry and expose its routes through both PROJECTS_ROUTES and REMOTE_ROUTES.

#### Scenario: the Shell loads Projects through the common contract

- **WHEN** the Shell loads Projects through the common contract
- **THEN** REMOTE_ROUTES references the same route array as PROJECTS_ROUTES
