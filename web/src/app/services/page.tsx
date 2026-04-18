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
            Acoustic <i className="font-accent italic font-normal text-primary">Precision</i> for Exceptional <i className="font-accent italic font-normal text-primary">Ambience</i>
          </h1>
        </div>
        <div className="text-on-surface-variant font-body max-w-xs text-sm leading-relaxed border-l border-outline-variant/30 pl-6 mb-2">
          We transform physical space into sonic art. From private residences to world-class studios, our technical atelier crafts soundscapes with surgical accuracy.
        </div>
      </header>

      {/* Bento Grid Services */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        {/* Residential: Large Feature */}
        <div className="md:col-span-8 group relative overflow-hidden rounded-lg bg-surface-container-low transition-all duration-500 hover:shadow-[0_40px_80px_-20px_rgba(134,34,23,0.15)]">
          <div className="aspect-[16/9] relative">
            <Image 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuD_e9to2gNQuF7jLKluHHCABRjfFxaFyZFTnArMAihNe_gsq8GHp-U1S13bINZdVN1Ftovh6XYVOsztEA5RDEflXXCY8sjPRM0rJzIgj5Me4JmU-J_vfTzh-Lr2Wn0VtRi3kD-pG22FCWZ497fNMsOI5sveItLAuO1MlYI52ZhC5_Oh5I31Pts4AmH5gjXO8Me8lvnT9NoFyXESYovzWisxnPL68EjTNvbalJpP0uQhxRJXJ0Wx1YHTx4uexPAz5yLIShTvz_zEcA0" 
              alt="Luxury home theater" 
              fill
              className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent"></div>
          </div>
          <div className="absolute bottom-0 left-0 p-10 w-full">
            <div className="flex items-center gap-3 mb-4">
              <span className="material-symbols-outlined text-primary">home_pin</span>
              <h2 className="text-3xl font-headline font-bold">Residential <i className="font-accent italic font-normal text-secondary">Sanctuaries</i></h2>
            </div>
            <p className="text-on-surface-variant max-w-lg mb-8 leading-relaxed">
              Bespoke home theaters and listening rooms designed to disappear, leaving only the purity of the performance. We integrate technical acoustic treatment with high-end interior architecture.
            </p>
            <div className="flex flex-wrap gap-4">
              <span className="px-4 py-1.5 bg-surface-container-highest text-secondary text-[10px] uppercase tracking-widest rounded-full">Decoupled Flooring</span>
              <span className="px-4 py-1.5 bg-surface-container-highest text-secondary text-[10px] uppercase tracking-widest rounded-full">Hidden Bass Traps</span>
            </div>
          </div>
        </div>

        {/* Commercial: Tall Side */}
        <div className="md:col-span-4 bg-surface-container-high rounded-lg p-10 flex flex-col justify-between group ghost-border">
          <div>
            <span className="material-symbols-outlined text-primary mb-6 block text-4xl">business_center</span>
            <h2 className="text-3xl font-headline font-bold mb-4">Commercial <i className="font-accent italic font-normal text-secondary">Performance</i></h2>
            <p className="text-on-surface-variant text-sm leading-relaxed mb-6">
              Optimizing workspace intelligence through sound masking and acoustic zoning. We enhance productivity by engineering privacy.
            </p>
          </div>
          <div className="space-y-4">
            <div className="flex items-center justify-between text-xs font-headline text-outline border-b border-outline-variant/10 pb-2">
              <span>Acoustic Privacy Index</span>
              <span className="text-secondary">98%</span>
            </div>
            <div className="flex items-center justify-between text-xs font-headline text-outline border-b border-outline-variant/10 pb-2">
              <span>Reverb Control</span>
              <span className="text-secondary">0.4s</span>
            </div>
          </div>
        </div>

        {/* Hospitality: Mid Square */}
        <div className="md:col-span-6 bg-surface-container-low rounded-lg overflow-hidden group">
          <div className="p-10">
            <h2 className="text-3xl font-headline font-bold mb-4">Hospitality <i className="font-accent italic font-normal text-secondary">Atmosphere</i></h2>
            <p className="text-on-surface-variant text-sm leading-relaxed mb-8 max-w-md">
              Crafting the sonic identity of luxury hotels and restaurants. We ensure conversations remain intimate while the music feels expansive.
            </p>
            <Link 
              href="/portfolio" 
              className="group/btn flex items-center gap-3 text-primary text-xs font-headline uppercase tracking-widest"
            >
              View Case Studies
              <span className="material-symbols-outlined transition-transform group-hover/btn:translate-x-2">arrow_right_alt</span>
            </Link>
          </div>
          <div className="h-48 relative overflow-hidden">
            <Image 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuArdsVSggTCT9Jr35-OfFTZjihqqRq2HlhEZT457AphflqOWw7ynoxzC8aL_qAgpWoWxww5_KV3JWzuGd2UZBzQ2XRzzE2VxJhSV6m3QG5PEmHOPypy6ZEw3bH720tCXaiZfaJHclT1NHLC6GoUYkQDvWGBvotcDM9LKp0fcsPz3pUAXgKeZF8xdXTjxHE-ORA-KO8K2XMGnpkkGSzc2kVebqt-7G9WrHvkuCt81I3Qrztie6KXiKHC6wNeWEQGafzcGJE_Hvm9PN0" 
              alt="Hotel lounge acoustics" 
              fill
              className="object-cover opacity-40 group-hover:opacity-60 transition-opacity duration-700"
            />
          </div>
        </div>

        {/* Studio: Mid Square with Gradient */}
        <div className="md:col-span-6 noir-gradient rounded-lg p-10 flex flex-col justify-center relative overflow-hidden">
          <div className="absolute -right-20 -top-20 w-64 h-64 bg-primary/10 rounded-full blur-[100px]"></div>
          <div className="relative z-10">
            <span className="material-symbols-outlined text-white text-5xl mb-6">graphic_eq</span>
            <h2 className="text-3xl font-headline font-bold text-white mb-4">Studio <i className="font-accent italic font-normal text-primary">Precision</i></h2>
            <p className="text-white/80 text-sm leading-relaxed mb-8 max-w-md">
              The ultimate technical service. Zero-compromise mastering suites and recording environments engineered for absolute frequency neutrality.
            </p>
            <ul className="grid grid-cols-2 gap-4 text-[10px] font-headline text-white/60 uppercase tracking-widest">
              <li className="flex items-center gap-2"><span className="w-1 h-1 bg-primary rounded-full"></span> Diffuser Arrays</li>
              <li className="flex items-center gap-2"><span className="w-1 h-1 bg-primary rounded-full"></span> RF Shielding</li>
              <li className="flex items-center gap-2"><span className="w-1 h-1 bg-primary rounded-full"></span> Floating Shells</li>
              <li className="flex items-center gap-2"><span className="w-1 h-1 bg-primary rounded-full"></span> Modal Analysis</li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}
