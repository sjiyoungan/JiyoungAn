import { Link, NavLink } from "react-router-dom"

import { SiteContainer } from "@/components/SiteContainer"
import { cn } from "@/lib/utils"

const navLinkClass = ({ isActive }: { isActive: boolean }) =>
  cn(
    "type-body2 transition-colors",
    isActive ? "text-primary" : "text-muted-foreground hover:text-foreground"
  )

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur-sm">
      <SiteContainer className="flex items-center justify-between py-4">
        <Link
          to="/"
          className="type-body2 font-medium text-foreground transition-colors hover:text-primary"
        >
          Jiyoung An
        </Link>

        <nav className="flex items-center gap-6" aria-label="Main">
          <NavLink to="/about" className={navLinkClass}>
            About
          </NavLink>
          <NavLink to="/resume" className={navLinkClass}>
            Resume
          </NavLink>
        </nav>
      </SiteContainer>
    </header>
  )
}
