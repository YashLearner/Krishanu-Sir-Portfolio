"use client";

import { useState } from "react";
import Image from "next/image";
import { portfolioData, sectionCopy } from "@/data/portfolioData";
import type { EducationItem, CertificateItem } from "@/types/portfolio";
import type { CredentialBookItem } from "@/components/ui/CredentialBook";
import { EducationCard } from "@/components/ui/EducationCard";
import { Button } from "@/components/ui/Button";
import { WordReveal } from "@/components/ui/WordReveal";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function CredentialsSection({ onOpen }: { onOpen: (item: CredentialBookItem) => void }) {
  const { education, certificates } = portfolioData.about;
  const copy = sectionCopy.credentials;
  const [index, setIndex] = useState(0);
  const certificate = certificates[index];
  const browse = (direction: number) => setIndex(current => (current + direction + certificates.length) % certificates.length);
  const openEducation = (item: EducationItem) => onOpen({type:"education", title:item.institution,subtitle:item.programme,period:item.period,credentialId:item.credentialRef,imageUrl:item.certificateImageUrl,description:item.description,skills:item.skillsTags,grade:item.grade});
  const openCertificate = (item: CertificateItem) => onOpen({type:"certificate",title:item.title,subtitle:item.issuer,period:item.dateOrPeriod,credentialId:item.certificateNumber,imageUrl:item.imageUrl,description:item.accreditation});
  return (
    <div>
      <div className="mb-6">
        <span className="inline-flex rounded-full border border-amber-200 bg-amber-50 px-3 py-1 text-[10px] font-semibold uppercase text-amber-800">{copy.educationBadge}</span>
        <h2 className="mt-3 text-2xl font-bold tracking-tight text-zinc-950 sm:text-3xl"><WordReveal text={copy.educationTitle} /></h2>
        <p className="mt-2 text-xs leading-6 text-zinc-500">{copy.educationHint}</p>
      </div>
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">{education.map(item => <ScrollReveal key={item.id} className="h-full"><EducationCard item={item} onOpen={() => openEducation(item)} /></ScrollReveal>)}</div>
      {certificate && <section id="certifications" aria-label={copy.certificationTitle} aria-roledescription="carousel" tabIndex={0} onKeyDown={event => {
        if (event.key === "ArrowLeft") { event.preventDefault(); browse(-1); }
        if (event.key === "ArrowRight") { event.preventDefault(); browse(1); }
      }} className="mt-8 rounded-[26px] border border-zinc-200 bg-white p-5 shadow-sm focus-visible:outline-2 focus-visible:outline-amber-600 sm:p-8">
        <div className="mb-6 flex flex-wrap items-end justify-between gap-4">
          <div><span className="inline-flex rounded-full border border-amber-200 bg-amber-50 px-3 py-1 text-[10px] font-semibold uppercase text-amber-800">{copy.certificationBadge}</span><h3 className="mt-3 text-2xl font-bold tracking-tight text-zinc-950"><WordReveal text={copy.certificationTitle} /></h3></div>
          <div className="flex items-center gap-3 text-[11px] text-zinc-500"><span aria-live="polite" className="rounded-full bg-zinc-100 px-3 py-1 font-medium">{index + 1} {copy.of} {certificates.length}</span><span>{copy.browseHint}</span></div>
        </div>
        <div className="grid grid-cols-2 items-center gap-3 sm:grid-cols-[44px_minmax(0,1fr)_44px] sm:gap-5">
          <button type="button" onClick={() => browse(-1)} aria-label={copy.previous} className="order-2 flex h-11 w-11 items-center justify-center justify-self-start rounded-full border border-zinc-200 bg-white text-2xl text-zinc-700 shadow-sm hover:border-amber-400 hover:bg-amber-50 focus-visible:outline-2 focus-visible:outline-amber-600 sm:order-none">‹</button>
          <article key={certificate.id} className="order-1 col-span-2 grid gap-5 rounded-[22px] border border-zinc-200 p-4 sm:order-none sm:col-span-1 lg:grid-cols-[0.85fr_1.25fr] lg:items-center lg:p-6">
            <button type="button" onClick={() => openCertificate(certificate)} aria-label={`${copy.viewCertificate}: ${certificate.title}`} className="relative flex min-h-56 items-center justify-center rounded-2xl border border-zinc-200 bg-zinc-50 p-3 focus-visible:outline-2 focus-visible:outline-amber-600">
              <Image src={certificate.imageUrl} alt={`${certificate.title} certificate issued by ${certificate.issuer}`} width={400} height={300} sizes="(max-width: 768px) 65vw, 350px" className="h-52 w-full object-contain" />
            </button>
            <div className="min-w-0">
              <div className="flex flex-wrap gap-2"><span className="rounded-md bg-amber-50 px-2 py-1 text-[10px] font-semibold text-amber-800">{certificate.badge}</span><span className="rounded-md bg-zinc-100 px-2 py-1 text-[10px] leading-5 text-zinc-600">{certificate.dateOrPeriod}</span></div>
              <h4 className="mt-3 text-lg font-semibold leading-6 tracking-tight text-zinc-950">{certificate.title}</h4>
              <dl className="mt-3 space-y-1 text-xs leading-6"><div><dt className="inline text-zinc-500">{copy.issuer}: </dt><dd className="inline text-zinc-800">{certificate.issuer}</dd></div>{certificate.certificateNumber && <div><dt className="inline text-zinc-500">{copy.reference}: </dt><dd className="inline break-all font-medium text-zinc-800">{certificate.certificateNumber}</dd></div>}</dl>
              <p className="mt-2 text-xs leading-6 text-zinc-500">{certificate.accreditation}</p>
              <div className="mt-5 border-t border-zinc-100 pt-4"><Button type="button" onClick={() => openCertificate(certificate)} className="min-h-11 text-xs">{copy.viewCertificate} ↗</Button></div>
            </div>
          </article>
          <button type="button" onClick={() => browse(1)} aria-label={copy.next} className="order-3 flex h-11 w-11 items-center justify-center justify-self-end rounded-full border border-zinc-200 bg-white text-2xl text-zinc-700 shadow-sm hover:border-amber-400 hover:bg-amber-50 focus-visible:outline-2 focus-visible:outline-amber-600 sm:order-none">›</button>
        </div>
      </section>}
    </div>
  );
}
