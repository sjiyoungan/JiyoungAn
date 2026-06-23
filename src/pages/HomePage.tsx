import { SiteContainer } from "@/components/SiteContainer"
import { CaseStudyPreview } from "@/components/CaseStudyPreview"
import { projects } from "@/data/projects"

export function HomePage() {
  return (
    <SiteContainer className="py-12 sm:py-16 lg:py-20">
      <ul className="flex flex-col gap-8">
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
    </SiteContainer>
  )
}
