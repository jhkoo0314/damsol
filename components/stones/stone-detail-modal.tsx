"use client";

import { useState, useEffect, useRef } from "react";
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
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

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
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const imageContainerRef = useRef<HTMLDivElement>(null);

  // 이미지 배열 준비 (imageUrls가 있으면 사용, 없으면 imageUrl을 배열로)
  const images = stone?.imageUrls && stone.imageUrls.length > 0 
    ? stone.imageUrls 
    : stone?.imageUrl 
      ? [stone.imageUrl] 
      : [];

  // 모달이 열릴 때마다 첫 번째 이미지로 리셋
  useEffect(() => {
    if (open && stone) {
      setCurrentImageIndex(0);
    }
  }, [open, stone?.id]);

  if (!stone) return null;

  // 다음 이미지
  const nextImage = () => {
    if (images.length > 1) {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
      console.log(`[StoneDetailModal] 다음 이미지: ${(currentImageIndex + 1) % images.length + 1}/${images.length}`);
    }
  };

  // 이전 이미지
  const prevImage = () => {
    if (images.length > 1) {
      setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
      console.log(`[StoneDetailModal] 이전 이미지: ${(currentImageIndex - 1 + images.length) % images.length + 1}/${images.length}`);
    }
  };

  // 터치 이벤트 핸들러
  const minSwipeDistance = 50;

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe && images.length > 1) {
      nextImage();
      console.log("[StoneDetailModal] 왼쪽 스와이프 - 다음 이미지");
    }
    if (isRightSwipe && images.length > 1) {
      prevImage();
      console.log("[StoneDetailModal] 오른쪽 스와이프 - 이전 이미지");
    }
  };

  const hasMultipleImages = images.length > 1;

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
          {/* 돌 이미지 슬라이더 */}
          <div className="relative aspect-square w-full overflow-hidden rounded-lg bg-gray-50">
            <div
              ref={imageContainerRef}
              className="relative h-full w-full"
              onTouchStart={onTouchStart}
              onTouchMove={onTouchMove}
              onTouchEnd={onTouchEnd}
            >
              {images.length > 0 ? (
                <div className="relative h-full w-full">
                  {images.map((imageUrl, index) => (
                    <div
                      key={index}
                      className={cn(
                        "absolute inset-0 transition-opacity duration-300",
                        index === currentImageIndex ? "opacity-100 z-10" : "opacity-0 z-0"
                      )}
                    >
                      <ResponsiveImage
                        src={imageUrl}
                        alt={`${stone.name} - ${stone.color} (${index + 1}/${images.length})`}
                        aspectRatio="square"
                        className="h-full w-full"
                        sizes="(max-width: 768px) 100vw, 500px"
                        fallbackLabel={`${stone.name} 클로즈업 ${index + 1}`}
                      />
                    </div>
                  ))}
                </div>
              ) : (
                <ImagePlaceholder
                  aspectRatio="square"
                  className="h-full w-full"
                  label={`${stone.name} 클로즈업`}
                />
              )}

              {/* 좌우 화살표 버튼 (여러 이미지가 있을 때만 표시) */}
              {hasMultipleImages && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-2 top-1/2 z-20 -translate-y-1/2 rounded-full bg-black/50 p-2 text-white transition-all hover:bg-black/70 focus:outline-none focus:ring-2 focus:ring-white/50"
                    aria-label="이전 이미지"
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-2 top-1/2 z-20 -translate-y-1/2 rounded-full bg-black/50 p-2 text-white transition-all hover:bg-black/70 focus:outline-none focus:ring-2 focus:ring-white/50"
                    aria-label="다음 이미지"
                  >
                    <ChevronRight className="h-5 w-5" />
                  </button>
                </>
              )}

              {/* 하단 인디케이터 (여러 이미지가 있을 때만 표시) */}
              {hasMultipleImages && (
                <div className="absolute bottom-2 left-1/2 z-20 flex -translate-x-1/2 gap-1.5">
                  {images.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => {
                        setCurrentImageIndex(index);
                        console.log(`[StoneDetailModal] 인디케이터 클릭: ${index + 1}/${images.length}`);
                      }}
                      className={cn(
                        "h-1.5 rounded-full transition-all",
                        index === currentImageIndex
                          ? "w-6 bg-white"
                          : "w-1.5 bg-white/50 hover:bg-white/75"
                      )}
                      aria-label={`이미지 ${index + 1}로 이동`}
                    />
                  ))}
                </div>
              )}
            </div>
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

