import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

interface HeaderProps {
  activePage?: 'what-we-do' | 'why-esperia' | 'works' | 'blogs' | 'contact' | 'home';
  onNavigateToHome: (sectionId?: string) => void;
  onNavigateToWhatWeDo?: () => void;
  onNavigateToWhyEsperia?: () => void;
  onNavigateToWorks?: () => void;
  onNavigateToBlogs?: () => void;
  onNavigateToContact?: () => void;
  /** Override the scrolled-state background. Defaults to dark teal glass. */
  scrolledBg?: string;
  /** Override the mobile menu background. Defaults to dark teal. */
  mobileBg?: string;
  /** Extra classes applied to the outer <header> element (e.g. negative margin for overlay). */
  className?: string;
  /** Force solid dark teal background even when not scrolled */
  solidBg?: boolean;
}

export default function Header({
  activePage,
  onNavigateToHome,
  onNavigateToWhatWeDo,
  onNavigateToWhyEsperia,
  onNavigateToWorks,
  onNavigateToBlogs,
  onNavigateToContact,
  scrolledBg = 'bg-[#051413]/95 shadow-xl backdrop-blur-md',
  mobileBg = 'bg-[#071D1B]',
  className = '',
  solidBg = false,
}: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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

  const desktopLinkClass = (page: string) =>
    activePage === page
      ? 'text-[#F56F6A] font-semibold transition-colors duration-200 cursor-pointer'
      : 'text-white font-medium hover:text-white/80 transition-colors duration-200 cursor-pointer';

  const mobileLinkClass = (page: string) =>
    `text-left py-2 transition-colors ${
      activePage === page ? 'text-[#F56F6A] font-semibold' : 'text-white/90 hover:text-white'
    }`;

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-500 ${solidBg || isScrolled ? scrolledBg : 'bg-transparent'} ${className}`}
    >
      <div className="max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-16 h-20 sm:h-24 flex items-center justify-between">
        {/* Logo */}
        <button
          type="button"
          onClick={handleHome}
          className="focus:outline-none flex items-center group cursor-pointer"
          aria-label="Go to home"
        >
          <img
            src="/assets/figma/esperia_logo_white.svg"
            alt="ESPERIA QUANTUM"
            className="h-9 sm:h-11 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
          />
        </button>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 lg:gap-10 text-[13px] font-manrope">
          <button type="button" onClick={handleWhatWeDo} className={desktopLinkClass('what-we-do')}>
            What We Do
          </button>
          <button type="button" onClick={handleWhyEsperia} className={desktopLinkClass('why-esperia')}>
            Why Esperia
          </button>
          <button type="button" onClick={handleWorks} className={desktopLinkClass('works')}>
            Our Works
          </button>
          <button type="button" onClick={handleBlogs} className={desktopLinkClass('blogs')}>
            Blogs &amp; Newsletters
          </button>
          <button type="button" onClick={handleContact} className={desktopLinkClass('contact')}>
            Contact Us
          </button>
        </nav>

        {/* Mobile Hamburger Button */}
        <button
          type="button"
          aria-label="Toggle navigation menu"
          className="md:hidden text-white p-2 hover:bg-white/10 rounded-lg transition cursor-pointer"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div
          className={`md:hidden ${mobileBg} backdrop-blur-xl border-b border-white/10 px-6 py-6 flex flex-col gap-4 text-sm font-manrope shadow-2xl`}
        >
          <button
            type="button"
            onClick={() => { setMobileMenuOpen(false); handleWhatWeDo(); }}
            className={mobileLinkClass('what-we-do')}
          >
            What We Do
          </button>
          <button
            type="button"
            onClick={() => { setMobileMenuOpen(false); handleWhyEsperia(); }}
            className={mobileLinkClass('why-esperia')}
          >
            Why Esperia
          </button>
          <button
            type="button"
            onClick={() => { setMobileMenuOpen(false); handleWorks(); }}
            className={mobileLinkClass('works')}
          >
            Our Works
          </button>
          <button
            type="button"
            onClick={() => { setMobileMenuOpen(false); handleBlogs(); }}
            className={mobileLinkClass('blogs')}
          >
            Blogs &amp; Newsletters
          </button>
          <button
            type="button"
            onClick={() => { setMobileMenuOpen(false); handleContact(); }}
            className={`${mobileLinkClass('contact')} pt-2 border-t border-white/20`}
          >
            Contact Us
          </button>
        </div>
      )}
    </header>
  );
}

