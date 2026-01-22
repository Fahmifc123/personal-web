"use client";

import { 
  Mail, 
  Linkedin, 
  MessageSquare
} from "lucide-react";
import { cn } from "@/lib/utils";

const socialLinks = [
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/muhammad-fahmi17/",
    icon: Linkedin,
    color: "hover:text-[#0077b5]"
  }
];

export function ContactSection() {
  return (
    <section
      id="contact"
      className="relative mx-auto max-w-7xl px-6 py-24 scroll-mt-24"
      aria-labelledby="contact-heading"
    >
      <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
        <div className="mb-2 inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-primary">
          Connect
        </div>
        <h2
          id="contact-heading"
          className="text-4xl font-extrabold tracking-tight text-foreground md:text-5xl"
        >
          Let&apos;s Build Something <span className="text-primary">Impactful</span>
        </h2>
        <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
          Whether you have a strategic business problem to solve, a team that needs training, 
          or just want to discuss the latest in AI — my inbox is always open.
        </p>

        <div className="mt-12 flex flex-col sm:flex-row items-center gap-8 sm:gap-16">
          <div className="flex flex-col items-center gap-4 group">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-secondary text-primary transition-colors group-hover:bg-primary group-hover:text-black">
              <Mail size={28} />
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Email Me</p>
              <a href="mailto:mfahmipamungkas123@gmail.com" className="text-xl font-bold hover:text-primary transition-colors">
                mfahmipamungkas123@gmail.com
              </a>
            </div>
          </div>

          <div className="flex flex-col items-center gap-4 group">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-secondary text-primary transition-colors group-hover:bg-primary group-hover:text-black">
              <MessageSquare size={28} />
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Chat</p>
              <a href="https://wa.me/6281263299950" target="_blank" rel="noopener noreferrer" className="text-xl font-bold hover:text-primary transition-colors">
                WhatsApp
              </a>
            </div>
          </div>
        </div>

        <div className="mt-16">
          <p className="mb-4 text-xs font-bold uppercase tracking-widest text-muted-foreground">Follow My Journey</p>
          <div className="flex justify-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  "flex h-14 w-14 items-center justify-center rounded-xl bg-secondary transition-all hover:-translate-y-1",
                  social.color
                )}
                aria-label={social.name}
              >
                <social.icon size={24} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
