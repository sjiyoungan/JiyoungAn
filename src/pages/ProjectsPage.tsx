import { useRef, useState } from "react"

import { CaseStudyPreview } from "@/components/CaseStudyPreview"
import { projects } from "@/data/projects"
import { cn } from "@/lib/utils"

const SCRIM_CLEAR_MS = 50

export function ProjectsPage() {
  const [hoveredSlug, setHoveredSlug] = useState<string | null>(null)
  const clearTimerRef = useRef<number | null>(null)

  const handleHoverChange = (slug: string, hovering: boolean) => {
    if (hovering) {
      if (clearTimerRef.current !== null) {
        window.clearTimeout(clearTimerRef.current)
        clearTimerRef.current = null
      }
      setHoveredSlug(slug)
      return
    }

    clearTimerRef.current = window.setTimeout(() => {
      setHoveredSlug((current) => (current === slug ? null : current))
      clearTimerRef.current = null
    }, SCRIM_CLEAR_MS)
  }

  return (
    <>
      <div
        aria-hidden
        className={cn(
          "pointer-events-none fixed inset-0 z-40 bg-[#000000]/30 transition-opacity duration-150 motion-reduce:transition-none",
          hoveredSlug ? "opacity-100" : "opacity-0"
        )}
      />

      <div className="relative z-0 mx-auto w-full max-w-[896px] px-[60px] py-12 lg:py-16">
        <ul className="flex flex-col gap-[52px]">
          {projects.map((project) => (
            <li
              key={project.slug}
              className={cn("relative", hoveredSlug === project.slug && "z-50")}
            >
              <CaseStudyPreview
                to={`/projects/${project.slug}`}
                title={project.title}
                description={project.description}
                theme={project.preview.theme}
                imageSrc={project.preview.imageSrc}
                hoverImageSrc={project.preview.hoverImageSrc}
                imageAlt={project.preview.imageAlt}
                tags={project.preview.tags}
                onHoverChange={(hovering) => handleHoverChange(project.slug, hovering)}
              />
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}
