"use client";

import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
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
  const pathname = usePathname();
  const [isSticky, setIsSticky] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesMenuOpen, setServicesMenuOpen] = useState(false);
  const megaMenuTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      // Navbar is transparent for hero section only; sticky for all other sections
      const heroSection = document.getElementById("home");
      if (heroSection) {
        const rect = heroSection.getBoundingClientRect();
        // The hero section finishes when its bottom reaches the viewport.
        // As long as the user is anywhere inside the hero section, navbar remains transparent.
        const isPastHero = rect.bottom <= window.innerHeight + 20;
        setIsSticky(isPastHero);
      } else {
        // Fallback for subpages without hero section: sticky when scrolled past top
        setIsSticky(window.scrollY > 60);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
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
        { label: "Next.js & React 19 Web Apps", href: "/#services" },
        { label: "Cloud ERP & SaaS Platforms", href: "/#services" },
        { label: "Three.js / WebGL Spatial 3D", href: "/#services" },
        { label: "Autonomous AI & RAG Pipelines", href: "/#services" },
      ],
    },
    {
      title: "Digital Marketing",
      icon: TrendingUp,
      desc: "High-ROI Omnichannel Growth",
      items: [
        { label: "Omnichannel SMM (Meta, TikTok)", href: "/#services" },
        { label: "High-Conversion Paid Ad Scaling", href: "/#services" },
        { label: "Technical & Semantic SEO", href: "/#services" },
        { label: "Viral Short-Form Content Creation", href: "/#services" },
      ],
    },
    {
      title: "Branding & Design",
      icon: Palette,
      desc: "Visual Identity & Conversion UX/UI",
      items: [
        { label: "Complete Brand Identity Systems", href: "/#services" },
        { label: "Interactive Figma Design Systems", href: "/#services" },
        { label: "High-Fidelity UI/UX & Wireframing", href: "/#services" },
        { label: "Conversion Rate Optimization (CRO)", href: "/#services" },
      ],
    },
    {
      title: "Media Production",
      icon: Camera,
      desc: "Cinematic Film, 3D & Campaigns",
      items: [
        { label: "Commercial Brand Video Production", href: "/#services" },
        { label: "3D Animation & CGI Motion Design", href: "/#services" },
        { label: "High-End E-Commerce Photography", href: "/#services" },
        { label: "Executive Podcast & Broadcast Studio", href: "/#services" },
      ],
    },
  ];

  const navLinks = [
    { name: "About us", href: "/about-us" },
    { name: "Services", href: "/services", hasMega: true },
    { name: "Portfolios", href: "/portfolios" },
    { name: "Career", href: "/#career" },
    { name: "Industries", href: "/#industries" },
    { name: "Insights", href: "/insights" },
    { name: "Contact us", href: "/contact-us" },
  ];

  return (
    <header
      id="navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out px-4 sm:px-8 lg:px-12 ${isSticky
          ? "bg-[#06080e]/95 backdrop-blur-2xl border-b border-white/15 shadow-[0_12px_40px_rgba(0,0,0,0.85)] py-3"
          : "bg-transparent border-b border-transparent shadow-none py-5"
        }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Brand Logo in crisp white pill capsule */}
        <a href="/" className="flex items-center gap-3 group">
          <div className="px-3  rounded-xl transition-all flex items-center">
            <img
              src="/logo.svg"
              alt="RND Technosoft Logo"
              className="h-14 sm:h-12 md:h-16 w-auto object-contain transition-transform group-hover:scale-[1.03]"
            />
          </div>
        </a>

        {/* Center Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-5 xl:gap-7 text-sm xl:text-[15px] font-semibold text-white/90">
          {navLinks.map((link) => {
            const isActive =
              (link.href === "/about-us" && pathname === "/about-us") ||
              (link.href === "/contact-us" && pathname === "/contact-us") ||
              (link.href === "/services" && pathname === "/services") ||
              (link.href === "/portfolios" && pathname === "/portfolios") ||
              (link.href === "/insights" && pathname === "/insights");

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
                    className={`inline-flex items-center gap-1.5 transition-colors hover:text-[#FFD400] drop-shadow-md ${isActive || servicesMenuOpen
                        ? "text-[#FFD400] font-bold"
                        : "text-white/90"
                      }`}
                  >
                    <span>{link.name}</span>
                    <ChevronDown
                      className={`w-3.5 h-3.5 transition-transform duration-200 ${servicesMenuOpen
                          ? "rotate-180 text-[#FFD400]"
                          : "text-white/70 group-hover:text-[#FFD400]"
                        }`}
                    />
                  </a>
                  {(isActive || servicesMenuOpen) && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#FFD400] shadow-[0_0_8px_#FFD400] rounded-full" />
                  )}
                </div>
              );
            }

            return (
              <a
                key={link.name}
                href={link.href}
                className={`relative py-1 transition-colors hover:text-[#FFD400] drop-shadow-md ${isActive ? "text-[#FFD400] font-bold" : "text-white/90"
                  }`}
              >
                <span>{link.name}</span>
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#FFD400] shadow-[0_0_8px_#FFD400] rounded-full" />
                )}
              </a>
            );
          })}
        </nav>

        {/* Right Action: Contact CTA button + Mobile Hamburger */}
        <div className="flex items-center gap-3">
          <CyberButton href="/contact-us" size="sm">
            LET&apos;S TALK
          </CyberButton>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
            className="lg:hidden p-2 rounded-lg bg-black/40 backdrop-blur-md border border-white/20 text-white hover:text-[#FFD400] transition-colors"
          >
            {mobileMenuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>
      </div>

      {/* ----------------- SERVICE MEGA-MENU (DESKTOP DARK VERSION) ----------------- */}
      {servicesMenuOpen && (
        <div
          onMouseEnter={handleMouseEnterServices}
          onMouseLeave={handleMouseLeaveServices}
          className="hidden lg:block absolute top-full left-0 right-0 pt-2 animate-fadeIn"
        >
          <div className="max-w-7xl mx-auto px-6">
            <div className="rounded-2xl bg-[#090c14]/98 backdrop-blur-2xl border border-white/15 p-8 shadow-[0_25px_60px_rgba(0,0,0,0.85)] text-white">
              {/* Header Badge in Mega Menu */}
              <div className="flex items-center justify-between pb-5 mb-6 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#FFD400] animate-pulse shadow-[0_0_8px_#FFD400]" />
                  <span className="text-xs font-mono tracking-widest text-[#FFD400] font-bold uppercase">
                    SERVICE UNIVERSE // INTEGRATED DELIVERY
                  </span>
                </div>
                <a
                  href="/services"
                  onClick={() => setServicesMenuOpen(false)}
                  className="text-xs text-neutral-300 hover:text-[#FFD400] flex items-center gap-1 group font-mono font-semibold transition-colors"
                >
                  <span>Explore Full Capabilities</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#FFD400] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </div>

              {/* 4 Pillars Grid */}
              <div className="grid grid-cols-4 gap-6">
                {servicePillars.map((pillar, idx) => {
                  const Icon = pillar.icon;
                  return (
                    <div
                      key={idx}
                      className="p-4 rounded-xl bg-white/[0.03] border border-white/10 hover:border-[#FFD400]/50 transition-all group"
                    >
                      <div className="flex items-center gap-2.5 mb-2">
                        <div className="p-2 rounded-lg bg-[#FFD400]/15 border border-[#FFD400]/30 text-[#FFD400]">
                          <Icon className="w-4 h-4" />
                        </div>
                        <div>
                          <h4 className="text-sm font-bold text-white group-hover:text-[#FFD400] transition-colors">
                            {pillar.title}
                          </h4>
                          <span className="text-[10px] text-neutral-400 block line-clamp-1 font-mono">
                            {pillar.desc}
                          </span>
                        </div>
                      </div>

                      <ul className="mt-4 space-y-2 border-t border-white/10 pt-3">
                        {pillar.items.map((item, i) => (
                          <li key={i}>
                            <a
                              href={item.href}
                              onClick={() => setServicesMenuOpen(false)}
                              className="text-xs text-neutral-300 hover:text-white flex items-center justify-between py-0.5 group/item transition-colors font-medium"
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
              <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-neutral-400 font-mono">
                <span className="flex items-center gap-2">
                  <Sparkles className="w-3.5 h-3.5 text-[#FFD400]" />
                  <span>Looking for an integrated enterprise mission plan?</span>
                </span>
                <a
                  href="/contact-us"
                  onClick={() => setServicesMenuOpen(false)}
                  className="text-white hover:text-[#FFD400] hover:underline flex items-center gap-1 font-bold transition-colors"
                >
                  <span>Book Principal Architect Review</span>
                  <ArrowRight className="w-3 h-3 text-[#FFD400]" />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ----------------- MOBILE DRAWER NAVIGATION (DARK VERSION) ----------------- */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-[#07090e]/98 backdrop-blur-2xl border-b border-white/15 px-6 py-6 flex flex-col gap-3 shadow-2xl max-h-[85vh] overflow-y-auto animate-fadeIn text-white">
          {navLinks.map((link) => {
            const isMobileActive =
              (link.href === "/about-us" && pathname === "/about-us") ||
              (link.href === "/contact-us" && pathname === "/contact-us") ||
              (link.href === "/services" && pathname === "/services") ||
              (link.href === "/portfolios" && pathname === "/portfolios") ||
              (link.href === "/insights" && pathname === "/insights");

            return (
              <div key={link.name}>
                <a
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-base font-semibold py-2 px-3 rounded-lg flex items-center justify-between transition-colors ${isMobileActive
                      ? "bg-[#FFD400]/20 text-[#FFD400] font-bold"
                      : "text-neutral-300 hover:bg-white/[0.05] hover:text-white"
                    }`}
                >
                  <span>{link.name}</span>
                  {link.hasMega && (
                    <ChevronDown className="w-4 h-4 text-neutral-400" />
                  )}
                </a>
              </div>
            );
          })}
          <div className="mt-3 w-full">
            <CyberButton
              href="/contact-us"
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
