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
  Code,
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
import ServicesMegaMenu, { SERVICE_MEGA_CATEGORIES } from "@/components/ServicesMegaMenu";

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
    }, 300);
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
      title: "Technology Solutions",
      href: "/technology-solution",
      icon: Cpu,
    },
    {
      title: "Custom Web Development",
      href: "/technology-solution/web-development",
      icon: Code,
    },
    {
      title: "Web & Enterprise Cloud",
      href: "/technology-solution/cloud-infrastructure-devops",
      icon: Cpu,
    },
    {
      title: "Search Dominance & Technical SEO",
      href: "/digital-marketing/technical-seo-dominance",
      icon: TrendingUp,
    },
    {
      title: "Mobile App Development",
      href: "/technology-solution/mobile-applications",
      icon: Smartphone,
    },
    {
      title: "E-Commerce & Digital Storefronts",
      href: "/technology-solution/ecommerce-platform-engineering",
      icon: ShoppingBag,
    },
    {
      title: "Brand Strategy & Design Systems",
      href: "/branding-design/brand-identity-systems",
      icon: Palette,
    },
    {
      title: "Social Media & Community Building",
      href: "/digital-marketing/social-media-management",
      icon: Share2,
    },
    {
      title: "Commercial Film & Photography",
      href: "/media-production/commercial-video-production",
      icon: Camera,
    },
    {
      title: "Dedicated Agency Squads",
      href: "/media-production/dedicated-squads",
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
      <div className="max-w-7xl mx-auto flex items-center justify-between relative">
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
                  className="py-3 group/mega"
                >
                  <a
                    href={link.href}
                    className={`relative inline-flex items-center gap-1.5 transition-colors hover:text-[#FFD400] drop-shadow-md ${isActive || servicesMenuOpen
                        ? "text-[#FFD400] font-bold"
                        : "text-white/90"
                      }`}
                  >
                    <span>{link.name}</span>
                    <ChevronDown
                      className={`w-3.5 h-3.5 transition-transform duration-200 ${servicesMenuOpen
                          ? "rotate-180 text-[#FFD400]"
                          : "text-white/70 group-hover:text-[#FFD400] group-hover/mega:rotate-180 group-hover/mega:text-[#FFD400]"
                        }`}
                    />
                    {(isActive || servicesMenuOpen) && (
                      <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#FFD400] shadow-[0_0_8px_#FFD400] rounded-full" />
                    )}
                  </a>

                  {/* Services Mega Menu with Categories & Subcategories */}
                  <ServicesMegaMenu
                    isOpen={servicesMenuOpen}
                    onClose={() => setServicesMenuOpen(false)}
                    onMouseEnter={handleMouseEnterServices}
                    onMouseLeave={handleMouseLeaveServices}
                  />
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

                  {/* Industries Minimal Dropdown - Two Column */}
                  {industriesMenuOpen && (
                    <div
                      className="hidden lg:block absolute top-full left-1/2 -translate-x-1/2 pt-3 z-50 w-[560px] animate-fadeIn"
                      onMouseEnter={handleMouseEnterIndustries}
                      onMouseLeave={handleMouseLeaveIndustries}
                    >
                      <div className="rounded-2xl bg-[#07090e]/98 backdrop-blur-3xl border border-white/15 shadow-[0_30px_90px_rgba(0,0,0,0.95)] overflow-hidden">
                        {/* Top Accent Bar */}
                        <div className="h-1 w-full bg-gradient-to-r from-[#FFD400]/0 via-[#FFD400] to-[#FFD400]/0" />
                        
                        {/* Industries Grid - Two Columns */}
                        <div className="p-4 grid grid-cols-2 gap-2">
                          {industryDropdownItems.map((item, idx) => {
                            const Icon = item.icon;
                            return (
                              <a
                                key={idx}
                                href={item.href}
                                onClick={() => setIndustriesMenuOpen(false)}
                                className="group flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-white/[0.05] border border-transparent hover:border-white/10 transition-all"
                              >
                                <div className="w-9 h-9 rounded-lg flex items-center justify-center bg-white/[0.06] border border-white/10 text-[#FFD400] group-hover:bg-[#FFD400] group-hover:text-black group-hover:scale-105 transition-all flex-shrink-0">
                                  <Icon className="w-4 h-4" />
                                </div>
                                <span className="text-xs font-medium text-neutral-300 group-hover:text-[#FFD400] transition-colors leading-tight font-[family-name:var(--font-jakarta)]">
                                  {item.title}
                                </span>
                              </a>
                            );
                          })}
                        </div>

                        {/* Bottom Bar */}
                        <div className="px-4 py-3 bg-black/60 border-t border-white/10 flex items-center justify-between text-xs">
                          <Link
                            href="/industries"
                            onClick={() => setIndustriesMenuOpen(false)}
                            className="inline-flex items-center gap-1.5 text-neutral-400 hover:text-[#FFD400] transition-colors font-[family-name:var(--font-jakarta)]"
                          >
                            <span>View All</span>
                            <ArrowRight className="w-3 h-3" />
                          </Link>

                          <Link
                            href="/contact-us"
                            onClick={() => setIndustriesMenuOpen(false)}
                            className="inline-flex items-center gap-1.5 text-[#FFD400] font-bold hover:underline font-[family-name:var(--font-jakarta)]"
                          >
                            <span>Contact</span>
                            <ArrowUpRight className="w-3 h-3" />
                          </Link>
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

                {/* Mobile sub-links for Services (Categorized Mega Menu) */}
                {link.hasMega && (
                  <div className="py-2 flex flex-col gap-2.5 mt-1 border-t border-white/10 pt-2.5">
                    {SERVICE_MEGA_CATEGORIES.map((cat) => {
                      const Icon = cat.icon;
                      return (
                        <div key={cat.id} className="p-3 rounded-xl bg-white/[0.03] border border-white/10">
                          <Link
                            href={cat.href}
                            onClick={() => setMobileMenuOpen(false)}
                            className="flex items-center justify-between text-xs font-mono text-[#FFD400] font-bold uppercase tracking-wider mb-2"
                          >
                            <span className="flex items-center gap-2">
                              <Icon className="w-3.5 h-3.5" />
                              <span>{cat.num} // {cat.name}</span>
                            </span>
                            <ArrowUpRight className="w-3.5 h-3.5" />
                          </Link>
                          <div className="grid grid-cols-1 gap-1 pl-2 border-l border-white/10">
                            {cat.subcategories.map((sub, sIdx) => (
                              <Link
                                key={sIdx}
                                href={sub.href}
                                onClick={() => setMobileMenuOpen(false)}
                                className="py-1.5 px-2 rounded-lg text-xs text-neutral-300 hover:text-[#FFD400] hover:bg-white/[0.05] flex items-center justify-between"
                              >
                                <span>{sub.title}</span>
                                {sub.badge && (
                                  <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-[#FFD400]/20 text-[#FFD400]">
                                    {sub.badge}
                                  </span>
                                )}
                              </Link>
                            ))}
                          </div>
                        </div>
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
