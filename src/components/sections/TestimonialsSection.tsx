
"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

import { portfolioData } from "@/data/portfolioData";
import { Container } from "@/components/ui/Container";

const AUTOPLAY_INTERVAL_MS = 2000;
const SLIDE_DURATION_SECONDS = 0.65;

const carouselStyles = {
  viewport: "overflow-hidden",
  track: "flex will-change-transform",
  slide: "shrink-0 px-1 pb-2",

  card:
    "relative overflow-hidden rounded-[32px] border border-zinc-200/90 bg-white p-8 shadow-xl shadow-black/5 sm:rounded-[40px] sm:p-12 lg:p-16",

  navigation: "flex items-center justify-center gap-3",

  arrowButton:
    "flex h-12 w-12 cursor-pointer items-center justify-center rounded-full border border-zinc-200 bg-white text-zinc-800 shadow-md transition-all duration-200 hover:border-zinc-950 hover:bg-zinc-950 hover:text-white active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber-500 sm:h-14 sm:w-14",

  paginationButton:
    "h-2.5 cursor-pointer rounded-full transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber-500",

  playbackButton:
    "ml-2 rounded-full border border-zinc-200 px-3 py-2 text-xs font-semibold text-zinc-700 transition-colors hover:bg-zinc-100 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber-500",
} as const;

