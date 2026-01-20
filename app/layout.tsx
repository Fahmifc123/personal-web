import "./globals.css";
import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ThemeProvider } from "@/components/theme-provider";

export const metadata: Metadata = {
  title: "Muhammad Fahmi – Head of Data Scientist & AI Mentor",
  description:
    "Portfolio Muhammad Fahmi – Head of Data Scientist at NoLimit Indonesia, AI & NLP Engineer, and Mentor Data Science.",
  openGraph: {
    title: "Muhammad Fahmi – Head of Data Scientist & AI Mentor",
    description:
      "Portfolio Muhammad Fahmi – Head of Data Scientist at NoLimit Indonesia, AI & NLP Engineer, and Mentor Data Science.",
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
