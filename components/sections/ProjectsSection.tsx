"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { projects, type Project } from "@/lib/projects";
import { PipelineFlow } from "@/components/projects/PipelineFlow";
import { ChevronRight, Filter, ShieldCheck, TrendingUp, Star } from "lucide-react";
import { cn } from "@/lib/utils";

const ALL_CATEGORIES = ["Data Engineering", "Machine Learning", "AI", "NLP", "Computer Vision", "Data Science"];
const MAX_TOOLS = 4;

function ProjectCard({ project }: { project: Project }) {
  const extraTools = project.toolsStack.length - MAX_TOOLS;

  return (
    <Link
      href={project.link}
      className="group relative flex flex-col rounded-3xl border border-border bg-card p-7 transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
    >
      <div className="mb-5 flex flex-wrap items-center gap-2">
        <span className="rounded-full bg-primary/10 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-primary">
          {project.type}
        </span>
        {project.featured && (
          <span className="inline-flex items-center gap-1 rounded-full border border-primary/30 px-2 py-1 text-[10px] font-bold uppercase tracking-wider text-primary">
            <Star size={10} className="fill-primary" /> Featured
          </span>
        )}
        {project.isPublic && (
          <span className="rounded-full border border-green-500/30 bg-green-500/10 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-green-500">
            Open Demo
          </span>
        )}
      </div>

      <h3 className="text-xl font-bold leading-snug text-foreground transition-colors group-hover:text-primary">
        {project.title}
      </h3>
      <p className="mt-2 flex items-center gap-1.5 text-[11px] font-semibold text-muted-foreground">
        {project.organization}
        {project.confidential && (
          <ShieldCheck size={12} className="text-primary" aria-label="NDA protected" />
        )}
      </p>

      <p className="mt-4 line-clamp-3 text-sm leading-relaxed text-foreground/80">
        {project.summary ?? project.outcomeImpact}
      </p>

      {project.pipeline && (
        <div className="mt-5">
          <PipelineFlow steps={project.pipeline} />
        </div>
      )}

      <div className="mt-auto pt-6">
        {project.highlight && (
          <p className="mb-4 flex items-center gap-2 text-xs font-bold text-primary">
            <TrendingUp size={14} /> {project.highlight}
          </p>
        )}
        <div className="flex items-end justify-between gap-4 border-t border-border pt-4">
          <div className="flex flex-wrap gap-1.5">
            {project.toolsStack.slice(0, MAX_TOOLS).map((tool) => (
              <span key={tool} className="rounded-md bg-secondary/60 px-2 py-1 text-[10px] font-medium text-muted-foreground">
                {tool}
              </span>
            ))}
            {extraTools > 0 && (
              <span className="rounded-md px-1 py-1 text-[10px] font-medium text-muted-foreground">+{extraTools}</span>
            )}
          </div>
          <span className="inline-flex shrink-0 items-center gap-1 text-xs font-bold text-primary">
            Case study
            <ChevronRight size={14} className="transition-transform group-hover:translate-x-1" />
          </span>
        </div>
      </div>
    </Link>
  );
}

export function ProjectsSection({ limit, isHomePage = false }: { limit?: number; isHomePage?: boolean }) {
  const [selectedType, setSelectedType] = useState<string>("All");

  const typeCounts = useMemo(() => {
    const counts: Record<string, number> = { All: projects.length };
    for (const p of projects) counts[p.type] = (counts[p.type] ?? 0) + 1;
    return counts;
  }, []);

  const availableTypes = ["All", ...ALL_CATEGORIES.filter((type) => typeCounts[type])];

  const filteredProjects = useMemo(() => {
    const list = projects.filter((p) => selectedType === "All" || p.type === selectedType);
    return [...list].sort((a, b) => Number(!!b.featured) - Number(!!a.featured));
  }, [selectedType]);

  const displayProjects = limit ? filteredProjects.slice(0, limit) : filteredProjects;

  return (
    <section
      id="projects"
      className="relative mx-auto max-w-7xl px-6 py-24 scroll-mt-24"
      aria-labelledby="projects-heading"
    >
      <div className="absolute top-0 right-0 -z-10 h-[500px] w-[500px] rounded-full bg-primary/5 blur-[120px]" />

      <div className="mb-12 max-w-2xl">
        <div className="mb-2 inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-primary">
          Portfolio
        </div>
        <h2 id="projects-heading" className="text-4xl font-extrabold tracking-tight text-foreground md:text-5xl">
          {isHomePage ? "Featured" : "Strategic"} <span className="text-primary">Data &amp; AI</span> Projects
        </h2>
        <p className="mt-4 text-lg text-muted-foreground">
          Production NLP, LLM, and data systems — from large-scale social media monitoring to recommendation
          engines and computer vision — each one now a real-world case study in my training programs.
        </p>
      </div>

      {!isHomePage && (
        <div className="mb-10 flex flex-wrap gap-2" role="tablist" aria-label="Filter projects by category">
          {availableTypes.map((type) => (
            <button
              key={type}
              type="button"
              role="tab"
              aria-selected={selectedType === type}
              onClick={() => setSelectedType(type)}
              className={cn(
                "rounded-xl border px-4 py-2 text-sm font-semibold transition-all duration-300",
                selectedType === type
                  ? "border-primary bg-primary text-black shadow-lg shadow-primary/20"
                  : "border-border bg-card/50 text-muted-foreground hover:border-primary/50 hover:text-foreground"
              )}
            >
              {type} <span className="ml-1 opacity-60">{typeCounts[type]}</span>
            </button>
          ))}
        </div>
      )}

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {displayProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

      {filteredProjects.length === 0 && (
        <div className="flex flex-col items-center justify-center py-20 text-center">
          <div className="mb-4 rounded-full bg-secondary p-4 text-muted-foreground">
            <Filter size={32} />
          </div>
          <h3 className="text-xl font-bold">No projects found</h3>
          <button onClick={() => setSelectedType("All")} className="mt-6 font-bold text-primary hover:underline">
            Show all projects
          </button>
        </div>
      )}

      {isHomePage && projects.length > (limit || 0) && (
        <div className="mt-16 flex justify-center">
          <Link
            href="/projects"
            className="group inline-flex items-center gap-2 rounded-full border border-primary px-8 py-4 text-sm font-bold text-primary transition-all hover:bg-primary hover:text-black"
          >
            See all {projects.length} projects
            <ChevronRight className="transition-transform group-hover:translate-x-1" size={18} />
          </Link>
        </div>
      )}
    </section>
  );
}
