import React, { useState } from 'react';
import { Menu, X, Twitter, Linkedin, Github } from 'lucide-react';

interface OurWorksPageProps {
  onNavigateToHome: (sectionId?: string) => void;
  onNavigateToContact: () => void;
  onNavigateToWhatWeDo?: () => void;
  onViewWatermelon?: () => void;
}

export default function OurWorksPage({
  onNavigateToHome,
  onNavigateToContact,
  onNavigateToWhatWeDo,
  onViewWatermelon
}: OurWorksPageProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#FFFFFF] text-[#0A0A0A] font-['Manrope',sans-serif] antialiased selection:bg-[#C5445A] selection:text-white flex flex-col justify-between">
      {/* ========================================================================= */}
      {/* 1. TOP NAVIGATION BAR (Exact Figma Light Navigation with Active Dot)      */}
      {/* ========================================================================= */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-black/[0.04] transition-all duration-300">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-20 h-20 sm:h-24 flex items-center justify-between">
          <button
            type="button"
            onClick={() => onNavigateToHome()}
            className="flex items-center gap-3 group focus:outline-none cursor-pointer"
          >
            <img
              src="/assets/figma/esperia_header_logo.svg"
              alt="ESPERIA QUANTUM"
              className="h-9 sm:h-11 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            />
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-9 text-[13px] font-medium text-[#2A2A2A]">
            <button
              type="button"
              onClick={() => onNavigateToWhatWeDo ? onNavigateToWhatWeDo() : onNavigateToHome('what-we-do')}
              className="text-[#4A4A4A] hover:text-[#C5445A] transition-colors duration-200 cursor-pointer"
            >
              What We Do
            </button>
            <button
              type="button"
              onClick={() => onNavigateToHome('why-esperia')}
              className="text-[#4A4A4A] hover:text-[#C5445A] transition-colors duration-200 cursor-pointer"
            >
              Why Esperia
            </button>

            {/* Our Works - ACTIVE STATE WITH FIGMA RED COLOR */}
            <button
              type="button"
              className="text-[#C5445A] font-semibold transition-colors duration-200 cursor-pointer"
            >
              Our Works
            </button>

            <button
              type="button"
              onClick={() => onNavigateToHome('blogs')}
              className="text-[#4A4A4A] hover:text-[#C5445A] transition-colors duration-200 cursor-pointer"
            >
              Blogs &amp; Newsletters
            </button>
            <button
              type="button"
              onClick={onNavigateToContact}
              className="text-[#4A4A4A] hover:text-[#C5445A] transition-colors duration-200 cursor-pointer"
            >
              Contact Us
            </button>
          </nav>

          {/* Mobile Menu Hamburger */}
          <button
            type="button"
            aria-label="Toggle navigation menu"
            className="md:hidden text-[#0A0A0A] p-2 hover:bg-slate-100 rounded-lg transition"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Nav Flyout */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-b border-black/[0.08] px-6 py-6 flex flex-col gap-4 relative z-50 shadow-xl animate-in slide-in-from-top duration-300">
            <button
              type="button"
              className="text-left text-[#4A4A4A] hover:text-[#C5445A] text-sm py-1"
              onClick={() => {
                setMobileMenuOpen(false);
                if (onNavigateToWhatWeDo) onNavigateToWhatWeDo();
                else onNavigateToHome('what-we-do');
              }}
            >
              What We Do
            </button>
            <button
              type="button"
              className="text-left text-[#4A4A4A] hover:text-[#C5445A] text-sm py-1"
              onClick={() => {
                setMobileMenuOpen(false);
                onNavigateToHome('why-esperia');
              }}
            >
              Why Esperia
            </button>
            <button
              type="button"
              className="text-left text-[#C5445A] font-semibold text-sm py-1"
              onClick={() => setMobileMenuOpen(false)}
            >
              Our Works
            </button>
            <button
              type="button"
              className="text-left text-[#4A4A4A] hover:text-[#C5445A] text-sm py-1"
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
              className="text-left text-[#C5445A] font-semibold pt-3 border-t border-slate-100 cursor-pointer text-sm"
            >
              Contact Us
            </button>
          </div>
        )}
      </header>

      {/* ========================================================================= */}
      {/* 2. MAIN CONTENT (Exact Figma Node #99:1588)                                */}
      {/* ========================================================================= */}
      <main className="flex-1 w-full overflow-hidden">
        {/* ======================================================================= */}
        {/* HERO SECTION                                                            */}
        {/* ======================================================================= */}
        <section className="pt-12 sm:pt-16 pb-16 sm:pb-24 max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left: Heading & Kicker */}
            <div className="lg:col-span-6 xl:col-span-7">
              {/* Kicker tag with dash */}
              <div className="flex items-center gap-2.5 mb-5 sm:mb-6">
                <span className="w-3 h-0.5 bg-[#C5445A] rounded-full inline-block" />
                <span className="text-[11px] sm:text-[12px] font-semibold uppercase tracking-[0.2em] text-[#6B7280]">
                  OUR WORKS
                </span>
              </div>

              {/* Main Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-[64px] font-bold font-['Parkinsans',sans-serif] tracking-[-0.03em] leading-[1.08] text-[#0A0A0A]">
                Solutions that
                <br />
                <span className="text-[#C5445A]">Empower</span> Industries
              </h1>
            </div>

            {/* Right: 3D Isometric Platform Graphic with Floating Animation */}
            <div className="lg:col-span-6 xl:col-span-5 flex justify-center lg:justify-end">
              <div className="relative max-w-[540px] w-full animate-float-slow">
                <div className="absolute -inset-6 bg-gradient-to-tr from-[#C5445A]/15 via-transparent to-[#3EA594]/10 rounded-full blur-3xl -z-10 animate-pulse-glow" />
                <img
                  src="/assets/figma/exact_hero_3d_hq.png"
                  alt="AI & Cloud Solutions Ecosystem"
                  className="w-full h-auto object-contain drop-shadow-[0_20px_40px_rgba(197,68,90,0.15)] transition-transform duration-700 hover:scale-105"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ======================================================================= */}
        {/* CASE STUDIES SECTION (Alternating Overlapping Card Layout)              */}
        {/* ======================================================================= */}
        <section className="max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-20 pb-36 space-y-28 sm:space-y-40">

          {/* ------------------------------------------------------------------- */}
          {/* CASE 1: Watermelon (Visual Left, Overlapping Card Right)             */}
          {/* ------------------------------------------------------------------- */}
          <div className="group relative flex flex-col lg:flex-row items-center">
            {/* Visual: Dashboard on Left (w-full lg:w-[64%]) */}
            <div className="w-full lg:w-[64%] z-10">
              <div className="relative rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.07)] border border-slate-100/90 bg-white transition-all duration-500 ease-out group-hover:scale-[1.015] group-hover:-translate-y-1.5 group-hover:shadow-[0_25px_65px_rgba(0,0,0,0.12)]">
                <img
                  src="/assets/figma/exact_watermelon_hq.png"
                  alt="Watermelon Reliability Platform"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>

            {/* Overlapping Card on Right (w-full lg:w-[50%] lg:-ml-[14%]) */}
            <div className="w-full lg:w-[50%] z-20 mt-[-30px] lg:mt-0 lg:-ml-[14%]">
              <div className="bg-white rounded-2xl p-8 sm:p-12 lg:p-16 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.12)] border border-slate-100/80 transition-all duration-300 hover:shadow-[0_35px_75px_-15px_rgba(0,0,0,0.16)] hover:-translate-y-1">
                <h2 className="text-3xl sm:text-4xl font-bold font-['Parkinsans',sans-serif] text-[#0A0A0A] mb-5 tracking-tight">
                  Watermelon
                </h2>
                <p className="text-[#555555] text-[15px] sm:text-[16px] font-normal leading-[1.75] mb-8 font-['Manrope',sans-serif]">
                  We partnered with them to build an AI-driven Enterprise Software Reliability Platform that empowers businesses to create resilient, scalable, and intelligent digital ecosystems. The platform enhances operational reliability, accelerates decision-making, and supports growth at enterprise scale.
                </p>
                <button
                  type="button"
                  onClick={() => onViewWatermelon ? onViewWatermelon() : (window.location.hash = '#watermelon')}
                  className="group/btn inline-flex items-center gap-2 text-[15px] font-semibold text-[#C5445A] hover:text-[#9e2e41] transition-colors duration-200 cursor-pointer"
                >
                  <span>View Details</span>
                  <span className="transition-transform duration-300 group-hover/btn:translate-x-2 font-bold text-lg leading-none">
                    &rarr;
                  </span>
                </button>
              </div>
            </div>
          </div>

          {/* ------------------------------------------------------------------- */}
          {/* CASE 2: Young Genius Program (Overlapping Card Left, Visual Right)   */}
          {/* ------------------------------------------------------------------- */}
          <div className="group relative flex flex-col-reverse lg:flex-row items-center">
            {/* Overlapping Card on Left (w-full lg:w-[50%] lg:-mr-[14%]) */}
            <div className="w-full lg:w-[50%] z-20 mt-[-30px] lg:mt-0 lg:-mr-[14%]">
              <div className="bg-white rounded-2xl p-8 sm:p-12 lg:p-16 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.12)] border border-slate-100/80 transition-all duration-300 hover:shadow-[0_35px_75px_-15px_rgba(0,0,0,0.16)] hover:-translate-y-1">
                <h2 className="text-3xl sm:text-4xl font-bold font-['Parkinsans',sans-serif] text-[#0A0A0A] mb-5 tracking-tight">
                  Young Genius Program
                </h2>
                <p className="text-[#555555] text-[15px] sm:text-[16px] font-normal leading-[1.75] mb-8 font-['Manrope',sans-serif]">
                  Young Genius Program is committed to making personalized education accessible at scale. We built an AI-driven adaptive learning platform that tailors learning experiences to individual needs, enhances student engagement, and simplifies administrative processes. The result is a scalable education ecosystem designed to support learners, educators, and institutions nationwide.
                </p>
                <button
                  type="button"
                  onClick={(e) => e.preventDefault()}
                  className="group/btn inline-flex items-center gap-2 text-[15px] font-semibold text-[#C5445A] hover:text-[#9e2e41] transition-colors duration-200 cursor-pointer"
                >
                  <span>View Details</span>
                  <span className="transition-transform duration-300 group-hover/btn:translate-x-2 font-bold text-lg leading-none">
                    &rarr;
                  </span>
                </button>
              </div>
            </div>

            {/* Visual: Dashboard on Right (w-full lg:w-[64%]) */}
            <div className="w-full lg:w-[64%] z-10">
              <div className="relative rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.07)] border border-slate-100/90 bg-white transition-all duration-500 ease-out group-hover:scale-[1.015] group-hover:-translate-y-1.5 group-hover:shadow-[0_25px_65px_rgba(0,0,0,0.12)]">
                <img
                  src="/assets/figma/exact_young_genius_hq.png"
                  alt="Young Genius Adaptive Education Platform"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>

          {/* ------------------------------------------------------------------- */}
          {/* CASE 3: IRIS HR System (Visual Left, Overlapping Card Right)         */}
          {/* ------------------------------------------------------------------- */}
          <div className="group relative flex flex-col lg:flex-row items-center">
            {/* Visual: Dashboard on Left */}
            <div className="w-full lg:w-[64%] z-10">
              <div className="relative rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.07)] border border-slate-100/90 bg-white transition-all duration-500 ease-out group-hover:scale-[1.015] group-hover:-translate-y-1.5 group-hover:shadow-[0_25px_65px_rgba(0,0,0,0.12)]">
                <img
                  src="/assets/figma/exact_iris_hr_hq.png"
                  alt="IRIS HR System Platform"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>

            {/* Overlapping Card on Right */}
            <div className="w-full lg:w-[50%] z-20 mt-[-30px] lg:mt-0 lg:-ml-[14%]">
              <div className="bg-white rounded-2xl p-8 sm:p-12 lg:p-16 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.12)] border border-slate-100/80 transition-all duration-300 hover:shadow-[0_35px_75px_-15px_rgba(0,0,0,0.16)] hover:-translate-y-1">
                <h2 className="text-3xl sm:text-4xl font-bold font-['Parkinsans',sans-serif] text-[#0A0A0A] mb-5 tracking-tight">
                  IRIS HR System
                </h2>
                <p className="text-[#555555] text-[15px] sm:text-[16px] font-normal leading-[1.75] mb-8 font-['Manrope',sans-serif]">
                  IRIS HR System modernizes human resource management through an intelligent digital platform. We built a solution that streamlines HR operations, centralizes employee data, and enhances collaboration across the organization. The result is a scalable, efficient, and user-friendly HR ecosystem designed for modern workplaces.
                </p>
                <button
                  type="button"
                  onClick={(e) => e.preventDefault()}
                  className="group/btn inline-flex items-center gap-2 text-[15px] font-semibold text-[#C5445A] hover:text-[#9e2e41] transition-colors duration-200 cursor-pointer"
                >
                  <span>View Details</span>
                  <span className="transition-transform duration-300 group-hover/btn:translate-x-2 font-bold text-lg leading-none">
                    &rarr;
                  </span>
                </button>
              </div>
            </div>
          </div>

          {/* ------------------------------------------------------------------- */}
          {/* CASE 4: TASConnect (Overlapping Card Left, Visual Right)             */}
          {/* ------------------------------------------------------------------- */}
          <div className="group relative flex flex-col-reverse lg:flex-row items-center">
            {/* Overlapping Card on Left */}
            <div className="w-full lg:w-[50%] z-20 mt-[-30px] lg:mt-0 lg:-mr-[14%]">
              <div className="bg-white rounded-2xl p-8 sm:p-12 lg:p-16 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.12)] border border-slate-100/80 transition-all duration-300 hover:shadow-[0_35px_75px_-15px_rgba(0,0,0,0.16)] hover:-translate-y-1">
                <h2 className="text-3xl sm:text-4xl font-bold font-['Parkinsans',sans-serif] text-[#0A0A0A] mb-5 tracking-tight">
                  TASConnect
                </h2>
                <p className="text-[#555555] text-[15px] sm:text-[16px] font-normal leading-[1.75] mb-8 font-['Manrope',sans-serif]">
                  TASConnect reimagines logistics management through an intelligent, human-centered platform. We built a solution that combines real-time sentiment analysis, AI-driven monitoring, and intuitive dashboards to transform complex data into actionable operational insights. The result is greater visibility, faster decisions, and more efficient logistics operations.
                </p>
                <button
                  type="button"
                  onClick={(e) => e.preventDefault()}
                  className="group/btn inline-flex items-center gap-2 text-[15px] font-semibold text-[#C5445A] hover:text-[#9e2e41] transition-colors duration-200 cursor-pointer"
                >
                  <span>View Details</span>
                  <span className="transition-transform duration-300 group-hover/btn:translate-x-2 font-bold text-lg leading-none">
                    &rarr;
                  </span>
                </button>
              </div>
            </div>

            {/* Visual: Showcase on Right */}
            <div className="w-full lg:w-[64%] z-10">
              <div className="relative rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-slate-200/80 bg-[#1E252B] transition-all duration-500 ease-out group-hover:scale-[1.015] group-hover:-translate-y-1.5 group-hover:shadow-[0_25px_65px_rgba(0,0,0,0.18)]">
                <img
                  src="/assets/figma/exact_tasconnect_hq.png"
                  alt="TASConnect Logistics Intelligence Display"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>

        </section>
      </main>



      {/* ========================================================================= */}
      {/* 3. LIGHT FOOTER (FIGMA NODE #88:289 - #88:364 - Matching Contact Page)    */}
      {/* ========================================================================= */}
      <footer className="bg-[#F7F7F5] border-t border-slate-200/80 pt-14 pb-12 w-full">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-24">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-14">
            {/* Column 1: Brand (Figma Node #88:291) */}
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

            {/* Column 2: Services (Figma Node #88:314) */}
            <div className="lg:col-span-3">
              <h4 className="text-[12px] font-medium uppercase text-[#000000] mb-4 font-parkinsans">
                Services
              </h4>
              <ul className="space-y-2.5 text-[12px] text-[#000000] font-normal font-manrope">
                <li>
                  <button
                    type="button"
                    onClick={() => onNavigateToHome('what-we-do')}
                    className="hover:text-[#C5445A] transition-colors cursor-pointer"
                  >
                    Human-Centered Design
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => onNavigateToHome('what-we-do')}
                    className="hover:text-[#C5445A] transition-colors cursor-pointer"
                  >
                    AI-Powered Development
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => onNavigateToHome('our-works')}
                    className="hover:text-[#C5445A] transition-colors cursor-pointer"
                  >
                    Engineering &amp; Cloud
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => onNavigateToHome('our-works')}
                    className="hover:text-[#C5445A] transition-colors cursor-pointer"
                  >
                    Data &amp; Digital Transformation
                  </button>
                </li>
              </ul>
            </div>

            {/* Column 3: Company (Figma Node #88:326) */}
            <div className="lg:col-span-3">
              <h4 className="text-[12px] font-medium uppercase text-[#000000] mb-4 font-parkinsans">
                Company
              </h4>
              <ul className="space-y-2.5 text-[12px] text-[#000000] font-normal font-manrope">
                <li>
                  <button
                    type="button"
                    onClick={() => onNavigateToWhatWeDo ? onNavigateToWhatWeDo() : onNavigateToHome('what-we-do')}
                    className="hover:text-[#C5445A] transition-colors cursor-pointer"
                  >
                    What We do
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => onNavigateToHome('why-esperia')}
                    className="hover:text-[#C5445A] transition-colors cursor-pointer"
                  >
                    Why Esperia
                  </button>
                </li>
                <li>
                  <span className="text-[#C5445A] font-semibold">
                    Our Works
                  </span>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => onNavigateToHome('blogs')}
                    className="hover:text-[#C5445A] transition-colors cursor-pointer"
                  >
                    Blogs &amp; Newsletters
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={onNavigateToContact}
                    className="hover:text-[#C5445A] transition-colors cursor-pointer"
                  >
                    Contact Us
                  </button>
                </li>
              </ul>
            </div>

            {/* Column 4: Connect (Figma Node #88:340) */}
            <div className="lg:col-span-2">
              <h4 className="text-[12px] font-medium uppercase text-[#000000] mb-4 font-parkinsans">
                Connect
              </h4>
              <div className="flex items-center gap-3 pt-1">
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Twitter"
                  className="w-8 h-8 rounded-full border border-black/10 flex items-center justify-center text-slate-800 hover:text-white hover:bg-[#C5445A] hover:border-[#C5445A] transition-all duration-300 cursor-pointer"
                >
                  <Twitter size={13} />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                  className="w-8 h-8 rounded-full border border-black/10 flex items-center justify-center text-slate-800 hover:text-white hover:bg-[#C5445A] hover:border-[#C5445A] transition-all duration-300 cursor-pointer"
                >
                  <Linkedin size={13} />
                </a>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub"
                  className="w-8 h-8 rounded-full border border-black/10 flex items-center justify-center text-slate-800 hover:text-white hover:bg-[#C5445A] hover:border-[#C5445A] transition-all duration-300 cursor-pointer"
                >
                  <Github size={13} />
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Copyright Bar (Figma Node #88:357) */}
          <div className="pt-6 border-t border-black/[0.07] flex flex-col sm:flex-row items-center justify-between gap-4 text-[12px] text-[#000000] font-normal font-manrope">
            <p>&copy; 2025 Esperia. All rights reserved.</p>
            <div className="flex items-center gap-6">
              <a href="#privacy" className="hover:text-slate-700 transition-colors">Privacy Policy</a>
              <a href="#terms" className="hover:text-slate-700 transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
