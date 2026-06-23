import { SiteContainer } from "@/components/SiteContainer"
import { CaseStudyPreview } from "@/components/CaseStudyPreview"
import { projects } from "@/data/projects"

export function HomePage() {
  return (
    <SiteContainer className="py-16 sm:py-24 lg:py-32">
      <header className="mb-16 space-y-4 sm:mb-20">
        <p className="type-caption1-uppercase text-muted-foreground">
          UX Design Portfolio
        </p>
        <h1 className="type-display2 text-foreground">Jiyoung An</h1>
        <p className="type-body1 max-w-md text-muted-foreground">
          Product design case studies — research, systems thinking, and
          interfaces that help people understand complex information.
        </p>
      </header>

      <section>
        <h2 className="type-caption1-uppercase mb-6 text-muted-foreground">
          Projects
        </h2>
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
      </section>

      <footer className="type-caption2 mt-16 text-muted-foreground">
        © {new Date().getFullYear()} Jiyoung An
      </footer>
    </SiteContainer>
  )
}
