
import Image from "next/image";
import { portfolioData } from "@/data/portfolioData";
import { Container } from "@/components/ui/Container";

export function CurrentInitiativesSection() {
  const { currentInitiatives } = portfolioData;

  if (currentInitiatives.length === 0) {
    return null;
  }

  return (
    <section
      id="initiatives"
      className="relative overflow-hidden py-16 sm:py-24"
      aria-labelledby="initiatives-heading"
    >
      <Container size="default">
        {/* Section Header */}
        <div className="flex flex-col items-start mb-12 sm:mb-16 max-w-2xl">
          <span className="inline-flex items-center px-4 py-1.5 rounded-full border border-amber-500/30 bg-amber-500/10 text-[#D97706] text-xs sm:text-sm font-bold uppercase tracking-wider mb-3 shadow-xs">
            Current Initiatives
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-zinc-950 leading-[1.15]">
            What Krishanu is Doing
          </h2>
          <p className="text-base sm:text-lg text-zinc-600 font-medium mt-3 leading-relaxed">
            Leading high-impact technology initiatives — building the trusted marketplace for AI agents and mentoring aspiring engineers across South Asia.
          </p>
        </div>

        {/* Responsive Initiative Cards */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-10">
          {currentInitiatives.map((initiative) => (
            <article
              key={initiative.id}
              className="group relative flex flex-col justify-between rounded-[32px] border border-zinc-200/90 bg-white p-7 shadow-lg shadow-black/5 transition-all duration-300 hover:border-amber-500/30 hover:shadow-2xl sm:rounded-[36px] sm:p-9 lg:p-10"
            >
              <div>
                {/* Brand Logo and Status */}
                <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative flex h-14 items-center justify-center overflow-hidden rounded-2xl border border-black/10 bg-[#1E1E22] px-4 py-2 shadow-xs transition-transform hover:scale-105 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber-600 sm:h-16"
                    aria-label={`Visit ${initiative.title}`}
                  >
                    {initiative.logoUrl ? (
                      <div className="relative h-10 w-36 sm:w-40">
                        <Image
                          src={initiative.logoUrl}
                          alt={`${initiative.title} logo`}
                          fill
                          sizes="160px"
                          className="object-contain"
                        />
                      </div>
                    ) : (
                      <span className="text-lg font-bold tracking-tight text-white">
                        {initiative.title}
                      </span>
                    )}
                  </a>

                  <div className="flex flex-wrap items-center gap-2">
                    <span className="inline-flex items-center rounded-full border border-amber-500/20 bg-amber-500/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#D97706]">
                      {initiative.statusTag}
                    </span>

                    {initiative.teamSize && (
                      <span className="inline-flex items-center rounded-full border border-zinc-200 bg-zinc-100 px-3 py-1 text-xs font-semibold text-zinc-700">
                        {initiative.teamSize}
                      </span>
                    )}
                  </div>
                </div>

                {/* Initiative Title */}
                <h3 className="mb-3 text-2xl font-bold tracking-tight text-zinc-950 sm:text-3xl">
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 transition-colors hover:text-amber-600 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber-600"
                  >
                    <span>{initiative.title}</span>

                    <span
                      aria-hidden="true"
                      className="text-xl text-zinc-400 transition-colors group-hover:text-amber-600"
                    >
                      ↗
                    </span>
                  </a>
                </h3>

                {/* Initiative Description */}
                <p className="mb-6 text-sm font-normal leading-relaxed text-zinc-700 sm:text-base">
                  {initiative.summary}
                </p>

                {/* Initiative Highlights */}
                {initiative.points &&
                  initiative.points.length > 0 && (
                    <ul className="mb-8 space-y-2.5">
                      {initiative.points.map((point, pointIndex) => (
                        <li
                          key={`${initiative.id}-point-${pointIndex}`}
                          className="flex items-start gap-2.5 rounded-xl border border-zinc-200/70 bg-zinc-50 p-3"
                        >
                          <span
                            aria-hidden="true"
                            className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-amber-500/20 text-xs font-bold text-[#B45309]"
                          >
                            ✓
                          </span>

                          <span className="text-xs font-semibold text-zinc-800 sm:text-sm">
                            {point}
                          </span>
                        </li>
                      ))}
                    </ul>
                  )}
              </div>

              {/* Initiative Footer */}
              <div className="flex items-center justify-between gap-3 border-t border-zinc-100 pt-6">
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/action inline-flex items-center justify-center gap-2 rounded-full bg-zinc-950 px-5 py-2.5 text-xs font-semibold text-white shadow-sm transition-all hover:bg-[#D97706] hover:shadow-lg focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber-600 sm:text-sm"
                >
                  <span>{initiative.linkText}</span>

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
                    <line x1="7" y1="17" x2="17" y2="7" />
                    <polyline points="7 7 17 7 17 17" />
                  </svg>
                </a>

                <span className="text-xs text-zinc-400 font-medium">
                  Verified Platform
                </span>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
