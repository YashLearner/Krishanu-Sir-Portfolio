import Image from "next/image";
import { careerJourney, sectionCopy } from "@/data/portfolioData";
import { WordReveal } from "@/components/ui/WordReveal";

export function CareerMap() {
  return (
    <section id="career" className="mt-16 border-t border-zinc-200 pt-10" aria-labelledby="career-heading">
      <h3 id="career-heading" className="text-3xl font-bold tracking-tight text-zinc-950"><WordReveal text={sectionCopy.careerHeading} /></h3>
      <p className="mt-3 max-w-2xl text-sm leading-7 text-zinc-600">{sectionCopy.careerIntro}</p>
      <div className="career-map relative mt-7 rounded-[28px] border border-zinc-200 p-5 sm:p-8">
        <svg aria-hidden="true" className="career-connectors pointer-events-none absolute inset-0 hidden h-full w-full lg:block" viewBox="0 0 1000 620" preserveAspectRatio="none" fill="none">
          <path d="M430 100 H480 Q500 100 500 120 V155 Q500 175 520 175 H570 M770 260 V390 M570 470 H520 Q500 470 500 490 V520 Q500 540 480 540 H430" stroke="#D8A34C" strokeWidth="1.5" />
          <circle cx="500" cy="138" r="4" fill="#F59E0B" /><circle cx="770" cy="325" r="4" fill="#F59E0B" /><circle cx="500" cy="506" r="4" fill="#F59E0B" />
        </svg>
        <ol className="career-nodes relative grid grid-cols-1 items-start gap-8 lg:grid-cols-2 lg:gap-x-24 lg:gap-y-10">
          {careerJourney.map((job, index) => <li key={job.company} className={`career-node career-node-${index} relative min-w-0 rounded-[22px] border border-zinc-200 bg-white p-5 shadow-[0_10px_30px_-18px_rgba(85,65,30,0.3)] sm:p-6`}>
            <div className="flex items-start justify-between gap-4"><div><p className="text-[11px] font-medium leading-5 text-amber-800">{job.period}</p><h4 className="mt-2 text-xl font-semibold tracking-tight text-zinc-950">{job.company}</h4></div><span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-amber-200 bg-amber-50 text-xs font-semibold text-amber-800">{job.number}</span></div>
            <p className="mt-2 text-sm font-medium text-zinc-800">{job.role}</p>
            <p className="mt-3 text-xs leading-6 text-zinc-600">{job.summary}</p>
            <div className="mt-4 flex flex-wrap gap-2">{job.focus.map(skill => <span key={skill} className="rounded-md bg-zinc-100 px-2.5 py-1 text-[10px] text-zinc-600">{skill}</span>)}</div>
            {!!job.tools.length && <div className="mt-5 border-t border-zinc-100 pt-4"><p className="mb-3 text-[10px] font-medium text-zinc-500">{sectionCopy.careerToolsLabel}</p><div className="flex flex-wrap gap-2">{job.tools.map(tool => <span key={tool.name} className="flex min-h-10 items-center gap-2 rounded-lg border border-zinc-200 bg-zinc-50 px-3 py-2"><Image src={tool.src} alt={tool.name} width={tool.wordmark ? 80 : 24} height={24} className={tool.wordmark ? "h-6 w-20 object-contain" : "h-6 w-6 object-contain"} />{!tool.wordmark && <span className="text-[11px] font-medium text-zinc-700">{tool.name}</span>}</span>)}</div></div>}
          </li>)}
        </ol>
      </div>
    </section>
  );
}
