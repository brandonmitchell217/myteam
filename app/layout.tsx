"use client";
import Nav from "@/components/ui/Nav";
import "./globals.css";

import { Livvic } from "next/font/google";
import { ThemeProvider } from "styled-components";
import Footer from "@/components/ui/Footer";

const livvic = Livvic({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin-ext"],
});

const theme = {
  colors: {
    sherpa: "#014E56",
    flory: "#F67E7E",
    baked: "#79C8C7",
    casul: "#2C6269",
    cyprus: "#004047",
    daintree: "#012F34",
    swamp: "#002529",
  },
  screens: {
    sm: "640px",
    md: "768px",
    lg: "1024px",
    xl: "1280px",
    xl2: "1536px",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </head>
      <body className={`bg-sherpa text-white ${livvic.className}`}>
        <ThemeProvider theme={theme}>
          <Nav />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
