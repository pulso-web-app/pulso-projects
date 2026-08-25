## Why

The placeholder renders decorative gradients inside a clipped component container. When federated into the Shell, that container appears as a rectangular background that does not blend with the host surface.

## What Changes

- Make the placeholder's outer surface transparent.
- Remove component-scoped decorative background layers that reveal its bounds.
- Preserve the central card, responsive layout, standalone behavior, and federation contract.

## Capabilities

### New Capabilities

None.

### Modified Capabilities

- `projects-placeholder`: Require the placeholder surface to blend with its standalone or federated parent background.

## Impact

Only the placeholder component stylesheet, focused presentation coverage, and specification change. The Shell, routing, dependencies, and deployment remain unchanged.
