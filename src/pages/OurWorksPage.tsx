import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';

interface OurWorksPageProps {
  onNavigateToHome: (sectionId?: string) => void;
  onNavigateToContact: () => void;
  onNavigateToWhatWeDo?: () => void;
  onNavigateToBlogs?: () => void;
  onNavigateToWhyEsperia?: () => void;
  onViewWatermelon?: () => void;
  onViewYoungGenius?: () => void;
  onViewIrisHr?: () => void;
  onViewTasConnect?: () => void;
}

export default function OurWorksPage({
  onNavigateToHome,
  onNavigateToContact,
  onNavigateToWhatWeDo,
  onNavigateToBlogs,
  onNavigateToWhyEsperia,
  onViewWatermelon,
  onViewYoungGenius,
  onViewIrisHr,
  onViewTasConnect,
}: OurWorksPageProps) {
  return (
    <div className="min-h-screen bg-white text-[#0A0A0A] font-sans antialiased flex flex-col justify-between selection:bg-[#C5445A] selection:text-white">
      {/* ============================================================ */}
      {/* 1. STICKY HEADER (outside overflow-hidden hero section)       */}
      {/* ============================================================ */}
      <Header
        activePage="works"
        onNavigateToHome={onNavigateToHome}
        onNavigateToWhatWeDo={onNavigateToWhatWeDo}
        onNavigateToWhyEsperia={onNavigateToWhyEsperia}
        onNavigateToWorks={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        onNavigateToBlogs={onNavigateToBlogs}
        onNavigateToContact={onNavigateToContact}
        className="-mb-20 sm:-mb-24"
      />

      {/* ============================================================ */}
      {/* 2. HERO SECTION (EXACT SAME THEME AS WHY ESPERIA PAGE)        */}
      {/* ============================================================ */}
      <div className="w-full bg-white px-0 sm:px-4 lg:px-8">
        <section
          className="relative w-full text-white rounded-b-[32px] sm:rounded-[40px] overflow-hidden min-h-[560px] lg:h-[594px] flex flex-col justify-between"
          style={{
            background:
              'radial-gradient(circle at 75% 45%, #17382B 0%, #0E241B 55%, #081711 100%)',
          }}
        >
          {/* Subtle Ambient Radial Glow */}
          <div className="absolute top-0 right-1/4 w-[600px] h-[350px] bg-[#1A382B]/30 rounded-full blur-[120px] pointer-events-none z-0" />



          {/* 3D Isometric Platform Graphic (Right side of Hero) */}
          <div className="hidden md:block absolute right-2 lg:right-10 top-[85px] lg:top-[95px] w-[460px] lg:w-[580px] h-auto z-20 drop-shadow-[0_20px_40px_rgba(0,0,0,0.5)] pointer-events-auto">
            <img
              src="/assets/figma/exact_hero_3d_hq.png"
              alt="AI & Cloud Solutions Ecosystem"
              className="w-full h-auto object-contain select-none cursor-pointer transform-gpu transition-transform duration-500 ease-out hover:scale-105 active:scale-100 will-change-transform"
            />
          </div>

          {/* Hero Content Area */}
          <div className="relative z-10 max-w-[1440px] mx-auto w-full px-6 sm:px-10 lg:px-16 pt-28 sm:pt-32 pb-14 sm:pb-20 flex-1 flex flex-col justify-center">
            <div className="max-w-[760px] flex flex-col gap-4 sm:gap-5">
              {/* Home Button */}
              <div>
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

              {/* Main Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-[64px] font-semibold text-white font-parkinsans leading-[1.08] tracking-tight mb-4 sm:mb-6">
                Solutions that <br />
                <span className="font-playball text-[#91CBA6] font-normal italic tracking-normal inline-block ml-1">Empower</span>
                <span className="font-parkinsans font-semibold text-white ml-2">Industries</span>
              </h1>

              {/* Subtitle Description */}
              <p className="text-[16px] sm:text-[18px] text-[#FFFFFF]/85 font-manrope font-normal leading-[1.6] max-w-[560px]">
                We partner with high-growth startups and global enterprises to design, engineer, and scale transformative digital products that redefine entire industries.
              </p>
            </div>

            {/* Mobile-only 3D artwork display */}
            <div className="md:hidden mt-8 w-full max-w-[340px] mx-auto">
              <img
                src="/assets/figma/exact_hero_3d_hq.png"
                alt="AI & Cloud Solutions Ecosystem"
                className="w-full h-auto object-contain select-none cursor-pointer transform-gpu transition-transform duration-500 ease-out hover:scale-105 will-change-transform"
              />
            </div>
          </div>
        </section>
      </div>

      {/* ========================================================================= */}
      {/* 3. MAIN CONTENT (CASE STUDIES)                                            */}
      {/* ========================================================================= */}
      <main className="flex-1 w-full overflow-hidden pt-12 sm:pt-20">

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
                  onClick={() => onViewYoungGenius ? onViewYoungGenius() : undefined}
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
                  onClick={() => onViewIrisHr ? onViewIrisHr() : undefined}
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
                  onClick={() => onViewTasConnect ? onViewTasConnect() : undefined}
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
      {/* 3. LIGHT FOOTER (SHARED BRAND COMPONENT)                                  */}
      {/* ========================================================================= */}
      <Footer
        activePage="works"
        onNavigateToHome={onNavigateToHome}
        onNavigateToWorks={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        onNavigateToContact={onNavigateToContact}
        onNavigateToWhatWeDo={onNavigateToWhatWeDo}
        onNavigateToBlogs={onNavigateToBlogs}
        onNavigateToWhyEsperia={onNavigateToWhyEsperia}
      />
    </div>
  );
}
