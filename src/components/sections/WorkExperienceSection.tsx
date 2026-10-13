import React from "react";
import Image from "next/image";
import { portfolioData } from "@/data/portfolioData";
import { Container } from "@/components/ui/Container";
import { ExperienceItem } from "@/types/portfolio";

// Realistic 3D pushpin component with color gradients and specular highlights
function PushPin({
  color = "orange",
}: {
  color?: "orange" | "amber" | "blue" | "rose" | "emerald" | "pink" | "teal";
}) {
  const pinThemes = {
    orange: {
      light: "#FED7AA",
      mid: "#F97316",
      dark: "#9A3412",
      shadow: "rgba(234,88,12,0.45)",
    },
    amber: {
      light: "#FDE68A",
      mid: "#F59E0B",
      dark: "#B45309",
      shadow: "rgba(217,119,6,0.45)",
    },
    blue: {
      light: "#93C5FD",
      mid: "#2563EB",
      dark: "#1E40AF",
      shadow: "rgba(37,99,235,0.45)",
    },
    rose: {
      light: "#FDA4AF",
      mid: "#E11D48",
      dark: "#9F1239",
      shadow: "rgba(225,29,72,0.45)",
    },
    emerald: {
      light: "#86EFAC",
      mid: "#16A34A",
      dark: "#14532D",
      shadow: "rgba(22,163,74,0.45)",
    },
    pink: {
      light: "#F472B6",
      mid: "#DB2777",
      dark: "#831843",
      shadow: "rgba(219,39,119,0.45)",
    },
    teal: {
      light: "#5EEAD4",
      mid: "#0D9488",
      dark: "#134E4A",
      shadow: "rgba(13,148,136,0.45)",
    },
  };

  const theme = pinThemes[color] || pinThemes.orange;
  const gradId = `pushpin-${color}`;

  return (
    <div className="relative flex items-center justify-center select-none pointer-events-none">
      <svg
        width="34"
        height="34"
        viewBox="0 0 34 34"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="filter drop-shadow-[0_6px_8px_rgba(0,0,0,0.22)] transform transition-transform group-hover:scale-110"
      >
        <defs>
          <radialGradient
            id={`${gradId}-dome`}
            cx="35%"
            cy="30%"
            r="65%"
            fx="30%"
            fy="25%"
          >
            <stop offset="0%" stopColor={theme.light} />
            <stop offset="60%" stopColor={theme.mid} />
            <stop offset="100%" stopColor={theme.dark} />
          </radialGradient>
          <linearGradient id={`${gradId}-rim`} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor={theme.light} stopOpacity="0.9" />
            <stop offset="100%" stopColor={theme.dark} />
          </linearGradient>
        </defs>

        {/* Realistic contact shadow on note */}
        <ellipse
          cx="17"
          cy="26"
          rx="7"
          ry="3"
          fill="black"
          fillOpacity="0.22"
        />

        {/* Pin Outer Bevel Ring */}
        <circle cx="17" cy="15" r="12" fill={`url(#${gradId}-rim)`} />

        {/* Pin Inner 3D Dome */}
        <circle cx="17" cy="15" r="9.5" fill={`url(#${gradId}-dome)`} />

        {/* Specular curved highlight */}
        <ellipse
          cx="14"
          cy="11.5"
          rx="3.5"
          ry="2"
          fill="white"
          fillOpacity="0.75"
          transform="rotate(-25 14 11.5)"
        />
        <circle cx="13" cy="10.5" r="1.2" fill="white" fillOpacity="0.9" />
      </svg>
    </div>
  );
}

