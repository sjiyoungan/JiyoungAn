import type { ReactNode } from "react"

import { cn } from "@/lib/utils"

type SiteContainerProps = {
  children: ReactNode
  className?: string
}

export function SiteContainer({ children, className }: SiteContainerProps) {
  return (
    <div className={cn("mx-auto w-full max-w-[796px] px-4 sm:px-6", className)}>
      {children}
    </div>
  )
}
