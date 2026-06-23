# How to give specs (simple)

Paste a **spec block** in chat or add it to the component’s `README.md`. One table per component — no Dev Mode needed.

Copy this template, fill in the values from Figma (select layer → width/height in the right panel):

```markdown
## Specs — [Component name]

| Property | Value | Notes |
|----------|-------|-------|
| Max width | 896px | content box |
| Height (default) | 448px | whole card |
| Corner radius | 2px | card + offset shadow |
| Offset (hover) | 8px down-right | pink layer |
| Hover offset color | #ffb8c1 | Pink90 token |
| Pressed offset color | #82142c | Pink40 token |
| Image | `/previews/[name].png` | export 2× from Figma |

### States (one row per state)
| State | What changes |
|-------|----------------|
| Default | flat, no offset |
| Hover | lift 8px, pink offset, tags show |
| Pressed | down on offset, dark red |
```

**Also helpful (pick any):**
- Frame link from Figma (`node-id=…`)
- 2× PNG in `design-reference/components/[name]/`
- Re-export `tokens.json` if colors changed

That’s it. I match **spec table → code constants** at the top of the component file.
