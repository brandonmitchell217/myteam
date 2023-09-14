"use client";
import Nav from "@/components/Nav";
import "./globals.css";
import type { Metadata } from "next";
import { Livvic } from "next/font/google";
import { ThemeProvider } from "styled-components";
import Footer from "@/components/Footer";

const livvic = Livvic({ weight: ["400", "700"], subsets: ["latin-ext"] });

// export const metadata: Metadata = {
//   title: "MyTeam Multipage",
//   description: "Design by Frontend Mentor",
// };

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
    // => @media (min-width: 640px) { ... }

    md: "768px",
    // => @media (min-width: 768px) { ... }

    lg: "1024px",
    // => @media (min-width: 1024px) { ... }

    xl: "1280px",
    // => @media (min-width: 1280px) { ... }

    xl2: "1536px",
    // => @media (min-width: 1536px) { ... }
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
      <body
        className={`bg-sherpa text-white grid grid-rows-[minmax(7.5rem,auto)_auto_minmax(12.5rem,auto)] desktop:grid-rows-[minmax(auto,7.5rem)_auto_minmax(auto,12.5rem)] ${livvic.className}`}
      >
        <ThemeProvider theme={theme}>
          <Nav />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
