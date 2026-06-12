import { Outlet } from "react-router-dom"

import { SiteHeader } from "@/components/SiteHeader"

export function SiteLayout() {
  return (
    <div className="min-h-svh bg-neutral-950 text-foreground">
      <SiteHeader />
      <Outlet />
    </div>
  )
}
