/**
 * Resolves Figma design tokens to CSS custom properties.
 * Source: Design-tokens/tokens.json
 *
 * Run: npm run tokens:build
 */
import { mkdirSync, readFileSync, writeFileSync } from "node:fs"
import { dirname, join } from "node:path"
import { fileURLToPath } from "node:url"

const __dirname = dirname(fileURLToPath(import.meta.url))
const root = join(__dirname, "..")
const tokensPath = join(root, "Design-tokens", "tokens.json")
const outPath = join(root, "src", "styles", "generated-tokens.css")

const raw = JSON.parse(readFileSync(tokensPath, "utf8"))
const light = raw["color tokens/Light"]

const flat = new Map()

function walk(obj, path = []) {
  if (!obj || typeof obj !== "object") return
  if ("$value" in obj && "$type" in obj) {
    flat.set(path.join("."), obj)
    return
  }
  for (const [key, value] of Object.entries(obj)) {
    walk(value, [...path, key])
  }
}

walk(light)

function resolve(value) {
  if (typeof value !== "string") return value
  if (!value.startsWith("{")) return value
  const ref = value.slice(1, -1)
  const token = flat.get(ref)
  if (!token) return value
  return resolve(token.$value)
}

function shadowToCss(shadows) {
  return shadows
    .map((s) => `${s.x}px ${s.y}px ${s.blur}px ${s.spread}px ${s.color}`)
    .join(", ")
}

function cssVar(name, value) {
  return `  ${name}: ${value};`
}

const get = (path) => resolve(flat.get(path)?.$value)

