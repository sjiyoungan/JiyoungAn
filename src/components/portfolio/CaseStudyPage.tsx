import type { CaseStudy } from "@/data/case-study"

import { CaseStudySection } from "./CaseStudySection"

type CaseStudyPageProps = {
  study: CaseStudy
}

export function CaseStudyPage({ study }: CaseStudyPageProps) {
  return (
    <div className="min-h-svh bg-neutral-950 text-foreground">
      <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16 lg:py-20">
        <header className="mb-10 space-y-2 text-center sm:mb-14">
          <p className="text-sm font-medium tracking-wide text-neutral-400 uppercase">
            Case study
          </p>
          <h1 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            {study.title}
          </h1>
          <p className="text-lg text-neutral-400">{study.subtitle}</p>
        </header>

        <div className="flex flex-col gap-5 sm:gap-6">
          {study.sections.map((section) => (
            <CaseStudySection key={section.number} section={section} />
          ))}
        </div>

        <footer className="mt-12 text-center text-sm text-neutral-500">
          Jiyoung An · UX Design Portfolio
        </footer>
      </div>
    </div>
  )
}
