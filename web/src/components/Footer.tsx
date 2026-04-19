import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-surface-container-lowest w-full border-t border-outline-variant/10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center px-12 py-16 w-full">
        <div className="flex flex-col gap-4 items-center md:items-start mb-10 md:mb-0">
          <div className="mb-2">
            <img 
              src="/media/logos/DD Logo White.svg" 
              alt="DecibelDesigns" 
              className="h-8 md:h-10 w-auto opacity-80"
            />
          </div>
          <div className="text-sm font-accent italic text-outline">
            © {new Date().getFullYear()} DecibelDesigns. Precision in sound.
          </div>
        </div>

        <div className="flex gap-12 mb-10 md:mb-0">
          <Link 
            href="/contact" 
            className="text-sm font-accent italic text-on-surface-variant hover:text-primary transition-colors"
          >
            Contact
          </Link>
          <a 
            href="#" 
            className="text-sm font-accent italic text-on-surface-variant hover:text-primary transition-colors"
          >
            Technical specs
          </a>
          <a 
            href="#" 
            className="text-sm font-accent italic text-on-surface-variant hover:text-primary transition-colors"
          >
            Privacy
          </a>
        </div>

        <div className="flex gap-6">
          <a 
            href="#" 
            className="text-on-surface-variant hover:text-secondary transition-all opacity-80 hover:opacity-100"
          >
            <span className="material-symbols-outlined">share</span>
          </a>
          <a 
            href="#" 
            className="text-on-surface-variant hover:text-secondary transition-all opacity-80 hover:opacity-100"
          >
            <span className="material-symbols-outlined">equalizer</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
