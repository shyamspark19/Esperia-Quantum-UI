import React, { useState } from 'react';
import { 
  ArrowRight, 
  Menu, 
  X, 
  ChevronRight,
  Users2,
  Monitor,
  Target,
  Globe
} from 'lucide-react';

export default function EsperiaLanding() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#F6F6F3] text-[#0A0A0A] font-['Manrope',sans-serif] antialiased selection:bg-[#C5445A] selection:text-white">

      {/* ========================================================================= */}
      {/* 1. HERO SECTION (WEBSITE UI 2)                                            */}
      {/* ========================================================================= */}
      <section className="relative bg-hero-gradient text-white overflow-hidden">
        {/* Subtle Ambient Radial Lighting */}
        <div className="absolute top-0 right-1/4 w-[550px] h-[550px] bg-[#3EA594]/15 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-1/3 right-1/10 w-[420px] h-[420px] bg-[#C5465B]/15 rounded-full blur-[130px] pointer-events-none" />

        {/* Navigation Bar */}
        <header className="bg-[#0A111A]/95 backdrop-blur-md border-b border-white/10 relative z-30">
          <div className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">
            <a href="#" className="focus:outline-none flex items-center">
              <img 
                src="/assets/figma/esperia_header_logo.svg" 
                alt="ESPERIA QUANTUM" 
                className="h-12 w-auto object-contain"
              />
            </a>

            <nav className="hidden md:flex items-center gap-8 text-[13px] font-medium text-white/90">
              <a href="#what-we-do" className="hover:text-[#73A7A3] transition-colors duration-200">What We Do</a>
              <a href="#why-esperia" className="hover:text-[#73A7A3] transition-colors duration-200">Why Esperia</a>
              <a href="#our-works" className="hover:text-[#73A7A3] transition-colors duration-200">Our Works</a>
              <a href="#blogs" className="hover:text-[#73A7A3] transition-colors duration-200">Blogs &amp; Newsletters</a>
              <a href="#contact" className="hover:text-[#73A7A3] transition-colors duration-200">Contact Us</a>
            </nav>

            <button 
              type="button"
              aria-label="Toggle navigation menu"
              className="md:hidden text-white p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Nav Flyout */}
          {mobileMenuOpen && (
            <div className="md:hidden bg-[#0A111A] border-b border-white/10 px-6 py-6 flex flex-col gap-4 relative z-30 shadow-2xl">
              <a href="#what-we-do" className="text-white hover:text-[#73A7A3]" onClick={() => setMobileMenuOpen(false)}>What We Do</a>
              <a href="#why-esperia" className="text-white hover:text-[#73A7A3]" onClick={() => setMobileMenuOpen(false)}>Why Esperia</a>
              <a href="#our-works" className="text-white hover:text-[#73A7A3]" onClick={() => setMobileMenuOpen(false)}>Our Works</a>
              <a href="#blogs" className="text-white hover:text-[#73A7A3]" onClick={() => setMobileMenuOpen(false)}>Blogs &amp; Newsletters</a>
              <a href="#contact" className="text-[#FF7E8B] font-semibold pt-2 border-t border-white/10" onClick={() => setMobileMenuOpen(false)}>Contact Us</a>
            </div>
          )}
        </header>

        {/* Hero Body Grid */}
        <div className="max-w-7xl mx-auto px-6 pt-10 lg:pt-16 pb-20 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
          <div className="lg:col-span-7">
            <h1 
              className="text-5xl sm:text-7xl lg:text-[96px] font-bold tracking-[-0.03em] leading-[1.04] mb-6 font-sora"
            >
              <span className="text-[#73A7A3]">Cloud-Native.</span><br />
              <span className="text-gradient-ai">AI-Driven.</span>
            </h1>

            <p className="text-[#7C8D8C] text-base sm:text-[17px] leading-[1.8] max-w-xl mb-10 font-manrope">
              From modern cloud architecture to AI-powered experiences, we engineer digital products that are scalable, secure, resilient, and built to move fast.
            </p>

            <a 
              href="#our-works" 
              className="inline-flex items-center gap-2 border border-[#73A7A3] text-[#73A7A3] hover:bg-[#73A7A3]/10 font-semibold text-base px-8 py-3.5 rounded-full transition-all duration-300"
            >
              <span>See our works</span>
            </a>
          </div>

          {/* Hero Figma 3D Visual Art Asset */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[540px]">
              <img 
                src="/assets/figma/e1bbc92e17afb48e5c127448f1d2bab209e43e66.png" 
                alt="Cloud-Native AI Digital Engineering Architecture" 
                className="w-full h-auto object-contain drop-shadow-2xl"
              />
            </div>
          </div>
        </div>

        {/* Ruled Stats Strip */}
        <div className="border-t border-[#73A7A3]/25">
          <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="flex items-center gap-4 pr-6 md:border-r border-[#73A7A3]/20">
              <Users2 className="text-[#73A7A3] shrink-0" size={26} />
              <div>
                <span className="text-3xl sm:text-4xl font-extrabold text-gradient-stats font-manrope block leading-tight">
                  150+
                </span>
                <span className="text-[10.5px] font-bold tracking-[0.2em] text-[#73A7A3] uppercase mt-1 block">
                  Years of collective experience
                </span>
              </div>
            </div>

            <div className="flex items-center gap-4 pr-6 md:border-r border-[#73A7A3]/20">
              <Monitor className="text-[#73A7A3] shrink-0" size={26} />
              <div>
                <span className="text-3xl sm:text-4xl font-extrabold text-gradient-stats font-manrope block leading-tight">
                  50+
                </span>
                <span className="text-[10.5px] font-bold tracking-[0.2em] text-[#73A7A3] uppercase mt-1 block">
                  Project Delivered
                </span>
              </div>
            </div>

            <div className="flex items-center gap-4 pr-6 md:border-r border-[#73A7A3]/20">
              <Target className="text-[#73A7A3] shrink-0" size={26} />
              <div>
                <span className="text-3xl sm:text-4xl font-extrabold text-gradient-stats font-manrope block leading-tight">
                  100%
                </span>
                <span className="text-[10.5px] font-bold tracking-[0.2em] text-[#73A7A3] uppercase mt-1 block">
                  Success Rate
                </span>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <Globe className="text-[#73A7A3] shrink-0" size={26} />
              <div>
                <span className="text-3xl sm:text-4xl font-extrabold text-gradient-stats font-manrope block leading-tight">
                  03
                </span>
                <span className="text-[10.5px] font-bold tracking-[0.2em] text-[#73A7A3] uppercase mt-1 block">
                  Global Offices
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. WHO WE ARE (CREATIVE VISION MEETS INTELLIGENT SOLUTIONS)               */}
      {/* ========================================================================= */}
      <section id="what-we-do" className="py-24 px-6 max-w-7xl mx-auto relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          <div className="lg:col-span-8">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C5445A]" />
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#6B6B6B]">
                Who We Are
              </span>
            </div>

            <h2 
              className="text-4xl sm:text-5xl lg:text-[64px] font-bold tracking-tight text-[#0A0A0A] leading-[1.14] font-parkinsans"
            >
              We are where <br />
              <span className="text-gradient-creative">
                creative vision
              </span> <br />
              meets intelligent solutions.
            </h2>
          </div>

          <div className="lg:col-span-4 flex justify-center lg:justify-end">
            <img 
              src="/assets/figma/93db253d9a77bca6768960eed7492c046fe70768.png" 
              alt="Esperia Intelligent Vision"
              className="w-56 sm:w-72 h-auto object-contain"
            />
          </div>
        </div>

        {/* Narrative Paragraphs & CTA */}
        <div className="max-w-3xl space-y-4 text-base sm:text-[17px] text-[#222222] leading-[1.75] mb-12">
          <p>
            We turn ideas into products people can understand, adopt, and rely on — combining creativity, technology, and deep human understanding.
          </p>
          <p>
            By becoming an extension of your organization, we help you navigate complexity, accelerate delivery, and build things that create lasting value for real people.
          </p>
          <div className="pt-2">
            <a 
              href="#our-works"
              className="inline-block bg-[#C5445A] hover:bg-[#a93447] text-white font-semibold text-base px-8 py-3.5 rounded-full transition-all duration-300 shadow-md shadow-[#C5445A]/20"
            >
              Explore our products
            </a>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* 3. 4 MANIFESTO CARDS (SEAMLESS CARD ILLUSTRATIONS AS IN FIGMA)           */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pt-6">
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
              className="bg-[#FBF9F9] border border-[#ECE8E8] rounded-3xl p-7 flex flex-col justify-between hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div>
                <span className="text-xs font-bold text-[#FF3C73] tracking-[0.15em] block mb-4">
                  {card.num}
                </span>
                <h3 
                  className="text-lg sm:text-xl font-bold text-[#0A0A0A] leading-snug mb-3 font-parkinsans"
                >
                  {card.title}
                </h3>
                <p className="text-xs sm:text-[13.5px] text-[#6B6B6B] leading-[1.65] mb-6">
                  {card.desc}
                </p>
              </div>

              {/* Seamless natural illustration floating directly on card background */}
              <div className="w-full flex items-end justify-center pt-2">
                <img 
                  src={card.img} 
                  alt={card.title} 
                  className="w-full h-auto max-h-[260px] object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. WHAT WE DO: HUMAN INGENUITY. INTELLIGENT SYSTEMS                       */}
      {/* ========================================================================= */}
      <section className="py-14 px-6 max-w-7xl mx-auto">
        <div className="rounded-[36px] bg-white border border-slate-200/80 p-8 sm:p-14 lg:p-16 flex flex-col lg:flex-row items-center justify-between gap-12 shadow-sm overflow-hidden relative">
          <div className="max-w-xl z-10">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C5445A]" />
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#6B6B6B]">
                What We Do
              </span>
            </div>

            <h2 
              className="text-3xl sm:text-5xl lg:text-[56px] font-bold text-[#0A0A0A] tracking-tight leading-[1.12] mb-6 font-parkinsans"
            >
              Human <span className="text-gradient-ingenuity">Ingenuity</span><span className="text-[#C5445A]">.</span> <br />
              Intelligent Systems.
            </h2>

            <p className="text-slate-700 text-sm sm:text-base leading-[1.75] mb-8 font-manrope">
              We connect AI, data, cloud, and digital design to unlock business transformation — enabling organisations to innovate with purpose and scale with agility.
            </p>

            <a 
              href="#services"
              className="inline-flex items-center gap-2 border border-slate-300 text-slate-800 hover:border-[#C5445A] hover:text-[#C5445A] text-xs uppercase font-bold tracking-wider px-7 py-3 rounded-full transition-colors duration-300 shadow-sm"
            >
              <span>Explore our core services</span>
              <ArrowRight size={14} />
            </a>
          </div>

          <div className="w-full lg:w-[480px] rounded-2xl overflow-hidden flex items-center justify-center">
            <img 
              src="/assets/figma/eeb3da2613b28f8116f8bfb9beda3c0e7bee3d5d.png" 
              alt="Human Ingenuity & Intelligent Systems"
              className="w-full h-auto object-cover rounded-2xl"
            />
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. OUR PRODUCTS: WHAT WE HAVE BUILT                                       */}
      {/* ========================================================================= */}
      <section id="our-works" className="py-20 px-6 max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C5445A]" />
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#6B6B6B]">
                Our Products
              </span>
            </div>

            <h2 
              className="text-3xl sm:text-5xl font-bold text-[#0A0A0A] tracking-tight font-parkinsans"
            >
              What We have Built.
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-2 font-manrope">
              Platforms and products we designed, engineered, and shipped — end to end.
            </p>
          </div>

          <a 
            href="#all-products" 
            className="mt-4 sm:mt-0 inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-slate-900 hover:text-[#C5445A] transition-colors"
          >
            <span>View All Products</span>
            <ChevronRight size={16} />
          </a>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Product Card 1 */}
          <div className="group relative rounded-3xl overflow-hidden shadow-md bg-[#0F172A] text-white flex flex-col justify-end min-h-[440px] p-8 sm:p-10 border border-slate-800">
            <img 
              src="/assets/figma/bb9dd026594ae371c3f28fc99578043dbe6c0457.png" 
              alt="XConnect Platform"
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-65"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
            <div className="relative z-10">
              <span className="inline-block bg-white/20 backdrop-blur-md text-white text-xs font-bold uppercase tracking-wider px-3.5 py-1 rounded-full mb-3 border border-white/20">
                XConnect
              </span>
              <p className="text-white text-lg sm:text-xl font-medium leading-snug">
                Management platform that unifies projects, tasks, and collaboration.
              </p>
            </div>
          </div>

          {/* Product Card 2 */}
          <div className="group relative rounded-3xl overflow-hidden shadow-md bg-white border border-slate-200/90 flex flex-col justify-between min-h-[440px] p-8 sm:p-10">
            <div>
              <span className="inline-block bg-slate-100 text-slate-800 text-xs font-bold uppercase tracking-wider px-3.5 py-1 rounded-full mb-4">
                XConnect Enterprise
              </span>
              <p className="text-slate-800 text-base sm:text-lg font-medium leading-relaxed mb-6">
                Management platform that unifies projects, tasks, and collaboration to improve visibility, efficiency, and productivity.
              </p>
            </div>
            <div className="rounded-2xl overflow-hidden border border-slate-100 shadow-inner bg-slate-50 flex items-center justify-center p-4">
              <img 
                src="/assets/figma/c7142bdad8a3d4fe3fc369f54b60a66a9dc47a6c.png" 
                alt="Product Interface Preview"
                className="w-full h-auto object-contain rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 6. WHY ESPERIA: ENTERPRISE DELIVERY MODEL                                 */}
      {/* ========================================================================= */}
      <section id="why-esperia" className="py-14 px-6 max-w-7xl mx-auto">
        <div className="rounded-[36px] bg-enterprise-banner text-white p-8 sm:p-14 lg:p-16 flex flex-col lg:flex-row items-center justify-between gap-12 shadow-xl overflow-hidden relative">
          <div className="max-w-xl z-10">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#E58870]" />
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#E58870]">
                Why Esperia
              </span>
            </div>

            <h2 
              className="text-3xl sm:text-5xl font-bold tracking-tight leading-[1.14] mb-6 font-parkinsans"
            >
              Enterprise Delivery Model
            </h2>

            <p className="text-[#E0E7E6] text-sm sm:text-base leading-[1.75] mb-8 font-manrope">
              It’s how we do it. Many agencies check the same capability boxes. What separates Esperia is the discipline we bring to execution — and the ambition we bring to outcomes.
            </p>

            <button className="bg-[#E3866F] hover:bg-[#f19b86] text-[#6B2A1B] font-bold text-xs uppercase tracking-wider px-8 py-3.5 rounded-full transition-colors duration-300 shadow-md">
              Know More
            </button>
          </div>

          <div className="w-full lg:w-[420px] flex justify-center lg:justify-end">
            <img 
              src="/assets/figma/2007eccd674cd45280b84a0c5e53c6f8ab9f5331.png" 
              alt="Enterprise Delivery Architecture"
              className="w-full max-w-[360px] h-auto object-contain drop-shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 7. CLIENTS & PARTNERS LOGO STRIP (IN CRISP NATIVE VIBRANT COLOR)          */}
      {/* ========================================================================= */}
      <section className="py-20 border-y border-slate-200/80 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C5445A]" />
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#6B6B6B]">
                Clients &amp; Partners
              </span>
            </div>
          </div>

          {/* 5 Full Color Partner Logos */}
          <div className="flex flex-wrap items-center justify-center sm:justify-between gap-10 sm:gap-14 px-4">
            {/* Emerson */}
            <div className="h-11 sm:h-14 flex items-center justify-center">
              <img 
                src="/assets/figma/71275132a7a6bf61a440c359d96c9de83f19d6ee.png" 
                alt="Emerson" 
                className="h-9 sm:h-12 w-auto object-contain transition-transform hover:scale-105 duration-300" 
              />
            </div>
            {/* Company Logo */}
            <div className="h-11 sm:h-14 flex items-center justify-center">
              <img 
                src="/assets/figma/b32e0d11de573570c26ac94b4a8301e883991e66.png" 
                alt="Company Logo" 
                className="h-10 sm:h-12 w-auto object-contain transition-transform hover:scale-105 duration-300" 
              />
            </div>
            {/* Watermelon Software */}
            <div className="h-11 sm:h-14 flex items-center justify-center">
              <img 
                src="/assets/figma/23e3280e9d5a96be6a54fe4719ed441a1f74e36f.png" 
                alt="Watermelon Software" 
                className="h-9 sm:h-12 w-auto object-contain transition-transform hover:scale-105 duration-300" 
              />
            </div>
            {/* Aven */}
            <div className="h-11 sm:h-14 flex items-center justify-center">
              <img 
                src="/assets/figma/18ba1c8d2f2ae50ae81d64fa14a489797d1033fc.png" 
                alt="Aven" 
                className="h-9 sm:h-12 w-auto object-contain transition-transform hover:scale-105 duration-300" 
              />
            </div>
            {/* Circle */}
            <div className="h-11 sm:h-14 flex items-center justify-center">
              <img 
                src="/assets/figma/e18508e228ae5c36dec20a02fa235cdb1e3ef48a.png" 
                alt="Circle" 
                className="h-9 sm:h-12 w-auto object-contain transition-transform hover:scale-105 duration-300" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 8. TESTIMONIALS (EXACT FIGMA LAYOUT: AUTHOR -> ROLE -> STARS -> QUOTE)    */}
      {/* ========================================================================= */}
      <section className="py-24 px-6 max-w-7xl mx-auto relative">
        <div className="text-center max-w-3xl mx-auto mb-16">
          {/* 5 Large Gold Stars Header */}
          <div className="flex justify-center gap-2 mb-5 text-[#ECB22E]">
            {[...Array(5)].map((_, i) => (
              <svg key={i} className="w-8 h-8 fill-current" viewBox="0 0 24 24">
                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
              </svg>
            ))}
          </div>

          <h2 
            className="text-3xl sm:text-5xl font-normal text-[#0A0A0A] tracking-tight leading-tight font-parkinsans"
          >
            Hear what others love about our Work
          </h2>
        </div>

        {/* 4-Column Masonry Grid from Figma */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-start relative z-10">
          
          {/* Column 1 */}
          <div className="space-y-6">
            <div className="bg-[#F6F6F3] border border-[#ECE8E8] rounded-3xl p-7 flex flex-col justify-between shadow-sm hover:shadow-md transition duration-300">
              <div>
                <h4 className="text-[22px] sm:text-2xl font-medium text-[#111827] font-parkinsans leading-tight">
                  Rajeev Vashist
                </h4>
                <p className="text-base text-[#6B7280] font-light mt-1">
                  CEO, Watermelon Software Inc
                </p>
                <div className="flex gap-1.5 my-3.5 text-[#ECB22E]">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-[#0A0A0A] text-[15px] sm:text-base leading-relaxed mt-2 font-manrope">
                &ldquo;Esperia is one of the most innovative design studios we&apos;ve worked with - and they truly are a value differentiator.&rdquo;
              </p>
            </div>

            <div className="bg-[#F6F6F3] border border-[#ECE8E8] rounded-3xl p-7 flex flex-col justify-between shadow-sm hover:shadow-md transition duration-300">
              <div>
                <h4 className="text-[22px] sm:text-2xl font-medium text-[#111827] font-parkinsans leading-tight">
                  John Kate
                </h4>
                <p className="text-base text-[#6B7280] font-light mt-1">
                  CEO, Watermelon Software Inc
                </p>
                <div className="flex gap-1.5 my-3.5 text-[#ECB22E]">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-[#0A0A0A] text-[15px] sm:text-base leading-relaxed mt-2 font-manrope">
                &ldquo;Maecenas non lorem et turpis convallis pharetra eget quis ipsum. Pellentesque nec rutrum mi.&rdquo;
              </p>
            </div>
          </div>

          {/* Column 2 */}
          <div className="space-y-6">
            <div className="bg-[#F6F6F3] border border-[#ECE8E8] rounded-3xl p-7 flex flex-col justify-between shadow-sm hover:shadow-md transition duration-300">
              <div>
                <h4 className="text-[22px] sm:text-2xl font-medium text-[#111827] font-parkinsans leading-tight">
                  Kane William
                </h4>
                <p className="text-base text-[#6B7280] font-light mt-1">
                  CEO, Watermelon Software Inc
                </p>
                <div className="flex gap-1.5 my-3.5 text-[#ECB22E]">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-[#0A0A0A] text-[15px] sm:text-base leading-relaxed mt-2 font-manrope">
                &ldquo;Maecenas non lorem et turpis convallis pharetra eget quis ipsum. Pellentesque nec rutrum mi. Fusce porta orci justo, vitae placerat nisi vestibulum a. Cras interdum convallis arcu, eu posuere velit congue in. Aenean egestas bibendum nisl, et vestibulum felis commodo ac. Nulla at neque sed risus commodo ultrices id quis tortor.&rdquo;
              </p>
            </div>

            <div className="bg-[#F6F6F3] border border-[#ECE8E8] rounded-3xl p-7 flex flex-col justify-between shadow-sm hover:shadow-md transition duration-300">
              <div>
                <h4 className="text-[22px] sm:text-2xl font-medium text-[#111827] font-parkinsans leading-tight">
                  John Kate
                </h4>
                <p className="text-base text-[#6B7280] font-light mt-1">
                  CEO, Watermelon Software Inc
                </p>
                <div className="flex gap-1.5 my-3.5 text-[#ECB22E]">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-[#0A0A0A] text-[15px] sm:text-base leading-relaxed mt-2 font-manrope">
                &ldquo;Maecenas non lorem et turpis convallis pharetra eget quis ipsum. Pellentesque nec rutrum mi.&rdquo;
              </p>
            </div>
          </div>

          {/* Column 3 */}
          <div className="space-y-6">
            <div className="bg-[#F6F6F3] border border-[#ECE8E8] rounded-3xl p-7 flex flex-col justify-between shadow-sm hover:shadow-md transition duration-300">
              <div>
                <h4 className="text-[22px] sm:text-2xl font-medium text-[#111827] font-parkinsans leading-tight">
                  John Kate
                </h4>
                <p className="text-base text-[#6B7280] font-light mt-1">
                  CEO, Watermelon Software Inc
                </p>
                <div className="flex gap-1.5 my-3.5 text-[#ECB22E]">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-[#0A0A0A] text-[15px] sm:text-base leading-relaxed mt-2 font-manrope">
                &ldquo;Maecenas non lorem et turpis convallis pharetra eget quis ipsum. Pellentesque nec rutrum mi.&rdquo;
              </p>
            </div>

            <div className="bg-[#F6F6F3] border border-[#ECE8E8] rounded-3xl p-7 flex flex-col justify-between shadow-sm hover:shadow-md transition duration-300">
              <div>
                <h4 className="text-[22px] sm:text-2xl font-medium text-[#111827] font-parkinsans leading-tight">
                  Kane William
                </h4>
                <p className="text-base text-[#6B7280] font-light mt-1">
                  CEO, Watermelon Software Inc
                </p>
                <div className="flex gap-1.5 my-3.5 text-[#ECB22E]">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-[#0A0A0A] text-[15px] sm:text-base leading-relaxed mt-2 font-manrope">
                &ldquo;Maecenas non lorem et turpis convallis pharetra eget quis ipsum. Pellentesque nec rutrum mi. Fusce porta orci justo, vitae placerat nisi vestibulum a. Cras interdum convallis arcu, eu posuere velit congue in.&rdquo;
              </p>
            </div>
          </div>

          {/* Column 4 */}
          <div className="space-y-6">
            <div className="bg-[#F6F6F3] border border-[#ECE8E8] rounded-3xl p-7 flex flex-col justify-between shadow-sm hover:shadow-md transition duration-300">
              <div>
                <h4 className="text-[22px] sm:text-2xl font-medium text-[#111827] font-parkinsans leading-tight">
                  Steve Fleming
                </h4>
                <p className="text-base text-[#6B7280] font-light mt-1">
                  CEO, Watermelon Software Inc
                </p>
                <div className="flex gap-1.5 my-3.5 text-[#ECB22E]">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-[#0A0A0A] text-[15px] sm:text-base leading-relaxed mt-2 font-manrope">
                &ldquo;Maecenas non lorem et turpis convallis pharetra eget quis ipsum. Pellentesque nec rutrum mi. Fusce porta orci justo, vitae placerat nisi vestibulum a.&rdquo;
              </p>
            </div>

            <div className="bg-[#F6F6F3] border border-[#ECE8E8] rounded-3xl p-7 flex flex-col justify-between shadow-sm hover:shadow-md transition duration-300">
              <div>
                <h4 className="text-[22px] sm:text-2xl font-medium text-[#111827] font-parkinsans leading-tight">
                  Steve Fleming
                </h4>
                <p className="text-base text-[#6B7280] font-light mt-1">
                  CEO, Watermelon Software Inc
                </p>
                <div className="flex gap-1.5 my-3.5 text-[#ECB22E]">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-[#0A0A0A] text-[15px] sm:text-base leading-relaxed mt-2 font-manrope">
                &ldquo;Maecenas non lorem et turpis convallis pharetra eget quis ipsum. Pellentesque nec rutrum mi. Fusce porta orci justo, vitae placerat nisi vestibulum a.&rdquo;
              </p>
            </div>
          </div>

        </div>

        {/* Ambient Bottom Gradient Texture Overlay */}
        <div className="absolute inset-x-0 bottom-0 h-96 pointer-events-none opacity-40">
          <img 
            src="/assets/figma/review_65_470.png" 
            alt="Ambient Overlay" 
            className="w-full h-full object-cover mix-blend-multiply"
          />
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 9. OUR WORKS: DIGITAL PRODUCTS. REAL IMPACT                               */}
      {/* ========================================================================= */}
      <section className="py-14 px-6 max-w-7xl mx-auto">
        <div className="rounded-[36px] bg-white border border-slate-200/80 p-8 sm:p-14 lg:p-16 flex flex-col lg:flex-row items-center justify-between gap-12 shadow-sm overflow-hidden relative">
          <div className="max-w-xl z-10">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C5445A]" />
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#6B6B6B]">
                Our Works
              </span>
            </div>

            <h2 
              className="text-3xl sm:text-5xl lg:text-[56px] font-bold text-[#0A0A0A] tracking-tight leading-[1.12] mb-6 font-parkinsans"
            >
              Digital Products. <br />
              Real <span className="text-gradient-impact">Impact</span><span className="text-[#0A0A0A]">.</span>
            </h2>

            <p className="text-slate-700 text-sm sm:text-base leading-[1.75] mb-8 font-manrope">
              We partner with businesses and organizations to design, build and scale digital solutions that solve complex challenges and create meaningful outcomes.
            </p>

            <button className="border border-slate-300 text-slate-800 hover:border-[#C5445A] hover:text-[#C5445A] font-bold text-xs uppercase tracking-wider px-8 py-3.5 rounded-full transition-colors duration-300 shadow-sm">
              See Our Works
            </button>
          </div>

          <div className="w-full lg:w-[480px] rounded-2xl overflow-hidden flex items-center justify-center">
            <img 
              src="/assets/figma/05374688e501fdf82b849f5015dccfde45156e56.png" 
              alt="Digital Products Real Impact"
              className="w-full h-auto object-cover rounded-2xl"
            />
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 10. BLOGS & NEWSLETTERS                                                   */}
      {/* ========================================================================= */}
      <section id="blogs" className="py-24 px-6 max-w-7xl mx-auto">
        <div className="max-w-2xl mb-14">
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
            <article key={i} className="group cursor-pointer bg-white border border-slate-200/90 rounded-3xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300">
              <div className="w-full h-60 overflow-hidden">
                <img 
                  src={post.img} 
                  alt={post.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="p-7">
                <span className="text-xs font-bold uppercase tracking-wider text-[#9E1C34] mb-2 block">
                  {post.tag}
                </span>
                <h3 
                  className="text-lg font-bold text-[#0A0A0A] group-hover:text-[#C5445A] transition-colors leading-snug mb-3 font-parkinsans"
                >
                  {post.title}
                </h3>
                <p className="text-xs text-slate-400 font-medium">
                  {post.date}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 11. CONTACT CTA & FOOTER (MATCHING FIGMA NODE 65:438 & 65:390)            */}
      {/* ========================================================================= */}
      <section id="contact" className="relative bg-[#2D2D2D] text-white pt-24 pb-16 overflow-hidden">
        {/* Background Texture from Figma */}
        <div className="absolute inset-0 opacity-25 pointer-events-none">
          <img 
            src="/assets/figma/b39e95a77eb26884c9d041d8589fa21e78323b6b.png" 
            alt="Footer Texture" 
            className="w-full h-full object-cover"
          />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          {/* CTA Banner */}
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-10 pb-16">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-[#9E1C34]" />
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#F7F7F5]">
                  Contact us
                </span>
              </div>

              <h2 
                className="text-4xl sm:text-6xl font-bold tracking-tight text-white leading-tight font-parkinsans"
              >
                Ready to <span className="text-gradient-transform">transform</span> <br />
                your Business?
              </h2>
            </div>

            <a 
              href="mailto:contact@esperia.io"
              className="bg-talk-button hover:brightness-105 text-[#1C1C1C] font-semibold text-sm uppercase tracking-wider px-10 py-4 rounded-full transition-all duration-300 shadow-xl shadow-rose-900/30 shrink-0"
            >
              Let’s Talk
            </a>
          </div>

          {/* Divider Line 359 */}
          <div className="w-full h-px bg-white/10 mb-16" />

          {/* Footer Grid */}
          <footer className="grid grid-cols-1 md:grid-cols-12 gap-10 text-sm text-slate-300">
            <div className="md:col-span-5">
              <div className="mb-4">
                <img 
                  src="/assets/figma/esperia_footer_logo.svg" 
                  alt="ESPERIA QUANTUM" 
                  className="h-12 w-auto object-contain"
                />
              </div>
              <p className="text-xs text-slate-300 font-medium leading-relaxed max-w-sm mb-6">
                Digital experience &amp; technology consultancy.
              </p>

              {/* 6 Social Media Vector Icons from Figma */}
              <div className="flex items-center gap-4 text-white">
                <a href="#" aria-label="Facebook" className="w-7 h-7 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition">
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                </a>
                <a href="#" aria-label="Twitter / X" className="w-7 h-7 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition">
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                </a>
                <a href="#" aria-label="LinkedIn" className="w-7 h-7 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition">
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                </a>
                <a href="#" aria-label="Instagram" className="w-7 h-7 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition">
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                </a>
                <a href="#" aria-label="YouTube" className="w-7 h-7 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition">
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
                </a>
                <a href="#" aria-label="Website" className="w-7 h-7 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition">
                  <Globe className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            <div className="md:col-span-3 md:col-start-7">
              <h4 className="text-white font-bold text-xs uppercase tracking-wider mb-4 font-parkinsans">
                Services
              </h4>
              <ul className="space-y-2.5 text-xs text-slate-300">
                <li><a href="#what-we-do" className="hover:text-white transition">Human-Centered Design</a></li>
                <li><a href="#what-we-do" className="hover:text-white transition">AI-Powered Development</a></li>
                <li><a href="#what-we-do" className="hover:text-white transition">Engineering &amp; Cloud</a></li>
                <li><a href="#what-we-do" className="hover:text-white transition">Data &amp; Digital Transformation</a></li>
              </ul>
            </div>

            <div className="md:col-span-3">
              <h4 className="text-white font-bold text-xs uppercase tracking-wider mb-4 font-parkinsans">
                Company
              </h4>
              <ul className="space-y-2.5 text-xs text-slate-300">
                <li><a href="#what-we-do" className="hover:text-white transition">What We do</a></li>
                <li><a href="#why-esperia" className="hover:text-white transition">Why Esperia</a></li>
                <li><a href="#our-works" className="hover:text-white transition">Our Products</a></li>
                <li><a href="#blogs" className="hover:text-white transition">Blogs &amp; Newsletters</a></li>
                <li><a href="#contact" className="hover:text-white transition">Contact Us</a></li>
              </ul>
            </div>
          </footer>

          {/* Divider Line 360 */}
          <div className="w-full h-px bg-white/10 my-10" />

          {/* Bottom Bar */}
          <div className="flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
            <p>© 2025 Esperia. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white transition">Privacy Policy</a>
              <a href="#" className="hover:text-white transition">Terms of Service</a>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
