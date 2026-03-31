import { ArrowUpRight } from "lucide-react";
import { AnimateIn } from "@/components/animate-in";
import { ImageLightbox } from "@/components/image-lightbox";

const projects = [
  {
    title: "Sanalliset — e-pood",
    description:
      "Soome ehtemärgi e-pood teemantgraveeritud ehetele kolmel turul. Reaalajas graveeringu eelvaade, toote isikupärastamine, kolmekeelne tugi ja Stripe maksesüsteem.",
    href: "https://sanalliset.ee",
    url: "sanalliset.ee",
    image: "/projects/sanalliset-shop.webp",
    tags: ["E-pood", "Next.js", "Stripe", "Supabase"],
  },
  {
    title: "Sanalliset — haldustarkvara",
    description:
      "Sanalliset'i sisene haldustarkvara tellimuste täitmiseks, laoseisu, klientide ja analüütika haldamiseks. Reaalajas KPI-d, automaatsed arvustusepäringud ja DPD/Posti saatmisintegratsioonid.",
    image: "/projects/sanalliset-admin.webp",
    tags: ["Haldustööriist", "Next.js", "Supabase", "Mailersend"],
  },
];

export function PortfolioSection() {
  return (
    <section id="portfoolio" className="border-border/40 bg-muted/30 border-y px-6 py-20 md:py-28">
      <div className="mx-auto max-w-5xl">
        <AnimateIn>
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">Tehtud tööd</h2>
          <p className="text-muted-foreground mt-3 max-w-lg">
            Projektid, mille olen algusest lõpuni üles ehitanud.
          </p>
        </AnimateIn>

        <div className="mt-12 space-y-8">
          {projects.map((project, i) => {
            const isLink = !!project.href;
            const isFeatured = i === 0;
            const Wrapper = isLink ? "a" : "div";
            const linkProps = isLink
              ? { href: project.href, target: "_blank" as const, rel: "noopener noreferrer" }
              : {};

            return (
              <AnimateIn key={project.title} delay={80 + i * 80}>
                <Wrapper
                  {...linkProps}
                  className={`group border-border block overflow-hidden rounded-xl border transition-all duration-300 ${!isFeatured ? "max-w-md" : "shadow-sm"} ${isLink ? "hover:border-primary/40 hover:-translate-y-1 hover:shadow-lg" : ""}`}
                >
                  <ImageLightbox
                    src={project.image}
                    alt={`${project.title} kuvatõmmis`}
                    url={project.url}
                    isInteractive={isLink}
                    lightbox={!isLink}
                  />

                  <div className={isFeatured ? "p-6 md:p-8" : "p-5"}>
                    <div className="flex items-start justify-between gap-2">
                      <h3
                        className={
                          isFeatured ? "text-lg font-medium md:text-xl" : "text-base font-medium"
                        }
                      >
                        {project.title}
                      </h3>
                      {isLink && (
                        <ArrowUpRight className="text-muted-foreground group-hover:text-primary size-4 shrink-0 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      )}
                    </div>
                    <p
                      className={`text-muted-foreground leading-relaxed ${isFeatured ? "mt-2 max-w-2xl text-sm md:text-base" : "mt-1.5 text-sm"}`}
                    >
                      {project.description}
                    </p>
                    <div className={`flex flex-wrap gap-1.5 ${isFeatured ? "mt-4" : "mt-3"}`}>
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="bg-muted text-muted-foreground rounded-full px-2.5 py-0.5 text-xs"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </Wrapper>
              </AnimateIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
