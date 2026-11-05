import Image from "next/image";
import { ArrowUpRight, ChevronDown, Expand, Lock } from "lucide-react";
import { PriceDemo } from "@/components/price-demo";
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

function PrivateSource() {
  return (
    <span className="bg-muted text-muted-foreground inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-xs">
      <Lock className="size-3" aria-hidden />
      Private source
    </span>
  );
}

function Tags({ tags }: { tags: string[] }) {
  return (
    <ul className="flex flex-wrap gap-1.5">
      {tags.map((tag) => (
        <li key={tag} className="border-border rounded-full border px-2.5 py-0.5 text-xs">
          {tag}
        </li>
      ))}
    </ul>
  );
}

function Screenshot({ src, alt }: { src: string; alt: string }) {
  return (
    <Image
      src={src}
      alt={alt}
      width={1456}
      height={822}
      sizes="(min-width: 768px) 60vw, 100vw"
      className="border-border rounded-xl border shadow-sm"
    />
  );
}

export default function Home() {
  return (
    <>
      <header className="absolute inset-x-0 top-0 px-6 py-5">
        <span className="font-heading font-medium">Kenert Lauri</span>
      </header>

      <main id="main-content">
        <section className="relative flex min-h-svh items-center justify-center px-6">
          <h1 className="cursor-blink font-serif">Let him cook</h1>
          <a
            href="#projects"
            aria-label="Scroll to projects"
            className="text-muted-foreground hover:text-foreground absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-1 text-sm transition-colors"
          >
            Scroll
            <ChevronDown className="size-5 motion-safe:animate-bounce" aria-hidden />
          </a>
        </section>

        <section id="projects" className="mx-auto max-w-5xl space-y-24 px-6 py-20 md:py-28">
          <h2 className="text-3xl font-medium tracking-tight md:text-4xl">Projects</h2>

          <article className="grid gap-8 md:grid-cols-5 md:gap-10">
            <a
              href="https://www.sanalliset.fi"
              target="_blank"
              rel="noopener noreferrer"
              className="md:col-span-3"
            >
              <Screenshot
                src="/projects/sanalliset-shop.webp"
                alt="Sanalliset product page with engraving and personalisation options"
              />
            </a>
            <div className="space-y-4 md:col-span-2">
              <div>
                <h3 className="text-xl font-medium">Sanalliset online store</h3>
                <p className="text-muted-foreground text-sm">
                  Co-founder and full-stack developer · 2023 to now
                </p>
              </div>
              <p className="leading-relaxed">
                An engraved jewellery shop selling in Finland and Estonia. I built it, then rewrote
                it from React and Firebase to Next.js and Supabase as orders grew. Customers
                personalise each piece with text, fonts, drawings or their own photo.
              </p>
              <ul className="text-muted-foreground list-disc space-y-1 pl-5 text-sm">
                <li>3,800+ orders since 2023</li>
                <li>3 languages on 3 domains</li>
                <li>Stripe checkout with Posti and DPD parcel lockers</li>
                <li>About 290 automated tests (Vitest, Playwright)</li>
              </ul>
              <Tags tags={["Next.js", "TypeScript", "Supabase", "Stripe", "next-intl"]} />
              <div className="flex flex-wrap items-center gap-3">
                {["fi", "ee", "eu"].map((tld) => (
                  <a
                    key={tld}
                    href={`https://www.sanalliset.${tld}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary inline-flex items-center gap-1 text-sm font-medium hover:underline"
                  >
                    sanalliset.{tld}
                    <ArrowUpRight className="size-4" aria-hidden />
                  </a>
                ))}
                <PrivateSource />
              </div>
            </div>
          </article>

          <article className="grid gap-8 md:grid-cols-5 md:gap-10">
            <div className="md:col-span-3">
              <Dialog>
                <DialogTrigger
                  aria-label="Enlarge admin panel screenshot"
                  className="group focus-visible:outline-ring relative block w-full cursor-zoom-in rounded-xl focus-visible:outline-2 focus-visible:outline-offset-2"
                >
                  <Screenshot
                    src="/projects/sanalliset-admin.webp"
                    alt="Sanalliset admin dashboard with order stats, recent orders and a parcel tracking board"
                  />
                  <span className="bg-background/80 text-muted-foreground group-hover:text-foreground absolute right-2 bottom-2 flex items-center gap-1.5 rounded-md px-2 py-1 text-xs backdrop-blur-sm transition-colors">
                    <Expand className="size-3.5" aria-hidden />
                    Zoom
                  </span>
                </DialogTrigger>
                <DialogContent className="gap-0 overflow-hidden p-0 sm:max-w-[min(95vw,1456px)]">
                  <DialogTitle className="sr-only">Sanalliset admin dashboard</DialogTitle>
                  <Image
                    src="/projects/sanalliset-admin.webp"
                    alt="Sanalliset admin dashboard with order stats, recent orders and a parcel tracking board"
                    width={1456}
                    height={822}
                    sizes="95vw"
                    className="w-full"
                  />
                </DialogContent>
              </Dialog>
              <p className="text-muted-foreground mt-2 text-xs">Customer details hidden.</p>
            </div>
            <div className="space-y-4 md:col-span-2">
              <div>
                <h3 className="text-xl font-medium">Sanalliset admin panel</h3>
                <p className="text-muted-foreground text-sm">
                  Internal tool · separate Next.js app
                </p>
              </div>
              <p className="leading-relaxed">
                The back office the shop runs on every day: orders, products, discounts, reviews,
                translations and pricing per country. The dashboard follows every parcel through
                SmartPosti and DPD.
              </p>
              <Tags tags={["Next.js", "TypeScript", "Supabase", "PostgreSQL"]} />
              <PrivateSource />
            </div>
          </article>

          <article className="space-y-6">
            <div className="max-w-2xl space-y-4">
              <div>
                <h3 className="text-xl font-medium">Live prices, minimal re-renders</h3>
                <p className="text-muted-foreground text-sm">React, Redux Toolkit · live demo</p>
              </div>
              <p className="leading-relaxed">
                A self-set exercise: take a deliberately naive live price table and optimise it as
                far as I can. The starting point keeps every price in one{" "}
                <code className="text-sm">useState</code>, so each update re-renders the whole
                table. My version moves prices into Redux, batches incoming ticks, and lets each row
                read only its own price. Both modes below get the same updates once a second. Watch
                the Renders column: Before re-renders every row, After only the rows that changed.
              </p>
              <p className="text-muted-foreground text-sm">
                The original streams prices over a WebSocket with reconnect and backoff. Here the
                stream is simulated in your browser.
              </p>
              <a
                href="https://github.com/TheKents0209/portfolio-demo"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary inline-flex items-center gap-1 text-sm font-medium hover:underline"
              >
                Source on GitHub
                <ArrowUpRight className="size-4" aria-hidden />
              </a>
            </div>
            <PriceDemo />
          </article>
        </section>
      </main>

      <footer className="border-border border-t py-10">
        <div className="mx-auto flex max-w-5xl flex-wrap gap-x-6 gap-y-2 px-6 text-sm">
          <a href="mailto:kenert.lauri@gmail.com" className="hover:text-primary">
            kenert.lauri@gmail.com
          </a>
          <a
            href="https://www.linkedin.com/in/kenert-lauri/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/TheKents0209"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary"
          >
            GitHub
          </a>
        </div>
      </footer>
    </>
  );
}
