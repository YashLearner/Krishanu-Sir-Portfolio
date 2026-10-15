import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { portfolioData, sectionCopy } from "@/data/portfolioData";
import { ChatbotWidget } from "@/components/chatbot/ChatbotWidget";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: sectionCopy.metadata.title,
  description: sectionCopy.metadata.description,
  authors: [{name:portfolioData.hero.name}],
  openGraph: {title:sectionCopy.metadata.title,description:sectionCopy.metadata.description,type:"profile",locale:"en_IN"},
  twitter: {card:"summary",title:sectionCopy.metadata.title,description:sectionCopy.metadata.description},
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
        <ChatbotWidget/>
      </body>
    </html>
  );
}
