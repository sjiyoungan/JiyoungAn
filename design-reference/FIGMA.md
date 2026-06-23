# Figma — Port design system

**File:** [Port-design-system](https://www.figma.com/design/BtEpcyFIvLVHXGmN44SpM9/Port-design-system)

**File key:** `BtEpcyFIvLVHXGmN44SpM9`

---

## You do **not** need Dev Mode

Dev Mode is optional. It only shows CSS/spacing in Figma’s UI for humans.

For this project, handoff works with:

1. **Frame link** (bookmark — which design we mean)
2. **2× PNG export** of that frame → `design-reference/`
3. **README** variant table (states, booleans, motion notes)
4. **Tokens** → `Design-tokens/tokens.json` when colors/type change

I implement from screenshots + README + tokens, not by logging into Figma.

---

## Registered frame links

| Frame (fill in name) | Node ID | Link |
|----------------------|---------|------|
| *(paste frame name from Figma layers panel)* | `54295-13154` | [Open frame](https://www.figma.com/design/BtEpcyFIvLVHXGmN44SpM9/Port-design-system?node-id=54295-13154) |

**How to copy a frame link:** select the frame → Share → Copy link. The URL includes `node-id=…`.

Add one row per component or page frame.

---

## Why the link alone isn’t enough for me

Even with **“Anyone with the link can view”**, Figma still requires a Google/Figma login in automated browsers. I can’t read the canvas, layers, or specs directly from the URL.

Your link is still valuable:

- Documents **which frame** is canonical
- You and I open the same design
- Pairs with the PNG in `design-reference/`

---

## Export checklist (no Dev Mode)

For each frame you want built:

1. Select the **frame** (not the whole page canvas)
2. Right panel → **Export** → PNG **2×**
3. Save to the matching folder, e.g.  
   `design-reference/components/case-study-preview/matrix.png`  
   or `design-reference/pages/projects.png`
4. Label variants in Figma (frame names or text in the export)
5. Paste the frame link in that folder’s `README.md`

---

## Pages in Figma → code routes

| Figma page / frame | Route | Code | Reference folder |
|--------------------|-------|------|------------------|
| Projects (landing) | `/projects` | `ProjectsPage` | `design-reference/pages/` |
| Case study | `/projects/:slug` | `CaseStudyPage` | `design-reference/pages/` |
| About | `/about` | `AboutPage` | — |
| Resume | `/resume` | `ResumePage` | — |

---

## Components → code

See [`COMPONENTS.md`](./COMPONENTS.md). Implemented:

| Figma component | Code | README |
|-----------------|------|--------|
| Case study preview | `CaseStudyPreview` | [`case-study-preview/README.md`](./components/case-study-preview/README.md) |
| Side navigation | `SideNavigation` | [`Side-navigation/README.md`](./components/Side-navigation/README.md) |
| Side navigation menu | `SideNavigationMenuItem` | same |

---

## Tokens

Figma variables / Tokens Studio → `Design-tokens/tokens.json` → `npm run tokens:build`

---

## Chat prompt when ready to build

```
Implement [frame name] from Figma node 54295-13154:
https://www.figma.com/design/BtEpcyFIvLVHXGmN44SpM9/Port-design-system?node-id=54295-13154
Screenshot: design-reference/.../matrix.png
Use COMPONENTS.md + folder README. Motion: ANIMATION.md
```
