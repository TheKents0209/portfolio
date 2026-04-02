"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Kas ma saan ise tekste ja pilte muuta?",
    answer:
      "Jah, kindlasti. Sisuhaldus on ehitatud nii lihtsaks, et igaüks saab hakkama. Saad ise sisu muuta ja uusi tooteid lisada täpselt siis, kui soovid, ilma et peaksid iga väikese asja pärast minu poole pöörduma.",
  },
  {
    question: "Kas lehega kaasnevad mingid igakuised püsikulud?",
    answer:
      "Majutus on väikeettevõttele tasuta ja kuulub paketi hinna sisse. Ainus jooksev kulu on domeen (sinu veebiaadress), umbes 15€ aastas. Sisuhaldus tuleb lehega kaasa, nii et saad ise tekste ja pilte muuta. Erinevalt WordPressist ei küsi mina sinult igakuist haldustasu.",
  },
  {
    question: "Kui kaua uue veebilehe valmimine aega võtab?",
    answer:
      "Lihtsama maandumislehe teen valmis juba ühe või kahe nädalaga. Mahukam ärileht võtab tavaliselt kolm kuni neli nädalat ja e-poe puhul tasub arvestada umbes kuue kuni kaheksa nädalaga. Räägime ajakava kohe esimesel kohtumisel selgeks.",
  },
  {
    question: "Mul on praegu vana WordPressi leht. Kas saame selle üle kolida?",
    answer:
      "Jah, see on tavaline olukord. Tõstan sinu tekstid ja pildid uuele kiirele platvormile ning hoolitsen selle eest, et Google ja sinu senised kliendid leiaksid uue lehe ilusti üles. Üleminek on sujuv ja sinu äri ei jää vahepeal seisma.",
  },
  {
    question: "Mis saab pärast lehe valmimist?",
    answer:
      "Leht ei jää üksi. Pärast üleandmist näitan sulle rahulikult ette, kuidas sisuhaldus töötab. Esimesed 30 päeva pärast üleandmist on tugi hinnas. Pärast seda saad alati kirjutada ja lepime kokku, mis abi vajad. Lisaks, kuna leht on ehitatud kaasaegse tehnoloogiaga, ei ole vaja pidevalt pluginaid uuendada ega turvaaukude pärast muretseda nagu WordPressis.",
  },
  {
    question: "Kas saate ka eestikeelse domeeni (.ee) registreerida?",
    answer:
      "Jah, aitan sul .ee domeeni registreerida ja seadistada. Domeen registreeritakse sinu nimele, nii et see on alati sinu oma.",
  },
];

export function FAQSection() {
  return (
    <section id="kkk" className="border-border/40 bg-muted/30 border-y px-6 py-16 md:py-24">
      <div className="mx-auto max-w-5xl">
        <div className="grid gap-10 md:grid-cols-5 md:gap-16">
          <div className="md:col-span-2">
            <h2 className="text-3xl font-medium tracking-tight md:text-4xl">
              Küsimused ja vastused
            </h2>
            <p className="text-muted-foreground mt-4">
              Ei leidnud vastust?{" "}
              <a
                href="#kontakt"
                className="text-primary hover:text-primary/80 underline underline-offset-4 transition-colors"
              >
                Küsi otse.
              </a>
            </p>
          </div>

          <div className="md:col-span-3">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`faq-${index}`}>
                  <AccordionTrigger className="text-left font-medium">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
}
