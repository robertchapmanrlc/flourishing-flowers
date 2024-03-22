import type { Metadata } from "next";

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
    <html>
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
