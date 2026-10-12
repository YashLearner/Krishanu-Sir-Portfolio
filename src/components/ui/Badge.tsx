import React from "react";
import { cn } from "@/lib/utils";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "neutral" | "accent" | "dark" | "outline";
  size?: "sm" | "md";
  icon?: React.ReactNode;
  children: React.ReactNode;
}

export function Badge({
  variant = "neutral",
  size = "md",
  icon,
  className,
  children,
  ...props
}: BadgeProps) {
  const baseClasses =
    "inline-flex items-center font-medium rounded-full transition-colors";

  const sizeClasses = {
    sm: "text-xs px-2.5 py-0.5 gap-1.5",
    md: "text-xs sm:text-sm px-3.5 py-1 gap-2",
  };

  const variantClasses = {
    neutral:
      "bg-white/80 text-zinc-800 border border-black/10 shadow-[0_1px_2px_rgba(0,0,0,0.04)] backdrop-blur-xs",
    accent:
      "bg-[#F59E0B]/10 text-[#B45309] border border-[#F59E0B]/30 font-semibold",
    dark:
      "bg-[#1E1E1E] text-zinc-100 border border-white/10 shadow-sm",
    outline:
      "bg-transparent text-zinc-700 border border-zinc-300",
  };

  return (
    <span
      className={cn(baseClasses, sizeClasses[size], variantClasses[variant], className)}
      {...props}
    >
      {icon && <span className="inline-flex shrink-0">{icon}</span>}
      <span>{children}</span>
    </span>
  );
}
