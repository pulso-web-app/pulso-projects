## Context

Projects has no persistence implementation. Shell's rules now establish shared project data.

## Goals / Non-Goals

Document the approved storage contract without expanding the scaffold.

## Decisions

Document root `projects/{projectId}` and shared descendants. A future implementation must use authentication as an access gate and must not partition records by UID. Preserve all existing routes and runtime behavior.

## Risks / Trade-offs

Shared rules do not constitute an implemented Projects feature. Documentation must retain this distinction.
