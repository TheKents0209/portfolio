import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";
import { AnimateIn } from "@/components/animate-in";

const tiers = [
  {
    name: "Maandumisleht",
    description: "Üks lehekülg, mis müüb. Ideaalne kampaaniatele ja teenuse tutvustuseks.",
    price: "490",
    highlighted: false,
    features: [
      "Üks selge ja põhjalik lehekülg",
      "Mugav kontaktivorm",
      "Google'ile arusaadav ülesehitus",
      "Laitmatu töö nutitelefonides",
      "Välkkiire laadimine",
    ],
  },
  {
    name: "Äri veebileht",
    description: "Täisväärtuslik koduleht ettevõttele, kes soovib professionaalset kohalolekut.",
    price: "990",
    highlighted: true,
    features: [
      "Kuni 8 alamlehte",
      "Saad ise tekste ja pilte muuta",
      "Külastajate statistika jälgimine",
      "Kontaktivorm ja asukohakaart",
      "Kõik Maandumislehe hüved",
    ],
  },
  {
    name: "E-pood",
    description: "Müü oma tooteid veebis. Kiire, turvaline ja lihtne hallata.",
    price: "1990",
    highlighted: false,
    features: [
      "Pangalingid ja kaardimaksed",
      "Lihtne toodete ja laoseisu haldus",
      "Mugav tellimuste süsteem",
      "Ostjate kliendikontod",
      "Kõik Ärilehe hüved",
    ],
  },
];

export function ServicesSection() {
  return (
    <section id="teenused" className="px-6 py-20 md:py-28">
      <div className="mx-auto max-w-5xl">
        <AnimateIn>
          <div className="max-w-lg">
            <h2 className="text-3xl font-medium tracking-tight md:text-4xl">
              Vali endale sobiv pakett
            </h2>
            <p className="text-muted-foreground mt-4">
              Kõik paketid sisaldavad turvalist serverimajutust, mobiilisõbralikku disaini ja
              tehnilist tuge. Hinnad on alates.
            </p>
          </div>
        </AnimateIn>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {tiers.map((tier, i) => (
            <AnimateIn key={tier.name} delay={i * 100} className="flex flex-col">
              <div
                className={`relative flex h-full flex-col rounded-xl border p-6 transition-all duration-200 hover:-translate-y-1 ${
                  tier.highlighted
                    ? "border-primary shadow-primary/10 hover:shadow-primary/20 shadow-sm hover:shadow-md"
                    : "border-border hover:border-primary/30 hover:shadow-sm"
                }`}
              >
                {tier.highlighted && (
                  <Badge className="absolute -top-2.5 left-6">Populaarseim</Badge>
                )}
                <h3 className="text-lg font-medium">{tier.name}</h3>
                <p className="text-muted-foreground mt-2 text-sm">{tier.description}</p>
                <div className="mt-6 flex items-baseline gap-1">
                  <span className="text-4xl font-medium tracking-tight">{tier.price}€</span>
                  <span className="text-muted-foreground text-sm">alates</span>
                </div>

                <ul className="mt-8 flex flex-col gap-3">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-sm">
                      <Check className="text-primary mt-0.5 size-4 shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-auto pt-8">
                  <Button
                    variant={tier.highlighted ? "default" : "outline"}
                    className="group w-full"
                    asChild
                  >
                    <a
                      href="https://calendly.com/kenert-sanalliset/30min"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Alusta projektiga
                    </a>
                  </Button>
                </div>
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}
