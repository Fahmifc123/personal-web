"use client";

import { corporateClients, academicPartners } from "@/content/clients";

function Marquee({ items, reverse = false }: { items: string[]; reverse?: boolean }) {
  const doubled = [...items, ...items];
  return (
    <div className="group relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
      <div
        className={
          "flex w-max gap-3 " +
          (reverse ? "animate-marquee-reverse" : "animate-marquee") +
          " group-hover:[animation-play-state:paused]"
        }
      >
        {doubled.map((name, i) => (
          <span
            key={`${name}-${i}`}
            className="whitespace-nowrap rounded-full border border-border bg-card/50 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-muted-foreground"
          >
            {name}
          </span>
        ))}
      </div>
    </div>
  );
}

export function TrustedBySection() {
  return (
    <section id="clients" aria-labelledby="trusted-by-heading" className="mx-auto max-w-7xl px-6 py-12 scroll-mt-24">
      <p
        id="trusted-by-heading"
        className="mb-6 text-center text-[10px] font-bold uppercase tracking-[0.3em] text-muted-foreground"
      >
        Trusted by 20+ companies &amp; 10+ academic partners
      </p>
      <div className="space-y-4">
        <Marquee items={corporateClients} />
        <Marquee items={academicPartners} reverse />
      </div>
    </section>
  );
}
