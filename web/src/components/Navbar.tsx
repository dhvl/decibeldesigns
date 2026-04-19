"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Services", href: "/services" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Gallery", href: "/gallery" },
  ];

  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-surface-container-lowest/80 backdrop-blur-xl border-b border-outline-variant/10 shadow-[0_20px_40px_rgba(0,0,0,0.4)]">
      <div className="flex justify-between items-center px-6 md:px-8 py-4 max-w-7xl mx-auto w-full">
        <Link 
          href="/" 
          className="flex items-center"
          onClick={closeMenu}
        >
          <img 
            src="/media/logos/DD Logo White.svg" 
            alt="DecibelDesigns" 
            className="h-10 md:h-12 w-auto object-contain"
          />
        </Link>
        
        {/* Desktop Links */}
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
          <Link 
            href="/contact"
            className="bg-secondary-container text-primary font-headline text-xs tracking-widest uppercase px-6 py-2.5 rounded-sm hover:scale-95 active:scale-90 transition-all duration-300 shadow-lg shadow-secondary/10"
          >
            Request Consultation
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <button 
          className="md:hidden text-primary p-2 transition-transform active:scale-90"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden bg-surface-container-low border-b border-outline-variant/10 overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-6">
              <Link 
                href="/" 
                onClick={closeMenu}
                className={cn(
                  "font-headline tracking-[0.2em] text-xs uppercase px-4 py-3 rounded-sm transition-colors",
                  pathname === "/" 
                    ? "bg-primary/10 text-primary border-l-2 border-primary" 
                    : "text-on-surface-variant hover:bg-white/5"
                )}
              >
                Home
              </Link>
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={closeMenu}
                  className={cn(
                    "font-headline tracking-[0.2em] text-xs uppercase px-4 py-3 rounded-sm transition-colors",
                    pathname === link.href
                      ? "bg-primary/10 text-primary border-l-2 border-primary"
                      : "text-on-surface-variant hover:bg-white/5"
                  )}
                >
                  {link.name}
                </Link>
              ))}
              <Link 
                href="/contact"
                onClick={closeMenu}
                className="bg-secondary-container text-primary font-headline text-xs tracking-widest uppercase px-6 py-4 rounded-sm text-center mt-4 active:scale-95 transition-all"
              >
                Request Consultation
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
