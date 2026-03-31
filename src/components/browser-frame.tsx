interface BrowserFrameProps {
  url?: string;
  children: React.ReactNode;
}

export function BrowserFrame({ url, children }: BrowserFrameProps) {
  return (
    <div className="bg-muted/60 overflow-hidden rounded-t-xl">
      {/* Top bar */}
      <div className="border-border/60 flex items-center gap-2 border-b px-3 py-2">
        {/* Traffic-light dots — muted, decorative */}
        <div className="flex gap-1.5" aria-hidden="true">
          <span className="bg-foreground/10 size-2.5 rounded-full" />
          <span className="bg-foreground/10 size-2.5 rounded-full" />
          <span className="bg-foreground/10 size-2.5 rounded-full" />
        </div>

        {url && (
          <div className="bg-background/60 text-muted-foreground ml-1 flex-1 rounded-md px-2.5 py-0.5 text-center text-xs">
            {url}
          </div>
        )}
      </div>

      {/* Content area */}
      <div className="overflow-hidden">{children}</div>
    </div>
  );
}
