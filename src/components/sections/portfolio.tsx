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
    title: "Sanalliset — admin",
    description:
      "Sanalliset'i sisene haldustarkvara tellimuste täitmiseks, laoseisu, klientide ja analüütika haldamiseks. Reaalajas KPI-d, automaatsed arvustusepäringud ja DPD/Posti saatmisintegratsioonid.",
    url: "192.168.50.10:3000",
    image: "/projects/sanalliset-admin.webp",
    tags: ["Haldustööriist", "Next.js", "Supabase", "Mailersend"],
  },
];

export function PortfolioSection() {
  return (
    <section id="portfoolio" className="border-border/40 bg-muted/30 border-y px-6 py-16 md:py-24">
      <div className="mx-auto max-w-5xl">
        <AnimateIn>
          <h2 className="text-3xl font-medium tracking-tight md:text-4xl">Tehtud tööd</h2>
        </AnimateIn>

        <AnimateIn delay={80}>
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {projects.map((project) => {
              const isLink = !!project.href;
              const Wrapper = isLink ? "a" : "div";
              const linkProps = isLink
                ? { href: project.href, target: "_blank" as const, rel: "noopener noreferrer" }
                : {};

              return (
                <Wrapper
                  key={project.title}
                  {...linkProps}
                  className={`group border-border relative overflow-hidden rounded-xl border transition-all duration-300 ${isLink ? "hover:border-primary/40 hover:-translate-y-0.5 hover:shadow-md" : ""}`}
                >
                  <ImageLightbox
                    src={project.image}
                    alt={`${project.title} kuvatõmmis`}
                    url={project.url}
                    isInteractive={isLink}
                    lightbox={!isLink}
                  />

                  <div className="p-5">
                    <div className="flex items-start justify-between gap-2">
                      <h3 className="text-base font-medium">{project.title}</h3>
                      {isLink && (
                        <ArrowUpRight className="text-muted-foreground group-hover:text-primary size-4 shrink-0 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      )}
                    </div>
                    <p className="text-muted-foreground mt-1.5 text-sm leading-relaxed">
                      {project.description}
                    </p>
                    <div className="mt-3 flex flex-wrap gap-1.5">
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
              );
            })}
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
