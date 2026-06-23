# Case study preview

Figma file: [Port-design-system](https://www.figma.com/design/BtEpcyFIvLVHXGmN44SpM9/Port-design-system)  
Figma component set: **Case study preview**  
Code: `CaseStudyPreview` — `src/components/CaseStudyPreview.tsx`

- **Frame link:** [node `54295-13154`](https://www.figma.com/design/BtEpcyFIvLVHXGmN44SpM9/Port-design-system?node-id=54295-13154)

---

## Specs (Figma → code)

### Page container (`ProjectsPage`)
| Property | Value |
|----------|-------|
| Max width | 896px |
| Horizontal padding | 60px |

### Card (`CaseStudyPreview`)
| Property | Value | Token / constant |
|----------|-------|------------------|
| Width | 100% of container | |
| Height | hugs content | |
| Corner radius | 2px | card + offset |
| Asset height | 358px fixed | `ASSET_HEIGHT_PX` |
| Gap asset → copy | 8px | `gap-2` |
| Copy padding | 24px × 16px | `px-6 py-4` |
| Title → body gap | 2px | `space-y-0.5` |
| Body → tags gap | 24px | `mt-6` |
| Title color | primary-dim | `--sys-primary-dim` |
| Body color | on-surface-variant | `text-muted-foreground` |
| Default shadow | elevation 1 | `var(--elevation-1)` — 0/0/0/1px `#001728` @15% + 2/3/4 drop |
| Hover offset | `#f23c5f` | `--sys-accent` — separate layer behind card (`z-0`), offset 8px down-right |
| Hover | outer 1px `on-surface-variant` ring (`box-shadow`) + constant elevation drop | |
| Pressed offset | `#82142c` | `--sys-on-accent-container` |
| Placeholder | `preview-asset.png` → `/previews/placeholder.png` | |

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
| **Hover**                    | Card stays in place. Accent offset shadow (`--sys-accent` / `#f23c5f`). **2px** corner radius. Tags fade in. |
| **Pressed**                  | Card presses down onto offset. Border → `--ref-pink-40` (`#82142c`). Content area grey (`#e8ecef`). |
| **Release** (still hovering) | Card returns to hover position. Border stays dark red. Image returns to default. Tags remain visible. |
| **Pointer leave**            | Resets to default.                                                                                                                                     |


Motion: `150ms` — pink offset slides/fades in first, ring follows. Tags fade in together over `100ms`. Enter uses decelerated ease; exit is snappier. Press uses a tighter ease. Respects `motion-reduce`.

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

Reference asset for NAV project: `design-reference/components/case-study-preview/preview-asset.png`  
Copy to `public/previews/placeholder.png` (or per-project path in `projects.ts`).