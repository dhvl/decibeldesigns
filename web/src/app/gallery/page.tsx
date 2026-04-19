"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

type GalleryItem = {
  src: string;
  category: "Residential" | "Commercial" | "Professional";
  type: "image" | "video";
};

const galleryItems: GalleryItem[] = [
  // Residential / Home Theater
  { src: "/media/gallery/residential-theater-01.jpeg", category: "Residential", type: "image" },
  { src: "/media/gallery/residential-theater-02.jpeg", category: "Residential", type: "image" },
  { src: "/media/gallery/residential-theater-03.jpeg", category: "Residential", type: "image" },
  { src: "/media/gallery/residential-theater-04.jpeg", category: "Residential", type: "image" },
  { src: "/media/gallery/residential-theater-05.jpeg", category: "Residential", type: "image" },
  { src: "/media/gallery/residential-theater-06.jpeg", category: "Residential", type: "image" },
  { src: "/media/gallery/residential-theater-preview.mp4", category: "Residential", type: "video" },
  
  // Commercial / Auditoriums
  { src: "/media/gallery/commercial-auditorium-01.jpeg", category: "Commercial", type: "image" },
  { src: "/media/gallery/commercial-auditorium-02.jpeg", category: "Commercial", type: "image" },
  { src: "/media/gallery/commercial-auditorium-03.jpeg", category: "Commercial", type: "image" },
  { src: "/media/gallery/commercial-auditorium-04.jpeg", category: "Commercial", type: "image" },
  { src: "/media/gallery/commercial-auditorium-05.jpeg", category: "Commercial", type: "image" },
  
  // Professional / Details
  { src: "/media/gallery/professional-audio-01.jpeg", category: "Professional", type: "image" },
  { src: "/media/gallery/professional-audio-02.jpeg", category: "Professional", type: "image" },
  { src: "/media/gallery/professional-audio-03.jpeg", category: "Professional", type: "image" },
  { src: "/media/gallery/professional-audio-04.jpeg", category: "Professional", type: "image" },
  { src: "/media/gallery/professional-audio-05.jpeg", category: "Professional", type: "image" },
  { src: "/media/gallery/professional-audio-06.jpeg", category: "Professional", type: "image" },
  { src: "/media/gallery/professional-audio-07.jpeg", category: "Professional", type: "image" },
  { src: "/media/gallery/professional-audio-08.jpeg", category: "Professional", type: "image" },
  { src: "/media/gallery/professional-audio-09.jpeg", category: "Professional", type: "image" },
  { src: "/media/gallery/professional-audio-10.jpeg", category: "Professional", type: "image" },
  { src: "/media/gallery/professional-audio-11.jpeg", category: "Professional", type: "image" },
  { src: "/media/gallery/professional-audio-12.jpeg", category: "Professional", type: "image" },
  { src: "/media/gallery/professional-audio-13.jpeg", category: "Professional", type: "image" },
  { src: "/media/gallery/professional-audio-14.jpeg", category: "Professional", type: "image" },
  { src: "/media/gallery/professional-audio-15.jpeg", category: "Professional", type: "image" },
  { src: "/media/gallery/professional-audio-16.jpeg", category: "Professional", type: "image" },
];

export default function GalleryPage() {
  const [filter, setFilter] = useState<"All" | "Residential" | "Commercial" | "Professional">("All");
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  const filteredItems = filter === "All" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === filter);

  return (
    <main className="pt-32 pb-24 px-6 md:px-12 max-w-7xl mx-auto">
      <header className="mb-16">
        <div className="flex items-center gap-4 mb-4">
          <div className="h-[1px] w-12 bg-primary"></div>
          <span className="font-accent italic text-sm text-secondary uppercase tracking-widest">Visual Portfolio</span>
        </div>
        <h1 className="text-5xl md:text-7xl font-headline font-extrabold text-on-surface leading-tight mb-8">
          The Gallery of <span className="font-accent italic text-primary font-normal">Silence.</span>
        </h1>
        
        {/* Filter Bar */}
        <div className="flex flex-wrap gap-4 border-b border-outline-variant/10 pb-6">
          {["All", "Residential", "Commercial", "Professional"].map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat as any)}
              className={`font-headline text-xs uppercase tracking-[0.2em] px-6 py-2 transition-all rounded-sm ${
                filter === cat 
                  ? "bg-primary text-background font-bold shadow-[0_0_20px_rgba(239,171,34,0.3)]" 
                  : "text-on-surface-variant hover:text-primary"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </header>

      {/* Gallery Grid */}
      <motion.div 
        layout
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
      >
        <AnimatePresence mode="popLayout">
          {filteredItems.map((item, i) => (
            <motion.div
              key={item.src}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="group relative aspect-square cursor-pointer overflow-hidden rounded-lg bg-surface-container-low border border-outline-variant/5 shadow-2xl"
              onClick={() => setSelectedItem(item)}
            >
              <div className="absolute inset-0 z-10 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                <div>
                  <span className="text-primary text-[10px] font-headline tracking-[0.3em] uppercase block mb-1">{item.category}</span>
                  <span className="text-white text-sm font-accent italic">View Project</span>
                </div>
              </div>

              {item.type === "image" ? (
                <Image
                  src={item.src}
                  alt={`Gallery project ${i}`}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                />
              ) : (
                <video 
                  src={item.src}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0"
                  muted
                  loop
                  onMouseOver={(e) => e.currentTarget.play()}
                  onMouseOut={(e) => e.currentTarget.pause()}
                />
              )}
              
              {item.type === "video" && (
                <div className="absolute top-4 right-4 z-20 bg-background/50 backdrop-blur-md rounded-full p-2">
                  <span className="material-symbols-outlined text-white text-sm">play_arrow</span>
                </div>
              )}
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Fullscreen Lightbox */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-background/95 backdrop-blur-2xl flex items-center justify-center p-6 md:p-12 cursor-zoom-out"
            onClick={() => setSelectedItem(null)}
          >
            <button 
              className="absolute top-10 right-10 text-white hover:text-primary transition-colors"
              onClick={() => setSelectedItem(null)}
            >
              <span className="material-symbols-outlined text-4xl">close</span>
            </button>

            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-5xl w-full h-full flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              {selectedItem.type === "image" ? (
                <div className="relative w-full h-full">
                  <Image
                    src={selectedItem.src}
                    alt="Gallery item"
                    fill
                    className="object-contain"
                  />
                </div>
              ) : (
                <video 
                  src={selectedItem.src}
                  className="w-full h-full rounded-lg shadow-2xl border border-white/10"
                  controls
                  autoPlay
                />
              )}
              <div className="absolute -bottom-16 left-0 right-0 text-center">
                <span className="text-primary font-headline text-xs tracking-[0.4em] uppercase">{selectedItem.category} Architecture</span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
