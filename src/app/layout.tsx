import type { Metadata } from "next";
import { Playball, Podkova } from "next/font/google";

const playball = Playball({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playball",
  weight: "400",
});

const podkova = Podkova({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-podkova",
});

import "./index.css";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Flourishing Flowers",
  description: "Shop for beautiful flowers for any occasion",
  authors: [{ name: "Robert", url: "https://robert-chapman.vercel.app" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${playball.variable} ${podkova.variable}`}>
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
