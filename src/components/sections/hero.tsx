import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function HeroSection() {
  return (
    <section id="hero" className="px-6 pt-32 pb-24 md:pt-44 md:pb-36">
      <div className="mx-auto max-w-5xl">
        <div className="max-w-2xl">
          <p
            className="hero-in text-primary mb-4 text-sm font-medium tracking-wide"
            style={{ animationDelay: "0ms" }}
          >
            Veebilehed igale vajadusele
          </p>
          <h1
            className="hero-in text-foreground text-5xl font-semibold tracking-tight md:text-6xl lg:text-7xl"
            style={{ animationDelay: "80ms" }}
          >
            Kiire koduleht. <br />
            Aus hind. <br />
            <span className="text-primary">Pole igakuist jama.</span>
          </h1>
          <p
            className="hero-in text-muted-foreground mt-6 max-w-lg text-lg leading-relaxed"
            style={{ animationDelay: "200ms" }}
          >
            Ehitan kodulehe, mis on kiire, turvaline ja ei maksa sulle iga kuu. Sina tegeled oma
            äriga.
          </p>
          <div
            className="hero-in mt-10 flex flex-col items-center gap-4 md:flex-row"
            style={{ animationDelay: "340ms" }}
          >
            <Button asChild size="lg" className="group">
              <a
                href="https://calendly.com/kenert-sanalliset/30min"
                target="_blank"
                rel="noopener noreferrer"
              >
                Broneeri tasuta konsultatsioon
                <ArrowRight
                  data-icon="inline-end"
                  className="transition-transform duration-200 group-hover:translate-x-0.5"
                />
              </a>
            </Button>
            <Button variant="ghost" size="lg" asChild>
              <a href="#teenused">Vaata teenuseid</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
