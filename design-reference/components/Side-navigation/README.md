# Side navigation

Figma component set: **Side navigation**  
Code: `SideNavigation` — `src/components/SideNavigation.tsx`

Child: **Side navigation menu** → `SideNavigationMenuItem` — `src/components/SideNavigationMenuItem.tsx`

---

## Screenshots

| File | Notes |
|------|-------|
| `Side-navigation-screenshot.png` | Parent — name, bio, dashed border, menu list |

Child states (from Figma matrix):

| State | Text color | Chevron |
|-------|------------|---------|
| **Default** | `--sys-on-surface-variant` (muted) | hidden |
| **Hovered** | `--sys-accent` (pink/coral) | hidden |
| **Pressed** | `--sys-on-accent-container` (dark red) | hidden |
| **Selected** | `--sys-primary` (teal) | `>` chevron left of label |

Chevron uses a fixed 20px slot so labels align across states.

---

## Composition

| Child in Figma | Code |
|----------------|------|
| Side navigation menu | `SideNavigationMenuItem` |
| Display name | `.type-display2` |
| Bio | `.type-body1` + muted |

---

## Usage

```tsx
<SideNavigation />

// Or individual menu item:
<SideNavigationMenuItem to="/resume">Resume</SideNavigationMenuItem>
```

Projects stays **selected** on `/` and `/projects/:slug`.

---

## Motion

`150ms ease-out` color transition on hover/press. Respects `motion-reduce`.
