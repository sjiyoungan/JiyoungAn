import { SiteContainer } from "@/components/SiteContainer"

export function AboutPage() {
  return (
    <SiteContainer className="py-16 sm:py-20">
      <header className="mb-10 space-y-3">
        <p className="type-caption1-uppercase text-muted-foreground">About</p>
        <h1 className="type-display2 text-foreground">Designing for clarity</h1>
        <p className="type-body1 text-muted-foreground">
          UX designer focused on complex data, financial products, and tools that
          help people make confident decisions.
        </p>
      </header>

      <div className="type-body1 space-y-4 text-muted-foreground">
        <p>
          Replace this section with your bio, background, and what you&apos;re
          looking for next.
        </p>
      </div>
    </SiteContainer>
  )
}
