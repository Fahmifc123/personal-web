import "./globals.css";
import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ThemeProvider } from "@/components/theme-provider";

export const metadata: Metadata = {
  metadataBase: new URL("https://muhammad-fahmi.vercel.app"), // Fallback if domain is not set
  title: "Muhammad Fahmi – Data & AI Mentor, AI/NLP Engineer, Trainer",
  description:
    "Portfolio Muhammad Fahmi – Data & AI Mentor at Insignia, Lead Trainer at Intelligo ID, former Head of Data Science at NoLimit Indonesia. AI & NLP Engineer with 350+ training sessions delivered.",
  openGraph: {
    title: "Muhammad Fahmi – Data & AI Mentor, AI/NLP Engineer, Trainer",
    description:
      "Portfolio Muhammad Fahmi – Data & AI Mentor at Insignia, Lead Trainer at Intelligo ID, former Head of Data Science at NoLimit Indonesia. AI & NLP Engineer with 350+ training sessions delivered.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" suppressHydrationWarning>
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
      </body>
    </html>
  );
}
