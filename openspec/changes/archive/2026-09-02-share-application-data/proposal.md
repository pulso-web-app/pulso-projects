## Why

Projects remains a scaffold, but its documentation must reflect Pulso's approved shared business-data contract instead of allowing future user-scoped persistence.

## What Changes

- Document `projects/{projectId}` as the shared persistence location governed by Shell's authenticated rules.
- State explicitly that the Projects UI and persistence integration remain unimplemented.

## Capabilities

### New Capabilities

None; this repository change is documentation-only and skips delta specs.

### Modified Capabilities

None.

## Impact

Same-ID Tooling umbrella links CRM implementation and Shell rules. No Projects code, dependencies, routes, federation contracts, deployment, or runtime behavior changes.
