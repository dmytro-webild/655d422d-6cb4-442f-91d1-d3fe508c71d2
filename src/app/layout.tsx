import type { Metadata } from "next";
import { Halant } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import "@/lib/gsap-setup";
import { ServiceWrapper } from "@/components/ServiceWrapper";
import Tag from "@/tag/Tag";
import { getVisualEditScript } from "@/utils/visual-edit-script";
import { Libre_Baskerville } from "next/font/google";



export const metadata: Metadata = {
  title: 'Mallow | London\'s Refined Plant-Based Dining',
  description: 'Experience ultra-luxury plant-based cuisine at Mallow in Borough Market, London. Reserve your table for an unforgettable seasonal dining journey.',
  keywords: ["Mallow, plant-based restaurant, luxury dining London, Borough Market, fine dining, vegan restaurant, Michelin star, sustainable cuisine, London restaurants"],
  openGraph: {
    "title": "Mallow | London's Refined Plant-Based Dining",
    "description": "Experience ultra-luxury plant-based cuisine at Mallow in Borough Market, London. Reserve your table for an unforgettable seasonal dining journey.",
    "url": "https://www.mallow.london",
    "siteName": "Mallow",
    "images": [
      {
        "url": "http://img.b2bpic.net/free-photo/hand-plate-with-fish-cooked-fish-juicy-fish-plate-delicacy-seafood-lovers_639032-339.jpg",
        "alt": "Elegant fine dining setting at Mallow"
      }
    ],
    "type": "website"
  },
  twitter: {
    "card": "summary_large_image",
    "title": "Mallow | London's Refined Plant-Based Dining",
    "description": "Experience ultra-luxury plant-based cuisine at Mallow in Borough Market, London. Reserve your table for an unforgettable seasonal dining journey.",
    "images": [
      "http://img.b2bpic.net/free-photo/hand-plate-with-fish-cooked-fish-juicy-fish-plate-delicacy-seafood-lovers_639032-339.jpg"
    ]
  },
  robots: {
    "index": true,
    "follow": true
  },
};

const libreBaskerville = Libre_Baskerville({
  variable: "--font-libre-baskerville",
  subsets: ["latin"],
  weight: ["400", "700"],
});
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ServiceWrapper>
        <body className={`${libreBaskerville.variable} ${inter.variable} antialiased`}>
          <Tag />
          {children}
          <script
              dangerouslySetInnerHTML={{
                  __html: `${getVisualEditScript()}`
              }}
          />
        </body>
      </ServiceWrapper>
    </html>
  );
}
