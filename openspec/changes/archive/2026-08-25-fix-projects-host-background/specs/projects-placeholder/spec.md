## ADDED Requirements

### Requirement: Parent surface integration

The placeholder's outer surface SHALL remain transparent so it inherits the surrounding application background without exposing rectangular component boundaries.

#### Scenario: Placeholder renders inside the Shell

- **WHEN** the Projects placeholder is federated into the Shell content area
- **THEN** the background remains visually continuous around the placeholder card

#### Scenario: Placeholder renders standalone

- **WHEN** the Projects placeholder is rendered by the standalone remote
- **THEN** the standalone application background remains visible around the placeholder card
