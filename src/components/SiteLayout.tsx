import { Outlet } from "react-router-dom"

import { SiteHeader } from "@/components/SiteHeader"

export function SiteLayout() {
  return (
    <div className="min-h-svh bg-background text-foreground">
      <SiteHeader />
      <Outlet />
    </div>
  )
}
