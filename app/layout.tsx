import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "4D-CUBE — Modular Building System",
  description:
    "4D-CUBE is a modular building platform based on standardized connection points for adaptable structures.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-[#f4f1eb] text-[#161616]">
        <header className="border-b border-black/10 bg-[#f4f1eb] text-[#161616]">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 md:px-12">
            <Link
              href="/"
              className="transition-opacity hover:opacity-50"
              aria-label="4D-CUBE home"
            >
              <Image
                src="/4d-cube-logo.svg"
                alt="4D-CUBE"
                width={132}
                height={44}
                priority
                className="h-auto w-[150px] md:w-[175px]"
              />
            </Link>

            <nav className="hidden items-center gap-8 text-xs font-medium uppercase tracking-[0.12em] text-[#161616] md:flex">
              <Link
                href="/system"
                className="transition-opacity hover:opacity-50"
              >
                System
              </Link>

              <Link
                href="/fittings"
                className="transition-opacity hover:opacity-50"
              >
                Fittings
              </Link>

              <Link
                href="/applications"
                className="transition-opacity hover:opacity-50"
              >
                Applications
              </Link>

              <Link
                href="/about"
                className="transition-opacity hover:opacity-50"
              >
                About
              </Link>

              <Link
                href="/contact"
                className="transition-opacity hover:opacity-50"
              >
                Contact
              </Link>
            </nav>
          </div>
        </header>

        {children}

        <footer className="bg-[#111111] px-6 py-10 text-white md:px-12">
          <div className="mx-auto flex max-w-7xl flex-col gap-6 border-t border-white/15 pt-8 text-sm text-white/50 md:flex-row md:items-center md:justify-between">
            <div className="flex flex-col gap-2">
              <p>© 2026 4D-CUBE</p>

              <a
                href="mailto:contact@4d-cube.com"
                className="transition-opacity hover:opacity-70"
              >
                contact@4d-cube.com
              </a>
            </div>

            <p className="uppercase tracking-[0.2em]">
              Connect. Build. Expand.
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}