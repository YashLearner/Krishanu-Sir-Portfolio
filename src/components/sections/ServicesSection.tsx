import React from "react";
import Link from "next/link";
import { portfolioData } from "@/data/portfolioData";
import { Container } from "@/components/ui/Container";

function ServiceIcon({ type }: { type: string }) {
  switch (type) {
    case "marketplace":
      return (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
          <polyline points="9 22 9 12 15 12 15 22" />
        </svg>
      );
    case "agent":
      return (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="3" y="11" width="18" height="10" rx="2" />
          <circle cx="12" cy="5" r="2" />
          <path d="M12 7v4" />
          <line x1="8" y1="16" x2="8" y2="16.01" />
          <line x1="16" y1="16" x2="16" y2="16.01" />
        </svg>
      );
    case "automation":
      return (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
        </svg>
      );
    case "security":
      return (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <polyline points="9 11 12 14 15 11" />
        </svg>
      );
    case "crm":
      return (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      );
    case "web":
      return (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="16 18 22 12 16 6" />
          <polyline points="8 6 2 12 8 18" />
          <line x1="14" y1="4" x2="10" y2="20" />
        </svg>
      );
    default:
      return (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <circle cx="12" cy="12" r="10" />
        </svg>
      );
  }
}



const serviceCtaClass =
  "inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-amber-400 transition-colors hover:text-amber-300 focus-visible:outline-none focus-visible:underline";


export function ServicesSection() {
  const { services } = portfolioData;

  return (
    <section id="services" className="relative py-16 sm:py-24 overflow-hidden">
      <Container size="default">
        {/* Dark Container Shell Matching Navbar Aesthetic */}
        <div className="relative rounded-[36px] sm:rounded-[44px] bg-[#141417] border border-white/10 p-6 sm:p-10 lg:p-14 shadow-2xl shadow-black/30 overflow-hidden">
          {/* Subtle Ambient Radial Glow */}
          <div
            className="absolute top-0 right-0 w-[500px] h-[500px] bg-amber-500/5 rounded-full blur-3xl pointer-events-none"
            aria-hidden="true"
          />
          <div
            className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-3xl pointer-events-none"
            aria-hidden="true"
          />

          {/* Header Row */}
          <div className="relative flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12 sm:mb-16">
            <div className="max-w-2xl">
              <span className="inline-flex items-center px-4 py-1.5 rounded-full border border-amber-500/30 bg-amber-500/10 text-amber-400 text-xs sm:text-sm font-semibold tracking-wide mb-4">
                What Krishanu Offers
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-[1.15]">
                What Services Krishanu Provides
              </h2>
            </div>
            <p className="text-sm sm:text-base text-zinc-400 max-w-md leading-relaxed font-normal">
              Specialized expertise spanning the AI Agent economy, enterprise process automations, offensive cybersecurity, and production-ready digital architectures.
            </p>
          </div>

          {/* 6-Card Services Grid */}
          <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
            {services.map((service) => (
              <div
                key={service.id}
                className="group relative rounded-2xl sm:rounded-3xl bg-[#1B1B1F] border border-white/8 hover:border-amber-500/40 p-7 sm:p-8 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/40 hover:bg-[#202026]"
              >
                <div>
                  {/* Top Header: Icon & Index */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-[#F97316] group-hover:scale-110 group-hover:bg-amber-500/10 transition-all">
                      <ServiceIcon type={service.icon || "web"} />
                    </div>
                  </div>

                  {/* Service Title */}
                  <h3 className="text-xl font-bold text-white group-hover:text-amber-300 transition-colors mb-3 tracking-tight">
                    {service.title}
                  </h3>

                  {/* Service Description */}
                  <p className="text-sm sm:text-[15px] text-zinc-400 leading-relaxed font-normal">
                    {service.description}
                  </p>
                </div>

                {/* Bottom CTA / Action Link */}

                {/* Bottom CTA / Action Link */}
                <div className="mt-6 flex items-center justify-between border-t border-white/5 pt-5">
                  {service.href?.startsWith("http") ? (
                    <a
                      href={service.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={serviceCtaClass}
                    >
                      <span>{service.ctaText || "Learn More"}</span>
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <line x1="7" y1="17" x2="17" y2="7" />
                        <polyline points="7 7 17 7 17 17" />
                      </svg>
                    </a>
                  ) : (
                    <Link
                      href={service.href || "#contact"}
                      className={serviceCtaClass}
                    >
                      <span>{service.ctaText || "Inquire Details"}</span>
                      <span aria-hidden="true">→</span>
                    </Link>
                  )}

                  <span className="h-2 w-2 rounded-full bg-white/10 transition-colors group-hover:bg-amber-400" />
                </div>

              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