const lines = [
  "/* Auto-generated from Design-tokens/tokens.json — do not edit by hand */",
  ":root {",
  "  /* ── Reference: Teal ── */",
  cssVar("--ref-teal-20", get("ref.Teal.Teal20")),
  cssVar("--ref-teal-30", get("ref.Teal.Teal30")),
  cssVar("--ref-teal-40", get("ref.Teal.Teal40")),
  cssVar("--ref-teal-53", get("ref.Teal.Teal53")),
  cssVar("--ref-teal-50-bright", get("ref.Teal.Teal50 bright")),
  cssVar("--ref-teal-80", get("ref.Teal.Teal80")),
  cssVar("--ref-teal-90", get("ref.Teal.Teal90")),
  cssVar("--ref-teal-98", get("ref.Teal.Teal98")),
  cssVar("--ref-teal-100", get("ref.Teal.Teal100")),
  "",
  "  /* ── Reference: Neutral ── */",
  cssVar("--ref-neutral-10", get("ref.neutral.neutral10")),
  cssVar("--ref-neutral-70", get("ref.neutral.neutral70")),
  cssVar("--ref-neutral-94", get("ref.neutral.neutral94")),
  cssVar("--ref-neutral-96", get("ref.neutral.neutral96")),
  cssVar("--ref-neutral-95", get("ref.neutral.neutral95")),
  cssVar("--ref-neutral-100", get("ref.neutral.neutral100")),
  "",
  "  /* ── Reference: Neutral variant ── */",
  cssVar("--ref-neutral-variant-20", get("ref.neutral-variant.neutral-variant20")),
  cssVar("--ref-neutral-variant-40", get("ref.neutral-variant.neutral-variant40")),
  cssVar("--ref-neutral-variant-50", get("ref.neutral-variant.neutral-variant50")),
  cssVar("--ref-neutral-variant-87", get("ref.neutral-variant.neutral-variant87")),
  cssVar("--ref-neutral-variant-99", get("ref.neutral-variant.neutral-variant99")),
  "",
  "  /* ── Reference: Pink ── */",
  cssVar("--ref-pink-40", get("ref.Pink.Pink40")),
  cssVar("--ref-pink-64", get("ref.Pink.Pink64")),
  cssVar("--ref-pink-90", get("ref.Pink.Pink90")),
  cssVar("--ref-pink-100", get("ref.Pink.Pink100")),
  "",
  "  /* ── Semantic: Primary ── */",
  cssVar("--sys-primary", get("sys.primary.primary")),
  cssVar("--sys-on-primary", get("sys.primary.on-primary")),
  cssVar("--sys-primary-container", get("sys.primary.primary-container")),
  cssVar("--sys-on-primary-container", get("sys.primary.on-primary-container")),
  cssVar("--sys-primary-bright", get("sys.primary.primary-bright")),
  cssVar("--sys-primary-dim", get("sys.primary.primary-dim")),
  cssVar("--sys-primary-surface", get("sys.primary.primary-surface")),
  "",
  "  /* ── Semantic: Accent ── */",
  cssVar("--sys-accent", get("sys.Accent.Accent")),
  cssVar("--sys-on-accent", get("sys.Accent.on-Accent")),
  cssVar("--sys-accent-container", get("sys.Accent.Accent-container")),
  cssVar("--sys-on-accent-container", get("sys.Accent.on-Accent-container")),
  "",
  "  /* ── Semantic: Surface ── */",
  cssVar("--sys-background", get("sys.surface.background")),
  cssVar("--sys-surface", get("sys.surface.surface")),
  cssVar("--sys-surface-dim", get("sys.surface.surface-dim")),
  cssVar("--sys-surface-container-low", get("sys.surface.surface-container-low")),
  cssVar("--sys-surface-container-high", get("sys.surface.surface-container-high")),
  cssVar("--sys-on-surface", get("sys.surface.on-surface")),
  cssVar("--sys-on-surface-variant", get("sys.surface.on-surface-variant")),
  cssVar("--sys-on-surface-dim", get("sys.surface.on-surface-dim")),
  cssVar("--sys-inverse-surface", get("sys.surface.inverse-surface")),
  cssVar("--sys-inverse-on-surface", get("sys.surface.inverse-on-surface")),
  "",
  "  /* ── Semantic: Outline ── */",
  cssVar("--sys-outline", get("sys.outline.outline")),
  cssVar("--sys-outline-variant", get("sys.outline.outline-variant")),
  "",
  "  /* ── Elevation ── */",
  cssVar(
    "--elevation-1",
    shadowToCss(flat.get("Elevation.1").$value)
  ),
  cssVar(
    "--elevation-2",
    shadowToCss(flat.get("Elevation.2").$value)
  ),
  cssVar(
    "--elevation-3",
    shadowToCss(flat.get("Elevation.3").$value)
  ),
  cssVar(
    "--elevation-4",
    shadowToCss(flat.get("Elevation.4").$value)
  ),
  "",
  "  /* ── Typography families ── */",
  cssVar("--font-display", '"Cormorant Garamond", Georgia, serif'),
  cssVar("--font-sans", '"Geist Sans", system-ui, sans-serif'),
  "",
  "  /* ── Type scale (Web) ── */",
  cssVar("--text-display1-size", "45px"),
  cssVar("--text-display1-line", "52px"),
  cssVar("--text-display1-tracking", "-0.5px"),
  cssVar("--text-display2-size", "36px"),
  cssVar("--text-display2-line", "42px"),
  cssVar("--text-title1-size", "28px"),
  cssVar("--text-title1-line", "34px"),
  cssVar("--text-title1-tracking", "-0.25px"),
  cssVar("--text-title2-size", "22px"),
  cssVar("--text-title2-line", "28px"),
  cssVar("--text-title3-size", "20px"),
  cssVar("--text-title3-line", "28px"),
  cssVar("--text-body1-size", "16px"),
  cssVar("--text-body1-line", "22px"),
  cssVar("--text-body2-size", "14px"),
  cssVar("--text-body2-line", "20px"),
  cssVar("--text-caption1-size", "12px"),
  cssVar("--text-caption1-line", "16px"),
  cssVar("--text-caption2-size", "11px"),
  cssVar("--text-caption2-line", "13px"),
  "",
  "  --radius: 0.625rem;",
  "}",
  "",
]

mkdirSync(dirname(outPath), { recursive: true })
writeFileSync(outPath, lines.join("\n"))
console.log(`Wrote ${outPath}`)
