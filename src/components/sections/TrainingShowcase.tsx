import Image from "next/image";
import { portfolioData, sectionCopy } from "@/data/portfolioData";
import { WordReveal } from "@/components/ui/WordReveal";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function TrainingShowcase() {
  const achievement = portfolioData.achievements[0];
  const copy = sectionCopy.achievement;
  if (!achievement) return null;
  return <div id="training" className="mt-16 scroll-mt-28">
    <div className="mb-10 max-w-3xl">
      <span className="inline-flex rounded-full border border-amber-200 bg-amber-50 px-3 py-1 text-xs font-semibold uppercase text-amber-800">{copy.badge}</span>
      <h2 className="mt-3 text-3xl font-bold leading-[1.15] tracking-tight text-zinc-950 sm:text-4xl lg:text-5xl"><WordReveal text={copy.heading} /></h2>
      <p className="mt-4 text-base leading-7 text-zinc-600">{copy.subtitle}</p>
    </div>
    <ScrollReveal className="rounded-[32px] border border-zinc-200 bg-white p-6 shadow-xl shadow-black/5 sm:rounded-[40px] sm:p-9 lg:p-12">
      <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
        <div className="relative min-h-[380px] overflow-hidden rounded-3xl border border-black/10 bg-zinc-950 shadow-xl sm:min-h-[460px]">
          {achievement.imageUrl && <Image src={achievement.imageUrl} alt={`${portfolioData.hero.name} delivering VAPT training at CAPT Bhopal`} fill sizes="(max-width: 1024px) 85vw, 560px" className="object-cover" />}
          <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
          <div className="absolute inset-x-5 bottom-5 rounded-2xl border border-white/15 bg-black/65 p-4 text-white backdrop-blur-md">
            <p className="text-[10px] font-semibold uppercase tracking-wide text-amber-400">{copy.photoCaption}</p>
            <p className="mt-2 text-sm font-semibold">{achievement.audience}</p>
            <p className="mt-1 text-xs text-zinc-300">{achievement.year}</p>
          </div>
        </div>
        <div className="space-y-6">
          <div><div className="mb-3 flex flex-wrap gap-2"><span className="rounded-full border border-amber-200 bg-amber-50 px-3 py-1 text-xs font-semibold text-amber-800">{achievement.category}</span><span className="rounded-full bg-zinc-100 px-3 py-1 text-xs text-zinc-600">{achievement.year}</span></div><h3 className="text-2xl font-bold leading-snug tracking-tight text-zinc-950 sm:text-3xl">{achievement.title}</h3><p className="mt-4 text-sm leading-7 text-zinc-600">{achievement.description}</p></div>
          <div><h4 className="mb-3 text-xs font-semibold uppercase tracking-wide text-zinc-500">{copy.topics}</h4><div className="grid gap-2.5 sm:grid-cols-2">{achievement.keyTopics?.map(topic => <div key={topic} className="flex items-center gap-3 rounded-xl border border-zinc-200 bg-zinc-50 p-3"><span aria-hidden="true" className="text-amber-700">✓</span><span className="text-xs font-medium text-zinc-800">{topic}</span></div>)}</div></div>
          <p className="rounded-2xl border border-amber-200 bg-amber-50 p-5 text-sm leading-7 text-amber-950">{achievement.impact}</p>
          <a href={copy.source} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center text-sm font-semibold text-amber-800 underline underline-offset-4">{copy.sourceLabel} ↗</a>
        </div>
      </div>
    </ScrollReveal>
  </div>;
}
