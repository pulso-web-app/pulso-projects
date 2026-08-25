## Context

The initial placeholder uses hard-coded English product copy. Pulso will add internationalization later, but the current product-language decision is Brazilian Portuguese.

## Goals / Non-Goals

**Goals:**

- Use natural Brazilian Portuguese for visible and accessible runtime copy.
- Preserve English for source identifiers and engineering artifacts.

**Non-Goals:**

- Introduce an internationalization library, translation catalogs, locale detection, or a language selector.

## Decisions

- Translate only strings rendered to users and assertions directly coupled to those strings. Test descriptions remain English so the engineering surface stays consistent.
- Keep strings local to the components until the planned internationalization work provides their permanent ownership model.

## Risks / Trade-offs

- [Hard-coded copy will require later migration] → Keep the copy concentrated in component templates and cover it with focused tests.
