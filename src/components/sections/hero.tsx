import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function HeroSection() {
  return (
    <section id="hero" className="px-6 pt-28 pb-20 md:pt-40 md:pb-32">
      <div className="mx-auto max-w-5xl">
        <div className="max-w-2xl">
          <h1
            className="hero-in text-foreground text-4xl font-medium tracking-tight md:text-5xl lg:text-6xl"
            style={{ animationDelay: "0ms" }}
          >
            Koduleht, mis toob
            <span className="text-primary"> kliente, mitte peavalu.</span>
          </h1>
          <p
            className="hero-in text-muted-foreground mt-6 max-w-lg text-lg leading-relaxed"
            style={{ animationDelay: "120ms" }}
          >
            Unusta pidevad uuendused ja kokkujooksvad pluginad. Ehitan sulle välkkiire lehe, mis
            lihtsalt töötab, et sina saaksid keskenduda oma päris tööle.
          </p>
          <div
            className="hero-in mt-10 flex items-center gap-4"
            style={{ animationDelay: "260ms" }}
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
