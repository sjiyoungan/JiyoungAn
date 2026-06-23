# Motion & interaction

Figma usually does **not** export click/hover animation. Describe motion in plain language here or in chat — I implement once as **site-wide interaction patterns**, same as components.

## How to tell me about motion

You don't need Figma prototypes. Short descriptions work:

| You say | What I build |
|---------|----------------|
| "Press in when clicked" | `active:scale` + slight `translateY` |
| "Lift on hover" | Stronger elevation shadow |
| "Fade in on page load" | Enter animation on sections |
| "Stagger project cards" | Delayed fade/slide per item |
| "Snappy" / "Subtle" | ~150ms vs ~300ms duration |

Add to **PAGE-HANDOFF.md** under a **Motion** section, or paste in chat:

```
Motion:
- Project preview card: press in on click, lift shadow on hover
- Page sections: fade up on load, 50ms stagger
```

## Site interaction classes

Defined in `src/styles/interactions.css` — use on any clickable card or surface:

| Class | Effect |
|-------|--------|
| `.pressable` | Scales down + nudges on `:active` (click/tap) |
| `.pressable-lift` | `.pressable` + elevation increase on hover |

**Buttons** already press in via `Button` (`active:translate-y-px`).

## Defaults (unless you say otherwise)

| Element | Hover | Active / click |
|---------|-------|----------------|
| `Button` | color/shadow per variant | translate down 1px |
| Clickable `Card` | `shadow-elevation-2` | scale 0.98, translate down 1px |
| Links (text) | color → primary | none |

## When to use a motion library

Start with CSS/Tailwind. Consider **Motion** (framer-motion) only for:
- Page transitions
- Complex staggered reveals
- Scroll-linked animation

Say explicitly if you want a library added.

## Do not

- One-off `transition` values per page — add to interaction patterns instead
- Animate without `prefers-reduced-motion` respect (patterns should include it)
