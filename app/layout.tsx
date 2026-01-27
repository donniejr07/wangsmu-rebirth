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
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
          integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </head>
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
