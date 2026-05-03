import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import ServiceCarousel from "@/components/ServiceCarousel";

const servicesData = {
  "residential-theatres": {
    title: "Residential Theatres",
    subtitle: "Bespoke Private Cinemas",
    description: "We transform private residences into world-class cinematic environments. Our approach combines architectural elegance with reference-level acoustic accuracy, ensuring that every seat is the best seat in the house. We focus on structural isolation, modal analysis, and sound pressure level calibration to deliver an unmatched auditory experience.",
    features: [
      "Floating Floor Systems",
      "Structural Sound Isolation",
      "Reference-Level Calibration",
      "Bespoke Interior Design",
      "Automated Lighting & Control",
      "Zero-Noise HVAC Integration"
    ],
    images: [
      "/media/services/residential-1.png",
      "/media/services/residential-2.png",
      "/media/services/residential-3.png"
    ],
    icon: "theaters"
  },
  "studio-isolation": {
    title: "Studio Isolation",
    subtitle: "Mastering-Grade Environments",
    description: "For creators who demand perfection, our studio isolation solutions provide the absolute silence and frequency neutrality required for professional production. From vocal booths to full-scale recording facilities, we engineer spaces that allow your sound to be heard exactly as intended, free from external interference.",
    features: [
      "Room-within-a-Room Construction",
      "Broadband Absorption",
      "Quadratic Residue Diffusers",
      "Low-Frequency Control",
      "Silent Air Ventilation",
      "Custom Studio Furniture"
    ],
    images: [
      "/media/services/studio-vocal-booth.png",
      "/media/services/studio-podcast-main.png",
      "/media/services/studio-original-vocal.jpg",
      "/media/services/studio-original-podcast-1.jpg",
      "/media/services/studio-original-podcast-2.jpg"
    ],
    icon: "mic_external_on"
  },
  "corporate-privacy": {
    title: "Corporate Privacy",
    subtitle: "Intelligent Acoustic Zoning",
    description: "In the modern workplace, acoustic privacy is essential for productivity and confidentiality. We design corporate environments that optimize speech intelligibility in conference rooms while providing effective sound masking and isolation in open offices. Our solutions are seamlessly integrated into your architectural vision.",
    features: [
      "Speech Privacy Systems",
      "Conference Room Isolation",
      "Acoustic Ceiling Treatments",
      "Glass Partition Sealing",
      "Sound Masking Technology",
      "Meeting Pod Integration"
    ],
    images: [
      "/media/services/corporate-1.png",
      "/media/services/corporate-2.png",
      "/media/hero/corporate.png"
    ],
    icon: "corporate_fare"
  },
  "culinary-ambiance": {
    title: "Culinary Ambiance",
    subtitle: "Engineered Dining Environments",
    description: "The sound of a restaurant is as important as the food. We engineer the perfect noise floor for culinary spaces, ensuring that conversations remain intimate even during peak hours. By managing reverberation and background noise, we create an atmosphere where music feels alive but never overwhelming.",
    features: [
      "Reverberation Control",
      "Background Noise Mitigation",
      "Zoned Audio Systems",
      "Decorative Acoustic Panels",
      "Hard Surface Management",
      "Outdoor Dining Solutions"
    ],
    images: [
      "/media/services/culinary-1.png",
      "/media/services/culinary-2.png"
    ],
    icon: "restaurant"
  },
  "great-halls": {
    title: "Great Halls",
    subtitle: "Large-Scale Acoustic Modeling",
    description: "For auditoriums, performance venues, and large-scale commercial spaces, we provide comprehensive acoustic modeling and design. We use advanced simulations to predict sound behavior, ensuring optimal coverage and clarity for every member of the audience, regardless of the venue's size or complexity.",
    features: [
      "3D Acoustic Simulation",
      "Reflection Mapping",
      "Public Address Integration",
      "Variable Acoustic Systems",
      "Stage & Backstage Isolation",
      "Audience Area Optimization"
    ],
    images: [
      "/media/services/halls-1.png",
      "/media/hero/auditorium.png"
    ],
    icon: "meeting_room"
  },
  "hospitality-sanctuaries": {
    title: "Hospitality Sanctuaries",
    subtitle: "Curated Sonic Landscapes",
    description: "Luxury resorts, spas, and boutique hotels require a sense of serenity that only careful acoustic design can provide. We curate high-end soundscapes through architectural serenity and passive noise control technologies, transforming hospitality spaces into true sanctuaries of sound and silence.",
    features: [
      "Passive Noise Control",
      "Nature-Inspired Soundscapes",
      "Spa & Wellness Isolation",
      "Luxury Suite Soundproofing",
      "Ambient Audio Integration",
      "Quiet-Zone Engineering"
    ],
    images: [
      "/media/services/hospitality-1.png",
      "/media/portfolio/grand-resort.jpg"
    ],
    icon: "spa"
  }
};

