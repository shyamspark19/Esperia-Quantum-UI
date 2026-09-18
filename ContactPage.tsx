import React, { useState } from 'react';
import {
  ChevronLeft,
  Send,
  CheckCircle2,
  Menu,
  X,
  Twitter,
  Linkedin,
  Github,
  Mail,
  Phone,
  MapPin
} from 'lucide-react';

interface ContactPageProps {
  onNavigateToHome: (sectionId?: string) => void;
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

export default function ContactPage({ onNavigateToHome }: ContactPageProps) {
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
      <div className="relative overflow-hidden rounded-b-[32px] bg-[radial-gradient(circle_at_76%_59%,_#1F3B39_0%,_#072826_45%,_#020F0F_100%)] text-white">
        {/* Ambient Wave Graphic Texture Overlay (Figma Node #88:172) */}
        <div className="absolute inset-0 opacity-40 pointer-events-none overflow-hidden">
          <img
            src="/assets/figma/b39e95a77eb26884c9d041d8589fa21e78323b6b.png"
            alt="Fluid Waves Texture"
            className="w-full h-full object-cover object-bottom"
          />
        </div>

        {/* Giant Teal Geometric Watermark Emblem (Figma Node #88:184) */}
        <div className="absolute right-0 sm:right-6 lg:right-12 top-[-10px] w-[420px] sm:w-[560px] lg:w-[678px] pointer-events-none select-none z-0">
          <EsperiaEmblem
            className="w-full h-auto"
            fill="rgba(33, 85, 78, 0.65)"
            stroke="rgba(58, 130, 120, 0.45)"
            strokeWidth={0.3}
          />
        </div>

        {/* Ambient Glow Orbs */}
        <div className="absolute -top-24 right-1/4 w-[480px] h-[480px] bg-[#3EA594]/15 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute -bottom-24 right-12 w-[380px] h-[380px] bg-[#C5465B]/15 rounded-full blur-[100px] pointer-events-none" />

        {/* Top Navigation Bar (Figma Node #88:188) */}
        <header className="relative z-20 border-b border-white/10">
          <div className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">
            <button
              type="button"
              onClick={() => onNavigateToHome()}
              className="focus:outline-none flex items-center group cursor-pointer"
            >
              <img
                src="/assets/figma/esperia_footer_logo.svg"
                alt="ESPERIA QUANTUM"
                className="h-10 sm:h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              />
            </button>

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center gap-8 text-[13px] font-medium text-white/90">
              <button
                type="button"
                onClick={() => onNavigateToHome('what-we-do')}
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
                onClick={() => onNavigateToHome('our-works')}
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
              <span className="text-[#F56F6A] font-semibold border-b border-[#F56F6A] pb-0.5">
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
                  onNavigateToHome('what-we-do');
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
                  onNavigateToHome('our-works');
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
        <div className="relative z-10 max-w-7xl mx-auto px-6 pt-12 pb-24 sm:pt-16 sm:pb-28">
          {/* Back Button Pill (Figma Node #88:174) */}
          <button
            type="button"
            onClick={() => onNavigateToHome('blogs')}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-black/25 hover:bg-black/40 border border-white/10 text-[#E5E7EB] text-xs font-semibold tracking-wide transition-all duration-300 hover:-translate-x-1 mb-8 backdrop-blur-md cursor-pointer group"
          >
            <ChevronLeft size={16} className="text-white/80 group-hover:text-white transition-colors" />
            <span>Back to Blogs &amp; Newsletters</span>
          </button>

          <div className="flex flex-col gap-3">
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#E5E7EB]/90">
              Blogs
            </span>
            <h1 className="text-4xl sm:text-6xl lg:text-[64px] font-semibold text-white tracking-tight leading-[1.08] font-parkinsans">
              Connect with us
            </h1>
            <p className="text-white/85 text-base sm:text-xl font-normal mt-2 font-manrope">
              Let&apos;s build something enduring.
            </p>
          </div>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 2. MAIN SPLIT CONTENT (OFFICE HUBS & GET IN TOUCH FORM)                   */}
      {/* Figma Node #88:214                                                        */}
      {/* ========================================================================= */}
      <main className="relative overflow-hidden w-full flex-1">
        {/* Giant Rose/Pink Geometric Watermark Emblem (Figma Node #88:285) */}
        <div className="absolute right-[-40px] sm:right-[-10px] lg:right-6 bottom-[-40px] sm:bottom-[-20px] lg:bottom-0 w-[460px] sm:w-[580px] lg:w-[693px] pointer-events-none select-none z-0">
          <EsperiaEmblem
            className="w-full h-auto"
            fill="rgba(245, 111, 106, 0.18)"
            stroke="rgba(245, 111, 106, 0.3)"
            strokeWidth={0.4}
          />
        </div>

        <div className="max-w-7xl mx-auto px-6 py-20 lg:py-28 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

          {/* Left Column: Headline & Studio Locations (Figma Node #88:215) */}
          <div className="lg:col-span-7 flex flex-col">
            <h2 className="text-3xl sm:text-4xl lg:text-[48px] font-bold text-[#0D0D0D] font-parkinsans leading-[1.14] tracking-tight mb-5">
              We are always ready to <span className="text-[#C5445A]">help you</span> and answer your questions
            </h2>

            <p className="text-[#6B7280] text-base sm:text-lg font-manrope leading-relaxed mb-12 max-w-2xl">
              Whether you are looking to architect quantum-resilient software systems, elevate product engineering, or explore technical partnership, our teams are here to support you.
            </p>

            {/* Studio Cards Grid (Figma Nodes #88:224 - #88:240) */}
            <div className="flex flex-col gap-6">
              {/* Row 1: US & Malaysia (2 cards) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* United States */}
                <div className="bg-[#FAFAFA] border border-slate-200/80 rounded-[30px] p-8 shadow-sm hover:shadow-md hover:border-[#C5445A]/30 transition-all duration-300 flex flex-col justify-between group">
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#6015CC48] text-slate-500 block mb-3">
                      UNITED STATES - HEAD QUARTERS
                    </span>
                    <h3 className="text-xl font-bold text-[#111111] font-manrope leading-tight">
                      Esperia LLC
                    </h3>
                    <p className="text-sm text-slate-600 font-medium mt-1">
                      Wyoming, United States
                    </p>
                  </div>

                  <div className="pt-6 mt-6 border-t border-slate-200/60 text-sm text-[#333333] space-y-1.5 font-medium">
                    <div className="flex items-center gap-2 hover:text-[#C5445A] transition-colors">
                      <Mail size={15} className="text-[#C5445A]" />
                      <a href="mailto:hello@esperia.me">hello@esperia.me</a>
                    </div>
                    <div className="flex items-center gap-2 hover:text-[#C5445A] transition-colors">
                      <Phone size={15} className="text-[#3EA594]" />
                      <a href="tel:+91123456765">+91-123 456 765</a>
                    </div>
                  </div>
                </div>

                {/* Malaysia */}
                <div className="bg-[#FAFAFA] border border-slate-200/80 rounded-[30px] p-8 shadow-sm hover:shadow-md hover:border-[#C5445A]/30 transition-all duration-300 flex flex-col justify-between group">
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-500 block mb-3">
                      MALAYSIA
                    </span>
                    <h3 className="text-xl font-bold text-[#111111] font-manrope leading-tight">
                      Esperia Quantum Sdn Bhd
                    </h3>
                    <p className="text-sm text-slate-600 font-medium mt-1">
                      Kuala Lumpur, Malaysia
                    </p>
                  </div>

                  <div className="pt-6 mt-6 border-t border-slate-200/60 text-sm text-[#333333] space-y-1.5 font-medium">
                    <div className="flex items-center gap-2 hover:text-[#C5445A] transition-colors">
                      <Mail size={15} className="text-[#C5445A]" />
                      <a href="mailto:hello@esperia.me">hello@esperia.me</a>
                    </div>
                    <div className="flex items-center gap-2 hover:text-[#C5445A] transition-colors">
                      <Phone size={15} className="text-[#3EA594]" />
                      <a href="tel:+91123456765">+91-123 456 765</a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Row 2: India Hub (Span full width) */}
              <div className="bg-[#FAFAFA] border border-slate-200/80 rounded-[30px] p-8 shadow-sm hover:shadow-md hover:border-[#C5445A]/30 transition-all duration-300 flex flex-col sm:flex-row sm:items-center justify-between gap-6 group">
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-500 block mb-2">
                    INDIA
                  </span>
                  <h3 className="text-xl font-bold text-[#111111] font-manrope leading-tight">
                    Esperia Studio
                  </h3>
                  <p className="text-sm text-slate-600 font-medium mt-1 flex items-center gap-1.5">
                    <MapPin size={14} className="text-[#C5445A]" />
                    <span>Technology &amp; Engineering Center, India</span>
                  </p>
                </div>

