import { cn } from "@/lib/utils";

interface ImagePlaceholderProps {
  className?: string;
  aspectRatio?: "square" | "video" | "portrait" | "hero";
  label?: string;
}

const aspectRatioClasses = {
  square: "aspect-square",
  video: "aspect-video",
  portrait: "aspect-[3/4]",
  hero: "aspect-[21/9]",
};

export function ImagePlaceholder({
  className,
  aspectRatio = "square",
  label,
}: ImagePlaceholderProps) {
  return (
    <div
      className={cn(
        "bg-muted rounded-xl flex items-center justify-center",
        aspectRatioClasses[aspectRatio],
        className
      )}
    >
      {label && (
        <span className="text-muted-foreground text-sm">{label}</span>
      )}
    </div>
  );
}

