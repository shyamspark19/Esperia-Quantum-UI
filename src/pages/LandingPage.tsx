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

// Hero Carousel Slides Configuration (Figma Website UI 5, UI 6, UI 7)
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
    id: 'website-ui-6',
    name: 'Website UI 6',
    bgStyle: `
      radial-gradient(circle at 10% 90%, rgba(224, 105, 90, 0.45) 0%, transparent 45%),
      radial-gradient(circle at 90% 15%, rgba(135, 20, 36, 0.35) 0%, transparent 45%),
      linear-gradient(135deg, #B5223C 0%, #BA2845 38%, #A21F36 72%, #8E172B 100%)
    `,
    bgImage: '',
    scrolledHeaderBg: 'bg-[#9E1D34]/95 shadow-xl backdrop-blur-md',
    mobileMenuBg: 'bg-[#8E172B]',
    renderHeading: () => (
      <>
        <span className="text-white block">Cloud-Native.</span>
        <span className="text-white block">AI-Driven.</span>
      </>
    ),
    descriptionText:
      'From modern cloud architecture to AI-powered experiences, we engineer digital products that are scalable, secure, resilient, and built to move fast.',
    descClass: 'text-white/85',
    buttonClass:
      'border border-white hover:bg-white/10 text-white',
    imageSrc: '/assets/figma/hero_slide2_cloud_infra.png',
    imageAlt: 'Cloud-Native AI Digital Engineering Cloud Architecture',
    imageWrapperClass: 'max-w-[640px] lg:max-w-[760px] xl:max-w-[820px]',
    statIconClass: 'text-white',
    statNumberClass: 'text-white',
    statLabelClass: 'text-white/80',
    statDividerClass: 'border-white/25'
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
    <div className="min-h-screen bg-[#F6F6F3] text-[#0A0A0A] font-['Manrope',sans-serif] antialiased selection:bg-[#C5445A] selection:text-white">

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
              className={`absolute inset-0 transition-opacity duration-[1400ms] ease-in-out pointer-events-none overflow-hidden ${
                isActive ? 'opacity-100 z-[1]' : 'opacity-0 z-0'
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
                className={`text-5xl sm:text-7xl lg:text-[84px] xl:text-[92px] font-bold tracking-[-0.03em] leading-[1.04] font-sora transition-opacity duration-1000 ease-in-out ${
                  currentSlide === 0
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
                className={`text-5xl sm:text-7xl lg:text-[84px] xl:text-[92px] font-bold tracking-[-0.03em] leading-[1.04] font-sora text-white transition-opacity duration-1000 ease-in-out ${
                  currentSlide !== 0
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
                    className={`absolute inset-0 flex items-center justify-center lg:justify-end transition-opacity duration-1000 ease-in-out ${
                      isActive ? 'opacity-100 pointer-events-auto z-10' : 'opacity-0 pointer-events-none z-0'
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
                  className={`flex flex-col transition-colors duration-1000 ease-in-out ${
                    !isLast ? `pr-6 md:pr-8 lg:pr-12 md:border-r ${currentSlideConfig.statDividerClass}` : ''
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
      {/* 2. WHO WE ARE (COLOSSAL VISUALS & MANIFESTO CARDS)                        */}
      {/* ========================================================================= */}
      <section id="what-we-do" className="py-28 px-6 max-w-7xl mx-auto relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          <div className="lg:col-span-7">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C5445A]" />
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#6B6B6B]">
                Who We Are
              </span>
            </div>

            <h2
              className="text-4xl sm:text-6xl lg:text-[70px] font-bold tracking-tight text-[#0A0A0A] leading-[1.12] font-parkinsans mb-6"
            >
              We are where <br />
              <span className="text-gradient-creative">
                creative vision
              </span> <br />
              meets intelligent solutions.
            </h2>

            <div className="space-y-4 text-base sm:text-[18px] text-[#333333] leading-[1.8] max-w-2xl mb-8">
              <p>
                We turn ideas into products people can understand, adopt, and rely on — combining creativity, technology, and deep human understanding.
              </p>
              <p>
                By becoming an extension of your organization, we help you navigate complexity, accelerate delivery, and build things that create lasting value for real people.
              </p>
            </div>

            <a
              href="#our-works"
              className="inline-flex items-center gap-3 bg-[#C5445A] hover:bg-[#a93447] text-white font-semibold text-base px-9 py-4 rounded-full transition-all duration-300 shadow-xl shadow-[#C5445A]/25 hover:shadow-2xl hover:-translate-y-0.5"
            >
              <span>Explore our products</span>
              <ArrowRight size={18} />
            </a>
          </div>

          {/* Colossal Section Visual Graphic */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative group cursor-pointer">
              <div className="relative bg-white/60 backdrop-blur-xl border border-white/80 p-6 sm:p-8 rounded-[36px] shadow-2xl transition-all duration-700 ease-out group-hover:scale-105 group-hover:shadow-[0_25px_50px_-12px_rgba(62,165,148,0.3)]">
                <img
                  src="/assets/figma/93db253d9a77bca6768960eed7492c046fe70768.png"
                  alt="Esperia Intelligent Vision"
                  className="w-72 sm:w-96 lg:w-[420px] h-auto object-contain transition-transform duration-500 ease-out group-hover:scale-105"
                />
              </div>
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* 3. 4 MANIFESTO CARDS (COLOSSAL CARDS WITH LIFT & SEAMLESS 3D ART)         */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7 pt-4">
          {[
            {
              num: "01",
              title: "Human-First Experiences",
              desc: "People have always been at the heart of everything we build. Technology alone doesn't make products successful — understanding humans does.",
              img: "/assets/figma/cafb06ae0ce17fab8ca6f12212836ab31b0574fe.png"
            },
            {
              num: "02",
              title: "AI-Enhanced Development",
              desc: "We use AI to move faster, remove repetitive effort, and give our teams more time to focus on the work that matters most.",
              img: "/assets/figma/76aee45c597b60d014650433aaf1b8e61caf0bf1.png"
            },
            {
              num: "03",
              title: "End-to-End Product Development",
              desc: "From ideation and validation to design, engineering, and deployment — we bring the right people, process, and technology together.",
              img: "/assets/figma/2a3025d19f7f1ef9accf3831c9527d4d5644fe1a.png"
            },
            {
              num: "04",
              title: "Partnership Co-creation",
              desc: "We become an extension of your team, align around your goals, and stay focused on creating value long after launch.",
              img: "/assets/figma/3e50b3dcfbdf8ecf5243ba83d59c3f4d53750852.png"
            }
          ].map((card, idx) => (
            <div
              key={idx}
              className="colossal-card group bg-white border border-[#E9E5E5] rounded-[32px] p-8 flex flex-col justify-between shadow-colossal hover:border-[#C5445A]/40 overflow-hidden min-h-[480px]"
            >
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-5">
                  <span className="text-xs font-extrabold text-[#FF3C73] tracking-[0.2em] px-3 py-1 bg-[#FF3C73]/10 rounded-full">
                    {card.num}
                  </span>
                  <div className="w-2 h-2 rounded-full bg-slate-300 group-hover:bg-[#FF3C73] transition-colors" />
                </div>
                <h3
                  className="text-xl sm:text-[22px] font-bold text-[#0A0A0A] leading-snug mb-3 font-parkinsans group-hover:text-[#C5445A] transition-colors"
                >
                  {card.title}
                </h3>
                <p className="text-xs sm:text-[14px] text-[#6B6B6B] leading-[1.7] mb-6">
                  {card.desc}
                </p>
              </div>

              {/* Colossal 3D Card Artwork with Float and Zoom */}
              <div className="colossal-image-container w-full flex items-end justify-center pt-4 relative">
                <div className="absolute inset-0 bg-gradient-to-t from-rose-500/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <img
                  src={card.img}
                  alt={card.title}
                  className="w-full h-auto max-h-[300px] object-contain group-hover:-translate-y-3 transition-transform duration-500"
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. WHAT WE DO: HUMAN INGENUITY (COLOSSAL WIDESCREEN PRESENTATION)         */}
      {/* ========================================================================= */}
      <section className="py-16 px-6 max-w-7xl mx-auto">
        <div className="rounded-[40px] bg-white border border-slate-200/90 p-8 sm:p-14 lg:p-16 flex flex-col lg:flex-row items-center justify-between gap-12 shadow-colossal overflow-hidden relative group">
          <div className="max-w-xl z-10">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-2 h-2 rounded-full bg-[#C5445A]" />
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#6B6B6B]">
                What We Do
              </span>
            </div>

            <h2
              className="text-3xl sm:text-5xl lg:text-[60px] font-bold text-[#0A0A0A] tracking-tight leading-[1.12] mb-6 font-parkinsans"
            >
              Human <span className="text-gradient-ingenuity">Ingenuity</span><span className="text-[#C5445A]">.</span> <br />
              Intelligent Systems.
            </h2>

            <p className="text-slate-700 text-base sm:text-lg leading-[1.8] mb-8 font-manrope">
              We connect AI, data, cloud, and digital design to unlock business transformation — enabling organisations to innovate with purpose and scale with agility.
            </p>

            <a
              href="#services"
              className="inline-flex items-center gap-3 border-2 border-slate-800 text-slate-900 hover:border-[#C5445A] hover:bg-[#C5445A] hover:text-white text-xs uppercase font-bold tracking-wider px-8 py-4 rounded-full transition-all duration-300 shadow-sm group/btn"
            >
              <span>Explore our core services</span>
              <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
            </a>
          </div>

          {/* Colossal Framed Visual */}
          <div className="w-full lg:w-[560px] rounded-3xl overflow-hidden relative shadow-2xl group-hover:shadow-3xl transition duration-500">
            <div className="absolute inset-0 bg-gradient-to-tr from-[#3EA594]/20 to-transparent z-10 pointer-events-none" />
            <img
              src="/assets/figma/eeb3da2613b28f8116f8bfb9beda3c0e7bee3d5d.png"
              alt="Human Ingenuity & Intelligent Systems"
              className="w-full h-auto object-cover rounded-3xl hover:scale-105 transition-transform duration-700"
            />
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. OUR PRODUCTS: WHAT WE HAVE BUILT (COLOSSAL SHOWCASE)                   */}
      {/* ========================================================================= */}
      <section id="our-works" className="py-24 px-6 max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-16">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-[#C5445A]" />
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#6B6B6B]">
                Our Products
              </span>
            </div>

            <h2
              className="text-4xl sm:text-6xl font-bold text-[#0A0A0A] tracking-tight font-parkinsans"
            >
              What We have Built.
            </h2>
            <p className="text-slate-600 text-base sm:text-lg mt-3 font-manrope">
              Platforms and products we designed, engineered, and shipped — end to end.
            </p>
          </div>

          <a
            href="#all-products"
            className="mt-6 sm:mt-0 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-900 hover:text-[#C5445A] transition-colors py-2"
          >
            <span>View All Products</span>
            <ChevronRight size={18} />
          </a>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Colossal Product Card 1 */}
          <div className="colossal-card group relative rounded-[36px] overflow-hidden shadow-colossal-dark bg-[#0F172A] text-white flex flex-col justify-end min-h-[520px] p-8 sm:p-12 border border-slate-800">
            <img
              src="/assets/figma/bb9dd026594ae371c3f28fc99578043dbe6c0457.png"
              alt="XConnect Platform"
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 opacity-70"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-4">
                <span className="inline-block bg-white/20 backdrop-blur-md text-white text-xs font-bold uppercase tracking-wider px-4 py-1.5 rounded-full border border-white/20">
                  XConnect Platform
                </span>
                <span className="text-xs font-semibold text-[#73A7A3] flex items-center gap-1">
                  <TrendingUp size={14} /> High-Velocity Suite
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold font-parkinsans mb-2">
                Unified Enterprise Collaboration Hub
              </h3>
              <p className="text-slate-300 text-base sm:text-lg font-normal leading-relaxed max-w-lg">
                Management platform that unifies projects, cross-functional tasks, and AI orchestration to elevate organizational velocity.
              </p>
            </div>
          </div>

          {/* Colossal Product Card 2 */}
          <div className="colossal-card group relative rounded-[36px] overflow-hidden shadow-colossal bg-white border border-slate-200/90 flex flex-col justify-between min-h-[520px] p-8 sm:p-12">
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-4">
                <span className="inline-block bg-slate-100 text-slate-800 text-xs font-bold uppercase tracking-wider px-4 py-1.5 rounded-full border border-slate-200">
                  XConnect Enterprise
                </span>
                <span className="text-xs font-bold text-[#C5445A] uppercase tracking-wider">
                  Live in Production
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold font-parkinsans text-slate-900 mb-2">
                Visibility, Productivity &amp; Control
              </h3>
              <p className="text-slate-600 text-base sm:text-lg font-normal leading-relaxed mb-6">
                Engineered for global institutions with strict compliance, real-time telemetry, and modular micro-frontends.
              </p>
            </div>

            <div className="colossal-image-container rounded-2xl overflow-hidden border border-slate-200/80 shadow-inner bg-slate-50 flex items-center justify-center p-6 group-hover:border-[#C5445A]/30 transition-colors">
              <img
                src="/assets/figma/c7142bdad8a3d4fe3fc369f54b60a66a9dc47a6c.png"
                alt="Product Interface Preview"
                className="w-full h-auto object-contain rounded-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 6. WHY ESPERIA: ENTERPRISE DELIVERY MODEL (COLOSSAL BANNER)               */}
      {/* ========================================================================= */}
      <section id="why-esperia" className="py-16 px-6 max-w-7xl mx-auto">
        <div className="rounded-[40px] bg-enterprise-banner text-white p-8 sm:p-14 lg:p-16 flex flex-col lg:flex-row items-center justify-between gap-12 shadow-2xl overflow-hidden relative group">
          <div className="max-w-xl z-10">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#E58870]" />
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#FFE3DC]">
                Why Esperia
              </span>
            </div>

            <h2
              className="text-3xl sm:text-5xl lg:text-[56px] font-bold tracking-tight leading-[1.14] mb-6 font-parkinsans"
            >
              Enterprise Delivery Model
            </h2>

            <p className="text-[#E8F1EF] text-base sm:text-lg leading-[1.8] mb-8 font-manrope">
              It’s how we do it. Many agencies check the same capability boxes. What separates Esperia is the discipline we bring to execution — and the ambition we bring to outcomes.
            </p>

            <button
              type="button"
              onClick={() => onNavigateToWhyEsperia ? onNavigateToWhyEsperia() : (window.location.hash = '#why-esperia')}
              className="bg-[#E3866F] hover:bg-[#f3957f] text-[#48180E] font-extrabold text-xs uppercase tracking-wider px-9 py-4 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 cursor-pointer"
            >
              Know More
            </button>
          </div>

          <div className="w-full lg:w-[480px] flex justify-center lg:justify-end relative">
            <div className="relative">
              <img
                src="/assets/figma/2007eccd674cd45280b84a0c5e53c6f8ab9f5331.png"
                alt="Enterprise Delivery Architecture"
                className="w-full max-w-[420px] h-auto object-contain drop-shadow-[0_20px_30px_rgba(0,0,0,0.45)] hover:scale-105 transition-transform duration-500 ease-out cursor-pointer"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 7. CLIENTS & PARTNERS (INFINITE SMOOTH MARQUEE ANIMATION)                  */}
      {/* ========================================================================= */}
      <section className="py-20 border-y border-slate-200/80 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 mb-10 text-center">
          <div className="inline-flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C5445A]" />
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#6B6B6B]">
              Trusted by Leading Global Enterprises
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
      {/* 9. OUR WORKS: DIGITAL PRODUCTS (COLOSSAL REAL IMPACT)                     */}
      {/* ========================================================================= */}
      <section className="py-16 px-6 max-w-7xl mx-auto">
        <div className="rounded-[40px] bg-white border border-slate-200/90 p-8 sm:p-14 lg:p-16 flex flex-col lg:flex-row items-center justify-between gap-12 shadow-colossal overflow-hidden relative group">
          <div className="max-w-xl z-10">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-2 h-2 rounded-full bg-[#C5445A]" />
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#6B6B6B]">
                Our Works
              </span>
            </div>

            <h2
              className="text-3xl sm:text-5xl lg:text-[60px] font-bold text-[#0A0A0A] tracking-tight leading-[1.12] mb-6 font-parkinsans"
            >
              Digital Products. <br />
              Real <span className="text-gradient-impact">Impact</span><span className="text-[#0A0A0A]">.</span>
            </h2>

            <p className="text-slate-700 text-base sm:text-lg leading-[1.8] mb-8 font-manrope">
              We partner with businesses and organizations to design, build and scale digital solutions that solve complex challenges and create meaningful outcomes.
            </p>

            <button
              type="button"
              onClick={() => onNavigateToWorks ? onNavigateToWorks() : (window.location.hash = '#our-works')}
              className="border-2 border-slate-900 text-slate-900 hover:border-[#C5445A] hover:bg-[#C5445A] hover:text-white font-bold text-xs uppercase tracking-wider px-9 py-4 rounded-full transition-all duration-300 shadow-sm hover:scale-105 cursor-pointer"
            >
              See Our Works
            </button>
          </div>

          <div className="w-full lg:w-[560px] rounded-3xl overflow-hidden relative shadow-2xl">
            <img
              src="/assets/figma/05374688e501fdf82b849f5015dccfde45156e56.png"
              alt="Digital Products Real Impact"
              className="w-full h-auto object-cover rounded-3xl hover:scale-105 transition-transform duration-700"
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

      {/* ========================================================================= */}
      {/* 11. CONTACT CTA & FOOTER                                                  */}
      {/* ========================================================================= */}
      <section id="contact" className="relative bg-[#1A1A1A] text-white pt-28 pb-16 overflow-hidden">
        {/* Ambient Overlay */}
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <img
            src="/assets/figma/b39e95a77eb26884c9d041d8589fa21e78323b6b.png"
            alt="Footer Texture"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          {/* CTA Banner */}
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-10 pb-20">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-[#9E1C34]" />
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#F7F7F5]">
                  Contact us
                </span>
              </div>

              <h2
                className="text-4xl sm:text-6xl lg:text-[68px] font-bold tracking-tight text-white leading-tight font-parkinsans"
              >
                Ready to <span className="text-gradient-transform">transform</span> <br />
                your Business?
              </h2>
            </div>

            <button
              type="button"
              onClick={() => onNavigateToContact ? onNavigateToContact() : (window.location.hash = '#contact-us')}
              className="bg-talk-button hover:brightness-110 text-[#1C1C1C] font-bold text-sm uppercase tracking-wider px-12 py-5 rounded-full transition-all duration-300 shadow-2xl shadow-rose-900/40 shrink-0 hover:scale-105 cursor-pointer"
            >
              Let’s Talk
            </button>
          </div>
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
