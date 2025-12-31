"use client";

import Image from "next/image";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { ImagePlaceholder } from "./image-placeholder";

interface ResponsiveImageProps {
  src?: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  aspectRatio?: "square" | "video" | "portrait" | "hero" | "wide";
  priority?: boolean;
  sizes?: string;
  placeholder?: "blur" | "empty";
  blurDataURL?: string;
  fallback?: boolean;
  fallbackLabel?: string;
}

/**
 * 반응형 이미지 컴포넌트
 * next/image를 활용하여 최적화된 이미지 로딩
 * 
 * @example
 * <ResponsiveImage
 *   src="/images/stone-1.jpg"
 *   alt="돌 이미지"
 *   aspectRatio="square"
 *   sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
 * />
 */
export function ResponsiveImage({
  src,
  alt,
  width,
  height,
  className,
  aspectRatio = "square",
  priority = false,
  sizes,
  placeholder = "empty",
  blurDataURL,
  fallback = true,
  fallbackLabel,
}: ResponsiveImageProps) {
  const [error, setError] = useState(false);

  // 기본 sizes 설정 (제공되지 않은 경우)
  const defaultSizes = sizes || 
    (aspectRatio === "square" 
      ? "(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
      : aspectRatio === "portrait"
      ? "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
      : "(max-width: 1024px) 100vw, 80vw");

  // 이미지가 없거나 에러 발생 시 placeholder 표시
  if (!src || error) {
    if (fallback) {
      return (
        <ImagePlaceholder
          aspectRatio={aspectRatio}
          className={className}
          label={fallbackLabel || alt}
          showIcon
        />
      );
    }
    return null;
  }

  // aspectRatio에 따른 기본 크기
  const aspectRatios = {
    square: { width: 400, height: 400 },
    video: { width: 640, height: 360 },
    portrait: { width: 300, height: 400 },
    hero: { width: 1920, height: 823 },
    wide: { width: 1280, height: 720 },
  };

  const defaultDimensions = aspectRatios[aspectRatio];

  return (
    <div
      className={cn(
        "relative overflow-hidden",
        aspectRatio === "square" && "aspect-square",
        aspectRatio === "video" && "aspect-video",
        aspectRatio === "portrait" && "aspect-[3/4]",
        aspectRatio === "hero" && "aspect-[21/9]",
        aspectRatio === "wide" && "aspect-[16/9]",
        className
      )}
    >
      <Image
        src={src}
        alt={alt}
        width={width || defaultDimensions.width}
        height={height || defaultDimensions.height}
        className="object-cover w-full h-full"
        priority={priority}
        sizes={defaultSizes}
        placeholder={placeholder}
        blurDataURL={blurDataURL}
        onError={() => {
          console.log(`[ResponsiveImage] 이미지 로드 실패: ${src}`);
          setError(true);
        }}
        onLoad={() => {
          console.log(`[ResponsiveImage] 이미지 로드 성공: ${src}`);
        }}
      />
    </div>
  );
}