// Unified card component styled in the portfolio's warm orange/amber theme
function WorkCard({
  exp,
  displayIndex,
  className = "",
}: {
  exp: ExperienceItem;
  displayIndex: number;
  className?: string;
}) {
  return (
    <div
      className={`group relative rounded-[32px] p-7 sm:p-8 bg-gradient-to-b from-[#FFFDF9] to-[#FFF5E8] border border-[#FED7AA] hover:border-[#F97316]/80 shadow-[0_8px_24px_-6px_rgba(234,88,12,0.12)] hover:shadow-[0_16px_36px_-8px_rgba(234,88,12,0.22)] transition-all duration-300 hover:-translate-y-2 flex flex-col justify-between ${className}`}
    >
      {/* Pinned 3D Pushpin on top center */}
      <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-20">
        <PushPin color="orange" />
      </div>

      {/* Header Row: Number & Logo Badge */}
      <div>
        <div className="flex items-center justify-between mb-6 pt-1">
          {/* Bold Two-Digit Index in portfolio orange */}
          <span className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#EA580C]">
            {exp.number}
          </span>

          {/* Brand Logo Container */}
          <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-white shadow-xs border border-[#FED7AA]/60 p-2 flex items-center justify-center shrink-0 overflow-hidden">
            {exp.logoUrl ? (
              <div className="relative w-full h-full">
                <Image
                  src={exp.logoUrl}
                  alt={`${exp.company} Logo`}
                  fill
                  className="object-contain"
                  sizes="64px"
                />
              </div>
            ) : (
              <span className="font-black text-lg text-[#EA580C] tracking-wider">
                IF
              </span>
            )}
          </div>
        </div>

        {/* Company Name */}
        <h3 className="text-xl sm:text-2xl font-bold text-zinc-950 tracking-tight mb-2.5">
          {exp.company}
        </h3>

        {/* Description Text */}
        <p className="text-sm sm:text-base text-zinc-600 leading-relaxed font-normal">
          {exp.description}
        </p>
      </div>

      {/* Subtle bottom indicator matching portfolio orange */}
      <div className="mt-6 pt-4 border-t border-[#FED7AA]/50 flex items-center justify-between text-xs text-zinc-500 font-medium">
        <span className="flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-[#EA580C]" />
          Client Solution
        </span>
        <span className="text-orange-800/50 font-mono">
          0{displayIndex}
        </span>
      </div>
    </div>
  );
}

export function WorkExperienceSection() {
  const { experiences } = portfolioData;

  const topRowExperiences = experiences.slice(0, 3);
  const bottomRowExperiences = experiences.slice(3);

  return (
    <section id="experience" className="relative py-16 sm:py-24 overflow-hidden">
      <Container size="default">
        {/* Section Header */}
        <div className="flex flex-col items-start mb-12 sm:mb-16 max-w-2xl">
          <span className="inline-flex items-center px-4 py-1.5 rounded-full border border-amber-500/30 bg-amber-500/10 text-[#D97706] text-xs sm:text-sm font-bold uppercase tracking-wider mb-3 shadow-xs">
            Work Experience
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-zinc-950 leading-[1.15]">
            Enterprise Solutions &amp; Client Projects
          </h2>
          <p className="text-base sm:text-lg text-zinc-600 font-medium mt-3 leading-relaxed">
            Delivering custom AI CRM architectures, cybersecurity solutions, and autonomous agent workflows across diverse industries.
          </p>
        </div>

        {/* Board Container with tactile pinned notes and decorative dotted connector line */}

        {/* Board Container with tactile pinned notes and decorative dotted connector line */}
        <div className="relative pt-6 pb-2">

          {/* Desktop connector path */}
          <div
            className="pointer-events-none absolute inset-0 hidden overflow-visible lg:block"
            aria-hidden="true"
          >
            <svg
              className="h-full w-full"
              viewBox="0 0 1100 580"
              fill="none"
              preserveAspectRatio="none"
            >
              <defs>
                <linearGradient
                  id="experienceDoodleGrad"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="100%"
                >
                  <stop offset="0%" stopColor="#F59E0B" />
                  <stop offset="45%" stopColor="#EA580C" />
                  <stop offset="80%" stopColor="#F97316" />
                  <stop offset="100%" stopColor="#F59E0B" />
                </linearGradient>

                <filter
                  id="experienceDoodleShadow"
                  x="-20%"
                  y="-20%"
                  width="140%"
                  height="140%"
                >
                  <feDropShadow
                    dx="0"
                    dy="2"
                    stdDeviation="2.5"
                    floodColor="pink"
                  />
                </filter>
              </defs>

              {/* Start dot */}
              <circle
                cx="155"
                cy="85"
                r="4.5"
                fill="#F59E0B"
                filter="url(#experienceDoodleShadow)"
              />

              {/* Main dashed connector */}
              <path
                d="M 155 85 C 270 45, 410 135, 550 80 C 690 35, 800 135, 930 85 C 1050 45, 1090 190, 1040 260 C 990 320, 890 280, 760 360 C 660 420, 580 340, 480 375 C 370 415, 270 365, 200 420 C 160 450, 170 510, 230 520"
                stroke="url(#experienceDoodleGrad)"
                strokeWidth="3.5"
                strokeDasharray="9 9"
                strokeLinecap="round"
                filter="url(#experienceDoodleShadow)"
              />

              {/* Ending arrow */}
              <path
                d="M 215 508 L 235 520 L 218 532"
                stroke="#EA580C"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                filter="url(#experienceDoodleShadow)"
              />

              {/* Decorative sparkles */}
              <path
                d="M 1055 80 Q 1055 90 1065 90 Q 1055 90 1055 100 Q 1055 90 1045 90 Q 1055 90 1055 80 Z"
                fill="#F59E0B"
                opacity="0.85"
              />

              <path
                d="M 540 270 Q 540 278 548 278 Q 540 278 540 286 Q 540 278 532 278 Q 540 278 540 270 Z"
                fill="#EA580C"
                opacity="0.75"
              />

              <path
                d="M 145 460 Q 145 468 153 468 Q 145 468 145 476 Q 145 468 137 468 Q 145 468 145 460 Z"
                fill="#F59E0B"
                opacity="0.8"
              />
            </svg>
          </div>

          {/* Tablet connector path */}
          <div
            className="pointer-events-none absolute inset-0 hidden overflow-visible md:block lg:hidden"
            aria-hidden="true"
          >
            <svg
              className="h-full w-full"
              viewBox="0 0 760 920"
              fill="none"
              preserveAspectRatio="none"
            >
              <defs>
                <linearGradient
                  id="experienceDoodleGradTab"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="100%"
                >
                  <stop offset="0%" stopColor="#F59E0B" />
                  <stop offset="100%" stopColor="#EA5808" />
                </linearGradient>
              </defs>

              <path
                d="M 190 90 C 280 40, 480 140, 570 90 C 670 140, 680 320, 570 380 C 480 430, 280 340, 190 390 C 100 440, 100 620, 190 680 C 290 740, 480 640, 570 690"
                stroke="url(#experienceDoodleGradTab)"
                strokeWidth="3"
                strokeDasharray="8 8"
                strokeLinecap="round"
                opacity="0.9"
              />
            </svg>
          </div>

          {/* Top row: Cards 01, 02, 03 */}
          <div className="grid grid-cols-1 items-stretch gap-8 sm:gap-10 md:grid-cols-2 lg:grid-cols-3">
            {topRowExperiences.map((exp, index) => (
              <WorkCard
                key={exp.id}
                exp={exp}
                displayIndex={index + 1}
              />
            ))}
          </div>

          {/* Bottom row: Cards 04 & 05 */}
          <div className="mt-8 flex flex-wrap items-stretch justify-center gap-8 sm:mt-10 sm:gap-10">
            {bottomRowExperiences.map((exp, index) => (
              <WorkCard
                key={exp.id}
                exp={exp}
                displayIndex={index + 4}
                className="w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.35rem)]"
              />
            ))}
          </div>

        </div>

      </Container>
    </section>
  );
}


