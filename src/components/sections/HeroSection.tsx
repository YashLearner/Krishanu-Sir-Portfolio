import React from "react";
import Image from "next/image";
import Link from "next/link";
import { portfolioData } from "@/data/portfolioData";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";

export function HeroSection() {
  const { hero } = portfolioData;

  return (
    <section id="hero" className="relative pt-6 pb-6 sm:pt-12 sm:pb-8 overflow-hidden">
      <Container size="default">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Headline, Bio & Primary CTA */}
          <div className="lg:col-span-7 flex flex-col items-start text-left z-10">
            {/* Top Welcome Pill */}
            <Badge variant="neutral" size="md" className="mb-4 text-zinc-700">
              {hero.welcomeBadge}
            </Badge>

            {/* Name with Sparkle Icon */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-zinc-950 leading-[1.1] flex items-center flex-wrap gap-2">
              <span>{hero.name}</span>
              <span
                className="text-zinc-900 text-3xl sm:text-4xl lg:text-5xl select-none"
                aria-hidden="true"
              >
                ✦
              </span>
            </h1>

            {/* Role & Headline Subtitles */}
            <div className="mt-3 sm:mt-4 space-y-1">
              <h2 className="text-xl sm:text-2xl font-semibold tracking-tight text-[#D97706]">
                {hero.titleAccent}
              </h2>
              <p className="text-lg sm:text-xl font-medium text-zinc-800">
                {hero.role}
              </p>
              <p className="text-sm sm:text-base text-zinc-600 font-normal">
                {hero.tagline}
              </p>
              <p className="text-xs sm:text-sm font-medium text-zinc-500 pt-1">
                {hero.focusAreas.join(" • ")}
              </p>
            </div>

            {/* Subtext Copy */}
            <p className="mt-6 text-base sm:text-lg text-zinc-600 leading-relaxed max-w-xl">
              {hero.bio}
            </p>

            {/* Primary CTA Button matching website amber color palette */}
            <div className="mt-8 flex items-center gap-4">
              <Link
                href={hero.ctaPrimary.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-[#F59E0B] hover:bg-[#D97706] text-zinc-950 font-bold px-7 py-3.5 rounded-full text-base shadow-lg shadow-amber-500/25 hover:shadow-xl hover:shadow-amber-500/35 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 group focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand-accent cursor-pointer"
              >
                <span>{hero.ctaPrimary.label}</span>
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-zinc-950 text-white font-bold group-hover:translate-x-0.5 transition-transform">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </span>
              </Link>
            </div>
          </div>

          {/* Right Column: Rounded Portrait Frame & Floating Metric Badges */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end relative pl-6 sm:pl-0">
            <div className="relative w-full max-w-[320px] sm:max-w-[380px] ml-auto mr-auto lg:mr-0">
              {/* Profile Portrait Card */}
              <div className="relative w-full aspect-[4/5] rounded-[28px] sm:rounded-[36px] overflow-hidden bg-[#1E1E1E] border border-black/10 shadow-2xl">
                <Image
                  src={hero.profileImage.src}
                  alt={hero.profileImage.alt}
                  fill
                  priority
                  sizes="(max-width: 640px) 320px, (max-width: 1024px) 380px, 420px"
                  className="object-cover object-top"
                />

                {/* Subtle gradient vignette to boost floating badge contrast */}
                <div
                  className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 pointer-events-none"
                  aria-hidden="true"
                />

                {/* Floating Badge 2 (Bottom bar over image) */}
                <div className="absolute bottom-5 inset-x-5 z-10">
                  <div className="bg-[#1E1E1E]/85 backdrop-blur-md rounded-full py-2.5 px-4 sm:px-5 border border-white/10 text-center shadow-lg">
                    <p className="text-xs sm:text-sm font-medium text-zinc-100 truncate">
                      {hero.floatingBadges.bottomBadge.title}
                    </p>
                  </div>
                </div>
              </div>

              {/* Floating Badge 1 (Cyber Security Expert - shifted significantly to the left to clear the face completely) */}
              <div className="absolute top-4 -left-6 sm:top-8 sm:-left-14 lg:-left-20 xl:-left-24 z-20">
                <div className="inline-flex items-center gap-2 sm:gap-2.5 bg-white/95 backdrop-blur-md rounded-2xl px-3 py-2 sm:px-4 sm:py-2.5 shadow-xl border border-black/10 transition-transform duration-200 hover:-translate-y-0.5">
                  <span className="flex h-7 w-7 sm:h-8 sm:w-8 shrink-0 items-center justify-center rounded-xl bg-[#F59E0B]/15 text-[#B45309] border border-[#F59E0B]/30">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    </svg>
                  </span>
                  <div className="flex flex-col">
                    <span className="text-xs sm:text-sm font-bold text-zinc-950 tracking-tight whitespace-nowrap">
                      {hero.floatingBadges.topBadge.title}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
