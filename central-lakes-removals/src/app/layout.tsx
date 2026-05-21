import type { Metadata } from "next";
import { Cormorant_Garamond, Source_Sans_3 } from "next/font/google";
import "./globals.css";
import {
  createLocalBusinessJsonLd,
  createMovingCompanyJsonLd,
  createPersonJsonLd,
} from "@/lib/structured-data";
import ScrollAnimationInit from "@/components/ScrollAnimationInit";

const headingFont = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["500", "600"],
  style: ["normal"],
  variable: "--font-heading-next",
  display: "swap",
  preload: true,
});

const bodyFont = Source_Sans_3({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body-next",
  display: "swap",
  preload: false,
});

export const metadata: Metadata = {
  metadataBase: new URL("https://centrallakesremovals.co.nz"),
  title: "Central Lakes Removals | Owner-Led Moving in Cromwell",
  description: "Premium moving services led by Russell Brown. Based in Cromwell, serving Central Otago and the South Island. 12,000+ relocations. 5.0 Google rated.",
  keywords: [
    "moving company",
    "removals",
    "Cromwell",
    "Central Otago",
    "Queenstown",
    "Wanaka",
    "house moving",
    "furniture moving",
    "long distance moving",
    "owner led"
  ],
  authors: [{ name: "Central Lakes Removals" }],
  openGraph: {
    title: "Central Lakes Removals | Owner-Led Moving",
    description: "Premium moving services personally led by Russell Brown. Based in Cromwell, serving Central Otago and the South Island.",
    type: "website",
    locale: "en_NZ",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = [
    createLocalBusinessJsonLd(),
    createMovingCompanyJsonLd(),
    createPersonJsonLd(),
  ];

  return (
    <html lang="en" className={`${headingFont.variable} ${bodyFont.variable}`}>
      <body className="min-h-full flex flex-col antialiased">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[200] focus:bg-[var(--brass-primary)] focus:text-[var(--bg-primary)] focus:px-4 focus:py-2 focus:rounded-md focus:text-sm focus:font-medium"
        >
          Skip to main content
        </a>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
        <ScrollAnimationInit />
      </body>
    </html>
  );
}
