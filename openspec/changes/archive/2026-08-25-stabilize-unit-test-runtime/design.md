## Context

The unit-test builder defaults to the project's Native Federation wrapper instead of the underlying Angular application target.

## Goals / Non-Goals

**Goals:** use a supported build target for tests without changing the remote runtime.

**Non-Goals:** change the placeholder, routing, or federation.

## Decisions

- Configure `projects:esbuild:development` explicitly as the test `buildTarget`.

## Risks / Trade-offs

- [Test configuration drifts from development] → Reuse the existing development application target rather than duplicating options.
