"use client";

import { portfolioData, sectionCopy } from "@/data/portfolioData";
import { ModalShell } from "./ModalShell";
import { Button } from "./Button";

export function StoryDialog({ onClose }: { onClose: () => void }) {
  const { about, hero } = portfolioData;
  const copy = sectionCopy.story;
  return (
    <ModalShell label={copy.title} onClose={onClose}>
      <article onClick={event => event.stopPropagation()} className="story-dialog relative my-auto w-full max-w-3xl rounded-[28px] border border-zinc-200 bg-[#F9F8F4] p-6 shadow-2xl sm:p-9">
        <button type="button" onClick={onClose} aria-label={copy.closeLabel} className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full border border-zinc-200 bg-white text-2xl text-zinc-700 hover:bg-amber-50 focus-visible:outline-2 focus-visible:outline-amber-600">×</button>
        <p className="mr-12 text-xs font-semibold text-amber-800">{hero.titleAccent}</p>
        <h2 className="mt-3 text-3xl font-bold tracking-tight text-zinc-950 sm:text-4xl">{copy.title}</h2>
        <div className="mt-6 max-h-[58svh] space-y-5 overflow-y-auto pr-3 text-sm leading-7 text-zinc-700 sm:text-base">
          <p className="font-medium text-zinc-900">{about.leadBio}</p>
          {about.bioParagraphs.map(paragraph => <p key={paragraph}>{paragraph}</p>)}
        </div>
        <div className="mt-6 flex justify-end border-t border-zinc-200 pt-5"><Button type="button" onClick={onClose} className="min-h-11">{copy.close}</Button></div>
      </article>
    </ModalShell>
  );
}
