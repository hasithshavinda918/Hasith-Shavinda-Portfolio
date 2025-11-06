import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Hasith Shavinda | Portfolio",
  description:
    "Software Engineering Undergraduate • MERN Stack Specialist • React.js & Node.js • Based in Matara, Sri Lanka",
  openGraph: {
    title: "Hasith Shavinda | Portfolio",
    description:
      "Software Engineering Undergraduate • MERN Stack Specialist • React.js & Node.js • Based in Matara, Sri Lanka",
    url: "https://example.com",
    siteName: "Hasith Shavinda Portfolio",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head></head>
      <body className={`${poppins.variable} font-sans antialiased`}>{children}</body>
    </html>
  );
}
