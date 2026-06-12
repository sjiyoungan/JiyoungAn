import { SiteContainer } from "@/components/SiteContainer"

export function AboutPage() {
  return (
    <SiteContainer className="py-16 sm:py-20">
      <header className="mb-10 space-y-3">
        <p className="text-sm font-medium tracking-wide text-neutral-400 uppercase">
          About
        </p>
        <h1 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          Designing for clarity
        </h1>
        <p className="text-lg leading-relaxed text-neutral-400">
          UX designer focused on complex data, financial products, and tools that
          help people make confident decisions.
        </p>
      </header>

      <div className="space-y-4 text-base leading-relaxed text-neutral-400">
        <p>
          Replace this section with your bio, background, and what you&apos;re
          looking for next.
        </p>
      </div>
    </SiteContainer>
  )
}
