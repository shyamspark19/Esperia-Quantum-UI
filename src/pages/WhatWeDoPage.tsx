import React, { useEffect } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';

interface WhatWeDoPageProps {
  onNavigateToHome: (sectionId?: string) => void;
  onNavigateToWorks: () => void;
  onNavigateToContact: () => void;
  onNavigateToBlogs?: () => void;
  onNavigateToWhyEsperia?: () => void;
}

export default function WhatWeDoPage({
  onNavigateToHome,
  onNavigateToWorks,
  onNavigateToContact,
  onNavigateToBlogs,
  onNavigateToWhyEsperia
}: WhatWeDoPageProps) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#F6F6F3] text-[#0A0A0A] font-sans antialiased flex flex-col selection:bg-[#C5445A] selection:text-white">
      {/* ============================================================ */}
      {/* 1. STICKY HEADER (outside overflow-hidden section)            */}
      {/* ============================================================ */}
      <Header
        activePage="what-we-do"
        onNavigateToHome={onNavigateToHome}
        onNavigateToWhatWeDo={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        onNavigateToWhyEsperia={onNavigateToWhyEsperia}
        onNavigateToWorks={onNavigateToWorks}
        onNavigateToBlogs={onNavigateToBlogs}
        onNavigateToContact={onNavigateToContact}
        scrolledBg="bg-[#071F1A]/95 shadow-xl backdrop-blur-md"
        className="-mb-20 sm:-mb-24"
      />

      {/* ============================================================ */}
      {/* 2. HERO SECTION (EXACT ATTACHED THEME BACKGROUND)             */}
      {/* ============================================================ */}
      <div className="w-full bg-[#F6F6F3] px-0 sm:px-4 lg:px-8">
        <section className="relative w-full text-white rounded-b-[32px] sm:rounded-[40px] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.15)] bg-[#071F1A]">
          {/* Exact Hero Theme Background Image */}
          <div className="absolute inset-0 z-0 pointer-events-none">
            <img
              src="/assets/figma/whatwedo_hero_bg_exact.png"
              alt="Hero Background Theme"
              className="w-full h-full object-cover rounded-b-[32px] sm:rounded-[40px]"
            />
          </div>

          {/* Background Emblem Watermark (Exactly as in reference) */}
          <div className="absolute top-0 right-0 w-[550px] sm:w-[750px] lg:w-[980px] h-full pointer-events-none z-[1] overflow-hidden flex items-center justify-end">
            <img
              src="/assets/figma/esperia_emblem_watermark.png"
              alt=""
              className="w-full h-auto max-w-none opacity-[0.22] mix-blend-screen translate-x-[6%] -translate-y-[3%]"
            />
          </div>

          {/* Ambient Top Glow */}
          <div className="absolute top-0 left-1/4 w-[500px] h-[300px] bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none z-0" />

          {/* Hero Content Area */}
          <div className="relative z-10 max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-20 pt-28 sm:pt-32 lg:pt-36 pb-16 sm:pb-24 lg:pb-28">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
              {/* Left Headline & Pitch */}
              <div className="lg:col-span-6 flex flex-col items-start text-left">
                {/* Home Button */}
                <div className="mb-4 sm:mb-6">
                  <button
                    type="button"
                    onClick={() => onNavigateToHome()}
                    className="inline-flex items-center gap-2 px-3 py-2 rounded-full bg-black/20 hover:bg-black/30 text-[#E5E7EB] text-[12px] font-manrope font-semibold transition-all duration-200 cursor-pointer border border-white/5"
                  >
                    <img
                      src="/assets/figma/icon_chevron_left.svg"
                      alt=""
                      className="w-4 h-4 object-contain"
                    />
                    <span>Home</span>
                  </button>
                </div>

                <h1 className="text-4xl sm:text-5xl lg:text-[60px] xl:text-[66px] font-bold text-white tracking-tight leading-[1.08] font-sans">
                  Human Ingenuity.
                </h1>

                <h2
                  className="text-4xl sm:text-5xl lg:text-[60px] xl:text-[66px] font-normal text-[#8EE5C7] leading-[1.12] mt-1 sm:mt-2 italic tracking-wide"
                  style={{ fontFamily: "'Dancing Script', 'Alex Brush', 'Playfair Display', cursive" }}
                >
                  Intelligent Systems.
                </h2>

                <p className="text-[14px] sm:text-[15px] lg:text-[16px] text-white/75 leading-[1.7] max-w-[510px] mt-6 sm:mt-8 font-normal font-manrope">
                  We connect AI, data, cloud, and digital design to unlock business transformation — enabling organizations to innovate with purpose and scale with agility.
                </p>
              </div>

              {/* Right 3D Visual Graphic */}
              <div className="lg:col-span-6 flex justify-center lg:justify-end items-center relative">
                <div className="relative w-full max-w-[580px] lg:max-w-[640px] flex items-center justify-center">
                  {/* Glow behind 3D artwork */}
                  <div className="absolute inset-0 bg-red-500/15 rounded-full blur-[90px] pointer-events-none" />
                  <img
                    src="/assets/figma/whatwedo_hero_exact.png"
                    alt="Esperia Intelligent Systems Platform"
                    className="relative z-10 w-full h-auto object-contain max-h-[480px] drop-shadow-[0_25px_60px_rgba(0,0,0,0.45)] hover:scale-105 transition-transform duration-500 ease-out cursor-pointer"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* ============================================================ */}
      {/* 2. SERVICES LIST (4 DETAILED ALTERNATING CARDS)               */}
      {/* ============================================================ */}
      <main className="w-full max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-20 py-16 sm:py-24 space-y-12 sm:space-y-16">

        {/* ------------------------------------------------------------ */}
        {/* SECTION 01: Engineering & Platforms (Card Left, Content Right)*/}
        {/* ------------------------------------------------------------ */}
        <section className="bg-[#FAFAF8] border border-slate-200/70 rounded-[32px] sm:rounded-[40px] p-6 sm:p-10 lg:p-14 shadow-[0_4px_30px_rgba(0,0,0,0.02)] transition-shadow duration-300 hover:shadow-[0_8px_35px_rgba(0,0,0,0.04)]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
            {/* Left Feature Card - Exact Figma Card */}
            <div className="lg:col-span-5 flex justify-center">
              <img
                src="/assets/figma/whatwedo_card1_exact.png"
                alt="01 Engineering & Platforms"
                className="w-full max-w-[360px] h-auto object-contain rounded-[28px] shadow-[0_8px_30px_rgba(0,0,0,0.06)] hover:scale-105 transition-transform duration-500 ease-out cursor-pointer"
              />
            </div>

            {/* Right Sub-services List */}
            <div className="lg:col-span-7 flex flex-col justify-center space-y-7 sm:space-y-9 pl-0 lg:pl-4">
              <div>
                <h4 className="text-[15px] sm:text-[16px] font-bold text-[#111111] font-parkinsans mb-2">
                  API
                </h4>
                <p className="text-[12px] sm:text-[13px] text-[#666666] leading-[1.65] font-manrope">
                  Turning ambitious ideas into resilient digital ecosystems, Esperia combines deep engineering expertise with platform innovation to create technology foundations built for growth. Every platform is crafted to perform, adapt, and evolve alongside the businesses that depend on them.
                </p>
              </div>

              <div>
                <h4 className="text-[15px] sm:text-[16px] font-bold text-[#111111] font-parkinsans mb-2">
                  Cloud Solutions
                </h4>
                <p className="text-[12px] sm:text-[13px] text-[#666666] leading-[1.65] font-manrope">
                  Turning ambitious ideas into resilient digital ecosystems, Esperia combines deep engineering expertise with platform innovation to create technology foundations built for growth. Every platform is crafted to perform, adapt, and evolve alongside the businesses that depend on them.
                </p>
              </div>

              <div>
                <h4 className="text-[15px] sm:text-[16px] font-bold text-[#111111] font-parkinsans mb-2">
                  Enterprise & Low-Code Platforms
                </h4>
                <p className="text-[12px] sm:text-[13px] text-[#666666] leading-[1.65] font-manrope">
                  Turning ambitious ideas into resilient digital ecosystems, Esperia combines deep engineering expertise with platform innovation to create technology foundations built for growth. Every platform is crafted to perform, adapt, and evolve alongside the businesses that depend on them.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ------------------------------------------------------------ */}
        {/* SECTION 02: AI & Data Automation (Content Left, Card Right) */}
        {/* ------------------------------------------------------------ */}
        <section className="bg-[#FAFAF8] border border-slate-200/70 rounded-[32px] sm:rounded-[40px] p-6 sm:p-10 lg:p-14 shadow-[0_4px_30px_rgba(0,0,0,0.02)] transition-shadow duration-300 hover:shadow-[0_8px_35px_rgba(0,0,0,0.04)]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
            {/* Left Sub-services List */}
            <div className="lg:col-span-7 flex flex-col justify-center space-y-7 sm:space-y-9 pr-0 lg:pr-4 order-2 lg:order-1">
              <div>
                <h4 className="text-[15px] sm:text-[16px] font-bold text-[#111111] font-parkinsans mb-2">
                  AI & Intelligent Automation
                </h4>
                <p className="text-[12px] sm:text-[13px] text-[#666666] leading-[1.65] font-manrope">
                  Turning ambitious ideas into resilient digital ecosystems. Esperia combines deep engineering expertise with platform innovation to accelerate delivery, foundational build for growth. Every platform is crafted to perform, adapt, and evolve alongside the businesses that depend on them.
                </p>
              </div>

              <div>
                <h4 className="text-[15px] sm:text-[16px] font-bold text-[#111111] font-parkinsans mb-2">
                  Data Analytics & Insights
                </h4>
                <p className="text-[12px] sm:text-[13px] text-[#666666] leading-[1.65] font-manrope">
                  Turning ambitious ideas into resilient digital ecosystems. Esperia combines deep engineering expertise with platform innovation to accelerate delivery, foundational build for growth. Every platform is crafted to perform, adapt, and evolve alongside the businesses that depend on them.
                </p>
              </div>

              <div>
                <h4 className="text-[15px] sm:text-[16px] font-bold text-[#111111] font-parkinsans mb-2">
                  Digital Transformation & Strategy
                </h4>
                <p className="text-[12px] sm:text-[13px] text-[#666666] leading-[1.65] font-manrope">
                  Turning ambitious ideas into resilient digital ecosystems. Esperia combines deep engineering expertise with platform innovation to accelerate delivery, foundational build for growth. Every platform is crafted to perform, adapt, and evolve alongside the businesses that depend on them.
                </p>
              </div>
            </div>

            {/* Right Feature Card - Exact Figma Card */}
            <div className="lg:col-span-5 order-1 lg:order-2 flex justify-center">
              <img
                src="/assets/figma/whatwedo_card2_exact.png"
                alt="02 AI & Data Automation"
                className="w-full max-w-[360px] h-auto object-contain rounded-[28px] shadow-[0_8px_30px_rgba(0,0,0,0.06)] hover:scale-105 transition-transform duration-500 ease-out cursor-pointer"
              />
            </div>
          </div>
        </section>

        {/* ------------------------------------------------------------ */}
        {/* SECTION 03: Government Services (Card Left, Content Right)  */}
        {/* ------------------------------------------------------------ */}
        <section className="bg-[#FAFAF8] border border-slate-200/70 rounded-[32px] sm:rounded-[40px] p-6 sm:p-10 lg:p-14 shadow-[0_4px_30px_rgba(0,0,0,0.02)] transition-shadow duration-300 hover:shadow-[0_8px_35px_rgba(0,0,0,0.04)]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
            {/* Left Feature Card - Exact Figma Card */}
            <div className="lg:col-span-5 flex justify-center">
              <img
                src="/assets/figma/whatwedo_card3_exact.png"
                alt="03 Government Services"
                className="w-full max-w-[360px] h-auto object-contain rounded-[28px] shadow-[0_8px_30px_rgba(0,0,0,0.06)] hover:scale-105 transition-transform duration-500 ease-out cursor-pointer"
              />
            </div>

            {/* Right Sub-services List */}
            <div className="lg:col-span-7 flex flex-col justify-center space-y-7 sm:space-y-9 pl-0 lg:pl-4">
              <div>
                <h4 className="text-[15px] sm:text-[16px] font-bold text-[#111111] font-parkinsans mb-2">
                  Citizen Experience & Public Service Platforms
                </h4>
                <p className="text-[12px] sm:text-[13px] text-[#666666] leading-[1.65] font-manrope">
                  Turning ambitious ideas into resilient digital ecosystems. Esperia combines deep engineering expertise with platform innovation to accelerate delivery, foundational build for growth. Every platform is crafted to perform, adapt, and evolve alongside the businesses that depend on them.
                </p>
              </div>

              <div>
                <h4 className="text-[15px] sm:text-[16px] font-bold text-[#111111] font-parkinsans mb-2">
                  Federal & State Projects
                </h4>
                <p className="text-[12px] sm:text-[13px] text-[#666666] leading-[1.65] font-manrope">
                  Turning ambitious ideas into resilient digital ecosystems. Esperia combines deep engineering expertise with platform innovation to accelerate delivery, foundational build for growth. Every platform is crafted to perform, adapt, and evolve alongside the businesses that depend on them.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ------------------------------------------------------------ */}
        {/* SECTION 04: Human & AI Experience Design (Content Left, Card Right) */}
        {/* ------------------------------------------------------------ */}
        <section className="bg-[#FAFAF8] border border-slate-200/70 rounded-[32px] sm:rounded-[40px] p-6 sm:p-10 lg:p-14 shadow-[0_4px_30px_rgba(0,0,0,0.02)] transition-shadow duration-300 hover:shadow-[0_8px_35px_rgba(0,0,0,0.04)]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
            {/* Left Sub-services List (5 Sub-items) */}
            <div className="lg:col-span-7 flex flex-col justify-center space-y-6 sm:space-y-7 pr-0 lg:pr-4 order-2 lg:order-1">
              <div>
                <h4 className="text-[15px] sm:text-[16px] font-bold text-[#111111] font-parkinsans mb-1.5">
                  UI & UX Design
                </h4>
                <p className="text-[12px] sm:text-[13px] text-[#666666] leading-[1.65] font-manrope">
                  Turning ambitious ideas into resilient digital ecosystems. Esperia combines deep engineering expertise with platform innovation to accelerate delivery, foundational build for growth. Every platform is crafted to perform, adapt, and evolve alongside the businesses that depend on them.
                </p>
              </div>

              <div>
                <h4 className="text-[15px] sm:text-[16px] font-bold text-[#111111] font-parkinsans mb-1.5">
                  User & Market Research
                </h4>
                <p className="text-[12px] sm:text-[13px] text-[#666666] leading-[1.65] font-manrope">
                  Turning ambitious ideas into resilient digital ecosystems. Esperia combines deep engineering expertise with platform innovation to accelerate delivery, foundational build for growth. Every platform is crafted to perform, adapt, and evolve alongside the businesses that depend on them.
                </p>
              </div>

              <div>
                <h4 className="text-[15px] sm:text-[16px] font-bold text-[#111111] font-parkinsans mb-1.5">
                  Service Design
                </h4>
                <p className="text-[12px] sm:text-[13px] text-[#666666] leading-[1.65] font-manrope">
                  Turning ambitious ideas into resilient digital ecosystems. Esperia combines deep engineering expertise with platform innovation to accelerate delivery, foundational build for growth. Every platform is crafted to perform, adapt, and evolve alongside the businesses that depend on them.
                </p>
              </div>

              <div>
                <h4 className="text-[15px] sm:text-[16px] font-bold text-[#111111] font-parkinsans mb-1.5">
                  Design Systems
                </h4>
                <p className="text-[12px] sm:text-[13px] text-[#666666] leading-[1.65] font-manrope">
                  Turning ambitious ideas into resilient digital ecosystems. Esperia combines deep engineering expertise with platform innovation to accelerate delivery, foundational build for growth. Every platform is crafted to perform, adapt, and evolve alongside the businesses that depend on them.
                </p>
              </div>

              <div>
                <h4 className="text-[15px] sm:text-[16px] font-bold text-[#111111] font-parkinsans mb-1.5">
                  HAI Model
                </h4>
                <p className="text-[12px] sm:text-[13px] text-[#666666] leading-[1.65] font-manrope">
                  Turning ambitious ideas into resilient digital ecosystems. Esperia combines deep engineering expertise with platform innovation to accelerate delivery, foundational build for growth. Every platform is crafted to perform, adapt, and evolve alongside the businesses that depend on them.
                </p>
              </div>
            </div>

            {/* Right Feature Card - Exact Figma Card */}
            <div className="lg:col-span-5 order-1 lg:order-2 flex justify-center">
              <img
                src="/assets/figma/whatwedo_card4_exact.png"
                alt="04 Human & AI Experience Design"
                className="w-full max-w-[360px] h-auto object-contain rounded-[28px] shadow-[0_8px_30px_rgba(0,0,0,0.06)] hover:scale-105 transition-transform duration-500 ease-out cursor-pointer"
              />
            </div>
          </div>
        </section>

      </main>

      {/* ============================================================ */}
      {/* 3. LIGHT FOOTER (SHARED BRAND COMPONENT)                     */}
      {/* ============================================================ */}
      <Footer
        activePage="what-we-do"
        onNavigateToHome={onNavigateToHome}
        onNavigateToWorks={onNavigateToWorks}
        onNavigateToContact={onNavigateToContact}
        onNavigateToWhatWeDo={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        onNavigateToBlogs={onNavigateToBlogs}
        onNavigateToWhyEsperia={onNavigateToWhyEsperia}
      />
    </div>
  );
}
