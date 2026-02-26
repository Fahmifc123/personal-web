import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { TeachingSection } from "@/components/sections/TeachingSection";
import { ContactSection } from "@/components/sections/ContactSection";

export default function HomePage() {
  return (
    <div className="space-y-24 md:space-y-32">
      <HeroSection />
      <AboutSection />
      <ExperienceSection limit={2} isHomePage={true} />
      <ProjectsSection limit={4} isHomePage={true} />
      <TeachingSection />
      <ContactSection />
    </div>
  );
}
