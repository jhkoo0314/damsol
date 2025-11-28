"use client";

import { Stone } from "@/lib/types";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { ResponsiveImage } from "@/components/ui/responsive-image";
import { ImagePlaceholder } from "@/components/ui/image-placeholder";

interface StoneDetailModalProps {
  stone: Stone | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function StoneDetailModal({
  stone,
  open,
  onOpenChange,
}: StoneDetailModalProps) {
  if (!stone) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle className="font-serif text-2xl">{stone.name}</DialogTitle>
          <DialogDescription>
            No. {stone.number} · {stone.color}
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6">
          {/* 돌 이미지 */}
          <div className="aspect-square w-full overflow-hidden rounded-lg">
            {stone.imageUrl ? (
              <ResponsiveImage
                src={stone.imageUrl}
                alt={`${stone.name} - ${stone.color}`}
                aspectRatio="square"
                className="h-full w-full"
                sizes="(max-width: 768px) 100vw, 500px"
                fallbackLabel={`${stone.name} 클로즈업`}
              />
            ) : (
              <ImagePlaceholder
                aspectRatio="square"
                className="h-full w-full"
                label={`${stone.name} 클로즈업`}
              />
            )}
          </div>

          {/* 돌 정보 */}
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold">돌 정보</h3>
              <div className="mt-2 space-y-1 text-sm text-muted-foreground">
                <p>
                  <span className="font-medium">색상:</span> {stone.color}
                </p>
                <p>
                  <span className="font-medium">결 특징:</span> {stone.texture}
                </p>
                <p>
                  <span className="font-medium">상태:</span>{" "}
                  {stone.status === "available" ? "판매중" : "품절"}
                </p>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

