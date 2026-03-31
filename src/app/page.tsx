import { SiteHeader } from "@/components/site-header";
import { HeroSection } from "@/components/sections/hero";
import { ProblemSection } from "@/components/sections/problem";
import { SolutionSection } from "@/components/sections/solution";
import { ServicesSection } from "@/components/sections/services";
import { PortfolioSection } from "@/components/sections/portfolio";
import { AboutSection } from "@/components/sections/about";
import { FAQSection } from "@/components/sections/faq";
import { ContactSection } from "@/components/sections/contact";
import { SiteFooter } from "@/components/site-footer";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main id="main-content" className="flex-1">
        <HeroSection />
        <ProblemSection />
        <SolutionSection />
        <ServicesSection />
        <PortfolioSection />
        <AboutSection />
        <FAQSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </>
  );
}
