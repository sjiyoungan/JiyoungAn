import { Link, NavLink } from "react-router-dom"

import { cn } from "@/lib/utils"

const navLinkClass = ({ isActive }: { isActive: boolean }) =>
  cn(
    "text-sm transition-colors",
    isActive ? "text-white" : "text-neutral-400 hover:text-white"
  )

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-neutral-800/80 bg-neutral-950/90 backdrop-blur-sm">
      <div className="mx-auto flex max-w-3xl items-center justify-between px-4 py-4 sm:px-6">
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
      </div>
    </header>
  )
}
