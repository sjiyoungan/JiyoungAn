# Case study preview

Figma component set: **Case study preview**  
Code: `CaseStudyPreview` — `src/components/CaseStudyPreview.tsx`

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
| **Hover**                    | Card lifts up-left 8px. Pink offset border (`#f0b4c4`) bottom-right. Tags fade in. `hoverImageSrc` (GIF or still) replaces default image.              |
| **Pressed**                  | Card presses down onto offset (translate 0). Border transitions pink → dark red (`#8b1a2b`). Content area grey (`#e8ecef`). Default image (not hover). |
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

- `imageSrc` — default still (required)
- `hoverImageSrc` — GIF or alternate still on hover (optional)

