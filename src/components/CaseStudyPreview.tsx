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
/** Figma Elevation 1: 0/0/0/1 #001728 @15% + 2/3/4/0 drop */
const ELEVATION_1 = "var(--elevation-1)"
/** Hard offset shadow: 8px × 8px, 0 blur, 0 spread */
const ACCENT_OFFSET_SHADOW = "8px 8px 0 0 var(--sys-accent)"
const PRESSED_OFFSET_SHADOW = "8px 8px 0 0 var(--sys-on-accent-container)"
/** 1px stroke outside the card — matches elevation ring, avoids layout shift vs border */
const HOVER_RING_SHADOW = "0 0 0 1px var(--sys-on-surface-variant)"
const PRESSED_RING_SHADOW = "0 0 0 1px var(--ref-pink-40)"

const PLACEHOLDER_SRC = "/previews/placeholder.png"

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

  const cardBoxShadow = !isRaised
    ? ELEVATION_1
    : isPressed || isActivated
      ? `${PRESSED_OFFSET_SHADOW}, ${PRESSED_RING_SHADOW}`
      : `${ACCENT_OFFSET_SHADOW}, ${HOVER_RING_SHADOW}`

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
      <div
        className="relative transition-[transform,box-shadow] duration-150 ease-out motion-reduce:transition-none"
        style={{
          borderRadius: cardRadius,
          transform: bodyTransform,
          boxShadow: cardBoxShadow,
        }}
      >
        <div className="flex w-full flex-col gap-2 overflow-hidden bg-card" style={{ borderRadius: cardRadius }}>
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
            "shrink-0 px-6 py-4 transition-colors duration-150",
            isPressed || isActivated ? styles.contentBgPressed : styles.contentBg
          )}
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

          {visibleTags.length > 0 && showTags && (
            <div className="mt-6 flex flex-wrap gap-2">
              {visibleTags.map((tag) => (
                <Badge key={tag.label} variant="outline">
                  {tag.label}
                </Badge>
              ))}
            </div>
          )}
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
      style={{ height: ASSET_HEIGHT_PX, boxShadow: ELEVATION_1 }}
    >
      <img
        src={activeSrc}
        alt={imageAlt}
        className={cn(
          "absolute inset-0 size-full object-cover object-top transition-opacity duration-200",
          showHover && hoverImageSrc ? "opacity-0" : "opacity-100"
        )}
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
            "absolute inset-0 size-full object-cover object-top transition-opacity duration-200",
            showHover ? "opacity-100" : "opacity-0"
          )}
        />
      )}
    </div>
  )
}
