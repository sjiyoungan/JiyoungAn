import { useEffect, useRef, useState } from "react"
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
  onHoverChange?: (hovering: boolean) => void
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

/** Shared motion */
const MOTION_MS = 150
const COLLAPSE_MS = 200
const TAGS_ENTER_MS = 100
const EASE_MOTION = "cubic-bezier(0.4, 0, 0.2, 1)"
const EASE_IN = "ease-in"
const EASE_OUT = "ease-out"
const EASE_PRESS = "cubic-bezier(0.25, 0.46, 0.45, 0.94)"
const motionStyle = (delayMs = 0) => ({
  transitionDuration: `${MOTION_MS}ms`,
  transitionTimingFunction: EASE_MOTION,
  transitionDelay: `${delayMs}ms`,
})
const collapseStyle = () => ({
  transitionDuration: `${COLLAPSE_MS}ms`,
  transitionTimingFunction: EASE_IN,
  transitionDelay: "0ms",
})
const tagsEnterStyle = () => ({
  transitionDuration: `${TAGS_ENTER_MS}ms`,
  transitionTimingFunction: EASE_OUT,
  transitionDelay: "0ms",
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
  onHoverChange,
}: CaseStudyPreviewProps) {
  const [isHovering, setIsHovering] = useState(false)
  const [isPressed, setIsPressed] = useState(false)
  const [isActivated, setIsActivated] = useState(false)
  const [isCollapsing, setIsCollapsing] = useState(false)

  const collapseTimerRef = useRef<number | null>(null)

  const clearExitAnimation = () => {
    if (collapseTimerRef.current !== null) {
      window.clearTimeout(collapseTimerRef.current)
      collapseTimerRef.current = null
    }
    setIsCollapsing(false)
  }

  const beginExitAnimation = () => {
    clearExitAnimation()
    setIsCollapsing(true)

    collapseTimerRef.current = window.setTimeout(() => {
      collapseTimerRef.current = null
      setIsCollapsing(false)
    }, COLLAPSE_MS)
  }

  useEffect(() => () => clearExitAnimation(), [])

  const visibleTags = tags.filter((tag) => tag.show)
  const showTags = isHovering || isPressed || isActivated
  const tagRowOpen = showTags
  const tagsKeepVisible = showTags || isCollapsing
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
      onPointerEnter={() => {
        clearExitAnimation()
        setIsHovering(true)
        onHoverChange?.(true)
      }}
      onPointerLeave={() => {
        if (isHovering || isPressed || isActivated) beginExitAnimation()
        setIsHovering(false)
        setIsPressed(false)
        setIsActivated(false)
        onHoverChange?.(false)
      }}
      onPointerDown={() => setIsPressed(true)}
      onPointerUp={() => {
        setIsPressed(false)
        if (isHovering) setIsActivated(true)
      }}
      onPointerCancel={() => setIsPressed(false)}
    >
      <div className="relative isolate">
        <div
          className="relative z-10 motion-reduce:transition-none"
          style={{
            borderRadius: cardRadius,
            transform: bodyTransform,
            boxShadow: cardBoxShadow,
            transitionProperty: "transform, box-shadow",
            transitionDuration: `${MOTION_MS}ms`,
            transitionTimingFunction: isPressed ? EASE_PRESS : EASE_MOTION,
          }}
        >
          {/* Accent offset — sized to the card face, fades before collapse */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 z-0 motion-reduce:transition-none"
            style={{
              borderRadius: cardRadius,
              transform: offsetTransform,
              backgroundColor: offsetColor,
              opacity: isRaised ? 1 : 0,
              transitionProperty: "opacity, transform, background-color",
              ...motionStyle(),
            }}
          />

          <div
            className="relative z-10 flex w-full flex-col gap-2 overflow-hidden bg-card"
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
                ...motionStyle(),
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
                    "grid motion-reduce:transition-none",
                    tagRowOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  )}
                  style={{
                    transitionProperty: "grid-template-rows",
                    ...(tagRowOpen ? motionStyle() : collapseStyle()),
                  }}
                  aria-hidden={!tagsKeepVisible}
                >
                  <div className="min-h-0 overflow-hidden">
                    <div
                      className="mt-6 flex flex-wrap gap-2 motion-reduce:transition-none"
                      style={{
                        opacity: tagsKeepVisible ? 1 : 0,
                        transitionProperty: "opacity",
                        ...(showTags ? tagsEnterStyle() : { transitionDuration: "0ms" }),
                      }}
                    >
                      {visibleTags.map((tag) => (
                        <Badge key={tag.label} variant="outline">
                          {tag.label}
                        </Badge>
                      ))}
                    </div>
                  </div>
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
          transitionTimingFunction: EASE_MOTION,
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
            transitionTimingFunction: EASE_MOTION,
            transitionDelay: showHover ? "40ms" : "0ms",
          }}
        />
      )}
    </div>
  )
}
