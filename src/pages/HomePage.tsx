import { ArrowUpRight } from "lucide-react"
import { Link } from "react-router-dom"

import { SiteContainer } from "@/components/SiteContainer"
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
        <ul className="flex flex-col gap-3">
          {projects.map((project) => (
            <li key={project.slug}>
              <Link
                to={`/projects/${project.slug}`}
                className="group flex items-start justify-between gap-4 rounded-2xl bg-card p-5 shadow-elevation-1 ring-1 ring-border/60 transition-shadow hover:shadow-elevation-2 sm:p-6"
              >
                <div className="min-w-0 space-y-1.5">
                  <span className="type-title3-em block text-foreground">
                    {project.title}
                  </span>
                  <span className="type-body2 block text-muted-foreground">
                    {project.subtitle}
                  </span>
                  <p className="type-body2 pt-1 text-muted-foreground">
                    {project.description}
                  </p>
                </div>
                <ArrowUpRight
                  className="mt-1 size-5 shrink-0 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary"
                  aria-hidden
                />
              </Link>
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
