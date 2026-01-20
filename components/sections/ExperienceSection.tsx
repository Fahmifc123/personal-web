"use client";

import { cn } from "@/lib/utils";
import { Link as LinkIcon, MapPin, Briefcase, ChevronRight } from "lucide-react";

interface Experience {
  id: string;
  role: string;
  company: string;
  location: string;
  dateRange: string;
  description: string;
  link?: string;
}

const experiences: Experience[] = [
  {
    id: "nolimit",
    role: "HEAD OF DATA SCIENCE",
    company: "NOLIMIT INDONESIA",
    location: "JAKARTA, INDONESIA",
    dateRange: "2021 - PRESENT",
    description: "Leading the data science team in developing high-scale NLP systems, sentiment analysis engines, and predictive analytics solutions. Spearheading strategic AI initiatives to drive business growth and client success.",
    link: "https://nolimit.id"
  },
  {
    id: "intelligo",
    role: "FOUNDER & LEAD MENTOR",
    company: "INTELLIGO ID",
    location: "REMOTE / JAKARTA",
    dateRange: "2022 - PRESENT",
    description: "Building and scaling a premier AI & Data Science learning platform. Designed project-based curriculum that has successfully mentored over 500+ students into the tech industry.",
    link: "https://intelligo.id"
  },
  {
    id: "senior-ai",
    role: "SENIOR AI & NLP ENGINEER",
    company: "ENTERPRISE SOLUTIONS",
    location: "JAKARTA, INDONESIA",
    dateRange: "2018 - 2021",
    description: "Designed and implemented end-to-end Machine Learning pipelines. Focused on deep learning for NLP, automated routing systems, and scalable API deployments for enterprise clients."
  },
  {
    id: "data-scientist",
    role: "DATA SCIENTIST",
    company: "TECH INNOVATION HUB",
    location: "BANDUNG, INDONESIA",
    dateRange: "2016 - 2018",
    description: "Conducted statistical analysis and developed predictive models for user behavior and business optimization. Explored early-stage NLP research for Indonesian language processing."
  }
];

export function ExperienceSection({ limit, isHomePage = false }: { limit?: number; isHomePage?: boolean }) {
  const displayExperiences = limit ? experiences.slice(0, limit) : experiences;

  return (
    <section className={cn(
      "mx-auto max-w-7xl px-6 py-24 sm:px-12",
      isHomePage && "py-12"
    )}>
      <div className="mb-20">
        <h2 className="text-5xl font-serif text-primary md:text-6xl tracking-tight">
          Experience
        </h2>
      </div>

      <div className="relative">
        {/* Central Vertical Line */}
        <div className="absolute left-[50%] top-0 h-full w-[1px] bg-primary/30 -translate-x-1/2 hidden md:block" />
        
        {/* Mobile Vertical Line */}
        <div className="absolute left-4 top-0 h-full w-[1px] bg-primary/30 md:hidden" />

        <div className="space-y-24">
          {displayExperiences.map((exp, index) => (
            <div key={exp.id} className="relative grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-24">
              
              {/* Timeline Bullet */}
              <div className="absolute left-4 md:left-1/2 h-4 w-4 rounded-full border-2 border-primary bg-background -translate-x-1/2 top-0 z-10" />

              {/* Left Side: Role & Date */}
              <div className={cn(
                "pl-12 md:pl-0 flex flex-col md:text-right",
                index % 2 === 0 ? "md:order-1" : "md:order-1" 
              )}>
                <h3 className="text-xl font-black tracking-widest text-foreground uppercase md:text-2xl">
                  {exp.role}
                </h3>
                <p className="mt-2 text-sm font-medium text-muted-foreground uppercase tracking-wider">
                  {exp.dateRange}
                </p>
              </div>

              {/* Right Side: Company & Description */}
              <div className={cn(
                "pl-12 md:pl-0 flex flex-col",
                index % 2 === 0 ? "md:order-2" : "md:order-2"
              )}>
                <div className="flex flex-col gap-1">
                  <h4 className="text-xl font-bold text-foreground md:text-2xl">
                    {exp.company}
                  </h4>
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-primary">
                    <MapPin size={14} />
                    {exp.location}
                  </div>
                </div>
                
                <p className="mt-6 text-base text-muted-foreground leading-relaxed max-w-xl">
                  {exp.description}
                </p>

                {exp.link && (
                  <a 
                    href={exp.link}
                    target="_blank"
                    className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-primary hover:underline transition-all"
                  >
                    <LinkIcon size={14} />
                    {exp.link.replace("https://", "")}
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {isHomePage && (
        <div className="mt-20 flex justify-center">
          <a
            href="/experience"
            className="group inline-flex items-center gap-2 rounded-full border border-primary px-8 py-4 text-sm font-bold text-primary transition-all hover:bg-primary hover:text-black"
          >
            SHOW MORE
            <ChevronRight className="transition-transform group-hover:translate-x-1" size={18} />
          </a>
        </div>
      )}
    </section>
  );
}
