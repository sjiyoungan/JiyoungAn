import { useEffect, useState } from "react"
import { Link, type LinkProps } from "react-router-dom"

import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

export type CaseStudyPreviewTheme = "teal" | "red" | "purple" | "green"

export type CaseStudyPreviewTag = {
  label: string
  /** When false, tag is hidden for this case study */
  show: boolean
}

export type CaseStudyPreviewProps = {
  title: string
  description: string
  theme?: CaseStudyPreviewTheme
  /** Default preview image — omit for `/previews/placeholder.png` */
  imageSrc?: string
  imageAlt?: string
  /** Shown on hover — GIF or alternate still */
  hoverImageSrc?: string
  tags?: CaseStudyPreviewTag[]
  to: LinkProps["to"]
  className?: string
}

/** Figma specs — design-reference/components/case-study-preview/README.md */
const CARD_RADIUS_PX = 2
const ASSET_HEIGHT_PX = 358
const OFFSET_PX = 8
/** Figma Elevation 1 decomposed — ring + drop kept separate so ring can change without shifting */
const ELEVATION_RING = "0 0 0 1px #00172826"
const ELEVATION_DROP = "2px 3px 4px 0px #0017281a"
/** Outer 1px stroke — same geometry in every state to avoid subpixel shift */
const HOVER_RING_SHADOW = "0 0 0 1px var(--sys-on-surface-variant)"
const PRESSED_RING_SHADOW = "0 0 0 1px var(--ref-pink-40)"

const PLACEHOLDER_SRC = "/previews/placeholder.png"

/** Shared motion — Figma spec 150ms with decelerated enter, snappy exit */
const MOTION_MS = 150
const EASE_ENTER = "cubic-bezier(0.33, 1, 0.68, 1)"
const EASE_EXIT = "cubic-bezier(0.3, 0, 0.8, 0.15)"
const EASE_PRESS = "cubic-bezier(0.25, 0.46, 0.45, 0.94)"
const motionStyle = (active: boolean, delayMs = 0) => ({
  transitionDuration: `${MOTION_MS}ms`,
  transitionTimingFunction: active ? EASE_ENTER : EASE_EXIT,
  transitionDelay: `${delayMs}ms`,
})

const themeStyles: Record<
  CaseStudyPreviewTheme,
  { surface: string; contentBg: string; contentBgPressed: string }
> = {
  teal: { surface: "bg-[#004d6b]", contentBg: "bg-card", contentBgPressed: "bg-[#e8ecef]" },
  red: { surface: "bg-[#82142c]", contentBg: "bg-card", contentBgPressed: "bg-[#e8ecef]" },
  purple: { surface: "bg-[#5a0e63]", contentBg: "bg-card", contentBgPressed: "bg-[#e8ecef]" },
  green: { surface: "bg-[#3d5c0b]", contentBg: "bg-card", contentBgPressed: "bg-[#e8ecef]" },
}

