import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import "./globals.css";
import "maplibre-gl/dist/maplibre-gl.css";

import "maplibre-gl/dist/maplibre-gl.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { site } from "@/data/site";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),

  title: {
    default: site.name,
    template: `%s | ${site.name}`,
  },

  description: site.description,

  applicationName: site.name,

  keywords: [
    "Milan apartment",
    "Apartment Milan",
    "Sesto San Giovanni",
    "M1 Red Line",
    "Holiday apartment Milan",
    "Vacation rental Milan",
    "Business travel Milan",
    "Accommodation Milan",
  ],

  authors: [
    {
      name: site.name,
    },
  ],

  creator: site.name,

  publisher: site.name,

  openGraph: {
    type: "website",
    locale: "en_GB",
    url: site.url,
    title: site.name,
    description: site.description,
    siteName: site.name,
  },

  twitter: {
    card: "summary_large_image",
    title: site.name,
    description: site.description,
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-screen flex-col bg-white text-zinc-900">
        <Header />

        <main className="flex-1">{children}</main>

        <Footer />
      </body>
    </html>
  );
}