import React from "react";
import Image from "next/image";
import { portfolioData } from "@/data/portfolioData";
import { Container } from "@/components/ui/Container";

export function AchievementsSection() {
  const { achievements } = portfolioData;
  const achievement = achievements[0]; // Executive session for IPS & IAS officers in Bhopal

  return (
    <section id="achievements" className="relative py-16 sm:py-24 overflow-hidden">
      <Container size="default">
        {/* Section Header */}
        <div className="flex flex-col items-start mb-10 sm:mb-14 max-w-3xl">
          <span className="inline-flex items-center px-4 py-1.5 rounded-full border border-amber-500/30 bg-amber-500/10 text-[#D97706] text-xs sm:text-sm font-bold uppercase tracking-wider mb-3 shadow-xs">
            Major Milestone
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-zinc-950 leading-[1.15]">
            Delivered a guest lecture on VAPT to the law enforcement officers at CAPT Bhopal

          </h2>
          <p className="text-base sm:text-lg text-zinc-600 font-medium mt-3 leading-relaxed">
            Recognized for advancing cyber defense awareness and offensive security literacy among state administrative and law enforcement leadership.
          </p>
        </div>

        {/* Featured Showcase Card */}
        <div className="bg-white/80 backdrop-blur-sm border border-zinc-200/90 rounded-[32px] sm:rounded-[40px] p-6 sm:p-9 lg:p-12 shadow-xl shadow-black/5 relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left: Authentic Session Photograph */}
            <div className="lg:col-span-6 relative rounded-2xl sm:rounded-3xl overflow-hidden border border-black/10 shadow-2xl bg-zinc-950 min-h-[380px] sm:min-h-[460px] group">
              {achievement.imageUrl && (
                <Image
                  src={achievement.imageUrl}
                  alt={achievement.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 600px"
                  className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  priority
                />
              )}

              {/* Gradient lighting & glass badge */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent pointer-events-none" />

              <div className="absolute bottom-5 left-5 right-5 p-4 rounded-2xl bg-black/60 backdrop-blur-md border border-white/15 text-white">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#F59E0B]">
                  Official Executive Session • CAPT Bhopal, M.P.
                </span>
                <p className="text-sm font-bold text-white mt-0.5">
                  Audience: Senior IPS, IAS &amp;  law enforcement leadership.

                </p>
                <p className="text-xs text-zinc-300 mt-1">
                  Topic: Ethical Hacking, Threat Vectors &amp; Autonomous Cybersecurity
                </p>
              </div>
            </div>

            {/* Right: In-depth Context & Highlights */}
            <div className="lg:col-span-6 flex flex-col justify-between space-y-6">
              <div>
                <div className="flex flex-wrap items-center gap-2 mb-3">
                  <span className="text-xs font-bold text-[#D97706] bg-[#F59E0B]/10 px-3 py-1 rounded-full border border-[#F59E0B]/20 uppercase tracking-wider">
                    {achievement.category}
                  </span>
                  <span className="text-xs font-semibold text-zinc-500 bg-zinc-100 px-3 py-1 rounded-full">
                    {achievement.organizationOrContext}
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-bold text-zinc-950 tracking-tight leading-snug">
                  {achievement.title}
                </h3>

                <p className="text-sm sm:text-base text-zinc-700 leading-relaxed mt-4 font-normal">
                  {achievement.description}
                </p>

                <p className="text-sm text-zinc-600 leading-relaxed mt-3">
                  {achievement.impact}
                </p>
              </div>

              {/* Key Training Modules Covered */}
              <div>
                <h4 className="text-xs uppercase tracking-wider font-bold text-zinc-500 mb-3">
                  Key Domains Addressed in the Session
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {achievement.keyTopics?.map((topic) => (
                    <div
                      key={topic}
                      className="flex items-center gap-2.5 p-3 rounded-xl bg-zinc-50 border border-zinc-200/80"
                    >
                      <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#F59E0B]/20 text-[#B45309] shrink-0 text-xs font-bold">
                        ✓
                      </span>
                      <span className="text-xs sm:text-sm font-semibold text-zinc-800">
                        {topic}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Impact Callout Box */}
              <div className="p-4 sm:p-5 rounded-2xl bg-amber-50/80 border border-amber-200/80">
                <p className="text-xs sm:text-sm text-amber-950 font-medium leading-relaxed italic">
                  &ldquo;Bridging the gap between technical offensive security and administrative governance — empowering civil officers to protect mission-critical public infrastructure from emerging AI and cyber threats.&rdquo;
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section >
  );
}
