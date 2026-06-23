# Site component catalog

**One library for the whole site.** Landing, case study, about, and resume all use the same components from this list.

Update when you add a component in Figma or we implement it in code.

## How to add from Figma

Use **one folder per component**:

```
design-reference/components/
  case-study-preview/
    README.md       ← variant table + motion notes (required)
    matrix.png      ← all variants in one labeled grid (recommended)
    default.png     ← optional: one file per state
    hover.png
    pressed.png
    motion.gif      ← optional: click/hover recording
  button/
    README.md
    matrix.png
```

1. Name the Figma component for the **whole site** (e.g. `Case study preview`, `Button`)
2. Label variants in Figma (frame names or text labels visible in exports)
3. Fill in `README.md` in that folder — maps filenames → Figma properties
4. Register in **Site-wide primitives** or **Composed blocks** below

### Screenshot strategy

| Approach | When to use |
|----------|-------------|
| **One `matrix.png`** with all variants + visible labels | Most components (like your Button grid) |
| **Separate PNG per state** | Hover/pressed look very different, or you need large detail |
| **`motion.gif`** | Press-in, timing, easing — things Figma can't export |

I match variants using **README.md first**, then labels in the screenshot, then your Figma link — in that order.

---

## Site-wide primitives

Shared on every page. **Do not duplicate these per page.**

| Figma name | Code | Path | Used on |
|------------|------|------|---------|
| Button / Primary | `Button` | `src/components/ui/button.tsx` | Home, case study, resume, password gate, … |
| Button / Outline | `Button variant="outline"` | same | Resume, links, … |
| Card | `Card`, `CardHeader`, `CardContent`, … | `src/components/ui/card.tsx` | Home project links, case study sections, … |
| Header | `SiteHeader` | `src/components/SiteHeader.tsx` | All pages |
| Page width (796px) | `SiteContainer` | `src/components/SiteContainer.tsx` | All pages |
| Layout | `SiteLayout` | `src/components/SiteLayout.tsx` | All pages |
| Password gate | `PasswordGate` | `src/components/PasswordGate.tsx` | App wrapper |

---

## Composed blocks (built from primitives above)

These are **layouts** that use `Card`, `Button`, tokens, etc. — not separate design systems.

| Figma name | Code | Path | Uses |
|------------|------|------|------|
| Case study section | `CaseStudySection` | `src/components/portfolio/CaseStudySection.tsx` | `Card`, `AssetTagBadge`, `PlaceholderImage` |
| Asset tag pill | `AssetTagBadge` | `src/components/portfolio/AssetTag.tsx` | tokens |
| Image placeholder | `PlaceholderImage` | `src/components/portfolio/PlaceholderImage.tsx` | tokens |
| Case study page | `CaseStudyPage` | `src/components/portfolio/CaseStudyPage.tsx` | `SiteContainer`, `CaseStudySection` |

---

## To implement (from Figma)

| Figma name | Code | Status | Reference folder |
|------------|------|--------|------------------|
| Case study preview | `CaseStudyPreview` | in progress | `design-reference/components/case-study-preview/` |
| Project landing | `ProjectLanding` | not built | `design-reference/pages/` |

When built, list which **site-wide primitives** it uses (e.g. `Button`, `Card`, `SiteHeader`).
