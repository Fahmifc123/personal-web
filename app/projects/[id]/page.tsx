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
  Cpu,
  ArrowRight,
  Zap
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

            {/* Architecture Diagram for Data Engineering Projects */}
            {project.type === "Data Engineering" && project.id === "realtime-nlp-data-platform" && (
              <section className="relative rounded-[2.5rem] border border-border bg-card/50 p-8 md:p-12">
                <div className="flex items-center gap-3 mb-8">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary text-black">
                    <Zap size={24} />
                  </div>
                  <h2 className="text-sm font-black uppercase tracking-[0.2em] text-primary">System Architecture</h2>
                </div>

                {/* Architecture Flow Diagram */}
                <div className="bg-background/50 rounded-2xl p-6 md:p-8">
                  <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-2">
                    {/* Data Sources */}
                    <div className="flex flex-col items-center gap-2">
                      <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-500/10 border border-blue-500/30">
                        <Database size={28} className="text-blue-500" />
                      </div>
                      <span className="text-xs font-bold text-muted-foreground">API Sources</span>
                    </div>

                    <ArrowRight className="text-primary rotate-90 md:rotate-0" size={20} />

                    {/* AI Inference */}
                    <div className="flex flex-col items-center gap-2">
                      <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-purple-500/10 border border-purple-500/30">
                        <Cpu size={28} className="text-purple-500" />
                      </div>
                      <span className="text-xs font-bold text-muted-foreground">AI Inference</span>
                    </div>

                    <ArrowRight className="text-primary rotate-90 md:rotate-0" size={20} />

                    {/* Kafka */}
                    <div className="flex flex-col items-center gap-2">
                      <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-orange-500/10 border border-orange-500/30">
                        <Layers size={28} className="text-orange-500" />
                      </div>
                      <span className="text-xs font-bold text-muted-foreground">Kafka</span>
                    </div>

                    <ArrowRight className="text-primary rotate-90 md:rotate-0" size={20} />

                    {/* Elasticsearch */}
                    <div className="flex flex-col items-center gap-2">
                      <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-green-500/10 border border-green-500/30">
                        <Database size={28} className="text-green-500" />
                      </div>
                      <span className="text-xs font-bold text-muted-foreground">Elasticsearch</span>
                    </div>

                    <ArrowRight className="text-primary rotate-90 md:rotate-0" size={20} />

                    {/* Dashboard */}
                    <div className="flex flex-col items-center gap-2">
                      <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 border border-primary/30">
                        <TrendingUp size={28} className="text-primary" />
                      </div>
                      <span className="text-xs font-bold text-muted-foreground">Dashboard</span>
                    </div>
                  </div>

                  {/* Pipeline Description */}
                  <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                    <div className="rounded-xl bg-secondary/50 p-4">
                      <p className="text-xs font-bold text-primary mb-1">Ingestion & Inference</p>
                      <p className="text-[10px] text-muted-foreground">API data collection + AI processing</p>
                    </div>
                    <div className="rounded-xl bg-secondary/50 p-4">
                      <p className="text-xs font-bold text-primary mb-1">Streaming Layer</p>
                      <p className="text-[10px] text-muted-foreground">Kafka message queue for reliability</p>
                    </div>
                    <div className="rounded-xl bg-secondary/50 p-4">
                      <p className="text-xs font-bold text-primary mb-1">Serving Layer</p>
                      <p className="text-[10px] text-muted-foreground">Elasticsearch + Real-time dashboard</p>
                    </div>
                  </div>
                </div>
              </section>
            )}

            {/* Architecture Diagram for Web Scraper Project */}
            {project.type === "Data Engineering" && project.id === "multi-source-web-scraper" && (
              <section className="relative rounded-[2.5rem] border border-border bg-card/50 p-8 md:p-12">
                <div className="flex items-center gap-3 mb-8">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary text-black">
                    <Zap size={24} />
                  </div>
                  <h2 className="text-sm font-black uppercase tracking-[0.2em] text-primary">System Architecture</h2>
                </div>

                {/* Architecture Flow Diagram */}
                <div className="bg-background/50 rounded-2xl p-6 md:p-8">
                  {/* Data Sources Row */}
                  <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-6">
                    <div className="flex flex-col items-center gap-2 px-4">
                      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-500/10 border border-orange-500/30">
                        <span className="text-lg font-black text-orange-500">🛒</span>
                      </div>
                      <span className="text-[10px] font-bold text-muted-foreground">Shopee</span>
                    </div>
                    <div className="flex flex-col items-center gap-2 px-4">
                      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-500/10 border border-blue-500/30">
                        <span className="text-lg font-black text-blue-500">📰</span>
                      </div>
                      <span className="text-[10px] font-bold text-muted-foreground">Kompas</span>
                    </div>
                    <div className="flex flex-col items-center gap-2 px-4">
                      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gray-500/10 border border-gray-500/30">
                        <span className="text-lg font-black text-gray-500">📷</span>
                      </div>
                      <span className="text-[10px] font-bold text-muted-foreground">Unsplash</span>
                    </div>
                  </div>

                  <div className="flex justify-center mb-6">
                    <ArrowRight className="text-primary rotate-90 md:rotate-180" size={24} />
                  </div>

                  {/* Main Pipeline */}
                  <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-2">
                    {/* Selenium Scraper */}
                    <div className="flex flex-col items-center gap-2">
                      <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-green-500/10 border border-green-500/30">
                        <Code2 size={28} className="text-green-500" />
                      </div>
                      <span className="text-xs font-bold text-muted-foreground">Selenium</span>
                    </div>

                    <ArrowRight className="text-primary rotate-90 md:rotate-0" size={20} />

                    {/* Element Detection */}
                    <div className="flex flex-col items-center gap-2">
                      <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-purple-500/10 border border-purple-500/30">
                        <Layers size={28} className="text-purple-500" />
                      </div>
                      <span className="text-xs font-bold text-muted-foreground">Extract</span>
                    </div>

                    <ArrowRight className="text-primary rotate-90 md:rotate-0" size={20} />

                    {/* Validation */}
                    <div className="flex flex-col items-center gap-2">
                      <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-yellow-500/10 border border-yellow-500/30">
                        <Wrench size={28} className="text-yellow-500" />
                      </div>
                      <span className="text-xs font-bold text-muted-foreground">Validate</span>
                    </div>

                    <ArrowRight className="text-primary rotate-90 md:rotate-0" size={20} />

                    {/* Output */}
                    <div className="flex flex-col items-center gap-2">
                      <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan-500/10 border border-cyan-500/30">
                        <Database size={28} className="text-cyan-500" />
                      </div>
                      <span className="text-xs font-bold text-muted-foreground">CSV/Parquet</span>
                    </div>
                  </div>

                  {/* Pipeline Description */}
                  <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                    <div className="rounded-xl bg-secondary/50 p-4">
                      <p className="text-xs font-bold text-primary mb-1">Collection Layer</p>
                      <p className="text-[10px] text-muted-foreground">Multi-source Selenium scrapers</p>
                    </div>
                    <div className="rounded-xl bg-secondary/50 p-4">
                      <p className="text-xs font-bold text-primary mb-1">Processing Layer</p>
                      <p className="text-[10px] text-muted-foreground">Element extraction + Data validation</p>
                    </div>
                    <div className="rounded-xl bg-secondary/50 p-4">
                      <p className="text-xs font-bold text-primary mb-1">Output Layer</p>
                      <p className="text-[10px] text-muted-foreground">Analysis-ready CSV/Parquet files</p>
                    </div>
                  </div>
                </div>
              </section>
            )}

            {/* Architecture Diagram for MLOps Project */}
            {project.type === "Data Engineering" && project.id === "mlops-auto-retrain" && (
              <section className="relative rounded-[2.5rem] border border-border bg-card/50 p-8 md:p-12">
                <div className="flex items-center gap-3 mb-8">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary text-black">
                    <Zap size={24} />
                  </div>
                  <h2 className="text-sm font-black uppercase tracking-[0.2em] text-primary">System Architecture</h2>
                </div>

                {/* Architecture Flow Diagram */}
                <div className="bg-background/50 rounded-2xl p-6 md:p-8">
                  {/* Main Pipeline */}
                  <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-2">
                    {/* New Data */}
                    <div className="flex flex-col items-center gap-2">
                      <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-500/10 border border-blue-500/30">
                        <Database size={28} className="text-blue-500" />
                      </div>
                      <span className="text-xs font-bold text-muted-foreground">New Data</span>
                    </div>

                    <ArrowRight className="text-primary rotate-90 md:rotate-0" size={20} />

                    {/* Training */}
                    <div className="flex flex-col items-center gap-2">
                      <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-purple-500/10 border border-purple-500/30">
                        <Cpu size={28} className="text-purple-500" />
                      </div>
                      <span className="text-xs font-bold text-muted-foreground">Train</span>
                    </div>

                    <ArrowRight className="text-primary rotate-90 md:rotate-0" size={20} />

                    {/* Model */}
                    <div className="flex flex-col items-center gap-2">
                      <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-orange-500/10 border border-orange-500/30">
                        <Code2 size={28} className="text-orange-500" />
                      </div>
                      <span className="text-xs font-bold text-muted-foreground">Model</span>
                    </div>

                    <ArrowRight className="text-primary rotate-90 md:rotate-0" size={20} />

                    {/* Compare */}
                    <div className="flex flex-col items-center gap-2">
                      <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-yellow-500/10 border border-yellow-500/30">
                        <TrendingUp size={28} className="text-yellow-500" />
                      </div>
                      <span className="text-xs font-bold text-muted-foreground">Compare</span>
                    </div>

                    <ArrowRight className="text-primary rotate-90 md:rotate-0" size={20} />

                    {/* Deploy Gate */}
                    <div className="flex flex-col items-center gap-2">
                      <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-green-500/10 border border-green-500/30">
                        <Layers size={28} className="text-green-500" />
                      </div>
                      <span className="text-xs font-bold text-muted-foreground">Deploy?</span>
                    </div>
                  </div>

                  {/* Decision Flow */}
                  <div className="mt-8 flex flex-col md:flex-row items-center justify-center gap-4">
                    <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-green-500/10 border border-green-500/30">
                      <span className="text-xs font-bold text-green-500">✓ Acc New &gt; Acc Old</span>
                      <ArrowRight size={16} className="text-green-500" />
                      <span className="text-xs font-bold text-green-500">Deploy</span>
                    </div>
                    <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-red-500/10 border border-red-500/30">
                      <span className="text-xs font-bold text-red-500">✗ Acc New &lt; Acc Old</span>
                      <ArrowRight size={16} className="text-red-500" />
                      <span className="text-xs font-bold text-red-500">Skip</span>
                    </div>
                  </div>

                  {/* Pipeline Description */}
                  <div className="mt-8 grid grid-cols-1 md:grid-cols-4 gap-4 text-center">
                    <div className="rounded-xl bg-secondary/50 p-4">
                      <p className="text-xs font-bold text-primary mb-1">Data Ingestion</p>
                      <p className="text-[10px] text-muted-foreground">Automated new data collection</p>
                    </div>
                    <div className="rounded-xl bg-secondary/50 p-4">
                      <p className="text-xs font-bold text-primary mb-1">Model Training</p>
                      <p className="text-[10px] text-muted-foreground">Sentiment model retraining</p>
                    </div>
                    <div className="rounded-xl bg-secondary/50 p-4">
                      <p className="text-xs font-bold text-primary mb-1">Accuracy Gate</p>
                      <p className="text-[10px] text-muted-foreground">Compare with production model</p>
                    </div>
                    <div className="rounded-xl bg-secondary/50 p-4">
                      <p className="text-xs font-bold text-primary mb-1">Auto Deploy</p>
                      <p className="text-[10px] text-muted-foreground">Conditional deployment</p>
                    </div>
                  </div>
                </div>
              </section>
            )}
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
