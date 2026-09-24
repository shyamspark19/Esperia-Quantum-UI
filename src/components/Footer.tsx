import React from 'react';

interface FooterProps {
  activePage?:
    | 'home'
    | 'what-we-do'
    | 'why-esperia'
    | 'works'
    | 'watermelon'
    | 'blogs'
    | 'contact'
    | 'privacy'
    | 'terms';
  onNavigateToHome?: (sectionId?: string) => void;
  onNavigateToWorks?: () => void;
  onNavigateToContact?: () => void;
  onNavigateToWhatWeDo?: () => void;
  onNavigateToBlogs?: () => void;
  onNavigateToWhyEsperia?: () => void;
  onNavigateToPrivacy?: () => void;
  onNavigateToTerms?: () => void;
}

export default function Footer({
  activePage = 'why-esperia',
  onNavigateToHome,
  onNavigateToWorks,
  onNavigateToContact,
  onNavigateToWhatWeDo,
  onNavigateToBlogs,
  onNavigateToWhyEsperia,
  onNavigateToPrivacy,
  onNavigateToTerms,
}: FooterProps) {
  const handleHome = () => {
    if (onNavigateToHome) onNavigateToHome();
    else window.location.hash = '';
  };

  const handleWhatWeDo = () => {
    if (onNavigateToWhatWeDo) onNavigateToWhatWeDo();
    else window.location.hash = '#what-we-do';
  };

  const handleWhyEsperia = () => {
    if (onNavigateToWhyEsperia) onNavigateToWhyEsperia();
    else if (onNavigateToHome) onNavigateToHome('why-esperia');
    else window.location.hash = '#why-esperia';
  };

  const handleWorks = () => {
    if (onNavigateToWorks) onNavigateToWorks();
    else window.location.hash = '#our-works';
  };

  const handleBlogs = () => {
    if (onNavigateToBlogs) onNavigateToBlogs();
    else window.location.hash = '#blogs';
  };

  const handleContact = () => {
    if (onNavigateToContact) onNavigateToContact();
    else window.location.hash = '#contact-us';
  };

  const handlePrivacy = () => {
    if (onNavigateToPrivacy) onNavigateToPrivacy();
    else window.location.hash = '#privacy';
  };

  const handleTerms = () => {
    if (onNavigateToTerms) onNavigateToTerms();
    else window.location.hash = '#terms';
  };

  return (
    <footer className="bg-[#F7F7F5] border-t border-slate-200/80 pt-14 pb-12 w-full mt-auto">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-14">
          {/* Column 1: Logo & Tagline */}
          <div className="lg:col-span-4 flex flex-col items-start">
            <button
              type="button"
              onClick={handleHome}
              className="focus:outline-none cursor-pointer group transition-transform duration-300 hover:scale-[1.02]"
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

          {/* Column 2: Services */}
          <div className="lg:col-span-3">
            <h4 className="text-[12px] font-medium uppercase text-[#000000] mb-4 font-parkinsans">
              Services
            </h4>
            <ul className="space-y-3 text-[14px] text-[#333333] font-manrope font-normal">
              <li
                onClick={handleWhatWeDo}
                className="hover:text-[#E63956] transition-colors cursor-pointer"
              >
                Human-Centered Design
              </li>
              <li
                onClick={handleWhatWeDo}
                className="hover:text-[#E63956] transition-colors cursor-pointer"
              >
                AI-Powered Development
              </li>
              <li
                onClick={handleWhatWeDo}
                className="hover:text-[#E63956] transition-colors cursor-pointer"
              >
                Engineering &amp; Cloud
              </li>
              <li
                onClick={handleWhatWeDo}
                className="hover:text-[#E63956] transition-colors cursor-pointer"
              >
                Data &amp; Digital Transformation
              </li>
            </ul>
          </div>

          {/* Column 3: Company */}
          <div className="lg:col-span-3">
            <h4 className="text-[12px] font-medium uppercase text-[#000000] mb-4 font-parkinsans">
              Company
            </h4>
            <ul className="space-y-3 text-[14px] text-[#333333] font-manrope font-normal">
              <li>
                <button
                  type="button"
                  onClick={handleWhatWeDo}
                  className={`hover:text-[#E63956] transition-colors cursor-pointer ${
                    activePage === 'what-we-do'
                      ? 'text-[#E63956] font-semibold'
                      : ''
                  }`}
                >
                  What We do
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={handleWhyEsperia}
                  className={`hover:text-[#E63956] transition-colors cursor-pointer ${
                    activePage === 'why-esperia'
                      ? 'text-[#E63956] font-semibold'
                      : ''
                  }`}
                >
                  Why Esperia
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={handleWorks}
                  className={`hover:text-[#E63956] transition-colors cursor-pointer ${
                    activePage === 'works' || activePage === 'watermelon'
                      ? 'text-[#E63956] font-semibold'
                      : ''
                  }`}
                >
                  Our Products
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={handleBlogs}
                  className={`hover:text-[#E63956] transition-colors cursor-pointer ${
                    activePage === 'blogs'
                      ? 'text-[#E63956] font-semibold'
                      : ''
                  }`}
                >
                  Blogs &amp; Newsletters
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={handleContact}
                  className={`hover:text-[#E63956] transition-colors cursor-pointer ${
                    activePage === 'contact'
                      ? 'text-[#E63956] font-semibold'
                      : ''
                  }`}
                >
                  Contact Us
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Connect */}
          <div className="lg:col-span-2">
            <h4 className="text-[12px] font-medium uppercase text-[#000000] mb-4 font-parkinsans">
              Connect
            </h4>
            <div className="flex items-center gap-3 pt-2">
              {/* Twitter / X */}
              <a
                href="https://x.com/esperia_quantum"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full border border-black/10 flex items-center justify-center text-slate-800 hover:bg-[#E63956] hover:text-white hover:border-[#E63956] transition-all cursor-pointer shadow-xs"
                aria-label="X (Twitter) - @esperia_quantum"
                title="Visit @esperia_quantum on X"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/company/esperia-quantum"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full border border-black/10 flex items-center justify-center text-slate-800 hover:bg-[#E63956] hover:text-white hover:border-[#E63956] transition-all cursor-pointer shadow-xs"
                aria-label="LinkedIn - esperia-quantum"
                title="Visit Esperia Quantum on LinkedIn"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.25c-.91 0-1.64.73-1.64 1.64 0 .9.73 1.63 1.64 1.63.91 0 1.63-.73 1.63-1.63 0-.91-.72-1.64-1.63-1.64z" />
                </svg>
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/esperia.quantum"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full border border-black/10 flex items-center justify-center text-slate-800 hover:bg-[#E63956] hover:text-white hover:border-[#E63956] transition-all cursor-pointer shadow-xs"
                aria-label="Instagram - @esperia.quantum"
                title="Visit @esperia.quantum on Instagram"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.449-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Copyright & Legal Links */}
        <div className="pt-6 border-t border-black/[0.07] flex flex-col sm:flex-row items-center justify-between gap-4 text-[12px] text-[#000000] font-manrope">
          <p>© 2025 Esperia. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <button
              type="button"
              onClick={handlePrivacy}
              className={`hover:text-[#E63956] transition-colors cursor-pointer ${
                activePage === 'privacy' ? 'text-[#E63956] font-semibold' : ''
              }`}
            >
              Privacy Policy
            </button>
            <button
              type="button"
              onClick={handleTerms}
              className={`hover:text-[#E63956] transition-colors cursor-pointer ${
                activePage === 'terms' ? 'text-[#E63956] font-semibold' : ''
              }`}
            >
              Terms of Service
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
