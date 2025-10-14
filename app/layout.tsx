// app/layout.tsx
import type React from "react";
import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Playfair_Display, Meddon } from "next/font/google"; // Import Meddon here
import { Suspense } from "react";
import "./globals.css";
import AuthContextProvider from "@/contexts/AuthContext";

// Meddon font configuration
const meddon = Meddon({
  subsets: ["latin"],
  weight: "400", // Meddon only has a single weight
  variable: "--font-meddon",
});

// Playfair font (optional, can be used for specific headings)
const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "600"],
  style: ["normal", "italic"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: "Ria & Vivek - Wedding Celebrations",
  description: "Wedding celebrations - Our new journey",
  openGraph: {
    title: "Ria & Vivek - Wedding Celebrations",
    description: "Wedding celebrations - Our new journey",
    url: "https://yourdomain.com",
    siteName: "Ria & Vivek Wedding",
    images: [
      {
        url: "/main-picture.jpg",
        width: 1200,
        height: 630,
        alt: "Ria & Vivek Wedding",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ria & Vivek - Wedding Celebrations",
    description: "Wedding celebrations postponed - Our love story",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body
        className={`${GeistSans.variable} ${GeistMono.variable} ${playfair.variable} ${meddon.variable} font-sans`} // Add the meddon font variable here
      >
        <main className="min-h-screen">
          <Suspense
            fallback={
              <div className="flex items-center justify-center h-screen">
                <p className="text-lg font-medium">Loading...</p>
              </div>
            }
          >
            <AuthContextProvider>{children}</AuthContextProvider>
          </Suspense>
        </main>
      </body>
    </html>
  );
}
