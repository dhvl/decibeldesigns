export default function PrivacyPage() {
  return (
    <main className="pt-32 pb-24 px-6 md:px-12 max-w-4xl mx-auto">
      <header className="mb-16">
        <span className="font-headline text-secondary tracking-[0.3em] uppercase text-xs mb-4 block">Legal Documentation</span>
        <h1 className="text-4xl md:text-6xl font-headline font-bold leading-tight text-on-surface mb-8">
          Privacy <i className="font-accent italic font-normal text-primary">Policy</i>
        </h1>
        <p className="text-on-surface-variant text-sm border-l border-outline-variant/30 pl-6">
          Last updated: May 2024. Your privacy is paramount to our engineering philosophy.
        </p>
      </header>

      <section className="prose prose-invert max-w-none space-y-12 text-on-surface-variant leading-relaxed">
        <div>
          <h2 className="text-2xl font-headline font-bold text-on-surface mb-4">1. Data Collection</h2>
          <p>
            At DecibelDesigns, we collect only the necessary information required to provide our premium acoustic design services. This includes contact details provided through our inquiry forms and technical requirements for your specific space.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-headline font-bold text-on-surface mb-4">2. Use of Information</h2>
          <p>
            Your information is used exclusively for:
          </p>
          <ul className="list-disc pl-6 space-y-2 mt-4">
            <li>Providing customized acoustic simulations and designs.</li>
            <li>Communicating project updates and consultations.</li>
            <li>Improving our technical atelier's service offerings.</li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-headline font-bold text-on-surface mb-4">3. Information Security</h2>
          <p>
            We implement industry-standard encryption and security protocols to ensure that your architectural plans and personal data remain confidential. We do not sell or share your data with third-party marketing firms.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-headline font-bold text-on-surface mb-4">4. Contact Us</h2>
          <p>
            If you have any questions regarding our privacy protocols, please contact our administrative team at sales@decibeldesigns.in.
          </p>
        </div>
      </section>

      <div className="mt-24 pt-12 border-t border-outline-variant/10 text-center">
        <p className="text-xs font-headline text-secondary tracking-widest uppercase">
          Decibel Design Standard for Data Protection
        </p>
      </div>
    </main>
  );
}
