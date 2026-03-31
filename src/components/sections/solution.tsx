import { Check } from "lucide-react";
import { AnimateIn } from "@/components/animate-in";

const differentiators = [
  {
    title: "Välkkiire laadimine",
    description:
      "Leht avaneb silmapilkselt. See hoiab külastajate tähelepanu ja meeldib väga ka Google'ile.",
  },
  {
    title: "Ei mingit hoolduspeavalu",
    description:
      "Erinevalt WordPressist ei vaja see leht igakuist putitamist ega tüütuid süsteemiuuendusi. Sinu leht on algusest peale turvaline ja lihtsalt töötab.",
  },
  {
    title: "Sisu muutmine on imelihtne",
    description:
      "Tahad teksti või pilti vahetada? Saad seda teha ise ja mugavalt, ilma et peaksid arendajale iga liigutuse eest maksma. Süsteem on loogiline ja lihtne.",
  },
  {
    title: "Google leiab su üles",
    description:
      "Koduleht on algusest peale ehitatud nii, et otsingumootorid seda armastavad. Nii leiavad uued kliendid su kergemini üles.",
  },
];

export function SolutionSection() {
  return (
    <section id="lahendus" className="border-border/40 bg-muted/30 border-y px-6 py-16 md:py-24">
      <div className="mx-auto max-w-5xl">
        <div className="grid gap-12 md:grid-cols-5 md:gap-16">
          <AnimateIn className="md:col-span-2">
            <h2 className="text-3xl font-medium tracking-tight md:text-4xl">
              Keskendu oma ärile, mina hoolitsen tehnika eest.
            </h2>
            <p className="text-muted-foreground mt-4">
              Ei WordPressi, ei pluginaid, ei pidevat hooldust.
            </p>
          </AnimateIn>

          <div className="md:col-span-3">
            <dl className="grid gap-6 sm:grid-cols-2">
              {differentiators.map((item, i) => (
                <AnimateIn key={item.title} delay={i * 80}>
                  <div className="group">
                    <dt className="flex items-center gap-2 text-base font-medium">
                      <Check className="text-primary size-4 shrink-0 transition-transform duration-200 group-hover:scale-110" />
                      {item.title}
                    </dt>
                    <dd className="text-muted-foreground mt-1.5 pl-6 text-sm leading-relaxed">
                      {item.description}
                    </dd>
                  </div>
                </AnimateIn>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
