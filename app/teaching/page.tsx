import { TeachingSection } from "@/components/sections/TeachingSection";
import { IntelligoSection } from "@/components/sections/IntelligoSection";

export default function TeachingPage() {
  return (
    <div className="pt-20 space-y-20 mb-20">
      <TeachingSection />
      <IntelligoSection />
    </div>
  );
}
