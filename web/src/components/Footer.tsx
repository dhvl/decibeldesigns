import Link from "next/link";
import { Instagram, Linkedin, Facebook } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-surface-container-lowest w-full border-t border-outline-variant/10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center px-12 py-16 w-full gap-12 md:gap-0">
        {/* Left Column: Logo and Copyright */}
        <div className="flex flex-col gap-4 items-center md:items-start order-1">
          <div className="mb-2">
            <img 
              src="/media/logos/DD Logo White.svg" 
              alt="DecibelDesigns" 
              className="h-16 md:h-20 w-auto opacity-80"
            />
          </div>
          <div className="text-sm font-accent italic text-outline">
            © {new Date().getFullYear()} DecibelDesigns. Precision in sound.
          </div>
        </div>

        {/* Center Column: Contact Info */}
        <div className="flex flex-col items-center justify-center order-3 md:order-2">
          <div className="flex flex-col md:flex-row items-center gap-6 md:gap-10 text-[10px] font-headline tracking-[0.2em] text-on-surface-variant/60 uppercase">
            <a href={`mailto:${process.env.NEXT_PUBLIC_CONTACT_EMAIL || "sales@decibeldesigns.in"}`} className="hover:text-primary transition-colors flex items-center gap-2">
              <span className="material-symbols-outlined text-sm">mail</span>
              {process.env.NEXT_PUBLIC_CONTACT_EMAIL || "sales@decibeldesigns.in"}
            </a>
            <a href={`https://wa.me/${(process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "+919873506507").replace(/\+/g, "")}`} className="hover:text-primary transition-colors flex items-center gap-2">
              <span className="material-symbols-outlined text-sm">call</span>
              {process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "+91 9873 506 507"}
            </a>
          </div>
        </div>

        {/* Right Column: Socials and Links */}
        <div className="flex flex-col items-center md:items-end gap-8 order-2 md:order-3">
          <div className="flex gap-8">
            <a 
              href={process.env.NEXT_PUBLIC_INSTAGRAM_URL || "#"} 
              target="_blank"
              rel="noopener noreferrer"
              className="text-on-surface-variant hover:text-primary transition-all opacity-70 hover:opacity-100"
            >
              <Instagram size={20} />
            </a>
            <a 
              href={process.env.NEXT_PUBLIC_LINKEDIN_URL || "#"} 
              target="_blank"
              rel="noopener noreferrer"
              className="text-on-surface-variant hover:text-primary transition-all opacity-70 hover:opacity-100"
            >
              <Linkedin size={20} />
            </a>
            <a 
              href={process.env.NEXT_PUBLIC_FACEBOOK_URL || "#"} 
              target="_blank"
              rel="noopener noreferrer"
              className="text-on-surface-variant hover:text-primary transition-all opacity-70 hover:opacity-100"
            >
              <Facebook size={20} />
            </a>
          </div>
          <div className="flex gap-8">
            <Link 
              href="/contact" 
              className="text-[10px] font-headline uppercase tracking-[0.2em] text-on-surface-variant hover:text-primary transition-colors"
            >
              Contact
            </Link>
            <Link 
              href="/privacy" 
              className="text-[10px] font-headline uppercase tracking-[0.2em] text-on-surface-variant hover:text-primary transition-colors"
            >
              Privacy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
