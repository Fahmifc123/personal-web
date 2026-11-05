import { HeroSection } from "@/components/sections/HeroSection";
import { TrustedBySection } from "@/components/sections/TrustedBySection";
import { ProgramsSection } from "@/components/sections/ProgramsSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { TeachingSection } from "@/components/sections/TeachingSection";
import { ContactSection } from "@/components/sections/ContactSection";

export default function HomePage() {
  return (
    <div className="space-y-24 md:space-y-32">
      <HeroSection />
      <TrustedBySection />
      <ProgramsSection />
      <AboutSection />
      <ExperienceSection limit={2} isHomePage={true} />
      <ProjectsSection limit={4} isHomePage={true} />
      <TestimonialsSection />
      <TeachingSection />
      <ContactSection />
    </div>
  );
}
