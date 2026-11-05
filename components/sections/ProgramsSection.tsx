"use client";

import { programs } from "@/content/programs";
import { CheckCircle2, Clock, Users, Laptop } from "lucide-react";
import { track } from "@vercel/analytics";

export function ProgramsSection() {
  return (
    <section
      id="programs"
      className="relative mx-auto max-w-7xl px-6 py-24 scroll-mt-24"
      aria-labelledby="programs-heading"
    >
      <div className="mb-16 max-w-2xl">
        <div className="mb-2 inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-primary">
          Training Programs
        </div>
        <h2
          id="programs-heading"
          className="text-4xl font-extrabold tracking-tight text-foreground md:text-5xl"
        >
          Programs Built Around <span className="text-primary">Your Team's Work</span>
        </h2>
        <p className="mt-4 text-lg text-muted-foreground">
          Hands-on Data &amp; AI training, customized to your industry and team's starting point.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {programs.map((program) => (
          <article
            key={program.slug}
            className="group flex flex-col rounded-3xl border border-border bg-card p-8 transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10"
          >
            <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
              {program.title}
            </h3>

            <div className="mt-4 flex flex-col gap-2 text-xs font-semibold text-muted-foreground">
              <span className="flex items-center gap-2">
                <Users size={14} className="text-primary shrink-0" /> {program.audience}
              </span>
              <span className="flex items-center gap-2">
                <Clock size={14} className="text-primary shrink-0" /> {program.duration}
              </span>
              <span className="flex items-center gap-2">
                <Laptop size={14} className="text-primary shrink-0" /> {program.format.join(" / ")}
              </span>
            </div>

            <ul className="mt-6 space-y-3 flex-1">
              {program.outcomes.map((outcome) => (
                <li key={outcome} className="flex items-start gap-2 text-sm text-foreground/80 leading-relaxed">
                  <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-primary" />
                  {outcome}
                </li>
              ))}
            </ul>

            <div className="mt-6 flex flex-wrap gap-2 border-t border-border pt-6">
              {program.tools.map((tool) => (
                <span
                  key={tool}
                  className="rounded-md bg-secondary/50 px-2 py-1 text-[10px] font-medium text-muted-foreground"
                >
                  {tool}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>

      <div className="mt-16 flex justify-center">
        <a
          href="https://www.linkedin.com/in/muhammad-fahmi17"
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => track("cta_linkedin", { location: "programs" })}
          className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-sm font-bold text-black shadow-lg transition-transform hover:scale-105 active:scale-95"
        >
          Need a custom program for your team? Chat with me on LinkedIn
        </a>
      </div>
    </section>
  );
}