export function CaseStudyPreview({
  title,
  description,
  theme = "teal",
  imageSrc,
  imageAlt = "",
  hoverImageSrc,
  tags = [],
  to,
  className,
}: CaseStudyPreviewProps) {
  const [isHovering, setIsHovering] = useState(false)
  const [isPressed, setIsPressed] = useState(false)
  const [isActivated, setIsActivated] = useState(false)

  const visibleTags = tags.filter((tag) => tag.show)
  const showTags = isHovering || isPressed || isActivated
  const showHoverImage =
    Boolean(hoverImageSrc) && isHovering && !isPressed && !isActivated

  const bodyTransform = isPressed
    ? `translate(${OFFSET_PX}px, ${OFFSET_PX}px)`
    : "translate(0, 0)"

  const styles = themeStyles[theme]
  const assetSrc = imageSrc ?? PLACEHOLDER_SRC
  const isRaised = isHovering || isPressed || isActivated

  const cardRadius = `${CARD_RADIUS_PX}px`

  const ringShadow =
    isPressed || isActivated
      ? PRESSED_RING_SHADOW
      : isRaised
        ? HOVER_RING_SHADOW
        : ELEVATION_RING

  /** Keep drop shadow constant so the card never jumps when the ring color changes */
  const cardBoxShadow = `${ringShadow}, ${ELEVATION_DROP}`

  const offsetColor =
    isPressed || isActivated
      ? "var(--sys-on-accent-container)"
      : "var(--sys-accent)"

  const offsetTransform = isRaised
    ? `translate(${OFFSET_PX}px, ${OFFSET_PX}px) scale(1)`
    : `translate(${OFFSET_PX / 2}px, ${OFFSET_PX / 2}px) scale(0.985)`

  return (
    <Link
      to={to}
      className={cn("case-study-preview group block w-full select-none", className)}
      onPointerEnter={() => setIsHovering(true)}
      onPointerLeave={() => {
        setIsHovering(false)
        setIsPressed(false)
        setIsActivated(false)
      }}
      onPointerDown={() => setIsPressed(true)}
      onPointerUp={() => {
        setIsPressed(false)
        if (isHovering) setIsActivated(true)
      }}
      onPointerCancel={() => setIsPressed(false)}
    >
      <div className="relative isolate">
        {/* Accent offset sits behind the card — never overlaps the face */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 z-0 motion-reduce:transition-none"
          style={{
            borderRadius: cardRadius,
            transform: offsetTransform,
            backgroundColor: offsetColor,
            opacity: isRaised ? 1 : 0,
            transitionProperty: "opacity, transform, background-color",
            ...motionStyle(isRaised),
          }}
        />

        <div
          className="relative z-10 motion-reduce:transition-none"
          style={{
            borderRadius: cardRadius,
            transform: bodyTransform,
            boxShadow: cardBoxShadow,
            transitionProperty: "transform, box-shadow",
            transitionDuration: `${MOTION_MS}ms`,
            transitionTimingFunction: isPressed ? EASE_PRESS : isRaised ? EASE_ENTER : EASE_EXIT,
          }}
        >
          <div
            className="flex w-full flex-col gap-2 overflow-hidden bg-card"
            style={{ borderRadius: cardRadius }}
          >
            <div className={cn("w-full shrink-0", styles.surface)}>
              <PreviewAsset
                imageSrc={assetSrc}
                hoverImageSrc={hoverImageSrc}
                imageAlt={imageAlt}
                showHover={showHoverImage}
              />
            </div>

            <div
              className={cn(
                "shrink-0 px-6 py-4 motion-reduce:transition-none",
                isPressed || isActivated ? styles.contentBgPressed : styles.contentBg
              )}
              style={{
                transitionProperty: "background-color",
                ...motionStyle(isRaised),
              }}
            >
              <div className="space-y-0.5">
                <h3
                  className="type-title3-em"
                  style={{ color: "var(--sys-primary-dim)" }}
                >
                  {title}
                </h3>
                <p className="type-body2 text-muted-foreground">{description}</p>
              </div>

              {visibleTags.length > 0 && (
                <div
                  className={cn(
                    "flex flex-wrap gap-2 overflow-hidden motion-reduce:transition-none",
                    showTags ? "mt-6 max-h-24 opacity-100" : "mt-0 max-h-0 opacity-0"
                  )}
                  style={{
                    transitionProperty: "opacity, margin, max-height",
                    ...motionStyle(showTags, showTags ? 50 : 0),
                  }}
                  aria-hidden={!showTags}
                >
                  {visibleTags.map((tag, index) => (
                    <Badge
                      key={tag.label}
                      variant="outline"
                      className="motion-reduce:transition-none"
                      style={{
                        opacity: showTags ? 1 : 0,
                        transform: showTags ? "translateY(0)" : "translateY(4px)",
                        transitionProperty: "opacity, transform",
                        ...motionStyle(showTags, showTags ? 70 + index * 35 : 0),
                      }}
                    >
                      {tag.label}
                    </Badge>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}

function PreviewAsset({
  imageSrc,
  hoverImageSrc,
  imageAlt,
  showHover,
}: {
  imageSrc: string
  hoverImageSrc?: string
  imageAlt: string
  showHover: boolean
}) {
  const [activeSrc, setActiveSrc] = useState(imageSrc)

  useEffect(() => {
    setActiveSrc(imageSrc)
  }, [imageSrc])

  return (
    <div
      className="relative w-full overflow-hidden"
      style={{ height: ASSET_HEIGHT_PX }}
    >
      <img
        src={activeSrc}
        alt={imageAlt}
        className={cn(
          "absolute inset-0 size-full object-cover object-top motion-reduce:transition-none",
          showHover && hoverImageSrc ? "opacity-0" : "opacity-100"
        )}
        style={{
          transitionProperty: "opacity",
          transitionDuration: `${MOTION_MS}ms`,
          transitionTimingFunction: showHover ? EASE_ENTER : EASE_EXIT,
        }}
        onError={() => {
          if (activeSrc !== PLACEHOLDER_SRC) setActiveSrc(PLACEHOLDER_SRC)
        }}
      />
      {hoverImageSrc && (
        <img
          src={hoverImageSrc}
          alt=""
          aria-hidden
          className={cn(
            "absolute inset-0 size-full object-cover object-top motion-reduce:transition-none",
            showHover ? "opacity-100" : "opacity-0"
          )}
          style={{
            transitionProperty: "opacity",
            transitionDuration: `${MOTION_MS}ms`,
            transitionTimingFunction: showHover ? EASE_ENTER : EASE_EXIT,
            transitionDelay: showHover ? "40ms" : "0ms",
          }}
        />
      )}
    </div>
  )
}
