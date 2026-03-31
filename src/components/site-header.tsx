"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetTrigger, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { Menu, ArrowRight } from "lucide-react";

const navLinks = [
  { href: "#teenused", label: "Teenused" },
  { href: "#portfoolio", label: "Tööd" },
  { href: "#meist", label: "Minust" },
  { href: "#kkk", label: "KKK" },
  { href: "#kontakt", label: "Kontakt" },
];

const sectionIds = [
  "hero",
  "probleem",
  "lahendus",
  "teenused",
  "portfoolio",
  "meist",
  "kkk",
  "kontakt",
];

export function SiteHeader() {
  const [activeSection, setActiveSection] = useState("");
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        }
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );

    for (const id of sectionIds) {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <a
        href="#main-content"
        className="focus:bg-primary focus:text-primary-foreground sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-100 focus:rounded-md focus:px-4 focus:py-2"
      >
        Liigu põhisisusse
      </a>
      <header className="border-border/40 bg-background/95 supports-backdrop-filter:bg-background/80 sticky top-0 z-50 w-full border-b supports-backdrop-filter:backdrop-blur-lg">
        <div className="mx-auto flex h-14 max-w-5xl items-center justify-between px-6">
          <a href="#hero" className="text-sm font-medium tracking-tight">
            Kenert Lauri
          </a>

          <nav className="hidden items-center gap-1 md:flex" aria-label="Peamine navigatsioon">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`relative rounded-md px-3 py-1.5 text-sm transition-colors after:absolute after:bottom-0.5 after:left-3 after:right-3 after:h-px after:origin-center after:bg-primary after:transition-transform after:duration-200 ${
                  activeSection === link.href.slice(1)
                    ? "text-foreground after:scale-x-100"
                    : "text-muted-foreground hover:text-foreground after:scale-x-0"
                }`}
              >
                {link.label}
              </a>
            ))}
            <Button size="sm" className="ml-3" asChild>
              <a
                href="https://calendly.com/kenert-sanalliset/30min"
                target="_blank"
                rel="noopener noreferrer"
              >
                Broneeri aeg
              </a>
            </Button>
          </nav>

          {/* Mobile nav */}
          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon-sm" className="md:hidden" aria-label="Ava menüü">
                <Menu className="size-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-72 p-0">
              <SheetHeader className="border-border/40 border-b px-6 py-4">
                <SheetTitle>Navigatsioon</SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col gap-1 px-4 py-4" aria-label="Mobiilne navigatsioon">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className={`rounded-md px-3 py-2.5 text-sm transition-colors ${
                      activeSection === link.href.slice(1)
                        ? "bg-muted text-foreground"
                        : "text-muted-foreground hover:bg-muted hover:text-foreground"
                    }`}
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
              <div className="border-border/40 mt-auto border-t p-4">
                <Button className="w-full" asChild>
                  <a
                    href="https://calendly.com/kenert-sanalliset/30min"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setMobileOpen(false)}
                  >
                    Broneeri aeg
                    <ArrowRight data-icon="inline-end" />
                  </a>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </header>
    </>
  );
}
