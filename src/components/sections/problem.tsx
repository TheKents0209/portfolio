import { AnimateIn } from "@/components/animate-in";

const painPoints = [
  {
    number: "01",
    title: "Aeglane leht kaotab kliente",
    description:
      "Google'i andmetel lahkub üle poole külastajatest, kui leht ei avane 3 sekundiga. Kiirus pole mugavus, see on raha",
  },
  {
    number: "02",
    title: "Peidetud kulud iga kuu",
    description:
      "Hosting, hooldus, turvauuendused, pluginate litsentsid. Paljude kodulehtede puhul maksad sa iga kuu selle eest, et leht üldse püsti püsiks.",
  },
  {
    number: "03",
    title: "Turvalisus, millele keegi ei mõtle",
    description:
      "Häkitud leht ei tähenda alati tühja ekraani. Tihti tähendab see lekkinuid kliendiandmeid ja kahjustatud mainet.",
  },
];

export function ProblemSection() {
  return (
    <section id="probleem" className="border-border/40 border-t px-6 py-16 md:py-24">
      <div className="mx-auto max-w-5xl">
        <AnimateIn>
          <h2 className="max-w-xl text-3xl font-medium tracking-tight md:text-4xl">
            Miks paljud kodulehed oma tööd ei tee?
          </h2>
          <p className="text-muted-foreground mt-4 max-w-lg">
            Kolm levinud probleemi, mida saab vältida, kui alustada õigesti.
          </p>
        </AnimateIn>

        <AnimateIn delay={100}>
          <div className="divide-border mt-12 divide-y">
            {painPoints.map((point) => (
              <div
                key={point.number}
                className="grid gap-1 py-6 first:pt-0 last:pb-0 md:grid-cols-[3rem_1fr] md:gap-4 md:py-8"
              >
                <span className="font-heading text-primary text-sm font-medium">
                  {point.number}
                </span>
                <div>
                  <h3 className="text-base font-medium">{point.title}</h3>
                  <p className="text-muted-foreground mt-1.5 max-w-lg text-sm leading-relaxed">
                    {point.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
