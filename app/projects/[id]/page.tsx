import { notFound } from "next/navigation";
import { projects } from "@/lib/projects";
import { 
  ChevronLeft, 
  Database, 
  Layers, 
  TrendingUp, 
  Wrench, 
  Briefcase,
  Code2,
  Cpu
} from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

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
    <div className="min-h-screen bg-background pt-24 pb-20">
      <div className="mx-auto max-w-5xl px-6">
        {/* Navigation */}
        <Link 
          href="/projects" 
          className="group inline-flex items-center gap-2 text-sm font-bold text-primary hover:underline mb-12"
        >
          <ChevronLeft size={18} className="transition-transform group-hover:-translate-x-1" />
          BACK TO PROJECTS
        </Link>

        {/* Header Section */}
        <header className="mb-16">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-primary">
            <Cpu size={14} />
            {project.type}
          </div>
          <h1 className="text-4xl font-black tracking-tight text-foreground md:text-6xl leading-tight">
            {project.title}
          </h1>
          <p className="mt-6 text-xl text-muted-foreground leading-relaxed max-w-3xl">
            A comprehensive overview of the strategic implementation and real-world impact delivered through this initiative.
          </p>
        </header>

        <div className="grid gap-12 lg:grid-cols-[1fr,350px]">
          {/* Main Content */}
          <div className="space-y-16">
            <section className="relative rounded-[2.5rem] border border-border bg-card/50 p-8 md:p-12 overflow-hidden">
              <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none">
                <Code2 size={200} />
              </div>
              
              <div className="space-y-12 relative z-10">
                <div className="flex gap-6">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary text-black">
                    <Layers size={24} />
                  </div>
                  <div>
                    <h2 className="text-sm font-black uppercase tracking-[0.2em] text-primary mb-3">The Challenge</h2>
                    <p className="text-lg text-foreground/90 leading-relaxed font-medium">
                      {project.businessProblem}
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary text-black">
                    <Database size={24} />
                  </div>
                  <div>
                    <h2 className="text-sm font-black uppercase tracking-[0.2em] text-primary mb-3">Technical Approach</h2>
                    <p className="text-lg text-foreground/90 leading-relaxed">
                      {project.modelApproach}
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary text-black">
                    <TrendingUp size={24} />
                  </div>
                  <div>
                    <h2 className="text-sm font-black uppercase tracking-[0.2em] text-primary mb-3">Outcome & Impact</h2>
                    <p className="text-lg text-foreground/90 leading-relaxed font-semibold">
                      {project.outcomeImpact}
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <aside className="space-y-8">
            <div className="rounded-3xl border border-border bg-card p-8">
              <h3 className="text-xs font-black uppercase tracking-[0.2em] text-primary mb-6 flex items-center gap-2">
                <Wrench size={14} /> Tools & Stack
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.toolsStack.map((tool) => (
                  <span 
                    key={tool}
                    className="rounded-lg bg-secondary px-3 py-1.5 text-[11px] font-bold text-muted-foreground uppercase"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-border bg-primary/5 p-8">
              <h3 className="text-xs font-black uppercase tracking-[0.2em] text-primary mb-4 flex items-center gap-2">
                <Briefcase size={14} /> Strategic Value
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Project ini merepresentasikan keahlian saya dalam membangun sistem AI yang tidak hanya akurat secara teknis, 
                tetapi juga memiliki skalabilitas tinggi untuk kebutuhan operasional perusahaan.
              </p>
            </div>

            <div className="rounded-3xl border border-border bg-card p-8">
              <h3 className="text-xs font-black uppercase tracking-[0.2em] text-primary mb-4">Data Scale</h3>
              <p className="text-lg font-bold text-foreground">
                {project.dataScale}
              </p>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
