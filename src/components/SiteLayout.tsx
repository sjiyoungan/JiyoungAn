import { Outlet } from "react-router-dom"

import { SideNavigation } from "@/components/SideNavigation"

export function SiteLayout() {
  return (
    <div className="flex min-h-svh bg-background text-foreground">
      <SideNavigation />
      <main className="min-w-0 flex-1">
        <Outlet />
      </main>
    </div>
  )
}
