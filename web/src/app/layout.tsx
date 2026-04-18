import type { Metadata } from "next";
import { Manrope, Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
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
  title: "DecibelDesigns | Precision in Sound",
  description: "Bespoke acoustic engineering for residential and commercial spaces. Where technical precision meets luxury design.",
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
      </body>
    </html>
  );
}
