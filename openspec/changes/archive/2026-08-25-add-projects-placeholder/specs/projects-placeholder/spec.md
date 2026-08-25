## Purpose

Defines the initial Projects destination shown consistently while the remote has no implemented project-management features.

## ADDED Requirements

### Requirement: Projects placeholder destination

The Projects remote SHALL render an English placeholder destination at its root route in standalone and federated use.

#### Scenario: User opens Projects

- **WHEN** a user opens the Projects root route directly or through the Shell
- **THEN** the user sees a Projects heading and a clear message that project-management features are coming soon

### Requirement: Honest placeholder state

The placeholder SHALL communicate that Projects is not yet functional and SHALL NOT present controls that imply implemented project-management behavior.

#### Scenario: User reviews the placeholder

- **WHEN** the placeholder is visible
- **THEN** it contains informative presentation only and no non-functional project actions

### Requirement: Accessible responsive presentation

The placeholder SHALL remain readable on narrow and wide viewports and SHALL expose its primary content through semantic headings and text.

#### Scenario: User views the placeholder on different screen sizes

- **WHEN** the available content width changes
- **THEN** the layout adapts without horizontal overflow or loss of semantic content

### Requirement: English loading transition

The Projects loading transition SHALL use English visible and accessible text and SHALL finish when the placeholder route activates.

#### Scenario: Placeholder route activates

- **WHEN** the Projects root route finishes activating
- **THEN** the loading overlay is removed and the English placeholder becomes visible
