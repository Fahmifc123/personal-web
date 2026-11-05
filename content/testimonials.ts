export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  organization?: string;
  context: string;
};

// Filled in by Fahmi once participant/client quotes and name-use permission are collected.
// Do not add placeholder or invented quotes here — the section renders only when non-empty.
export const testimonials: Testimonial[] = [];
