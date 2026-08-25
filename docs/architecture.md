# Pulso Projects Architecture

## System role

Pulso Projects is an independently built and deployed Native Federation remote. During development it runs on port 4202, exposes `./Routes`, and is mounted by the authenticated shell below `/projects`.

## Current application shape

The application currently consists of the Angular bootstrap, a router outlet, an accessible loading overlay, and an empty remote route list. It has no implemented project domain, data-access layer, persistence, or product screens.

This small shape is intentional. New architecture must follow approved product behavior rather than predict it.

## Future feature boundaries

A real feature should define:

- The domain concepts and invariants it owns.
- Routed screens and their navigation contract.
- State ownership and external data boundary.
- Loading, empty, success, validation, and failure behavior.
- Authentication or authorization assumptions inherited from the shell.

Only then should the repository introduce feature, domain, or data-access folders appropriate to that behavior.

## Federation boundary

The shell owns the protected `/projects` mount point. Projects owns the route list and product behavior inside the remote. Remote name, `./Routes` exposure, bootstrap expectations, ports, and manifest endpoints are integration contracts.

## Testing and delivery

Vitest covers isolated behavior and Playwright verifies the standalone browser experience. Contract changes also require an integrated shell smoke test. Firebase Hosting workflows create pull-request previews and main-branch deployments after the quality gates.

## Repository independence

Projects retains its own Nx configuration, package lock, dependencies, cache, CI, and hosting target. It must not import application source from sibling repositories.
