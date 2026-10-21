 "use client";

import Image from "next/image";
import { Bebas_Neue } from "next/font/google";
import { portfolioData, sectionCopy } from "@/data/portfolioData";
import { GithubLogoIcon, LinkedinLogoIcon , EnvelopeIcon} from "@phosphor-icons/react/dist/ssr";

const displayFont = Bebas_Neue({ subsets: ["latin"], weight: "400", display: "swap" });
const socialLinkClassName = "mt-3 inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/25 text-sm font-bold text-white transition-colors hover:border-white hover:bg-white hover:text-black focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white";

export function HeroSection() {
  const { hero, socialLinks } = portfolioData;
  const linkedin = socialLinks.find((link) => link.platform === "LinkedIn");

  const github = socialLinks.find((link) => link.platform === "GitHub");
  const gmail = socialLinks.find((link) => link.platform === "Gmail");

  return (
    <section id="hero" className="hero-stage relative isolate overflow-hidden bg-[#080808] text-white">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_46%_40%,rgba(255,255,255,0.10),transparent_50%)]" />
      <h1 className="sr-only">{hero.name}</h1>
      <div className="hero-intro absolute inset-x-0 z-20 flex flex-col items-start justify-between gap-4 px-6 sm:flex-row sm:px-10 lg:px-16">
        <p className="hero-profile-headline max-w-[68ch] text-xs leading-6 text-zinc-300 sm:text-sm">{sectionCopy.heroLinkedInHeadline}</p>
      </div>
      <div className={`hero-composition pointer-events-none absolute inset-x-0 bottom-0 ${displayFont.className}`}>
        <span aria-hidden="true" className="hero-word hero-word-left">{sectionCopy.founderParts[0]}</span>
        <div className="hero-portrait relative">
          <Image src={sectionCopy.founderPortrait.src} alt={sectionCopy.founderPortrait.alt} fill priority sizes="(max-width: 767px) 90vw, (max-width: 1023px) 60vw, 650px" className="object-contain object-bottom grayscale" />
        </div>
        <span aria-hidden="true" className="hero-word hero-word-right">{sectionCopy.founderParts[1]}</span>
      </div>
      <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-44 bg-gradient-to-t from-[#080808] via-[#080808]/70 to-transparent" />
      <div className="absolute inset-x-0 bottom-7 z-20 flex items-end justify-between gap-4 px-6 sm:bottom-10 sm:px-10 lg:px-16">
        <div className="max-w-44 sm:max-w-64">
          <p className="text-[10px] uppercase tracking-[0.18em] text-zinc-400 sm:text-xs">{sectionCopy.location}</p>
          {linkedin && <a href={linkedin.url} target="_blank" rel="noopener noreferrer" aria-label={linkedin.label} title={linkedin.label} className={socialLinkClassName}><LinkedinLogoIcon size={22} weight="bold" /></a>}
          {github && <a href={github.url} target="_blank" rel="noopener noreferrer" aria-label={github.label} title={github.label} className={`${socialLinkClassName} ml-2`}><GithubLogoIcon size={22} weight="bold" /></a>}
         
          {gmail && (<a href={gmail.url} target="_blank" rel="noopener noreferrer" aria-label={gmail.label} title={gmail.label} className={`${socialLinkClassName} ml-2`}>
              <EnvelopeIcon size={22} weight="bold" />
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
