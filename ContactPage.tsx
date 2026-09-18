import React, { useState } from 'react';
import {
  ChevronLeft,
  Send,
  CheckCircle2,
  Menu,
  X,
  Twitter,
  Linkedin,
  Github
} from 'lucide-react';

interface ContactPageProps {
  onNavigateToHome: (sectionId?: string) => void;
  onNavigateToWorks?: () => void;
  onNavigateToWhatWeDo?: () => void;
}

function EsperiaEmblem({
  className,
  fill = 'currentColor',
  stroke = 'none',
  strokeWidth = 0
}: {
  className?: string;
  fill?: string;
  stroke?: string;
  strokeWidth?: number;
}) {
  return (
    <svg
      viewBox="0 0 42 48"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M20.9796 47.9998C20.7283 47.9998 20.4787 47.9352 20.2525 47.806L0.72709 36.5334C0.278271 36.2731 0 35.7938 0 35.2749V12.7281C0 12.2092 0.276476 11.7299 0.72709 11.4696L20.2525 0.195236C20.7013 -0.0650788 21.2561 -0.0650788 21.7049 0.195236L41.2303 11.4696C41.6791 11.7299 41.9574 12.2092 41.9574 12.7281V17.2863C41.9574 17.8051 41.6809 18.2844 41.2303 18.5447L21.7049 29.8173C21.2561 30.0776 20.7013 30.0776 20.2525 29.8173L16.3047 27.5391C15.8559 27.2788 15.5776 26.7994 15.5776 26.2806V21.7224C15.5776 21.2036 15.8541 20.7242 16.3047 20.4639L25.8627 14.9452L20.9778 12.1248L10.6945 18.0618V29.9376L20.9778 35.8764L39.7779 25.0221C40.2268 24.7618 40.7815 24.7618 41.2303 25.0221C41.6791 25.2824 41.9574 25.7618 41.9574 26.2806V35.2749C41.9574 35.7938 41.6809 36.2731 41.2303 36.5334L21.7049 47.806C21.4805 47.9352 21.2291 47.9998 20.9778 47.9998H20.9796ZM2.90655 34.4365L20.9796 44.8707L39.0526 34.4365V28.7976L21.7049 38.8134C21.2561 39.0737 20.7013 39.0737 20.2525 38.8134L8.51499 32.0363C8.06617 31.7759 7.78791 31.2966 7.78791 30.7778V17.2252C7.78791 16.7064 8.06438 16.227 8.51499 15.9667L20.2525 9.18957C20.7013 8.92925 21.2561 8.92925 21.7049 9.18957L29.4946 13.6867C29.9434 13.947 30.2217 14.4264 30.2217 14.9452C30.2217 15.4641 29.9452 15.9434 29.4946 16.2037L18.4842 22.5608V25.4404L20.9796 26.8802L39.0526 16.4461V13.5664L20.9796 3.13051L2.90655 13.5664V34.4365Z"
        fill={fill}
        stroke={stroke}
        strokeWidth={strokeWidth}
      />
    </svg>
  );
}

