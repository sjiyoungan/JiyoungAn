# Projects page

Figma frame: **Home**  
Route: `/projects`  
Code: `ProjectsPage` — `src/pages/ProjectsPage.tsx`

**Figma link:** [node `54295-13154`](https://www.figma.com/design/BtEpcyFIvLVHXGmN44SpM9/Port-design-system?node-id=54295-13154)  
**Screenshot:** `Projects.png` (2× export)

---

## Composition

| Figma instance | Code |
|----------------|------|
| Side navigation | `SideNavigation` |
| Case study preview (×N) | `CaseStudyPreview` |

No page-specific UI — only site components from [`COMPONENTS.md`](../COMPONENTS.md).

---

## Layout notes (from frame `1408×864`)

- Left: side nav (fixed width, dashed right border)
- Right: vertical stack of preview cards on `--sys-background`
- Cards span the main column width (not centered to 796px)
- Generous vertical gap between cards (~48–64px)

---

## Motion

See [`ANIMATION.md`](../ANIMATION.md) and `case-study-preview/README.md` for card hover / press behavior.
