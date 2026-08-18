import type { CSSProperties, ReactNode } from "react";
import type { Metadata } from "next";
import { Fraunces, IBM_Plex_Mono, Outfit } from "next/font/google";
import { Footer } from "@/components/Footer";
import { JsonLd } from "@/components/JsonLd";
import { Nav } from "@/components/Nav";
import { basePath, profile, siteUrl, withBase } from "@/content/profile";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  style: ["normal", "italic"],
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-plex",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: profile.seo.title,
    template: `%s — ${profile.name}`,
  },
  description: profile.seo.description,
  keywords: [...profile.seo.keywords],
  authors: [{ name: profile.name, url: profile.linkedin }],
  creator: profile.name,
  publisher: profile.name,
  category: "technology",
  applicationName: `${profile.name} Portfolio`,
  referrer: "origin-when-cross-origin",
  formatDetection: {
    email: true,
    telephone: true,
    address: false,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title: profile.seo.title,
    description: profile.seo.description,
    url: siteUrl,
    siteName: `${profile.name} — ${profile.role}`,
    locale: "en_IN",
    type: "profile",
    firstName: "Amir",
    lastName: "Khan",
    emails: [profile.email],
    phoneNumbers: profile.phones.map((phone) => `+91${phone}`),
    images: [
      {
        url: withBase(profile.photo),
        alt: `${profile.name}, ${profile.role}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: profile.seo.title,
    description: profile.seo.description,
    images: [withBase(profile.photo)],
  },
  icons: {
    icon: [{ url: withBase("/ak-logo.png"), type: "image/png" }],
    apple: [{ url: withBase("/ak-logo.png") }],
  },
  alternates: {
    canonical: "/",
  },
  other: {
    "geo.region": "IN-MH",
    "geo.placename": "Mumbai",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en-IN">
      <body
        className={`${outfit.variable} ${fraunces.variable} ${plexMono.variable} bg-background font-sans text-foreground antialiased`}
        style={
          {
            "--ecommerce-icons": `url("${basePath}/ecommerce-icons.svg")`,
          } as CSSProperties
        }
      >
        <JsonLd />
        <Nav />
        <div className="relative z-10">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
