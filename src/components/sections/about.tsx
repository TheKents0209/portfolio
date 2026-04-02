import Image from "next/image";
import { AnimateIn } from "@/components/animate-in";

export function AboutSection() {
  return (
    <section id="meist" className="px-6 py-16 md:py-24">
      <div className="mx-auto max-w-5xl">
        <div className="grid items-center gap-12 md:grid-cols-5 md:gap-16">
          <AnimateIn className="md:order-last md:col-span-2" delay={100}>
            <Image
              src="/me/avatar.webp"
              alt="Kenert Lauri portree"
              width={1000}
              height={1000}
              sizes="(max-width: 768px) 320px, 280px"
              className="mx-auto aspect-square w-full max-w-xs rounded-2xl object-cover transition-transform duration-300 hover:scale-[1.02]"
            />
          </AnimateIn>

          <AnimateIn className="md:col-span-3">
            <h2 className="text-3xl font-medium tracking-tight md:text-4xl">Kenert Lauri</h2>
            <p className="text-muted-foreground mt-4 leading-relaxed">
              Olen veebiarendaja ja{" "}
              <a
                href="https://sanalliset.ee"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-primary/80 underline underline-offset-4 transition-colors"
              >
                Sanalliset
              </a>{" "}
              kaasasutaja. Ehitasin päris e-poe nullist üles ja tean, mida ettevõtja tegelikult
              vajab: lehte, mis lihtsalt töötab, näeb hea välja ja ei nõua pidevat sorkimist.
            </p>
            <p className="text-muted-foreground mt-3 leading-relaxed">
              Olen lõpetanud Espoos IT-eriala ja räägin eesti, soome ja inglise keelt. Aga minuga
              suheldes sa keerulisi IT-termineid kartma ei pea. Seletan ka kõige tehnilisemaid
              lahendusi lihtsalt ja arusaadavalt.
            </p>
          </AnimateIn>
        </div>
      </div>
    </section>
  );
}
