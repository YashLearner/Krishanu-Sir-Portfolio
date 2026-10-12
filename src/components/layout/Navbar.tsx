"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { portfolioData } from "@/data/portfolioData";
import { Button } from "@/components/ui/Button";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("#hero");
  const { navLinks, hero } = portfolioData;
  const manualNavTimerRef = useRef<NodeJS.Timeout | null>(null);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    setActiveSection(href);

    // Prevent scrollspy from overriding selection for 2.5s during smooth scroll / interaction
    if (manualNavTimerRef.current) {
      clearTimeout(manualNavTimerRef.current);
    }
    manualNavTimerRef.current = setTimeout(() => {
      manualNavTimerRef.current = null;
    }, 2500);

    const targetId = href.replace("#", "");
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      e.preventDefault();
      targetElement.scrollIntoView({ behavior: "smooth" });
      window.history.pushState(null, "", href);
    }
  };

  useEffect(() => {
    // If URL already has a hash on mount, sync active section
    if (typeof window !== "undefined" && window.location.hash) {
      const hash = window.location.hash;
      if (navLinks.some((l) => l.href === hash)) {
        queueMicrotask(() => {
          setActiveSection(hash);
        });
      }
    }

    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Skip scrollspy override if user manually clicked a link recently
      if (manualNavTimerRef.current) return;

      // Section scrollspy
      const sections = navLinks.map((link) => link.href.replace("#", ""));
      const scrollPosition = window.scrollY + 140;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(`#${sections[i]}`);
          break;
        }
      }
    };

    const handleHashChange = () => {
      if (window.location.hash) {
        setActiveSection(window.location.hash);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("hashchange", handleHashChange);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("hashchange", handleHashChange);
      if (manualNavTimerRef.current) {
        clearTimeout(manualNavTimerRef.current);
      }
    };
  }, [navLinks]);

  // Close mobile drawer on escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  return (
    <header className="sticky top-4 sm:top-6 z-50 w-full px-4 sm:px-6 lg:px-8">
      <nav
        aria-label="Main Navigation"
        className={`mx-auto max-w-6xl rounded-full bg-[#1E1E1E]/95 backdrop-blur-md border border-white/10 px-4 py-2.5 sm:px-6 sm:py-3 transition-all duration-200 ${
          scrolled ? "shadow-2xl shadow-black/30" : "shadow-xl shadow-black/15"
        }`}
      >
        <div className="flex items-center justify-between gap-2 lg:gap-4">
          {/* Brand Logo & Name */}
          <Link
            href="#hero"
            onClick={(e) => handleNavClick(e, "#hero")}
            className="flex items-center gap-2 text-white font-semibold text-sm sm:text-base tracking-tight group focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand-accent rounded-full py-1 px-2 shrink-0"
          >
            {/* Geometric diamond logo */}
            <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-white/5 border border-white/10 text-[#F59E0B] group-hover:bg-[#F59E0B]/10 transition-colors">
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="transform rotate-45"
              >
                <rect x="5" y="5" width="14" height="14" rx="2" />
              </svg>
            </span>
            <span className="text-zinc-100 group-hover:text-white transition-colors hidden sm:inline">
              {hero.name}
            </span>
          </Link>

          {/* Desktop Navigation Links with Active Orange Round Shade */}
          <div className="hidden md:flex items-center gap-0.5 lg:gap-1.5">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href;

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`px-2.5 lg:px-3.5 py-1.5 text-xs lg:text-sm font-medium rounded-full transition-all duration-200 whitespace-nowrap focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand-accent ${
                    isActive
                      ? "text-amber-400 font-semibold bg-amber-500/20 border border-amber-500/40 shadow-[0_0_12px_rgba(245,158,11,0.25)]"
                      : "text-zinc-400 hover:text-zinc-100 hover:bg-white/5 border border-transparent"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          {/* Desktop Right CTA Button: Contact Us */}
          <div className="hidden md:flex items-center shrink-0">
            <Button
              href="https://www.coredhristi.com/contact"
              target="_blank"
              rel="noopener noreferrer"
              variant="primary"
              size="sm"
              className="text-xs sm:text-sm font-bold !px-4 !py-1.5 !bg-[#F59E0B] hover:!bg-[#D97706] text-zinc-950 shadow-sm"
            >
              Contact Us
            </Button>
          </div>

          {/* Mobile Right Controls: Contact Us & Hamburger Toggle */}
          <div className="flex items-center gap-2 md:hidden">
            <Button
              href="https://www.coredhristi.com/contact"
              target="_blank"
              rel="noopener noreferrer"
              variant="primary"
              size="sm"
              className="text-xs font-bold !px-3 !py-1 !bg-[#F59E0B] hover:!bg-[#D97706] text-zinc-950"
            >
              Contact Us
            </Button>

            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              aria-expanded={isOpen}
              aria-label="Toggle navigation menu"
              className="flex h-8 w-8 items-center justify-center rounded-full text-zinc-300 hover:text-white hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand-accent"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {isOpen ? (
                  <>
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </>
                ) : (
                  <>
                    <line x1="4" y1="7" x2="20" y2="7" />
                    <line x1="4" y1="12" x2="20" y2="12" />
                    <line x1="4" y1="17" x2="20" y2="17" />
                  </>
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu with Active Orange Indicator */}
        {isOpen && (
          <div className="mt-3 border-t border-white/10 pt-3 pb-1 md:hidden">
            <div className="flex flex-col gap-1.5">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href;

                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={(e) => {
                      handleNavClick(e, link.href);
                      setIsOpen(false);
                    }}
                    className={`px-4 py-2.5 text-sm font-medium rounded-xl transition-all flex items-center justify-between ${
                      isActive
                        ? "text-amber-400 bg-amber-500/20 font-semibold border-l-4 border-amber-500 shadow-[inset_0_0_12px_rgba(245,158,11,0.15)]"
                        : "text-zinc-300 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    <span>{link.label}</span>
                    {isActive && (
                      <span
                        className="w-2 h-2 rounded-full bg-amber-400 shadow-[0_0_8px_rgba(245,158,11,0.9)]"
                        aria-hidden="true"
                      />
                    )}
                  </Link>
                );
              })}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
