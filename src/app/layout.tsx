import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { Exo_2, Manrope } from "next/font/google";
import AppLayout from "./applayout";
import "./globals.css";

const exo = Exo_2({
  subsets: ["latin"],
  variable: "--font-exo",
  weight: ["400", "600", "700"],
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  weight: ["300", "400", "600", "700"],
});

export const metadata: Metadata = {
  title: "Jordan Williams - Software Developer & Multi-Media Artist",
  description:
    "A showcase of my work and projects as a software developer and multi-media artist.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${manrope.variable} ${exo.variable} antialiased bg-gray-900 text-white min-h-screen flex flex-col relative`}
      >
        <AppLayout>{children}</AppLayout>
        <Analytics />
      </body>
    </html>
  );
}
