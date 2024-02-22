"use client";
import { mountContexts } from "@/context/contexts";
import { GlobalContext } from "@/context/global-context";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <GlobalContext.Provider value={mountContexts()}>
      <html lang="en">
        <body className={inter.className}>{children}</body>
      </html>
    </GlobalContext.Provider>
  );
}
