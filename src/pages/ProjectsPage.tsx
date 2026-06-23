import { CaseStudyPreview } from "@/components/CaseStudyPreview"
import { projects } from "@/data/projects"

export function ProjectsPage() {
  return (
    <div className="px-6 py-10 sm:px-10 sm:py-12 lg:px-14 lg:py-16">
      <ul className="flex flex-col gap-12 lg:gap-14">
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
