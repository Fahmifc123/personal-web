import { TeachingSection } from "@/components/sections/TeachingSection";
import { TeachingGallery } from "@/components/sections/TeachingGallery";
import { TrustedBySection } from "@/components/sections/TrustedBySection";

export default function TeachingPage() {
  return (
    <div className="pt-20 space-y-20 mb-20">
      <TeachingSection />
      <TeachingGallery />
      <TrustedBySection />
    </div>
  );
}
