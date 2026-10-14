"use client";

import { useEffect, useRef, type ReactNode } from "react";

// Server-rendered content stays visible without JavaScript or with reduced motion.
export function ScrollReveal({ children, className = "" }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const node = ref.current;
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (!node || media.matches || !("IntersectionObserver" in window)) return;
    const reset = () => node.classList.remove("scroll-reveal-ready");
    node.classList.add("scroll-reveal-ready");
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { node.classList.add("scroll-reveal-visible"); observer.disconnect(); }
    }, { threshold: 0, rootMargin: "0px 0px -40px 0px" });
    observer.observe(node);
    const changed = () => { if (media.matches) { observer.disconnect(); reset(); } };
    media.addEventListener("change", changed);
    return () => { observer.disconnect(); media.removeEventListener("change", changed); reset(); };
  }, []);
  return <div ref={ref} className={`scroll-reveal ${className}`}>{children}</div>;
}
