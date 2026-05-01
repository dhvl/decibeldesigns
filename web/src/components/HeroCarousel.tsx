"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const categories = [
  {
    title: "Home Theatres",
    oneLiner: "Bespoke cinematic experiences with reference-grade audio.",
    image: "/media/hero/home-theatre.png",
  },
  {
    title: "Recording Studios",
    oneLiner: "Frequency-neutral environments for absolute sonic control.",
    image: "/media/hero/recording-studio.png",
  },
  {
    title: "Corporate Spaces",
    oneLiner: "Intelligent acoustic zoning for clarity and privacy.",
    image: "/media/hero/corporate.png",
  },
  {
    title: "Luxury Lounges",
    oneLiner: "Curating serene soundscapes for premium hospitality.",
    image: "/media/hero/lounge.png",
  },
  {
    title: "Auditoriums",
    oneLiner: "Large-scale acoustic modeling for mission-critical venues.",
    image: "/media/hero/auditorium.png",
  },
];

export default function HeroCarousel() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % categories.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full h-[450px] md:h-[600px] overflow-hidden rounded-sm border border-outline-variant/20 shadow-2xl group">
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="absolute inset-0"
        >
          <Image
            src={categories[index].image}
            alt={categories[index].title}
            fill
            className="object-cover brightness-[0.7]"
            priority
          />
          
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-90" />
          <div className="absolute inset-0 bg-gradient-to-r from-background/40 via-transparent to-transparent" />
          
          {/* Content Overlay */}
          <div className="absolute bottom-0 left-0 p-8 md:p-12 w-full">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              <span className="text-primary font-accent italic text-lg mb-2 block">
                {categories[index].title}
              </span>
              <h3 className="text-2xl md:text-3xl font-headline font-bold text-on-surface leading-tight max-w-md">
                {categories[index].oneLiner}
              </h3>
            </motion.div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Progress Indicators */}
      <div className="absolute bottom-6 right-8 flex gap-2 z-20">
        {categories.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`h-1 transition-all duration-500 ${
              i === index ? "w-8 bg-primary" : "w-2 bg-white/20 hover:bg-white/40"
            }`}
          />
        ))}
      </div>

      {/* Glassmorphism Border Glow */}
      <div className="absolute inset-0 pointer-events-none border border-white/5 shadow-[inset_0_0_100px_rgba(0,0,0,0.5)]" />
    </div>
  );
}
