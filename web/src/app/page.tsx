"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <header className="relative min-h-screen flex items-center justify-start overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuojoV6fFdUxfJMvuQVzrSSH5TeIV4w22FIm9rJw5Wx4XfRgS-5xNxn7rCLTseCd9XAFCXI_RU2oGou31LM8aXMpk33GWkIxvAtkL0vC1Nu3M5oMXBQ3KcUlpr1otl6vpCe76bGn42rbOhHKDMDYOTmqZgyot8PLog1MK0kpGez01yGrdB8LAwEmu3-gl1QcM3_iSB6aB6VMqJ1kuvUZ_RnGS-dW0xQ1dLrVd9ceBBYROKPdHU5R6xNOsYWPsHLa2mqYragHBQznzI"
            alt="ultra-luxury home cinema room"
            fill
            className="object-cover grayscale-[0.6] brightness-[0.25]"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent"></div>
        </div>
        
        <div className="container mx-auto px-8 md:px-12 relative z-10">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-3xl"
          >
            <span className="inline-block py-1 px-3 mb-6 bg-secondary/10 text-secondary text-sm font-accent italic border border-secondary/20">
              Acoustic excellence
            </span>
            <h1 className="text-6xl md:text-8xl font-headline font-extrabold text-on-surface leading-[1.1] tracking-tighter mb-8">
              Perfection in <br/> 
              <span className="text-primary font-accent italic font-medium capitalize">Sound.</span>
            </h1>
            <p className="text-xl md:text-2xl text-on-surface-variant font-light mb-12 max-w-xl leading-relaxed">
              Bespoke acoustic engineering for residential and commercial spaces. Where technical precision meets luxury design.
            </p>
            <div className="flex flex-wrap gap-6">
              <Link 
                href="/portfolio" 
                className="copper-gold-gradient px-8 py-4 text-background font-headline font-bold uppercase tracking-widest text-sm rounded-sm hover:shadow-[0_0_30px_rgba(239,171,34,0.3)] transition-all"
              >
                View Our Work
              </Link>
              <Link 
                href="/services" 
                className="group flex items-center gap-3 px-8 py-4 border border-outline-variant/30 text-on-surface font-headline font-bold uppercase tracking-widest text-sm hover:bg-white/5 transition-all"
              >
                The Process
                <span className="material-symbols-outlined group-hover:translate-x-2 transition-transform">arrow_forward</span>
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Frequency Visualizer Decoration */}
        <motion.div 
          initial={{ opacity: 0, scaleY: 0 }}
          animate={{ opacity: 0.1, scaleY: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="absolute bottom-0 right-0 w-1/2 h-64 pointer-events-none origin-bottom"
        >
          <svg className="w-full h-full text-secondary" viewBox="0 0 400 100">
            <path 
              d="M0 50 Q 50 10 100 50 T 200 50 T 300 50 T 400 50" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="0.5"
            ></path>
            <path 
              d="M0 60 Q 50 20 100 60 T 200 60 T 300 60 T 400 60" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="0.2"
            ></path>
          </svg>
        </motion.div>
      </header>

      {/* The Science of Silence Section */}
      <section className="py-32 bg-surface-container-lowest relative overflow-hidden">
        <div className="container mx-auto px-8 md:px-12 flex flex-col md:flex-row items-center gap-20 relative z-10">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="md:w-1/2"
          >
            <div className="relative">
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-sm shadow-2xl">
                <Image 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuD8gDSIYTfDSP5Sa5aybg6Pbk6eqbfGw2MH1CEbpRpZMJZvDB5ajXSlzVQjos_fhurA87IEh8m5WRcICa6xbCzppl9T5w15LKsuBjFSBYbLtu-0c9fx_jUC1aSae9f4JV-DI9frOUoOJ2Sji9HZv6zqngm-yY7gviceS7Ip0DZCA0NAlw3LO1hN8Pch_9_1WVl4IA0UrZG3AwTMNJCzMhjdZ9_yszzGjJ7IFJdE8xLO71xcixIWKXIeRDrkiheAO61A9LHZJz7zbBY" 
                  alt="high-end acoustic insulation and amplifier" 
                  fill
                  className="object-cover opacity-90 brightness-90"
                />
              </div>
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="absolute -bottom-10 -right-10 w-48 h-48 bg-secondary/20 backdrop-blur-2xl p-8 hidden lg:block border border-secondary/20"
              >
                <div className="text-secondary font-headline font-black text-5xl">-65dB</div>
                <div className="text-sm font-accent italic text-on-surface-variant">Noise isolation floor</div>
              </motion.div>
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="md:w-1/2 space-y-8"
          >
            <h2 className="text-4xl md:text-5xl font-headline font-bold leading-tight">
              The Science <br/>of <span className="text-primary font-accent italic font-medium capitalize">Silence</span>
            </h2>
            <div className="w-20 h-1 bg-secondary"></div>
            <p className="text-on-surface-variant text-lg leading-relaxed">
              Acoustics is more than just padding walls. Our approach involves computational fluid dynamics for sound waves, ensuring that &quot;silence&quot; is a controlled vacuum and &quot;sound&quot; is a crystalline experience. 
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-6">
              <div className="border-l border-outline-variant/30 pl-6 py-2">
                <h4 className="font-headline font-bold text-secondary mb-2">Resonance Control</h4>
                <p className="text-sm font-accent italic text-on-surface-variant leading-loose">Eliminating structural vibrations at the source.</p>
              </div>
              <div className="border-l border-outline-variant/30 pl-6 py-2">
                <h4 className="font-headline font-bold text-secondary mb-2">Sonic Geometry</h4>
                <p className="text-sm font-accent italic text-on-surface-variant leading-loose">Custom-cut diffusers mapped to room dimensions.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-32 bg-surface">
        <div className="container mx-auto px-8 md:px-12">
          <div className="flex justify-between items-end mb-20">
            <div className="max-w-xl">
              <h2 className="text-4xl md:text-5xl font-headline font-bold mb-6">
                Our <span className="text-primary font-accent italic font-medium capitalize">Expertise</span>
              </h2>
              <p className="text-on-surface-variant">Precision engineering tailored for the world&apos;s most demanding listening environments.</p>
            </div>
            <div className="hidden md:block">
              <span className="text-sm font-accent italic opacity-40">Disciplines</span>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-outline-variant/10">
            {[
              { 
                title: "Home Theaters", 
                icon: "theaters", 
                desc: "Immersive private cinemas designed with reference-level audio accuracy and bespoke aesthetics." 
              },
              { 
                title: "Auditoriums", 
                icon: "meeting_room", 
                desc: "Large-scale acoustic modeling for performance venues where every seat is the best seat in the house." 
              },
              { 
                title: "Luxury Resorts", 
                icon: "holiday_village", 
                desc: "Curating soundscapes for high-end hospitality to enhance relaxation through acoustic serenity." 
              }
            ].map((item, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="bg-surface p-12 group hover:bg-surface-container-high transition-all duration-500"
              >
                <div className="mb-10 text-secondary transition-transform group-hover:-translate-y-2">
                  <span className="material-symbols-outlined text-6xl">
                    {item.icon}
                  </span>
                </div>
                <h3 className="text-2xl font-headline font-bold mb-4">{item.title}</h3>
                <p className="text-on-surface-variant mb-8 line-clamp-3">{item.desc}</p>
                <Link 
                  href="/services" 
                  className="text-sm font-accent italic text-primary flex items-center gap-2 group-hover:gap-4 transition-all"
                >
                  Learn more <span className="material-symbols-outlined text-sm">arrow_right_alt</span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
