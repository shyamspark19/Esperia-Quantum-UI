import React, { useState } from 'react';

interface HeaderProps {
  activePage?: 'what-we-do' | 'why-esperia' | 'works' | 'blogs' | 'contact' | 'home';
  onNavigateToHome: (sectionId?: string) => void;
  onNavigateToWhatWeDo?: () => void;
  onNavigateToWhyEsperia?: () => void;
  onNavigateToWorks?: () => void;
  onNavigateToBlogs?: () => void;
  onNavigateToContact?: () => void;
}

export default function Header({
  activePage,
  onNavigateToHome,
  onNavigateToWhatWeDo,
  onNavigateToWhyEsperia,
  onNavigateToWorks,
  onNavigateToBlogs,
  onNavigateToContact,
}: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleHome = () => {
    if (onNavigateToHome) onNavigateToHome();
    else window.location.hash = '';
  };

  const handleWhatWeDo = () => {
    if (onNavigateToWhatWeDo) onNavigateToWhatWeDo();
    else if (onNavigateToHome) onNavigateToHome('what-we-do');
    else window.location.hash = '#what-we-do';
  };

  const handleWhyEsperia = () => {
    if (onNavigateToWhyEsperia) onNavigateToWhyEsperia();
    else if (onNavigateToHome) onNavigateToHome('why-esperia');
    else window.location.hash = '#why-esperia';
  };

  const handleWorks = () => {
    if (onNavigateToWorks) onNavigateToWorks();
    else if (onNavigateToHome) onNavigateToHome('our-works');
    else window.location.hash = '#our-works';
  };

  const handleBlogs = () => {
    if (onNavigateToBlogs) onNavigateToBlogs();
    else if (onNavigateToHome) onNavigateToHome('blogs');
    else window.location.hash = '#blogs';
  };

  const handleContact = () => {
    if (onNavigateToContact) onNavigateToContact();
    else if (onNavigateToHome) onNavigateToHome('contact-us');
    else window.location.hash = '#contact-us';
  };

  return (
    <header className="relative z-20 border-b border-white/[0.07] w-full">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 h-20 sm:h-[106px] flex items-center justify-between">
        {/* Logo */}
        <button
          type="button"
          onClick={handleHome}
          className="focus:outline-none flex items-center group cursor-pointer transition-transform duration-300 hover:scale-[1.02]"
        >
          <img
            src="/assets/figma/esperia_footer_logo.svg"
            alt="ESPERIA QUANTUM"
            className="h-8 sm:h-10 w-auto object-contain"
          />
        </button>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 lg:gap-10 text-[12px] font-manrope">
          {activePage === 'what-we-do' ? (
            <span className="text-[#F56F6A] font-semibold transition-colors duration-200 cursor-default">
              What We Do
            </span>
          ) : (
            <button
              type="button"
              onClick={handleWhatWeDo}
              className="text-white font-light hover:text-white/80 transition-colors duration-200 cursor-pointer"
            >
              What We Do
            </button>
          )}

          {activePage === 'why-esperia' ? (
            <span className="text-[#F56F6A] font-semibold transition-colors duration-200 cursor-default">
              Why Esperia
            </span>
          ) : (
            <button
              type="button"
              onClick={handleWhyEsperia}
              className="text-white font-light hover:text-white/80 transition-colors duration-200 cursor-pointer"
            >
              Why Esperia
            </button>
          )}

          {activePage === 'works' ? (
            <span className="text-[#F56F6A] font-semibold transition-colors duration-200 cursor-default">
              Our Works
            </span>
          ) : (
            <button
              type="button"
              onClick={handleWorks}
              className="text-white font-light hover:text-white/80 transition-colors duration-200 cursor-pointer"
            >
              Our Works
            </button>
          )}

          {activePage === 'blogs' ? (
            <span className="text-[#F56F6A] font-semibold transition-colors duration-200 cursor-default">
              Blogs &amp; Newsletters
            </span>
          ) : (
            <button
              type="button"
              onClick={handleBlogs}
              className="text-white font-light hover:text-white/80 transition-colors duration-200 cursor-pointer"
            >
              Blogs &amp; Newsletters
            </button>
          )}

          {activePage === 'contact' ? (
            <span className="text-[#F56F6A] font-semibold transition-colors duration-200 cursor-default">
              Contact Us
            </span>
          ) : (
            <button
              type="button"
              onClick={handleContact}
              className="text-white font-light hover:text-white/80 transition-colors duration-200 cursor-pointer"
            >
              Contact Us
            </button>
          )}
        </nav>

        {/* Mobile Hamburger Button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-white hover:text-emerald-400 focus:outline-none cursor-pointer"
          aria-label="Toggle navigation menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {mobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#071F1A]/95 backdrop-blur-xl border-b border-white/10 px-6 py-6 flex flex-col gap-4 text-sm font-manrope">
          <button
            type="button"
            onClick={() => {
              setMobileMenuOpen(false);
              handleWhatWeDo();
            }}
            className={`text-left py-2 transition-colors ${
              activePage === 'what-we-do' ? 'text-[#F56F6A] font-semibold' : 'text-white/90 hover:text-emerald-400'
            }`}
          >
            What We Do
          </button>
          <button
            type="button"
            onClick={() => {
              setMobileMenuOpen(false);
              handleWhyEsperia();
            }}
            className={`text-left py-2 transition-colors ${
              activePage === 'why-esperia' ? 'text-[#F56F6A] font-semibold' : 'text-white/90 hover:text-emerald-400'
            }`}
          >
            Why Esperia
          </button>
          <button
            type="button"
            onClick={() => {
              setMobileMenuOpen(false);
              handleWorks();
            }}
            className={`text-left py-2 transition-colors ${
              activePage === 'works' ? 'text-[#F56F6A] font-semibold' : 'text-white/90 hover:text-emerald-400'
            }`}
          >
            Our Works
          </button>
          <button
            type="button"
            onClick={() => {
              setMobileMenuOpen(false);
              handleBlogs();
            }}
            className={`text-left py-2 transition-colors ${
              activePage === 'blogs' ? 'text-[#F56F6A] font-semibold' : 'text-white/90 hover:text-emerald-400'
            }`}
          >
            Blogs &amp; Newsletters
          </button>
          <button
            type="button"
            onClick={() => {
              setMobileMenuOpen(false);
              handleContact();
            }}
            className={`text-left py-2 transition-colors ${
              activePage === 'contact' ? 'text-[#F56F6A] font-semibold' : 'text-white/90 hover:text-emerald-400'
            }`}
          >
            Contact Us
          </button>
        </div>
      )}
    </header>
  );
}
