"use client";

import { useEffect, useRef, type CSSProperties } from "react";

// Content is visible in server HTML; motion is progressive enhancement.
export function WordReveal({ text }: { text: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    const node = ref.current;
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (!node || media.matches || !("IntersectionObserver" in window)) return;
    const reset = () => node.classList.remove("word-reveal-ready");
    node.classList.add("word-reveal-ready");
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        node.classList.add("word-reveal-visible");
        observer.disconnect();
      }
    }, { threshold: 0.15, rootMargin: "0px 0px -30px 0px" });
    observer.observe(node);
    const preferenceChanged = () => { if (media.matches) { observer.disconnect(); reset(); } };
    media.addEventListener("change", preferenceChanged);
    return () => { observer.disconnect(); media.removeEventListener("change", preferenceChanged); reset(); };
  }, []);
  return <span ref={ref} className="word-reveal">{text.split(/\s+/).map((word, index) => <span key={index}><span className="reveal-word" style={{"--word-delay":`${Math.min(index, 16) * 65}ms`} as CSSProperties}>{word}</span>{" "}</span>)}</span>;
}
