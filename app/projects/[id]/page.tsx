import { notFound } from "next/navigation";
import { projects } from "@/lib/projects";

interface ProjectDetailPageProps {
  params: {
    id: string;
  };
}

export function generateStaticParams() {
  return projects.map((project) => ({ id: project.id }));
}

export default function ProjectDetailPage({ params }: ProjectDetailPageProps) {
  const project = projects.find((p) => p.id === params.id);

  if (!project) {
    notFound();
  }

  return (
    <section className="mx-auto max-w-5xl px-4 py-16">
      <div className="mb-6 text-xs text-emerald-300">
        <a href="/#projects" className="hover:underline">
          ← Back to projects
        </a>
      </div>

      <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-emerald-400">
        {project.type === "Enterprise" ? "Enterprise Project" : "Research & Exploration"}
      </p>
      <h1 className="mb-3 text-2xl font-semibold tracking-tight text-slate-50">
        {project.title}
      </h1>
      <p className="mb-6 text-xs text-slate-400">High-level case study overview based on real-world style projects.</p>

      <div className="grid gap-8 md:grid-cols-[3fr,2fr]">
        <div className="space-y-4 text-sm text-slate-300">
          <div>
            <h2 className="mb-1 text-xs font-semibold uppercase tracking-wide text-slate-400">
              Business Problem
            </h2>
            <p>{project.businessProblem}</p>
          </div>
          <div>
            <h2 className="mb-1 text-xs font-semibold uppercase tracking-wide text-slate-400">
              Data Scale
            </h2>
            <p>{project.dataScale}</p>
          </div>
          <div>
            <h2 className="mb-1 text-xs font-semibold uppercase tracking-wide text-slate-400">
              Model / Approach
            </h2>
            <p>{project.modelApproach}</p>
          </div>
          <div>
            <h2 className="mb-1 text-xs font-semibold uppercase tracking-wide text-slate-400">
              Outcome / Impact
            </h2>
            <p>{project.outcomeImpact}</p>
          </div>
        </div>

        <aside className="space-y-4 text-xs text-slate-300">
          <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-4">
            <h2 className="mb-2 text-[11px] font-semibold uppercase tracking-wide text-slate-400">
              Tools &amp; Stack
            </h2>
            <p>{project.toolsStack.join(" • ")}</p>
          </div>
          <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-4">
            <h2 className="mb-2 text-[11px] font-semibold uppercase tracking-wide text-slate-400">
              How this fits my role
            </h2>
            <p>
              Project ini merepresentasikan gaya kerja saya sebagai Data Scientist dan AI &amp; NLP Engineer:
              fokus pada problem bisnis yang jelas, desain pipeline yang rapi, dan deployment yang siap dipakai tim lain.
            </p>
          </div>
        </aside>
      </div>
    </section>
  );
}
