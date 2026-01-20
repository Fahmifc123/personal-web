"use client";

import { 
  Rocket, 
  Globe, 
  Target, 
  ShieldCheck,
  ChevronRight,
  ExternalLink,
  Users2,
  Zap
} from "lucide-react";
import { cn } from "@/lib/utils";

const features = [
  {
    title: "Bootcamp Online & Offline",
    description: "Intensive programs combining recorded material, live sessions, and project reviews for end-to-end understanding.",
    icon: Rocket
  },
  {
    title: "Job Ready Program",
    description: "Focus on industry-tested skills: Python, SQL, modeling, and building a sensible portfolio for recruiters.",
    icon: Target
  },
  {
    title: "Corporate Training",
    description: "Customized programs for internal teams, from fundamental analytics to advanced AI business use cases.",
    icon: Globe
  }
];

export function IntelligoSection() {
  return (
    <section
      id="intelligo"
      className="relative mx-auto max-w-7xl px-6 py-24 scroll-mt-24"
      aria-labelledby="intelligo-heading"
    >
      <div className="relative overflow-hidden rounded-[2.5rem] border border-border bg-card p-1">
        {/* Animated Background */}
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/10 via-background to-background" />
        <div className="absolute top-0 right-0 -z-10 h-[300px] w-[300px] bg-primary/10 blur-[80px] rounded-full translate-x-1/2 -translate-y-1/2" />
        
        <div className="p-8 md:p-12 lg:p-16">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-12">
            <div className="max-w-2xl">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-primary">
                <Zap size={14} className="fill-primary" />
                Featured Platform
              </div>
              <h2
                id="intelligo-heading"
                className="text-4xl font-black tracking-tight text-foreground md:text-5xl lg:text-6xl"
              >
                Intelligo <span className="text-primary">ID</span>
              </h2>
              <p className="mt-6 text-xl text-muted-foreground leading-relaxed">
                Practical Data Science & AI Learning Platform. 
                Led by me as Head of L&D to provide industry-aligned education that actually gets people hired.
              </p>
              
              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href="https://intelligo.id/wa-mintell"
                  target="_blank"
                  className="inline-flex items-center gap-3 rounded-2xl bg-primary px-8 py-4 text-base font-black text-black shadow-xl shadow-primary/20 transition-all hover:-translate-y-1 hover:shadow-primary/30 active:scale-95"
                >
                  JOIN PROGRAM
                  <ExternalLink size={18} />
                </a>
                <a
                  href="https://intelligo.id/wa-mintell"
                  target="_blank"
                  className="inline-flex items-center gap-3 rounded-2xl border border-border bg-secondary/50 px-8 py-4 text-base font-bold text-foreground transition-all hover:bg-secondary hover:border-primary/30"
                >
                  CONTACT ADMIN
                </a>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1 lg:w-96">
              <div className="flex items-center gap-4 rounded-3xl border border-border bg-background/50 p-6">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary font-black text-xl">
                  50+
                </div>
                <div>
                  <p className="font-bold">Expert Mentors</p>
                  <p className="text-xs text-muted-foreground">Industry professionals</p>
                </div>
              </div>
              <div className="flex items-center gap-4 rounded-3xl border border-border bg-background/50 p-6">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary font-black text-xl">
                  1k+
                </div>
                <div>
                  <p className="font-bold">Alumni</p>
                  <p className="text-xs text-muted-foreground">Working in top tech</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="group relative overflow-hidden rounded-[2rem] border border-border bg-background/30 p-8 transition-all hover:border-primary/50 hover:bg-background/50"
              >
                <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-secondary text-primary transition-transform group-hover:scale-110 group-hover:bg-primary group-hover:text-black">
                  <feature.icon size={28} />
                </div>
                <h3 className="mb-3 text-lg font-bold group-hover:text-primary transition-colors">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
