import { Button } from "@/components/ui/button"

export function ResumePage() {
  return (
    <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-20">
      <header className="mb-10 space-y-3">
        <p className="text-sm font-medium tracking-wide text-neutral-400 uppercase">
          Resume
        </p>
        <h1 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          Jiyoung An
        </h1>
        <p className="text-lg text-neutral-400">
          Download or view my resume below.
        </p>
      </header>

      <div className="rounded-2xl bg-card p-6 ring-1 ring-foreground/5 sm:p-8">
        <p className="mb-6 text-sm leading-relaxed text-muted-foreground">
          Add your PDF to <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-xs">public/resume.pdf</code> to enable direct download.
        </p>
        <Button asChild>
          <a href="/resume.pdf" target="_blank" rel="noreferrer">
            View resume (PDF)
          </a>
        </Button>
      </div>
    </div>
  )
}
