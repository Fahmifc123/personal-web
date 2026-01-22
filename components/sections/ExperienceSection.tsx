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
    id: "nolimit-combined",
    role: "HEAD OF DATA SCIENCE",
    company: "NOLIMIT INDONESIA",
    location: "BANDUNG, INDONESIA",
    dateRange: "APR 2022 - PRESENT",
    description: "Currently leading the data science team (Jul 2024 - Present) in managing AI & NLP projects like Sentiment Analysis, NER, and Chatbots. Previously served as a Data Scientist (Apr 2022 - Jul 2024) implementing AI pipelines with RAG and Deep Learning frameworks.",
    link: "https://nolimit.id"
  },
  {
    id: "freelance-trainer",
    role: "FREELANCE TRAINER & MENTOR",
    company: "FREELANCE",
    location: "REMOTE & SEASONAL",
    dateRange: "JAN 2019 - PRESENT",
    description: "Delivered 350+ training sessions on AI, Machine Learning, and NLP for professionals and corporate clients like Bank Mandiri, Toyota, and PLN. Specialized in AI model building and deployment using Python and FastAPI.",
  },
  {
    id: "intelligo",
    role: "HEAD OF LEARNING & DEVELOPMENT",
    company: "INTELLIGO ID",
    location: "REMOTE",
    dateRange: "JAN 2022 - PRESENT",
    description: "Built and delivered AI Programming & Data Science curricula for Bootcamps and Job Ready programs. Created hands-on modules on AI model development, NLP applications, and end-to-end AI projects.",
    link: "https://intelligo.id"
  },
  {
    id: "skilvul",
    role: "MENTOR AI & DATA SCIENCE",
    company: "SKILVUL (KAMPUS MERDEKA BATCH 6)",
    location: "REMOTE",
    dateRange: "JAN 2024 - JUN 2024",
    description: "Mentored students in AI Programming & NLP projects under Kampus Merdeka Batch 6 (Skilvul x IBM). Focused on applied AI model development with Python.",
  },
  {
    id: "binar",
    role: "DATA SCIENCE FACILITATOR",
    company: "BINAR ACADEMY",
    location: "REMOTE",
    dateRange: "SEP 2022 - SEP 2023",
    description: "Facilitated Data Science bootcamps for B2B and B2C programs, including Digitalent Kominfo and corporate partners like PT. Bayer Indonesia.",
  },
  {
    id: "kebun-pintar",
    role: "LEAD DATA SCIENTIST",
    company: "KEBUN PINTAR",
    location: "REMOTE",
    dateRange: "JAN 2021 - MAR 2022",
    description: "Led data science initiatives for agricultural technology solutions.",
  },
  {
    id: "bank-mandiri",
    role: "DATA SCIENTIST",
    company: "PT BANK MANDIRI (PERSERO) TBK",
    location: "REMOTE",
    dateRange: "NOV 2021 - DEC 2021",
    description: "Worked on the Talent Score Card project in collaboration with Setneg, creating a recommendation system based on profile similarities.",
  },
  {
    id: "telkom",
    role: "DATA SCIENTIST",
    company: "TELKOM INDONESIA (DDB)",
    location: "BANDUNG, INDONESIA",
    dateRange: "AUG 2020 - JAN 2021",
    description: "Developed Emerging Topic Recommendation systems within the Digital Business Directorate.",
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
