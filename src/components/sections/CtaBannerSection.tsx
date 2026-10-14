import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { WordReveal } from "@/components/ui/WordReveal";
import { portfolioData } from "@/data/portfolioData";

export function CtaBannerSection() {
  const { footer } = portfolioData;
  return (
    <section id="contact" className="relative py-12 sm:py-16">
      <Container>
        <div className="rounded-[36px] border border-white/10 bg-[#121214] p-8 text-center shadow-xl shadow-black/15 sm:p-12 lg:p-16">
          <h2 className="mx-auto max-w-3xl text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl"><WordReveal text={footer.headline} /></h2>
          <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-zinc-400">{footer.subheadline}</p>
          <Button href={footer.ctaButton.href} className="mt-8">{footer.ctaButton.label} ↗</Button>
        </div>
      </Container>
    </section>
  );
}
