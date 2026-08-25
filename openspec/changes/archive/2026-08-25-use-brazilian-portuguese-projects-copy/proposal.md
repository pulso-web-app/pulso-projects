## Why

Pulso currently targets Brazilian Portuguese users, while source code and engineering artifacts remain English. The Projects placeholder and loading transition must therefore use Brazilian Portuguese until product internationalization is introduced.

## What Changes

- Translate Projects placeholder and loading copy to Brazilian Portuguese.
- Update directly coupled unit and end-to-end expectations.
- Keep code identifiers, test descriptions, documentation, and specifications in English.
- Record internationalization as future work rather than adding it in this change.

## Capabilities

### New Capabilities

None.

### Modified Capabilities

- `projects-placeholder`: Change the temporary product-language requirement from English to Brazilian Portuguese.

## Impact

Only Projects-owned visible and accessible copy, tests, and its existing behavioral specification change. Routing, federation, dependencies, architecture, and deployment remain unchanged.
