# Figma — Port design system

**File:** [Port-design-system](https://www.figma.com/design/BtEpcyFIvLVHXGmN44SpM9/Port-design-system)

**File key:** `BtEpcyFIvLVHXGmN44SpM9`

---

## Deep links

| What | Node ID | Link |
|------|---------|------|
| Shared entry (from handoff) | `54295-13154` | [Open in Figma](https://www.figma.com/design/BtEpcyFIvLVHXGmN44SpM9/Port-design-system?node-id=54295-13154) |

Add a row here when you link to a specific component or page frame. Copy the `node-id` from the Figma URL after selecting the frame.

---

## Pages in Figma → code routes

| Figma page / frame | Route | Code | Reference folder |
|--------------------|-------|------|----------------|
| Projects (landing) | `/projects` | `ProjectsPage` | `design-reference/pages/` (add screenshot) |
| Case study | `/projects/:slug` | `CaseStudyPage` | `design-reference/pages/` |
| About | `/about` | `AboutPage` | — |
| Resume | `/resume` | `ResumePage` | — |

---

## Components page → code

Implemented components are cataloged in [`COMPONENTS.md`](./COMPONENTS.md). Each has a folder under `design-reference/components/` with screenshots + README.

| Figma component | Code | README |
|-----------------|------|--------|
| Case study preview | `CaseStudyPreview` | [`case-study-preview/README.md`](./components/case-study-preview/README.md) |
| Side navigation | `SideNavigation` | [`Side-navigation/README.md`](./components/Side-navigation/README.md) |
| Side navigation menu | `SideNavigationMenuItem` | same |

---

## Tokens

Figma variables / Tokens Studio → `Design-tokens/tokens.json` → `npm run tokens:build`

---

## Handoff prompt

When implementing from Figma, paste in chat:

```
Implement [component or page] from Figma:
https://www.figma.com/design/BtEpcyFIvLVHXGmN44SpM9/Port-design-system?node-id=XXXXX
Use COMPONENTS.md + design-reference/components/[folder]/README.md
Motion: design-reference/ANIMATION.md
```
