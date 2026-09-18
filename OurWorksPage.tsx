import React, { useState } from 'react';
import { Menu, X, ArrowUpRight, ChevronRight, ExternalLink } from 'lucide-react';

interface OurWorksPageProps {
  onNavigateToHome: (sectionId?: string) => void;
  onNavigateToContact: () => void;
}

export default function OurWorksPage({ onNavigateToHome, onNavigateToContact }: OurWorksPageProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white text-[#0A0A0A] font-['Manrope',sans-serif] antialiased selection:bg-[#C5445A] selection:text-white flex flex-col justify-between">
      {/* ========================================================================= */}
      {/* 1. STICKY / TOP NAVIGATION                                                */}
      {/* ========================================================================= */}
      <header className="sticky top-0 z-50 bg-[#0A111A]/95 backdrop-blur-md border-b border-white/10 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 py-4 flex items-center justify-between">
          <button
            type="button"
            onClick={() => onNavigateToHome()}
            className="flex items-center gap-3 group focus:outline-none cursor-pointer"
          >
            <img
              src="/assets/figma/esperia_footer_logo.svg"
              alt="ESPERIA QUANTUM"
              className="h-10 sm:h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            />
          </button>

          <nav className="hidden md:flex items-center gap-8 text-[13px] font-medium text-white/90">
            <button
              type="button"
              onClick={() => onNavigateToHome('what-we-do')}
              className="hover:text-[#73A7A3] transition-colors duration-200 cursor-pointer"
            >
              What We Do
            </button>
            <button
              type="button"
              onClick={() => onNavigateToHome('why-esperia')}
              className="hover:text-[#73A7A3] transition-colors duration-200 cursor-pointer"
            >
              Why Esperia
            </button>
            <button
              type="button"
              className="text-[#73A7A3] font-semibold transition-colors duration-200 cursor-pointer"
            >
              Our Works
            </button>
            <button
              type="button"
              onClick={() => onNavigateToHome('blogs')}
              className="hover:text-[#73A7A3] transition-colors duration-200 cursor-pointer"
            >
              Blogs &amp; Newsletters
            </button>
            <button
              type="button"
              onClick={onNavigateToContact}
              className="hover:text-[#73A7A3] transition-colors duration-200 cursor-pointer"
            >
              Contact Us
            </button>
          </nav>

          <button
            type="button"
            aria-label="Toggle navigation menu"
            className="md:hidden text-white p-2 hover:bg-white/10 rounded-lg transition"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Nav Flyout */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#0A111A] border-b border-white/10 px-6 py-6 flex flex-col gap-4 relative z-50 shadow-2xl animate-in slide-in-from-top duration-300">
            <button
              type="button"
              className="text-left text-white hover:text-[#73A7A3]"
              onClick={() => {
                setMobileMenuOpen(false);
                onNavigateToHome('what-we-do');
              }}
            >
              What We Do
            </button>
            <button
              type="button"
              className="text-left text-white hover:text-[#73A7A3]"
              onClick={() => {
                setMobileMenuOpen(false);
                onNavigateToHome('why-esperia');
              }}
            >
              Why Esperia
            </button>
            <button
              type="button"
              className="text-left text-[#73A7A3] font-semibold"
              onClick={() => setMobileMenuOpen(false)}
            >
              Our Works
            </button>
            <button
              type="button"
              className="text-left text-white hover:text-[#73A7A3]"
              onClick={() => {
                setMobileMenuOpen(false);
                onNavigateToHome('blogs');
              }}
            >
              Blogs &amp; Newsletters
            </button>
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onNavigateToContact();
              }}
              className="text-left text-[#FF7E8B] font-semibold pt-2 border-t border-white/10 cursor-pointer"
            >
              Contact Us
            </button>
          </div>
        )}
      </header>

      {/* ========================================================================= */}
      {/* 2. MAIN CONTENT (FIGMA NODE #99:1588)                                     */}
      {/* ========================================================================= */}
      <main className="flex-1 w-full">
        {/* Placeholder hero while user uploads Figma node 99-1588 reference */}
        <section className="relative overflow-hidden bg-[radial-gradient(circle_at_76%_59%,_#1F3B39_0%,_#072826_45%,_#020F0F_100%)] text-white py-20 lg:py-28">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-[#73A7A3] text-xs font-semibold uppercase tracking-wider mb-6 backdrop-blur-sm">
              Featured Case Studies
            </div>
            <h1 className="text-4xl sm:text-6xl lg:text-[72px] font-bold font-sora tracking-tight leading-[1.1] mb-6">
              Our <span className="text-[#73A7A3]">Works</span>
            </h1>
            <p className="text-slate-300 text-lg max-w-2xl font-manrope leading-relaxed">
              Explore how we engineer transformative cloud architectures, AI-driven experiences, and scalable digital solutions for modern enterprises.
            </p>
          </div>
        </section>
      </main>

      {/* ========================================================================= */}
      {/* 3. LIGHT FOOTER                                                           */}
      {/* ========================================================================= */}
      <footer className="bg-[#F7F7F5] border-t border-slate-200/80 pt-14 pb-12 w-full">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-24">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-14">
            <div className="lg:col-span-4 flex flex-col items-start">
              <button
                type="button"
                onClick={() => onNavigateToHome()}
                className="focus:outline-none cursor-pointer"
              >
                <img
                  src="/assets/figma/esperia_header_logo.svg"
                  alt="ESPERIA QUANTUM"
                  className="h-10 w-auto object-contain"
                />
              </button>
              <p className="text-[12px] text-[#000000] font-medium mt-4 max-w-[184px] leading-[19.5px] font-manrope">
                Digital experience &amp; technology consultancy.
              </p>
            </div>

            <div className="lg:col-span-3">
              <h4 className="text-[12px] font-medium uppercase text-[#000000] mb-4 font-parkinsans">
                Services
              </h4>
              <ul className="space-y-3 text-[14px] text-[#333333] font-manrope font-normal">
                <li>AI &amp; Data Platforms</li>
                <li>Cloud Infrastructure</li>
                <li>Digital Experience</li>
                <li>Cybersecurity</li>
              </ul>
            </div>

            <div className="lg:col-span-3">
              <h4 className="text-[12px] font-medium uppercase text-[#000000] mb-4 font-parkinsans">
                Company
              </h4>
              <ul className="space-y-3 text-[14px] text-[#333333] font-manrope font-normal">
                <li><button type="button" onClick={() => onNavigateToHome('why-esperia')} className="hover:text-black">About Us</button></li>
                <li><button type="button" onClick={() => onNavigateToHome('what-we-do')} className="hover:text-black">Solutions</button></li>
                <li><button type="button" onClick={onNavigateToContact} className="hover:text-black">Contact</button></li>
              </ul>
            </div>

            <div className="lg:col-span-2">
              <h4 className="text-[12px] font-medium uppercase text-[#000000] mb-4 font-parkinsans">
                Location
              </h4>
              <p className="text-[14px] text-[#333333] font-manrope leading-relaxed">
                Bengaluru, India<br />
                Global Delivery
              </p>
            </div>
          </div>

          <div className="border-t border-slate-200/80 pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 font-manrope gap-4">
            <p>&copy; {new Date().getFullYear()} Esperia Quantum. All rights reserved.</p>
            <div className="flex items-center gap-6">
              <span className="hover:text-slate-800 transition cursor-pointer">Privacy Policy</span>
              <span className="hover:text-slate-800 transition cursor-pointer">Terms of Service</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
