import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import EsperiaEmblem from '../components/EsperiaEmblem';

interface ContactPageProps {
  onNavigateToHome: (sectionId?: string) => void;
  onNavigateToWorks?: () => void;
  onNavigateToWhatWeDo?: () => void;
  onNavigateToBlogs?: () => void;
  onNavigateToWhyEsperia?: () => void;
  onNavigateToPrivacy?: () => void;
  onNavigateToTerms?: () => void;
}



export default function ContactPage({
  onNavigateToHome,
  onNavigateToWorks,
  onNavigateToWhatWeDo,
  onNavigateToBlogs,
  onNavigateToWhyEsperia,
  onNavigateToPrivacy,
  onNavigateToTerms,
}: ContactPageProps) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName.trim() || !formData.email.trim() || !formData.message.trim()) return;

    setIsSubmitting(true);
    setErrorMessage(null);

    const submissionTime = new Date().toLocaleString();
    const cleanName = formData.fullName.trim();
    const cleanEmail = formData.email.trim();
    const cleanSubject = formData.subject.trim() || 'General Inquiry';
    const cleanMessage = formData.message.trim();

    try {
      // 1. Create standard FormData so FormSubmit parses all fields in the email body table
      const formPayload = new FormData();
      formPayload.append('name', cleanName);
      formPayload.append('email', cleanEmail);
      formPayload.append('subject', cleanSubject);
      formPayload.append('message', cleanMessage);
      formPayload.append('Full Name', cleanName);
      formPayload.append('Email Address', cleanEmail);
      formPayload.append('Inquiry Subject', cleanSubject);
      formPayload.append('Message Content', cleanMessage);
      formPayload.append('Date & Time', submissionTime);
      formPayload.append('_replyto', cleanEmail);
      formPayload.append(
        '_subject',
        `New Inquiry: ${cleanName} - ${cleanSubject}`
      );
      formPayload.append('_captcha', 'false');
      formPayload.append('_template', 'table');

      // 2. Generate Excel-compatible CSV file and attach directly to the email
      const csvContent =
        `"FIELD","SUBMISSION DETAILS"\r\n` +
        `"Full Name","${cleanName.replace(/"/g, '""')}"\r\n` +
        `"Email Address","${cleanEmail.replace(/"/g, '""')}"\r\n` +
        `"Subject","${cleanSubject.replace(/"/g, '""')}"\r\n` +
        `"Message","${cleanMessage.replace(/"/g, '""')}"\r\n` +
        `"Submission Date","${submissionTime.replace(/"/g, '""')}"\r\n`;

      const csvBlob = new Blob(['\uFEFF' + csvContent], { type: 'text/csv;charset=utf-8;' });
      const safeFileName = `Inquiry_${cleanName.replace(/[^a-zA-Z0-9]/g, '_')}_${Date.now()}.csv`;
      formPayload.append('attachment', csvBlob, safeFileName);

      // Note: do not set Content-Type header so browser sets multipart/form-data boundary
      const response = await fetch('https://formsubmit.co/ajax/nammatradeofficial@gmail.com', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
        },
        body: formPayload,
      });

      const data = await response.json().catch(() => ({}));

      if (response.ok || data.success === 'true' || data.success === true) {
        setIsSubmitted(true);
        setFormData({ fullName: '', email: '', subject: '', message: '' });
      } else {
        throw new Error(data.message || 'Failed to submit form.');
      }
    } catch (err: any) {
      console.error('Contact form submission error:', err);
      setErrorMessage(
        'Unable to send automatically right now. You can email us directly at nammatradeofficial@gmail.com'
      );
    } finally {
      setIsSubmitting(false);
    }
  };


  return (
    <div className="min-h-screen bg-white text-[#0A0A0A] font-manrope antialiased selection:bg-[#C5445A] selection:text-white flex flex-col justify-between">
      {/* ========================================================================= */}
      {/* 1. STICKY HEADER (outside overflow-hidden section)                        */}
      {/* ========================================================================= */}
      <Header
        activePage="contact"
        onNavigateToHome={onNavigateToHome}
        onNavigateToWhatWeDo={onNavigateToWhatWeDo}
        onNavigateToWhyEsperia={onNavigateToWhyEsperia}
        onNavigateToWorks={onNavigateToWorks}
        onNavigateToBlogs={onNavigateToBlogs}
        onNavigateToContact={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        scrolledBg="bg-[#072826]/95 shadow-xl backdrop-blur-md"
        mobileBg="bg-[#072826]"
        className="-mb-20 sm:-mb-24"
      />

      {/* ========================================================================= */}
      {/* 2. HERO & NAVIGATION BANNER (#3019:1169)                                  */}
      {/* ========================================================================= */}
      <div className="w-full bg-white px-0 sm:px-4 lg:px-8">
        <section className="relative w-full text-white rounded-b-[32px] sm:rounded-[40px] overflow-hidden bg-[#072826] min-h-[515px]">
          {/* Exact Radial Gradient Background */}
          <div
            className="absolute inset-0 z-0 pointer-events-none rounded-b-[32px] sm:rounded-[40px]"
            style={{
              background:
                'radial-gradient(circle at 76% 59%, rgba(31, 59, 57, 1) 0%, rgba(7, 40, 38, 1) 45%, rgba(2, 15, 15, 1) 100%)',
            }}
          />
          {/* Esperia Geometric Mark Watermark — right side */}
          <div className="absolute top-0 right-0 bottom-0 w-[55%] sm:w-[50%] lg:w-[46%] pointer-events-none z-[1] flex items-center justify-center overflow-hidden">
            <EsperiaEmblem
              className="w-[360px] sm:w-[440px] lg:w-[520px] xl:w-[580px] h-auto"
              fill="#1E4035"
            />
          </div>
          <div className="relative z-10 max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-20 pt-28 sm:pt-32 lg:pt-36 pb-16 lg:pb-24">
            <div className="max-w-[862px] flex flex-col gap-4 sm:gap-5">
              {/* Back Button */}
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

              {/* Section Label */}
              <p className="text-white/60 text-sm font-manrope font-normal">Blogs</p>

              {/* Headline */}
              <h1 className="text-4xl sm:text-6xl lg:text-[64px] font-semibold font-display text-white tracking-tight leading-[1.12]">
                Connect with us
              </h1>

              {/* Subtitle */}
              <p className="text-white text-[18px] font-normal font-manrope leading-normal mt-1">
                Let&apos;s build something enduring.
              </p>
            </div>
          </div>
        </section>
      </div>

      {/* ========================================================================= */}
      {/* 2. MAIN SPLIT CONTENT AREA (#3019:1218)                                   */}
      {/* ========================================================================= */}
      <main className="relative overflow-hidden w-full flex-1 bg-white">
        {/* Giant Rose/Coral Watermark Emblem in Background (#3019:1289) */}
        <div className="absolute right-0 bottom-6 w-[550px] sm:w-[650px] lg:w-[693px] h-[692px] pointer-events-none select-none z-0 overflow-hidden flex items-end justify-end">
          <EsperiaEmblem
            className="w-full h-auto opacity-[0.14] text-[#F56F6A] translate-x-[10%] translate-y-[5%]"
            fill="#F56F6A"
            stroke="#F56F6A"
            strokeWidth={0.25}
          />
        </div>

        <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-10 py-16 lg:py-24 relative z-10">
          <div className="flex flex-col lg:flex-row justify-between items-start gap-12 xl:gap-14">
            {/* ========================================================== */}
            {/* Left Column: Studio Locations & Heading (#3019:1219)       */}
            {/* ========================================================== */}
            <div className="w-full lg:w-[58%] xl:w-[778px] flex flex-col">
              {/* Heading Section (#3019:1221) */}
              <div className="mb-14">
                <h2 className="text-3xl sm:text-4xl lg:text-[48px] font-bold text-[#0D0D0D] font-parkinsans leading-[1.35] sm:leading-[1.3] lg:leading-[58px] tracking-tight mb-5 max-w-[575px]">
                  We are always ready to <span className="text-[#C5445A]">help you</span> and answer your questions
                </h2>

                <p className="text-[#6B7280] text-[16px] font-normal font-manrope leading-[1.65] max-w-[587px]">
                  Pacific hake false trevally queen parrotfish black prickleback mosshead warbonnet sweeper! Greenling sleeper.
                </p>
              </div>

              {/* Studio Cards Grid (#3019:1227) */}
              <div className="flex flex-col gap-5 max-w-[738px]">
                {/* Row 1: US & Malaysia (#3019:1228) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* United States - Headquarters (#3019:1229) */}
                  <div className="bg-[#FAFAFA] rounded-[30px] p-[30px] flex flex-col justify-between border border-transparent hover:border-[#C5445A]/20 transition-all duration-300 group shadow-sm hover:shadow-md">
                    <div>
                      <span className="text-[14px] font-medium text-[#333333] font-manrope leading-[30px] block uppercase tracking-wider">
                        UNITED STATES - HEAD QUARTERS
                      </span>
                      <h3 className="text-[20px] font-bold text-[#111111] font-manrope leading-[30px] group-hover:text-[#C5445A] transition-colors pb-4">
                        Esperia LLC<br />Wyoming, United States
                      </h3>
                    </div>

                    <div className="text-[14px] font-medium text-[#333333] font-manrope leading-[30px]">
                      <div>hello@esperia.me</div>
                      <div>+91-123 456 765</div>
                    </div>
                  </div>

                  {/* Malaysia (#3019:1234) */}
                  <div className="bg-[#FAFAFA] rounded-[30px] p-[30px] flex flex-col justify-between border border-transparent hover:border-[#C5445A]/20 transition-all duration-300 group shadow-sm hover:shadow-md">
                    <div>
                      <span className="text-[14px] font-medium text-[#333333] font-manrope leading-[30px] block uppercase tracking-wider">
                        MALAYSIA
                      </span>
                      <h3 className="text-[20px] font-bold text-[#111111] font-manrope leading-[30px] group-hover:text-[#C5445A] transition-colors pb-4">
                        Esperia Quantum Sdn Bhd<br />Kuala Lumpur, Malaysia
                      </h3>
                    </div>

                    <div className="text-[14px] font-medium text-[#333333] font-manrope leading-[30px]">
                      <div>hello@esperia.me</div>
                      <div>+91-123 456 765</div>
                    </div>
                  </div>
                </div>

                {/* Row 2: India Hub (#3019:1239) */}
                <div className="bg-[#FAFAFA] rounded-[30px] p-[30px] flex flex-col justify-between border border-transparent hover:border-[#C5445A]/20 transition-all duration-300 group shadow-sm hover:shadow-md">
                  <div>
                    <span className="text-[14px] font-medium text-[#333333] font-manrope leading-[30px] block uppercase tracking-wider">
                      INDIA
                    </span>
                    <h3 className="text-[20px] font-bold text-[#111111] font-manrope leading-[30px] group-hover:text-[#C5445A] transition-colors pb-4">
                      Esperia Studio
                    </h3>
                  </div>

                  <div className="text-[14px] font-medium text-[#333333] font-manrope leading-[30px]">
                    <div>hello@esperia.me</div>
                    <div>+91-123 456 765</div>
                  </div>
                </div>
              </div>
            </div>

            {/* ========================================================== */}
            {/* Right Column: Dark Form Card with Scoop (#3019:1247)       */}
            {/* ========================================================== */}
            <div className="w-full lg:w-[42%] xl:w-[481px] flex justify-center lg:justify-end flex-shrink-0">
              <div className="relative w-full max-w-[481px] min-h-[518px] select-none">
                {/* Custom Scooped Radial Gradient Background Container */}
                <div
                  className="w-full min-h-[518px] rounded-[30px] p-[30px] sm:p-[36px] text-white shadow-2xl relative overflow-hidden flex flex-col justify-between"
                  style={{
                    background:
                      'radial-gradient(circle at 27% 23%, rgba(86, 86, 86, 1) 0%, rgba(29, 31, 30, 1) 100%)',
                  }}
                >
                  <div>
                    <h3 className="text-[32px] font-bold text-white font-parkinsans tracking-tight mb-8 leading-tight">
                      Get in Touch
                    </h3>

                    {isSubmitted ? (
                      <div className="py-12 text-center flex flex-col items-center gap-4 relative z-10 animate-in fade-in zoom-in duration-500">
                        <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center border border-emerald-500/30 shadow-lg shadow-emerald-900/30">
                          <svg
                            className="w-8 h-8"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2.5}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        </div>
                        <h4 className="text-2xl font-bold font-parkinsans text-white tracking-tight">
                          Message Sent!
                        </h4>
                        <p className="text-sm text-slate-300 max-w-xs font-manrope leading-relaxed">
                          Thank you for reaching out. Your request has been dispatched to our team at{' '}
                          <span className="text-white font-medium">nammatradeofficial@gmail.com</span>. We will respond promptly.
                        </p>
                        <button
                          type="button"
                          onClick={() => {
                            setIsSubmitted(false);
                            setFormData({ fullName: '', email: '', subject: '', message: '' });
                            setErrorMessage(null);
                          }}
                          className="mt-4 px-5 py-2 rounded-full border border-white/20 hover:border-white text-xs font-bold uppercase tracking-wider text-white hover:bg-white/10 transition-all cursor-pointer"
                        >
                          Send another message
                        </button>
                      </div>
                    ) : (
                      <form onSubmit={handleSubmit} className="flex flex-col gap-6 relative z-10">
                        {errorMessage && (
                          <div className="p-3.5 rounded-2xl bg-rose-950/60 border border-rose-500/30 text-rose-200 text-xs font-manrope leading-relaxed flex flex-col gap-1.5 animate-in fade-in">
                            <span className="font-semibold">{errorMessage}</span>
                            <a
                              href={`mailto:nammatradeofficial@gmail.com?subject=${encodeURIComponent(formData.subject || 'Inquiry from Esperia Website')}&body=${encodeURIComponent(`Name: ${formData.fullName}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`)}`}
                              className="text-white underline hover:text-[#F56F6A] font-medium"
                            >
                              Click here to send email via your email app
                            </a>
                          </div>
                        )}

                        {/* Full name Field */}
                        <div className="flex flex-col">
                          <input
                            type="text"
                            name="name"
                            required
                            disabled={isSubmitting}
                            value={formData.fullName}
                            onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                            placeholder="Full name"
                            className="w-full bg-transparent border-b border-[#ADADAD] pb-2.5 text-[14px] font-normal font-manrope text-white placeholder:text-[#898989] focus:outline-none focus:border-[#F56F6A] transition-colors disabled:opacity-50"
                          />
                        </div>

                        {/* Email Field */}
                        <div className="flex flex-col">
                          <input
                            type="email"
                            name="email"
                            required
                            disabled={isSubmitting}
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            placeholder="Email"
                            className="w-full bg-transparent border-b border-[#ADADAD] pb-2.5 text-[14px] font-normal font-manrope text-white placeholder:text-[#898989] focus:outline-none focus:border-[#F56F6A] transition-colors disabled:opacity-50"
                          />
                        </div>

                        {/* Subject Field */}
                        <div className="flex flex-col">
                          <input
                            type="text"
                            name="subject"
                            disabled={isSubmitting}
                            value={formData.subject}
                            onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                            placeholder="Subject"
                            className="w-full bg-transparent border-b border-[#ADADAD] pb-2.5 text-[14px] font-normal font-manrope text-white placeholder:text-[#898989] focus:outline-none focus:border-[#F56F6A] transition-colors disabled:opacity-50"
                          />
                        </div>

                        {/* Message Field */}
                        <div className="flex flex-col">
                          <textarea
                            rows={4}
                            name="message"
                            required
                            disabled={isSubmitting}
                            value={formData.message}
                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                            placeholder="Message"
                            className="w-full bg-transparent border-b border-[#ADADAD] pb-2.5 text-[14px] font-normal font-manrope text-white placeholder:text-[#898989] focus:outline-none focus:border-[#F56F6A] transition-colors resize-none leading-relaxed disabled:opacity-50"
                          />
                        </div>

                        {/* Send Button (#3019:1284) */}
                        <div className="flex justify-end pt-4">
                          <button
                            type="submit"
                            disabled={isSubmitting}
                            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-[#F56F6A] to-[#C5445A] text-white font-manrope font-semibold text-[14px] shadow-sm hover:shadow-md hover:brightness-105 active:scale-95 disabled:opacity-60 disabled:cursor-not-allowed transition-all cursor-pointer"
                          >
                            {isSubmitting ? (
                              <>
                                <svg
                                  className="animate-spin -ml-1 mr-1 h-4 w-4 text-white"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                >
                                  <circle
                                    className="opacity-25"
                                    cx="12"
                                    cy="12"
                                    r="10"
                                    stroke="currentColor"
                                    strokeWidth="4"
                                  />
                                  <path
                                    className="opacity-75"
                                    fill="currentColor"
                                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                  />
                                </svg>
                                <span>Sending...</span>
                              </>
                            ) : (
                              <>
                                <span>Send</span>
                                <svg
                                  className="w-4 h-4 text-white"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth={2}
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                >
                                  <line x1="22" y1="2" x2="11" y2="13" />
                                  <polygon points="22 2 15 22 11 13 2 9 22 2" />
                                </svg>
                              </>
                            )}
                          </button>
                        </div>
                      </form>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* ========================================================================= */}
      {/* 3. FOOTER SECTION                                                         */}
      {/* ========================================================================= */}
      <Footer
        activePage="contact"
        onNavigateToHome={onNavigateToHome}
        onNavigateToWorks={onNavigateToWorks}
        onNavigateToContact={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        onNavigateToWhatWeDo={onNavigateToWhatWeDo}
        onNavigateToBlogs={onNavigateToBlogs}
        onNavigateToWhyEsperia={onNavigateToWhyEsperia}
        onNavigateToPrivacy={onNavigateToPrivacy}
        onNavigateToTerms={onNavigateToTerms}
      />
    </div>
  );
}
