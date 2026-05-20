import type { Metadata } from "next";
import { Cormorant_Garamond, Source_Sans_3 } from "next/font/google";
import "./globals.css";
import {
  createLocalBusinessJsonLd,
  createMovingCompanyJsonLd,
  createPersonJsonLd,
  createWebSiteJsonLd,
} from "@/lib/structured-data";

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
  title: "Central Lakes Removals | Moving Led by Russell Brown — Cromwell",
  description: "5.0 rated across 103 Google reviews. Moving services personally led by Russell Brown — based in Cromwell, serving Central Otago and the South Island. 12,000+ relocations. Every move assessed and planned before the truck arrives.",
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
    "Russell Brown",
    "owner led",
    "moving specialist Cromwell"
  ],
  authors: [{ name: "Central Lakes Removals" }],
  openGraph: {
    title: "Central Lakes Removals | Moving Led by Russell Brown — Cromwell",
    description: "5.0 rated across 103 Google reviews. Personally led by Russell Brown. Based in Cromwell, serving Central Otago and the South Island. Every move planned before the truck arrives.",
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
    createWebSiteJsonLd(),
  ];

  return (
    <html lang="en" className={`${headingFont.variable} ${bodyFont.variable}`}>
      <body className="min-h-full flex flex-col antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
