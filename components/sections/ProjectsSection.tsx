"use client";

import { useMemo, useState } from "react";
import { projects } from "@/lib/projects";
import { 
  Database, 
  Cpu, 
  Layers, 
  TrendingUp, 
  Wrench, 
  ChevronRight,
  ExternalLink,
  Code2,
  Filter
} from "lucide-react";
import { cn } from "@/lib/utils";

export function ProjectsSection({ limit, isHomePage = false }: { limit?: number; isHomePage?: boolean }) {
  const [selectedType, setSelectedType] = useState<string>("All");
  const [selectedTech, setSelectedTech] = useState<string | null>(null);

  const filteredProjects = useMemo(
    () =>
      projects.filter((project) => {
        const matchesType =
          selectedType === "All" || project.type === selectedType;
        const matchesTech =
          !selectedTech || project.toolsStack.includes(selectedTech);
        return matchesType && matchesTech;
      }),
    [selectedType, selectedTech]
  );

  const displayProjects = limit ? filteredProjects.slice(0, limit) : filteredProjects;

  return (
    <section
      id="projects"
      className="relative mx-auto max-w-7xl px-6 py-24 scroll-mt-24"
      aria-labelledby="projects-heading"
    >
      {/* Background Decorative Element */}
      <div className="absolute top-0 right-0 -z-10 h-[500px] w-[500px] bg-primary/5 blur-[120px] rounded-full" />
      
      <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div className="max-w-2xl">
          <div className="mb-2 inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-primary">
            Portfolio
          </div>
          <h2
            id="projects-heading"
            className="text-4xl font-extrabold tracking-tight text-foreground md:text-5xl"
          >
            Strategic <span className="text-primary">Data & AI</span> Projects
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            A curated selection of enterprise-grade NLP, predictive modeling, and AI automation solutions delivered for high-scale environments.
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          {["All", "Machine Learning", "AI", "NLP", "Computer Vision", "Data Science"].map((type) => (
            <button
              key={type}
              type="button"
              onClick={() => setSelectedType(type)}
              className={cn(
                "rounded-xl border px-5 py-2 text-sm font-semibold transition-all duration-300",
                selectedType === type
                  ? "border-primary bg-primary text-black shadow-lg shadow-primary/20"
                  : "border-border bg-card/50 text-muted-foreground hover:border-primary/50 hover:text-foreground"
              )}
            >
              {type}
            </button>
          ))}
        </div>
      </div>

      {/* Tech Filter Removed */}

      <div className="grid gap-8 md:grid-cols-2">
        {displayProjects.map((project) => (
          <article
            key={project.id}
            className="group relative flex flex-col overflow-hidden rounded-3xl border border-border bg-card transition-all duration-500 hover:-translate-y-2 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/10"
          >
            {/* Project Header Decor */}
            <div className="absolute top-0 right-0 p-6 opacity-10 transition-opacity group-hover:opacity-20">
              <Code2 size={80} />
            </div>

            <div className="flex flex-1 flex-col p-8">
              <div className="mb-6 flex items-center justify-between">
                <span className="rounded-full bg-primary/10 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-primary">
                  {project.type}
                </span>
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-secondary text-primary group-hover:bg-primary group-hover:text-black transition-colors duration-300">
                  <Database size={20} />
                </div>
              </div>

              <h3 className="mb-4 text-2xl font-bold leading-tight group-hover:text-primary transition-colors">
                {project.title}
              </h3>

              <div className="mb-8 space-y-6">
                <div className="flex gap-4">
                  <div className="mt-1 shrink-0 text-primary">
                    <Layers size={18} />
                  </div>
                  <div>
                    <h4 className="text-[11px] font-bold uppercase tracking-widest text-muted-foreground">The Challenge</h4>
                    <p className="mt-1 text-sm text-foreground/80 leading-relaxed">{project.businessProblem}</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="mt-1 shrink-0 text-primary">
                    <TrendingUp size={18} />
                  </div>
                  <div>
                    <h4 className="text-[11px] font-bold uppercase tracking-widest text-muted-foreground">The Impact</h4>
                    <p className="mt-1 text-sm text-foreground/80 leading-relaxed">{project.outcomeImpact}</p>
                  </div>
                </div>
              </div>

              <div className="mt-auto pt-6 border-t border-border">
                <div className="mb-6 flex flex-wrap gap-2">
                  {project.toolsStack.map((tool) => (
                    <span 
                      key={tool}
                      className="rounded-md bg-secondary/50 px-2 py-1 text-[10px] font-medium text-muted-foreground group-hover:bg-primary/5 group-hover:text-primary transition-colors"
                    >
                      {tool}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-xs font-medium text-muted-foreground flex items-center gap-1">
                    <Wrench size={12} className="text-primary" />
                    {project.dataScale}
                  </span>
                  <a
                    href={project.link}
                    className="inline-flex items-center gap-2 text-sm font-bold text-primary group/link hover:underline"
                  >
                    DETAIL
                    <ChevronRight size={16} className="transition-transform group-hover/link:translate-x-1" />
                  </a>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
      
      {filteredProjects.length === 0 && (
        <div className="flex flex-col items-center justify-center py-20 text-center">
          <div className="mb-4 rounded-full bg-secondary p-4 text-muted-foreground">
            <Filter size={32} />
          </div>
          <h3 className="text-xl font-bold">No projects found</h3>
          <p className="text-muted-foreground">Try adjusting your filters to find what you're looking for.</p>
          <button 
            onClick={() => {setSelectedType("All"); setSelectedTech(null);}}
            className="mt-6 text-primary font-bold hover:underline"
          >
            Clear all filters
          </button>
        </div>
      )}
      {isHomePage && filteredProjects.length > (limit || 0) && (
        <div className="mt-20 flex justify-center">
          <a
            href="/projects"
            className="group inline-flex items-center gap-2 rounded-full border border-primary px-8 py-4 text-sm font-bold text-primary transition-all hover:bg-primary hover:text-black"
          >
            SHOW MORE PROJECTS
            <ChevronRight className="transition-transform group-hover:translate-x-1" size={18} />
          </a>
        </div>
      )}
    </section>
  );
}
