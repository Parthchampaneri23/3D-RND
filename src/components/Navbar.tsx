"use client";

import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
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
  HeartPulse,
  UtensilsCrossed,
  ShoppingBag,
  Hotel,
  GraduationCap,
  Building2,
  Rocket,
  Plane,
  Smartphone,
  Users,
  Share2,
  Factory,
} from "lucide-react";
import CyberButton from "@/components/CyberButton";

export default function Navbar() {
  const pathname = usePathname();
  const [isSticky, setIsSticky] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesMenuOpen, setServicesMenuOpen] = useState(false);
  const [industriesMenuOpen, setIndustriesMenuOpen] = useState(false);
  const megaMenuTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const industriesTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      // Navbar is transparent for hero section only; sticky for all other sections
      const heroSection = document.getElementById("home");
      if (heroSection) {
        const rect = heroSection.getBoundingClientRect();
        const isPastHero = rect.bottom <= window.innerHeight + 20;
        setIsSticky(isPastHero);
      } else {
        setIsSticky(window.scrollY > 60);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMouseEnterServices = () => {
    if (megaMenuTimeoutRef.current) clearTimeout(megaMenuTimeoutRef.current);
    if (industriesTimeoutRef.current) clearTimeout(industriesTimeoutRef.current);
    setIndustriesMenuOpen(false);
    setServicesMenuOpen(true);
  };

  const handleMouseLeaveServices = () => {
    megaMenuTimeoutRef.current = setTimeout(() => {
      setServicesMenuOpen(false);
    }, 200);
  };

  const handleMouseEnterIndustries = () => {
    if (industriesTimeoutRef.current) clearTimeout(industriesTimeoutRef.current);
    if (megaMenuTimeoutRef.current) clearTimeout(megaMenuTimeoutRef.current);
    setServicesMenuOpen(false);
    setIndustriesMenuOpen(true);
  };

  const handleMouseLeaveIndustries = () => {
    industriesTimeoutRef.current = setTimeout(() => {
      setIndustriesMenuOpen(false);
    }, 200);
  };

  const industryDropdownItems = [
    {
      num: "8.2",
      title: "Manufacturing & Industrial",
      category: "Digital Twins & SCADA Telemetry",
      href: "/industries/manufacturing",
      icon: Factory,
    },
    {
      num: "8.3",
      title: "Healthcare & Dental",
      category: "Medical Telemetry & Practice ERP",
      href: "/industries/healthcare",
      icon: HeartPulse,
    },
    {
      num: "8.4",
      title: "Food & FMCG",
      category: "Supply Chain & D2C Delivery",
      href: "/industries/food-fmcg",
      icon: UtensilsCrossed,
    },
    {
      num: "8.5",
      title: "Retail & E-commerce",
      category: "60 FPS 3D Stores & Headless Cart",
      href: "/industries/retail-ecommerce",
      icon: ShoppingBag,
    },
    {
      num: "8.6",
      title: "Hospitality & Resorts",
      category: "3D Virtual Tours & Direct Booking",
      href: "/industries/hospitality",
      icon: Hotel,
    },
    {
      num: "8.7",
      title: "Education & Training",
      category: "3D STEM Labs & Scalable LMS",
      href: "/industries/education",
      icon: GraduationCap,
    },
    {
      num: "8.8",
      title: "Real Estate & Construction",
      category: "Architectural 3D Twins & PropTech",
      href: "/industries/real-estate",
      icon: Building2,
    },
    {
      num: "8.9",
      title: "Startups & Professional Services",
      category: "14-Day MVPs & Venture SaaS",
      href: "/industries/startups-professional-services",
      icon: Rocket,
    },
    {
      num: "8.10",
      title: "Travel & Tourism",
      category: "Sub-Second Fares & AI Itineraries",
      href: "/industries/travel-tourism",
      icon: Plane,
    },
  ];

  const serviceDropdownItems = [
    {
      title: "Web & Enterprise Cloud",
      href: "/services/web-cloud",
      icon: Cpu,
    },
    {
      title: "Search Dominance & Technical SEO",
      href: "/services/seo-search",
      icon: TrendingUp,
    },
    {
      title: "Mobile App Development",
      href: "/services/mobile-apps",
      icon: Smartphone,
    },
    {
      title: "E-Commerce & Digital Storefronts",
      href: "/services/ecommerce-platforms",
      icon: ShoppingBag,
    },
    {
      title: "Brand Strategy & Design Systems",
      href: "/services/brand-identity",
      icon: Palette,
    },
    {
      title: "Social Media & Community Building",
      href: "/services/social-media",
      icon: Share2,
    },
    {
      title: "Commercial Film & Photography",
      href: "/services/commercial-media",
      icon: Camera,
    },
    {
      title: "Dedicated Agency Squads",
      href: "/services/dedicated-squads",
      icon: Users,
    },
  ];

  const navLinks = [
    { name: "About us", href: "/about-us" },
    { name: "Services", href: "/services", hasMega: true },
    { name: "Portfolios", href: "/portfolios" },
    { name: "Career", href: "/career" },
    { name: "Industries", href: "/industries", hasIndustriesMega: true },
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
              (link.href === "/services" && pathname?.startsWith("/services")) ||
              (link.href === "/portfolios" && pathname?.startsWith("/portfolio")) ||
              (link.href === "/career" && pathname === "/career") ||
              (link.href === "/insights" && pathname?.startsWith("/insights"));

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

                  {/* Single-Column Dropdown for Services */}
                  {servicesMenuOpen && (
                    <div
                      className="hidden lg:block absolute top-full left-1/2 -translate-x-1/2 pt-3 z-50 w-[310px] animate-fadeIn"
                      onMouseEnter={handleMouseEnterServices}
                      onMouseLeave={handleMouseLeaveServices}
                    >
                      <div className="rounded-md bg-[#08090d] border border-white/15 shadow-[0_25px_60px_rgba(0,0,0,0.95)] p-2.5 max-h-[460px] overflow-y-auto scrollbar-none">
                        <div className="flex flex-col gap-1.5">
                          {serviceDropdownItems.map((item, idx) => {
                            const Icon = item.icon;
                            return (
                              <Link
                                key={idx}
                                href={item.href}
                                onClick={() => setServicesMenuOpen(false)}
                                className="flex items-center gap-3.5 px-3.5 py-2.5 hover:bg-white/[0.05] transition-all group rounded-md"
                              >
                                <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 bg-white/[0.04] border border-white shadow-[0_0_12px_rgba(255,255,255,0.15)] group-hover:border-[#FFD400] group-hover:shadow-[0_0_20px_rgba(255,212,0,0.4)] group-hover:scale-105 transition-all">
                                  <Icon className="w-4 h-4 text-[#FFD400] transition-colors" />
                                </div>
                                <span className="text-[13.5px] font-medium text-neutral-100 group-hover:text-[#FFD400] transition-colors leading-snug">
                                  {item.title}
                                </span>
                              </Link>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            }

            if (link.hasIndustriesMega) {
              const isIndustryActive = pathname?.startsWith("/industries");
              return (
                <div
                  key={link.name}
                  onMouseEnter={handleMouseEnterIndustries}
                  onMouseLeave={handleMouseLeaveIndustries}
                  className="relative py-1"
                >
                  <a
                    href={link.href}
                    className={`inline-flex items-center gap-1.5 transition-colors hover:text-[#FFD400] drop-shadow-md ${isIndustryActive || industriesMenuOpen
                        ? "text-[#FFD400] font-bold"
                        : "text-white/90"
                      }`}
                  >
                    <span>{link.name}</span>
                    <ChevronDown
                      className={`w-3.5 h-3.5 transition-transform duration-200 ${industriesMenuOpen
                          ? "rotate-180 text-[#FFD400]"
                          : "text-white/70 group-hover:text-[#FFD400]"
                        }`}
                    />
                  </a>
                  {(isIndustryActive || industriesMenuOpen) && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#FFD400] shadow-[0_0_8px_#FFD400] rounded-full" />
                  )}

                  {/* 2-Column Grid Dropdown: #08090d bg, no outer border, rounded-md */}
                  {industriesMenuOpen && (
                    <div
                      className="hidden lg:block absolute top-full left-1/2 -translate-x-1/2 pt-3 z-50 w-[580px] animate-fadeIn"
                      onMouseEnter={handleMouseEnterIndustries}
                      onMouseLeave={handleMouseLeaveIndustries}
                    >
                      <div className="rounded-md bg-[#08090d] border border-white/15 shadow-[0_25px_60px_rgba(0,0,0,0.95)] p-2.5">
                        <div className="grid grid-cols-2 gap-1.5">
                          {industryDropdownItems.map((item, idx) => {
                            const Icon = item.icon;
                            return (
                              <a
                                key={idx}
                                href={item.href}
                                onClick={() => setIndustriesMenuOpen(false)}
                                className="flex items-center gap-3.5 px-3.5 py-3 hover:bg-white/[0.05] transition-all group rounded-md"
                              >
                                <div className="w-11 h-11 rounded-full flex items-center justify-center flex-shrink-0 bg-white/[0.04] border border-white shadow-[0_0_12px_rgba(255,255,255,0.15)] group-hover:border-[#FFD400] group-hover:shadow-[0_0_20px_rgba(255,212,0,0.4)] group-hover:scale-105 transition-all">
                                  <Icon className="w-5 h-5 text-[#FFD400] transition-colors" />
                                </div>
                                <span className="text-[13.5px] font-medium text-neutral-100 group-hover:text-[#FFD400] transition-colors leading-snug">
                                  {item.title}
                                </span>
                              </a>
                            );
                          })}
                        </div>
                      </div>
                    </div>
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

      {/* ----------------- MOBILE DRAWER NAVIGATION (DARK VERSION) ----------------- */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-[#07090e]/98 backdrop-blur-2xl border-b border-white/15 px-6 py-6 flex flex-col gap-3 shadow-2xl max-h-[85vh] overflow-y-auto animate-fadeIn text-white">
          {navLinks.map((link) => {
            const isMobileActive =
              (link.href === "/about-us" && pathname === "/about-us") ||
              (link.href === "/contact-us" && pathname === "/contact-us") ||
              (link.href === "/services" && pathname === "/services") ||
              (link.href === "/portfolios" && pathname === "/portfolios") ||
              (link.href === "/career" && pathname === "/career") ||
              (link.href === "/industries" && pathname?.startsWith("/industries")) ||
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
                  {(link.hasMega || link.hasIndustriesMega) && (
                    <ChevronDown className="w-4 h-4 text-neutral-400" />
                  )}
                </a>

                {/* Mobile sub-links for Services (Single column, white rings, rounded-md) */}
                {link.hasMega && (
                  <div className="py-2 grid grid-cols-1 gap-1.5 mt-1 border-t border-white/10 pt-2">
                    {serviceDropdownItems.map((srv, i) => {
                      const Icon = srv.icon;
                      return (
                        <Link
                          key={i}
                          href={srv.href}
                          onClick={() => setMobileMenuOpen(false)}
                          className="flex items-center gap-3 p-2.5 rounded-md bg-[#08090d] text-neutral-200 hover:text-[#FFD400] hover:bg-white/[0.06] transition-all group"
                        >
                          <div className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 bg-white/[0.04] border border-white text-[#FFD400] group-hover:border-[#FFD400] transition-colors">
                            <Icon className="w-4 h-4" />
                          </div>
                          <span className="text-xs font-medium leading-tight group-hover:text-[#FFD400]">
                            {srv.title}
                          </span>
                        </Link>
                      );
                    })}
                  </div>
                )}

                {/* Mobile sub-links for Industries (White rings, no inner borders, rounded-md) */}
                {link.hasIndustriesMega && (
                  <div className="py-2 grid grid-cols-1 sm:grid-cols-2 gap-1.5 mt-1 border-t border-white/10 pt-2">
                    {industryDropdownItems.map((ind, i) => {
                      const Icon = ind.icon;
                      return (
                        <a
                          key={i}
                          href={ind.href}
                          onClick={() => setMobileMenuOpen(false)}
                          className="flex items-center gap-3 p-2.5 rounded-md bg-[#08090d] text-neutral-200 hover:text-[#FFD400] hover:bg-white/[0.06] transition-all group"
                        >
                          <div className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 bg-white/[0.04] border border-white text-[#FFD400] group-hover:border-[#FFD400] transition-colors">
                            <Icon className="w-4 h-4" />
                          </div>
                          <span className="text-xs font-medium leading-tight group-hover:text-[#FFD400]">
                            {ind.title}
                          </span>
                        </a>
                      );
                    })}
                  </div>
                )}
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
