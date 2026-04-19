"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export default function Navbar() {
  const pathname = usePathname();

  const navLinks = [
    { name: "Services", href: "/services" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Gallery", href: "/gallery" },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-surface-container-lowest/80 backdrop-blur-xl border-b border-outline-variant/10 shadow-[0_20px_40px_rgba(0,0,0,0.4)]">
      <div className="flex justify-between items-center px-8 py-4 max-w-7xl mx-auto w-full">
        <Link 
          href="/" 
          className="flex items-center"
        >
          <img 
            src="/media/logos/DD Logo White.svg" 
            alt="DecibelDesigns" 
            className="h-10 md:h-12 w-auto object-contain"
          />
        </Link>
        
        <div className="hidden md:flex items-center gap-10">
          <Link 
            href="/" 
            className={cn(
              "font-headline tracking-tight text-sm uppercase transition-colors",
              pathname === "/" 
                ? "text-primary font-bold border-b-2 border-primary pb-1" 
                : "text-on-surface-variant hover:text-primary"
            )}
          >
            Home
          </Link>
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "font-headline tracking-tight text-sm uppercase transition-colors",
                pathname === link.href
                  ? "text-primary font-bold border-b-2 border-primary pb-1"
                  : "text-on-surface-variant hover:text-primary"
              )}
            >
              {link.name}
            </Link>
          ))}
        </div>

        <Link 
          href="/contact"
          className="bg-secondary-container text-primary font-headline text-xs tracking-widest uppercase px-6 py-2.5 rounded-sm hover:scale-95 active:scale-90 transition-all duration-300 shadow-lg shadow-secondary/10"
        >
          Request Consultation
        </Link>
      </div>
    </nav>
  );
}
