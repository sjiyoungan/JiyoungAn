import { Download } from "lucide-react"
import { useEffect, useState } from "react"

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
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 sm:py-16">
      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <header className="space-y-2">
          <p className="text-sm font-medium tracking-wide text-neutral-400 uppercase">
            Resume
          </p>
          <h1 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
            Jiyoung An
          </h1>
        </header>

        <Button
          variant="outline"
          className="shrink-0 border-neutral-700 bg-transparent text-white hover:bg-neutral-800 hover:text-white"
          disabled={!hasPdf}
          asChild={hasPdf}
        >
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

      <div className="overflow-hidden rounded-xl ring-1 ring-foreground/10">
        {hasPdf ? (
          <iframe
            src={`${RESUME_PATH}#toolbar=0&navpanes=0`}
            title="Jiyoung An resume"
            className="h-[min(80vh,1100px)] w-full bg-white"
          />
        ) : (
          <div
            className="flex aspect-[8.5/11] w-full items-center justify-center bg-white sm:min-h-[70vh]"
            aria-label="Resume preview placeholder"
          >
            <p className="text-sm text-neutral-400">
              Resume preview — add <code className="font-mono">public/resume.pdf</code>
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
