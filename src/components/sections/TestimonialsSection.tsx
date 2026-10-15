"use client";

import {
  useCallback,
  useEffect,
  useId,
  useLayoutEffect,
  useRef,
  useState,
  useSyncExternalStore,
} from "react";
import type {
  CSSProperties,
  FocusEvent as ReactFocusEvent,
  KeyboardEvent as ReactKeyboardEvent,
  PointerEvent as ReactPointerEvent,
  TouchEvent as ReactTouchEvent,
} from "react";
import { gsap } from "gsap";

import { portfolioData } from "@/data/portfolioData";
import { Container } from "@/components/ui/Container";

/* -------------------------------------------------------------------------- */
/* Configuration                                                              */
/* -------------------------------------------------------------------------- */

// Autoplay must stay well above the transition duration so a new transition
// can never be scheduled while the previous one is still running.
const autoPlayInterval = 2000;
const transitionDuration = 0.85;
const TRANSITION_EASE = "power3.inOut";

// Fraction of a transition after which stacking order is swapped, so a card
// never jumps in front of its neighbour while they still overlap heavily.
const Z_SWAP_PROGRESS = 0.45;

const SWIPE_THRESHOLD_PX = 45;

const DESKTOP_QUERY = "(min-width: 1024px)";
const TABLET_QUERY = "(min-width: 640px)";
const REDUCED_MOTION_QUERY = "(prefers-reduced-motion: reduce)";

const styles = {
  stage: "grid grid-cols-1  touch-pan-y overflow-x-clip py-6",

  // Every card shares the same grid cell, so the stage is always as tall as
  // the tallest testimonial and there are no fixed heights or layout shifts.
  slide:
    "col-start-1 row-start-1 w-full justify-self-center will-change-transform sm:w-[74%] lg:w-[62%]",

  card: "relative isolate flex h-full flex-col overflow-hidden rounded-2xl border border-zinc-200/90 bg-white p-6 shadow-xl shadow-black/5 sm:rounded-[32px] sm:p-8 lg:rounded-[40px] lg:p-10",

  controlButton:
    "flex size-11 shrink-0 items-center justify-center rounded-full border border-zinc-200 bg-white text-zinc-700 shadow-xs transition-colors hover:border-amber-500/50 hover:text-[#D97706] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-500 motion-reduce:transition-none",

  paginationButton:
    "group flex h-8 items-center justify-center rounded-full px-1.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-500",
} as const;

/* -------------------------------------------------------------------------- */
/* Types                                                                      */
/* -------------------------------------------------------------------------- */

type Testimonial = (typeof portfolioData.testimonials)[number];
type CarouselLayout = "mobile" | "tablet" | "desktop";
type Direction = 1 | -1;
type PauseSource = "hover" | "focus" | "touch";

type SlotProfile = {
  xPercent: number;
  scale: number;
  autoAlpha: number;
};

type SlotState = SlotProfile & { zIndex: number };

type SyncSnapshot = {
  index: number;
  layout: CarouselLayout;
  total: number;
};

/* -------------------------------------------------------------------------- */
/* Slot geometry                                                              */
/* -------------------------------------------------------------------------- */

/**
 * Offset 0 is the active card. Offsets -1 / +1 are the visible neighbours.
 * Offsets -2 / +2 are the "parked" slots just outside the stack (invisible).
 *
 * xPercent is relative to the card's own width, so the stack scales with the
 * card width at every breakpoint instead of relying on pixel values.
 */
const SLOT_PROFILES: Record<
  CarouselLayout,
  { near: SlotProfile; far: SlotProfile }
> = {
  desktop: {
    near: { xPercent: 28, scale: 0.88, autoAlpha: 0.6 },
    far: { xPercent: 40, scale: 0.78, autoAlpha: 0 },
  },
  tablet: {
    near: { xPercent: 22, scale: 0.9, autoAlpha: 0.5 },
    far: { xPercent: 32, scale: 0.8, autoAlpha: 0 },
  },
  // Mobile hides the side previews entirely; cards slide + fade instead.
  mobile: {
    near: { xPercent: 100, scale: 0.94, autoAlpha: 0 },
    far: { xPercent: 120, scale: 0.9, autoAlpha: 0 },
  },
};

function getSlotState(layout: CarouselLayout, offset: number): SlotState {
  const clampedOffset = Math.max(-2, Math.min(2, offset));

  if (clampedOffset === 0) {
    return { xPercent: 0, scale: 1, autoAlpha: 1, zIndex: 30 };
  }

  const side = Math.sign(clampedOffset);
  const isNear = Math.abs(clampedOffset) === 1;
  const profile = isNear
    ? SLOT_PROFILES[layout].near
    : SLOT_PROFILES[layout].far;

  return {
    xPercent: side * profile.xPercent,
    scale: profile.scale,
    autoAlpha: profile.autoAlpha,
    zIndex: isNear ? 20 : 10,
  };
}

