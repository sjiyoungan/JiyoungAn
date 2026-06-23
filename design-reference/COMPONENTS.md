# Component catalog

Map Figma components to code. **Update this file** whenever you add a component in Figma or we implement one in code.

The agent must use these components — not recreate them.

## How to add from Figma

1. In Figma, note the **component name** (e.g. `ProjectCard`, `Button/Primary`)
2. Export a screenshot → `design-reference/components/<name>.png`
3. Add a row below with props/variants from Figma
4. Tell the agent: "Implement `ProjectCard` from `design-reference/components/ProjectCard.png` and add to catalog"

## Site shell

| Figma name | Code | Path |
|------------|------|------|
| Header | `SiteHeader` | `src/components/SiteHeader.tsx` |
| Page container (796px) | `SiteContainer` | `src/components/SiteContainer.tsx` |
| Layout wrapper | `SiteLayout` | `src/components/SiteLayout.tsx` |

## ShadCN UI

| Figma name | Code | Path |
|------------|------|------|
| Button | `Button` | `src/components/ui/button.tsx` |
| Card | `Card`, `CardHeader`, `CardTitle`, … | `src/components/ui/card.tsx` |

## Portfolio

| Figma name | Code | Path |
|------------|------|------|
| Case study section | `CaseStudySection` | `src/components/portfolio/CaseStudySection.tsx` |
| Asset tag pill | `AssetTagBadge` | `src/components/portfolio/AssetTag.tsx` |
| Image placeholder | `PlaceholderImage` | `src/components/portfolio/PlaceholderImage.tsx` |

## To implement (from Figma)

_Add rows here as you design. Example:_

| Figma name | Code | Status | Reference |
|------------|------|--------|-----------|
| Project landing | `ProjectLanding` | not built | `design-reference/project-landing.png` |
