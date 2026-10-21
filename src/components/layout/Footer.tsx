
"use client";

import Link from "next/link";
import {
  ArrowUpIcon,
  EnvelopeIcon,
  GithubLogoIcon,
  LinkedinLogoIcon,
} from "@phosphor-icons/react";

import Image from "next/image";

import { portfolioData } from "@/data/portfolioData";
import { Container } from "@/components/ui/Container";

const SUPPORT_EMAIL = "krishanu@coredhristi.com";

const FOOTER_NAV_LINKS = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Achievement", href: "#achievements" },
] as const;

export function Footer() {
  const { hero, socialLinks } = portfolioData;

  const githubUrl = socialLinks.find((item) =>
    /github/i.test(`${item.platform} ${item.url}`)
  )?.url;

  const linkedinUrl = socialLinks.find((item) =>
    /linkedin/i.test(`${item.platform} ${item.url}`)
  )?.url;

  const websiteUrl = socialLinks.find((item) =>
    /coredhristi|website/i.test(`${item.platform} ${item.url}`)
  )?.url;

  const scrollToTop = () => {
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    window.scrollTo({
      top: 0,
      behavior: reduceMotion ? "auto" : "smooth",
    });
  };

  return (
    <footer
      role="contentinfo"
      aria-label="Site footer"
      className="border-y border-white/10 bg-[#111214] text-zinc-300  hover:text-red"
    >
      <Container size="default">
        <div className="grid grid-cols-1 gap-7 py-8 sm:py-10 md:grid-cols-2 md:gap-8 lg:grid-cols-[1fr_1.6fr_1fr] lg:items-center lg:gap-10 lg:py-12">

          {/* Brand */}
          <div className="flex justify-center border-b border-white/10 pb-6 text-center md:justify-start md:border-b-0 md:text-left lg:min-h-[88px] lg:items-center lg:border-r lg:pb-0 lg:pr-8">
            <Link
              href="#hero"
              aria-label={`${hero.name} - Home`}
              className="text-2xl font-extrabold tracking-tight text-[#f59e0b] transition-colors hover:text-[#e58a1f] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white sm:text-3xl"
            >
              {hero.name}
            </Link>
          </div>

          {/* Navigation and copyright */}
          <div className="flex min-w-0 flex-col items-center gap-5 md:items-start">
            <nav aria-label="Footer navigation">
              <ul className="flex flex-wrap justify-center gap-x-5 gap-y-3 sm:gap-x-7 md:justify-start">
                {FOOTER_NAV_LINKS.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-sm font-medium text-zinc-300 transition-colors hover:text-[#f59e0b] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white sm:text-base"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="flex flex-col items-center gap-3 sm:items-start">
              <p className="text-center text-sm leading-relaxed text-zinc-500 sm:text-left">
                {portfolioData.footer.copyrightNotice}
              </p>

              <button
                type="button"
                onClick={scrollToTop}
                aria-label="Back to top"
                className="inline-flex items-center gap-2 rounded-full border border-white/10 px-3 py-2 text-sm text-zinc-400 transition-colors hover:border-white/30 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
              >
                Back to top
                <ArrowUpIcon size={16} weight="bold" aria-hidden="true" />
              </button>
            </div>
          </div>

          {/* Social links and support email */}
          <div className="flex min-w-0 flex-col items-center gap-4 md:col-span-2 lg:col-span-1 lg:items-end">
            <nav aria-label="Social media links">
              <ul className="flex items-center gap-6">
                {githubUrl && (
                  <li>
                    <a
                      href={githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="GitHub profile"
                      title="GitHub"
                      className="inline-flex text-zinc-400 transition-colors hover:text-white"
                    >
                      <GithubLogoIcon size={26} color="#f7f1e4" weight="bold" />
                    </a>
                  </li>
                )}

                {linkedinUrl && (
                  <li>
                    <a
                      href={linkedinUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="LinkedIn profile"
                      title="LinkedIn"
                      className="inline-flex text-zinc-400 transition-colors hover:text-white"
                    >
                     <LinkedinLogoIcon size={22}  color="#f7f1e4" weight="bold" />
                    </a>
                  </li>
                )}


                <li>
                  <a
                    href={`mailto:${SUPPORT_EMAIL}`}
                    aria-label="Send an email"
                    title="Email"
                    className="inline-flex text-zinc-400 transition-colors hover:text-white"
                  >
                    <EnvelopeIcon size={26} color="#f7f1e4" weight="bold" />
                  </a>
                </li>


                {websiteUrl && (
                  <li>
                    <a
                      href={websiteUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Visit CoreDhristi website"
                      title="CoreDhristi"
                      className="inline-flex items-center justify-center transition-opacity hover:opacity-80"
                    >
                      <Image
                        src="/Images/NavbarLogo.png"
                        alt="CoreDhristi logo"
                        width={28}
                        height={28}
                        className="h-7 w-7 object-contain"
                      />
                    </a>
                  </li>
                )}

                
              </ul>
            </nav>

            <a
              href={`mailto:${SUPPORT_EMAIL}`}
              className="max-w-full break-words text-center text-sm leading-relaxed text-zinc-400 transition-colors hover:text-white lg:text-right"
            >
              Support: {SUPPORT_EMAIL}
            </a>
          </div>

        </div>
      </Container>
    </footer>
  );
}
