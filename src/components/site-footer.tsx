import { Separator } from "@/components/ui/separator";

export function SiteFooter() {
  return (
    <footer className="px-6 pb-8">
      <Separator className="mx-auto max-w-5xl" />
      <div className="text-muted-foreground mx-auto mt-8 flex max-w-5xl flex-col items-center justify-between gap-3 text-sm sm:flex-row">
        <p>© {new Date().getFullYear()} Kenert Lauri</p>
      </div>
    </footer>
  );
}
