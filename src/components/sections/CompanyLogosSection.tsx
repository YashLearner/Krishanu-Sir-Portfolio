import React from "react";
import Image from "next/image";
import { portfolioData } from "@/data/portfolioData";
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/utils";

export function CompanyLogosSection() {
  const { items } = portfolioData.companyMarquee;

  if (!items || items.length === 0) return null;

  return (
    <section
      aria-label="Partner and Client Companies"
      className="w-full overflow-hidden border-y border-black/[0.06] bg-white/70 py-4 backdrop-blur-sm sm:py-5"
    >
      <Container size="default">
        <p className="mb-3 text-center text-[11px] font-semibold uppercase tracking-wider text-zinc-400 sm:mb-4 sm:text-xs">
          Trusted by Companies &amp; Platforms
        </p>
      </Container>

      {/* Infinite horizontal logo marquee */}
      <div className="company-marquee w-full overflow-hidden">
        <div className="company-marquee-track">
          {[0, 1].map((groupIndex) => (
            <div
              key={groupIndex}
              className="company-marquee-group flex min-w-full shrink-0 items-center justify-around gap-4 px-4 sm:gap-7 sm:px-7 md:gap-9 md:px-9 lg:gap-11 lg:px-11">
              {items.map((item) => {
                const isTohfa = item.id === "tohfabazzar";
                const isRounded =
                  item.id === "crawldigitally" ||
                  item.id === "nexttechwaves";

                return (
                  <React.Fragment key={item.id}>
                    <div className="group flex shrink-0 items-center justify-center py-1 transition-transform duration-200 hover:-translate-y-0.5">
                      {item.logoUrl ? (
                        <Image
                          src={item.logoUrl}
                          alt={`${item.name} logo`}
                          width={isTohfa ? 200 : 150}
                          height={isTohfa ? 70 : 42}
                          className={cn(
                            "w-auto object-contain transition-transform duration-300",
                            isTohfa
                              ? "h-9 sm:h-11 md:h-12"
                              : "h-6 sm:h-7 md:h-8",
                            isRounded &&
                            "overflow-hidden rounded-lg shadow-xs sm:rounded-xl"
                          )}
                        />
                      ) : (
                        <span className="whitespace-nowrap text-sm font-semibold tracking-tight text-zinc-700 sm:text-base">
                          {item.name}
                        </span>
                      )}
                    </div>

                    <span
                      aria-hidden="true"
                      className="select-none text-sm font-light text-zinc-300 sm:text-base"
                    >
                      +
                    </span>
                  </React.Fragment>
                );
              })}
            </div>
          ))}
      </div>
    </div>
    </section >
  );
}
