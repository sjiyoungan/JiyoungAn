import { SiteContainer } from "@/components/SiteContainer"
import type { CaseStudy } from "@/data/case-study"

import { CaseStudySection } from "./CaseStudySection"

type CaseStudyPageProps = {
  study: CaseStudy
}

export function CaseStudyPage({ study }: CaseStudyPageProps) {
  return (
    <div>
      <SiteContainer className="py-12 sm:py-16 lg:py-20">
        <header className="mb-10 space-y-2 text-center sm:mb-14">
          <p className="type-caption1-uppercase text-muted-foreground">
            Case study
          </p>
          <h1 className="type-display2 text-foreground">{study.title}</h1>
          <p className="type-body1 text-muted-foreground">{study.subtitle}</p>
        </header>

        <div className="flex flex-col gap-5 sm:gap-6">
          {study.sections.map((section) => (
            <CaseStudySection key={section.number} section={section} />
          ))}
        </div>

        <footer className="type-caption2 mt-12 text-center text-muted-foreground">
          Jiyoung An · UX Design Portfolio
        </footer>
      </SiteContainer>
    </div>
  )
}
