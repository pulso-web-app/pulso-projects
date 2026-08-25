# Projects Application Rules

- Preserve `./Routes` as the remote contract and coordinate route changes with the shell.
- The existing app is a scaffold: keep documentation and tests explicit about implemented versus intended behavior.
- Preserve the loading overlay's accessibility and avoid timers that make tests or federation startup flaky.
- Add new capabilities under a named feature boundary with domain, state, and data ownership clear in the approved spec.
- Validate port 4202 standalone and shell integration for any route or bootstrap change.
