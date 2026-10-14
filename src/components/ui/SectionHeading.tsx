import React from "react";
import { Badge } from "./Badge";
import { cn } from "@/lib/utils";
import { WordReveal } from "./WordReveal";

export interface SectionHeadingProps {
  badge?: string;
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeading({
  badge,
  title,
  subtitle,
  align = "center",
  className,
}: SectionHeadingProps) {
  const isCenter = align === "center";

  return (
    <div
      className={cn(
        "mb-12 md:mb-16",
        isCenter ? "text-center mx-auto max-w-2xl" : "text-left max-w-2xl",
        className
      )}
    >
      {badge && (
        <div className={cn("mb-3", isCenter ? "flex justify-center" : "")}>
          <Badge variant="accent" size="md">
            {badge}
          </Badge>
        </div>
      )}

      <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900 leading-tight">
        {typeof title === "string" ? <WordReveal text={title} /> : title}
      </h2>

      {subtitle && (
        <p className="mt-4 text-base sm:text-lg text-zinc-600 leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
