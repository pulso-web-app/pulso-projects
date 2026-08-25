## Context

The remote currently exposes an empty `./Routes` array. Its root component waits for router activation before hiding the loading overlay, so standalone and federated navigation both remain blank or loading indefinitely.

## Goals / Non-Goals

**Goals:**

- Provide one polished, responsive destination through the existing route contract.
- Keep loading behavior deterministic and accessible.
- Establish a small Projects-owned feature boundary that can later be replaced.

**Non-Goals:**

- Implement project lists, creation, persistence, state management, or backend integration.
- Change the remote name, `./Routes` exposure, Shell navigation, or deployment behavior.

## Decisions

- Add a standalone OnPush component under `features/projects-placeholder` and route the empty path to it. This creates a clear ownership boundary without speculative architecture.
- Use semantic HTML and repository design tokens with no new UI dependency. This keeps the placeholder lightweight and visually consistent in both runtime modes.
- Keep the existing root loading overlay and hide it through router activation. This preserves bootstrap behavior while fixing the empty-route condition.
- Point the loading component at its external template and stylesheet so there is one source of truth for English copy and presentation.

## Risks / Trade-offs

- [The placeholder may remain longer than intended] → Keep copy honest and isolate it so the future feature can replace the route directly.
- [Standalone and Shell content widths differ] → Use fluid sizing and container-relative layout without assumptions about the Shell frame.
