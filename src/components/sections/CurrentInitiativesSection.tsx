import React from "react";
import Image from "next/image";
import { portfolioData, sectionCopy } from "@/data/portfolioData";
import { WordReveal } from "@/components/ui/WordReveal";
import { Container } from "@/components/ui/Container";

export function CurrentInitiativesSection() {
  const { currentInitiatives } = portfolioData;

  return (
    <section id="initiatives" className="relative py-16 sm:py-24 overflow-hidden">
      <Container size="default">
        {/* Section Header */}
        <div className="flex flex-col items-start mb-12 sm:mb-16 max-w-2xl">
          <span className="inline-flex items-center px-4 py-1.5 rounded-full border border-amber-500/30 bg-amber-500/10 text-[#D97706] text-xs sm:text-sm font-bold uppercase tracking-wider mb-3 shadow-xs">
            {sectionCopy.initiatives.badge}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-zinc-950 leading-[1.15]">
            <WordReveal text={sectionCopy.initiatives.title} />
          </h2>
          <p className="text-base sm:text-lg text-zinc-600 font-medium mt-3 leading-relaxed">
            {sectionCopy.initiatives.subtitle}
          </p>
        </div>

        {/* 2-Card Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          {currentInitiatives.map((item) => (
            <div
              key={item.id}
              className="group relative rounded-[32px] sm:rounded-[36px] bg-white border border-zinc-200/90 p-7 sm:p-9 lg:p-10 shadow-lg shadow-black/5 hover:shadow-2xl hover:border-amber-500/30 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Header: Clickable Brand Logo & Status Pills */}
                <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                  {/* Clickable Logo */}
                  <a
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    className="relative flex items-center justify-center h-14 sm:h-16 px-4 py-2 rounded-2xl bg-[#1E1E22] border border-black/10 shadow-xs hover:scale-105 transition-transform overflow-hidden group/logo"
                    title={`Visit ${item.title}`}
                  >
                    {item.logoUrl ? (
                      <div className="relative h-10 w-36 sm:w-40">
                        <Image
                          src={item.logoUrl}
                          alt={`${item.title} Logo`}
                          fill
                          className="object-contain"
                          sizes="160px"
                        />
                      </div>
                    ) : (
                      <span className="font-bold text-white text-lg tracking-tight">
                        {item.title}
                      </span>
                    )}
                  </a>

                  {/* Status & Audience Badges */}
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-amber-500/10 text-[#D97706] border border-amber-500/20">
                      {item.statusTag}
                    </span>
                    {item.teamSize && (
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-zinc-100 text-zinc-700 border border-zinc-200">
                        {item.teamSize}
                      </span>
                    )}
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-2xl sm:text-3xl font-bold text-zinc-950 tracking-tight mb-3">
                  <a
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    className="hover:text-amber-600 transition-colors inline-flex items-center gap-2"
                  >
                    <span>{item.title}</span>
                    <span className="text-zinc-400 group-hover:text-amber-600 text-xl transition-colors">
                      ↗
                    </span>
                  </a>
                </h3>

                {/* Description Copy */}
                <p className="text-sm sm:text-base text-zinc-700 leading-relaxed font-normal mb-6">
                  {item.summary}
                </p>

                {/* Key Points / Highlights */}
                {item.points && (
                  <div className="space-y-2.5 mb-8">
                    {item.points.map((point, pIndex) => (
                      <div
                        key={pIndex}
                        className="flex items-start gap-2.5 p-3 rounded-xl bg-zinc-50 border border-zinc-200/70"
                      >
                        <span className="flex h-5 w-5 items-center justify-center rounded-full bg-amber-500/20 text-[#B45309] shrink-0 text-xs font-bold mt-0.5">
                          ✓
                        </span>
                        <span className="text-xs sm:text-sm font-semibold text-zinc-800">
                          {point}
                        </span>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Action Button Footer */}
              <div className="pt-6 border-t border-zinc-100 flex items-center justify-between">
                <a
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-zinc-950 hover:bg-[#1E1E1E] text-white text-xs sm:text-sm font-semibold transition-all hover:shadow-lg shadow-sm group-hover:bg-[#D97706]"
                >
                  <span>{item.linkText}</span>
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
                    <line x1="7" y1="17" x2="17" y2="7" />
                    <polyline points="7 7 17 7 17 17" />
                  </svg>
                </a>

                <span className="text-xs text-zinc-400 font-medium">
                  {item.title}
                </span>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
