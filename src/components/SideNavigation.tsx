import { cn } from "@/lib/utils"

import { SideNavigationMenuItem } from "@/components/SideNavigationMenuItem"

type SideNavigationProps = {
  className?: string
}

const siteBio =
  "Product designer specializing in information architecture and designing for complex, data-heavy systems."

/** Figma right rail: on-surface-dim, dash 2 / gap 4, butt cap (straight vertical — miter N/A) */
const SIDE_NAV_DASH_STROKE = "repeating-linear-gradient(to bottom, var(--sys-on-surface-dim) 0 2px, transparent 2px 6px)"

export function SideNavigation({ className }: SideNavigationProps) {
  return (
    <aside
      className={cn(
        "relative flex w-[280px] shrink-0 flex-col px-8 py-12 lg:py-16",
        className
      )}
      aria-label="Site"
    >
      <span
        aria-hidden
        className="pointer-events-none absolute inset-y-0 right-0 w-px"
        style={{ background: SIDE_NAV_DASH_STROKE }}
      />
      <div className="space-y-3">
        <p className="type-display2 text-foreground">Jiyoung An</p>
        <p className="type-body1 text-muted-foreground">{siteBio}</p>
      </div>

      <nav className="mt-16 flex flex-col gap-6" aria-label="Main">
        <SideNavigationMenuItem
          to="/"
          isActive={(pathname) =>
            pathname !== "/about" && pathname !== "/resume"
          }
        >
          Projects
        </SideNavigationMenuItem>
        <SideNavigationMenuItem to="/resume">Resume</SideNavigationMenuItem>
        <SideNavigationMenuItem to="/about">About me</SideNavigationMenuItem>
      </nav>
    </aside>
  )
}
