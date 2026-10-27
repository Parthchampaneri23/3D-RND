"use client";

import { useState, useEffect, useRef } from "react";
import {
  ArrowRight,
  Menu,
  X,
  ChevronDown,
  Cpu,
  TrendingUp,
  Palette,
  Camera,
  Sparkles,
  ArrowUpRight,
} from "lucide-react";
import CyberButton from "@/components/CyberButton";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("About us");
  const [servicesMenuOpen, setServicesMenuOpen] = useState(false);
  const megaMenuTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMouseEnterServices = () => {
    if (megaMenuTimeoutRef.current) clearTimeout(megaMenuTimeoutRef.current);
    setServicesMenuOpen(true);
  };

  const handleMouseLeaveServices = () => {
    megaMenuTimeoutRef.current = setTimeout(() => {
      setServicesMenuOpen(false);
    }, 200);
  };

  const servicePillars = [
    {
      title: "Technology",
      icon: Cpu,
      desc: "Enterprise Cloud & 3D Spatial Web",
      items: [
        { label: "Next.js & React 19 Web Apps", href: "#services" },
        { label: "Cloud ERP & SaaS Platforms", href: "#services" },
        { label: "Three.js / WebGL Spatial 3D", href: "#services" },
        { label: "Autonomous AI & RAG Pipelines", href: "#services" },
      ],
    },
    {
      title: "Digital Marketing",
      icon: TrendingUp,
      desc: "High-ROI Omnichannel Growth",
      items: [
        { label: "Omnichannel SMM (Meta, TikTok)", href: "#services" },
        { label: "High-Conversion Paid Ad Scaling", href: "#services" },
        { label: "Technical & Semantic SEO", href: "#services" },
        { label: "Viral Short-Form Content Creation", href: "#services" },
      ],
    },
    {
      title: "Branding & Design",
      icon: Palette,
      desc: "Visual Identity & Conversion UX/UI",
      items: [
        { label: "Complete Brand Identity Systems", href: "#services" },
        { label: "Interactive Figma Design Systems", href: "#services" },
        { label: "High-Fidelity UI/UX & Wireframing", href: "#services" },
        { label: "Conversion Rate Optimization (CRO)", href: "#services" },
      ],
    },
    {
      title: "Media Production",
      icon: Camera,
      desc: "Commercial 8K & Studio Imagery",
      items: [
        { label: "Commercial 8K Film Production", href: "#services" },
        { label: "High-Fashion Studio Photography", href: "#services" },
        { label: "3D Motion Graphics & CGI Reveals", href: "#services" },
        { label: "Executive Brand Documentaries", href: "#services" },
      ],
    },
  ];

  // Specific tabs: About us, Services, Portfolios, Career, Industries, Insights, Contact us
  const navLinks = [
    { name: "About us", href: "/#about" },
    { name: "Services", href: "/services", hasMega: true },
    { name: "Portfolios", href: "/portfolios" },
    { name: "Career", href: "/#contact" },
    { name: "Industries", href: "/#industries" },
    { name: "Insights", href: "/insights" },
    { name: "Contact us", href: "/#contact" },
  ];

  return (
    <header
      id="navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 sm:px-8 lg:px-12 border-b border-neutral-200/90 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-md py-3"
          : "bg-white shadow-sm py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Brand Logo with Increased Size on Clean White Background */}
        <a href="/" className="flex items-center gap-3 group">
          <img
            src="https://www.rndtechnosoft.com/api/logo/download/photo_1743486518383.webp"
            alt="RND Technosoft Logo"
            className="h-10 sm:h-12 md:h-14 w-auto object-contain transition-transform group-hover:scale-[1.03]"
            onError={(e) => {
              (e.currentTarget as HTMLImageElement).src = "/rnd_logo.webp";
            }}
          />
        </a>

        {/* Center Desktop Navigation on White Background */}
        <nav className="hidden lg:flex items-center gap-5 xl:gap-7 text-base xl:text-[17px] font-semibold text-neutral-800">
          {navLinks.map((link) => {
            const isActive = activeLink === link.name;
            if (link.hasMega) {
              return (
                <div
                  key={link.name}
                  onMouseEnter={handleMouseEnterServices}
                  onMouseLeave={handleMouseLeaveServices}
                  className="relative py-1"
                >
                  <a
                    href={link.href}
                    onClick={() => setActiveLink(link.name)}
                    className={`inline-flex items-center gap-1.5 transition-colors hover:text-black ${
                      isActive || servicesMenuOpen ? "text-black font-bold" : "text-neutral-800"
                    }`}
                  >
                    <span>{link.name}</span>
                    <ChevronDown
                      className={`w-4 h-4 transition-transform duration-200 ${
                        servicesMenuOpen ? "rotate-180 text-black" : "text-neutral-600"
                      }`}
                    />
                  </a>
                  {(isActive || servicesMenuOpen) && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#FFD400] rounded-full" />
                  )}
                </div>
              );
            }

            return (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setActiveLink(link.name)}
                className={`relative py-1 transition-colors hover:text-black ${
                  isActive ? "text-black font-bold" : "text-neutral-800"
                }`}
              >
                <span>{link.name}</span>
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#FFD400] rounded-full" />
                )}
              </a>
            );
          })}
        </nav>

        {/* Right Action: Contact CTA button + Mobile Hamburger */}
        <div className="flex items-center gap-3">
          <CyberButton href="/#contact" size="sm">
            LET&apos;S TALK
          </CyberButton>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
            className="lg:hidden p-2 rounded-lg bg-neutral-100 border border-neutral-300 text-neutral-800 hover:text-black hover:bg-neutral-200 transition-colors"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* ----------------- SERVICE MEGA-MENU (DESKTOP) ----------------- */}
      {servicesMenuOpen && (
        <div
          onMouseEnter={handleMouseEnterServices}
          onMouseLeave={handleMouseLeaveServices}
          className="hidden lg:block absolute top-full left-0 right-0 pt-2 animate-fadeIn"
        >
          <div className="max-w-7xl mx-auto px-6">
            <div className="rounded-2xl bg-white/98 backdrop-blur-2xl border border-neutral-200 p-8 shadow-[0_25px_60px_rgba(0,0,0,0.14)] text-neutral-900">
              {/* Header Badge in Mega Menu */}
              <div className="flex items-center justify-between pb-5 mb-6 border-b border-neutral-200">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#FFD400] animate-pulse" />
                  <span className="text-xs font-mono tracking-widest text-black font-bold uppercase">
                    SERVICE UNIVERSE // INTEGRATED DELIVERY
                  </span>
                </div>
                <a
                  href="/services"
                  onClick={() => setServicesMenuOpen(false)}
                  className="text-xs text-neutral-600 hover:text-black flex items-center gap-1 group font-mono font-semibold"
                >
                  <span>Explore Full Capabilities</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-black group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </div>

              {/* 4 Pillars Grid */}
              <div className="grid grid-cols-4 gap-6">
                {servicePillars.map((pillar, idx) => {
                  const Icon = pillar.icon;
                  return (
                    <div
                      key={idx}
                      className="p-4 rounded-xl bg-neutral-50/80 border border-neutral-200 hover:border-[#FFD400] transition-colors group"
                    >
                      <div className="flex items-center gap-2.5 mb-2">
                        <div className="p-2 rounded-lg bg-[#FFD400]/20 border border-[#FFD400]/40 text-black">
                          <Icon className="w-4 h-4" />
                        </div>
                        <div>
                          <h4 className="text-sm font-bold text-neutral-900 group-hover:text-black transition-colors">
                            {pillar.title}
                          </h4>
                          <span className="text-[10px] text-neutral-500 block line-clamp-1 font-mono">
                            {pillar.desc}
                          </span>
                        </div>
                      </div>

                      <ul className="mt-4 space-y-2 border-t border-neutral-200 pt-3">
                        {pillar.items.map((item, i) => (
                          <li key={i}>
                            <a
                              href={item.href}
                              onClick={() => setServicesMenuOpen(false)}
                              className="text-xs text-neutral-700 hover:text-black flex items-center justify-between py-0.5 group/item transition-colors font-medium"
                            >
                              <span>{item.label}</span>
                              <ArrowRight className="w-3 h-3 text-[#FFD400] opacity-0 group-hover/item:opacity-100 transition-opacity" />
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  );
                })}
              </div>

              {/* Bottom Mega-Menu Quick Callout */}
              <div className="mt-6 pt-4 border-t border-neutral-200 flex items-center justify-between text-xs text-neutral-600 font-mono">
                <span className="flex items-center gap-2">
                  <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                  <span>Looking for an integrated enterprise mission plan?</span>
                </span>
                <a
                  href="#contact"
                  onClick={() => setServicesMenuOpen(false)}
                  className="text-neutral-900 hover:text-black hover:underline flex items-center gap-1 font-bold"
                >
                  <span>Book Principal Architect Review</span>
                  <ArrowRight className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Mobile Drawer Navigation on White Background */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-white border-b border-neutral-200 px-6 py-6 flex flex-col gap-3 shadow-2xl max-h-[85vh] overflow-y-auto animate-fadeIn text-neutral-800">
          {navLinks.map((link) => (
            <div key={link.name}>
              <a
                href={link.href}
                onClick={() => {
                  setActiveLink(link.name);
                  setMobileMenuOpen(false);
                }}
                className={`text-base font-semibold py-2 px-3 rounded-lg flex items-center justify-between transition-colors ${
                  activeLink === link.name
                    ? "bg-[#FFD400]/20 text-black font-bold"
                    : "text-neutral-700 hover:bg-neutral-100 hover:text-black"
                }`}
              >
                <span>{link.name}</span>
                {link.hasMega && <ChevronDown className="w-4 h-4 text-neutral-400" />}
              </a>
            </div>
          ))}
          <div className="mt-3 w-full">
            <CyberButton
              href="/#contact"
              fullWidth
              onClick={() => setMobileMenuOpen(false)}
            >
              LET&apos;S TALK
            </CyberButton>
          </div>
        </div>
      )}
    </header>
  );
}
