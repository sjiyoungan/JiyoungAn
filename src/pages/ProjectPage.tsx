import { Navigate, useParams } from "react-router-dom"

import { CaseStudyPage } from "@/components/portfolio/CaseStudyPage"
import { getProjectBySlug, projectToCaseStudy } from "@/data/projects"

export function ProjectPage() {
  const { slug } = useParams<{ slug: string }>()
  const project = slug ? getProjectBySlug(slug) : undefined

  if (!project) {
    return <Navigate to="/" replace />
  }

  return <CaseStudyPage study={projectToCaseStudy(project)} />
}
