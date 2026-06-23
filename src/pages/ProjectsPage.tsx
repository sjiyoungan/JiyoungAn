import { CaseStudyPreview } from "@/components/CaseStudyPreview"
import { projects } from "@/data/projects"

export function ProjectsPage() {
  return (
    <div className="px-6 py-10 sm:px-10 sm:py-12 lg:px-12 lg:py-14">
      <ul className="flex max-w-[796px] flex-col gap-10 sm:gap-12">
        {projects.map((project) => (
          <li key={project.slug}>
            <CaseStudyPreview
              to={`/projects/${project.slug}`}
              title={project.title}
              description={project.description}
              theme={project.preview.theme}
              imageSrc={project.preview.imageSrc}
              hoverImageSrc={project.preview.hoverImageSrc}
              imageAlt={project.preview.imageAlt}
              tags={project.preview.tags}
            />
          </li>
        ))}
      </ul>
    </div>
  )
}
