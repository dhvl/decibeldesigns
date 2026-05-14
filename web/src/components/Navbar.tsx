"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, FileDown } from "lucide-react";
import BrochureModal from "./BrochureModal";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isBrochureOpen, setIsBrochureOpen] = useState(false);

  const services = [
    { name: "Residential Theatres", href: "/services/residential-theatres" },
    { name: "Studio Isolation", href: "/services/studio-isolation" },
    { name: "Corporate Privacy", href: "/services/corporate-privacy" },
    { name: "Culinary Ambiance", href: "/services/culinary-ambiance" },
    { name: "Great Halls", href: "/services/great-halls" },
    { name: "Hospitality Sanctuaries", href: "/services/hospitality-sanctuaries" },
  ];

  const navLinks = [
    { name: "Portfolio", href: "/portfolio" },
    { name: "Gallery", href: "/gallery" },
  ];

  const closeMenu = () => {
    setIsOpen(false);
    setIsServicesOpen(false);
  };

  const [isServicesOpen, setIsServicesOpen] = useState(false);

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

          {/* Services Dropdown */}
          <div 
            className="relative group"
            onMouseEnter={() => setIsServicesOpen(true)}
            onMouseLeave={() => setIsServicesOpen(false)}
          >
            <Link
              href="/services"
              className={cn(
                "font-headline tracking-tight text-sm uppercase transition-colors flex items-center gap-1",
                pathname.startsWith("/services")
                  ? "text-primary font-bold border-b-2 border-primary pb-1"
                  : "text-on-surface-variant hover:text-primary"
              )}
            >
              Services
              <span className="material-symbols-outlined text-sm">expand_more</span>
            </Link>

            <AnimatePresence>
              {isServicesOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute left-0 mt-2 w-64 bg-surface-container-high border border-outline-variant/10 shadow-2xl rounded-sm p-4 z-[60]"
                >
                  <div className="flex flex-col gap-2">
                    {services.map((service) => (
                      <Link
                        key={service.href}
                        href={service.href}
                        onClick={() => setIsServicesOpen(false)}
                        className="text-xs font-headline uppercase tracking-widest text-on-surface-variant hover:text-primary hover:bg-white/5 px-4 py-2 rounded-sm transition-all"
                      >
                        {service.name}
                      </Link>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

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
          <button 
            onClick={() => setIsBrochureOpen(true)}
            className="flex items-center gap-2 text-on-surface-variant hover:text-primary transition-colors font-headline text-xs tracking-widest uppercase border border-outline-variant/30 px-4 py-2.5 rounded-sm"
          >
            <FileDown size={16} />
            Brochure
          </button>
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
              <div className="flex flex-col gap-2">
                <Link 
                  href="/services" 
                  onClick={closeMenu}
                  className={cn(
                    "font-headline tracking-[0.2em] text-xs uppercase px-4 py-3 rounded-sm transition-colors",
                    pathname === "/services" 
                      ? "bg-primary/10 text-primary border-l-2 border-primary" 
                      : "text-on-surface-variant hover:bg-white/5"
                  )}
                >
                  All Services
                </Link>
                <div className="flex flex-col gap-1 pl-6">
                  {services.map((service) => (
                    <Link
                      key={service.href}
                      href={service.href}
                      onClick={closeMenu}
                      className={cn(
                        "font-headline tracking-[0.2em] text-[10px] uppercase px-4 py-2 rounded-sm transition-colors",
                        pathname === service.href
                          ? "text-primary"
                          : "text-on-surface-variant/60 hover:text-primary hover:bg-white/5"
                      )}
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              </div>
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
              <button 
                onClick={() => {
                  closeMenu();
                  setIsBrochureOpen(true);
                }}
                className="flex items-center justify-center gap-3 text-primary font-headline text-xs tracking-widest uppercase px-6 py-4 rounded-sm border border-primary/20 bg-primary/5 active:scale-95 transition-all"
              >
                <FileDown size={18} />
                Download Brochure
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <BrochureModal 
        isOpen={isBrochureOpen} 
        onClose={() => setIsBrochureOpen(false)} 
      />
    </nav>
  );
}
