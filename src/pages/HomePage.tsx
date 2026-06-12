import { ArrowUpRight } from "lucide-react"
import { Link } from "react-router-dom"

import { projects } from "@/data/projects"

export function HomePage() {
  return (
    <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:py-32">
      <header className="mb-16 space-y-4 sm:mb-20">
        <p className="text-sm font-medium tracking-wide text-neutral-400 uppercase">
          UX Design Portfolio
        </p>
        <p className="max-w-md text-lg leading-relaxed text-neutral-400">
          Product design case studies — research, systems thinking, and
          interfaces that help people understand complex information.
        </p>
      </header>

      <section>
        <h2 className="mb-6 text-sm font-medium tracking-wide text-neutral-500 uppercase">
          Projects
        </h2>
        <ul className="flex flex-col gap-3">
          {projects.map((project) => (
            <li key={project.slug}>
              <Link
                to={`/projects/${project.slug}`}
                className="group flex items-start justify-between gap-4 rounded-2xl bg-card p-5 ring-1 ring-foreground/5 transition-colors hover:bg-card/90 sm:p-6"
              >
                <div className="min-w-0 space-y-1.5">
                  <span className="block text-lg font-medium text-foreground group-hover:text-foreground/90">
                    {project.title}
                  </span>
                  <span className="block text-sm text-muted-foreground">
                    {project.subtitle}
                  </span>
                  <p className="pt-1 text-sm leading-relaxed text-muted-foreground/90">
                    {project.description}
                  </p>
                </div>
                <ArrowUpRight
                  className="mt-1 size-5 shrink-0 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  aria-hidden
                />
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <footer className="mt-16 text-sm text-neutral-500">
        © {new Date().getFullYear()} Jiyoung An
      </footer>
    </div>
  )
}
