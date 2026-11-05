"use client";

import { testimonials } from "@/content/testimonials";
import { Quote } from "lucide-react";

export function TestimonialsSection() {
  if (testimonials.length === 0) return null;

  return (
    <section
      id="testimonials"
      className="mx-auto max-w-7xl px-6 py-24 scroll-mt-24"
      aria-labelledby="testimonials-heading"
    >
      <div className="mb-16 max-w-2xl">
        <div className="mb-2 inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-primary">
          Testimonials
        </div>
        <h2
          id="testimonials-heading"
          className="text-4xl font-extrabold tracking-tight text-foreground md:text-5xl"
        >
          What Participants Say
        </h2>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((t, i) => (
          <figure key={i} className="flex flex-col rounded-3xl border border-border bg-card p-8">
            <Quote className="mb-4 text-primary" size={28} />
            <blockquote className="flex-1 text-sm text-foreground/90 leading-relaxed">
              "{t.quote}"
            </blockquote>
            <figcaption className="mt-6 border-t border-border pt-4">
              <p className="font-bold text-foreground">{t.name}</p>
              <p className="text-xs text-muted-foreground">
                {t.role}
                {t.organization ? ` · ${t.organization}` : ""}
              </p>
              <p className="mt-1 text-[10px] uppercase tracking-widest text-primary">{t.context}</p>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
