"use client";

import React from "react";
import Link from "next/link";
import { portfolioData } from "@/data/portfolioData";
import { Container } from "@/components/ui/Container";

export function Footer() {
  const { navLinks, socialLinks, hero } = portfolioData;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer
      role="contentinfo"
      aria-label="Site Footer"
      className="relative bg-[#121214] border-t border-white/10 pt-16 pb-12 text-zinc-400 overflow-hidden"
    >
      {/* Subtle Ambient Radial Lighting */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-amber-500/5 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <Container size="default">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-12 border-b border-white/10">
          {/* Brand Info (Left Column) */}
          <div className="lg:col-span-5 flex flex-col items-start">
            <Link
              href="#hero"
              className="flex items-center gap-2.5 text-white font-semibold text-lg tracking-tight group focus-visible:outline focus-visible:outline-2 focus-visible:outline-amber-400 rounded-lg py-1"
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/5 border border-white/10 text-[#F59E0B] group-hover:bg-[#F59E0B]/10 transition-colors">
                <svg
                  width="18"
                  height="18"
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
              <span className="text-white font-bold">{hero.name}</span>
            </Link>

            <p className="mt-4 text-sm text-zinc-400 leading-relaxed max-w-sm">
              Founder @ CoreDhristi • AI Agent &amp; Automation Developer • Cybersecurity Specialist (CEH Master). Building verified trust infrastructure for autonomous systems.
            </p>


          </div>

          {/* Quick Navigation Links */}
          <div className="lg:col-span-4 flex flex-col">
            <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-200 mb-4">
              Navigation
            </h4>
            <ul className="grid grid-cols-2 gap-2.5 text-sm">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-zinc-400 hover:text-amber-400 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-amber-400 rounded-xs py-0.5"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <a
                  href="https://www.coredhristi.com/contact"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-400 hover:text-amber-400 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-amber-400 rounded-xs py-0.5 flex items-center gap-1"
                >
                  <span>Contact</span>
                  <span className="text-xs">↗</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Direct Platforms & Connect */}
          <div className="lg:col-span-3 flex flex-col">
            <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-200 mb-4">
              Platforms &amp; Connect
            </h4>
            <div className="flex flex-col gap-3">
              {socialLinks.map((item) => (
                <a
                  key={item.platform}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-2.5 rounded-xl bg-white/5 border border-white/5 hover:border-amber-500/40 hover:bg-white/10 text-xs font-semibold text-zinc-300 hover:text-white transition-all group"
                >
                  <span>{item.platform}</span>
                  <span className="text-zinc-500 group-hover:text-amber-400 group-hover:translate-x-0.5 transition-all">
                    ↗
                  </span>
                </a>
              ))}
              <a
                href="https://nexttechwaves.online/index.html"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-2.5 rounded-xl bg-white/5 border border-white/5 hover:border-amber-500/40 hover:bg-white/10 text-xs font-semibold text-zinc-300 hover:text-white transition-all group"
              >
                <span>NextTechWaves.online</span>
                <span className="text-zinc-500 group-hover:text-amber-400 group-hover:translate-x-0.5 transition-all">
                  ↗
                </span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Back-to-Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
          <p>
            © 2026 Krishanu Kaundilya. All rights reserved.
          </p>

          <div className="flex items-center gap-6">
            <span className="hidden sm:inline">
              Built with Next.js, React &amp; Tailwind CSS
            </span>

            {/* Back to Top Button */}
            <button
              type="button"
              onClick={scrollToTop}
              aria-label="Scroll back to top"
              className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-zinc-300 hover:text-white hover:bg-white/10 hover:border-amber-500/30 transition-all cursor-pointer focus-visible:outline focus-visible:outline-2 focus-visible:outline-amber-400"
            >
              <span>Back to Top</span>
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="12" y1="19" x2="12" y2="5" />
                <polyline points="5 12 12 5 19 12" />
              </svg>
            </button>
          </div>
        </div>
      </Container>
    </footer>
  );
}
