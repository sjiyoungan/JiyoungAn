import { useState, type CSSProperties } from "react"
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

const PLACEHOLDER_SRC = "/previews/placeholder.png"

const themeStyles: Record<
  CaseStudyPreviewTheme,
  { surface: string; contentBg: string; contentBgPressed: string }
> = {
  teal: {
    surface: "bg-[#004d6b]",
    contentBg: "bg-card",
    contentBgPressed: "bg-[#e8ecef]",
  },
  red: {
    surface: "bg-[#82142c]",
    contentBg: "bg-card",
    contentBgPressed: "bg-[#e8ecef]",
  },
  purple: {
    surface: "bg-[#5a0e63]",
    contentBg: "bg-card",
    contentBgPressed: "bg-[#e8ecef]",
  },
  green: {
    surface: "bg-[#3d5c0b]",
    contentBg: "bg-card",
    contentBgPressed: "bg-[#e8ecef]",
  },
}

const OFFSET_PX = 8

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

  const borderColor =
    isPressed || isActivated
      ? "var(--preview-border-pressed)"
      : "var(--preview-border-hover)"

  const isLifted = isHovering && !isPressed
  const styles = themeStyles[theme]
  const assetSrc = imageSrc ?? PLACEHOLDER_SRC

  const bodyTransform = isPressed
    ? "translate(0, 0)"
    : isLifted
      ? `translate(-${OFFSET_PX}px, -${OFFSET_PX}px)`
      : "translate(0, 0)"

  return (
    <Link
      to={to}
      className={cn("case-study-preview group block select-none", className)}
      style={
        {
          "--preview-border-hover": "#f0b4c4",
          "--preview-border-pressed": "#8b1a2b",
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
        {/* Offset outline (pink → dark red) — hover / press only */}
        <div
          aria-hidden
          className="absolute inset-0 rounded-2xl transition-opacity duration-150 ease-out"
          style={{
            transform: `translate(${OFFSET_PX}px, ${OFFSET_PX}px)`,
            backgroundColor: borderColor,
            opacity: isHovering || isPressed || isActivated ? 1 : 0,
          }}
        />

        {/* Card: white shell, teal image band, white text band */}
        <div
          className={cn(
            "relative overflow-hidden rounded-2xl border border-border/50 bg-card shadow-elevation-1 transition-transform duration-150 ease-out motion-reduce:transition-none"
          )}
          style={{ transform: bodyTransform }}
        >
          <div className={cn("p-5", styles.surface)}>
            <PreviewAsset
              imageSrc={assetSrc}
              hoverImageSrc={hoverImageSrc}
              imageAlt={imageAlt}
              showHover={showHoverImage}
            />
          </div>

          <div
            className={cn(
              "space-y-3 px-5 pb-5 pt-3 transition-colors duration-150",
              isPressed || isActivated ? styles.contentBgPressed : styles.contentBg
            )}
          >
            <div className="space-y-1">
              <h3 className="type-title3-em text-secondary-foreground">{title}</h3>
              <p className="type-body2 text-muted-foreground">{description}</p>
            </div>

            {visibleTags.length > 0 && showTags && (
              <div className="flex flex-wrap gap-2">
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
  return (
    <div className="relative aspect-[16/10] w-full overflow-hidden rounded-lg bg-card">
      <img
        src={imageSrc}
        alt={imageAlt}
        className={cn(
          "absolute inset-0 size-full object-cover object-top transition-opacity duration-200",
          showHover && hoverImageSrc ? "opacity-0" : "opacity-100"
        )}
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
