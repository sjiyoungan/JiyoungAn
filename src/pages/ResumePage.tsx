import { Download } from "lucide-react"
import { useEffect, useState } from "react"

import { SiteContainer } from "@/components/SiteContainer"
import { Button } from "@/components/ui/button"

const RESUME_PATH = "/resume.pdf"
const RESUME_FILENAME = "Jiyoung-An-Resume.pdf"

export function ResumePage() {
  const [hasPdf, setHasPdf] = useState(false)

  useEffect(() => {
    fetch(RESUME_PATH, { method: "HEAD" })
      .then((res) => setHasPdf(res.ok))
      .catch(() => setHasPdf(false))
  }, [])

  return (
    <SiteContainer className="py-12 sm:py-16">
      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <header className="space-y-2">
          <p className="type-caption1-uppercase text-muted-foreground">
            Resume
          </p>
          <h1 className="type-title1-em text-foreground">Jiyoung An</h1>
        </header>

        <Button variant="outline" className="shrink-0" disabled={!hasPdf} asChild={hasPdf}>
          {hasPdf ? (
            <a href={RESUME_PATH} download={RESUME_FILENAME}>
              <Download className="size-4" aria-hidden />
              Download PDF
            </a>
          ) : (
            <span>
              <Download className="size-4" aria-hidden />
              Download PDF
            </span>
          )}
        </Button>
      </div>

      <div className="overflow-hidden rounded-xl shadow-elevation-1 ring-1 ring-border">
        {hasPdf ? (
          <iframe
            src={`${RESUME_PATH}#toolbar=0&navpanes=0`}
            title="Jiyoung An resume"
            className="h-[min(80vh,1100px)] w-full bg-card"
          />
        ) : (
          <div
            className="flex aspect-[8.5/11] w-full items-center justify-center bg-card sm:min-h-[70vh]"
            aria-label="Resume preview placeholder"
          >
            <p className="type-body2 text-muted-foreground">
              Resume preview — add{" "}
              <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-xs">
                public/resume.pdf
              </code>
            </p>
          </div>
        )}
      </div>
    </SiteContainer>
  )
}
