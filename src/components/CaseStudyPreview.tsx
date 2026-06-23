import { useEffect, useState, type CSSProperties } from "react"
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
/** Elevation 1 drop shadow only (no 1px spread ring) */
const ELEVATION_1_DROP = "2px 3px 4px 0px #0017281a"

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

  const isLifted = isHovering && !isPressed
  const styles = themeStyles[theme]
  const assetSrc = imageSrc ?? PLACEHOLDER_SRC
  const isRaised = isHovering || isPressed || isActivated

  const bodyTransform = isPressed
    ? "translate(0, 0)"
    : isLifted
      ? `translate(-${OFFSET_PX}px, -${OFFSET_PX}px)`
      : "translate(0, 0)"

  const cardRadius = `${CARD_RADIUS_PX}px`

  return (
    <Link
      to={to}
      className={cn("case-study-preview group block w-full select-none", className)}
      style={
        {
          "--preview-border-hover": "var(--ref-pink-90)",
          "--preview-border-pressed": "var(--ref-pink-40)",
        } as CSSProperties
      }
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
      <div className="relative">
        {/* Attached drop shadow (pink → dark red) */}
        <div
          aria-hidden
          className="absolute inset-0 transition-opacity duration-150 ease-out"
          style={{
            borderRadius: cardRadius,
            transform: `translate(${OFFSET_PX}px, ${OFFSET_PX}px)`,
            backgroundColor:
              isPressed || isActivated
                ? "var(--preview-border-pressed)"
                : "var(--preview-border-hover)",
            opacity: isRaised ? 1 : 0,
          }}
        />

        <div
          className={cn(
            "relative flex w-full flex-col gap-2 overflow-hidden bg-card transition-[transform,box-shadow,border-color] duration-150 ease-out motion-reduce:transition-none",
            isRaised
              ? "border border-[var(--sys-on-surface-variant)]"
              : "border border-transparent"
          )}
          style={{
            borderRadius: cardRadius,
            transform: bodyTransform,
            boxShadow: isRaised ? undefined : ELEVATION_1_DROP,
          }}
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
      className="relative w-full overflow-hidden bg-card"
      style={{ height: ASSET_HEIGHT_PX }}
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
