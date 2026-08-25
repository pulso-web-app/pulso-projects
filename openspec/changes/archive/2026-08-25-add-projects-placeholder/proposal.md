## Why

The Projects remote currently activates no route, leaving its standalone and federated content areas blank while the loading overlay never completes. A polished placeholder gives users a clear destination until project-management features are implemented.

## What Changes

- Add a responsive Projects placeholder screen with an honest coming-soon message.
- Activate the placeholder at the remote's root route in standalone and federated use.
- Preserve the existing `./Routes` federation exposure and loading behavior.
- Update unit and end-to-end coverage for the rendered screen.

## Capabilities

### New Capabilities

- `projects-placeholder`: Defines the initial Projects destination shown before functional project-management features exist.

### Modified Capabilities

None.

## Impact

The change affects only Projects-owned routes, presentation, loading markup, and tests. It adds no persistence, dependencies, shell changes, deployment changes, or project-management behavior.
