import Image from "next/image";
import Link from "next/link";

export default function ServicesPage() {
  return (
    <main className="pt-32 pb-24 px-6 md:px-12 max-w-7xl mx-auto">
      {/* Hero Header */}
      <header className="mb-24 flex flex-col md:flex-row items-end justify-between gap-12">
        <div className="max-w-2xl">
          <span className="font-headline text-secondary tracking-[0.3em] uppercase text-xs mb-4 block">Engineered Environments</span>
          <h1 className="text-5xl md:text-7xl font-headline font-bold leading-tight text-on-surface">
            Acoustic <i className="font-accent italic font-normal text-primary">Design Solutions</i> in New <i className="font-accent italic font-normal text-primary">Delhi</i>
          </h1>
        </div>
        <div className="text-on-surface-variant font-body max-w-xs text-sm leading-relaxed border-l border-outline-variant/30 pl-6 mb-2">
          We transform physical space into sonic art. From private residences to world-class studios, our technical atelier crafts soundscapes with surgical accuracy.
        </div>
      </header>

      {/* Bento Grid Services */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
        {/* 1. Residential: High-End Home Theatre */}
        <div className="md:col-span-8 group relative overflow-hidden rounded-lg bg-surface-container-low border border-white/5 transition-all duration-500 hover:shadow-[0_40px_80px_-20px_rgba(239,171,34,0.1)]">
          <div className="aspect-[16/9] relative">
            <Image 
              src="/media/portfolio/bel-air-cinema.jpg" 
              alt="Luxury home theater" 
              fill
              className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-60 transition-opacity duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent"></div>
          </div>
          <div className="absolute bottom-0 left-0 p-10 w-full">
            <div className="flex items-center gap-3 mb-4">
              <span className="material-symbols-outlined text-primary">theaters</span>
              <h2 className="text-3xl font-headline font-bold">Residential <i className="font-accent italic font-normal text-secondary">Theatres</i></h2>
            </div>
            <p className="text-on-surface-variant max-w-lg mb-8 leading-relaxed">
              Bespoke private cinemas where architectural beauty meets reference-level acoustic accuracy. We decouple environments to ensure zero-noise intrusion.
            </p>
            <div className="flex flex-wrap gap-4">
              <span className="px-4 py-1.5 bg-surface-container-highest text-secondary text-[10px] uppercase tracking-widest rounded-full">Floating Shells</span>
              <span className="px-4 py-1.5 bg-surface-container-highest text-secondary text-[10px] uppercase tracking-widest rounded-full">Modal Analysis</span>
            </div>
          </div>
        </div>

        {/* 2. Recording Studios */}
        <div className="md:col-span-4 noir-gradient rounded-lg p-10 flex flex-col justify-center relative overflow-hidden border border-white/5">
          <span className="material-symbols-outlined text-primary text-5xl mb-6">mic_external_on</span>
          <h2 className="text-3xl font-headline font-bold text-white mb-4">Studio <i className="font-accent italic font-normal text-primary">Isolation</i></h2>
          <p className="text-white/60 text-sm leading-relaxed mb-8">
            Mastering-grade isolation and frequency control for world-class production environments.
          </p>
          <ul className="space-y-3 text-[10px] font-headline text-white/40 uppercase tracking-widest">
            <li className="flex items-center gap-2 font-bold text-white/80"><span className="w-1.5 h-1.5 bg-primary rounded-full"></span> Zero Noise Floor</li>
            <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-primary rounded-full"></span> Diffuser Arrays</li>
          </ul>
        </div>

        {/* 3. Corporate Spaces */}
        <div className="md:col-span-4 bg-surface-container-high rounded-lg p-10 border border-white/5 group hover:bg-surface-container-highest transition-colors">
          <span className="material-symbols-outlined text-primary mb-6 block text-4xl">corporate_fare</span>
          <h2 className="text-2xl font-headline font-bold mb-4">Corporate <i className="font-accent italic font-normal text-secondary">Privacy</i></h2>
          <p className="text-on-surface-variant text-sm leading-relaxed mb-6">
            Optimizing speech intelligibility and acoustic privacy for conference rooms and open offices.
          </p>
          <div className="text-[10px] font-headline text-outline uppercase tracking-widest border-t border-outline-variant/10 pt-4">
            Acoustic Privacy Index: <span className="text-secondary ml-2">99.8%</span>
          </div>
        </div>

        {/* 4. Restaurants & Cafes */}
        <div className="md:col-span-4 bg-surface-container-low rounded-lg p-10 border border-white/5 flex flex-col justify-between">
          <div>
            <span className="material-symbols-outlined text-primary mb-6 block text-4xl">restaurant</span>
            <h2 className="text-2xl font-headline font-bold mb-4">Culinary <i className="font-accent italic font-normal text-secondary">Ambiance</i></h2>
            <p className="text-on-surface-variant text-sm leading-relaxed">
              Engineering the perfect noise floor for restaurants so conversations remain intimate while music feels alive.
            </p>
          </div>
          <div className="mt-8">
            <span className="text-[10px] font-headline text-secondary tracking-widest uppercase">Decibel Control System</span>
          </div>
        </div>

        {/* 5. Auditoriums & Venues */}
        <div className="md:col-span-4 bg-secondary-container/10 rounded-lg p-10 border border-secondary/10 flex flex-col justify-center">
          <span className="material-symbols-outlined text-secondary mb-6 block text-4xl">meeting_room</span>
          <h2 className="text-2xl font-headline font-bold mb-4">Great <i className="font-accent italic font-normal text-primary">Halls</i></h2>
          <p className="text-on-surface-variant text-sm leading-relaxed">
            Large-scale acoustic modeling for performance venues and commercial auditoriums.
          </p>
        </div>

        {/* 6. Luxury Hospitality */}
        <div className="md:col-span-12 group relative overflow-hidden rounded-lg bg-surface-container-lowest border border-white/5 h-80">
          <Image 
            src="/media/portfolio/grand-resort.jpg" 
            alt="Hospitality soundscape" 
            fill
            className="absolute inset-0 w-full h-full object-cover opacity-20 group-hover:opacity-40 transition-opacity duration-700"
          />
          <div className="relative z-10 p-12 h-full flex flex-col justify-center">
            <h2 className="text-4xl font-headline font-bold mb-4">Hospitality <i className="font-accent italic font-normal text-secondary">Sanctuaries</i></h2>
            <p className="text-on-surface-variant max-w-2xl leading-relaxed">
              Curating high-end soundscapes for luxury resorts and spas through architectural serenity and passive noise control technologies.
            </p>
          </div>
        </div>
      </div>
      {/* Client Call to Action */}
      <section className="mt-32 py-20 border-t border-outline-variant/10 text-center">
        <h2 className="text-3xl md:text-5xl font-headline font-bold mb-8">
          Ready to <i className="font-accent italic font-normal text-primary">Transform</i> Your Space?
        </h2>
        <p className="text-on-surface-variant max-w-xl mx-auto mb-12 leading-relaxed">
          Wherever sound quality matters, we provide customized acoustic solutions to enhance clarity, control noise, and create the perfect listening environment.
        </p>
        <Link 
          href="/contact"
          className="copper-gold-gradient px-12 py-5 text-background font-headline font-bold uppercase tracking-widest text-sm rounded-sm hover:shadow-[0_0_40px_rgba(239,171,34,0.4)] transition-all inline-block"
        >
          Contact our Acoustic Experts
        </Link>
      </section>
    </main>
  );
}
