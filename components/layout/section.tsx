import { cn } from "@/lib/utils";
import { ReactNode } from "react";
import { Container } from "./container";

interface SectionProps {
  children: ReactNode;
  className?: string;
  variant?: "default" | "muted" | "accent";
  spacing?: "sm" | "md" | "lg" | "xl";
  container?: boolean;
  containerSize?: "default" | "wide" | "narrow";
  id?: string;
}

const variantClasses = {
  default: "",
  muted: "bg-muted/30",
  accent: "bg-accent/50",
};

const spacingClasses = {
  sm: "py-12 md:py-16",
  md: "py-16 md:py-24",
  lg: "py-20 md:py-32",
  xl: "py-24 md:py-40",
};

export function Section({
  children,
  className,
  variant = "default",
  spacing = "md",
  container = true,
  containerSize = "default",
  id,
}: SectionProps) {
  const sectionClasses = cn(
    "w-full",
    variantClasses[variant],
    spacingClasses[spacing],
    className
  );

  if (container) {
    return (
      <section id={id} className={sectionClasses}>
        <Container size={containerSize}>{children}</Container>
      </section>
    );
  }

  return (
    <section id={id} className={sectionClasses}>
      {children}
    </section>
  );
}

