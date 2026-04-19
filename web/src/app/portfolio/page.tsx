import Image from "next/image";
import Link from "next/link";

export default function PortfolioPage() {
  const portfolioItems = [
    {
      title: "The Grand Resort Auditorium",
      category: "Institutional",
      year: "2024",
      desc: "A masterclass in spatial acoustics, featuring adaptive reverberation controls and bespoke copper diffusion panels.",
      image: "/media/portfolio/grand-resort.jpg",
      size: "large"
    },
    {
      title: "Bel-Air Private Cinema",
      category: "Residential",
      year: "2023",
      desc: "THX Certified Platinum",
      image: "/media/portfolio/bel-air-cinema.jpg",
      size: "small"
    },
    {
      title: "Onyx Recording Studios",
      category: "Professional",
      year: "2024",
      desc: "Zero-noise floor architecture for multi-platinum production.",
      image: "/media/portfolio/onyx-studios.jpg",
      size: "medium"
    }
  ];

  return (
    <main className="pt-32 pb-24 px-6 md:px-12 max-w-7xl mx-auto">
      {/* Hero Header */}
      <header className="mb-20 text-center md:text-left">
        <div className="inline-block mb-4 px-3 py-1 bg-surface-container-high rounded-sm text-secondary text-xs tracking-widest uppercase font-headline">
          Curated Experiences
        </div>
        <h1 className="text-5xl md:text-7xl font-headline font-extrabold text-on-surface leading-tight">
          Sculpting Sonic <br/>
          <span className="font-accent italic text-primary">Atmospheres</span>
        </h1>
        <p className="mt-6 text-on-surface-variant max-w-2xl text-lg leading-relaxed">
          Explore our portfolio of high-precision acoustic environments where technical excellence meets uncompromising luxury.
        </p>
      </header>

      {/* Portfolio Grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        {portfolioItems.map((item, i) => (
          <div 
            key={i} 
            className={`${
              item.size === 'large' ? 'md:col-span-8' : 
              item.size === 'medium' ? 'md:col-span-5' : 'md:col-span-4'
            } group relative overflow-hidden bg-surface-container-low rounded-lg h-[600px] border border-outline-variant/15`}
          >
            <Image 
              src={item.image} 
              alt={item.title} 
              fill
              className="absolute inset-0 w-full h-full object-cover grayscale-0 group-hover:grayscale transition-all duration-700"
            />
            <div className="noir-gradient-overlay absolute inset-0"></div>
            <div className="absolute bottom-0 left-0 p-10 w-full">
              <span className="text-secondary text-xs font-headline tracking-[0.2em] uppercase mb-4 block">
                {item.category} • {item.year}
              </span>
              <h3 className="text-4xl font-headline font-bold mb-2">
                {item.title.split(' ')[0]} <span className="font-accent italic text-primary">{item.title.split(' ').slice(1).join(' ')}</span>
              </h3>
              <p className="text-on-surface-variant max-w-md mb-6">{item.desc}</p>
              <div className="flex items-center gap-2 text-primary font-semibold cursor-pointer group/link">
                <span>View Case Study</span>
                <span className="material-symbols-outlined text-sm group-hover/link:translate-x-1 transition-transform">arrow_forward</span>
              </div>
            </div>
          </div>
        ))}

        {/* Technical Detail Card */}
        <div className="md:col-span-7 bg-surface-container-high rounded-lg p-12 flex flex-col justify-center border border-outline-variant/15 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-8 opacity-10">
            <span className="material-symbols-outlined text-[12rem]">graphic_eq</span>
          </div>
          <h4 className="text-xs font-headline tracking-[0.3em] uppercase text-primary mb-6">Technical precision</h4>
          <h3 className="text-4xl font-headline font-extrabold mb-6 max-w-lg leading-tight">
            Where <span className="font-accent italic text-secondary">Mathematics</span> meets the Art of Sound.
          </h3>
          <div className="grid grid-cols-2 gap-8 mt-4">
            <div>
              <div className="text-3xl font-headline font-bold text-primary mb-1">0.2s</div>
              <div className="text-on-surface-variant text-xs font-headline tracking-widest uppercase">Decay Accuracy</div>
            </div>
            <div>
              <div className="text-3xl font-headline font-bold text-primary mb-1">115dB</div>
              <div className="text-on-surface-variant text-xs font-headline tracking-widest uppercase">Dynamic Range</div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
