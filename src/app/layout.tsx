import type { Metadata } from "next";
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
  title: "Krishanu Kaundilya | Founder @ CoreDhristi | AI Agent & Automation Developer",
  description: "Personal portfolio of Krishanu Kaundilya — Founder @ CoreDhristi, AI Agent & Automation Developer, Cybersecurity Specialist. Building Trust Infrastructure for the AI Agent Economy.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}
      suppressHydrationWarning
    >
      <body
        className="min-h-full flex flex-col bg-canvas text-text-primary"
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
