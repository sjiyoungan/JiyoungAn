import { CaseStudyPreview } from "@/components/CaseStudyPreview"
import { projects } from "@/data/projects"

export function ProjectsPage() {
  return (
    <div className="mx-auto w-full max-w-[896px] px-[60px] py-12 lg:py-16">
      <ul className="flex flex-col gap-[52px]">
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
