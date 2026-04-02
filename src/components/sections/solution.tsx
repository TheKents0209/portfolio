import { Check } from "lucide-react";
import { AnimateIn } from "@/components/animate-in";

const differentiators = [
  {
    title: "Välkkiire laadimine",
    description: "Su leht avaneb alla sekundi. Külastaja jääb, Google tõstab sind kõrgemale.",
  },
  {
    title: "Pole igakuist hooldust",
    description:
      "Pole pluginaid, pole turvauuendusi, pole üllatusi. Leht töötab, sina ei pea selle peale mõtlema.",
  },
  {
    title: "Muuda sisu ise",
    description: "Tekst, pildid, hinnad. Logid sisse, muudad ära, salvestad. Arendajat pole vaja.",
  },
  {
    title: "Google leiab su üles",
    description:
      "Kiirus, õige struktuur ja tehniline SEO on algusest peale paigas. Mitte pluginaga peale kleebitud.",
  },
];

export function SolutionSection() {
  return (
    <section id="lahendus" className="border-border/40 bg-muted/30 border-y px-6 py-16 md:py-24">
      <div className="mx-auto max-w-5xl">
        <div className="grid gap-12 md:grid-cols-5 md:gap-16">
          <AnimateIn className="md:col-span-2">
            <h2 className="text-3xl font-medium tracking-tight md:text-4xl">
              Kuidas ma need probleemid lahendanud olen.
            </h2>
            <p className="text-muted-foreground mt-4">
              Ilma WordPressita. Ilma pluginateta. Ilma igakuise arveteta.
            </p>
          </AnimateIn>

          <div className="md:col-span-3">
            <dl className="grid gap-6 sm:grid-cols-2">
              {differentiators.map((item, i) => (
                <AnimateIn key={item.title} delay={i * 80} className="group">
                  <dt className="flex items-center gap-2 text-base font-medium">
                    <Check className="text-primary size-4 shrink-0 transition-transform duration-200 group-hover:scale-110" />
                    {item.title}
                  </dt>
                  <dd className="text-muted-foreground mt-1.5 pl-6 text-sm leading-relaxed">
                    {item.description}
                  </dd>
                </AnimateIn>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
