import React, { useState, useEffect } from 'react';
import {
  ArrowRight,
  Menu,
  X,
  ChevronRight,
  Users2,
  Monitor,
  Target,
  Globe,
  TrendingUp
} from 'lucide-react';
import Footer from '../components/Footer';

interface EsperiaLandingProps {
  onNavigateToHome?: (sectionId?: string) => void;
  onNavigateToContact?: () => void;
  onNavigateToWorks?: () => void;
  onNavigateToWhatWeDo?: () => void;
  onNavigateToBlogs?: () => void;
  onNavigateToWhyEsperia?: () => void;
}

// Hero Carousel Slides Configuration (Figma Website UI 5, UI 7)
const heroSlides = [
  {
    id: 'website-ui-5',
    name: 'Website UI 5',
    bgStyle: `
      radial-gradient(circle at 85% 45%, rgba(20, 80, 75, 0.35) 0%, transparent 60%),
      radial-gradient(circle at 15% 85%, rgba(10, 40, 38, 0.4) 0%, transparent 50%),
      linear-gradient(135deg, #051413 0%, #071D1B 45%, #051513 100%)
    `,
    bgImage: '',
    scrolledHeaderBg: 'bg-[#051413]/95 shadow-xl backdrop-blur-md',
    mobileMenuBg: 'bg-[#071D1B]',
    renderHeading: () => (
      <>
        <span className="text-[#73A7A3] block">Cloud-Native.</span>
        <span className="bg-gradient-to-r from-[#F26E65] via-[#E2857E] to-[#73A7A3] bg-clip-text text-transparent block">
          AI-Driven.
        </span>
      </>
    ),
    descriptionText:
      'From modern cloud architecture to AI-powered experiences, we engineer digital products that are scalable, secure, resilient, and built to move fast.',
    descClass: 'text-[#73A7A3]/90',
    buttonClass:
      'border border-white hover:bg-white/10 text-white',
    imageSrc: '/assets/figma/hero_slide1_cubes_3d.png',
    imageAlt: 'Cloud-Native AI Digital Engineering 3D Crystals',
    imageWrapperClass: 'max-w-[620px] lg:max-w-[720px] xl:max-w-[780px]',
    statIconClass: 'text-[#F26E65]',
    statNumberClass: 'text-[#F26E65]',
    statLabelClass: 'text-[#73A7A3]',
    statDividerClass: 'border-[#73A7A3]/25'
  },
  {
    id: 'website-ui-7',
    name: 'Website UI 7',
    bgStyle: `
      radial-gradient(circle at 80% 65%, rgba(235, 95, 55, 0.18) 0%, transparent 48%),
      radial-gradient(circle at 20% 25%, rgba(255, 255, 255, 0.03) 0%, transparent 40%),
      linear-gradient(135deg, rgb(26, 28, 31) 0%, rgb(19, 20, 22) 55%, rgb(11, 12, 14) 100%)
    `,
    bgImage: '/assets/figma/ui7_hero_bg.png',
    scrolledHeaderBg: 'bg-[#141618]/95 shadow-xl backdrop-blur-md',
    mobileMenuBg: 'bg-[#181B1E]',
    renderHeading: () => (
      <>
        <span className="text-white block">Cloud-Native.</span>
        <span className="text-white block">AI-Driven.</span>
      </>
    ),
    descriptionText:
      'From modern cloud architecture to AI-powered experiences, we engineer digital products that are scalable, secure, resilient, and built to move fast.',
    descClass: 'text-white/75',
    buttonClass:
      'border border-white hover:bg-white/10 text-white',
    imageSrc: '',
    imageAlt: 'Neural Topography Digital Landscape',
    imageWrapperClass: 'max-w-[640px] lg:max-w-[760px] xl:max-w-[820px]',
    statIconClass: 'text-white',
    statNumberClass: 'text-white',
    statLabelClass: 'text-white/70',
    statDividerClass: 'border-white/20'
  }
];

const statsItems = [
  {
    icon: Users2,
    value: '150+',
    label: 'YEARS OF COLLECTIVE EXPERIENCE'
  },
  {
    icon: Monitor,
    value: '50+',
    label: 'PROJECT DELIVERED'
  },
  {
    icon: Target,
    value: '100%',
    label: 'SUCCESS RATE'
  },
  {
    icon: Globe,
    value: '03',
    label: 'GLOBAL OFFICES'
  }
];

