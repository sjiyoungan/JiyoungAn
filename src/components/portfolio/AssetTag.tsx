import { cn } from "@/lib/utils"
import type { AssetTagVariant } from "@/data/case-study"

const variantStyles: Record<AssetTagVariant, string> = {
  screenshot: "bg-sky-100 text-sky-900",
  decision: "bg-amber-100 text-amber-900",
  copy: "bg-neutral-200 text-neutral-700",
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
