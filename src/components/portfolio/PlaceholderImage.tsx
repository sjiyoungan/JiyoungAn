import { cn } from "@/lib/utils"

type PlaceholderImageProps = {
  label?: string
  className?: string
  aspect?: "video" | "square" | "wide"
}

const aspectClasses = {
  video: "aspect-video",
  square: "aspect-square",
  wide: "aspect-[16/10]",
}

export function PlaceholderImage({
  label = "Placeholder image",
  className,
  aspect = "wide",
}: PlaceholderImageProps) {
  const seed = encodeURIComponent(label)

  return (
    <figure
      className={cn(
        "overflow-hidden rounded-lg border border-border/60 bg-muted/40",
        aspectClasses[aspect],
        className
      )}
    >
      <img
        src={`https://placehold.co/1200x750/e5e5e5/a3a3a3?text=${seed}`}
        alt=""
        className="size-full object-cover"
      />
      <figcaption className="sr-only">{label}</figcaption>
    </figure>
  )
}
