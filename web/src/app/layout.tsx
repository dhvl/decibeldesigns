import type { Metadata } from "next";
import { Manrope, Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const manrope = Manrope({ 
  subsets: ["latin"], 
  variable: "--font-manrope",
  weight: ["400", "700", "800"]
});

const inter = Inter({ 
  subsets: ["latin"], 
  variable: "--font-inter",
  weight: ["300", "400", "500", "600"]
});

const playfair = Playfair_Display({ 
  subsets: ["latin"], 
  style: ["italic", "normal"],
  variable: "--font-playfair",
  weight: ["400", "500", "600", "700"]
});

export const metadata: Metadata = {
  title: {
    default: "DecibelDesigns | Premium Acoustic Design Solutions in New Delhi",
    template: "%s | DecibelDesigns"
  },
  description: "Specializing in professional Acoustic Design Solutions and Home Theatre setups in New Delhi. We transform spaces with surgical sonic precision for residential and commercial environments.",
  openGraph: {
    title: "DecibelDesigns | Premium Acoustic Design Solutions",
    description: "Professional acoustic engineering and Home Theatre setups in New Delhi.",
    url: "https://decibeldesigns.vercel.app",
    siteName: "DecibelDesigns",
    images: [
      {
        url: "/media/home/hero-home-cinema.jpg",
        width: 1200,
        height: 630,
        alt: "DecibelDesigns - Acoustic Excellence",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "DecibelDesigns | Acoustic Engineering",
    description: "Professional acoustic design and home theatre setup services.",
    images: ["/media/home/hero-home-cinema.jpg"],
  },
  icons: {
    icon: "/media/logos/DD Icon.svg",
    apple: "/media/logos/DD Icon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" />
      </head>
      <body className={`${manrope.variable} ${inter.variable} ${playfair.variable} font-body bg-background text-on-surface antialiased selection:bg-primary selection:text-background`}>
        <div className="bg-noise fixed inset-0 pointer-events-none z-0"></div>
        <Navbar />
        <main className="relative z-10">
          {children}
        </main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
