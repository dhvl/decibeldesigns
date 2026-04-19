import Image from "next/image";

export default function ContactPage() {
  return (
    <main className="pt-32 pb-24 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto">
      <header className="mb-16 md:mb-24">
        <div className="flex items-center gap-4 mb-4">
          <div className="h-[1px] w-12 bg-primary"></div>
          <span className="font-accent italic text-sm text-secondary">Contact architecture</span>
        </div>
        <h1 className="font-headline text-5xl md:text-7xl font-extrabold tracking-tighter text-on-surface leading-tight">
          Let&apos;s Engineer <br />
          <span className="text-primary">Your <span className="font-accent italic font-normal">Sound.</span></span>
        </h1>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
        <section className="lg:col-span-7">
          <div className="bg-surface-container/70 backdrop-blur-3xl p-8 md:p-12 rounded-lg relative overflow-hidden border border-outline-variant/10">
            <div className="absolute top-0 right-0 opacity-5 pointer-events-none">
              <span className="material-symbols-outlined text-[200px]">graphic_eq</span>
            </div>

            <form className="space-y-10 relative z-10">
              <div className="space-y-1">
                <label className="font-accent italic text-sm text-outline">Full name</label>
                <input
                  type="text"
                  className="w-full bg-surface-container-low border-b border-outline-variant focus:border-primary focus:ring-0 transition-colors py-4 text-on-surface placeholder:text-neutral-700 outline-none"
                  placeholder="John Doe"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="space-y-1">
                  <label className="font-accent italic text-sm text-outline">Project type</label>
                  <select className="w-full bg-surface-container-low border-b border-outline-variant focus:border-primary focus:ring-0 transition-colors py-4 text-on-surface appearance-none outline-none cursor-pointer">
                    <option value="home-theatre">Home Theatres & Media Rooms</option>
                    <option value="recording-studio">Recording Studios & Music Rooms</option>
                    <option value="corporate">Office Spaces & Conference Rooms</option>
                    <option value="hospitality">Cafés, Restaurants & Lounges</option>
                    <option value="commercial">Auditoriums & Commercial Spaces</option>
                    <option value="luxury-resorts">Luxury Resorts & Hospitality</option>
                  </select>
                </div>
                <div className="space-y-1">
                  <label className="font-accent italic text-sm text-outline">Email address</label>
                  <input
                    type="email"
                    className="w-full bg-surface-container-low border-b border-outline-variant focus:border-primary focus:ring-0 transition-colors py-4 text-on-surface placeholder:text-neutral-700 outline-none"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="font-accent italic text-sm text-outline">Your vision</label>
                <textarea
                  className="w-full bg-surface-container-low border-b border-outline-variant focus:border-primary focus:ring-0 transition-colors py-4 text-on-surface placeholder:text-neutral-700 resize-none outline-none"
                  placeholder="Describe your acoustic requirements..."
                  rows={4}
                ></textarea>
              </div>

              <div className="pt-6">
                <button
                  type="submit"
                  className="copper-gold-gradient text-background font-headline font-bold uppercase tracking-widest px-10 py-5 rounded-sm hover:shadow-[0_0_30px_rgba(233,195,73,0.3)] transition-all flex items-center gap-4 group"
                >
                  Initiate Consultation
                  <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
                </button>
              </div>
            </form>
          </div>
        </section>

        <aside className="lg:col-span-5 space-y-12">
          <div className="space-y-8">
            <div className="space-y-2">
              <h3 className="font-headline text-2xl font-bold text-on-surface">The sound <span className="font-accent italic font-normal">Lab.</span></h3>
              <p className="text-on-surface-variant font-light leading-relaxed">Experience precision engineering in person. Our headquarters features four calibrated listening environments.</p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 flex items-center justify-center bg-surface-container-highest rounded-sm text-primary">
                  <span className="material-symbols-outlined">location_on</span>
                </div>
                <div>
                  <p className="font-headline font-bold text-sm tracking-tight">New Delhi, India</p>
                  <p className="font-accent italic text-xs text-neutral-500">New Delhi, India</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 flex items-center justify-center bg-surface-container-highest rounded-sm text-primary">
                  <span className="material-symbols-outlined">call</span>
                </div>
                <div>
                  <p className="font-headline font-bold text-sm tracking-tight">+91 9873 506 507</p>
                  <p className="font-accent italic text-xs text-neutral-500">Acoustic Expert</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 flex items-center justify-center bg-surface-container-highest rounded-sm text-primary">
                  <span className="material-symbols-outlined">schedule</span>
                </div>
                <div>
                  <p className="font-headline font-bold text-sm tracking-tight">Mon &mdash; Fri, 10AM &mdash; 7PM</p>
                  <p className="font-accent italic text-xs text-neutral-500">Technical hours</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-surface-container-highest p-8 rounded-lg border border-white/5 relative overflow-hidden">
            <div className="relative z-10 space-y-4">
              <h4 className="font-accent italic text-lg text-primary">Private demo invitation</h4>
              <p className="text-sm text-on-surface-variant leading-relaxed">
                We invite select clients to experience our flagship reference systems. Availability is limited to twice per week.
              </p>
              <a href="#" className="inline-flex items-center gap-2 text-secondary font-accent italic text-sm hover:text-primary transition-colors">
                Request invitation
                <span className="material-symbols-outlined text-sm">open_in_new</span>
              </a>
            </div>
            <Image
              src="/media/contact/studio-interior.jpg"
              alt="Studio interior"
              fill
              className="absolute inset-0 w-full h-full object-cover opacity-20 grayscale hover:grayscale-0 transition-all duration-700 pointer-events-none"
            />
          </div>
        </aside>
      </div>
    </main>
  );
}
