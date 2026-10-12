import React from "react";
import { Container } from "@/components/ui/Container";

export function CtaBannerSection() {
  return (
    <section id="contact-banner" className="relative py-12 sm:py-16 overflow-hidden">
      <Container size="default">
        {/* Dark Obsidian Banner Shell */}
        <div className="relative rounded-[36px] sm:rounded-[44px] bg-gradient-to-b from-[#18181B] via-[#121214] to-[#0B0B0D] border border-white/10 p-8 sm:p-12 lg:p-16 text-center shadow-2xl shadow-black/35 overflow-hidden">
          {/* Subtle Ambient Glow */}
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[300px] bg-amber-500/10 rounded-full blur-3xl pointer-events-none"
            aria-hidden="true"
          />

          <div className="relative z-10 flex flex-col items-center max-w-3xl mx-auto">
            {/* Tagline Heading */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.2]">
              Stop Doing By Hand <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-amber-500">
                What AI Agents Can Already Do
              </span>
            </h2>

            {/* Signature Underneath */}
            <div className="mt-4 sm:mt-5 flex items-center justify-center gap-2">
              <span className="text-zinc-500 text-sm select-none">—</span>
              <span className="font-serif italic text-base sm:text-xl text-amber-300/90 font-medium tracking-wide">
                Krishanu Kaundilya
              </span>
            </div>

            {/* Centered CTA Button with Playful Doodle Rays */}
            <div className="relative inline-flex items-center mt-8 sm:mt-10">
              <a
                href="https://www.coredhristi.com/contact"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-8 sm:px-10 py-3.5 sm:py-4 rounded-full bg-[#F59E0B] hover:bg-[#D97706] text-zinc-950 font-bold text-sm sm:text-base shadow-lg shadow-amber-500/25 hover:shadow-xl hover:shadow-amber-500/35 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 cursor-pointer"
              >
                <span>Contact Us</span>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="7" y1="17" x2="17" y2="7" />
                  <polyline points="7 7 17 7 17 17" />
                </svg>
              </a>

              {/* Doodle Sparkle Rays next to button (from reference screenshot) */}
              <div
                className="absolute -right-6 sm:-right-8 -bottom-1 text-amber-400 pointer-events-none select-none opacity-85"
                aria-hidden="true"
              >
                <svg
                  width="26"
                  height="26"
                  viewBox="0 0 26 26"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                >
                  {/* Top-right ray */}
                  <line x1="8" y1="18" x2="16" y2="12" />
                  {/* Horizontal ray */}
                  <line x1="8" y1="21" x2="19" y2="20" />
                  {/* Bottom-right ray */}
                  <line x1="6" y1="24" x2="14" y2="26" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