/* -------------------------------------------------------------------------- */
/* Index helpers                                                              */
/* -------------------------------------------------------------------------- */

function wrapIndex(index: number, total: number): number {
  return ((index % total) + total) % total;
}

/**
 * Signed circular distance of `index` from `activeIndex`, in the range
 * (-total/2, total/2]. With two testimonials the other card is always "next".
 */
function getRelativeOffset(
  index: number,
  activeIndex: number,
  total: number
): number {
  let difference = index - activeIndex;
  const half = total / 2;

  if (difference > half) {
    difference -= total;
  } else if (difference <= -half) {
    difference += total;
  }

  return difference;
}

function resolveDirection(
  fromIndex: number,
  toIndex: number,
  total: number
): Direction {
  const forwardSteps = wrapIndex(toIndex - fromIndex, total);

  return forwardSteps <= total / 2 ? 1 : -1;
}

function getInitials(testimonial: Testimonial): string {
  const nameWords = testimonial.name.trim().split(/\s+/).filter(Boolean);
  const words =
    nameWords.length > 0
      ? nameWords
      : testimonial.organization.trim().split(/\s+/).filter(Boolean);

  const firstWord = words[0];

  if (!firstWord) {
    return "";
  }

  const lastWord = words[words.length - 1];
  const second =
    words.length > 1 && lastWord ? lastWord.charAt(0) : firstWord.charAt(1);

  return `${firstWord.charAt(0)}${second}`.toUpperCase();
}

/* -------------------------------------------------------------------------- */
/* GSAP                                                                       */
/* -------------------------------------------------------------------------- */

function setStack(
  cards: HTMLElement[],
  activeIndex: number,
  layout: CarouselLayout
): void {
  cards.forEach((card, index) => {
    gsap.set(
      card,
      getSlotState(layout, getRelativeOffset(index, activeIndex, cards.length))
    );
  });
}

type TransitionParams = {
  cards: HTMLElement[];
  fromIndex: number;
  toIndex: number;
  direction: Direction;
  layout: CarouselLayout;
};

/**
 * One coordinated timeline for every card in the stack.
 *
 * - Cards that keep moving in the direction of travel simply tween to their
 *   new slot (x, scale, opacity), with the stacking order swapped mid-way.
 * - A card that would have to travel *against* the direction of travel (it
 *   wraps around the ring) exits towards the side it is already leaving,
 *   is re-parked on the opposite side while invisible, then enters.
 */
function createTransitionTimeline({
  cards,
  fromIndex,
  toIndex,
  direction,
  layout,
}: TransitionParams): gsap.core.Timeline {
  const total = cards.length;
  const halfDuration = transitionDuration / 2;
  const timeline = gsap.timeline();

  cards.forEach((card, index) => {
    const fromOffset = getRelativeOffset(index, fromIndex, total);
    const toOffset = getRelativeOffset(index, toIndex, total);
    const target = getSlotState(layout, toOffset);
    const { zIndex, ...targetMotion } = target;

    // Parked before and after: nothing visible to animate.
    if (Math.abs(fromOffset) >= 2 && Math.abs(toOffset) >= 2) {
      timeline.set(card, target, 0);
      return;
    }

    const isWrapping =
      direction === 1 ? toOffset > fromOffset : toOffset < fromOffset;

    if (!isWrapping) {
      timeline
        .to(
          card,
          {
            ...targetMotion,
            duration: transitionDuration,
            ease: TRANSITION_EASE,
          },
          0
        )
        .set(card, { zIndex }, transitionDuration * Z_SWAP_PROGRESS);
      return;
    }

    const exitState = getSlotState(layout, -2 * direction);
    const exitMotion: SlotProfile = {
      xPercent: exitState.xPercent,
      scale: exitState.scale,
      autoAlpha: exitState.autoAlpha,
    };
    const enterState = getSlotState(layout, 2 * direction);

    timeline
      .to(
        card,
        { ...exitMotion, duration: halfDuration, ease: "power2.in" },
        0
      )
      .set(card, enterState, halfDuration)
      .to(
        card,
        { ...targetMotion, duration: halfDuration, ease: "power2.out" },
        halfDuration
      )
      .set(
        card,
        { zIndex },
        halfDuration + halfDuration * Z_SWAP_PROGRESS
      );
  });

  return timeline;
}

