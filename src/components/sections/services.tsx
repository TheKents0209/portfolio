import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, X } from "lucide-react";
import { AnimateIn } from "@/components/animate-in";

interface Feature {
  text: string;
  detail?: string;
}

const tiers: {
  name: string;
  description: string;
  price: string;
  highlighted: boolean;
  features: Feature[];
  footnote?: string;
}[] = [
  {
    name: "Maandumisleht",
    description: "Kompaktne veebileht, mis müüb. Ideaalne teenuse tutvustuseks.",
    price: "390",
    highlighted: false,
    features: [
      { text: "Üks põhjalik lehekülg sektsioonidega" },
      { text: "Kontaktivorm ja asukohakaart" },
      { text: "Tehniline SEO on algusest peale paigas" },
      { text: "Välkkiire laadimine" },
      { text: "Sisumuudatused saad ise teha" },
      { text: "Ilma igakuise tasuta, kui külastajaid on vähe, ei maksa tühja." },
    ],
  },
  {
    name: "Äri koduleht",
    description: "Täisväärtuslik koduleht ettevõttele, kes soovib professionaalset kohalolekut.",
    price: "790",
    highlighted: true,
    features: [
      { text: "Kuni 8 eraldi lehekülge" },
      {
        text: "Uudiskirja liidestus",
        detail: "Mailchimp, MailerLite vms vorm, et saaksid kohe hakata kliendibaasi kasvatama.",
      },
      {
        text: "Külastajate statistika",
        detail: "Mitu inimest käib, kust tulevad, mida vaatavad.",
      },
      {
        text: "Kohandatud 404 vealeht",
        detail:
          "Nutikas vealeht, mis ei jäta katkisele lingile sattunud külastajat ripakile, vaid suunab ta tagasi ostuteekonnale.",
      },
      {
        text: "Sotsiaalmeedia valmidus",
        detail:
          "Dünaamilised eelvaatepildid (Open Graph/Twitter cards), et sinu lehte jagades näeks see Facebookis ja LinkedInis profi välja.",
      },
      { text: "Kõik Maandumislehe hüved" },
    ],
  },
  {
    name: "E-pood",
    description: "Müü oma tooteid veebis. Kiire, turvaline ja lihtne hallata.",
    price: "1990",
    highlighted: false,
    features: [
      { text: "Pangalingid ja kaardimaksed" },
      { text: "Lihtne toodete ja laoseisu haldus" },
      {
        text: "Pakiautomaatide tarne",
        detail: "Omniva, Smartpost ja DPD liidestus – Eesti e-kaubanduse vältimatu standard.",
      },
      { text: "Kõik Ärilehe hüved" },
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
              Kõik paketid sisaldavad mobiilisõbralikku disaini, turvalist majutust ja tehnilist
              tuge 30 päeva pärast üleandmist. Hinnad ilma käibemaksuta.
            </p>
          </div>
        </AnimateIn>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {tiers.map((tier, i) => (
            <AnimateIn key={tier.name} delay={i * 100} className="flex flex-col">
              <div
                className={`relative flex h-full flex-col rounded-xl border p-6 transition-all duration-200 ${
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
                <div className="mt-6">
                  <span className="text-muted-foreground text-xs">alates</span>
                  <div className="text-4xl font-medium tracking-tight">{tier.price}€</div>
                </div>

                <ul className="mt-8 flex flex-col gap-3">
                  {tier.features.map((feature) => (
                    <li key={feature.text} className="flex items-start gap-2 text-sm">
                      <Check className="text-primary mt-0.5 size-4 shrink-0" />
                      <span>
                        <span className={feature.detail ? "font-medium" : ""}>{feature.text}</span>
                        {feature.detail && (
                          <span className="text-muted-foreground mt-0.5 block text-[13px]">
                            {feature.detail}
                          </span>
                        )}
                      </span>
                    </li>
                  ))}
                </ul>

                {tier.footnote && (
                  <p className="text-muted-foreground mt-4 border-t border-dashed pt-4 text-xs">
                    {tier.footnote}
                  </p>
                )}

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

        <AnimateIn className="mt-8">
          <p className="text-muted-foreground mx-auto max-w-lg text-center text-sm">
            Vajad lisaks heale maandumislehele ka mõnda toetavat lehte? Ära muretse, ei pea
            järgmisele paketile üle minema.
          </p>
        </AnimateIn>

        <AnimateIn className="mt-8">
          <div className="border-border rounded-xl border border-dashed p-6 text-center md:p-8">
            <h3 className="text-lg font-medium">Vajad midagi muud?</h3>
            <p className="text-muted-foreground mx-auto mt-2 max-w-md text-sm">
              Ei tea mida täpselt vajad või jääd kuhugi pakettidest väljapoole? Saada mulle sõnum
              või broneeri aeg ja arutame asja koos.
            </p>
            <div className="mt-6">
              <Button variant="outline" asChild>
                <a
                  href="https://calendly.com/kenert-sanalliset/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Arutame koos
                </a>
              </Button>
            </div>
          </div>
        </AnimateIn>

        {/* Comparison: Me vs Others */}
        <AnimateIn className="mt-20 md:mt-28">
          <div className="max-w-lg">
            <h3 className="text-2xl font-medium tracking-tight md:text-3xl">
              Mitte kõik kodulehed pole võrdsed
            </h3>
            <p className="text-muted-foreground mt-4">
              Enne otsustamist tasub teada, mille eest sa tegelikult maksad.
            </p>
          </div>
        </AnimateIn>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {/* WordPress tegija */}
          <AnimateIn delay={0} className="flex flex-col">
            <div className="border-border flex h-full flex-col rounded-xl border p-6">
              <h4 className="text-lg font-medium">WordPress tegija</h4>
              <p className="text-muted-foreground mt-2 text-sm">
                Tundub soodne, aga igakuised kulud ja peavalu kogunevad kiiresti.
              </p>
              <ul className="mt-8 flex flex-col gap-4">
                <li className="flex items-start gap-2 text-sm">
                  <X className="text-destructive mt-0.5 size-4 shrink-0" />
                  <span>
                    <span className="font-medium">Igakuine haldustasu alates 25€/kuu.</span> See on
                    300€ aastas lihtsalt selle eest, et leht töötaks.
                    <span className="text-muted-foreground/60 mt-0.5 block text-[11px]">
                      Allikas: Hostinger, Eesti agentuuride hinnakirjad
                    </span>
                  </span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <X className="text-destructive mt-0.5 size-4 shrink-0" />
                  <span>
                    <span className="font-medium">Pidev pluginate uuendamine.</span> Iga kuu tuleb
                    5–10 uuendust teha, muidu leht läheb katki.
                    <span className="text-muted-foreground/60 mt-0.5 block text-[11px]">
                      Allikas: WordPress.org statistika, Sucuri turvaraport
                    </span>
                  </span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <X className="text-destructive mt-0.5 size-4 shrink-0" />
                  <span>
                    <span className="font-medium">
                      WordPress on maailma enim rünnatud veebiplatvorm.
                    </span>{" "}
                    Kui uuendusi ei tee, on küsimus ainult ajas.
                    <span className="text-muted-foreground/60 mt-0.5 block text-[11px]">
                      Allikas: W3Techs, WP White Security
                    </span>
                  </span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <X className="text-destructive mt-0.5 size-4 shrink-0" />
                  <span>
                    <span className="font-medium">Sageli aeglane laadimine.</span> Odavalt kokku
                    pandud mallid ja liigsed pluginad teevad lehe uimaseks.
                    <span className="text-muted-foreground/60 mt-0.5 block text-[11px]">
                      Allikas: Google PageSpeed Insights, WP Rocket uuring
                    </span>
                  </span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <X className="text-destructive mt-0.5 size-4 shrink-0" />
                  <span>
                    <span className="font-medium">SEO nõuab eraldi pluginaid ja häälestamist.</span>{" "}
                    Yoast, caching plugin, pildioptimeerimine... iga lisa aeglustab lehte veelgi.
                    <span className="text-muted-foreground/60 mt-0.5 block text-[11px]">
                      Allikas: Yoast docs, Kinsta testid
                    </span>
                  </span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <X className="text-destructive mt-0.5 size-4 shrink-0" />
                  <span>
                    <span className="font-medium">Disaini või struktuuri muutmine on kulukas.</span>{" "}
                    Teksti saad ise muuta, aga uue ploki või funktsiooni lisamine vajab arendajat ja
                    maksab.
                    <span className="text-muted-foreground/60 mt-0.5 block text-[11px]">
                      Allikas: Upwork WP arendajate tunnitasud
                    </span>
                  </span>
                </li>
              </ul>
            </div>
          </AnimateIn>

          {/* AI-ehitatud leht */}
          <AnimateIn delay={100} className="flex flex-col">
            <div className="border-border flex h-full flex-col rounded-xl border p-6">
              <h4 className="text-lg font-medium">AI-ehitatud leht</h4>
              <p className="text-muted-foreground mt-2 text-sm">
                Kiire alustada, aga raske eristuda ja keeruline kolida.
              </p>
              <ul className="mt-8 flex flex-col gap-4">
                <li className="flex items-start gap-2 text-sm">
                  <X className="text-destructive mt-0.5 size-4 shrink-0" />
                  <span>
                    <span className="font-medium">Üldine klienditugi.</span> Kui midagi läheb katki,
                    saad üldise klienditoe, aga keegi ei tunne sinu lehte ega äri.
                    <span className="text-muted-foreground/60 mt-0.5 block text-[11px]">
                      Allikas: Wix tugiülevaated
                    </span>
                  </span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <X className="text-destructive mt-0.5 size-4 shrink-0" />
                  <span>
                    <span className="font-medium">Kohandamine lõpeb seal, kus mall lubab.</span>{" "}
                    Tahad unikaalset lahendust? Oled platvormi võimalustega piiratud.
                    <span className="text-muted-foreground/60 mt-0.5 block text-[11px]">
                      Allikas: Framer AI, Dora AI ülevaated
                    </span>
                  </span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <X className="text-destructive mt-0.5 size-4 shrink-0" />
                  <span>
                    <span className="font-medium">Sinu andmed asuvad võõras süsteemis.</span>{" "}
                    Platvorm kontrollib su lehte ja võib reeglite muutudes sinu ligipääsu piirata.
                    <span className="text-muted-foreground/60 mt-0.5 block text-[11px]">
                      Allikas: Squarespace TOS
                    </span>
                  </span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <X className="text-destructive mt-0.5 size-4 shrink-0" />
                  <span>
                    <span className="font-medium">Eristumine on raske.</span> Samad mallid, samad
                    plokid, sinu leht sulab massi.
                    <span className="text-muted-foreground/60 mt-0.5 block text-[11px]">
                      Allikas: Sitebuilderreport
                    </span>
                  </span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <X className="text-destructive mt-0.5 size-4 shrink-0" />
                  <span>
                    <span className="font-medium">
                      Google ei premeeri unikaalsuseta masstoodangut.
                    </span>{" "}
                    AI kipub looma geneerilist sisu, mis teeb otsingutulemustes esile tõusmise
                    raskeks.
                    <span className="text-muted-foreground/60 mt-0.5 block text-[11px]">
                      Allikas: Google Search Central, SEMrush AI uuring
                    </span>
                  </span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <X className="text-destructive mt-0.5 size-4 shrink-0" />
                  <span>
                    <span className="font-medium">Igakuine tellimustasu koguneb.</span> 20€ kuus =
                    240€ aastas, ja leht pole isegi sinu oma.
                    <span className="text-muted-foreground/60 mt-0.5 block text-[11px]">
                      Allikas: Wix/Hostinger AI hinnakirjad
                    </span>
                  </span>
                </li>
              </ul>
            </div>
          </AnimateIn>

          {/* Minu käsitöö */}
          <AnimateIn delay={200} className="flex flex-col">
            <div className="border-primary shadow-primary/10 flex h-full flex-col rounded-xl border p-6 shadow-sm">
              <h4 className="text-lg font-medium">Minu käsitöö</h4>
              <p className="text-muted-foreground mt-2 text-sm">
                Maksad ühe korra. Saad lehe, mis töötab, on turvaline ja on päriselt sinu oma.
              </p>
              <ul className="mt-8 flex flex-col gap-4">
                <li className="flex items-start gap-2 text-sm">
                  <Check className="text-primary mt-0.5 size-4 shrink-0" />
                  <span>
                    <span className="font-medium">Ei mingit igakuist haldustasu.</span> Maksad ühe
                    korra, leht töötab aastaid.
                  </span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <Check className="text-primary mt-0.5 size-4 shrink-0" />
                  <span>
                    <span className="font-medium">Turvaline algusest peale.</span> Pole pluginaid,
                    pole turvaaukusid, pole muret.
                  </span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <Check className="text-primary mt-0.5 size-4 shrink-0" />
                  <span>
                    <span className="font-medium">Välkkiire.</span> Su leht avaneb alla 1 sekundi.
                    Google premeerib kiirust kõrgemate positsioonidega.
                  </span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <Check className="text-primary mt-0.5 size-4 shrink-0" />
                  <span>
                    <span className="font-medium">
                      SEO on sisse ehitatud, mitte peale kleebitud.
                    </span>{" "}
                    Tehniline optimeerimine, õige lehestruktuur ja kiirus töötavad koos algusest
                    peale.
                  </span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <Check className="text-primary mt-0.5 size-4 shrink-0" />
                  <span>
                    <span className="font-medium">Isiklik tugi päris inimeselt.</span> Kirjutad
                    mulle, vastan kiirelt. Päris inimene, mitte chatbot.
                  </span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <Check className="text-primary mt-0.5 size-4 shrink-0" />
                  <span>
                    <span className="font-medium">Tasuta majutus väikeettevõttele.</span> Ainus
                    jooksev kulu on sinu isiklik domeeninimi (ca 15€ aastas), aga serveriruumi eest
                    sa ei maksa.
                  </span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <Check className="text-primary mt-0.5 size-4 shrink-0" />
                  <span>
                    <span className="font-medium">Sinu leht, sinu oma.</span> Tahad kolida? Kood ja
                    sisu on sinu, viid kaasa.
                  </span>
                </li>
              </ul>
            </div>
          </AnimateIn>
        </div>
      </div>
    </section>
  );
}
