import { Separator } from "@/components/ui/separator";
import { Mail, Phone } from "lucide-react";

const footerLinks = [
  { href: "#teenused", label: "Teenused" },
  { href: "#portfoolio", label: "Tööd" },
  { href: "#meist", label: "Minust" },
  { href: "#kkk", label: "KKK" },
  { href: "#kontakt", label: "Kontakt" },
];

export function SiteFooter() {
  return (
    <footer className="px-6 pb-8">
      <Separator className="mx-auto max-w-5xl" />
      <div className="mx-auto mt-8 max-w-5xl">
        <div className="flex flex-col gap-8 sm:flex-row sm:justify-between">
          <div className="space-y-3">
            <p className="text-sm font-medium">Kenert Lauri</p>
            <div className="text-muted-foreground flex flex-col gap-2 text-sm">
              <a
                href="mailto:kenert@kenert.dev"
                className="hover:text-foreground inline-flex items-center gap-2 transition-colors"
              >
                <Mail className="size-3.5 shrink-0" />
                kenert@kenert.dev
              </a>
              <a
                href="tel:+358409681214"
                className="hover:text-foreground inline-flex items-center gap-2 transition-colors"
              >
                <Phone className="size-3.5 shrink-0" />
                +358 40 968 1214
              </a>
            </div>
          </div>

          <nav aria-label="Jaluse navigatsioon" className="flex flex-col gap-2">
            {footerLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-muted-foreground hover:text-foreground text-sm transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="text-muted-foreground border-border/40 mt-8 border-t pt-6 text-xs">
          <p>© {new Date().getFullYear()} Kenert Lauri</p>
        </div>
      </div>
    </footer>
  );
}
