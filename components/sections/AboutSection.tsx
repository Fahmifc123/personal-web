"use client";

import { Cpu, Presentation, BookOpenCheck } from "lucide-react";

export function AboutSection() {
  return (
    <section id="about" className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
      <div className="grid items-center gap-16 lg:grid-cols-2">
        {/* Left: Image with Experience Badge */}
        <div className="relative">
          <div className="relative aspect-square overflow-hidden rounded-3xl border border-border bg-muted grayscale hover:grayscale-0 transition-all duration-500 shadow-2xl">
            <img
              src="/img/fahmi.png"
              alt="Muhammad Fahmi"
              className="h-full w-full object-cover"
            />
          </div>

          {/* Experience Badge */}
          <div className="absolute -bottom-6 -right-6 flex h-32 w-48 flex-col items-center justify-center rounded-2xl bg-primary p-4 shadow-xl">
            <span className="text-4xl font-extrabold text-black">7+</span>
            <span className="text-xs font-bold uppercase tracking-widest text-black/80">Years Teaching</span>
          </div>
        </div>

        {/* Right: Biography Content */}
        <div className="space-y-8">
          <div className="flex items-center gap-4">
            <div className="h-[2px] w-12 bg-primary"></div>
            <h2 className="text-sm font-extrabold uppercase tracking-[0.3em] text-primary">
              Professional Biography
            </h2>
          </div>

          <div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
            <p>
              I&apos;m Fahmi, a Data &amp; AI trainer and former Head of Data Science. I help companies and
              individuals go from &ldquo;we should use AI&rdquo; to working automations, dashboards, and
              models they can use at work right away.
            </p>
            <p>
              Before focusing on training, I spent 4+ years at NoLimit Indonesia building and leading
              production NLP, LLM, and RAG systems for large-scale social media monitoring. That
              production experience shapes how I teach: every program is built around real use cases,
              hands-on from the first session, with clear outputs at the end.
            </p>
            <p>
              Since 2019 I have delivered <span className="text-foreground font-semibold">350+ sessions</span> for{" "}
              <span className="text-foreground font-semibold">7,000+ learners</span> across{" "}
              <span className="text-foreground font-semibold">20+ companies</span> and{" "}
              <span className="text-foreground font-semibold">10+ universities</span>.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            <div className="flex flex-col gap-4 rounded-xl border border-border bg-card/50 p-6 transition-all hover:border-primary/50 hover:bg-card">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <Cpu size={20} />
              </div>
              <div>
                <h3 className="font-bold text-foreground">Practitioner</h3>
                <p className="text-xs text-muted-foreground">
                  Built production NLP, LLM &amp; RAG systems at scale.
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-4 rounded-xl border border-border bg-card/50 p-6 transition-all hover:border-primary/50 hover:bg-card">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <Presentation size={20} />
              </div>
              <div>
                <h3 className="font-bold text-foreground">Trainer</h3>
                <p className="text-xs text-muted-foreground">
                  350+ hands-on sessions for corporate teams and universities.
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-4 rounded-xl border border-border bg-card/50 p-6 transition-all hover:border-primary/50 hover:bg-card">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <BookOpenCheck size={20} />
              </div>
              <div>
                <h3 className="font-bold text-foreground">Curriculum Designer</h3>
                <p className="text-xs text-muted-foreground">
                  End-to-end programs, labs, and assessments.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
