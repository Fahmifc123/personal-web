"use client";

import { Users, GraduationCap } from "lucide-react";

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
            <span className="text-4xl font-extrabold text-black">5+</span>
            <span className="text-xs font-bold uppercase tracking-widest text-black/80">Years Experience</span>
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
              I’m Fahmi, an AI Leader and Data Scientist specializing in NLP, predictive modeling, and applied AI systems. Currently leading data science teams at NoLimit Indonesia, I focus on building scalable AI solutions that drive real business outcomes.
            </p>
            <p>
              Alongside my industry work, I am passionate about educating and mentoring data professionals. I’ve trained and mentored 7,000+ learners, including through corporate training programs, using practical, project-based approaches aligned with real-world needs.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {/* Feature 1: Team Lead */}
            <div className="flex flex-col gap-4 rounded-xl border border-border bg-card/50 p-6 transition-all hover:border-primary/50 hover:bg-card">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <Users size={20} />
              </div>
              <div>
                <h3 className="font-bold text-foreground">Team Lead</h3>
                <p className="text-xs text-muted-foreground">
                  Managing cross-functional engineering squads.
                </p>
              </div>
            </div>

            {/* Feature 2: Educator */}
            <div className="flex flex-col gap-4 rounded-xl border border-border bg-card/50 p-6 transition-all hover:border-primary/50 hover:bg-card">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <GraduationCap size={20} />
              </div>
              <div>
                <h3 className="font-bold text-foreground">Educator</h3>
                <p className="text-xs text-muted-foreground">
                  Curriculum design for AI & Learning.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
