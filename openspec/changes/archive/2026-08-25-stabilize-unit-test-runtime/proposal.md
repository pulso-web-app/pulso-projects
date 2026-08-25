## Why

Projects unit tests inherit the Native Federation build target, which the Angular unit-test builder explicitly reports as unsupported.

## What Changes

- Point unit tests at the existing Angular application build target.
- Preserve the Native Federation build and serve targets used by the remote.

## Capabilities

### New Capabilities

None. This is a test-configuration correction with no product behavior change.

### Modified Capabilities

None.

## Impact

Only Projects unit-test configuration changes. Runtime UI, routing, federation, and deployment remain unchanged.
