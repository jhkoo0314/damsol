"use client";

import { Stone } from "@/lib/types";
import { Card } from "@/components/ui/card";
import { ResponsiveImage } from "@/components/ui/responsive-image";
import { ImagePlaceholder } from "@/components/ui/image-placeholder";
import { cn } from "@/lib/utils";

interface StoneCardProps {
  stone: Stone;
  onClick?: () => void;
  className?: string;
}

export function StoneCard({ stone, onClick, className }: StoneCardProps) {
  const isSoldOut = stone.status === "sold_out";

  return (
    <Card
      className={cn(
        "group relative cursor-pointer overflow-hidden transition-all hover:shadow-lg",
        isSoldOut && "opacity-60",
        className
      )}
      onClick={onClick}
    >
      <div className="relative aspect-square overflow-hidden">
        {stone.imageUrl ? (
          <ResponsiveImage
            src={stone.imageUrl}
            alt={`${stone.name} - ${stone.color}`}
            aspectRatio="square"
            className="h-full w-full transition-transform group-hover:scale-105"
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
            fallbackLabel={`${stone.name} 클로즈업`}
          />
        ) : (
          <ImagePlaceholder
            aspectRatio="square"
            className="h-full w-full transition-transform group-hover:scale-105"
            label={`${stone.name} 클로즈업`}
          />
        )}
        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-black/60 opacity-0 transition-opacity group-hover:opacity-100">
          <div className="flex h-full flex-col items-center justify-center p-4 text-center text-white">
            <h3 className="font-serif text-xl font-semibold">{stone.name}</h3>
            <p className="mt-2 text-sm text-white/90">{stone.color}</p>
            <p className="mt-1 text-xs text-white/80">No. {stone.number}</p>
            {isSoldOut && (
              <span className="mt-2 rounded-full bg-red-500/80 px-3 py-1 text-xs font-medium">
                품절
              </span>
            )}
          </div>
        </div>
        {/* Sold Out Badge */}
        {isSoldOut && (
          <div className="absolute right-2 top-2 rounded-full bg-red-500 px-2 py-1 text-xs font-medium text-white">
            품절
          </div>
        )}
      </div>
      {/* Default Info (visible when not hovering) */}
      <div className="p-4">
        <h3 className="font-medium">{stone.name}</h3>
        <p className="mt-1 text-sm text-muted-foreground">{stone.color}</p>
        <p className="text-xs text-muted-foreground">No. {stone.number}</p>
      </div>
    </Card>
  );
}

