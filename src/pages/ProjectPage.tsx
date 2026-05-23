import { Link, Navigate, useParams } from "react-router-dom"

import { CaseStudyPage } from "@/components/portfolio/CaseStudyPage"
import { getProjectBySlug, projectToCaseStudy } from "@/data/projects"

export function ProjectPage() {
  const { slug } = useParams<{ slug: string }>()
  const project = slug ? getProjectBySlug(slug) : undefined

  if (!project) {
    return <Navigate to="/" replace />
  }

  return (
    <>
      <div className="border-b border-neutral-800 bg-neutral-950">
        <div className="mx-auto flex max-w-3xl items-center justify-between px-4 py-4 sm:px-6">
          <Link
            to="/"
            className="text-sm text-neutral-400 transition-colors hover:text-white"
          >
            ← Jiyoung An
          </Link>
        </div>
      </div>
      <CaseStudyPage study={projectToCaseStudy(project)} />
    </>
  )
}
