# Page / case study handoff

Fill this in when you share a new Figma screen. If you built the page **only from Figma components** in the Components page, list them below — I will use the matching code from `COMPONENTS.md`, not invent new UI.

## Figma

- **Link:** (paste view link)
- **Frame name:** (e.g. `Project landing`, `Case study / NAV credit report`)
- **Screenshot:** `design-reference/pages/<name>.png`

## Components used on this frame

List every **Figma component instance** on the page (names from the layers panel or Dev Mode):


| Figma component | Variant / props in this design | Code to use                        |
| --------------- | ------------------------------ | ---------------------------------- |
| Button          | Primary, Fill, Default         | `<Button>`                         |
| Button          | Primary, Outline               | `<Button variant="outline">`       |
| Card            | Default                        | `<Card>`                           |
| Site header     | —                              | `<SiteHeader>` (already in layout) |


*Add one row per instance type — not every duplicate button.*

## New components?

- This page uses **only** components already in `COMPONENTS.md`
- New component needed: _____________ (screenshot in `design-reference/components/`)

## Page route

- **URL:** (e.g. `/` = default landing, `/projects/nav-credit-report`)
- **Replaces / notes:** (e.g. replaces old home)

## Prompt to paste in chat

```
Build [frame name] from design-reference/pages/[file].png.
Figma link: [url]
Use only components listed in design-reference/PAGE-HANDOFF.md (or COMPONENTS.md).
Route: [path]
Motion: [optional — e.g. preview card presses in on click, sections fade up on load]
```

See `design-reference/ANIMATION.md` for motion vocabulary.