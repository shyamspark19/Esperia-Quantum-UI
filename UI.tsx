import React, { useState } from 'react';
import { 
  ArrowRight, 
  ArrowUpRight,
  Menu, 
  X, 
  ChevronRight,
  Users2, 
  Monitor, 
  Target, 
  Globe,
  Sparkles,
  Clock,
  Bookmark,
  Share2,
  CheckCircle2,
  TrendingUp,
  Layers,
  Send,
  Eye
} from 'lucide-react';

export default function EsperiaLanding() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeBlogFilter, setActiveBlogFilter] = useState('All');
  const [bookmarkedPosts, setBookmarkedPosts] = useState<number[]>([]);
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const toggleBookmark = (id: number) => {
    setBookmarkedPosts(prev => 
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail.trim()) {
      setSubscribed(true);
      setTimeout(() => {
        setNewsletterEmail('');
      }, 3000);
    }
  };

  const blogPosts = [
    {
      id: 1,
      category: "AI Systems",
      tag: "AI & Autonomy",
      title: "AI Doesn't Replace Creativity. It Removes Friction.",
      excerpt: "When repetitive operational burden dissolves, creative engineering ascends to strategic high-leverage architectural thinking.",
      date: "14 Feb 2025",
      readTime: "4 min read",
      author: {
        name: "Dr. Aris Thorne",
        role: "Chief AI Architect",
        avatar: "/assets/figma/a0e90c338be9c298666d3615b2b74e3e586bbaa1.png"
      },
      img: "/assets/figma/a0e90c338be9c298666d3615b2b74e3e586bbaa1.png",
      views: "3.4k"
    },
    {
      id: 2,
      category: "Cloud Architecture",
      tag: "Enterprise Cloud",
      title: "Orchestrating Autonomous Agent Workflows at Enterprise Scale",
      excerpt: "Moving beyond toy prototypes into multi-agent self-healing topologies that withstand petabyte-scale transactions.",
      date: "08 Feb 2025",
      readTime: "6 min read",
      author: {
        name: "Elena Rostova",
        role: "VP of Distributed Systems",
        avatar: "/assets/figma/8a61ffde7116dd86d327b183bf30b542c05f4962.png"
      },
      img: "/assets/figma/8a61ffde7116dd86d327b183bf30b542c05f4962.png",
      views: "5.1k"
    },
    {
      id: 3,
      category: "Product Design",
      tag: "Spatial Computing",
      title: "Ambient Interfaces: The Shift Beyond Traditional Screens",
      excerpt: "Synthesizing spatial depth, tactile haptic response, and predictive intent models into effortless quantum interaction.",
      date: "28 Jan 2025",
      readTime: "5 min read",
      author: {
        name: "Marcus Sterling",
        role: "Head of Experience",
        avatar: "/assets/figma/95ff2a9210fa3fece51d5af0276139539b7f5b7d.png"
      },
      img: "/assets/figma/95ff2a9210fa3fece51d5af0276139539b7f5b7d.png",
      views: "2.8k"
    },
    {
      id: 4,
      category: "Engineering",
      tag: "Quantum Resilience",
      title: "Zero-Downtime Global Migrations Under High-Frequency Loads",
      excerpt: "How our cloud delivery engine guarantees uninterrupted continuity across three continents simultaneously.",
      date: "19 Jan 2025",
      readTime: "8 min read",
      author: {
        name: "Siddharth Verma",
        role: "Principal Infrastructure Lead",
        avatar: "/assets/figma/hero_section_exact.png"
      },
      img: "/assets/figma/1d80fc741040828e2e6f3ee8341678f1b003f0b6.png",
      views: "4.7k"
    }
  ];

  const filteredPosts = activeBlogFilter === 'All' 
    ? blogPosts 
    : blogPosts.filter(p => p.category.toLowerCase().includes(activeBlogFilter.toLowerCase()) || p.tag.toLowerCase().includes(activeBlogFilter.toLowerCase()));

  return (
    <div className="min-h-screen bg-[#F6F6F3] text-[#0A0A0A] font-['Manrope',sans-serif] antialiased selection:bg-[#C5445A] selection:text-white">

      {/* ========================================================================= */}
      {/* 1. HERO SECTION (COLOSSAL 3D VISUALS & DYNAMIC GLOW ANIMATION)            */}
      {/* ========================================================================= */}
      <section className="relative bg-hero-gradient text-white overflow-hidden">
        {/* Animated Ambient Radial Lighting */}
        <div className="absolute top-0 right-1/4 w-[650px] h-[650px] bg-[#3EA594]/20 rounded-full blur-[150px] pointer-events-none animate-pulse-glow" />
        <div className="absolute bottom-1/4 right-1/12 w-[520px] h-[520px] bg-[#C5465B]/20 rounded-full blur-[140px] pointer-events-none animate-pulse-glow" style={{ animationDelay: '2.5s' }} />

        {/* Navigation Bar */}
        <header className="bg-[#0A111A]/90 backdrop-blur-md border-b border-white/10 relative z-30 transition-all duration-300">
          <div className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">
            <a href="#" className="focus:outline-none flex items-center group">
              <img 
                src="/assets/figma/esperia_header_logo.svg" 
                alt="ESPERIA QUANTUM" 
                className="h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              />
            </a>

            <nav className="hidden md:flex items-center gap-8 text-[13px] font-medium text-white/90">
              <a href="#what-we-do" className="hover:text-[#73A7A3] transition-colors duration-200">What We Do</a>
              <a href="#why-esperia" className="hover:text-[#73A7A3] transition-colors duration-200">Why Esperia</a>
              <a href="#our-works" className="hover:text-[#73A7A3] transition-colors duration-200">Our Works</a>
              <a href="#blogs" className="hover:text-[#73A7A3] transition-colors duration-200 flex items-center gap-1.5">
                <span>Blogs &amp; Newsletters</span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#FF7E8B] animate-ping" />
              </a>
              <a href="#contact" className="hover:text-[#73A7A3] transition-colors duration-200">Contact Us</a>
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
            <div className="md:hidden bg-[#0A111A] border-b border-white/10 px-6 py-6 flex flex-col gap-4 relative z-30 shadow-2xl animate-in slide-in-from-top duration-300">
              <a href="#what-we-do" className="text-white hover:text-[#73A7A3]" onClick={() => setMobileMenuOpen(false)}>What We Do</a>
              <a href="#why-esperia" className="text-white hover:text-[#73A7A3]" onClick={() => setMobileMenuOpen(false)}>Why Esperia</a>
              <a href="#our-works" className="text-white hover:text-[#73A7A3]" onClick={() => setMobileMenuOpen(false)}>Our Works</a>
              <a href="#blogs" className="text-white hover:text-[#73A7A3]" onClick={() => setMobileMenuOpen(false)}>Blogs &amp; Newsletters</a>
              <a href="#contact" className="text-[#FF7E8B] font-semibold pt-2 border-t border-white/10" onClick={() => setMobileMenuOpen(false)}>Contact Us</a>
            </div>
          )}
        </header>

        {/* Hero Body Grid */}
        <div className="max-w-7xl mx-auto px-6 pt-12 lg:pt-20 pb-28 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
          <div className="lg:col-span-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-xs font-semibold text-[#73A7A3] mb-6">
              <Sparkles size={14} className="text-[#FF7E8B] animate-spin" style={{ animationDuration: '8s' }} />
              <span>Next-Generation Digital Transformation</span>
            </div>

            <h1 
              className="text-5xl sm:text-7xl lg:text-[96px] font-bold tracking-[-0.03em] leading-[1.03] mb-6 font-sora"
            >
              <span className="text-[#73A7A3]">Cloud-Native.</span><br />
              <span className="text-gradient-ai">AI-Driven.</span>
            </h1>

            <p className="text-[#9DB0AF] text-base sm:text-[18px] leading-[1.8] max-w-xl mb-10 font-manrope">
              From modern cloud architecture to AI-powered experiences, we engineer digital products that are scalable, secure, resilient, and built to move fast.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <a 
                href="#our-works" 
                className="group inline-flex items-center gap-2.5 border-2 border-[#73A7A3] text-[#73A7A3] hover:bg-[#73A7A3] hover:text-[#041B19] font-semibold text-base px-8 py-3.5 rounded-full transition-all duration-300 shadow-lg shadow-[#73A7A3]/10"
              >
                <span>See our works</span>
                <ArrowRight size={18} className="group-hover:translate-x-1.5 transition-transform duration-300" />
              </a>
              <a 
                href="#blogs" 
                className="inline-flex items-center gap-2 text-white/80 hover:text-white text-base px-6 py-3.5 font-medium transition"
              >
                <span>Read Colossal Insights</span>
                <ChevronRight size={18} />
              </a>
            </div>
          </div>

          {/* Colossal Hero Figma 3D Visual Art Asset with Aura and Float Animation */}
          <div className="lg:col-span-6 flex justify-center lg:justify-end relative">
            {/* Colossal Floating Visual Platform */}
            <div className="relative w-full max-w-[620px] lg:max-w-[680px]">
              <div className="absolute -inset-4 bg-gradient-to-tr from-[#3EA594]/25 via-transparent to-[#C5465B]/25 rounded-3xl blur-2xl animate-pulse-glow" />
              
              <div className="relative z-10 animate-float-slow">
                <img 
                  src="/assets/figma/e1bbc92e17afb48e5c127448f1d2bab209e43e66.png" 
                  alt="Cloud-Native AI Digital Engineering Architecture" 
                  className="w-full h-auto object-contain drop-shadow-[0_25px_35px_rgba(0,0,0,0.6)] hover:scale-105 transition-transform duration-700 ease-out cursor-pointer"
                />

                {/* Floating Interactive Glass Badge */}
                <div className="absolute -bottom-6 -left-4 sm:bottom-4 sm:-left-6 bg-[#0A111A]/85 backdrop-blur-xl border border-white/20 p-4 rounded-2xl shadow-2xl flex items-center gap-3.5 animate-float-reverse">
                  <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#3EA594] to-[#264240] flex items-center justify-center text-white shadow-lg">
                    <Layers size={22} />
                  </div>
                  <div>
                    <div className="text-[11px] font-bold uppercase tracking-wider text-[#73A7A3]">System Architecture</div>
                    <div className="text-sm font-bold text-white">Quantum Resilient v2.4</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Ruled Stats Strip */}
        <div className="border-t border-[#73A7A3]/25 bg-black/20 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="flex items-center gap-4 pr-6 md:border-r border-[#73A7A3]/20 group">
              <Users2 className="text-[#73A7A3] shrink-0 group-hover:scale-110 transition-transform duration-300" size={30} />
              <div>
                <span className="text-3xl sm:text-5xl font-extrabold text-gradient-stats font-manrope block leading-tight">
                  150+
                </span>
                <span className="text-[11px] font-bold tracking-[0.2em] text-[#73A7A3] uppercase mt-1 block">
                  Years collective experience
                </span>
              </div>
            </div>

            <div className="flex items-center gap-4 pr-6 md:border-r border-[#73A7A3]/20 group">
              <Monitor className="text-[#73A7A3] shrink-0 group-hover:scale-110 transition-transform duration-300" size={30} />
              <div>
                <span className="text-3xl sm:text-5xl font-extrabold text-gradient-stats font-manrope block leading-tight">
                  50+
                </span>
                <span className="text-[11px] font-bold tracking-[0.2em] text-[#73A7A3] uppercase mt-1 block">
                  Projects Delivered
                </span>
              </div>
            </div>

            <div className="flex items-center gap-4 pr-6 md:border-r border-[#73A7A3]/20 group">
              <Target className="text-[#73A7A3] shrink-0 group-hover:scale-110 transition-transform duration-300" size={30} />
              <div>
                <span className="text-3xl sm:text-5xl font-extrabold text-gradient-stats font-manrope block leading-tight">
                  100%
                </span>
                <span className="text-[11px] font-bold tracking-[0.2em] text-[#73A7A3] uppercase mt-1 block">
                  Success Rate
                </span>
              </div>
            </div>

            <div className="flex items-center gap-4 group">
              <Globe className="text-[#73A7A3] shrink-0 group-hover:scale-110 transition-transform duration-300" size={30} />
              <div>
                <span className="text-3xl sm:text-5xl font-extrabold text-gradient-stats font-manrope block leading-tight">
                  03
                </span>
                <span className="text-[11px] font-bold tracking-[0.2em] text-[#73A7A3] uppercase mt-1 block">
                  Global Offices
                </span>
              </div>
            </div>
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
              <span className="w-2 h-2 rounded-full bg-[#C5445A] animate-ping" />
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
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-br from-[#BF3854]/15 to-[#3EA594]/15 rounded-3xl blur-2xl opacity-75 group-hover:opacity-100 transition duration-500" />
              <div className="relative bg-white/60 backdrop-blur-xl border border-white/80 p-6 sm:p-8 rounded-[36px] shadow-2xl transition-transform duration-500 group-hover:scale-102">
                <img 
                  src="/assets/figma/93db253d9a77bca6768960eed7492c046fe70768.png" 
                  alt="Esperia Intelligent Vision"
                  className="w-72 sm:w-96 lg:w-[420px] h-auto object-contain animate-float"
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
              <span className="w-2 h-2 rounded-full bg-[#E58870] animate-ping" />
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

            <button className="bg-[#E3866F] hover:bg-[#f3957f] text-[#48180E] font-extrabold text-xs uppercase tracking-wider px-9 py-4 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105">
              Know More
            </button>
          </div>

          <div className="w-full lg:w-[480px] flex justify-center lg:justify-end relative">
            <div className="relative animate-float-slow">
              <img 
                src="/assets/figma/2007eccd674cd45280b84a0c5e53c6f8ab9f5331.png" 
                alt="Enterprise Delivery Architecture"
                className="w-full max-w-[420px] h-auto object-contain drop-shadow-[0_20px_30px_rgba(0,0,0,0.45)] hover:scale-105 transition-transform duration-500"
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

            <button className="border-2 border-slate-900 text-slate-900 hover:border-[#C5445A] hover:bg-[#C5445A] hover:text-white font-bold text-xs uppercase tracking-wider px-9 py-4 rounded-full transition-all duration-300 shadow-sm hover:scale-105">
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
      {/* 10. COLOSSAL BLOGS & NEWSLETTERS SHOWCASE                                 */}
      {/* ========================================================================= */}
      <section id="blogs" className="py-28 px-6 max-w-7xl mx-auto relative">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2.5 h-2.5 rounded-full bg-[#C5445A] animate-ping" />
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#6B6B6B]">
                Colossal Thought Leadership
              </span>
            </div>

            <h2 
              className="text-4xl sm:text-6xl lg:text-[68px] font-bold text-[#0A0A0A] tracking-tight leading-[1.08] font-parkinsans"
            >
              Insights at the Edge of <br />
              <span className="text-gradient-creative">Design, AI &amp; Quantum</span>
            </h2>
            <p className="text-slate-600 text-base sm:text-lg mt-4 leading-relaxed font-manrope">
              Explorations, deep technical architectural essays, and product blueprints curated by our senior engineers and design strategists.
            </p>
          </div>

          {/* Interactive Category Filter Pills */}
          <div className="flex flex-wrap gap-2.5 bg-white p-2 rounded-2xl border border-slate-200 shadow-sm">
            {['All', 'AI Systems', 'Cloud Architecture', 'Product Design', 'Engineering'].map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveBlogFilter(filter)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all duration-300 ${
                  activeBlogFilter === filter 
                    ? 'bg-[#C5445A] text-white shadow-md shadow-[#C5445A]/20' 
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* ======================================================================= */}
        {/* A. COLOSSAL FEATURED HERO ARTICLE (MASSIVE SHOWSTOPPER)                 */}
        {/* ======================================================================= */}
        <div className="mb-14">
          <article className="colossal-card group relative bg-white border border-slate-200/90 rounded-[40px] overflow-hidden shadow-colossal grid grid-cols-1 lg:grid-cols-12">
            {/* Colossal Picture Container */}
            <div className="lg:col-span-7 relative h-[380px] sm:h-[480px] lg:h-full min-h-[440px] overflow-hidden">
              <img 
                src="/assets/figma/1d80fc741040828e2e6f3ee8341678f1b003f0b6.png" 
                alt="Quantum Intelligence and Cloud Native Systems"
                className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent lg:hidden" />
              
              <div className="absolute top-6 left-6 z-10 flex items-center gap-2">
                <span className="bg-[#C5445A] text-white text-[11px] font-extrabold uppercase tracking-widest px-3.5 py-1.5 rounded-full shadow-lg">
                  Featured Colossal Story
                </span>
                <span className="bg-black/60 backdrop-blur-md text-white text-[11px] font-bold px-3 py-1.5 rounded-full border border-white/20">
                  Must Read
                </span>
              </div>
            </div>

            {/* Content Body */}
            <div className="lg:col-span-5 p-8 sm:p-12 lg:p-14 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between text-xs text-slate-500 font-semibold mb-4">
                  <span className="text-[#C5445A] uppercase tracking-wider font-extrabold flex items-center gap-1.5">
                    <Sparkles size={14} /> Quantum Architecture
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock size={14} /> 7 min read
                  </span>
                </div>

                <h3 className="text-2xl sm:text-4xl font-bold font-parkinsans text-slate-900 group-hover:text-[#C5445A] transition-colors leading-[1.2] mb-5">
                  The Architecture of Tomorrow: Merging Quantum Intelligence with Cloud-Native Systems
                </h3>

                <p className="text-slate-600 text-base sm:text-[17px] leading-[1.75] font-manrope mb-8">
                  How high-velocity enterprise software moves past monolithic bottlenecks by synchronizing self-optimizing neural networks with cloud infrastructure that never sleeps.
                </p>
              </div>

              <div>
                <div className="flex items-center justify-between pt-6 border-t border-slate-100">
                  <div className="flex items-center gap-3.5">
                    <img 
                      src="/assets/figma/0aa099bd4ada7668a64c73c7a96a343aa4e97211.png" 
                      alt="Dr. Aris Thorne" 
                      className="w-11 h-11 rounded-full object-cover border-2 border-[#C5445A]"
                    />
                    <div>
                      <div className="text-sm font-bold text-slate-900">Dr. Aris Thorne</div>
                      <div className="text-xs text-slate-500">Chief Architect &bull; 18 Feb 2025</div>
                    </div>
                  </div>

                  <a 
                    href="#featured-story" 
                    className="w-12 h-12 rounded-full bg-[#0A0A0A] group-hover:bg-[#C5445A] text-white flex items-center justify-center transition-all duration-300 shadow-md group-hover:rotate-45"
                  >
                    <ArrowUpRight size={20} />
                  </a>
                </div>
              </div>
            </div>
          </article>
        </div>

        {/* ======================================================================= */}
        {/* B. COLOSSAL ARTICLE GRID (ANIMATED HOVER & MICRO-INTERACTIONS)          */}
        {/* ======================================================================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {filteredPosts.map((post) => {
            const isBookmarked = bookmarkedPosts.includes(post.id);

            return (
              <article 
                key={post.id} 
                className="colossal-card group cursor-pointer bg-white border border-slate-200/90 rounded-[32px] overflow-hidden shadow-colossal hover:border-[#C5445A]/40 flex flex-col justify-between"
              >
                <div>
                  {/* Colossal Picture with Aspect Ratio and Zoom */}
                  <div className="colossal-image-container relative w-full h-64 sm:h-72 overflow-hidden bg-slate-900">
                    <img 
                      src={post.img} 
                      alt={post.title} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out opacity-95 group-hover:opacity-100"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />

                    {/* Category Tag Badge */}
                    <div className="absolute top-5 left-5 z-10">
                      <span className="bg-white/90 backdrop-blur-md text-slate-900 text-xs font-extrabold uppercase tracking-wider px-3.5 py-1.5 rounded-full shadow-md">
                        {post.category}
                      </span>
                    </div>

                    {/* Bookmark Action Button */}
                    <button 
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleBookmark(post.id);
                      }}
                      className="absolute top-5 right-5 z-10 w-9 h-9 rounded-full bg-black/40 backdrop-blur-md hover:bg-[#C5445A] text-white flex items-center justify-center transition-colors"
                      aria-label="Bookmark article"
                    >
                      <Bookmark size={15} className={isBookmarked ? "fill-white" : ""} />
                    </button>

                    {/* Colossal Views / Time Floating Overlay */}
                    <div className="absolute bottom-4 left-5 right-5 z-10 flex items-center justify-between text-xs text-white/90 font-medium">
                      <span className="flex items-center gap-1.5">
                        <Clock size={13} /> {post.readTime}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Eye size={13} /> {post.views}
                      </span>
                    </div>
                  </div>

                  {/* Article Card Content */}
                  <div className="p-8">
                    <span className="text-xs font-bold uppercase tracking-widest text-[#C5445A] mb-3 block">
                      {post.tag}
                    </span>
                    
                    <h3 
                      className="text-xl sm:text-2xl font-bold text-[#0A0A0A] group-hover:text-[#C5445A] transition-colors leading-snug mb-3 font-parkinsans"
                    >
                      {post.title}
                    </h3>
                    
                    <p className="text-sm text-slate-600 leading-relaxed font-manrope line-clamp-2 mb-6">
                      {post.excerpt}
                    </p>
                  </div>
                </div>

                {/* Footer Author & Read Link */}
                <div className="px-8 pb-8 pt-2">
                  <div className="pt-5 border-t border-slate-100 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <img 
                        src={post.author.avatar} 
                        alt={post.author.name}
                        className="w-9 h-9 rounded-full object-cover border border-slate-200" 
                      />
                      <div>
                        <span className="text-xs font-bold text-slate-800 block">
                          {post.author.name}
                        </span>
                        <span className="text-[11px] text-slate-400">
                          {post.date}
                        </span>
                      </div>
                    </div>

                    <span className="text-xs font-bold text-[#C5445A] flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                      Read <ArrowRight size={14} />
                    </span>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* ======================================================================= */}
        {/* C. COLOSSAL NEWSLETTER ENGAGEMENT BANNER WITH ANIMATION                 */}
        {/* ======================================================================= */}
        <div className="rounded-[36px] bg-gradient-to-r from-[#0C151F] via-[#162725] to-[#2B1B22] text-white p-8 sm:p-14 border border-white/10 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-[#3EA594]/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 bg-[#C5445A]/20 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-xs font-bold text-[#73A7A3] mb-6">
              <Sparkles size={14} className="text-[#FF7E8B]" />
              <span>Stay Ahead of the Tech Frontier</span>
            </div>

            <h3 className="text-3xl sm:text-5xl font-bold font-parkinsans tracking-tight mb-4">
              Get the Colossal Monthly Dispatch
            </h3>
            <p className="text-slate-300 text-base sm:text-lg mb-8 max-w-xl mx-auto font-manrope">
              Join 12,000+ engineers, founders, and product visionaries. Deep dives into autonomous systems, quantum architecture, and high-velocity shipping.
            </p>

            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Enter your work email..."
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                required
                className="w-full sm:flex-1 px-6 py-4 rounded-full bg-white/10 border border-white/20 text-white placeholder:text-white/50 text-sm focus:outline-none focus:border-[#73A7A3] backdrop-blur-md transition shadow-inner"
              />
              <button 
                type="submit"
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#C5445A] hover:bg-[#a93447] text-white font-bold text-xs uppercase tracking-wider transition-all duration-300 shadow-xl shadow-[#C5445A]/30 flex items-center justify-center gap-2 shrink-0 hover:scale-105"
              >
                {subscribed ? (
                  <>
                    <CheckCircle2 size={16} />
                    <span>Subscribed!</span>
                  </>
                ) : (
                  <>
                    <span>Subscribe</span>
                    <Send size={15} />
                  </>
                )}
              </button>
            </form>
          </div>
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
                <span className="w-2 h-2 rounded-full bg-[#9E1C34] animate-ping" />
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

            <a 
              href="mailto:contact@esperia.io"
              className="bg-talk-button hover:brightness-110 text-[#1C1C1C] font-bold text-sm uppercase tracking-wider px-12 py-5 rounded-full transition-all duration-300 shadow-2xl shadow-rose-900/40 shrink-0 hover:scale-105"
            >
              Let’s Talk
            </a>
          </div>

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
                Digital experience &amp; quantum technology consultancy. Engineering colossal products with unprecedented velocity.
              </p>

              {/* Social Media Vector Icons */}
              <div className="flex items-center gap-4 text-white">
                <a href="#" aria-label="Facebook" className="w-8 h-8 rounded-full bg-white/10 hover:bg-[#C5445A] flex items-center justify-center transition">
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                </a>
                <a href="#" aria-label="Twitter / X" className="w-8 h-8 rounded-full bg-white/10 hover:bg-[#C5445A] flex items-center justify-center transition">
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                </a>
                <a href="#" aria-label="LinkedIn" className="w-8 h-8 rounded-full bg-white/10 hover:bg-[#C5445A] flex items-center justify-center transition">
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                </a>
                <a href="#" aria-label="Website" className="w-8 h-8 rounded-full bg-white/10 hover:bg-[#C5445A] flex items-center justify-center transition">
                  <Globe className="w-4 h-4" />
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

          <div className="w-full h-px bg-white/10 my-10" />

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
