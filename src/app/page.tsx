import { Navbar } from "@/components/layout/Navbar";
import { HeroSection } from "@/components/sections/HeroSection";
import { CompanyLogosSection } from "@/components/sections/CompanyLogosSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { AchievementsSection } from "@/components/sections/AchievementsSection";
import { WorkExperienceSection } from "@/components/sections/WorkExperienceSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { CurrentInitiativesSection } from "@/components/sections/CurrentInitiativesSection";
import { CtaBannerSection } from "@/components/sections/CtaBannerSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { Footer } from "@/components/layout/Footer";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { profileStructuredData } from "@/data/portfolioData";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export default function Home() {
  return (
    <div
      className="relative min-h-screen bg-canvas selection:bg-[#F59E0B]/30 selection:text-zinc-900"
      suppressHydrationWarning
    >
      {/* Floating Pill Navbar */}
      <Navbar />
      <CustomCursor />
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(profileStructuredData).replace(/</g,"\\u003c")}} />

      {/* Main Content Area */}
      <main id="main-content" className="flex flex-col" suppressHydrationWarning>
        {/* Section 1: Hero Section */}
        <HeroSection />

        {/* Section 2: Partner / Client Company Logos */}
        <CompanyLogosSection />

        {/* Section 3: About Krishanu Kaundilya */}
        <ScrollReveal><AboutSection /></ScrollReveal>

        {/* CAPT Bhopal achievement and supporting book view */}
        <AchievementsSection />

        {/* Section 5: Work Experience — Pinned Solution Notes */}
        <WorkExperienceSection />

        {/* Section 6: Services — What Services Krishanu Provides (Dark Shell Aesthetic) */}
        <ScrollReveal><ServicesSection /></ScrollReveal>

        {/* Current initiatives: CoreDhristi and CoreD */}
        <ScrollReveal><CurrentInitiativesSection /></ScrollReveal>

        {/* Section 8: Tagline & Contact Banner — Stop Doing By Hand What AI Agents Can Already Do */}
        <ScrollReveal><CtaBannerSection /></ScrollReveal>

        {/* Section 9: Testimonials — Interactive Client Feedback Slider */}
        <TestimonialsSection/>
         
      </main>

      {/* Section 10: Footer — CoreDhristi-inspired dark footer with back-to-top */}
      <Footer />
    </div>
  );
}
