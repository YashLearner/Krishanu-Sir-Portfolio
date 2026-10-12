"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { portfolioData } from "@/data/portfolioData";
import { Container } from "@/components/ui/Container";
import { EducationItem, CertificateItem } from "@/types/portfolio";

export function AboutSection() {
  const { about } = portfolioData;

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
    <section id="about" className="relative pt-8 pb-16 sm:pt-12 sm:pb-24 overflow-hidden">
      <Container size="default">
        <div className="flex flex-col gap-8 sm:gap-10">
          {/* ========================================================= */}
          {/* 1. TOP HERO ROW: Narrative Bio (Left) + Portrait (Right)  */}
          {/* ========================================================= */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
            {/* Top-Left: Narrative & Headline Card */}
            <div className="lg:col-span-7 bg-white/70 backdrop-blur-sm border border-zinc-200/80 rounded-[28px] sm:rounded-[36px] p-7 sm:p-9 lg:p-10 flex flex-col justify-between shadow-sm relative overflow-hidden">
              <div>
                {/* Header with "About us" badge and decorative doodle */}
                <div className="flex items-center justify-between mb-5">
                  <span className="inline-flex items-center px-4 py-1.5 rounded-full border border-zinc-300/90 bg-white text-zinc-800 text-xs sm:text-sm font-semibold tracking-wide shadow-xs">
                    {about.badge}
                  </span>

                  {/* Playful sun doodle matching reference screenshot */}
                  <div className="text-zinc-900 select-none" aria-hidden="true">
                    <svg
                      width="34"
                      height="34"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="animate-pulse duration-1000"
                    >
                      <circle cx="12" cy="12" r="4" />
                      <path d="M12 2v2" />
                      <path d="M12 20v2" />
                      <path d="m4.93 4.93 1.41 1.41" />
                      <path d="m17.66 17.66 1.41 1.41" />
                      <path d="M2 12h2" />
                      <path d="M20 12h2" />
                      <path d="m6.34 17.66-1.41 1.41" />
                      <path d="m19.07 4.93-1.41 1.41" />
                    </svg>
                  </div>
                </div>

                {/* Section Main Heading with Arrow Doodle */}
                <div className="relative mb-5">
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-zinc-950 leading-[1.2]">
                    {about.headline}:{" "}
                    <span className="text-[#D97706] font-semibold">
                      Cybersecurity, AI Agents & Trust Infrastructure
                    </span>
                  </h2>

                  {/* Curly Arrow Doodle pointing towards the portrait */}
                  <div
                    className="hidden sm:block absolute -right-2 top-8 text-zinc-800 select-none pointer-events-none"
                    aria-hidden="true"
                  >
                    <svg
                      width="42"
                      height="24"
                      viewBox="0 0 42 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.75"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M3 14 C 12 4, 24 20, 36 8" />
                      <path d="M30 6 L 37 8 L 35 15" />
                    </svg>
                  </div>
                </div>

                {/* Lead Narrative Bio */}
                <p className="text-base sm:text-lg text-zinc-800 font-medium leading-relaxed mb-4">
                  {about.leadBio}
                </p>

                {/* Secondary In-depth Paragraph */}
                <p className="text-sm sm:text-base text-zinc-600 leading-relaxed">
                  {about.bioParagraphs[0]}
                </p>
              </div>

              {/* Bottom Security & AI Focus Subtext */}
              <div className="mt-6 pt-5 border-t border-zinc-200/70 flex items-center gap-2 text-xs sm:text-sm text-zinc-500 font-medium">
                <span className="inline-block w-2 h-2 rounded-full bg-[#F59E0B]" />
                <span>CEH Master • Offensive Security • AI / LLM Red Teaming</span>
              </div>
            </div>

            {/* Top-Right: Rounded Portrait Card (Sir Image 2) */}
            <div className="lg:col-span-5 relative rounded-[28px] sm:rounded-[36px] overflow-hidden border border-zinc-200/90 shadow-md bg-zinc-100 min-h-[380px] lg:min-h-full group">
              <Image
                src={about.image.src}
                alt={about.image.alt}
                fill
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 45vw, 480px"
                className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
              />

              {/* Subtle glass gradient overlay at the base */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />

              {/* Floating Name Badge at Bottom of Portrait */}
              <div className="absolute bottom-5 left-5 right-5 p-4 rounded-2xl bg-black/60 backdrop-blur-md border border-white/15 text-white shadow-lg">
                <p className="text-xs uppercase tracking-wider text-[#F59E0B] font-bold">
                  Founder @ CoreDhristi
                </p>
                <h3 className="text-lg font-bold tracking-tight text-white">
                  Krishanu Kaundilya
                </h3>
                <p className="text-xs text-zinc-300 mt-0.5">
                  AI Agent & Automation Developer • Security • Entrepreneur
                </p>
              </div>
            </div>
          </div>

          {/* ========================================================= */}
          {/* 2. TIER 1: SKILLS & EXPERIENCE — Thin Horizontal Bar      */}
          {/* ========================================================= */}
          
          <div className="relative w-full overflow-hidden rounded-2xl border border-white/10 bg-[#141416] p-5 text-white shadow-xl shadow-black/20 sm:rounded-3xl sm:p-6 lg:px-8 lg:py-6">
            {/* Subtle Horizontal Wave Pattern */}
            <div
              className="pointer-events-none absolute inset-0 overflow-hidden opacity-15"
              aria-hidden="true"
            >
              <svg
                className="h-full w-full"
                viewBox="0 0 1000 160"
                fill="none"
                preserveAspectRatio="none"
              >
                <path
                  d="M-50,40 C200,120 500,10 1050,70"
                  stroke="white"
                  strokeWidth="1.5"
                />
                <path
                  d="M-50,70 C200,150 500,40 1050,100"
                  stroke="white"
                  strokeWidth="1.5"
                />
                <path
                  d="M-50,100 C200,180 500,70 1050,130"
                  stroke="white"
                  strokeWidth="1.5"
                />
              </svg>
            </div>

            <div className="relative z-10 grid grid-cols-1 items-center gap-5 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.4fr)] lg:gap-8">
              {/* Left: Heading and Experience */}
              <div className="min-w-0">
                <span className="mb-1 block text-[11px] font-semibold uppercase tracking-wider text-zinc-400">
                  {about.skillsAndExperience.title}
                </span>

                <h3 className="text-xl font-extrabold tracking-tight text-white sm:text-2xl">
                  {about.skillsAndExperience.headline}
                </h3>

                <p className="mt-1 text-xs font-medium leading-relaxed text-zinc-300 sm:text-sm">
                  {about.skillsAndExperience.supportingLine}
                </p>
              </div>

              {/* Right: Straight Skill Pills */}
              <div className="flex min-w-0 flex-wrap items-center justify-start gap-2 sm:gap-2.5 lg:justify-end">
                {about.skillsAndExperience.skills.map((skill) => (
                  <span
                    key={skill}
                    className="inline-flex min-h-9 select-none items-center justify-center rounded-full border border-zinc-200/80 bg-white px-3.5 py-2 text-center text-xs font-bold text-zinc-950 shadow-sm transition-colors duration-200 hover:bg-amber-50 hover:text-[#B45309] sm:text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>


          {/* ========================================================= */}
          {/* 3. TIER 2: EDUCATION — Three Clickable Education Cards    */}
          {/* ========================================================= */}
          <div className="w-full">
            {/* Section Header */}
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 mb-5">
              <div>
                <span className="inline-flex items-center px-3 py-1 rounded-full border border-amber-500/30 bg-amber-500/10 text-[#D97706] text-xs font-bold uppercase tracking-wider mb-2">
                  Education
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold text-zinc-950 tracking-tight">
                  Academic Background & Specializations
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-zinc-500 font-medium">
                Click any card to inspect full details & credentials
              </p>
            </div>

            {/* 3 Clickable Education Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
              {about.education.map((edu) => (
                <div
                  key={edu.id}
                  onClick={() => handleEducationClick(edu)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      handleEducationClick(edu);
                    }
                  }}
                  className="bg-white/80 hover:bg-white backdrop-blur-sm border border-zinc-200/90 hover:border-[#D97706]/50 rounded-2xl sm:rounded-3xl p-5 sm:p-6 shadow-xs hover:shadow-lg transition-all duration-300 cursor-pointer flex flex-col justify-between group relative overflow-hidden"
                >
                  {/* Top Badge & Dates */}
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[#D97706] bg-[#F59E0B]/10 px-2.5 py-0.5 rounded-full border border-[#F59E0B]/20">
                        {edu.badge || "Academic"}
                      </span>
                      <span className="text-xs font-semibold text-zinc-500 bg-zinc-100 px-2.5 py-0.5 rounded-full">
                        {edu.period}
                      </span>
                    </div>

                    {/* Institution Name */}
                    <h4 className="text-base sm:text-lg font-bold text-zinc-950 group-hover:text-[#D97706] transition-colors leading-snug">
                      {edu.institution}
                    </h4>

                    {/* Degree / Programme */}
                    <p className="text-xs sm:text-sm font-semibold text-zinc-800 mt-1.5 leading-snug">
                      {edu.programme}
                    </p>

                    {/* Grade if present */}
                    {edu.grade && (
                      <p className="text-xs font-bold text-emerald-700 bg-emerald-50 inline-block px-2 py-0.5 rounded-md mt-2">
                        {edu.grade}
                      </p>
                    )}

                    {/* Description preview */}
                    {edu.description && (
                      <p className="text-xs text-zinc-600 mt-3 line-clamp-3 leading-relaxed">
                        {edu.description}
                      </p>
                    )}
                  </div>

                  {/* Skills Tags & Click Cue */}
                  <div className="mt-5 pt-4 border-t border-zinc-100">
                    <div className="flex flex-wrap gap-1.5 mb-3">
                      {edu.skillsTags?.map((tag) => (
                        <span
                          key={tag}
                          className="text-[10px] font-medium text-zinc-600 bg-zinc-100 px-2 py-0.5 rounded-md"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center justify-between text-xs font-semibold text-[#D97706] group-hover:translate-x-0.5 transition-transform">
                      <span>View Credential Details</span>
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="9 18 15 12 9 6" />
                      </svg>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ========================================================= */}
          {/* 4. TIER 3: CERTIFICATIONS — Interactive Certificate Slider */}
          {/* ========================================================= */}
          <div className="w-full bg-white/75 backdrop-blur-sm border border-zinc-200/90 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-9 shadow-sm relative overflow-hidden">
            {/* Header with Title and Slider Counter */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6">
              <div>
                <span className="inline-flex items-center px-3 py-1 rounded-full border border-amber-500/30 bg-amber-500/10 text-[#D97706] text-xs font-bold uppercase tracking-wider mb-2">
                  Certifications
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold text-zinc-950 tracking-tight">
                  Verified Industry Certifications
                </h3>
              </div>

              {/* Slider Slide Counter */}
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-zinc-500 bg-zinc-100 px-3 py-1 rounded-full">
                  {currentCertIndex + 1} of {totalCerts}
                </span>
                <span className="text-xs text-zinc-400 hidden sm:inline">
                  Use arrows to browse
                </span>
              </div>
            </div>

            {/* Slider Container matching user hand-drawn sketch: ( < ) [ Card ] ( > ) */}
            <div className="flex items-center justify-between gap-3 sm:gap-6">
              {/* Circular Left Arrow Button ( < ) */}
              <button
                type="button"
                onClick={prevCert}
                aria-label="Previous certificate"
                className="h-11 w-11 sm:h-13 sm:w-13 rounded-full border border-zinc-300 bg-white hover:bg-amber-500 hover:text-white hover:border-amber-500 shadow-sm flex items-center justify-center transition-all shrink-0 active:scale-95 cursor-pointer text-zinc-800"
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
                  <polyline points="15 18 9 12 15 6" />
                </svg>
              </button>

              {/* Central Active Certificate Card */}
              <div
                ref={certSliderRef}
                onClick={() => handleCertificateClick(currentCert)}
                className="flex-1 bg-white rounded-2xl sm:rounded-3xl border border-zinc-200/90 p-4 sm:p-6 shadow-xs hover:shadow-lg hover:border-amber-500/40 transition-all duration-300 cursor-pointer group"
              >
                <div className="grid grid-cols-1 md:grid-cols-12 gap-5 sm:gap-6 items-center">
                  {/* Certificate Image Thumbnail Preview */}
                  <div className="md:col-span-5 relative h-44 sm:h-56 w-full rounded-xl sm:rounded-2xl overflow-hidden bg-zinc-50 border border-zinc-200/80 group-hover:border-[#D97706]/40 transition-colors">
                    <Image
                      src={currentCert.imageUrl}
                      alt={currentCert.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 400px"
                      className="object-contain p-2 sm:p-3 transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/15 transition-colors flex items-center justify-center">
                      <span className="opacity-0 group-hover:opacity-100 transition-opacity bg-black/80 text-white text-xs font-medium px-3 py-1.5 rounded-full backdrop-blur-xs flex items-center gap-1.5 shadow-md">
                        <svg
                          width="14"
                          height="14"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.5"
                        >
                          <circle cx="11" cy="11" r="8" />
                          <line x1="21" y1="21" x2="16.65" y2="16.65" />
                        </svg>
                        Click to Inspect Full Certificate
                      </span>
                    </div>
                  </div>

                  {/* Certificate Metadata Details */}
                  <div className="md:col-span-7 flex flex-col justify-between">
                    <div>
                      <div className="flex flex-wrap items-center gap-2 mb-2">
                        <span className="text-xs font-bold text-[#D97706] uppercase tracking-wider bg-amber-500/10 px-2.5 py-0.5 rounded-md border border-amber-500/20">
                          {currentCert.badge}
                        </span>
                        <span className="text-xs font-semibold text-zinc-500 bg-zinc-100 px-2.5 py-0.5 rounded-md">
                          {currentCert.dateOrPeriod}
                        </span>
                      </div>

                      <h4 className="text-lg sm:text-xl font-bold text-zinc-950 group-hover:text-[#D97706] transition-colors leading-snug">
                        {currentCert.title}
                      </h4>

                      <p className="text-sm font-semibold text-zinc-700 mt-1">
                        Issuing Authority: {currentCert.issuer}
                      </p>

                      {currentCert.certificateNumber && (
                        <p className="text-xs font-mono text-zinc-500 mt-1.5">
                          Certificate ID:{" "}
                          <span className="font-bold text-zinc-800">
                            {currentCert.certificateNumber}
                          </span>
                        </p>
                      )}

                      {currentCert.accreditation && (
                        <p className="text-xs text-zinc-500 mt-1">
                          Accreditation: {currentCert.accreditation}
                        </p>
                      )}
                    </div>

                    <div className="mt-4 pt-3 border-t border-zinc-100 flex items-center justify-between text-xs text-[#D97706] font-semibold">
                      <span>Click card or image to view full certificate</span>
                      <span className="inline-flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                        Enlarge view →
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Circular Right Arrow Button ( > ) */}
              <button
                type="button"
                onClick={nextCert}
                aria-label="Next certificate"
                className="h-11 w-11 sm:h-13 sm:w-13 rounded-full border border-zinc-300 bg-white hover:bg-amber-500 hover:text-white hover:border-amber-500 shadow-sm flex items-center justify-center transition-all shrink-0 active:scale-95 cursor-pointer text-zinc-800"
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
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </Container>

      {/* ========================================================= */}
      {/* FULL-SIZE DETAIL / CERTIFICATE MODAL                      */}
      {/* ========================================================= */}
      {activeModalItem && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={activeModalItem.title}
          onClick={() => setActiveModalItem(null)}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-3xl w-full bg-white rounded-3xl p-5 sm:p-7 shadow-2xl border border-zinc-200 overflow-hidden flex flex-col max-h-[90vh]"
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between pb-3 border-b border-zinc-200 mb-4">
              <div>
                <h4 className="text-base sm:text-lg font-bold text-zinc-950">
                  {activeModalItem.title}
                </h4>
                <p className="text-xs text-zinc-500">
                  {activeModalItem.subtitle}{" "}
                  {activeModalItem.period && `• ${activeModalItem.period}`}{" "}
                  {activeModalItem.credentialId &&
                    `• Ref: ${activeModalItem.credentialId}`}
                </p>
              </div>
              <button
                type="button"
                onClick={() => setActiveModalItem(null)}
                aria-label="Close modal"
                className="h-8 w-8 rounded-full bg-zinc-100 hover:bg-zinc-200 text-zinc-700 flex items-center justify-center transition-colors cursor-pointer"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </div>

            {/* Modal Body: If Image Present, show High-Res Image */}
            {activeModalItem.imageUrl ? (
              <div className="relative flex-1 w-full min-h-[320px] sm:min-h-[460px] bg-zinc-50 rounded-2xl overflow-hidden border border-zinc-200/80">
                <Image
                  src={activeModalItem.imageUrl}
                  alt={activeModalItem.title}
                  fill
                  sizes="(max-width: 1024px) 90vw, 800px"
                  className="object-contain p-2"
                  priority
                />
              </div>
            ) : (
              /* If text card (like St. Paul BCA), show structured details */
              <div className="py-6 px-4 bg-zinc-50 rounded-2xl border border-zinc-200/80 space-y-4">
                {activeModalItem.grade && (
                  <div>
                    <span className="text-xs font-semibold text-zinc-500 uppercase tracking-wider">
                      Academic Standing
                    </span>
                    <p className="text-lg font-bold text-emerald-700">
                      {activeModalItem.grade}
                    </p>
                  </div>
                )}
                {activeModalItem.description && (
                  <div>
                    <span className="text-xs font-semibold text-zinc-500 uppercase tracking-wider">
                      Overview
                    </span>
                    <p className="text-sm text-zinc-700 mt-1 leading-relaxed">
                      {activeModalItem.description}
                    </p>
                  </div>
                )}
                {activeModalItem.skills && (
                  <div>
                    <span className="text-xs font-semibold text-zinc-500 uppercase tracking-wider block mb-2">
                      Key Competencies & Core Subjects
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {activeModalItem.skills.map((s) => (
                        <span
                          key={s}
                          className="px-3 py-1 bg-white text-zinc-800 text-xs font-semibold rounded-lg border border-zinc-200"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Modal Footer */}
            <div className="pt-3 mt-3 border-t border-zinc-100 flex items-center justify-between text-xs text-zinc-500">
              <span>Verified Credential Record</span>
              <button
                type="button"
                onClick={() => setActiveModalItem(null)}
                className="px-3.5 py-1.5 bg-zinc-900 text-white rounded-lg text-xs font-semibold hover:bg-zinc-800 transition-colors cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
