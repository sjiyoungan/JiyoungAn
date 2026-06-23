import { useState } from "react"

import { CaseStudyPreview } from "@/components/CaseStudyPreview"
import { projects } from "@/data/projects"
import { cn } from "@/lib/utils"

export function ProjectsPage() {
  const [hoveredSlug, setHoveredSlug] = useState<string | null>(null)

  const handleHoverChange = (slug: string, hovering: boolean) => {
    if (hovering) {
      setHoveredSlug(slug)
      return
    }

    setHoveredSlug((current) => (current === slug ? null : current))
  }

  return (
    <>
      <div
        aria-hidden
        className={cn(
          "pointer-events-none fixed inset-0 z-40 bg-[#000000]/30 transition-opacity duration-150 ease-[cubic-bezier(0.4,0,0.2,1)] motion-reduce:transition-none",
          hoveredSlug ? "opacity-100" : "opacity-0"
        )}
      />

      <div className="mx-auto w-full max-w-[896px] px-[60px] py-12 lg:py-16">
        <ul className="flex flex-col gap-[52px]">
          {projects.map((project) => {
            const isHovered = hoveredSlug === project.slug

            return (
              <li
                key={project.slug}
                className={cn("relative", isHovered && "z-[60]")}
              >
                <CaseStudyPreview
                  to={`/${project.slug}`}
                  title={project.title}
                  description={project.description}
                  theme={project.preview.theme}
                  imageSrc={project.preview.imageSrc}
                  hoverImageSrc={project.preview.hoverImageSrc}
                  imageAlt={project.preview.imageAlt}
                  tags={project.preview.tags}
                  className={cn(isHovered && "relative z-[60]")}
                  onHoverChange={(hovering) => handleHoverChange(project.slug, hovering)}
                />
              </li>
            )
          })}
        </ul>
      </div>
    </>
  )
}
