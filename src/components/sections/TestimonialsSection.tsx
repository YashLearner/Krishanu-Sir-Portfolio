"use client";

import React, { useState } from "react";
import { portfolioData } from "@/data/portfolioData";
import { Container } from "@/components/ui/Container";

export function TestimonialsSection() {
  const { testimonials } = portfolioData;
  const [currentIndex, setCurrentIndex] = useState(0);

  const total = testimonials.length;

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? total - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === total - 1 ? 0 : prev + 1));
  };

  if (!total) return null;

  const current = testimonials[currentIndex];

  return (
    <section id="testimonials" className="relative py-16 sm:py-24 overflow-hidden">
      <Container size="default">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div className="max-w-xl">
            <span className="inline-flex items-center px-4 py-1.5 rounded-full border border-amber-500/30 bg-amber-500/10 text-[#D97706] text-xs sm:text-sm font-bold uppercase tracking-wider mb-3 shadow-xs">
              Client Endorsements
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-zinc-950 leading-[1.15]">
              What Partners &amp; Clients Say
            </h2>
            <p className="text-base sm:text-lg text-zinc-600 font-medium mt-3 leading-relaxed">
              Feedback from enterprise partners, engineering leads, and clients who have deployed solutions with Krishanu.
            </p>
          </div>

          {/* Navigation Controls: Previous & Next Arrow Buttons */}
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={handlePrev}
              aria-label="Previous testimonial"
              className="flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-full bg-white border border-zinc-200 shadow-md text-zinc-800 hover:text-white hover:bg-zinc-950 hover:border-zinc-950 transition-all duration-200 active:scale-95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-amber-500 cursor-pointer"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="19" y1="12" x2="5" y2="12" />
                <polyline points="12 19 5 12 12 5" />
              </svg>
            </button>

            <span className="text-sm font-mono font-semibold text-zinc-500 px-2 select-none">
              0{currentIndex + 1} / 0{total}
            </span>

            <button
              type="button"
              onClick={handleNext}
              aria-label="Next testimonial"
              className="flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-full bg-white border border-zinc-200 shadow-md text-zinc-800 hover:text-white hover:bg-zinc-950 hover:border-zinc-950 transition-all duration-200 active:scale-95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-amber-500 cursor-pointer"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </button>
          </div>
        </div>

        {/* Featured Testimonial Card */}
        <div className="relative rounded-[32px] sm:rounded-[40px] bg-white border border-zinc-200/90 p-8 sm:p-12 lg:p-16 shadow-xl shadow-black/5 overflow-hidden transition-all duration-500">
          {/* Subtle Accent Glow */}
          <div
            className="absolute -top-24 -right-24 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"
            aria-hidden="true"
          />

          <div className="relative z-10 flex flex-col justify-between min-h-[280px]">
            {/* Top Row: 5 Stars & Big Quote Mark */}
            <div className="flex items-center justify-between mb-8">
              {/* 5 Golden Stars */}
              <div className="flex items-center gap-1.5 text-amber-500" aria-label="5 out of 5 stars">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    stroke="none"
                  >
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                ))}
              </div>

              {/* Decorative Quote Icon */}
              <div className="text-zinc-200" aria-hidden="true">
                <svg width="44" height="44" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>
            </div>

            {/* Quote Statement */}
            <blockquote className="text-xl sm:text-2xl lg:text-3xl text-zinc-900 font-medium leading-relaxed mb-10 italic">
              &ldquo;{current.content}&rdquo;
            </blockquote>

            {/* Author Footer */}
            <div className="pt-6 border-t border-zinc-100 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                {/* Monogram Avatar */}
                <div className="flex h-13 w-13 sm:h-14 sm:w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-zinc-900 to-zinc-700 text-white font-bold text-lg shadow-sm border border-black/10">
                  {current.organization.slice(0, 2).toUpperCase()}
                </div>

                <div>
                  <h4 className="text-base sm:text-lg font-bold text-zinc-950">
                    {current.name}
                  </h4>
                  <p className="text-xs sm:text-sm text-zinc-500">
                    {current.role} • <span className="font-semibold text-zinc-700">{current.organization}</span>
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  Verified Review
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Pagination Dots */}
        <div className="flex items-center justify-center gap-2 mt-8">
          {testimonials.map((_, dotIndex) => (
            <button
              key={dotIndex}
              type="button"
              onClick={() => setCurrentIndex(dotIndex)}
              aria-label={`Go to testimonial ${dotIndex + 1}`}
              className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                currentIndex === dotIndex
                  ? "w-8 bg-[#D97706]"
                  : "w-2.5 bg-zinc-300 hover:bg-zinc-400"
              }`}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
