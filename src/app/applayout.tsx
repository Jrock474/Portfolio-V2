"use client";
import Header from "./header";
import Footer from "./footer";
import { createTheme, ThemeProvider } from "@mui/material";

export default function AppLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const theme = createTheme();

  return (
    <>
      <ThemeProvider theme={theme}>
        <Header />
        {children}
        <Footer />
      </ThemeProvider>
    </>
  );
}
