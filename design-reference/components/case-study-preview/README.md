# Case study preview

Figma file: [Port-design-system](https://www.figma.com/design/BtEpcyFIvLVHXGmN44SpM9/Port-design-system)  
Figma component set: **Case study preview**  
Code: `CaseStudyPreview` — `src/components/CaseStudyPreview.tsx`

- **Frame link:** [node `54295-13154`](https://www.figma.com/design/BtEpcyFIvLVHXGmN44SpM9/Port-design-system?node-id=54295-13154)

---

## Specs (Figma → code)

| Property | Value | Token / constant |
|----------|-------|------------------|
| Max width | 896px | `max-w-[896px]` |
| Height (default) | 448px | `h-[448px]` |
| Corner radius | 2px | card + offset shadow |
| Hover offset | 8px | `OFFSET_PX` |
| Hover offset color | `#ffb8c1` | `--ref-pink-90` |
| Pressed offset color | `#82142c` | `--ref-pink-40` |
| Placeholder image | `/previews/placeholder.png` | export asset from Figma |

See [`SPECS-TEMPLATE.md`](../../SPECS-TEMPLATE.md) for how to hand off updates.

---

## Screenshots


| File                                | Notes                                                           |
| ----------------------------------- | --------------------------------------------------------------- |
| `Case-study-preview-screenshot.png` | 2× export — default (left) and pressed (right), four theme rows |
| `matrix.png`                        | (optional) full variant grid                                    |


---

## States & motion


| State                        | Visual                                                                                                                                                 |
| ---------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Default**                  | Flat card on theme surface. Default preview image. Tags hidden. No pink offset.                                                                        |
| **Hover**                    | Card lifts up-left 8px. Pink offset (`--ref-pink-90` / `#ffb8c1`). **2px** corner radius on card + offset. Tags fade in. `hoverImageSrc` replaces default image. |
| **Pressed**                  | Card presses down onto offset. Border → `--ref-pink-40` (`#82142c`). Content area grey (`#e8ecef`). |
| **Release** (still hovering) | Card lifts again. Border stays dark red. Image returns to default. Tags remain visible.                                                                |
| **Pointer leave**            | Resets to default.                                                                                                                                     |


Motion: `150ms ease-out` on transform and border color. Respects `motion-reduce`.

---

## Themes


| Token    | Surface   |
| -------- | --------- |
| `teal`   | `#004d6b` |
| `red`    | `#82142c` |
| `purple` | `#5a0e63` |
| `green`  | `#3d5c0b` |


---

## Composition


| Child in Figma          | Code                                                                |
| ----------------------- | ------------------------------------------------------------------- |
| Case study preview tags | ShadCN `Badge` (`variant="outline"`) — each tag has `show: boolean` |
| Preview asset           | Swappable `imageSrc` + optional `hoverImageSrc` per project         |


---

## Usage

```tsx
<CaseStudyPreview
  to="/projects/my-slug"
  title="Project title"
  description="Short description"
  theme="teal"
  imageSrc="/previews/my-project.png"
  hoverImageSrc="/previews/my-project-hover.gif" // optional
  tags={[
    { label: "UX", show: true },
    { label: "Fintech", show: true },
    { label: "B2B", show: false },
  ]}
/>
```

Project data lives in `src/data/projects.ts` under `preview`.

---

## Assets per case study

Place files in `public/previews/` and reference by path in `projects.ts`:

- `imageSrc` — **preview asset only** (teal surface + dashboard mockup). Export from Figma — do **not** use the component matrix screenshot (`Case-study-preview-screenshot.png`).
- `hoverImageSrc` — GIF or alternate still on hover (optional)

Reference asset for NAV project: `design-reference/components/case-study-preview/preview-asset-teal.png`