export default function EsperiaLanding({
  onNavigateToHome,
  onNavigateToContact,
  onNavigateToWorks,
  onNavigateToWhatWeDo,
  onNavigateToBlogs,
  onNavigateToWhyEsperia
}: EsperiaLandingProps = {}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);

  // Auto-advance carousel in a continuous loop every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const goToPrevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  const goToNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX - touchEndX;
    if (diff > 50) {
      goToNextSlide();
    } else if (diff < -50) {
      goToPrevSlide();
    }
    setTouchStartX(null);
  };

  // Track window scroll to smoothly adapt header over light sections
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const currentSlideConfig = heroSlides[currentSlide];

  return (
    <div className="min-h-screen flex flex-col justify-between bg-[#F6F6F3] text-[#0A0A0A] font-['Manrope',sans-serif] antialiased selection:bg-[#C5445A] selection:text-white">

      {/* Sticky Navigation Bar */}
      <header className={`sticky top-0 z-50 transition-all duration-500 -mb-20 sm:-mb-24 ${isScrolled ? currentSlideConfig.scrolledHeaderBg : 'bg-transparent'
        }`}>
        <div className="max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-16 h-20 sm:h-24 flex items-center justify-between">
          <a href="#" className="focus:outline-none flex items-center group">
            <img
              src="/assets/figma/esperia_logo_white.svg"
              alt="ESPERIA QUANTUM"
              className="h-9 sm:h-11 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            />
          </a>

          <nav className="hidden md:flex items-center gap-8 lg:gap-10 text-[13px] font-medium text-white">
            <button
              type="button"
              onClick={() => onNavigateToWhatWeDo ? onNavigateToWhatWeDo() : (window.location.hash = '#what-we-do')}
              className="hover:text-white/80 transition-colors duration-200 cursor-pointer"
            >
              What We Do
            </button>
            <button
              type="button"
              onClick={() => onNavigateToWhyEsperia ? onNavigateToWhyEsperia() : (window.location.hash = '#why-esperia')}
              className="hover:text-white/80 transition-colors duration-200 cursor-pointer"
            >
              Why Esperia
            </button>
            <button
              type="button"
              onClick={() => onNavigateToWorks ? onNavigateToWorks() : (window.location.hash = '#our-works')}
              className="hover:text-white/80 transition-colors duration-200 cursor-pointer"
            >
              Our Works
            </button>
            <button
              type="button"
              onClick={() => onNavigateToBlogs ? onNavigateToBlogs() : (window.location.hash = '#blogs')}
              className="hover:text-white/80 transition-colors duration-200 cursor-pointer"
            >
              Blogs &amp; Newsletters
            </button>
            <button
              type="button"
              onClick={() => onNavigateToContact ? onNavigateToContact() : (window.location.hash = '#contact-us')}
              className="hover:text-white/80 transition-colors duration-200 cursor-pointer"
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
          <div className={`md:hidden ${currentSlideConfig.mobileMenuBg} px-6 py-6 flex flex-col gap-4 relative z-50 shadow-2xl animate-in slide-in-from-top duration-300`}>
            <a href="#what-we-do" className="text-white hover:text-white/80" onClick={() => setMobileMenuOpen(false)}>What We Do</a>
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                if (onNavigateToWhyEsperia) onNavigateToWhyEsperia();
                else window.location.hash = '#why-esperia';
              }}
              className="text-left text-white hover:text-white/80 cursor-pointer"
            >
              Why Esperia
            </button>
            <button
              type="button"
              className="text-left text-white hover:text-white/80 cursor-pointer"
              onClick={() => {
                setMobileMenuOpen(false);
                if (onNavigateToWorks) onNavigateToWorks();
                else window.location.hash = '#our-works';
              }}
            >
              Our Works
            </button>
            <button
              type="button"
              className="text-left text-white hover:text-white/80 cursor-pointer"
              onClick={() => {
                setMobileMenuOpen(false);
                if (onNavigateToBlogs) onNavigateToBlogs();
                else window.location.hash = '#blogs';
              }}
            >
              Blogs &amp; Newsletters
            </button>
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                if (onNavigateToContact) onNavigateToContact();
                else window.location.hash = '#contact-us';
              }}
              className="text-left text-white font-semibold pt-2 border-t border-white/20 cursor-pointer"
            >
              Contact Us
            </button>
          </div>
        )}
      </header>

      {/* ========================================================================= */}
      {/* 1. HERO SECTION (CONTINUOUS LOOPING CAROUSEL: FIGMA UI 5, 6, 7)           */}
      {/* ========================================================================= */}
      <section
        className="relative text-white overflow-hidden select-none"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {/* Dynamic Atmospheric Background Cross-fade Layers */}
        {heroSlides.map((slide, index) => {
          const isActive = currentSlide === index;
          return (
            <div
              key={`bg-${slide.id}`}
              className={`absolute inset-0 transition-opacity duration-[1400ms] ease-in-out pointer-events-none overflow-hidden ${isActive ? 'opacity-100 z-[1]' : 'opacity-0 z-0'
                }`}
              style={{ background: slide.bgStyle }}
            >
              {slide.bgImage && (
                <img
                  src={slide.bgImage}
                  alt=""
                  className="absolute right-0 bottom-0 w-full h-full object-cover object-right-bottom pointer-events-none select-none"
                />
              )}
            </div>
          );
        })}

        {/* Ambient subtle light glow that moves softly */}
        <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-white/[0.03] rounded-full blur-[140px] pointer-events-none z-[2]" />

        {/* Main Hero Stage (Stable, unified layout with zero text jitter) */}
        <div className="max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-16 pt-32 sm:pt-36 lg:pt-40 pb-8 sm:pb-12 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">

          {/* Left Column: Heading, description, button */}
          <div className="lg:col-span-6 z-10">
            {/* Seamless Heading Cross-Dissolve */}
            <div className="relative mb-7">
              {/* UI 5 Style: Metallic Teal + Coral to Teal Gradient */}
              <h1
                className={`text-5xl sm:text-7xl lg:text-[84px] xl:text-[92px] font-bold tracking-[-0.03em] leading-[1.04] font-sora transition-opacity duration-1000 ease-in-out ${currentSlide === 0
                  ? 'opacity-100 pointer-events-auto'
                  : 'opacity-0 pointer-events-none absolute inset-0'
                  }`}
              >
                <span className="text-[#73A7A3] block">Cloud-Native.</span>
                <span className="bg-gradient-to-r from-[#F26E65] via-[#E2857E] to-[#73A7A3] bg-clip-text text-transparent block">
                  AI-Driven.
                </span>
              </h1>

              {/* UI 6 & 7 Style: Solid White */}
              <h1
                className={`text-5xl sm:text-7xl lg:text-[84px] xl:text-[92px] font-bold tracking-[-0.03em] leading-[1.04] font-sora text-white transition-opacity duration-1000 ease-in-out ${currentSlide !== 0
                  ? 'opacity-100 pointer-events-auto'
                  : 'opacity-0 pointer-events-none absolute inset-0'
                  }`}
              >
                <span className="block">Cloud-Native.</span>
                <span className="block">AI-Driven.</span>
              </h1>
            </div>

            {/* Description Text with Smooth Color Palette Adaptation */}
            <p
              className={`text-base sm:text-[17px] leading-[1.75] max-w-[490px] mb-10 font-manrope font-normal transition-colors duration-1000 ease-in-out ${currentSlideConfig.descClass}`}
            >
              From modern cloud architecture to AI-powered experiences, we engineer digital products that are scalable, secure, resilient, and built to move fast.
            </p>

            {/* CTA Button with Smooth Color & Border Transition */}
            <div>
              <a
                href="#our-works"
                onClick={(e) => {
                  if (onNavigateToWorks) {
                    e.preventDefault();
                    onNavigateToWorks();
                  }
                }}
                className={`inline-flex items-center justify-center font-medium text-sm sm:text-base px-8 py-3 rounded-full border border-white hover:border-white hover:bg-white/10 text-white transition-all duration-1000 ease-in-out cursor-pointer shadow-sm ${currentSlideConfig.buttonClass}`}
              >
                See our works
              </a>
            </div>
          </div>

          {/* Right Column: 3D Visual Centerpiece */}
          <div className="lg:col-span-6 flex justify-center lg:justify-end relative">
            <div className="relative w-full max-w-[640px] lg:max-w-[760px] xl:max-w-[820px] -mr-4 lg:-mr-12 xl:-mr-16 min-h-[380px] sm:min-h-[460px] lg:min-h-[520px] flex items-center justify-center lg:justify-end">
              {heroSlides.map((slide, index) => {
                const isActive = currentSlide === index;
                if (!slide.imageSrc) return null;
                return (
                  <div
                    key={slide.id}
                    className={`absolute inset-0 flex items-center justify-center lg:justify-end transition-opacity duration-1000 ease-in-out ${isActive ? 'opacity-100 pointer-events-auto z-10' : 'opacity-0 pointer-events-none z-0'
                      }`}
                  >
                    <img
                      src={slide.imageSrc}
                      alt={slide.imageAlt}
                      className="w-full h-auto max-h-[540px] object-contain select-none pointer-events-none drop-shadow-[0_24px_48px_rgba(0,0,0,0.35)]"
                    />
                  </div>
                );
              })}
            </div>
          </div>

        </div>

        {/* Hero Stats Strip - Seamlessly adapting colors with active slide (No horizontal lines, no black backdrop) */}
        <div className="relative z-20 pb-12 sm:pb-16 pt-2">
          <div className="max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-16 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-0">
            {statsItems.map((stat, idx) => {
              const Icon = stat.icon;
              const isFirst = idx === 0;
              const isLast = idx === statsItems.length - 1;
              return (
                <div
                  key={stat.label}
                  className={`flex flex-col transition-colors duration-1000 ease-in-out ${!isLast ? `pr-6 md:pr-8 lg:pr-12 md:border-r ${currentSlideConfig.statDividerClass}` : ''
                    } ${!isFirst ? 'md:pl-6 lg:pl-10' : ''}`}
                >
                  <div className="flex items-center gap-3 mb-2">
                    <Icon
                      size={24}
                      className={`shrink-0 transition-colors duration-1000 ease-in-out ${currentSlideConfig.statIconClass}`}
                    />
                    <span
                      className={`text-3xl sm:text-4xl lg:text-[42px] font-bold font-manrope leading-none tracking-tight transition-colors duration-1000 ease-in-out ${currentSlideConfig.statNumberClass}`}
                    >
                      {stat.value}
                    </span>
                  </div>
                  <span
                    className={`text-[10.5px] sm:text-[11.5px] font-bold tracking-[0.18em] uppercase font-manrope transition-colors duration-1000 ease-in-out ${currentSlideConfig.statLabelClass}`}
                  >
                    {stat.label}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. WHO WE ARE (EXACT DESIGN MATCHING FIGMA & REFERENCE)                  */}
      {/* ========================================================================= */}
      <section id="what-we-do" className="bg-white py-24 sm:py-28 px-6 sm:px-10 lg:px-16 w-full relative">
        <div className="max-w-[1360px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16 lg:mb-20">
            <div className="lg:col-span-7">
              <div className="flex items-center gap-2 mb-5">
                <span className="w-2 h-2 rounded-full bg-[#E63956]" />
                <span className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.25em] text-[#8E8E8E] font-manrope">
                  WHO WE ARE
                </span>
              </div>

              <h2 className="text-4xl sm:text-6xl lg:text-[68px] xl:text-[72px] font-bold tracking-[-0.03em] text-[#0A0A0A] leading-[1.08] font-parkinsans mb-8">
                We are where <span className="text-[#DE3D5B]">creative</span>{' '}
                <span className="text-[#2EB89E]">vision</span>
                <br className="hidden sm:inline" />
                meets <span className="text-[#6B8079]">intelligent</span> solutions.
              </h2>

              <div className="space-y-4 text-sm sm:text-[16px] text-[#4A4A4A] leading-[1.8] max-w-2xl font-manrope">
                <p>
                  We turn ideas into products people can understand, adopt, and rely on — combining creativity, technology, and deep human understanding.
                </p>
                <p>
                  By becoming an extension of your organization, we help you navigate complexity, accelerate delivery, and build things that create lasting value for real people.
                </p>
              </div>
            </div>

            {/* Floating 3D Crystal Visual (Seamless, No Container Box) */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <div className="relative">
                <img
                  src="/assets/figma/93db253d9a77bca6768960eed7492c046fe70768.png"
                  alt="Esperia Intelligent Vision"
                  className="w-72 sm:w-96 lg:w-[460px] xl:w-[500px] h-auto object-contain select-none pointer-events-none drop-shadow-sm hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>
            </div>
          </div>

          {/* 4 Feature Columns (Minimalist, Elevated, Exact Reference) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-7">
            {[
              {
                num: "01",
                title: <>Human-First<br />Experiences</>,
                desc: "People have always been at the heart of everything we build. Technology alone doesn't make products successful — understanding humans does.",
                img: "/assets/figma/cafb06ae0ce17fab8ca6f12212836ab31b0574fe.png"
              },
              {
                num: "02",
                title: <>AI-Enhanced<br />Development</>,
                desc: "We use AI to move faster, remove repetitive effort, and give our teams more time to focus on the work that matters most.",
                img: "/assets/figma/76aee45c597b60d014650433aaf1b8e61caf0bf1.png"
              },
              {
                num: "03",
                title: <>End-to-End Product<br />Development</>,
                desc: "From ideation and validation to design, engineering, and deployment — we bring the right people, process, and technology together.",
                img: "/assets/figma/2a3025d19f7f1ef9accf3831c9527d4d5644fe1a.png"
              },
              {
                num: "04",
                title: <>Partnership Co-<br />creation</>,
                desc: "We become an extension of your team, align around your goals, and stay focused on creating value long after launch.",
                img: "/assets/figma/3e50b3dcfbdf8ecf5243ba83d59c3f4d53750852.png"
              }
            ].map((card, idx) => (
              <div
                key={idx}
                className="group bg-[#F8F9FA] rounded-[24px] p-7 sm:p-8 flex flex-col justify-between min-h-[540px] sm:min-h-[580px] hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300"
              >
                <div className="relative z-10">
                  <span className="text-[13px] font-bold text-[#DE3D5B] tracking-wider mb-5 block font-manrope">
                    {card.num}
                  </span>
                  <h3 className="text-xl sm:text-[22px] font-bold text-[#0A0A0A] leading-snug mb-3 font-parkinsans">
                    {card.title}
                  </h3>
                  <p className="text-xs sm:text-[14px] text-[#666666] leading-[1.65] font-manrope">
                    {card.desc}
                  </p>
                </div>

                <div className="w-full flex items-end justify-center pt-8 relative">
                  <img
                    src={card.img}
                    alt=""
                    className="w-full h-auto max-h-[250px] object-contain group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. WHAT WE DO: HUMAN INGENUITY & INTELLIGENT SYSTEMS                      */}
      {/* ========================================================================= */}
      <section className="py-16 sm:py-20 lg:py-24 px-6 max-w-7xl mx-auto relative overflow-visible w-full">
        <div className="w-full rounded-[32px] sm:rounded-[36px] lg:rounded-[40px] bg-white border border-black/[0.05] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.07)] relative overflow-visible flex flex-col lg:flex-row items-stretch group">

          {/* Card Rounded Background Frame (clipped internally for the gradient panel and white base) */}
          <div className="absolute inset-0 rounded-[32px] sm:rounded-[36px] lg:rounded-[40px] overflow-hidden pointer-events-none flex flex-col lg:flex-row">
            {/* Left White Base */}
            <div className="w-full lg:w-[56%] xl:w-[57%] bg-white h-full" />
            {/* Right Atmospheric Sage-to-Peach Gradient Panel */}
            <div
              className="w-full lg:w-[44%] xl:w-[43%] h-full"
              style={{
                background: 'linear-gradient(135deg, #CFD8D5 0%, #D8DFDC 35%, #EAD5CE 100%)'
              }}
            />
          </div>

          {/* Left Column: Typography & Gradient-Border CTA */}
          <div className="w-full lg:w-[56%] xl:w-[57%] p-8 sm:p-12 lg:p-14 xl:p-16 flex flex-col justify-center items-start relative z-10">
            <div className="flex items-center gap-2.5 mb-5 sm:mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#E63956]" />
              <span className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.25em] text-[#8E8E8E] font-manrope">
                WHAT WE DO
              </span>
            </div>

            <h2 className="text-3xl sm:text-5xl lg:text-[48px] xl:text-[54px] font-bold text-[#0A0A0A] tracking-[-0.03em] leading-[1.1] mb-5 sm:mb-6 font-parkinsans">
              Human <span className="text-[#857F7A]">I</span><span className="text-[#359E8C]">ngenuity</span><span className="text-[#E63956]">.</span>
              <br />
              Intelligent Systems.
            </h2>

            <p className="text-[#555555] text-sm sm:text-[15px] lg:text-[16px] leading-[1.75] max-w-lg mb-8 sm:mb-9 font-manrope">
              We connect AI, data, cloud, and digital design to unlock business transformation — enabling organisations to innovate with purpose and scale with agility.
            </p>

            <a
              href="#what-we-do"
              onClick={(e) => {
                if (onNavigateToWhatWeDo) {
                  e.preventDefault();
                  onNavigateToWhatWeDo();
                }
              }}
              className="inline-flex items-center justify-center text-xs sm:text-[13px] font-semibold tracking-wide px-7 py-3 rounded-full transition-all duration-300 shadow-sm cursor-pointer hover:shadow-md hover:scale-[1.02]"
              style={{
                background: 'linear-gradient(white, white) padding-box, linear-gradient(90deg, #D4425D 0%, #359E8C 100%) border-box',
                border: '1.5px solid transparent',
                color: '#824552'
              }}
            >
              Explore our core services
            </a>
          </div>

          {/* Right Column: Artwork Container (Breaking out gracefully above the card frame) */}
          <div className="w-full lg:w-[44%] xl:w-[43%] min-h-[340px] sm:min-h-[400px] lg:min-h-[460px] xl:min-h-[490px] relative flex items-end justify-start overflow-visible z-20">
            <div className="relative lg:absolute lg:bottom-0 lg:left-0 lg:right-0 w-full h-[360px] sm:h-[420px] lg:h-[520px] xl:h-[550px] flex items-end justify-start pointer-events-none select-none overflow-visible">
              <img
                src="/assets/figma/eeb3da2613b28f8116f8bfb9beda3c0e7bee3d5d.png"
                alt="Human Ingenuity & Intelligent Systems"
                className="w-auto h-full max-w-none object-contain object-left select-none pointer-events-none drop-shadow-[0_12px_24px_rgba(0,0,0,0.08)] group-hover:scale-[1.02] transition-transform duration-700 ease-out pl-3 sm:pl-5 lg:pl-6"
              />
              {/* Soft Mist Dissolve at bottom of bust */}
              <div
                className="absolute bottom-0 left-0 right-0 h-16 sm:h-24 pointer-events-none rounded-b-[32px] sm:rounded-b-[36px] lg:rounded-b-[40px]"
                style={{
                  background: 'linear-gradient(to top, rgba(234, 213, 206, 0.95) 0%, rgba(234, 213, 206, 0.4) 50%, transparent 100%)'
                }}
              />
            </div>
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. OUR PRODUCTS: WHAT WE HAVE BUILT (EXACT FIGMA 3-COLUMN LAYOUT)         */}
      {/* ========================================================================= */}
      <section id="our-works" className="py-16 sm:py-20 lg:py-24 px-6 max-w-7xl mx-auto relative overflow-visible w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 xl:gap-10 items-stretch">

          {/* Column 1: Left Headline, Description & Bottom-Aligned Button */}
          <div className="lg:col-span-4 flex flex-col justify-between items-start">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-[#E63956]" />
                <span className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.25em] text-[#8E8E8E] font-manrope">
                  OUR PRODUCTS
                </span>
              </div>

              <h2 className="text-4xl sm:text-5xl lg:text-[46px] xl:text-[54px] font-bold text-[#0A0A0A] tracking-[-0.03em] leading-[1.08] mb-4 font-parkinsans">
                What We have Built.
              </h2>

              <p className="text-[#555555] text-sm sm:text-base leading-[1.7] max-w-[340px] font-manrope">
                Platforms and products we designed, engineered, and shipped — end to end.
              </p>
            </div>

            {/* View All Products button aligned at the bottom baseline */}
            <div className="mt-8 lg:mt-auto pt-4">
              <a
                href="#our-works"
                onClick={(e) => {
                  if (onNavigateToWorks) {
                    e.preventDefault();
                    onNavigateToWorks();
                  }
                }}
                className="inline-flex items-center justify-center text-xs sm:text-[13px] font-semibold tracking-wide px-7 py-3 rounded-full transition-all duration-300 shadow-sm cursor-pointer hover:shadow-md hover:scale-[1.02]"
                style={{
                  background: 'linear-gradient(white, white) padding-box, linear-gradient(90deg, #D4425D 0%, #359E8C 100%) border-box',
                  border: '1.5px solid transparent',
                  color: '#824552'
                }}
              >
                View All Products
              </a>
            </div>
          </div>

          {/* Column 2: Middle Tall Portrait Card (Whiteboard Innovation Collaboration) */}
          <div className="lg:col-span-4 flex flex-col">
            <div
              onClick={() => {
                if (onNavigateToWorks) onNavigateToWorks();
              }}
              className="group relative rounded-[24px] sm:rounded-[28px] overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer flex flex-col justify-between w-full h-[420px] sm:h-[480px] lg:h-full min-h-[400px] lg:min-h-[460px]"
            >
              {/* High-res Whiteboard / Brainstorming Image */}
              <img
                src="/assets/figma/bb9dd026594ae371c3f28fc99578043dbe6c0457.png"
                alt="XConnect Platform"
                className="absolute inset-0 w-full h-full object-cover object-[78%_center] group-hover:scale-105 transition-transform duration-700 ease-out"
              />

              {/* Gradient Scrim Overlay for optimal text legibility */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-black/10 pointer-events-none" />

              {/* Top-Left Frosted Badge: XConnect */}
              <div className="relative z-10 p-5 sm:p-6">
                <span
                  className="inline-flex items-center text-xs font-semibold text-white px-4 py-1.5 rounded-full border border-white/20 backdrop-blur-md shadow-sm"
                  style={{
                    background: 'linear-gradient(90deg, rgba(197, 68, 90, 0.8) 0%, rgba(62, 165, 148, 0.7) 100%)'
                  }}
                >
                  XConnect
                </span>
              </div>

              {/* Bottom Content: Title & Angled Up-Right Arrow */}
              <div className="relative z-10 p-6 flex items-end justify-between gap-4 mt-auto">
                <p className="text-white text-sm sm:text-[15px] font-medium leading-snug max-w-[240px] font-manrope">
                  Management platform that unifies projects, tasks, and collaboration
                </p>
                <div className="w-8 h-8 rounded-full flex items-center justify-center text-white shrink-0 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7H7M17 7V17" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Column 3: Right Landscape Card & Bottom Carousel Controls */}
          <div className="lg:col-span-4 flex flex-col justify-between">
            <div>
              {/* Landscape Card: Fiber Optics / Data Network */}
              <div
                onClick={() => {
                  if (onNavigateToWorks) onNavigateToWorks();
                }}
                className="group relative rounded-[20px] sm:rounded-[24px] overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 cursor-pointer aspect-[16/10] sm:aspect-[16/9.5] w-full"
              >
                <img
                  src="/assets/figma/xconnect_fiber_clean.png"
                  alt="XConnect Technology"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>

              {/* Description Text */}
              <p className="text-[#333333] text-sm sm:text-[14.5px] leading-[1.65] mt-5 sm:mt-6 font-manrope">
                Management platform that unifies projects, tasks, and collaboration to improve visibility, efficiency, and productivity.
              </p>
            </div>

            {/* Carousel Navigation Arrows aligned with the bottom baseline */}
            <div className="flex items-center gap-4 mt-6 sm:mt-8 pt-2">
              <button
                type="button"
                aria-label="Previous product"
                className="w-8 h-8 flex items-center justify-center text-[#9E7B70] hover:text-[#0A0A0A] hover:scale-110 transition-all cursor-pointer"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 12H5M5 12L12 19M5 12L12 5" />
                </svg>
              </button>
              <button
                type="button"
                aria-label="Next product"
                className="w-8 h-8 flex items-center justify-center text-[#9E7B70] hover:text-[#0A0A0A] hover:scale-110 transition-all cursor-pointer"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 12H19M19 12L12 5M19 12L12 19" />
                </svg>
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 6. WHY ESPERIA: ENTERPRISE DELIVERY MODEL (COLOSSAL BANNER)               */}
      {/* ========================================================================= */}
      <section id="why-esperia" className="py-16 sm:py-20 lg:py-24 px-6 max-w-7xl mx-auto relative overflow-visible w-full">
        <div className="w-full rounded-[28px] sm:rounded-[36px] bg-enterprise-banner text-white px-7 sm:px-10 md:px-12 lg:px-14 py-8 sm:py-10 md:py-12 lg:py-14 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-6 shadow-xl relative overflow-visible group">
          {/* Left Text Column */}
          <div className="w-full md:w-[62%] lg:w-[65%] z-10">
            <div className="flex items-center gap-2 mb-3.5 sm:mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#E48870]" />
              <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.25em] text-[#FFE3DC]">
                Why Esperia
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-[32px] lg:text-[40px] xl:text-[46px] font-bold tracking-tight leading-[1.12] mb-4 sm:mb-5 font-parkinsans text-white sm:whitespace-nowrap">
              Enterprise Delivery Model
            </h2>

            <div className="text-[#E8F1EF] text-xs sm:text-sm lg:text-[14.5px] leading-[1.65] mb-6 sm:mb-7 font-manrope space-y-1.5 max-w-xl">
              <p className="font-normal text-white/95">It’s how we do it.</p>
              <p className="text-[#EDF3F1]/85">
                Many agencies check the same capability boxes. What separates Esperia is the discipline we bring to execution — and the ambition we bring to outcomes.
              </p>
            </div>

            <div>
              <button
                type="button"
                onClick={() => onNavigateToWhyEsperia ? onNavigateToWhyEsperia() : (window.location.hash = '#why-esperia')}
                className="bg-[#DF7E65] hover:bg-[#eb8a72] text-[#3D1810] font-semibold text-xs sm:text-[13px] px-6 py-2.5 sm:px-7 sm:py-3 rounded-full transition-all duration-300 shadow-md hover:shadow-lg hover:scale-105 active:scale-95 cursor-pointer inline-flex items-center justify-center"
              >
                Know More
              </button>
            </div>
          </div>

          {/* Right 3D Artwork Column (Breaking out gracefully above and below the banner) */}
          <div className="w-full md:w-[38%] lg:w-[35%] flex justify-center md:justify-end items-center relative md:static">
            <div className="relative md:absolute md:right-4 lg:right-8 xl:right-12 md:top-1/2 md:-translate-y-1/2 w-full max-w-[280px] sm:max-w-[320px] md:max-w-none md:w-[310px] lg:w-[355px] xl:w-[395px] pointer-events-none select-none z-10 flex justify-center">
              <img
                src="/assets/figma/2007eccd674cd45280b84a0c5e53c6f8ab9f5331.png"
                alt="Enterprise Delivery Model Architecture"
                className="w-full h-auto object-contain drop-shadow-[0_12px_24px_rgba(0,0,0,0.2)] group-hover:scale-[1.03] transition-transform duration-700 ease-out"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 7. CLIENTS & PARTNERS (INFINITE SMOOTH MARQUEE ANIMATION)                  */}
      {/* ========================================================================= */}
      <section className="py-16 sm:py-20 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 mb-10 text-center">
          <div className="inline-flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C5445A]" />
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#6B6B6B]">
              CLIENTS &amp; PARTNERS
            </span>
          </div>
        </div>

        {/* Infinite Continuous Marquee Animation */}
        <div className="relative w-full overflow-hidden flex items-center">
          <div className="animate-marquee flex items-center gap-16 sm:gap-24">
            {[
              { src: "/assets/figma/71275132a7a6bf61a440c359d96c9de83f19d6ee.png", alt: "Emerson" },
              { src: "/assets/figma/b32e0d11de573570c26ac94b4a8301e883991e66.png", alt: "Company Logo" },
              { src: "/assets/figma/23e3280e9d5a96be6a54fe4719ed441a1f74e36f.png", alt: "Watermelon Software" },
              { src: "/assets/figma/18ba1c8d2f2ae50ae81d64fa14a489797d1033fc.png", alt: "Aven" },
              { src: "/assets/figma/e18508e228ae5c36dec20a02fa235cdb1e3ef48a.png", alt: "Circle" },
              // Duplicate set for infinite loop
              { src: "/assets/figma/71275132a7a6bf61a440c359d96c9de83f19d6ee.png", alt: "Emerson" },
              { src: "/assets/figma/b32e0d11de573570c26ac94b4a8301e883991e66.png", alt: "Company Logo" },
              { src: "/assets/figma/23e3280e9d5a96be6a54fe4719ed441a1f74e36f.png", alt: "Watermelon Software" },
              { src: "/assets/figma/18ba1c8d2f2ae50ae81d64fa14a489797d1033fc.png", alt: "Aven" },
              { src: "/assets/figma/e18508e228ae5c36dec20a02fa235cdb1e3ef48a.png", alt: "Circle" }
            ].map((logo, index) => (
              <div key={index} className="h-14 flex items-center justify-center shrink-0 grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100 hover:scale-110">
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="h-10 sm:h-12 w-auto object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 8. TESTIMONIALS (MASONRY WITH ELEVATION & HOVER ANIMATIONS)               */}
      {/* ========================================================================= */}
      <section className="py-28 px-6 max-w-7xl mx-auto relative">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex justify-center gap-2 mb-5 text-[#ECB22E] animate-bounce" style={{ animationDuration: '3s' }}>
            {[...Array(5)].map((_, i) => (
              <svg key={i} className="w-8 h-8 fill-current" viewBox="0 0 24 24">
                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
              </svg>
            ))}
          </div>

          <h2
            className="text-4xl sm:text-6xl font-normal text-[#0A0A0A] tracking-tight leading-tight font-parkinsans"
          >
            Hear what leaders love about our work
          </h2>
        </div>

        {/* 4-Column Masonry Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-start relative z-10">
          {[
            {
              name: "Rajeev Vashist",
              role: "CEO, Watermelon Software Inc",
              quote: "Esperia is one of the most innovative design and technology studios we've worked with — and they truly are a fundamental value differentiator."
            },
            {
              name: "Kane William",
              role: "VP Engineering, CloudScale",
              quote: "From day one, their architectural rigor and velocity astonished our board. They delivered what would have taken internal teams eighteen months in just four."
            },
            {
              name: "Elena Rostova",
              role: "CTO, Horizon FinTech",
              quote: "Their combination of human-first design thinking and AI-powered pipeline automation is unlike anything else in the modern agency landscape."
            },
            {
              name: "Steve Fleming",
              role: "Head of Product, Omnichannel",
              quote: "The colossal improvements in our user adoption metrics speak for themselves. Esperia doesn't just build software — they craft category leaders."
            }
          ].map((t, idx) => (
            <div
              key={idx}
              className="colossal-card bg-white border border-[#E9E5E5] rounded-[30px] p-8 flex flex-col justify-between shadow-colossal hover:border-[#C5445A]/30 transition-all duration-300 min-h-[320px]"
            >
              <div>
                <h4 className="text-[22px] font-bold text-[#111827] font-parkinsans leading-tight">
                  {t.name}
                </h4>
                <p className="text-xs text-[#6B7280] font-medium mt-1">
                  {t.role}
                </p>
                <div className="flex gap-1.5 my-4 text-[#ECB22E]">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-[#222222] text-[15px] leading-relaxed font-manrope italic">
                &ldquo;{t.quote}&rdquo;
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 9. OUR WORKS: DIGITAL PRODUCTS (EXACT FIGMA FRAME REPLICA)                */}
      {/* ========================================================================= */}
      <section className="py-16 sm:py-20 lg:py-24 px-6 max-w-7xl mx-auto relative overflow-visible w-full">
        {/* The Figma Frame (Bounded container with ambient gradient & overflow-hidden) */}
        <div
          className="relative w-full rounded-[24px] sm:rounded-[32px] overflow-hidden border border-[#E8DFD9]/60 shadow-[0_12px_40px_rgba(0,0,0,0.04)] pt-6 sm:pt-8 lg:pt-9 px-4 sm:px-8 lg:px-12 xl:px-14 pb-16 sm:pb-20 lg:pb-24"
          style={{
            background: 'linear-gradient(155deg, #F5ECE8 0%, #F8F7F5 35%, #EDE2DF 70%, #E2EAE7 100%)',
          }}
        >
          {/* Subtle ambient lighting inside the frame */}
          <div className="absolute -bottom-10 right-1/4 w-96 h-40 bg-[#E8D5D0]/40 rounded-full blur-3xl pointer-events-none" />

          {/* The White Floating Card */}
          <div className="rounded-[20px] sm:rounded-[24px] bg-white border border-slate-200/70 shadow-[0_15px_45px_rgba(0,0,0,0.06)] relative flex flex-col lg:flex-row group">

            {/* Right Gradient Panel Background (Desktop: 36% width framing the artwork seamlessly) */}
            <div
              className="hidden lg:block absolute top-0 right-0 bottom-0 w-[37%] xl:w-[36%] rounded-r-[20px] sm:rounded-r-[24px] overflow-hidden pointer-events-none"
              style={{
                background: 'linear-gradient(90deg, #D4DBD9 0%, #D8D6D4 30%, #EED2CA 100%)',
              }}
            />

            {/* Left Text Column */}
            <div className="w-full lg:w-[63%] xl:w-[64%] p-7 sm:p-10 lg:px-12 lg:py-10 xl:px-14 xl:py-12 z-10 flex flex-col justify-center">
              <div className="flex items-center gap-2 mb-3.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C5445A]" />
                <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-[#6B6B6B]">
                  Our Works
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-[42px] xl:text-[46px] font-bold text-[#0A0A0A] tracking-tight leading-[1.12] mb-4 font-parkinsans">
                Digital Products. <br />
                Real <span className="text-gradient-impact">Impact</span><span className="text-[#0A0A0A]">.</span>
              </h2>

              <p className="text-slate-600 text-sm sm:text-base lg:text-[15px] leading-[1.65] mb-7 font-manrope max-w-xl">
                We partner with businesses and organizations to design, build and scale digital solutions that solve complex challenges and create meaningful outcomes.
              </p>

              <div>
                <button
                  type="button"
                  onClick={() => onNavigateToWorks ? onNavigateToWorks() : (window.location.hash = '#our-works')}
                  className="inline-flex items-center justify-center px-6 py-2 sm:px-7 sm:py-2.5 rounded-full transition-all duration-300 shadow-sm hover:shadow-md hover:scale-[1.03] active:scale-[0.98] cursor-pointer group"
                  style={{
                    background: 'linear-gradient(white, white) padding-box, linear-gradient(90deg, #C57E8B 0%, #A28B8E 50%, #819791 100%) border-box',
                    border: '1.5px solid transparent',
                  }}
                >
                  <span className="text-xs sm:text-[13px] font-medium tracking-wide bg-gradient-to-r from-[#C27E8C] via-[#9F8A8D] to-[#78968F] bg-clip-text text-transparent block">
                    See Our Works
                  </span>
                </button>
              </div>
            </div>

            {/* Right Visual Placeholder to maintain flex sizing on desktop */}
            <div className="w-full lg:w-[37%] xl:w-[36%] min-h-[260px] sm:min-h-[300px] lg:min-h-0 pointer-events-none" />

          </div>

          {/* 3D Woman Artwork - anchored to Frame bottom, clipped flush by frame boundary */}
          <div className="hidden lg:flex absolute right-8 sm:right-12 lg:right-16 xl:right-20 bottom-0 w-[295px] xl:w-[325px] z-20 justify-end pointer-events-none select-none">
            <img
              src="/assets/figma/digital_products_woman_clean.png"
              alt="Digital Products Real Impact"
              className="w-full h-auto object-contain drop-shadow-[0_12px_28px_rgba(0,0,0,0.08)] group-hover:scale-[1.02] transition-transform duration-700 ease-out"
            />
          </div>

          {/* Mobile Artwork (positioned within mobile card) */}
          <div className="lg:hidden flex justify-center mt-4">
            <img
              src="/assets/figma/digital_products_woman_clean.png"
              alt="Digital Products Real Impact"
              className="w-full max-w-[260px] h-auto object-contain"
            />
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 10. BLOGS & NEWSLETTERS                                                   */}
      {/* ========================================================================= */}
      <section id="blogs" className="py-24 px-6 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 mb-14">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C5445A]" />
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#6B6B6B]">
                Blogs &amp; Newsletters
              </span>
            </div>

            <h2
              className="text-3xl sm:text-5xl font-bold text-[#0A0A0A] tracking-tight leading-tight font-parkinsans"
            >
              Insights at the Edge of Design, AI, and Enterprise
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-4 leading-relaxed font-manrope">
              It&apos;s how we do it. Many agencies check the same capability boxes. What separates Esperia is the discipline we bring to execution — and the ambition we bring to outcomes.
            </p>
          </div>

          <div className="shrink-0 flex items-center">
            <button
              type="button"
              onClick={() => onNavigateToBlogs ? onNavigateToBlogs() : (window.location.hash = '#blogs')}
              className="border-2 border-slate-900 text-slate-900 hover:border-[#C5445A] hover:bg-[#C5445A] hover:text-white font-bold text-xs uppercase tracking-wider px-9 py-4 rounded-full transition-all duration-300 shadow-sm hover:scale-105 cursor-pointer"
            >
              SEE ALL BLOGS
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              img: "/assets/figma/a0e90c338be9c298666d3615b2b74e3e586bbaa1.png",
              tag: " /  AI  /  Technology  / ",
              title: "AI Doesn't Replace Creativity. It Removes Friction.",
              date: "2 Jan 2025 / John Doe"
            },
            {
              img: "/assets/figma/8a61ffde7116dd86d327b183bf30b542c05f4962.png",
              tag: " /  AI  /  Technology  / ",
              title: "AI Doesn't Replace Creativity. It Removes Friction.",
              date: "2 Jan 2025 / John Doe"
            },
            {
              img: "/assets/figma/95ff2a9210fa3fece51d5af0276139539b7f5b7d.png",
              tag: " /  AI  /  Technology  / ",
              title: "AI Doesn't Replace Creativity. It Removes Friction.",
              date: "2 Jan 2025 / John Doe"
            }
          ].map((post, i) => (
            <article
              key={i}
              className="colossal-card group cursor-pointer bg-white border border-slate-200/90 rounded-3xl overflow-hidden shadow-colossal hover:shadow-2xl hover:border-[#C5445A]/30 transition-all duration-500 flex flex-col justify-between"
            >
              <div>
                <div className="colossal-image-container w-full h-72 sm:h-80 overflow-hidden relative bg-slate-900">
                  <img
                    src={post.img}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                <div className="p-7 sm:p-8">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#9E1C34] mb-3 block">
                    {post.tag}
                  </span>
                  <h3
                    className="text-xl font-bold text-[#0A0A0A] group-hover:text-[#C5445A] transition-colors leading-snug mb-3 font-parkinsans"
                  >
                    {post.title}
                  </h3>
                </div>
              </div>

              <div className="px-7 sm:px-8 pb-7 sm:pb-8 pt-0">
                <p className="text-xs text-slate-400 font-medium">
                  {post.date}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>


      {/* Shared Unified Brand Footer */}
      <Footer
        activePage="home"
        onNavigateToHome={onNavigateToHome}
        onNavigateToWorks={onNavigateToWorks}
        onNavigateToContact={onNavigateToContact}
        onNavigateToWhatWeDo={onNavigateToWhatWeDo}
        onNavigateToBlogs={onNavigateToBlogs}
        onNavigateToWhyEsperia={onNavigateToWhyEsperia}
      />

    </div>
  );
}
