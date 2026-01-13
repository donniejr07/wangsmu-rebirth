import type { Metadata } from "next";
import "./globals.css";
import PageTransition from "@/components/page-transition";
import SmoothScroll from "@/components/smooth-scroll";
import ScrollToTop from "@/components/scroll-to-top";
import { LanguageProvider } from "@/context/language-context";

export const metadata: Metadata = {
  title: "PT. Wang Sarimulti Utama - One Stop Solution Provider",
  description: "Manufacturing solutions including tooling, die casting, plastic injection molding, and complete assembly processes. Serving automotive industry for over 25 years.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <LanguageProvider>
          <SmoothScroll>
            <ScrollToTop />
            <PageTransition>
              {children}
            </PageTransition>
          </SmoothScroll>
        </LanguageProvider>
      </body>
    </html>
  );
}
