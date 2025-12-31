import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  className?: string;
  size?: "default" | "wide" | "narrow";
}

export function Container({ 
  children, 
  className,
  size = "default" 
}: ContainerProps) {
  const sizeClasses = {
    default: "max-w-7xl",
    wide: "max-w-[90rem]",
    narrow: "max-w-4xl",
  };

  return (
    <div
      className={cn(
        "mx-auto px-4 sm:px-6 lg:px-8",
        sizeClasses[size],
        className
      )}
      style={{
        // 모바일에서 최소 너비 보장
        minWidth: "320px",
      }}
    >
      {children}
    </div>
  );
}

