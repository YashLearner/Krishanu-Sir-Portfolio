import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  href?: string;
  target?: string;
  rel?: string;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  children: React.ReactNode;
}

export function Button({
  variant = "primary",
  size = "md",
  href,
  target,
  rel,
  icon,
  iconPosition = "right",
  className,
  children,
  ...props
}: ButtonProps) {
  const baseClasses =
    "inline-flex items-center justify-center font-medium transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-accent disabled:opacity-50 disabled:pointer-events-none";

  const sizeClasses = {
    sm: "text-xs px-3.5 py-1.5 gap-1.5 rounded-full",
    md: "text-sm px-5 py-2.5 gap-2 rounded-full",
    lg: "text-base px-6 py-3.5 gap-2.5 rounded-full",
  };

  const variantClasses = {
    primary:
      "bg-[#F59E0B] text-zinc-950 hover:bg-[#D97706] shadow-sm font-semibold active:translate-y-[1px]",
    secondary:
      "bg-[#1E1E1E] text-white hover:bg-zinc-800 border border-white/10 shadow-sm active:translate-y-[1px]",
    outline:
      "bg-transparent text-zinc-900 border border-zinc-300 hover:border-zinc-400 hover:bg-black/5 active:translate-y-[1px]",
    ghost:
      "bg-transparent text-zinc-600 hover:text-zinc-950 hover:bg-black/5",
  };

  const content = (
    <>
      {icon && iconPosition === "left" && <span className="inline-flex shrink-0">{icon}</span>}
      <span>{children}</span>
      {icon && iconPosition === "right" && <span className="inline-flex shrink-0">{icon}</span>}
    </>
  );

  const mergedClasses = cn(
    baseClasses,
    sizeClasses[size],
    variantClasses[variant],
    className
  );

  if (href) {
    const isExternal = href.startsWith("http") || href.startsWith("mailto:");
    return (
      <Link
        href={href}
        target={target || (isExternal ? "_blank" : undefined)}
        rel={rel || (isExternal ? "noopener noreferrer" : undefined)}
        className={mergedClasses}
      >
        {content}
      </Link>
    );
  }

  return (
    <button className={mergedClasses} {...props}>
      {content}
    </button>
  );
}
