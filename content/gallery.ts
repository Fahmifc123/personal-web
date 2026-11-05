export type GalleryItem = {
  src: string;
  alt: string;
  caption: string;
};

// Real photos from delivered sessions, stored in /public/img.
export const gallery: GalleryItem[] = [
  {
    src: "/img/20241231_082844.jpg",
    alt: "Fahmi presenting an AI framework comparison slide to a corporate training class",
    caption: "AI Framework Workshop — Corporate AI Literacy Program",
  },
  {
    src: "/img/20250115_080808.jpg",
    alt: "Fahmi presenting an AI in Banking session to a corporate class",
    caption: "AI in Banking Session — Corporate Training",
  },
  {
    src: "/img/Dipindai_20250102-0928-41.jpg",
    alt: "Fahmi presenting AI adoption survey data to a corporate class",
    caption: "AI Adoption Deep-Dive — Corporate Training",
  },
  {
    src: "/img/20250115_170349.jpg",
    alt: "Group photo with training participants at the closing session",
    caption: "Closing Session with Participants",
  },
  {
    src: "/img/20250115_170427.jpg",
    alt: "Large group photo of a training cohort",
    caption: "Cohort Group Photo — Corporate Training",
  },
  {
    src: "/img/IMG-20241231-WA0061.jpg",
    alt: "Trainees showcasing a project on a laptop with their trainer",
    caption: "Project Showcase with Trainees",
  },
  {
    src: "/img/IMG-20241231-WA0067.jpg",
    alt: "Large group photo of trainers and trainees",
    caption: "Team & Trainee Group Photo",
  },
];
