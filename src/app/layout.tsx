import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { Exo_2, Manrope } from "next/font/google";
import { createTheme, ThemeProvider } from "@mui/material";
import Header from "./components/header";
import Footer from "./components/footer";
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
  title: "Jordan Williams | Software Developer",
  description:
    "Software developer specializing in React, TypeScript, Next.js, React Native, Node.js, and modern web and mobile applications.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const theme = createTheme();

  return (
    <html lang="en">
      <body
        className={`${manrope.variable} ${exo.variable} antialiased bg-gray-900 text-white min-h-screen flex flex-col relative`}
      >
        <ThemeProvider theme={theme}>
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
