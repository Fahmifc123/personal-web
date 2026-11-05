"use client";

import { teachingHighlights } from "@/lib/teaching";
import {
  Users,
  GraduationCap,
  Presentation,
  CheckCircle2,
  Video,
  MapPin,
  Building2,
} from "lucide-react";

const stats = [
  { label: "Training Sessions", value: "350+", icon: Presentation },
  { label: "Learners & Professionals", value: "7,000+", icon: Users },
  { label: "Corporate Clients", value: "20+", icon: Building2 },
  { label: "Academic Partners", value: "10+", icon: GraduationCap },
];

export function TeachingSection() {
  return (
    <section
      id="teaching"
      className="relative mx-auto max-w-7xl px-6 py-24 scroll-mt-24"
      aria-labelledby="teaching-heading"
    >
      {/* Background Decorative Element */}
      <div className="absolute bottom-0 left-0 -z-10 h-[400px] w-[400px] bg-primary/5 blur-[100px] rounded-full" />

      <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
        <div>
          <div className="mb-2 inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-primary">
            Education & Mentoring
          </div>
          <h2
            id="teaching-heading"
            className="text-4xl font-extrabold tracking-tight text-foreground md:text-5xl"
          >
            Shaping Indonesia's <span className="text-primary">AI Talent</span>
          </h2>

          <div className="mt-8 space-y-6 text-lg text-muted-foreground">
            <p>
              Teaching, for me, is how I make sure Indonesia's tech industry has talent that is not just
              theory-aware, but production-ready.
            </p>
            <p>
              With over <span className="text-foreground font-semibold">350 training sessions</span> delivered,
              I focus on teaching <span className="text-foreground font-semibold">AI Automation, Generative AI, Machine Learning, and NLP</span> through real, project-based work.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="flex flex-col gap-1 border-l-2 border-primary/20 pl-4">
                <div className="flex items-center gap-2 text-primary">
                  <stat.icon size={18} />
                  <span className="text-2xl font-black text-foreground">{stat.value}</span>
                </div>
                <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="grid gap-6">
            <div className="group relative overflow-hidden rounded-3xl border border-border bg-card p-1">
              <div className="relative h-64 overflow-hidden rounded-2xl">
                <img
                  src="/img/teaching-online.jpeg"
                  alt="Online training session"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110 grayscale group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 flex items-center gap-3">
                  <div className="rounded-full bg-primary p-2 text-black">
                    <Video size={16} />
                  </div>
                  <span className="font-bold text-white">Online Masterclasses</span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="group relative overflow-hidden rounded-3xl border border-border bg-card p-1">
                <div className="relative h-48 overflow-hidden rounded-2xl">
                  <img
                    src="/img/teaching-workshop.jpg"
                    alt="Offline workshop"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110 grayscale group-hover:grayscale-0"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <span className="text-xs font-bold text-white flex items-center gap-2">
                      <MapPin size={12} className="text-primary" /> Offline Workshops
                    </span>
                  </div>
                </div>
              </div>
              <div className="group relative overflow-hidden rounded-3xl border border-border bg-card p-1">
                <div className="relative h-48 overflow-hidden rounded-2xl">
                  <img
                    src="/img/teaching-mentoring.jpg"
                    alt="Mentoring session"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110 grayscale group-hover:grayscale-0"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <span className="text-xs font-bold text-white flex items-center gap-2">
                      <CheckCircle2 size={12} className="text-primary" /> Job-Ready Focus
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-3xl border border-border bg-primary/5 p-8">
              <h4 className="mb-6 text-sm font-black uppercase tracking-widest text-primary">Mentoring Programs</h4>
              <ul className="grid gap-6 md:grid-cols-2">
                {teachingHighlights.map((item) => (
                  <li key={item.id} className="flex items-start gap-3">
                    <div className="mt-1 text-primary">
                      <CheckCircle2 size={16} />
                    </div>
                    <div>
                      <span className="block font-bold text-foreground">{item.label}</span>
                      <span className="text-xs text-muted-foreground leading-relaxed">{item.description}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
