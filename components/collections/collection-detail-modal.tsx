"use client";

import { Collection } from "@/lib/types";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { ImagePlaceholder } from "@/components/ui/image-placeholder";

interface CollectionDetailModalProps {
  collection: Collection | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function CollectionDetailModal({
  collection,
  open,
  onOpenChange,
}: CollectionDetailModalProps) {
  if (!collection) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-lg max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="font-serif text-xl">
            {collection.details?.title || collection.name}
          </DialogTitle>
          <DialogDescription>
            {collection.description}
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4">
          {/* 컬렉션 이미지 */}
          <div className="aspect-[3/4] w-full max-w-xs mx-auto overflow-hidden rounded-lg">
            {collection.imageUrl ? (
              <div
                className="w-full h-full bg-cover bg-center"
                style={{ backgroundImage: `url(${collection.imageUrl})` }}
              />
            ) : (
              <ImagePlaceholder
                aspectRatio="portrait"
                className="h-full w-full"
                label={`${collection.name} 이미지`}
              />
            )}
          </div>

          {/* 컬렉션 정보 */}
          <div className="space-y-3">
            {collection.details?.content && (
              <div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {collection.details.content}
                </p>
              </div>
            )}

            {collection.details?.features && collection.details.features.length > 0 && (
              <div>
                <h3 className="font-semibold mb-2 text-sm">주요 특징</h3>
                <ul className="space-y-1.5">
                  {collection.details.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-2 text-xs text-muted-foreground">
                      <span className="text-[#B91C1C] mt-1">•</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

