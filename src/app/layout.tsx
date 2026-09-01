import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Hasith Karunarathne | Portfolio",
  description:
    "IT Specialist & Full-Stack Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head></head>
      <body className={`${inter.variable} font-sans antialiased bg-black text-white`}>{children}</body>
    </html>
  );
}
