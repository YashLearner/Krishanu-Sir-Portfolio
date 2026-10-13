"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { portfolioData } from "@/data/portfolioData";
import { Container } from "@/components/ui/Container";
import { EducationItem, CertificateItem } from "@/types/portfolio";

import { CredentialBook } from "@/components/ui/CredentialBook";


export function AboutSection() {

  const { about, hero } = portfolioData;
  const [isBioExpanded, setIsBioExpanded] = useState(false);

  // State for active inspection modal (can inspect certificate or education item)
  const [activeModalItem, setActiveModalItem] = useState<{
    type: "certificate" | "education";
    title: string;
    subtitle: string;
    period?: string;
    credentialId?: string;
    imageUrl?: string;
    description?: string;
    skills?: string[];
    grade?: string;
  } | null>(null);

  // Certificate Slider state & ref
  const [currentCertIndex, setCurrentCertIndex] = useState(0);
  const certSliderRef = useRef<HTMLDivElement>(null);
  const totalCerts = about.certificates.length;

  const nextCert = () => {
    setCurrentCertIndex((prev) => (prev + 1) % totalCerts);
  };

  const prevCert = () => {
    setCurrentCertIndex((prev) => (prev - 1 + totalCerts) % totalCerts);
  };

  // Keyboard accessibility for modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && activeModalItem) {
        setActiveModalItem(null);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeModalItem]);



  const handleEducationClick = (edu: EducationItem) => {
    setActiveModalItem({
      type: "education",
      title: edu.institution,
      subtitle: edu.programme,
      period: edu.period,
      credentialId: edu.credentialRef,
      imageUrl: edu.certificateImageUrl,
      description: edu.description,
      skills: edu.skillsTags,
      grade: edu.grade,
    });
  };

  const handleCertificateClick = (cert: CertificateItem) => {
    setActiveModalItem({
      type: "certificate",
      title: cert.title,
      subtitle: cert.issuer,
      period: cert.dateOrPeriod,
      credentialId: cert.certificateNumber,
      imageUrl: cert.imageUrl,
      description: cert.accreditation,
    });
  };

  const currentCert = about.certificates[currentCertIndex];

  return (
    <section id="about" className="relative overflow-hidden pt-24 pb-16 sm:pt-28 sm:pb-24">
      <Container size="default">
        <div className="flex flex-col gap-8 sm:gap-10">
          {/* ========================================================= */}
          {/* 1. TOP HERO ROW: Narrative Bio (Left) + Portrait (Right)  */}
          {/* ========================================================= */}


          {/* ABOUT INTRODUCTION: Biography + Portrait */}
          <div className="grid grid-cols-1 items-stretch gap-6 lg:grid-cols-12 lg:gap-8">

            {/* LEFT: About Content */}
            <div className="relative overflow-hidden rounded-[28px] border border-zinc-200/80 bg-white/80 p-6 shadow-sm backdrop-blur-sm sm:rounded-[36px] sm:p-9 lg:col-span-7 lg:p-10">

              {/* Decorative background */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-amber-400/[0.07] blur-3xl"
              />

              <div className="relative z-10">

                {/* Founder label */}
                <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
                  <span className="inline-flex items-center gap-2 rounded-full border border-amber-500/25 bg-amber-500/10 px-4 py-2 text-xs font-bold uppercase tracking-wider text-[#B45309]">
                    <span className="h-2 w-2 rounded-full bg-[#F59E0B]" />
                    {hero.titleAccent}
                  </span>

                  <span className="text-xs font-medium text-zinc-500">
                    About Me
                  </span>
                </div>

                {/* Main heading */}
                <h2 className="text-3xl font-bold leading-tight tracking-tight text-zinc-950 sm:text-4xl">
                  {about.headline}
                </h2>

                <h3 className="mt-3 text-xl font-semibold leading-snug text-[#D97706] sm:text-2xl">
                  Cybersecurity, AI Agents &amp; Trust Infrastructure
                </h3>

                {/* Role and tagline from portfolioData */}
                <div className="mt-5 space-y-1.5">
                  <p className="text-base font-semibold text-zinc-800 sm:text-lg">
                    {hero.role}
                  </p>

                  <p className="text-sm leading-6 text-zinc-600 sm:text-base">
                    {hero.tagline}
                  </p>
                </div>

                {/* Expertise tags */}
                <div className="mt-5 flex flex-wrap gap-2">
                  {hero.focusAreas.map((area) => (
                    <span
                      key={area}
                      className="rounded-full border border-zinc-200 bg-white px-3 py-1.5 text-xs font-semibold text-zinc-700 transition-colors hover:border-amber-400/60 hover:text-[#B45309]"
                    >
                      {area}
                    </span>
                  ))}
                </div>

                {/* Short introduction */}
                <p className="mt-6 text-sm leading-7 text-zinc-700 sm:text-base">
                  {hero.bio}
                </p>

                {/* Expandable biography */}
                {isBioExpanded && (
                  <div className="mt-6 space-y-5 border-t border-zinc-200 pt-6">

                    <p className="text-sm font-medium leading-7 text-zinc-800 sm:text-base">
                      {about.leadBio}
                    </p>

                    {about.bioParagraphs.map((paragraph, index) => (
                      <p
                        key={`${index}-${paragraph.slice(0, 24)}`}
                        className="text-sm leading-7 text-zinc-600 sm:text-base"
                      >
                        {paragraph}
                      </p>
                    ))}

                    {/* Additional expertise */}
                    <div className="rounded-2xl border border-amber-500/20 bg-amber-500/[0.06] p-4 sm:p-5">
                      <h4 className="text-sm font-bold text-zinc-900">
                        Areas of Expertise
                      </h4>

                      <div className="mt-3 flex flex-wrap gap-2">
                        {about.skillsAndExperience.skills.map((skill) => (
                          <span
                            key={skill}
                            className="rounded-lg border border-zinc-200 bg-white px-2.5 py-1.5 text-xs font-medium text-zinc-700 transition-all duration-200 hover:bg-[#F59E0B]/10 hover:text-[#D97706]"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* Read More / Read Less */}
                <button
                  type="button"
                  onClick={() => setIsBioExpanded((expanded) => !expanded)}
                  aria-expanded={isBioExpanded}
                  className="group mt-6 ml-auto flex w-fit items-center gap-2 text-sm font-bold text-[#D97706] transition-colors hover:text-[#B45309] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber-500" >
                  {isBioExpanded ? "Read less" : "Read more"}

                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className={`transition-transform duration-200 ${isBioExpanded ? "-rotate-90" : "group-hover:translate-x-1"
                      }`}
                    aria-hidden="true"
                  >
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                  </svg>
                </button>

                {/* Experience highlights */}
                <div className="mt-7 border-t border-zinc-200 pt-5">
                  <p className="text-xs font-semibold uppercase tracking-wider text-zinc-500">
                    Professional Focus
                  </p>

                  <p className="mt-2 text-sm font-medium leading-6 text-zinc-700">
                    CEH Master · Offensive Security · AI / LLM Red Teaming
                  </p>
                </div>

              </div>
            </div>

            {/* RIGHT: Founder Portrait */}
            <div className="group relative isolate h-[420px] w-full overflow-hidden rounded-[28px] border border-zinc-200/80 bg-zinc-100 shadow-md sm:rounded-[36px] lg:col-span-5 lg:h-[620px] lg:self-start">
              <Image
                src={about.image.src}
                alt={about.image.alt}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 42vw"
                className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
              />

              {/* Image overlay */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-black/5"
              />

              {/* Top image label */}
              <div className="absolute left-5 top-5 z-10">
                <span className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-black/35 px-3.5 py-2 text-xs font-semibold text-white shadow-sm backdrop-blur-md">
                  <span className="h-2 w-2 rounded-full bg-[#F59E0B]" />
                  Founder &amp; Entrepreneur
                </span>
              </div>

              {/* Bottom photo details */}
              <div className="absolute inset-x-4 bottom-4 z-10 rounded-2xl border border-white/15 bg-zinc-950/80 p-4 text-white shadow-xl backdrop-blur-md sm:inset-x-5 sm:bottom-5 sm:p-5">

                <p className="text-xs font-bold uppercase tracking-wider text-[#F59E0B]">
                  Founder @ CoreDhristi
                </p>

                <h3 className="mt-1.5 text-xl font-bold tracking-tight sm:text-2xl">
                  {hero.name}
                </h3>

                <p className="mt-1 text-sm leading-6 text-zinc-300">
                  {hero.role} · Security · Entrepreneurship
                </p>

                {/* <div className="mt-4 border-t border-white/15 pt-3">

                  <a
                    href="https://www.linkedin.com/in/krishanu-kaundilya/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[#F59E0B] transition-colors hover:text-amber-300"
                  >
                    Connect on LinkedIn
                    <span aria-hidden="true">↗</span>
                  </a>
                </div> */}

              </div>
            </div>
          </div>



        </div>

      </Container>

      {/* ========================================================= */}
      {/* FULL-SIZE DETAIL / CERTIFICATE MODAL                      */}
      {/* ========================================================= */}

      {activeModalItem && (
        <CredentialBook
          item={activeModalItem}
          onClose={() => setActiveModalItem(null)}
        />
      )}

    </section>
  );
}
