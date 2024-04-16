import type { Metadata, Viewport } from "next";
import { Playball, Podkova } from "next/font/google";
import { ToastProvider } from "../../providers/toast-provider";

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
import Footer from "@/components/footer";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false
};

export const metadata: Metadata = {
  title: "Flourishing Flowers",
  description: "Shop for beautiful flowers for any occasion",
  category: 'Flowers & Plants',
  authors: [{ name: "Robert", url: "https://robert-chapman.vercel.app" }],
  generator: 'Next.js',
  applicationName: 'Flourishing Flowers',
  referrer: 'origin-when-cross-origin',
  keywords: ['Flowers', 'Shopping', 'Bouquet', 'Rose'],
  creator: 'Robert Chapman',
  publisher: 'Robert Chapman',
  formatDetection: {
    address: false,
    date: false,
    email: false,
    telephone: false,
    url: false,
  },
  icons: {
    icon: '/florist.png'
  },
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
        <ToastProvider />
        {children}
        <Footer />
      </body>
    </html>
  );
}
