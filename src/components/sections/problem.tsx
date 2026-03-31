import { AnimateIn } from "@/components/animate-in";

const painPoints = [
  {
    number: "01",
    title: "Aeglane ja kohmakas",
    description:
      "Tänapäeva klient ei jaksa oodata. Kui leht laeb liiga kaua, läheb külastaja lihtsalt konkurendi juurde.",
  },
  {
    number: "02",
    title: "Pidev hooldus ja uuendused",
    description:
      "Lõputud uuendused ja katki minevad lisad. Sa ei peaks olema omaenda kodulehe IT-tugi.",
  },
  {
    number: "03",
    title: "Turvalisus on küsimärgi all",
    description:
      "Häkitud leht ei tähenda alati tühja ekraani. Tihti tähendab see hoopis lekitatud kliendiandmeid, rikutud mainet ja nädalaid peavalu asjade korda tegemisel.",
  },
];

export function ProblemSection() {
  return (
    <section id="probleem" className="px-6 py-16 md:py-20">
      <div className="mx-auto max-w-5xl">
        <AnimateIn>
          <h2 className="max-w-xl text-3xl font-medium tracking-tight md:text-4xl">
            Kas su koduleht tekitab rohkem peavalu kui kasu?
          </h2>
          <p className="text-muted-foreground mt-4 max-w-lg">
            Sinu aeg peaks kuluma äri kasvatamisele, mitte tehniliste murede lahendamisele.
          </p>
        </AnimateIn>

        <AnimateIn delay={100}>
          <div className="border-border bg-border mt-12 grid gap-px overflow-hidden rounded-xl border md:grid-cols-3">
            {painPoints.map((point) => (
              <div
                key={point.number}
                className="bg-background hover:bg-muted/40 p-6 transition-colors duration-200 md:p-8"
              >
                <span className="font-heading text-primary text-xs font-medium">
                  {point.number}
                </span>
                <h3 className="mt-3 text-base font-medium">{point.title}</h3>
                <p className="text-muted-foreground mt-2 text-sm leading-relaxed">
                  {point.description}
                </p>
              </div>
            ))}
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
