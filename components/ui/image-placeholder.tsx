import { cn } from "@/lib/utils";

interface ImagePlaceholderProps {
  className?: string;
  aspectRatio?: "square" | "video" | "portrait" | "hero" | "wide";
  label?: string;
  showIcon?: boolean;
}

const aspectRatioClasses = {
  square: "aspect-square",
  video: "aspect-video",
  portrait: "aspect-[3/4]",
  hero: "aspect-[21/9]",
  wide: "aspect-[16/9]",
};

export function ImagePlaceholder({
  className,
  aspectRatio = "square",
  label,
  showIcon = false,
}: ImagePlaceholderProps) {
  return (
    <div
      className={cn(
        "bg-muted rounded-xl flex items-center justify-center relative overflow-hidden",
        aspectRatioClasses[aspectRatio],
        className
      )}
      role="img"
      aria-label={label || "이미지 placeholder"}
    >
      {showIcon && (
        <svg
          className="w-12 h-12 text-muted-foreground/30"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
          />
        </svg>
      )}
      {label && (
        <span className="text-muted-foreground text-sm absolute bottom-2 left-2 right-2 text-center">
          {label}
        </span>
      )}
    </div>
  );
}

