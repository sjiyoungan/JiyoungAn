import { cn } from "@/lib/utils"

import { SideNavigationMenuItem } from "@/components/SideNavigationMenuItem"

type SideNavigationProps = {
  className?: string
}

const siteBio =
  "Product designer specializing in information architecture and designing for complex, data-heavy systems."

export function SideNavigation({ className }: SideNavigationProps) {
  return (
    <aside
      className={cn(
        "flex w-64 shrink-0 flex-col border-r border-dashed border-border px-6 py-10 sm:px-8 sm:py-12",
        className
      )}
      aria-label="Site"
    >
      <div className="space-y-3">
        <p className="type-display2 text-foreground">Jiyoung An</p>
        <p className="type-body1 text-muted-foreground">{siteBio}</p>
      </div>

      <nav className="mt-16 flex flex-col gap-6" aria-label="Main">
        <SideNavigationMenuItem
          to="/"
          isActive={(pathname) =>
            pathname === "/" || pathname.startsWith("/projects/")
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
