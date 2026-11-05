"use client";

import { Linkedin, MessageSquare, Mail } from "lucide-react";
import { track } from "@vercel/analytics";

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
          Let&apos;s upskill <span className="text-primary">your team</span>.
        </h2>
        <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
          Planning AI or data training for your team, or looking for a private mentor? Send me a
          message on LinkedIn with your goal and team size, and I&apos;ll reply with a program outline.
        </p>

        <div className="mt-12 flex flex-col sm:flex-row items-center gap-4">
          <a
            href="https://www.linkedin.com/in/muhammad-fahmi17"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => track("cta_linkedin", { location: "contact" })}
            className="inline-flex h-14 items-center justify-center gap-2 rounded-xl bg-primary px-8 text-base font-bold text-black shadow-lg transition-transform hover:scale-105 active:scale-95"
          >
            <Linkedin size={20} /> Chat on LinkedIn
          </a>
          <a
            href="https://wa.me/6281263299950"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-14 items-center justify-center gap-2 rounded-xl border border-border bg-transparent px-8 text-base font-bold text-foreground transition-all hover:bg-accent"
          >
            <MessageSquare size={20} /> WhatsApp
          </a>
        </div>

        <div className="mt-16">
          <p className="mb-4 text-xs font-bold uppercase tracking-widest text-muted-foreground">Follow My Journey</p>
          <div className="flex justify-center gap-4">
            <a
              href="https://www.linkedin.com/in/muhammad-fahmi17/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="flex h-14 w-14 items-center justify-center rounded-xl bg-secondary transition-all hover:-translate-y-1 hover:text-[#0077b5]"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:mfahmipamungkas123@gmail.com"
              aria-label="Email"
              title="Email"
              className="flex h-14 w-14 items-center justify-center rounded-xl bg-secondary transition-all hover:-translate-y-1 hover:text-primary"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
