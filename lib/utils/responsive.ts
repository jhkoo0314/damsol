import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * 반응형 클래스 유틸리티
 * Tailwind의 반응형 클래스를 더 쉽게 관리할 수 있도록 도와주는 함수들
 */

/**
 * 모바일 전용 클래스
 */
export function mobile(...classes: ClassValue[]) {
  return twMerge(clsx(classes));
}

/**
 * 태블릿 전용 클래스
 */
export function tablet(...classes: ClassValue[]) {
  return twMerge(clsx(classes));
}

/**
 * 데스크톱 전용 클래스
 */
export function desktop(...classes: ClassValue[]) {
  return twMerge(clsx(classes));
}

/**
 * 반응형 그리드 컬럼 수 계산
 * @param mobile - 모바일 컬럼 수 (기본: 1)
 * @param tablet - 태블릿 컬럼 수 (기본: 2)
 * @param desktop - 데스크톱 컬럼 수 (기본: 3)
 * @returns Tailwind 그리드 클래스
 */
export function gridCols(
  mobile: number = 1,
  tablet: number = 2,
  desktop: number = 3
): string {
  const cols = {
    1: "grid-cols-1",
    2: "grid-cols-2",
    3: "grid-cols-3",
    4: "grid-cols-4",
    5: "grid-cols-5",
    6: "grid-cols-6",
  };

  return `${cols[mobile as keyof typeof cols] || "grid-cols-1"} ${
    tablet > mobile ? `md:${cols[tablet as keyof typeof cols] || ""}` : ""
  } ${desktop > tablet ? `lg:${cols[desktop as keyof typeof cols] || ""}` : ""}`.trim();
}

/**
 * 반응형 텍스트 크기
 * @param mobile - 모바일 텍스트 크기 (예: "text-sm")
 * @param tablet - 태블릿 텍스트 크기 (예: "text-base")
 * @param desktop - 데스크톱 텍스트 크기 (예: "text-lg")
 * @returns Tailwind 텍스트 크기 클래스
 */
export function textSize(
  mobile: string = "text-sm",
  tablet?: string,
  desktop?: string
): string {
  let classes = mobile;
  if (tablet) classes += ` md:${tablet}`;
  if (desktop) classes += ` lg:${desktop}`;
  return classes;
}

/**
 * 반응형 간격 (gap)
 * @param mobile - 모바일 간격 (예: "gap-2")
 * @param tablet - 태블릿 간격 (예: "gap-4")
 * @param desktop - 데스크톱 간격 (예: "gap-6")
 * @returns Tailwind gap 클래스
 */
export function gap(
  mobile: string = "gap-2",
  tablet?: string,
  desktop?: string
): string {
  let classes = mobile;
  if (tablet) classes += ` md:${tablet}`;
  if (desktop) classes += ` lg:${desktop}`;
  return classes;
}

