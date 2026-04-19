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
            src="/media/home/hero-home-cinema.jpg"
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
            <h1 className="text-6xl md:text-8xl font-headline font-extrabold text-on-surface leading-[1.1] tracking-tighter mb-8 text-balance">
              Professional Acoustic <br/> 
              <span className="text-primary font-accent italic font-medium capitalize">Design Solutions.</span>
            </h1>
            <p className="text-xl md:text-2xl text-on-surface-variant font-light mb-12 max-w-xl leading-relaxed">
              New Delhi&apos;s premier engineering atelier for high-end Home Theatre setups, studios, and commercial spaces. Where technical precision meets luxury design.
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

        {/* Dynamic Animated Soundwave (Amplified) */}
        <div className="absolute bottom-0 right-0 w-full md:w-2/3 h-[500px] pointer-events-none z-0 overflow-hidden">
          <svg className="w-full h-full" viewBox="0 0 800 400" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Wave 1: Primary Gold (Deep & Slow) */}
            <motion.path
              animate={{
                d: [
                  "M0 250 C 150 200 300 300 450 250 C 600 200 750 300 900 250",
                  "M0 270 C 150 320 300 220 450 270 C 600 320 750 220 900 270",
                  "M0 250 C 150 200 300 300 450 250 C 600 200 750 300 900 250"
                ]
              }}
              transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
              stroke="#EFAB22"
              strokeWidth="2"
              strokeOpacity="0.4"
            />
            {/* Wave 2: Secondary Copper (Medium & Sharp) */}
            <motion.path
              animate={{
                d: [
                  "M0 270 C 100 150 250 390 400 270 C 550 150 700 390 850 270",
                  "M0 290 C 100 390 250 150 400 290 C 550 390 700 150 850 290",
                  "M0 270 C 100 150 250 390 400 270 C 550 150 700 390 850 270"
                ]
              }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              stroke="#E46D32"
              strokeWidth="1.5"
              strokeOpacity="0.25"
            />
            {/* Wave 3: Subtle White (High Frequency) */}
            <motion.path
              animate={{
                d: [
                  "M0 260 Q 50 220 100 260 T 200 260 T 300 260 T 400 260 T 500 260 T 600 260 T 700 260 T 800 260",
                  "M0 260 Q 50 300 100 260 T 200 260 T 300 260 T 400 260 T 500 260 T 600 260 T 700 260 T 800 260",
                  "M0 260 Q 50 220 100 260 T 200 260 T 300 260 T 400 260 T 500 260 T 600 260 T 700 260 T 800 260"
                ]
              }}
              transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
              stroke="white"
              strokeWidth="0.5"
              strokeOpacity="0.15"
            />
          </svg>
          
          {/* Vertical 'Equalizer' Pulse (Larger & Brighter) */}
          <div className="absolute bottom-16 right-24 flex items-end gap-2 h-24 opacity-30">
            {[...Array(16)].map((_, i) => (
              <motion.div
                key={i}
                animate={{ height: [`${30 + Math.random() * 40}%`, `${70 + Math.random() * 30}%`, `${30 + Math.random() * 40}%`] }}
                transition={{ duration: 1 + Math.random(), repeat: Infinity, ease: "easeInOut", delay: i * 0.05 }}
                className="w-[2px] bg-primary shadow-[0_0_15px_rgba(239,171,34,0.3)]"
              />
            ))}
          </div>
        </div>
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
                  src="/media/home/silence-lab.jpg" 
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
                title: "Home Theatres", 
                icon: "theaters", 
                desc: "Premium cinematic experiences with reference-level audio accuracy and bespoke room aesthetics." 
              },
              { 
                title: "Recording Studios", 
                icon: "mic_external_on", 
                desc: "Music rooms and production suites engineered for absolute frequency neutrality and sonic control." 
              },
              { 
                title: "Corporate Spaces", 
                icon: "corporate_fare", 
                desc: "Intelligent acoustic zoning for office spaces and conference rooms to enhance clarity and privacy." 
              },
              { 
                title: "Restaurants & Lounges", 
                icon: "restaurant", 
                desc: "Crafting the perfect auditory ambiance for cafés and restaurants to enhance guest comfort." 
              },
              { 
                title: "Auditoriums", 
                icon: "meeting_room", 
                desc: "Large-scale acoustic modeling for commercial venues where sound quality is a critical mission." 
              },
              { 
                title: "Luxury Resorts", 
                icon: "holiday_village", 
                desc: "Curating serene soundscapes for hospitality environments to elevate the luxury experience." 
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
