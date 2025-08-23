import type { Metadata } from "next";
import { Geist, Geist_Mono, Tiny5 } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const tiny5 = Tiny5({
  weight: "400",
  variable: "--font-tiny5",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Eliza Foundation",
  description:
    "Accelerating the growth of applications built on the Eliza Framework.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${tiny5.variable} antialiased overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
