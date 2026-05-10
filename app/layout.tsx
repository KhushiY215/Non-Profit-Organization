
import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "Horizons — Nonprofit for Global Impact",
    template: "%s | Horizons",
  },
  description:
    "Horizons is a global nonprofit building sustainable programs in clean water, education, food security, and climate resilience for communities worldwide.",
  keywords: ["nonprofit", "global impact", "donation", "charity", "social impact"],
  openGraph: {
    title: "Horizons — Nonprofit for Global Impact",
    description: "Building sustainable programs for communities worldwide.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,600&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;1,9..40,400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="grain">
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
