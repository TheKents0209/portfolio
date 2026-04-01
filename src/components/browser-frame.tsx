interface BrowserFrameProps {
  url?: string;
  children: React.ReactNode;
}

export function BrowserFrame({ url, children }: BrowserFrameProps) {
  return (
    <div className="bg-muted/60 overflow-hidden rounded-t-xl">
      {/* Top bar */}
      <div className="border-border/60 relative flex items-center border-b px-3 py-2">
        {/* Traffic-light dots — muted, decorative */}
        <div className="flex gap-1.5" aria-hidden="true">
          <span className="bg-foreground/10 size-2.5 rounded-full" />
          <span className="bg-foreground/10 size-2.5 rounded-full" />
          <span className="bg-foreground/10 size-2.5 rounded-full" />
        </div>

        {url && (
          <div className="absolute inset-x-0 flex justify-center px-16">
            <div className="bg-background/60 text-muted-foreground rounded-md px-16 py-0.5 text-xs">
              {url}
            </div>
          </div>
        )}
      </div>

      {/* Content area */}
      <div className="overflow-hidden">{children}</div>
    </div>
  );
}