/* -------------------------------------------------------------------------- */
/* Environment hooks (SSR / hydration safe)                                   */
/* -------------------------------------------------------------------------- */

const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

function subscribeToMediaQueries(onChange: () => void): () => void {
  const queryLists = [DESKTOP_QUERY, TABLET_QUERY, REDUCED_MOTION_QUERY].map(
    (query) => window.matchMedia(query)
  );

  queryLists.forEach((list) => list.addEventListener("change", onChange));

  return () => {
    queryLists.forEach((list) => list.removeEventListener("change", onChange));
  };
}

function getLayoutSnapshot(): CarouselLayout {
  if (window.matchMedia(DESKTOP_QUERY).matches) {
    return "desktop";
  }

  if (window.matchMedia(TABLET_QUERY).matches) {
    return "tablet";
  }

  return "mobile";
}

function getServerLayoutSnapshot(): CarouselLayout {
  return "desktop";
}

function getReducedMotionSnapshot(): boolean {
  return window.matchMedia(REDUCED_MOTION_QUERY).matches;
}

function getServerReducedMotionSnapshot(): boolean {
  return false;
}

/* -------------------------------------------------------------------------- */
/* Static, state-independent inline style                                     */
/* -------------------------------------------------------------------------- */

// Rendered on the server for every card except the first, so nothing flashes
// before GSAP positions the stack. The value depends only on the card's
// position in the list, never on React state, so React never rewrites it
// and never fights GSAP over opacity / visibility.
const PRE_POSITIONED_STYLE: CSSProperties = {
  opacity: 0,
  visibility: "hidden",
};

/* -------------------------------------------------------------------------- */
/* Component                                                                  */
/* -------------------------------------------------------------------------- */

