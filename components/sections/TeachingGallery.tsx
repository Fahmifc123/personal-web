"use client";

import { useState } from "react";
import { documentationPhotos } from "@/lib/teaching";
import { X, ZoomIn } from "lucide-react";
import { cn } from "@/lib/utils";

export function TeachingGallery() {
  const [activeId, setActiveId] = useState<string | null>(null);
  const active = documentationPhotos.find((p) => p.id === activeId) ?? null;

  return (
    <section
      id="documentation"
      className="mx-auto max-w-7xl px-6 py-12 scroll-mt-24"
      aria-labelledby="documentation-heading"
    >
      <div className="mb-12 max-w-2xl">
        <div className="mb-2 inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-primary">
          Documentation
        </div>
        <h2
          id="documentation-heading"
          className="text-3xl font-extrabold tracking-tight text-foreground md:text-4xl"
        >
          Cuplikan Sesi Training
        </h2>
        <p className="mt-4 text-base text-muted-foreground leading-relaxed">
          Dokumentasi langsung dari corporate training, workshop, dan mentoring di berbagai
          instansi &mdash; termasuk program AI Literacy bersama Bank Syariah Indonesia (BSI) x
          Rakamin.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-3">
        {documentationPhotos.map((photo, i) => (
          <button
            key={photo.id}
            onClick={() => setActiveId(photo.id)}
            className={cn(
              "group relative overflow-hidden rounded-2xl border border-border bg-card text-left",
              i === 0 && "col-span-2 row-span-2"
            )}
          >
            <div className={cn("relative w-full overflow-hidden", i === 0 ? "aspect-square" : "aspect-[4/3]")}>
              <img
                src={photo.src}
                alt={photo.caption}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110 grayscale group-hover:grayscale-0"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent opacity-80 transition-opacity group-hover:opacity-95" />
              <div className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-black/40 text-white opacity-0 backdrop-blur transition-opacity group-hover:opacity-100">
                <ZoomIn size={14} />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <p className="text-sm font-bold text-white">{photo.caption}</p>
                <p className="text-xs text-white/70">{photo.context}</p>
              </div>
            </div>
          </button>
        ))}
      </div>

      {active && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm"
          onClick={() => setActiveId(null)}
          role="dialog"
          aria-modal="true"
        >
          <button
            className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20"
            onClick={() => setActiveId(null)}
            aria-label="Close"
          >
            <X size={20} />
          </button>
          <div
            className="max-h-[85vh] max-w-4xl overflow-hidden rounded-2xl border border-white/10"
            onClick={(e) => e.stopPropagation()}
          >
            <img src={active.src} alt={active.caption} className="max-h-[70vh] w-full object-contain bg-black" />
            <div className="bg-card p-4">
              <p className="font-bold text-foreground">{active.caption}</p>
              <p className="text-sm text-muted-foreground">{active.context}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