export function TestimonialsSection() {
  const { testimonials } = portfolioData;
  const totalTestimonials = testimonials.length;

  const [activeSlideIndex, setActiveSlideIndex] = useState(
    totalTestimonials > 1 ? 1 : 0
  );
  const [isAutoPlayEnabled, setIsAutoPlayEnabled] = useState(true);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  const trackRef = useRef<HTMLDivElement>(null);
  const hasInitializedTrackRef = useRef(false);

  const hasMultipleTestimonials = totalTestimonials > 1;

  // Clones allow seamless movement in both directions.
  const slides = hasMultipleTestimonials
    ? [
        testimonials[totalTestimonials - 1],
        ...testimonials,
        testimonials[0],
      ]
    : testimonials;

  const displayedTestimonialIndex = hasMultipleTestimonials
    ? (activeSlideIndex - 1 + totalTestimonials) % totalTestimonials
    : 0;

  useEffect(() => {
    const motionPreference = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    );

    function updateMotionPreference(): void {
      setPrefersReducedMotion(motionPreference.matches);
    }

    updateMotionPreference();

    motionPreference.addEventListener("change", updateMotionPreference);

    return () => {
      motionPreference.removeEventListener(
        "change",
        updateMotionPreference
      );
    };
  }, []);

  // GSAP owns all horizontal track movement.
  useEffect(() => {
    const track = trackRef.current;

    if (!track || slides.length === 0) {
      return;
    }

    const targetXPercent =
      (-activeSlideIndex * 100) / slides.length;

    // Establish the initial position without animating on page load.
    if (!hasInitializedTrackRef.current) {
      gsap.set(track, { xPercent: targetXPercent });
      hasInitializedTrackRef.current = true;
      return;
    }

    // Respect reduced-motion preferences while retaining navigation.
    if (prefersReducedMotion) {
      gsap.set(track, { xPercent: targetXPercent });

      if (hasMultipleTestimonials && activeSlideIndex === 0) {
        setActiveSlideIndex(totalTestimonials);
      } else if (
        hasMultipleTestimonials &&
        activeSlideIndex === totalTestimonials + 1
      ) {
        setActiveSlideIndex(1);
      }

      return;
    }

    const slideAnimation = gsap.to(track, {
      xPercent: targetXPercent,
      duration: SLIDE_DURATION_SECONDS,
      ease: "power2.inOut",
      overwrite: "auto",

      onComplete: () => {
        if (!hasMultipleTestimonials) {
          return;
        }

        // Jump from the cloned last slide to the real last slide.
        if (activeSlideIndex === 0) {
          gsap.set(track, {
            xPercent: (-totalTestimonials * 100) / slides.length,
          });

          setActiveSlideIndex(totalTestimonials);
          return;
        }

        // Jump from the cloned first slide to the real first slide.
        if (activeSlideIndex === totalTestimonials + 1) {
          gsap.set(track, {
            xPercent: (-100 / slides.length),
          });

          setActiveSlideIndex(1);
        }
      },
    });

    return () => {
      slideAnimation.kill();
    };
  }, [
    activeSlideIndex,
    hasMultipleTestimonials,
    prefersReducedMotion,
    slides.length,
    totalTestimonials,
  ]);

  // Automatically advance, with timer cleanup on every state change.
  useEffect(() => {
    if (
      !hasMultipleTestimonials ||
      !isAutoPlayEnabled ||
      prefersReducedMotion
    ) {
      return;
    }

    const autoplayTimer = window.setTimeout(() => {
      setActiveSlideIndex((currentIndex) => currentIndex + 1);
    }, AUTOPLAY_INTERVAL_MS);

    return () => {
      window.clearTimeout(autoplayTimer);
    };
  }, [
    activeSlideIndex,
    hasMultipleTestimonials,
    isAutoPlayEnabled,
    prefersReducedMotion,
  ]);

  function handleNext(): void {
    if (!hasMultipleTestimonials) {
      return;
    }

    setActiveSlideIndex((currentIndex) => {
      if (currentIndex === 0) {
        return 1;
      }

      if (currentIndex === totalTestimonials + 1) {
        return 2;
      }

      return currentIndex + 1;
    });
  }

  function handlePrevious(): void {
    if (!hasMultipleTestimonials) {
      return;
    }

    setActiveSlideIndex((currentIndex) => {
      if (currentIndex === 0) {
        return totalTestimonials - 1;
      }

      if (currentIndex === 1) {
        return 0;
      }

      if (currentIndex === totalTestimonials + 1) {
        return totalTestimonials;
      }

      return currentIndex - 1;
    });
  }

  function handleSelectTestimonial(index: number): void {
    setActiveSlideIndex(index + 1);
  }

  if (totalTestimonials === 0) {
    return null;
  }

  return (
    <section
      id="testimonials"
      className="relative overflow-hidden py-16 sm:py-24"
      aria-labelledby="testimonials-heading"
    >
      <Container size="default">
        {/* Section Header */}
        <div className="mb-12 flex flex-col justify-between gap-6 sm:mb-16 sm:flex-row sm:items-end">
          <div className="max-w-xl">
            <span className="mb-3 inline-flex items-center rounded-full border border-amber-500/30 bg-amber-500/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-[#D97706] shadow-xs sm:text-sm">
              Client Endorsements
            </span>

            <h2
              id="testimonials-heading"
              className="text-3xl font-bold leading-[1.15] tracking-tight text-zinc-950 sm:text-4xl lg:text-5xl"
            >
              What Partners &amp; Clients Say
            </h2>

            <p className="mt-3 text-base font-medium leading-relaxed text-zinc-600 sm:text-lg">
              Feedback from enterprise partners, engineering leads,
              and clients who have deployed solutions with Krishanu.
            </p>
          </div>

          {/* Previous / Next Controls */}
          <div className={carouselStyles.navigation}>
            <button
              type="button"
              onClick={handlePrevious}
              disabled={!hasMultipleTestimonials}
              aria-label="Previous testimonial"
              className={carouselStyles.arrowButton}
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
                aria-hidden="true"
              >
                <line x1="19" y1="12" x2="5" y2="12" />
                <polyline points="12 19 5 12 12 5" />
              </svg>
            </button>

            <span
              className="select-none px-2 font-mono text-sm font-semibold text-zinc-500"
              aria-live="polite"
              aria-atomic="true"
            >
              {String(displayedTestimonialIndex + 1).padStart(2, "0")}
              {" / "}
              {String(totalTestimonials).padStart(2, "0")}
            </span>

            <button
              type="button"
              onClick={handleNext}
              disabled={!hasMultipleTestimonials}
              aria-label="Next testimonial"
              className={carouselStyles.arrowButton}
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
                aria-hidden="true"
              >
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </button>
          </div>
        </div>

        {/* GSAP Slider */}
        <div
          role="region"
          aria-roledescription="carousel"
          aria-label="Client testimonials"
        >
          <div className="overflow-hidden">
            <div
              ref={trackRef}
              className={carouselStyles.track}
              style={{ width: `${slides.length * 100}%` }}
            >
              {slides.map((testimonial, slideIndex) => {
                const isClonedSlide =
                  hasMultipleTestimonials &&
                  (slideIndex === 0 ||
                    slideIndex === totalTestimonials + 1);

                const isActiveSlide = slideIndex === activeSlideIndex;

                const authorInitials = testimonial.organization
                  .trim()
                  .slice(0, 2)
                  .toUpperCase();

                return (
                  <div
                    key={`${testimonial.organization}-${slideIndex}`}
                    className={carouselStyles.slide}
                    style={{ width: `${100 / slides.length}%` }}
                    role="group"
                    aria-roledescription="slide"
                    aria-label={`${((slideIndex - 1 + totalTestimonials) % totalTestimonials) + 1} of ${totalTestimonials}`}
                    aria-hidden={!isActiveSlide}
                    inert={!isActiveSlide}
                    data-cloned-slide={isClonedSlide}
                  >
                    <article className={carouselStyles.card}>
                      {/* Decorative Accent */}
                      <div
                        className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-amber-500/10 blur-3xl"
                        aria-hidden="true"
                      />

                      <div className="relative z-10 flex min-h-[280px] flex-col justify-between">
                        {/* Rating and Quote Icon */}
                        <div className="mb-8 flex items-center justify-between">
                          <div
                            className="flex items-center gap-1.5 text-amber-500"
                            role="img"
                            aria-label="5 out of 5 stars"
                          >
                            {Array.from({ length: 5 }, (_, index) => (
                              <svg
                                key={index}
                                width="20"
                                height="20"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                aria-hidden="true"
                              >
                                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                              </svg>
                            ))}
                          </div>

                          <div
                            className="text-zinc-200"
                            aria-hidden="true"
                          >
                            <svg
                              width="44"
                              height="44"
                              viewBox="0 0 24 24"
                              fill="currentColor"
                            >
                              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                            </svg>
                          </div>
                        </div>

                        {/* Testimonial Text */}
                        <blockquote className="mb-10 text-xl font-medium italic leading-relaxed text-zinc-900 sm:text-2xl lg:text-3xl">
                          &ldquo;{testimonial.content}&rdquo;
                        </blockquote>

                        {/* Reviewer Details */}
                        <div className="flex flex-wrap items-center justify-between gap-4 border-t border-zinc-100 pt-6">
                          <div className="flex min-w-0 items-center gap-4">
                            <div
                              className="flex size-13 shrink-0 items-center justify-center rounded-2xl border border-black/10 bg-gradient-to-br from-zinc-900 to-zinc-700 text-lg font-bold text-white shadow-sm sm:size-14"
                              aria-hidden="true"
                            >
                              {authorInitials}
                            </div>

                            <div className="min-w-0">
                              <h3 className="text-base font-bold text-zinc-950 sm:text-lg">
                                {testimonial.name}
                              </h3>

                              <p className="text-xs text-zinc-500 sm:text-sm">
                                {testimonial.role} ·{" "}
                                <span className="font-semibold text-zinc-700">
                                  {testimonial.organization}
                                </span>
                              </p>
                            </div>
                          </div>

                          <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">
                            <span
                              className="size-1.5 rounded-full bg-emerald-500"
                              aria-hidden="true"
                            />
                            Verified Review
                          </span>
                        </div>
                      </div>
                    </article>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Pagination and Autoplay */}
          {hasMultipleTestimonials && (
            <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
              {testimonials.map((testimonial, index) => (
                <button
                  key={`${testimonial.organization}-dot`}
                  type="button"
                  onClick={() => handleSelectTestimonial(index)}
                  aria-label={`Go to testimonial ${index + 1}`}
                  aria-current={
                    displayedTestimonialIndex === index ? "true" : undefined
                  }
                  className={`${carouselStyles.paginationButton} ${
                    displayedTestimonialIndex === index
                      ? "w-8 bg-[#D97706]"
                      : "w-2.5 bg-zinc-300 hover:bg-zinc-400"
                  }`}
                />
              ))}

              <button
                type="button"
                onClick={() =>
                  setIsAutoPlayEnabled((enabled) => !enabled)
                }
                disabled={prefersReducedMotion}
                aria-pressed={!isAutoPlayEnabled}
                className={carouselStyles.playbackButton}
              >
                {prefersReducedMotion
                  ? "Motion reduced"
                  : isAutoPlayEnabled
                    ? "Pause"
                    : "Play"}
              </button>
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}
