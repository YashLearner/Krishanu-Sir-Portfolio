"use client";

import { useState } from "react";
import Image from "next/image";
import { portfolioData, sectionCopy } from "@/data/portfolioData";
import { Container } from "@/components/ui/Container";
import { WordReveal } from "@/components/ui/WordReveal";
import { Button } from "@/components/ui/Button";
import { StoryDialog } from "@/components/ui/StoryDialog";

export function AboutSection() {
  const { about, hero } = portfolioData;
  const [storyOpen, setStoryOpen] = useState(false);
  return (
    <section id="about" className="relative pt-24 pb-16 sm:pt-28 sm:pb-24">
      <Container>
        <div className="grid grid-cols-1 items-stretch gap-6 lg:grid-cols-12 lg:gap-8">
          <div className="relative rounded-[28px] border border-zinc-200/80 bg-white/90 p-6 shadow-sm sm:rounded-[36px] sm:p-9 lg:col-span-7 lg:p-10">
            <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
              <span className="inline-flex items-center gap-2 rounded-full border border-amber-200 bg-amber-50 px-4 py-2 text-xs font-semibold tracking-wide text-amber-800"><span aria-hidden="true" className="h-2 w-2 rounded-full bg-amber-500" />{hero.titleAccent}</span>
              <span className="text-xs text-zinc-500">{sectionCopy.labels.about}</span>
            </div>
            <h2 className="text-3xl font-bold leading-tight tracking-tight text-zinc-950 sm:text-4xl"><WordReveal text={about.headline} /></h2>
            <h3 className="mt-3 text-xl font-semibold leading-snug text-amber-700 sm:text-2xl">{sectionCopy.aboutSubheading}</h3>
            <div className="mt-5 space-y-2"><p className="text-base font-semibold text-zinc-800 sm:text-lg">{hero.role}</p><p className="text-sm leading-6 text-zinc-600 sm:text-base">{hero.tagline}</p></div>
            <div className="mt-5 flex flex-wrap gap-2">{hero.focusAreas.map(area => <span key={area} className="rounded-full border border-zinc-200 bg-white px-3 py-1.5 text-xs font-medium text-zinc-700">{area}</span>)}</div>
            <p className="mt-6 text-sm leading-7 text-zinc-700 sm:text-base">{about.leadBio}</p>
            <div className="mt-6 flex justify-end"><Button type="button" onClick={() => setStoryOpen(true)} aria-haspopup="dialog" className="min-h-11">{sectionCopy.labels.readMore} ↗</Button></div>
            <div className="mt-7 border-t border-zinc-200 pt-5"><p className="text-xs font-medium text-zinc-500">{sectionCopy.labels.focus}</p><p className="mt-2 text-sm leading-6 text-zinc-700">{sectionCopy.professionalFocus}</p></div>
          </div>
          <div className="relative isolate h-[420px] overflow-hidden rounded-[28px] border border-zinc-200 bg-zinc-100 shadow-sm sm:rounded-[36px] lg:col-span-5 lg:h-full lg:min-h-[600px]">
            <Image src={about.image.src} alt={about.image.alt} fill unoptimized sizes="(max-width: 1024px) 90vw, 42vw" className="object-cover object-top sm:object-contain lg:object-cover" />
            <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
            <div className="absolute inset-x-5 bottom-5 rounded-2xl border border-white/15 bg-zinc-950/85 p-5 text-white backdrop-blur-sm">
              <p className="text-xs font-semibold text-amber-400">{hero.titleAccent}</p>
              <h3 className="mt-2 text-2xl font-bold tracking-tight">{hero.name}</h3>
              <p className="mt-2 text-sm leading-6 text-zinc-300">{hero.role}</p>
            </div>
          </div>
        </div>
        {storyOpen && <StoryDialog onClose={() => setStoryOpen(false)} />}
      </Container>
    </section>
  );
}
