import { Link, NavLink } from "react-router-dom"

import { SiteContainer } from "@/components/SiteContainer"
import { cn } from "@/lib/utils"

const navLinkClass = ({ isActive }: { isActive: boolean }) =>
  cn(
    "text-sm transition-colors",
    isActive ? "text-white" : "text-neutral-400 hover:text-white"
  )

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-neutral-800/80 bg-neutral-950/90 backdrop-blur-sm">
      <SiteContainer className="flex items-center justify-between py-4">
        <Link
          to="/"
          className="text-sm font-medium text-white transition-colors hover:text-white/80"
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
