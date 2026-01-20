"use client";

import { 
  Mail, 
  Linkedin, 
  Twitter, 
  Instagram, 
  MapPin, 
  Phone,
  ArrowRight,
  MessageSquare,
  Send
} from "lucide-react";
import { cn } from "@/lib/utils";

const socialLinks = [
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/mfahmi",
    icon: Linkedin,
    color: "hover:text-[#0077b5]"
  },
  {
    name: "Instagram",
    url: "https://instagram.com/mfahmi",
    icon: Instagram,
    color: "hover:text-[#e4405f]"
  },
  {
    name: "Twitter",
    url: "https://twitter.com/mfahmi",
    icon: Twitter,
    color: "hover:text-[#1da1f2]"
  }
];

export function ContactSection() {
  return (
    <section
      id="contact"
      className="relative mx-auto max-w-7xl px-6 py-24 scroll-mt-24"
      aria-labelledby="contact-heading"
    >
      <div className="grid gap-16 lg:grid-cols-2 lg:items-start">
        <div>
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

          <div className="mt-10 space-y-8">
            <div className="flex items-center gap-6 group">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-secondary text-primary transition-colors group-hover:bg-primary group-hover:text-black">
                <Mail size={24} />
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Email Me</p>
                <a href="mailto:fahmi@intelligo.id" className="text-xl font-bold hover:text-primary transition-colors">
                  fahmi@intelligo.id
                </a>
              </div>
            </div>

            <div className="flex items-center gap-6 group">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-secondary text-primary transition-colors group-hover:bg-primary group-hover:text-black">
                <MessageSquare size={24} />
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Chat</p>
                <a href="https://wa.me/628123456789" className="text-xl font-bold hover:text-primary transition-colors">
                  WhatsApp Support
                </a>
              </div>
            </div>
          </div>

          <div className="mt-12">
            <p className="mb-4 text-xs font-bold uppercase tracking-widest text-muted-foreground">Follow My Journey</p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  className={cn(
                    "flex h-12 w-12 items-center justify-center rounded-xl bg-secondary transition-all hover:-translate-y-1",
                    social.color
                  )}
                  aria-label={social.name}
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="rounded-[2.5rem] border border-border bg-card p-8 shadow-2xl shadow-primary/5">
          <h3 className="mb-8 text-2xl font-bold">Quick Inquiry</h3>
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Name</label>
                <input 
                  type="text" 
                  placeholder="John Doe"
                  className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm focus:border-primary/50 focus:outline-none focus:ring-1 focus:ring-primary/50 transition-all"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Email</label>
                <input 
                  type="email" 
                  placeholder="john@example.com"
                  className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm focus:border-primary/50 focus:outline-none focus:ring-1 focus:ring-primary/50 transition-all"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Subject</label>
              <select className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm focus:border-primary/50 focus:outline-none focus:ring-1 focus:ring-primary/50 transition-all">
                <option>Enterprise AI Consulting</option>
                <option>Corporate Training</option>
                <option>Mentoring / Bootcamp</option>
                <option>Other Collaboration</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Message</label>
              <textarea 
                rows={4}
                placeholder="How can I help you?"
                className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm focus:border-primary/50 focus:outline-none focus:ring-1 focus:ring-primary/50 transition-all"
              />
            </div>
            <button className="flex w-full items-center justify-center gap-3 rounded-xl bg-primary py-4 text-base font-black text-black shadow-xl shadow-primary/20 transition-all hover:bg-primary/90 hover:shadow-primary/30 active:scale-[0.98]">
              SEND MESSAGE
              <Send size={18} />
            </button>
          </form>
        </div>
      </div>

    </section>
  );
}
