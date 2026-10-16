import type { Metadata, Viewport } from "next";
import "@fontsource-variable/outfit";
import "@fontsource-variable/dm-sans";
import "./globals.css";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
  ),
  title: "Lieos — Independent Game Studio",
  description: site.description,
  applicationName: "Lieos",
  icons: { icon: "/brand/lieos-mark.svg" },
  openGraph: {
    title: "Lieos — Independent Game Studio",
    description: site.description,
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/brand/social-card.png",
        width: 1200,
        height: 630,
        alt: "Lieos — Independent Game Studio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lieos — Independent Game Studio",
    description: site.description,
    images: ["/brand/social-card.png"],
  },
};

export const viewport: Viewport = { themeColor: "#ffffff" };

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
