"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, FileText, Send } from "lucide-react";

interface BrochureModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function BrochureModal({ isOpen, onClose }: BrochureModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "home-theatre",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Send email (similar to contact page logic)
    const contactEmail = process.env.NEXT_PUBLIC_CONTACT_EMAIL || "sales@decibeldesigns.in";
    const subject = `Brochure Request: ${formData.projectType} - ${formData.name}`;
    const body = `Name: ${formData.name}\nEmail: ${formData.email}\nProject Type: ${formData.projectType}\n\nThis user requested the 2026 brochure.`;
    
    // In a real app, we'd use an API. Here we follow the existing pattern.
    // However, window.location.href might interrupt the flow.
    // For brochure download, we can open the mailto in a new tab or just log it if we had a backend.
    // Since the user wants "download is done", I'll trigger the download.
    
    const brochureUrl = "/media/brochure/Decibel_Designs_Brochure_UPDATED_2026.pdf";
    const link = document.createElement("a");
    link.href = brochureUrl;
    link.download = "Decibel_Designs_Brochure_2026.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    setIsSubmitted(true);
    
    // Optional: open mailto in background or just proceed
    // window.location.href = `mailto:${contactEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    setTimeout(() => {
      onClose();
      setIsSubmitted(false);
      setFormData({ name: "", email: "", projectType: "home-theatre" });
    }, 2000);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-background/80 backdrop-blur-md"
          />
          
          <div className="flex min-h-full items-center justify-center p-4 md:p-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-lg bg-surface-container border border-outline-variant/20 rounded-lg shadow-2xl overflow-hidden my-8"
            >
              <button
                onClick={onClose}
                className="absolute top-4 right-4 text-on-surface-variant hover:text-primary transition-colors z-10 p-2"
              >
                <X size={24} />
              </button>

              {!isSubmitted ? (
                <div className="p-6 md:p-10">
                  <div className="flex items-center gap-3 mb-8">
                    <div className="w-12 h-12 flex items-center justify-center bg-primary/10 rounded-sm text-primary">
                      <FileText size={24} />
                    </div>
                    <div>
                      <h2 className="font-headline text-2xl font-bold text-on-surface leading-tight">Download Brochure</h2>
                      <p className="text-xs text-secondary font-accent italic">2026 Collections & Design Philosophy</p>
                    </div>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-1.5">
                      <label className="font-accent italic text-xs text-outline">Full Name</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-surface-container-low border-b border-outline-variant focus:border-primary focus:ring-0 transition-colors py-3 text-on-surface placeholder:text-neutral-700 outline-none text-sm"
                        placeholder="John Doe"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="font-accent italic text-xs text-outline">Email Address</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-surface-container-low border-b border-outline-variant focus:border-primary focus:ring-0 transition-colors py-3 text-on-surface placeholder:text-neutral-700 outline-none text-sm"
                        placeholder="john@example.com"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="font-accent italic text-xs text-outline">Interested In</label>
                      <div className="relative">
                        <select
                          value={formData.projectType}
                          onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                          className="w-full bg-surface-container-low border-b border-outline-variant focus:border-primary focus:ring-0 transition-colors py-3 text-on-surface appearance-none outline-none cursor-pointer text-sm"
                        >
                          <option value="home-theatre">Home Theatres</option>
                          <option value="recording-studio">Recording Studios</option>
                          <option value="corporate">Corporate Spaces</option>
                          <option value="hospitality">Hospitality</option>
                        </select>
                        <span className="absolute right-0 top-1/2 -translate-y-1/2 material-symbols-outlined text-outline pointer-events-none">expand_more</span>
                      </div>
                    </div>

                    <div className="pt-6">
                      <button
                        type="submit"
                        className="w-full copper-gold-gradient text-background font-headline font-bold uppercase tracking-widest py-4 rounded-sm hover:shadow-[0_0_25px_rgba(233,195,73,0.3)] transition-all flex items-center justify-center gap-3 group"
                      >
                        Download Now
                        <Send size={18} className="group-hover:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  </form>
                </div>
              ) : (
                <div className="p-16 text-center space-y-6">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mx-auto text-primary"
                  >
                    <FileText size={40} />
                  </motion.div>
                  <div className="space-y-2">
                    <h3 className="font-headline text-2xl font-bold text-on-surface">Thank You!</h3>
                    <p className="text-on-surface-variant font-light max-w-[200px] mx-auto">Your brochure is being prepared for download.</p>
                  </div>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      )}
    </AnimatePresence>
  );
}
