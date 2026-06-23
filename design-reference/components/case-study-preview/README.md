# Case study preview

Figma component set: **Case study preview**

Code name (when built): `CaseStudyPreview`  
Folder: `design-reference/components/case-study-preview/`

---

## Figma

- **Component link:** (paste link to component set)
- **Properties in Figma:** (copy from right panel, e.g. State: Default | Hover | Pressed)

---

## Screenshots

Choose **one** approach (A is easiest):

### A. One matrix image (recommended)

Export a single frame in Figma that shows **all variants in a grid**, with **labels visible** next to each variant.

- File: `matrix.png`
- Label each cell in Figma before export (text layer or frame name visible in screenshot)

### B. One file per state

Use when motion differs per state or the matrix is too large.

| File | Figma variant | Notes |
|------|---------------|-------|
| `default.png` | State = Default | |
| `hover.png` | State = Hover | |
| `pressed.png` | State = Pressed | press-in for click |

---

## Motion (not in Figma)

| Trigger | Effect |
|---------|--------|
| Hover | (e.g. shadow lifts to elevation 2) |
| Click / tap | (e.g. press in — scale down slightly) |

Optional: `motion.gif` — short screen recording

---

## Composition (uses other components)

In Figma, **Case study preview** likely contains instances of Card, Button, text styles, etc.

Document children in this table — I build the parent by **composing** existing site components, not redrawing them.

| Child in Figma | In catalog already? | Code inside parent |
|----------------|---------------------|-------------------|
| Card | yes / no | `<Card>` |
| Button | yes / no | `<Button>` |
| Text / caption | tokens | `.type-body2`, etc. |
| Icon | — | lucide or asset file |

**You do not** need separate screenshot folders for children that are already in `COMPONENTS.md`.  
Screenshot **this parent only** (`matrix.png`) — the whole composed UI per state.

Parent-specific motion (e.g. whole card presses in) goes in **Motion** above, on the parent wrapper.

---

## Prompt when ready

```
Implement site component CaseStudyPreview from
design-reference/components/case-study-preview/
Figma link: [url]
Use matrix.png (or per-state files) + README variant table.
Add to COMPONENTS.md when done.
```
