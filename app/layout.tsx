"use client";

import { useEffect } from "react";

import "./css/style.css";

import { Inter } from "next/font/google";
import { Theme } from "./ThemeProvider";

import AOS from "aos";
import "aos/dist/aos.css";

import { Header } from "@/components/ui/Header";
import { Footer } from "@/components/ui/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    AOS.init({
      once: true,
      disable: "phone",
      duration: 600,
      easing: "ease-out-sine",
    });
  });

  return (
    <html lang="en" suppressHydrationWarning>
      {/* suppressHydrationWarning: https://github.com/vercel/next.js/issues/44343 */}
      <body
        className={`${inter.variable} bg-white font-inter tracking-tight text-gray-900 antialiased dark:bg-gray-900 dark:text-gray-100`}
      >
        <Theme>
          <div className="flex min-h-screen flex-col overflow-hidden">
            <Header />
            <main className="grow">{children}</main>
            <Footer />
          </div>
        </Theme>
      </body>
    </html>
  );
}
