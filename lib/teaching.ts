export const teachingHighlights = [
  {
    id: "intelligo-id",
    label: "Lead Trainer, Intelligo ID",
    description: "Trainer utama di Intelligo ID — platform EduTech Data Science & AI, membawakan Corporate Training, Bootcamp, dan Private Course untuk klien perusahaan."
  },
  {
    id: "freelance-trainer",
    label: "Freelance Trainer & Mentor",
    description: "Mengajar dan mentoring secara freelance untuk Data Science & AI di berbagai platform dan perusahaan."
  },
  {
    id: "corporate-training",
    label: "Corporate Trainer",
    description: "Membawakan 350+ sesi training AI & ML untuk klien seperti Bank Danamon, Toyota Astra Motor, Freeport, dan PLN."
  },
  {
    id: "kampus-merdeka",
    label: "Kampus Merdeka",
    description: "Mentor AI & Data Science di Skilvul x IBM, Binar Academy, dan Startup Campus untuk ribuan mahasiswa."
  },
  {
    id: "academic-instructor",
    label: "Academic Instructor",
    description: "Pemateri tamu dan instruktur di berbagai universitas ternama seperti UI, UGM, IPB, dan Atma Jaya."
  }
];

export const corporateClients = [
  "Bank Danamon", "Toyota Astra Motor", "Bayer", "PLN", "Freeport", "Jasa Marga",
  "Bank BSI", "Seabank Indonesia", "Bank Mandiri", "Telkom Indonesia", "Ortax",
  "Telkom Corporate University", "AXA Mandiri", "BPK PENABUR", "Pegadaian"
];

export const academicPartners = [
  "Universitas Indonesia", "UGM", "IPB University", "Atma Jaya", "UPN Yogyakarta",
  "ULBI", "Politeknik Madiun", "Politeknik Pos Indonesia"
];

export interface DocumentationPhoto {
  id: string;
  src: string;
  caption: string;
  context: string;
}

export const documentationPhotos: DocumentationPhoto[] = [
  {
    id: "bsi-ai-framework",
    src: "/img/20241231_082844.jpg",
    caption: "AI Framework Workshop",
    context: "BSI x Rakamin — Corporate Training"
  },
  {
    id: "bsi-ai-banking",
    src: "/img/20250115_080808.jpg",
    caption: "AI in Banking Session",
    context: "Bank Syariah Indonesia (BSI)"
  },
  {
    id: "bsi-ai-adoption",
    src: "/img/Dipindai_20250102-0928-41.jpg",
    caption: "AI Adoption Deep-Dive",
    context: "BSI x Rakamin — Corporate Training"
  },
  {
    id: "bsi-closing-1",
    src: "/img/20250115_170349.jpg",
    caption: "Closing Session with Participants",
    context: "Bank Syariah Indonesia (BSI)"
  },
  {
    id: "bsi-closing-2",
    src: "/img/20250115_170427.jpg",
    caption: "Cohort Group Photo",
    context: "BSI x Rakamin — Corporate Training"
  },
  {
    id: "project-showcase",
    src: "/img/IMG-20241231-WA0061.jpg",
    caption: "Project Showcase with Trainees",
    context: "Corporate Training Program"
  },
  {
    id: "team-group",
    src: "/img/IMG-20241231-WA0067.jpg",
    caption: "Team & Trainee Group Photo",
    context: "Corporate Training Program"
  }
];
