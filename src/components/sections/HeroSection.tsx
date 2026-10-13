import Image from "next/image";
import Link from "next/link";
import { Anton } from "next/font/google";
import { Bebas_Neue } from "next/font/google";


const bebasNeue = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const anton = Anton({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative isolate min-h-screen overflow-hidden bg-[#080808] text-white"
    >
      {/* Background lighting */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0"
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_40%,rgba(255,255,255,0.07),transparent_55%)]" />

        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_55%_35%,rgba(255,255,255,0.12),transparent_32%)]" />

        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/50 to-transparent" />
      </div>

      {/* Top branding: no navigation links or toggle */}
      <header className="absolute inset-x-0 top-0 z-40 flex items-center justify-between px-5 py-6 sm:px-10 sm:py-8 lg:px-16">
        <Link
          href="#hero"
          className="flex items-center gap-3 text-sm font-semibold sm:text-base"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-xl border border-white/20 text-xl text-amber-400">
            ◇
          </span>

          <span>Krishanu Kaundliya</span>
        </Link>

        <p className="text-right text-xs sm:text-sm">
          <span className="inline-block bg-gradient-to-r from-amber-200 via-amber-400 to-orange-500 bg-clip-text font-bold text-transparent drop-shadow-[0_0_12px_rgba(245,158,11,0.45)]">
            @CoreDhristi
          </span>
        </p>
      </header>

      {/* Main visual */}
      <div className="relative min-h-screen overflow-hidden">

        {/* Giant FOUNDER typography behind the portrait */}
        <div
          aria-hidden="true"
          className={`pointer-events-none absolute left-1/2 top-[49%] z-0 w-full -translate-x-1/2 -translate-y-1/2 select-none text-center ${bebasNeue.className}`}
        >
          <span className="block whitespace-nowrap text-[clamp(5rem,19vw,18rem)] leading-[0.9] tracking-[0.06em] text-white [text-shadow:0_0_28px_rgba(255,255,255,0.18)]">
            FOUNDER
          </span>
        </div>

        {/* Portrait layer */}
        <div className="absolute inset-x-0 bottom-0 z-10 h-[88vh] min-h-[520px]">
          <Image
            src="/images/founder.png"
            alt="Krishanu Kaundliya"
            fill
            priority
            sizes="100vw"
            className="object-contain object-bottom grayscale mix-blend-screen"
          />
        </div>

        {/* Subtle cinematic glow over the portrait */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-20 bg-[radial-gradient(ellipse_at_52%_34%,rgba(255,255,255,0.10),transparent_27%)] mix-blend-screen"
        />

        {/* Cinematic white glow around the face */}
        {/* <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-10 bg-[radial-gradient(ellipse_at_50%_34%,rgba(255,255,255,0.24)_0%,rgba(255,255,255,0.12)_20%,transparent_43%)] mix-blend-screen"
        /> */}

        {/* LinkedIn icon at bottom-left */}
        <Link
          href="https://www.linkedin.com/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn profile"
          className="absolute bottom-7 left-5 z-40 flex h-9 w-9 items-center justify-center rounded-full border border-white/25 bg-white/[0.06] text-sm font-bold text-white transition-colors hover:border-amber-400 hover:text-amber-400 sm:bottom-10 sm:left-10 lg:left-16"
        >
          in
        </Link>
      </div>
    </section>
  );
}