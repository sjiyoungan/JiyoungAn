import { cn } from "@/lib/utils"
import type { AssetTagVariant } from "@/data/case-study"

const variantStyles: Record<AssetTagVariant, string> = {
  screenshot: "bg-[var(--sys-primary-container)] text-[var(--sys-on-primary-container)]",
  decision: "bg-[var(--sys-accent-container)] text-[var(--sys-on-accent-container)]",
  copy: "bg-muted text-muted-foreground",
}

type AssetTagProps = {
  label: string
  variant: AssetTagVariant
}

export function AssetTagBadge({ label, variant }: AssetTagProps) {
  return (
    <span
      className={cn(
        "inline-flex rounded-md px-2.5 py-1 text-xs font-medium",
        variantStyles[variant]
      )}
    >
      {label}
    </span>
  )
}
