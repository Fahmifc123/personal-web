import "./globals.css";
import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ThemeProvider } from "@/components/theme-provider";
import { Analytics } from "@vercel/analytics/react";

const SITE_URL = "https://fahmi.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Muhammad Fahmi | Data & AI Corporate Trainer & Mentor – Portfolio",
  description:
    "Portfolio of Muhammad Fahmi, Data & AI corporate trainer and former Head of Data Science. Hands-on training in AI Automation (n8n), Generative AI, NLP, and Data Analytics. 350+ sessions, 7,000+ learners, 20+ companies.",
  keywords: [
    "Muhammad Fahmi",
    "Data & AI Trainer",
    "Corporate Training AI",
    "AI Automation n8n",
    "Generative AI Training",
    "NLP",
    "Data Science Mentor",
    "Data Analytics Training",
    "Indonesia",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: SITE_URL,
    title: "Muhammad Fahmi | Data & AI Corporate Trainer & Mentor",
    description:
      "Hands-on Data & AI training your team can apply at work. 350+ sessions, 7,000+ learners, 20+ companies.",
    images: [
      { url: "/opengraph-image", width: 1200, height: 630, alt: "Muhammad Fahmi – Data & AI Trainer" },
    ],
  },
  twitter: { card: "summary_large_image" },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Muhammad Fahmi",
  jobTitle: "Data & AI Corporate Trainer & Mentor",
  url: SITE_URL,
  address: { "@type": "PostalAddress", addressLocality: "Bandung", addressCountry: "ID" },
  sameAs: ["https://www.linkedin.com/in/muhammad-fahmi17"],
  knowsAbout: [
    "Artificial Intelligence",
    "Generative AI",
    "AI Automation",
    "n8n",
    "Natural Language Processing",
    "Data Science",
    "Data Analytics",
    "Corporate Training",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </head>
      <body className="bg-background text-foreground antialiased selection:bg-primary/30">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1">
              {children}
            </main>
            <Footer />
          </div>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
