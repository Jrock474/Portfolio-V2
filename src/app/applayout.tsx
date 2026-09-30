"use client";
import Header from "./components/header";
import Footer from "./components/footer";
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