export function TestimonialsSection() {
  const { testimonials } = portfolioData;
  const totalTestimonials = testimonials.length;
  const hasMultipleTestimonials = totalTestimonials > 1;

  const stageId = useId();

  // Single source of truth: the real testimonial index (0 .. total - 1).
  const [storedIndex, setStoredIndex] = useState(0);
  const activeIndex = Math.min(storedIndex, Math.max(totalTestimonials - 1, 0));

  const [pauseSources, setPauseSources] = useState<readonly PauseSource[]>([]);
  const isPaused = pauseSources.length > 0;

  const layout = useSyncExternalStore(
    subscribeToMediaQueries,
    getLayoutSnapshot,
    getServerLayoutSnapshot
  );
  const prefersReducedMotion = useSyncExternalStore(
    subscribeToMediaQueries,
    getReducedMotionSnapshot,
    getServerReducedMotionSnapshot
  );

  const cardRefs = useRef<Array<HTMLDivElement | null>>([]);
  const previousSyncRef = useRef<SyncSnapshot | null>(null);
  const requestedDirectionRef = useRef<Direction | null>(null);
  const touchStartRef = useRef<{ x: number; y: number } | null>(null);

  const isAutoplayRunning =
    hasMultipleTestimonials && !prefersReducedMotion && !isPaused;

  /* ------------------------------ Navigation ------------------------------ */

  const goNext = useCallback((): void => {
    if (totalTestimonials < 2) {
      return;
    }

    requestedDirectionRef.current = 1;
    setStoredIndex((current) => wrapIndex(current + 1, totalTestimonials));
  }, [totalTestimonials]);

  const goPrevious = useCallback((): void => {
    if (totalTestimonials < 2) {
      return;
    }

    requestedDirectionRef.current = -1;
    setStoredIndex((current) => wrapIndex(current - 1, totalTestimonials));
  }, [totalTestimonials]);

  const goToTestimonial = useCallback(
    (index: number): void => {
      if (totalTestimonials < 2) {
        return;
      }

      // Direction is derived from the shortest path when the layout effect runs.
      requestedDirectionRef.current = null;
      setStoredIndex(wrapIndex(index, totalTestimonials));
    },
    [totalTestimonials]
  );

  /* --------------------------- Pause (autoplay) --------------------------- */

  const addPause = useCallback((source: PauseSource): void => {
    setPauseSources((current) =>
      current.includes(source) ? current : [...current, source]
    );
  }, []);

  const removePause = useCallback((source: PauseSource): void => {
    setPauseSources((current) =>
      current.includes(source)
        ? current.filter((item) => item !== source)
        : current
    );
  }, []);

  function handlePointerEnter(event: ReactPointerEvent<HTMLDivElement>): void {
    // Touch "hover" is sticky on mobile browsers, so only real pointers pause.
    if (event.pointerType !== "touch") {
      addPause("hover");
    }
  }

  function handlePointerLeave(event: ReactPointerEvent<HTMLDivElement>): void {
    if (event.pointerType !== "touch") {
      removePause("hover");
    }
  }

  function handleFocus(event: ReactFocusEvent<HTMLDivElement>): void {
    // Only keyboard focus pauses; clicking a button with a mouse should not
    // permanently stop autoplay.
    if (
      event.target instanceof HTMLElement &&
      event.target.matches(":focus-visible")
    ) {
      addPause("focus");
    }
  }

  function handleBlur(event: ReactFocusEvent<HTMLDivElement>): void {
    if (!event.currentTarget.contains(event.relatedTarget)) {
      removePause("focus");
    }
  }

  /* ------------------------------ Touch / keys ---------------------------- */

  function handleTouchStart(event: ReactTouchEvent<HTMLDivElement>): void {
    const touch = event.changedTouches[0];

    if (!touch) {
      return;
    }

    touchStartRef.current = { x: touch.clientX, y: touch.clientY };
    addPause("touch");
  }

  function handleTouchEnd(event: ReactTouchEvent<HTMLDivElement>): void {
    const start = touchStartRef.current;
    const touch = event.changedTouches[0];

    touchStartRef.current = null;
    removePause("touch");

    if (!start || !touch || !hasMultipleTestimonials) {
      return;
    }

    const deltaX = touch.clientX - start.x;
    const deltaY = touch.clientY - start.y;

    // Ignore short gestures and vertical page scrolling.
    if (
      Math.abs(deltaX) < SWIPE_THRESHOLD_PX ||
      Math.abs(deltaX) < Math.abs(deltaY)
    ) {
      return;
    }

    if (deltaX < 0) {
      goNext();
    } else {
      goPrevious();
    }
  }

  function handleTouchCancel(): void {
    touchStartRef.current = null;
    removePause("touch");
  }

  function handleKeyDown(event: ReactKeyboardEvent<HTMLDivElement>): void {
    if (!hasMultipleTestimonials) {
      return;
    }

    if (event.key === "ArrowRight") {
      event.preventDefault();
      goNext();
    } else if (event.key === "ArrowLeft") {
      event.preventDefault();
      goPrevious();
    }
  }

  /* ------------------------- GSAP <-> React sync -------------------------- */

  // React owns `activeIndex`; GSAP owns the transforms/opacity/z-index of the
  // cards. This effect is the only place the two meet.
  useIsomorphicLayoutEffect(() => {
    const cards = cardRefs.current
      .slice(0, totalTestimonials)
      .filter((card): card is HTMLDivElement => card !== null);

    if (totalTestimonials === 0 || cards.length !== totalTestimonials) {
      return;
    }

    const previous = previousSyncRef.current;
    const requestedDirection = requestedDirectionRef.current;

    requestedDirectionRef.current = null;
    previousSyncRef.current = {
      index: activeIndex,
      layout,
      total: totalTestimonials,
    };

    // First paint, layout change, reduced motion, or data change: snap.
    // Only a real index change at an unchanged layout is animated.
    if (
      previous === null ||
      prefersReducedMotion ||
      previous.layout !== layout ||
      previous.total !== totalTestimonials ||
      previous.index === activeIndex
    ) {
      setStack(cards, activeIndex, layout);
      return;
    }

    const timeline = createTransitionTimeline({
      cards,
      fromIndex: previous.index,
      toIndex: activeIndex,
      direction:
        requestedDirection ??
        resolveDirection(previous.index, activeIndex, totalTestimonials),
      layout,
    });

    return () => {
      // Finish instead of freezing mid-flight so the next run (or unmount)
      // always starts from a fully resolved stack.
      timeline.progress(1).kill();
    };
  }, [activeIndex, layout, prefersReducedMotion, totalTestimonials]);

  /* -------------------------------- Autoplay ------------------------------ */

  // Restarts after every index change, so a manual navigation resets the delay.
  // The interval is far longer than the transition, so it never fires mid-way.
  useEffect(() => {
    if (!isAutoplayRunning) {
      return;
    }

    const timerId = window.setTimeout(goNext, autoPlayInterval);

    return () => {
      window.clearTimeout(timerId);
    };
  }, [activeIndex, goNext, isAutoplayRunning]);

  /* --------------------------------- Render -------------------------------- */

  if (totalTestimonials === 0) {
    return null;
  }

  const activeTestimonial = testimonials[activeIndex];
  const announcement = activeTestimonial
    ? `Testimonial ${activeIndex + 1} of ${totalTestimonials}, from ${activeTestimonial.name}, ${activeTestimonial.organization}`
    : "";

  return (
    <section
      id="testimonials"
      className="relative overflow-hidden py-10 sm:py-16 lg:py-24"
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
        </div>

        {/* 3D stacked carousel */}
        <div
          role="region"
          aria-roledescription="carousel"
          aria-label="Client testimonials"
          onKeyDown={handleKeyDown}
          onPointerEnter={handlePointerEnter}
          onPointerLeave={handlePointerLeave}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          onTouchCancel={handleTouchCancel}
        >
          <div id={stageId} className={styles.stage}>
            {testimonials.map((testimonial, index) => {
              const isActive = index === activeIndex;

              return (
                <div
                  key={`${testimonial.organization}-${testimonial.name}-${index}`}
                  ref={(node) => {
                    cardRefs.current[index] = node;
                  }}
                  className={styles.slide}
                  style={index === 0 ? undefined : PRE_POSITIONED_STYLE}
                  role="group"
                  aria-roledescription="slide"
                  aria-label={`${index + 1} of ${totalTestimonials}`}
                  // Neighbour cards are previews only: `inert` removes them
                  // from the tab order and the accessibility tree together.
                  inert={!isActive}
                >
                  <article className={styles.card}>
                    {/* Decorative accent */}
                    <div
                      className="pointer-events-none  absolute -right-28 -top-28 h-56 w-56 rounded-full bg-amber-500/10 blur-3xl sm:-right-24 sm:-top-24 sm:h-72 sm:w-72"
                      aria-hidden="true"
                    />

                    <div className="relative z-10 text-[#EA580C] flex flex-1 flex-col">
                      <svg
                        className="mb-5 size-9  sm:size-11"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                      </svg>

                      <blockquote className="mb-8 flex-1 break-words text-lg font-medium italic leading-relaxed text-[#f59e0b] sm:text-xl lg:text-2xl">
                        &ldquo;{testimonial.content}&rdquo;
                      </blockquote>

                      <footer className="flex min-w-0 items-center gap-4 border-t border-zinc-100 pt-5 sm:pt-6">
                        <div
                          className="flex size-12 shrink-0 items-center justify-center rounded-2xl border border-black/10 bg-gradient-to-br from-zinc-900 to-zinc-700 text-base font-bold text-[#f59e0b] shadow-sm sm:size-14 sm:text-lg"
                          aria-hidden="true"
                        >
                          {getInitials(testimonial)}
                        </div>

                        <div className="min-w-0">
                          <h3 className="break-words text-sm font-bold text-zinc-950 sm:text-base md:text-lg">
                            {testimonial.name}
                          </h3>

                          <p className="break-words text-xs text-zinc-500 sm:text-sm">
                            {testimonial.role} ·{" "}
                            <span className="font-semibold text-zinc-700">
                              {testimonial.organization}
                            </span>
                          </p>
                        </div>
                      </footer>
                    </div>
                  </article>
                </div>
              );
            })}
          </div>

          {/* Announces slide changes, but never while autoplay is running. */}
          <p
            className="sr-only"
            aria-live={isAutoplayRunning ? "off" : "polite"}
            aria-atomic="true"
          >
            {announcement}
          </p>

          {/* Controls */}
          {hasMultipleTestimonials && (
            <div className="mt-4 flex items-center justify-center gap-2 sm:mt-6 sm:gap-4">
              <button
                type="button"
                onClick={goPrevious}
                aria-label="Previous testimonial"
                aria-controls={stageId}
                className={styles.controlButton}
              >
                <svg
                  className="size-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="m15 18-6-6 6-6" />
                </svg>
              </button>

              <div className="flex flex-wrap items-center justify-center gap-1 sm:gap-1.5">
                {testimonials.map((testimonial, index) => {
                  const isActive = index === activeIndex;

                  return (
                    <button
                      key={`${testimonial.organization}-${testimonial.name}-${index}-dot`}
                      type="button"
                      onClick={() => goToTestimonial(index)}
                      aria-label={`Go to testimonial ${index + 1}`}
                      aria-current={isActive ? "true" : undefined}
                      aria-controls={stageId}
                      className={styles.paginationButton}
                    >
                      <span
                        className={`block h-2.5 rounded-full transition-all duration-300 motion-reduce:transition-none ${
                          isActive
                            ? "w-8 bg-[#D97706]"
                            : "w-2.5 bg-zinc-300 group-hover:bg-zinc-400"
                        }`}
                      />
                    </button>
                  );
                })}
              </div>

              <button
                type="button"
                onClick={goNext}
                aria-label="Next testimonial"
                aria-controls={stageId}
                className={styles.controlButton}
              >
                <svg
                  className="size-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </button>
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}