export default function ServicePage({ params }: { params: { slug: string } }) {
  const service = servicesData[params.slug as keyof typeof servicesData];

  if (!service) {
    notFound();
  }

  return (
    <main className="pt-32 pb-24 px-6 md:px-12 max-w-7xl mx-auto">
      {/* Back to Services - Desktop Only */}
      <Link 
        href="/services" 
        className="hidden lg:flex items-center gap-2 text-secondary text-xs uppercase tracking-widest mb-12 hover:text-primary transition-colors group w-fit"
      >
        <span className="material-symbols-outlined text-sm group-hover:-translate-x-1 transition-transform">arrow_back</span>
        Back to Services
      </Link>

      {/* Mobile-Only Title and Carousel Header */}
      <div className="lg:hidden mb-12">
        <h1 className="text-4xl font-headline font-bold leading-tight text-on-surface mb-8">
          {service.title.split(' ')[0]} <i className="font-accent italic font-normal text-primary">{service.title.split(' ').slice(1).join(' ')}</i>
        </h1>
        <ServiceCarousel images={service.images} title={service.title} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
        {/* Left Column: Content */}
        <div className="lg:col-span-7">
          <span className="font-headline text-secondary tracking-[0.3em] uppercase text-xs mb-4 block">{service.subtitle}</span>
          
          {/* Desktop-Only Title */}
          <h1 className="hidden lg:block text-4xl md:text-6xl font-headline font-bold leading-tight text-on-surface mb-8">
            {service.title.split(' ')[0]} <i className="font-accent italic font-normal text-primary">{service.title.split(' ').slice(1).join(' ')}</i>
          </h1>
          
          <p className="text-on-surface-variant text-lg leading-relaxed mb-12">
            {service.description}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="noir-gradient p-8 rounded-lg border border-white/5">
              <h3 className="text-primary font-headline font-bold uppercase tracking-widest text-xs mb-6">Technical Features</h3>
              <ul className="space-y-4">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-on-surface-variant">
                    <span className="material-symbols-outlined text-primary text-lg">check_circle</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-surface-container-high p-8 rounded-lg border border-white/5 flex flex-col justify-between">
              <div>
                <span className="material-symbols-outlined text-secondary text-4xl mb-4">{service.icon}</span>
                <h3 className="text-on-surface font-headline font-bold mb-4">Precision Engineering</h3>
                <p className="text-on-surface-variant text-xs leading-relaxed">
                  Our solutions are not just about aesthetics; they are built on rigorous mathematical models and acoustic simulations.
                </p>
              </div>
              <div className="mt-8 pt-6 border-t border-outline-variant/10">
                <span className="text-[10px] font-headline text-secondary tracking-widest uppercase">Decibel Design Standard</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Carousel & CTA */}
        <div className="lg:col-span-5 flex flex-col gap-8">
          {/* Desktop-Only Carousel */}
          <div className="hidden lg:block">
            <ServiceCarousel images={service.images} title={service.title} />
          </div>
          
          <div className="bg-surface-container-low p-10 rounded-lg border border-white/5 relative overflow-hidden">
            <div className="relative z-10">
              <h2 className="text-2xl font-headline font-bold mb-4">Start Your <i className="font-accent italic font-normal text-primary">Project</i></h2>
              <p className="text-on-surface-variant text-sm mb-8 leading-relaxed">
                Consult with our experts to design an environment that meets your specific acoustic requirements and aesthetic goals.
              </p>
              <Link 
                href="/contact"
                className="copper-gold-gradient w-full py-4 text-background font-headline font-bold uppercase tracking-widest text-xs rounded-sm hover:shadow-[0_0_30px_rgba(239,171,34,0.3)] transition-all flex items-center justify-center gap-2"
              >
                Request a Consultation
                <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </Link>
            </div>
            {/* Subtle background decoration */}
            <div className="absolute -bottom-10 -right-10 opacity-5">
              <span className="material-symbols-outlined text-[150px]">{service.icon}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Grid Style Section (to match current services page) */}
      <section className="mt-32">
        <h2 className="text-2xl font-headline font-bold mb-12 border-b border-outline-variant/10 pb-6">Other <i className="font-accent italic font-normal text-secondary">Expertise</i></h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {Object.entries(servicesData)
            .filter(([slug]) => slug !== params.slug)
            .slice(0, 3)
            .map(([slug, data]) => (
              <Link key={slug} href={`/services/${slug}`} className="group">
                <div className="bg-surface-container-high p-8 rounded-lg border border-white/5 hover:bg-surface-container-highest transition-colors h-full flex flex-col justify-between">
                  <div>
                    <span className="material-symbols-outlined text-primary mb-4 block">{data.icon}</span>
                    <h3 className="text-xl font-headline font-bold mb-2 group-hover:text-primary transition-colors">{data.title}</h3>
                    <p className="text-on-surface-variant text-xs line-clamp-2">{data.description}</p>
                  </div>
                  <div className="mt-6 flex items-center gap-2 text-primary text-[10px] font-headline font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                    View Details <span className="material-symbols-outlined text-xs">arrow_forward</span>
                  </div>
                </div>
              </Link>
            ))}
        </div>
      </section>
    </main>
  );
}

export async function generateStaticParams() {
  return Object.keys(servicesData).map((slug) => ({
    slug,
  }));
}
