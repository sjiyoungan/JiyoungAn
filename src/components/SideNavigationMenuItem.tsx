import type { ReactNode } from "react"
import { ChevronRight } from "lucide-react"
import { Link, useLocation, type LinkProps } from "react-router-dom"

import { cn } from "@/lib/utils"

export type SideNavigationMenuItemProps = {
  to: LinkProps["to"]
  children: ReactNode
  /** Custom active check — defaults to exact pathname match */
  isActive?: (pathname: string) => boolean
  className?: string
}

export function SideNavigationMenuItem({
  to,
  children,
  isActive,
  className,
}: SideNavigationMenuItemProps) {
  const { pathname } = useLocation()
  const href = typeof to === "string" ? to : (to.pathname ?? "")
  const active = isActive ? isActive(pathname) : pathname === href

  return (
    <Link
      to={to}
      className={cn(
        "side-nav-menu-item group block rounded-sm outline-none transition-colors duration-150 ease-out motion-reduce:transition-none",
        "focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
        className
      )}
      aria-current={active ? "page" : undefined}
    >
      <span
        className={cn(
          "type-body1 flex items-center gap-0.5 transition-colors duration-150 ease-out motion-reduce:transition-none",
          active
            ? "font-medium text-primary"
            : "text-muted-foreground hover:text-destructive active:text-accent-foreground"
        )}
      >
        <span className="inline-flex w-5 shrink-0 justify-center" aria-hidden>
          {active ? <ChevronRight className="size-4 stroke-[2.5]" /> : null}
        </span>
        <span>{children}</span>
      </span>
    </Link>
  )
}
