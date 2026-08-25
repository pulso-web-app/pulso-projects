## MODIFIED Requirements

### Requirement: Projects placeholder destination

The Projects remote SHALL render a Brazilian Portuguese placeholder destination at its root route in standalone and federated use until product internationalization is introduced.

#### Scenario: User opens Projects

- **WHEN** a user opens the Projects root route directly or through the Shell
- **THEN** the user sees a `Projetos` heading and a clear Brazilian Portuguese message that project-management features are coming soon

### Requirement: Brazilian Portuguese loading transition

The Projects loading transition SHALL use Brazilian Portuguese visible and accessible text and SHALL finish when the placeholder route activates.

#### Scenario: Placeholder route activates

- **WHEN** the Projects root route finishes activating
- **THEN** the loading overlay is removed and the Brazilian Portuguese placeholder becomes visible

## RENAMED Requirements

- FROM: `### Requirement: English loading transition`
- TO: `### Requirement: Brazilian Portuguese loading transition`
