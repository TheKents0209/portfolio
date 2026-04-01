"use client";

import { lazy, useState } from "react";
import Image from "next/image";
import { Expand } from "lucide-react";
import { BrowserFrame } from "@/components/browser-frame";

const Dialog = lazy(() => import("@/components/ui/dialog").then((m) => ({ default: m.Dialog })));
const DialogContent = lazy(() =>
  import("@/components/ui/dialog").then((m) => ({ default: m.DialogContent }))
);
const DialogTitle = lazy(() =>
  import("@/components/ui/dialog").then((m) => ({ default: m.DialogTitle }))
);

interface ImageLightboxProps {
  src: string;
  alt: string;
  url?: string;
  isInteractive?: boolean;
  lightbox?: boolean;
}

export function ImageLightbox({ src, alt, url, isInteractive, lightbox }: ImageLightboxProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div
        className={`relative ${lightbox ? "focus-visible:outline-ring cursor-zoom-in rounded-t-xl focus-visible:outline-2 focus-visible:outline-offset-2" : ""}`}
        onClick={lightbox ? () => setOpen(true) : undefined}
        role={lightbox ? "button" : undefined}
        tabIndex={lightbox ? 0 : undefined}
        onKeyDown={
          lightbox
            ? (e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  setOpen(true);
                }
              }
            : undefined
        }
        aria-label={lightbox ? "Suurenda pilti" : undefined}
      >
        <BrowserFrame url={url}>
          <Image
            src={src}
            alt={alt}
            width={800}
            height={450}
            sizes="(max-width: 448px) 100vw, (max-width: 768px) 90vw, 800px"
            className={`aspect-video w-full object-cover ${isInteractive ? "transition-transform duration-500" : ""}`}
          />
        </BrowserFrame>

        {/* Zoom icon hint — always visible, stronger on hover */}
        {lightbox && (
          <div
            className="bg-background/80 text-muted-foreground pointer-events-none absolute right-2 bottom-2 flex items-center gap-1.5 rounded-lg px-2 py-1 text-xs opacity-70 backdrop-blur-sm transition-opacity group-hover:opacity-100"
            aria-hidden="true"
          >
            <Expand className="size-3.5" />
            <span>Suurenda</span>
          </div>
        )}
      </div>

      {lightbox && open && (
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogContent
            showCloseButton
            className="max-w-[min(90vw,1400px)] gap-0 overflow-hidden rounded-xl p-0 sm:max-w-[min(90vw,1400px)]"
          >
            <DialogTitle className="sr-only">{alt}</DialogTitle>
            <BrowserFrame url={url}>
              <Image
                src={src}
                alt={alt}
                width={1600}
                height={900}
                sizes="90vw"
                className="aspect-video w-full object-cover"
              />
            </BrowserFrame>
          </DialogContent>
        </Dialog>
      )}
    </>
  );
}
