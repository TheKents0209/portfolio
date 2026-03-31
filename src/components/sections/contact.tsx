import { Button } from "@/components/ui/button";
import { ArrowRight, Mail, Phone } from "lucide-react";
import { AnimateIn } from "@/components/animate-in";

export function ContactSection() {
  return (
    <section id="kontakt" className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-5xl">
        <AnimateIn>
          <div className="mx-auto max-w-xl text-center">
            <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">Valmis alustama?</h2>
            <p className="text-muted-foreground mt-4 text-lg">
              Broneeri tasuta konsultatsioon. Arutame rahulikult läbi, milline lahendus sinu
              ettevõttele kõige paremini sobib.
            </p>

            <div className="mt-8">
              <Button size="lg" asChild className="group">
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
            </div>

            <div className="text-muted-foreground mt-10 flex flex-col items-center gap-3 text-sm">
              <a
                href="mailto:kenert@kenert.dev"
                className="hover:text-foreground inline-flex items-center gap-2 transition-colors duration-150 hover:gap-2.5"
              >
                <Mail className="size-4 shrink-0" />
                kenert@kenert.dev
              </a>
              <a
                href="tel:+358409681214"
                className="hover:text-foreground inline-flex items-center gap-2 transition-colors duration-150 hover:gap-2.5"
              >
                <Phone className="size-4 shrink-0" />
                +358 40 968 1214
              </a>
            </div>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
