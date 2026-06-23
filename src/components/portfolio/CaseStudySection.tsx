import type { CaseStudySection as Section } from "@/data/case-study"

import { AssetTagBadge } from "./AssetTag"
import { PlaceholderImage } from "./PlaceholderImage"

type CaseStudySectionProps = {
  section: Section
}

export function CaseStudySection({ section }: CaseStudySectionProps) {
  const placeholderCount = section.placeholderCount ?? 1

  return (
    <article className="rounded-2xl bg-card p-6 shadow-elevation-1 ring-1 ring-border/60 sm:p-8">
      <div className="flex flex-col gap-6 sm:flex-row sm:gap-8">
        <div
          className="shrink-0 text-5xl font-light tabular-nums text-muted-foreground/50 sm:w-14 sm:text-6xl"
          aria-hidden
        >
          {section.number}
        </div>

        <div className="flex min-w-0 flex-1 flex-col gap-5">
          <header className="space-y-3">
            <h2 className="type-title2 text-foreground sm:text-2xl">
              {section.title}
            </h2>
            <p className="max-w-prose text-base leading-relaxed text-muted-foreground">
              {section.description}
            </p>
          </header>

          <div
            className={
              placeholderCount > 1
                ? "grid gap-4 sm:grid-cols-2"
                : "flex flex-col gap-4"
            }
          >
            {Array.from({ length: placeholderCount }).map((_, i) => (
              <PlaceholderImage
                key={i}
                label={`${section.title} — ${i + 1}`}
                aspect={placeholderCount > 1 ? "video" : "wide"}
              />
            ))}
          </div>

          <footer className="flex flex-wrap gap-2 pt-1">
            {section.tags.map((tag) => (
              <AssetTagBadge
                key={tag.label}
                label={tag.label}
                variant={tag.variant}
              />
            ))}
          </footer>
        </div>
      </div>
    </article>
  )
}
