"use client";

import { useEffect, useRef } from "react";

export function CustomCursor() {
  const dot = useRef<HTMLDivElement>(null);
  const ring = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const media = window.matchMedia("(pointer: fine) and (hover: hover) and (prefers-reduced-motion: no-preference)");
    let cleanup = () => {};
    const setup = () => {
      cleanup();
      if (!media.matches || !dot.current || !ring.current) return;
      const dotNode = dot.current, ringNode = ring.current;
      let x = 0, y = 0, ringX = 0, ringY = 0, frame = 0, visible = false;
      const animate = () => {
        ringX += (x - ringX) * 0.18;
        ringY += (y - ringY) * 0.18;
        ringNode.style.transform = `translate3d(${ringX}px, ${ringY}px, 0) translate(-50%, -50%)`;
        if (visible && (Math.abs(x-ringX) > 0.1 || Math.abs(y-ringY) > 0.1)) frame = requestAnimationFrame(animate);
        else frame = 0;
      };
      const move = (event: PointerEvent) => {
        if (event.pointerType !== "mouse") return;
        x = event.clientX; y = event.clientY;
        if (!visible) { ringX = x; ringY = y; visible = true; document.documentElement.classList.add("custom-cursor-active"); }
        dotNode.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%)`;
        dotNode.style.opacity = ringNode.style.opacity = "1";
        ringNode.classList.toggle("cursor-hover", event.target instanceof Element && !!event.target.closest('a,button,input,textarea,select,summary,[role="button"]'));
        if (!frame) frame = requestAnimationFrame(animate);
      };
      const hide = () => { visible = false; dotNode.style.opacity = ringNode.style.opacity = "0"; document.documentElement.classList.remove("custom-cursor-active"); cancelAnimationFrame(frame); frame = 0; };
      window.addEventListener("pointermove", move, {passive:true});
      document.addEventListener("pointerleave", hide);
      window.addEventListener("blur", hide);
      cleanup = () => { hide(); window.removeEventListener("pointermove",move); document.removeEventListener("pointerleave",hide); window.removeEventListener("blur",hide); };
    };
    setup(); media.addEventListener("change", setup);
    return () => { cleanup(); media.removeEventListener("change", setup); };
  }, []);
  return <><div ref={dot} aria-hidden="true" className="cursor-dot" /><div ref={ring} aria-hidden="true" className="cursor-ring" /></>;
}
