import { ProjectsSection } from "@/components/sections/ProjectsSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects & Portfolio | Muhammad Fahmi",
  description:
    "AI, NLP, and data engineering projects delivered by Muhammad Fahmi — sentiment analysis, LLM automation, MLOps, and more.",
};

export default function ProjectsPage() {
  return (
    <div className="pt-20">
      <ProjectsSection />
    </div>
  );
}
