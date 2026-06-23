import type {
  CaseStudyPreviewTag,
  CaseStudyPreviewTheme,
} from "@/components/CaseStudyPreview"
import type { CaseStudy, CaseStudySection } from "@/data/case-study"

export type Project = {
  slug: string
  title: string
  subtitle: string
  description: string
  sections: CaseStudySection[]
  preview: {
    theme: CaseStudyPreviewTheme
    imageSrc?: string
    hoverImageSrc?: string
    imageAlt?: string
    tags: CaseStudyPreviewTag[]
  }
}

const businessCreditReportSections: CaseStudySection[] = [
  {
    number: 1,
    title: "The problem",
    description:
      "A confusing report built for lenders, not business owners. Users couldn't act on it.",
    tags: [
      { label: "before screenshot", variant: "screenshot" },
      { label: "1–2 sentences", variant: "copy" },
    ],
    placeholderCount: 1,
  },
  {
    number: 2,
    title: "Research & domain learning",
    description:
      "Studied the JSON data structure, credit bureau APIs, and mapped every data point by importance.",
    tags: [
      { label: "data hierarchy chart", variant: "screenshot" },
      { label: "brief copy", variant: "copy" },
    ],
    placeholderCount: 1,
  },
  {
    number: 3,
    title: "Reframing the lens",
    description:
      "Redesigned from the business owner's point of view — same data, different purpose.",
    tags: [
      { label: "key design decision", variant: "decision" },
      { label: "brief copy", variant: "copy" },
    ],
    placeholderCount: 1,
  },
  {
    number: 4,
    title: "Progressive disclosure",
    description:
      "Score → 5 category summaries → accordion detail → blade/drawer.",
    tags: [
      { label: "flow diagram", variant: "screenshot" },
      { label: "accordion screenshot", variant: "screenshot" },
      { label: "key design decision", variant: "decision" },
    ],
    placeholderCount: 2,
  },
  {
    number: 5,
    title: "Showing progress",
    description:
      "Delta indicators on every metric. Users need to see that NAV is working.",
    tags: [
      { label: "change indicators screenshot", variant: "screenshot" },
      { label: "brief copy", variant: "copy" },
    ],
    placeholderCount: 1,
  },
  {
    number: 6,
    title: "Handling multiple scores per bureau",
    description:
      "Secondary scores, bureau-specific data models, and when to show each.",
    tags: [
      { label: "score UI screenshot", variant: "screenshot" },
      { label: "key design decision", variant: "decision" },
    ],
    placeholderCount: 1,
  },
  {
    number: 7,
    title: "Teaching without teaching",
    description:
      "Contextualized industry jargon and clear next steps inside the interface.",
    tags: [
      { label: "factor card screenshot", variant: "screenshot" },
      { label: "brief copy", variant: "copy" },
    ],
    placeholderCount: 1,
  },
  {
    number: 8,
    title: "Outcome",
    description:
      "A report that works for all user types — one that educates without overwhelming.",
    tags: [
      { label: "after screenshot", variant: "screenshot" },
      { label: "brief copy", variant: "copy" },
    ],
    placeholderCount: 1,
  },
]

export const projects: Project[] = [
  {
    slug: "improving-business-credit-reports",
    title: "Improving business credit reports",
    subtitle: "NAV Technologies",
    description:
      "Redesigning a lender-focused credit report for business owners — clearer hierarchy, progressive disclosure, and actionable insights.",
    sections: businessCreditReportSections,
    preview: {
      theme: "teal",
      tags: [
        { label: "UX", show: true },
        { label: "Fintech", show: true },
        { label: "Data viz", show: true },
        { label: "B2B", show: false },
      ],
    },
  },
]

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug)
}

export function projectToCaseStudy(project: Project): CaseStudy {
  return {
    title: project.title,
    subtitle: project.subtitle,
    sections: project.sections,
  }
}