                <div className="sm:border-l sm:border-slate-200/60 sm:pl-8 text-sm text-[#333333] space-y-1.5 font-medium shrink-0">
                  <div className="flex items-center gap-2 hover:text-[#C5445A] transition-colors">
                    <Mail size={15} className="text-[#C5445A]" />
                    <a href="mailto:hello@esperia.me">hello@esperia.me</a>
                  </div>
                  <div className="flex items-center gap-2 hover:text-[#C5445A] transition-colors">
                    <Phone size={15} className="text-[#3EA594]" />
                    <a href="tel:+91123456765">+91-123 456 765</a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Dark Modern Form Card (Figma Node #88:241 - #88:282) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="w-full max-w-[500px] rounded-[36px] bg-[radial-gradient(circle_at_27%_23%,_#383D3C_0%,_#181A1A_100%)] p-8 sm:p-10 text-white shadow-2xl border border-white/10 relative overflow-hidden">
              {/* Subtle ambient lighting inside card */}
              <div className="absolute top-0 right-0 w-48 h-48 bg-[#3EA594]/10 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#C5465B]/10 rounded-full blur-3xl pointer-events-none" />

              <h3 className="text-3xl font-bold text-white font-parkinsans tracking-tight mb-8 relative z-10">
                Get in Touch
              </h3>

              {isSubmitted ? (
                <div className="py-12 text-center flex flex-col items-center gap-4 relative z-10 animate-in fade-in zoom-in duration-500">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
                    <CheckCircle2 size={36} />
                  </div>
                  <h4 className="text-xl font-bold font-parkinsans text-white">Message Received</h4>
                  <p className="text-sm text-slate-300 max-w-xs font-manrope">
                    Thank you for reaching out to Esperia. Our advisory team will review your inquiry and respond within 24 hours.
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
                <form onSubmit={handleSubmit} className="flex flex-col gap-6 relative z-10">
                  {/* Full Name */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="fullName" className="text-xs font-medium text-[#ADADAD] tracking-wide">
                      Full name
                    </label>
                    <input
                      id="fullName"
                      type="text"
                      required
                      placeholder="e.g. Eleanor Vance"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full bg-transparent border-b border-[#ADADAD]/30 pb-3 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-[#F56F6A] transition-colors"
                    />
                  </div>

                  {/* Email */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="email" className="text-xs font-medium text-[#ADADAD] tracking-wide">
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      placeholder="e.g. eleanor@enterprise.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-transparent border-b border-[#ADADAD]/30 pb-3 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-[#F56F6A] transition-colors"
                    />
                  </div>

                  {/* Subject */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="subject" className="text-xs font-medium text-[#ADADAD] tracking-wide">
                      Subject
                    </label>
                    <input
                      id="subject"
                      type="text"
                      placeholder="e.g. Product Architecture & AI Advisory"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full bg-transparent border-b border-[#ADADAD]/30 pb-3 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-[#F56F6A] transition-colors"
                    />
                  </div>

                  {/* Message */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="message" className="text-xs font-medium text-[#ADADAD] tracking-wide">
                      Message
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={4}
                      placeholder="Tell us about your project or inquiry..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full bg-transparent border-b border-[#ADADAD]/30 pb-3 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-[#F56F6A] transition-colors resize-none"
                    />
                  </div>

                  {/* Send Button (Figma Node #88:280) */}
                  <div className="flex justify-end pt-3">
                    <button
                      type="submit"
                      className="inline-flex items-center gap-2.5 bg-gradient-to-r from-[#F56F6A] to-[#C5445A] hover:brightness-110 text-white text-sm font-semibold px-8 py-3 rounded-full shadow-lg shadow-rose-950/40 transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer"
                    >
                      <span>Send</span>
                      <Send size={15} />
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </main>

      {/* ========================================================================= */}
      {/* 3. LIGHT FOOTER (FIGMA NODE #88:289 - #88:364)                            */}
      {/* ========================================================================= */}
      <footer className="bg-[#F7F7F5] border-t border-slate-200/80 pt-16 pb-12 w-full">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-16">
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
              <p className="text-xs text-slate-600 font-medium mt-4 max-w-xs leading-relaxed font-manrope">
                Digital experience &amp; technology consultancy. Combining human ingenuity with quantum-ready engineering.
              </p>
            </div>

            {/* Column 2: Services (Figma Node #88:314) */}
            <div className="lg:col-span-3">
              <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-[#111111] mb-5 font-parkinsans">
                Services
              </h4>
              <ul className="space-y-3 text-xs text-slate-700 font-medium font-manrope">
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
              <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-[#111111] mb-5 font-parkinsans">
                Company
              </h4>
              <ul className="space-y-3 text-xs text-slate-700 font-medium font-manrope">
                <li>
                  <button
                    type="button"
                    onClick={() => onNavigateToHome('what-we-do')}
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
              <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-[#111111] mb-5 font-parkinsans">
                Connect
              </h4>
              <div className="flex items-center gap-3">
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Twitter"
                  className="w-9 h-9 rounded-full border border-black/10 flex items-center justify-center text-slate-700 hover:text-white hover:bg-[#C5445A] hover:border-[#C5445A] transition-all duration-300"
                >
                  <Twitter size={14} />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                  className="w-9 h-9 rounded-full border border-black/10 flex items-center justify-center text-slate-700 hover:text-white hover:bg-[#C5445A] hover:border-[#C5445A] transition-all duration-300"
                >
                  <Linkedin size={14} />
                </a>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub"
                  className="w-9 h-9 rounded-full border border-black/10 flex items-center justify-center text-slate-700 hover:text-white hover:bg-[#C5445A] hover:border-[#C5445A] transition-all duration-300"
                >
                  <Github size={14} />
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Copyright Bar (Figma Node #88:357) */}
          <div className="pt-8 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-medium font-manrope">
            <p>&copy; {new Date().getFullYear()} Esperia. All rights reserved.</p>
            <div className="flex items-center gap-6">
              <a href="#privacy" className="hover:text-slate-800 transition-colors">Privacy Policy</a>
              <a href="#terms" className="hover:text-slate-800 transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
