export function Footer() {
  return (
    <footer className="border-t border-border bg-card/30">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 py-12 text-sm text-muted-foreground md:flex-row md:items-center md:justify-between">
        <div className="flex flex-col gap-2">
          <p className="font-bold text-foreground">
            © {new Date().getFullYear()} Muhammad Fahmi.
          </p>
          <p className="max-w-xs leading-relaxed">
            Head of Data Science & AI Engineer. Freelance Trainer & Mentor Data Science.
          </p>
        </div>
        
        <div className="flex gap-8">
          <a href="/" className="hover:text-primary transition-colors">Home</a>
          <a href="/projects" className="hover:text-primary transition-colors">Projects & Portfolio</a>
          <a href="/teaching" className="hover:text-primary transition-colors">Teaching</a>
          <a href="/contact" className="hover:text-primary transition-colors">Contact</a>
        </div>

        <div className="flex flex-col md:items-end gap-2">
          <p>Built with Next.js & Tailwind CSS</p>
          <div className="flex gap-4">
            <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
            <span className="text-[10px] font-bold uppercase tracking-widest">Available for hire</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
