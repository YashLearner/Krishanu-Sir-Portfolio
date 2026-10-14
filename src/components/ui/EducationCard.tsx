import type { EducationItem } from "@/types/portfolio";
import { sectionCopy } from "@/data/portfolioData";
import { Button } from "./Button";

export function EducationCard({ item, onOpen }: { item: EducationItem; onOpen: () => void }) {
  return (
    <article className="flex h-full flex-col rounded-[24px] border border-zinc-200 bg-white p-5 shadow-sm sm:p-6">
      <div className="mb-4 flex flex-wrap items-start justify-between gap-3">
        <span className="rounded-full border border-amber-200 bg-amber-50 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-amber-800">{item.badge}</span>
        <span className="max-w-32 rounded-full bg-zinc-100 px-2.5 py-1 text-right text-[10px] font-medium leading-4 text-zinc-600">{item.period}</span>
      </div>
      <h3 className="text-lg font-semibold leading-6 tracking-tight text-zinc-950">{item.institution}</h3>
      <p className="mt-2 text-sm font-medium leading-5 text-zinc-800">{item.programme}</p>
      {item.grade && <p className="mt-3 w-fit rounded-md bg-emerald-50 px-2 py-1 text-xs font-medium text-emerald-800">{item.grade}</p>}
      <p className="mt-4 line-clamp-3 text-xs leading-6 text-zinc-600">{item.description}</p>
      <div className="mt-auto pt-6">
        <div className="mb-4 flex flex-wrap gap-1.5 border-t border-zinc-100 pt-4">{item.skillsTags?.map(skill => <span key={skill} className="rounded-md bg-zinc-100 px-2 py-1 text-[10px] text-zinc-600">{skill}</span>)}</div>
        <Button type="button" onClick={onOpen} className="min-h-11 w-full text-xs">{sectionCopy.credentials.viewDetails} <span aria-hidden="true">↗</span></Button>
      </div>
    </article>
  );
}
