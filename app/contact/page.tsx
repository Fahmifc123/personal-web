import { ContactSection } from "@/components/sections/ContactSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Muhammad Fahmi",
  description: "Get in touch with Muhammad Fahmi for corporate AI training or private mentoring.",
};

export default function ContactPage() {
  return (
    <div className="pt-20">
      <ContactSection />
    </div>
  );
}
