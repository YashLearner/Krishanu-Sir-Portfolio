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
      className="w-full py-4 sm:py-5 border-y border-black/[0.06] bg-white/70 backdrop-blur-sm"
    >
      <Container size="default">
        <div className="flex flex-col items-center">
          <p className="text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-2.5 sm:mb-3">
            Trusted by Companies &amp; Platforms
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-7 md:gap-9 lg:gap-11">
            {items.map((item, index) => {
              const isTohfa = item.id === "tohfabazzar";
              const isRounded =
                item.id === "crawldigitally" || item.id === "nexttechwaves";

              return (
                <React.Fragment key={item.id}>
                  {/* Plus separator matching reference layout */}
                  {index > 0 && (
                    <span
                      className="text-zinc-300 font-light text-sm sm:text-base select-none"
                      aria-hidden="true"
                    >
                      +
                    </span>
                  )}

                  {/* Logo Item in Full Original Colors */}
                  <div className="flex items-center justify-center px-2 py-1 group transition-transform duration-200 hover:-translate-y-0.5">
                    {item.logoUrl ? (
                      <Image
                        src={item.logoUrl}
                        alt={`${item.name} logo`}
                        width={isTohfa ? 200 : 150}
                        height={isTohfa ? 70 : 42}
                        className={cn(
                          "w-auto object-contain transition-all duration-300",
                          isTohfa
                            ? "h-9 sm:h-11 md:h-12"
                            : "h-6 sm:h-7 md:h-8",
                          isRounded && "rounded-lg sm:rounded-xl overflow-hidden shadow-xs"
                        )}
                      />
                    ) : (
                      <span className="text-sm sm:text-base font-semibold text-zinc-700 tracking-tight">
                        {item.name}
                      </span>
                    )}
                  </div>
                </React.Fragment>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