export default function ContactPage({
  onNavigateToHome,
  onNavigateToWorks,
  onNavigateToWhatWeDo
}: ContactPageProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.email || !formData.message) return;
    setIsSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-white text-[#0A0A0A] font-['Manrope',sans-serif] antialiased selection:bg-[#C5445A] selection:text-white flex flex-col justify-between">

      {/* ========================================================================= */}
      {/* 1. HERO & NAVIGATION BANNER (FIGMA NODE #88:165 - #88:188)                */}
      {/* ========================================================================= */}
      <div className="relative overflow-hidden rounded-b-[24px] bg-[radial-gradient(circle_at_76%_59%,_#1F3B39_0%,_#072826_45%,_#020F0F_100%)] text-white">
        {/* Subtle Ambient Wave Graphic Texture Overlay (Starts after the header) */}
        <div className="absolute top-20 sm:top-24 bottom-0 left-0 right-0 opacity-40 pointer-events-none overflow-hidden rounded-b-[24px]">
          <img
            src="/assets/figma/b39e95a77eb26884c9d041d8589fa21e78323b6b.png"
            alt="Fluid Waves Texture"
            className="w-full h-full object-cover object-bottom"
          />
        </div>

        {/* Giant Teal Geometric Watermark Emblem (Figma Node #88:184) */}
        <div className="absolute right-0 sm:right-6 lg:right-12 top-[-10px] w-[260px] sm:w-[340px] lg:w-[420px] pointer-events-none select-none z-0">
          <EsperiaEmblem
            className="w-full h-auto"
            fill="rgba(33, 85, 78, 0.65)"
            stroke="rgba(58, 130, 120, 0.45)"
            strokeWidth={0.3}
          />
        </div>

        {/* Top Navigation Bar - Fixed to Top */}
        <header className="fixed top-0 left-0 right-0 z-50 bg-[#072826]/90 backdrop-blur-md border-b border-white/10 transition-all duration-300">
          <div className="max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-20 h-20 sm:h-24 flex items-center justify-between">
            <button
              type="button"
              onClick={() => onNavigateToHome()}
              className="focus:outline-none flex items-center group cursor-pointer"
            >
              <img
                src="/assets/figma/esperia_footer_logo.svg"
                alt="ESPERIA QUANTUM"
                className="h-9 sm:h-11 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              />
            </button>

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center gap-8 text-[13px] font-medium text-white/95">
              <button
                type="button"
                onClick={() => onNavigateToWhatWeDo ? onNavigateToWhatWeDo() : onNavigateToHome('what-we-do')}
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
                onClick={() => onNavigateToWorks ? onNavigateToWorks() : onNavigateToHome('our-works')}
                className="hover:text-[#73A7A3] transition-colors duration-200 cursor-pointer"
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
              <span className="text-[#F56F6A] font-semibold">
                Contact Us
              </span>
            </nav>

            {/* Mobile Nav Button */}
            <button
              type="button"
              aria-label="Toggle navigation menu"
              className="md:hidden text-white p-2 hover:bg-white/10 rounded-lg transition"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Nav Dropdown */}
          {mobileMenuOpen && (
            <div className="md:hidden bg-[#072826] border-b border-white/10 px-6 py-6 flex flex-col gap-4 relative z-50 shadow-2xl animate-in slide-in-from-top duration-300">
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  if (onNavigateToWhatWeDo) onNavigateToWhatWeDo();
                  else onNavigateToHome('what-we-do');
                }}
                className="text-left text-white hover:text-[#73A7A3]"
              >
                What We Do
              </button>
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onNavigateToHome('why-esperia');
                }}
                className="text-left text-white hover:text-[#73A7A3]"
              >
                Why Esperia
              </button>
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  if (onNavigateToWorks) onNavigateToWorks();
                  else onNavigateToHome('our-works');
                }}
                className="text-left text-white hover:text-[#73A7A3]"
              >
                Our Works
              </button>
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onNavigateToHome('blogs');
                }}
                className="text-left text-white hover:text-[#73A7A3]"
              >
                Blogs &amp; Newsletters
              </button>
              <span className="text-[#F56F6A] font-semibold pt-2 border-t border-white/10">
                Contact Us
              </span>
            </div>
          )}
        </header>

        {/* Hero Headline Content (Figma Node #88:173 - #88:183) */}
        <div className="relative z-10 max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-20 pt-28 sm:pt-32 pb-12 sm:pb-16">
          {/* Back Button Pill (Figma Node #88:174) */}
          <button
            type="button"
            onClick={() => onNavigateToHome('blogs')}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/20 hover:bg-black/35 text-[#E5E7EB] text-xs font-semibold tracking-wide transition-all duration-300 hover:-translate-x-1 mb-6 cursor-pointer group"
          >
            <ChevronLeft size={16} className="text-white/80 group-hover:text-white transition-colors" />
            <span>Back to Blogs &amp; Newsletters</span>
          </button>

          <div className="flex flex-col gap-2 max-w-2xl">
            <span className="text-[11px] sm:text-[12px] font-semibold uppercase tracking-[0.2em] text-[#E5E7EB]/90">
              Blogs
            </span>
            <h1 className="text-3xl sm:text-5xl lg:text-[54px] font-bold text-white tracking-tight leading-[1.1] font-parkinsans">
              Connect with us
            </h1>
            <p className="text-white/85 text-sm sm:text-base font-normal mt-1 font-manrope">
              Let&apos;s build something enduring.
            </p>
          </div>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 2. MAIN SPLIT CONTENT (OFFICE HUBS & GET IN TOUCH FORM)                   */}
      {/* Figma Node #88:214                                                        */}
      {/* ========================================================================= */}
      <main className="relative overflow-hidden w-full flex-1 bg-white">
        {/* Rose/Pink Geometric Watermark Emblem (Figma Node #88:285) */}
        <div className="absolute right-[-30px] sm:right-[-10px] lg:right-6 bottom-[-30px] sm:bottom-[-10px] lg:bottom-0 w-[360px] sm:w-[460px] lg:w-[560px] pointer-events-none select-none z-0">
          <EsperiaEmblem
            className="w-full h-auto"
            fill="rgba(245, 111, 106, 0.15)"
            stroke="rgba(245, 111, 106, 0.25)"
            strokeWidth={0.4}
          />
        </div>

        <div className="max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-20 py-12 sm:py-16 lg:py-20 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">

            {/* Left Column: Headline & Studio Locations (Figma Node #88:215) */}
            <div className="lg:col-span-7 flex flex-col">
              <h2 className="text-2xl sm:text-3xl lg:text-[40px] font-bold text-[#0D0D0D] font-parkinsans leading-[1.25] lg:leading-[50px] tracking-tight mb-4 max-w-xl">
                We are always ready to <span className="text-[#C5445A]">help you</span> and answer your questions
              </h2>

              <p className="text-[#6B7280] text-sm sm:text-[15px] font-manrope leading-relaxed mb-8 max-w-xl">
                Pacific hake false trevally queen parrotfish black prickleback mosshead warbonnet sweeper! Greenling sleeper.
              </p>

              {/* Studio Cards Grid (Figma Nodes #88:223 - #88:240) */}
              <div className="flex flex-col gap-4 sm:gap-5 max-w-2xl">
                {/* Row 1: US & Malaysia (2 cards) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                  {/* United States */}
                  <div className="bg-[#FAFAFA] rounded-2xl p-5 sm:p-6 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between border border-slate-100/80 hover:border-[#C5445A]/30 group">
                    <div>
                      <span className="text-[12px] font-semibold uppercase tracking-wider text-[#6B7280] block mb-2 font-manrope">
                        UNITED STATES - HEAD QUARTERS
                      </span>
                      <h3 className="text-[17px] font-bold text-[#111111] font-manrope leading-snug group-hover:text-[#C5445A] transition-colors">
                        Esperia LLC <br />
                        Wyoming, United States
                      </h3>
                    </div>

                    <div className="pt-4 mt-3 text-[13px] font-medium text-[#4B5563] font-manrope leading-[24px]">
                      <div>hello@esperia.me</div>
                      <div>+91-123 456 765</div>
                    </div>
                  </div>

                  {/* Malaysia */}
                  <div className="bg-[#FAFAFA] rounded-2xl p-5 sm:p-6 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between border border-slate-100/80 hover:border-[#C5445A]/30 group">
                    <div>
                      <span className="text-[12px] font-semibold uppercase tracking-wider text-[#6B7280] block mb-2 font-manrope">
                        MALAYSIA
                      </span>
                      <h3 className="text-[17px] font-bold text-[#111111] font-manrope leading-snug group-hover:text-[#C5445A] transition-colors">
                        Esperia Quantum Sdn Bhd <br />
                        Kuala Lumpur, Malaysia
                      </h3>
                    </div>

                    <div className="pt-4 mt-3 text-[13px] font-medium text-[#4B5563] font-manrope leading-[24px]">
                      <div>hello@esperia.me</div>
                      <div>+91-123 456 765</div>
                    </div>
                  </div>
                </div>

                {/* Row 2: India Hub (Figma Node #88:235) */}
                <div className="bg-[#FAFAFA] rounded-2xl p-5 sm:p-6 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border border-slate-100/80 hover:border-[#C5445A]/30 group">
                  <div>
                    <span className="text-[12px] font-semibold uppercase tracking-wider text-[#6B7280] block mb-1.5 font-manrope">
                      INDIA
                    </span>
                    <h3 className="text-[17px] font-bold text-[#111111] font-manrope leading-snug group-hover:text-[#C5445A] transition-colors">
                      Esperia Studio
                    </h3>
                  </div>

                  <div className="text-[13px] font-medium text-[#4B5563] font-manrope leading-[24px]">
                    <div>hello@esperia.me</div>
                    <div>+91-123 456 765</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Dark Modern Form Card (Figma Node #88:241 - #88:282) */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <div className="w-full max-w-[430px] rounded-2xl bg-[radial-gradient(circle_at_27%_23%,_rgba(86,86,86,1)_0%,_rgba(29,31,30,1)_100%)] p-6 sm:p-8 text-white shadow-xl relative overflow-hidden flex flex-col justify-between border border-white/10">

                <div>
                  <h3 className="text-2xl sm:text-[26px] font-bold text-white font-parkinsans tracking-tight mb-5 leading-tight">
                    Get in Touch
                  </h3>

                  {isSubmitted ? (
                    <div className="py-12 text-center flex flex-col items-center gap-4 relative z-10 animate-in fade-in zoom-in duration-500">
                      <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
                        <CheckCircle2 size={36} />
                      </div>
                      <h4 className="text-xl font-bold font-parkinsans text-white">Message Received</h4>
                      <p className="text-sm text-slate-300 max-w-xs font-manrope">
                        Thank you for reaching out to Esperia. Our team will get back to you shortly.
                      </p>
                      <button
                        type="button"
                        onClick={() => {
                          setIsSubmitted(false);
                          setFormData({ fullName: '', email: '', subject: '', message: '' });
                        }}
                        className="mt-4 text-xs font-bold uppercase tracking-wider text-[#F56F6A] hover:underline cursor-pointer"
                      >
                        Send another message
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="flex flex-col gap-4 relative z-10">
                      {/* Full Name */}
                      <div className="flex flex-col gap-1">
                        <label htmlFor="fullName" className="text-[13px] font-normal text-[#ADADAD] font-manrope">
                          Full name
                        </label>
                        <input
                          id="fullName"
                          type="text"
                          required
                          value={formData.fullName}
                          onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                          className="w-full bg-transparent border-b border-[#ADADAD]/40 pb-1.5 text-white text-[13px] font-manrope focus:outline-none focus:border-[#F56F6A] transition-colors"
                        />
                      </div>

                      {/* Email */}
                      <div className="flex flex-col gap-1">
                        <label htmlFor="email" className="text-[13px] font-normal text-[#ADADAD] font-manrope">
                          Email
                        </label>
                        <input
                          id="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full bg-transparent border-b border-[#ADADAD]/40 pb-1.5 text-white text-[13px] font-manrope focus:outline-none focus:border-[#F56F6A] transition-colors"
                        />
                      </div>

                      {/* Subject */}
                      <div className="flex flex-col gap-1">
                        <label htmlFor="subject" className="text-[13px] font-normal text-[#ADADAD] font-manrope">
                          Subject
                        </label>
                        <input
                          id="subject"
                          type="text"
                          value={formData.subject}
                          onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                          className="w-full bg-transparent border-b border-[#ADADAD]/40 pb-1.5 text-white text-[13px] font-manrope focus:outline-none focus:border-[#F56F6A] transition-colors"
                        />
                      </div>

                      {/* Message */}
                      <div className="flex flex-col gap-1">
                        <label htmlFor="message" className="text-[13px] font-normal text-[#ADADAD] font-manrope">
                          Message
                        </label>
                        <textarea
                          id="message"
                          required
                          rows={3}
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          className="w-full bg-transparent border-b border-[#ADADAD]/40 pb-1.5 text-white text-[13px] font-manrope focus:outline-none focus:border-[#F56F6A] transition-colors resize-none"
                        />
                      </div>

                      {/* Send Button (Figma Node #88:280) */}
                      <div className="flex justify-end pt-2">
                        <button
                          type="submit"
                          className="inline-flex items-center gap-2 bg-gradient-to-r from-[#F56F6A] to-[#C5445A] hover:brightness-110 text-white text-[13px] font-semibold px-5 py-2 rounded-full shadow-md transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer font-manrope"
                        >
                          <span>Send</span>
                          <Send size={14} />
                        </button>
                      </div>
                    </form>
                  )}
                </div>

              </div>
            </div>

          </div>
        </div>
      </main>

      {/* ========================================================================= */}
      {/* 3. LIGHT FOOTER (FIGMA NODE #88:289 - #88:364)                            */}
      {/* ========================================================================= */}
      <footer className="bg-[#F7F7F5] border-t border-slate-200/80 pt-14 pb-12 w-full">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-20">
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
                    className="hover:text-[#C5445A] transition-colors"
                  >
                    Human-Centered Design
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => onNavigateToHome('what-we-do')}
                    className="hover:text-[#C5445A] transition-colors"
                  >
                    AI-Powered Development
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => onNavigateToHome('our-works')}
                    className="hover:text-[#C5445A] transition-colors"
                  >
                    Engineering &amp; Cloud
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => onNavigateToHome('our-works')}
                    className="hover:text-[#C5445A] transition-colors"
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
                    className="hover:text-[#C5445A] transition-colors"
                  >
                    What We do
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => onNavigateToHome('why-esperia')}
                    className="hover:text-[#C5445A] transition-colors"
                  >
                    Why Esperia
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => onNavigateToHome('our-works')}
                    className="hover:text-[#C5445A] transition-colors"
                  >
                    Our Products
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => onNavigateToHome('blogs')}
                    className="hover:text-[#C5445A] transition-colors"
                  >
                    Blogs &amp; Newsletters
                  </button>
                </li>
                <li>
                  <span className="text-[#C5445A] font-semibold">
                    Contact Us
                  </span>
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
                  className="w-8 h-8 rounded-full border border-black/10 flex items-center justify-center text-slate-800 hover:text-white hover:bg-[#C5445A] hover:border-[#C5445A] transition-all duration-300"
                >
                  <Twitter size={13} />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                  className="w-8 h-8 rounded-full border border-black/10 flex items-center justify-center text-slate-800 hover:text-white hover:bg-[#C5445A] hover:border-[#C5445A] transition-all duration-300"
                >
                  <Linkedin size={13} />
                </a>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub"
                  className="w-8 h-8 rounded-full border border-black/10 flex items-center justify-center text-slate-800 hover:text-white hover:bg-[#C5445A] hover:border-[#C5445A] transition-all duration-300"
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
