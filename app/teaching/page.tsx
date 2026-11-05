import { TeachingSection } from "@/components/sections/TeachingSection";
import { TeachingGallery } from "@/components/sections/TeachingGallery";
import { TrustedBySection } from "@/components/sections/TrustedBySection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Teaching & Corporate Training | Muhammad Fahmi",
  description:
    "350+ training sessions, 7,000+ learners, 20+ companies. Corporate training and mentoring in AI, NLP, and Data Science by Muhammad Fahmi.",
};

export default function TeachingPage() {
  return (
    <div className="pt-20 space-y-20 mb-20">
      <TeachingSection />
      <TeachingGallery />
      <TrustedBySection />
    </div>
  );
}
