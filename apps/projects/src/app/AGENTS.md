# Projects Composition Rules

- Keep the application project limited to bootstrap, providers, the router outlet, and the `./Routes` federation adapter.
- Preserve `./Routes` as the remote contract and coordinate route changes with the shell.
- The existing app is a scaffold: keep documentation and tests explicit about implemented versus intended behavior.
- Preserve the loading overlay's accessibility and avoid timers that make tests or federation startup flaky.
- Add new capabilities as named Nx feature libraries and import them through `@pulso-projects/*` public APIs.
- Validate port 4202 standalone and shell integration for any route or bootstrap change.
