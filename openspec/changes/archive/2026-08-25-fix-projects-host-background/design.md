## Context

The outer placeholder element clips two large pseudo-elements to its own bounds. This creates a visible rectangular region when the remote is rendered over the Shell background.

## Goals / Non-Goals

**Goals:**

- Let the parent application own the page background.
- Preserve the card and its responsive presentation.

**Non-Goals:**

- Change Shell styles, routes, copy, or component structure.

## Decisions

- Remove the placeholder's clipped pseudo-element gradients and related stacking properties. A transparent feature surface composes correctly in both host and standalone contexts.
- Retain all card-local styling so the intentional content boundary remains visible.

## Risks / Trade-offs

- [Standalone ambience becomes less component-specific] → The standalone global stylesheet already provides the shared Pulso gradient background.
