"use client";

import React, { useState, useMemo, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Search,
  ArrowUpRight,
  Briefcase,
  MapPin,
  Clock,
  DollarSign,
  ChevronRight,
  CheckCircle2,
  Send,
  Check,
  Building2,
  Sparkles,
  Cpu,
  Compass,
  Globe,
  Shield,
  TrendingUp,
  FileText,
  User,
  Mail,
  Phone,
  Link2,
  X,
  Layers,
} from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Navbar from "@/components/Navbar";
import RnDFooter from "@/components/RnDFooter";
import SpaceBackground from "@/components/SpaceBackground";
import CyberButton from "@/components/CyberButton";
import PageBanner from "@/components/PageBanner";
import CursorGlow from "@/components/CursorGlow";
import PrintRevealImage from "@/components/PrintRevealImage";
import WaveText from "@/components/WaveText";
import { careerRoles, JobRole } from "@/data/careerData";

const serviceCategories = [
  "All Roles",
  "Spatial 3D & E-Commerce",
  "Web & Cloud",
  "Mobile Engineering",
  "AI & Data",
  "Technical SEO & Growth",
  "UI/UX & Spatial Design",
];

export default function CareerPage() {
  const pageRef = useRef<HTMLDivElement>(null);
  const formSectionRef = useRef<HTMLDivElement>(null);

  const [activeCategory, setActiveCategory] = useState("All Roles");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedRole, setSelectedRole] = useState<JobRole | null>(careerRoles[0]);
  const [expandedRoleId, setExpandedRoleId] = useState<string | null>(null);

  // Application Modal / Drawer state for quick application
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Application Form States
  const [formData, setFormData] = useState({
    jobRoleId: careerRoles[0].id,
    fullName: "",
    email: "",
    phone: "",
    portfolioUrl: "",
    githubUrl: "",
    experience: "3-5 years",
    noticePeriod: "Immediate / 30 Days",
    resumeLink: "",
    note: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Filtered job list
  const filteredRoles = useMemo(() => {
    return careerRoles.filter((role) => {
      const matchesCategory =
        activeCategory === "All Roles" ||
        role.serviceCategory.toLowerCase().includes(activeCategory.toLowerCase()) ||
        activeCategory.toLowerCase().includes(role.serviceCategory.toLowerCase());

      const matchesSearch =
        role.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        role.serviceCategory.toLowerCase().includes(searchQuery.toLowerCase()) ||
        role.tagline.toLowerCase().includes(searchQuery.toLowerCase()) ||
        role.techStack.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  // Handle clicking "Apply Now" on any card: updates form selection and scrolls to form (or opens drawer)
  const handleApplyClick = (role: JobRole) => {
    setSelectedRole(role);
    setFormData((prev) => ({
      ...prev,
      jobRoleId: role.id,
    }));
    if (formSectionRef.current) {
      formSectionRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 900);
  };

  // GSAP Scroll Animations
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // 1. Filter buttons stagger
      gsap.fromTo(
        ".career-filter-btn",
        { opacity: 0, y: 18, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          stagger: 0.05,
          duration: 0.5,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".career-filter-bar",
            start: "top 88%",
            toggleActions: "restart none none reset",
          },
        }
      );

      // 2. Job role cards stagger
      gsap.fromTo(
        ".career-job-card",
        { opacity: 0, y: 35, filter: "blur(4px)" },
        {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          stagger: 0.12,
          duration: 0.7,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".career-jobs-grid",
            start: "top 85%",
            toggleActions: "restart none none reset",
          },
        }
      );

      // 3. Culture & Perks cards stagger
      gsap.fromTo(
        ".career-perk-card",
        { opacity: 0, y: 25 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.1,
          duration: 0.6,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".career-perks-section",
            start: "top 85%",
            toggleActions: "restart none none reset",
          },
        }
      );
    }, pageRef);

    return () => ctx.revert();
  }, [filteredRoles]);

  return (
    <div
      ref={pageRef}
      className="relative min-h-screen bg-[#050608] text-white selection:bg-[#FFD400] selection:text-black font-sans"
    >
      {/* Interactive Cursor Glow */}
      <CursorGlow />

      {/* Background Starfield */}
      <SpaceBackground />

      {/* Global Navbar */}
      <Navbar />

      {/* Page Banner with Typewriter Title */}
      <PageBanner
        title="CAREER OPPORTUNITIES"
        breadcrumb="CAREERS"
      />

      <main className="relative z-20 w-full -mt-10 sm:-mt-14 md:-mt-18 rounded-t-[32px] sm:rounded-t-[44px] bg-[#050608] border-t border-white/10 shadow-[0_-25px_60px_rgba(0,0,0,0.85)]">

        {/* =========================================================================
            1. ENGINEERING ATELIER PHILOSOPHY HERO BAR
            ========================================================================= */}
        <section className="max-w-7xl mx-auto px-6 md:px-12 pt-14 pb-8">
          <div className="p-8 sm:p-12 bg-gradient-to-r from-[#0c0e14] via-[#121520] to-[#0c0e14] border border-white/10 shadow-2xl relative overflow-hidden">
            <div className="relative z-10 max-w-3xl space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFD400]/10 border border-[#FFD400]/30 text-[#FFD400] text-xs font-mono font-medium tracking-[0.25em] uppercase">
                <Sparkles className="w-3.5 h-3.5" />
                <span>R&amp;D ENGINEERING ATELIER</span>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-[family-name:var(--font-syne)] font-bold text-white uppercase tracking-tight leading-tight">
                Build the Future of Digital &amp; Spatial Systems
              </h1>
              <p className="text-sm sm:text-base text-neutral-300 font-light leading-relaxed">
                We are an elite squad of spatial 3D architects, full-stack engineers, and creative technologists pushing the limits of the web. Explore high-autonomy opportunities mapped across our core engineering disciplines.
              </p>
            </div>

            {/* Quick Stats Pill Grid */}
            <div className="mt-8 pt-6 border-t border-white/10 grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs font-mono">
              <div className="p-3 bg-white/[0.02] border border-white/10">
                <p className="text-neutral-500 uppercase text-[10px] tracking-widest">Active Openings</p>
                <p className="text-lg font-bold text-[#FFD400] mt-1">{careerRoles.length} Positions</p>
              </div>
              <div className="p-3 bg-white/[0.02] border border-white/10">
                <p className="text-neutral-500 uppercase text-[10px] tracking-widest">Work Modality</p>
                <p className="text-lg font-bold text-white mt-1">Remote &amp; Hybrid</p>
              </div>
              <div className="p-3 bg-white/[0.02] border border-white/10">
                <p className="text-neutral-500 uppercase text-[10px] tracking-widest">Exploratory R&amp;D</p>
                <p className="text-lg font-bold text-white mt-1">20% Lab Time</p>
              </div>
              <div className="p-3 bg-white/[0.02] border border-white/10">
                <p className="text-neutral-500 uppercase text-[10px] tracking-widest">Application SLA</p>
                <p className="text-lg font-bold text-[#FFD400] mt-1">48-Hr Review</p>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            2. SERVICE CATEGORY FILTER & SEARCH BAR
            ========================================================================= */}
        <section className="career-filter-bar max-w-7xl mx-auto px-6 md:px-12 pt-8 pb-6 border-b border-white/10">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            
            {/* Service Typology Filters */}
            <div className="flex flex-wrap gap-2">
              {serviceCategories.map((cat) => {
                const isSelected = activeCategory === cat;
                return (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => setActiveCategory(cat)}
                    className={`career-filter-btn px-4 py-2 text-xs sm:text-sm uppercase tracking-wider transition-all cursor-pointer rounded-none border ${
                      isSelected
                        ? "bg-[#FFD400] text-black border-[#FFD400] font-bold shadow-[0_0_20px_rgba(255,212,0,0.3)]"
                        : "bg-[#0c0e14] text-neutral-300 border-white/10 hover:border-[#FFD400] hover:text-[#FFD400]"
                    }`}
                  >
                    <span>{cat}</span>
                    <span className="ml-1 opacity-75">+</span>
                  </button>
                );
              })}
            </div>

            {/* Keyword Search */}
            <div className="relative w-full lg:w-80 shrink-0">
              <Search className="w-4 h-4 text-[#FFD400] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                placeholder="Search roles, skills, or services..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 text-xs sm:text-sm bg-[#0c0e14] border border-white/15 text-white placeholder:text-neutral-500 focus:outline-none focus:border-[#FFD400] transition-colors shadow-sm"
              />
            </div>
          </div>
        </section>

        {/* =========================================================================
            3. JOB ROLES LISTING SECTION (With Right-to-Left Printer Reveal Images)
            ========================================================================= */}
        <section className="career-jobs-grid max-w-7xl mx-auto px-6 md:px-12 py-12">
          {filteredRoles.length === 0 ? (
            <div className="text-center py-20 bg-[#0c0e14] border border-white/10 p-8 space-y-4">
              <p className="text-sm font-mono text-neutral-400">
                No roles found matching &quot;{searchQuery}&quot; under {activeCategory}.
              </p>
              <button
                type="button"
                onClick={() => {
                  setActiveCategory("All Roles");
                  setSearchQuery("");
                }}
                className="px-5 py-2 bg-[#FFD400] text-black text-xs font-mono uppercase tracking-wider font-bold cursor-pointer"
              >
                Reset Filters
              </button>
            </div>
          ) : (
            <div className="space-y-8">
              {filteredRoles.map((role, idx) => {
                const isExpanded = expandedRoleId === role.id;

                return (
                  <article
                    key={role.id}
                    className="career-job-card group bg-[#0c0e14] border border-white/10 hover:border-[#FFD400]/50 transition-all duration-500 shadow-xl overflow-hidden flex flex-col"
                  >
                    <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch min-h-[340px]">
                      
                      {/* Left: Role Image with Multi-Directional Smooth Glide & Settle Animation */}
                      <div className="lg:col-span-5 xl:col-span-5 relative w-full h-[280px] sm:h-[340px] lg:h-auto min-h-full flex flex-col justify-stretch self-stretch overflow-hidden">
                        <PrintRevealImage
                          src={role.image}
                          alt={role.title}
                          badge={role.serviceCategory}
                          aspectClass="w-full h-full min-h-full"
                          className="w-full h-full border-0 lg:border-r border-white/10"
                          index={idx}
                        />
                      </div>

                      {/* Right: Role Details & Actions */}
                      <div className="lg:col-span-7 xl:col-span-7 p-6 sm:p-8 lg:p-9 space-y-5 flex flex-col justify-between">
                        <div className="space-y-4">
                          {/* Meta Tags: Department • Level • Type • Location */}
                          <div className="flex flex-wrap items-center gap-2 text-[10px] font-mono uppercase tracking-wider text-neutral-400">
                            <span className="px-2.5 py-0.5 bg-[#FFD400]/15 text-[#FFD400] border border-[#FFD400]/30 font-bold">
                              {role.serviceCategory}
                            </span>
                            <span className="px-2.5 py-0.5 bg-white/[0.04] border border-white/10">
                              {role.department}
                            </span>
                            <span className="px-2.5 py-0.5 bg-white/[0.04] border border-white/10 text-white font-medium">
                              {role.level}
                            </span>
                            <span className="flex items-center gap-1 px-2.5 py-0.5 bg-white/[0.04] border border-white/10">
                              <MapPin className="w-3 h-3 text-[#FFD400]" />
                              <span>{role.location}</span>
                            </span>
                          </div>

                          {/* Role Title with Smooth Wave Animation */}
                          <h2 className="font-[family-name:var(--font-syne)] text-xl sm:text-2xl lg:text-3xl font-bold text-white group-hover:text-[#FFD400] transition-colors uppercase leading-snug">
                            <WaveText text={role.title} />
                          </h2>

                          {/* Tagline */}
                          <p className="text-xs sm:text-sm text-neutral-300 font-light leading-relaxed">
                            {role.tagline}
                          </p>

                          {/* Tech Stack Pills */}
                          <div className="flex flex-wrap items-center gap-1.5 pt-1">
                            {role.techStack.map((tech) => (
                              <span
                                key={tech}
                                className="px-2 py-0.5 bg-white/[0.03] border border-white/10 text-[10px] font-mono text-neutral-300"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Compensation & Actions Row */}
                        <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                          <div className="space-y-0.5">
                            <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest">
                              Compensation Package (Est.)
                            </span>
                            <p className="text-xs sm:text-sm font-mono text-[#FFD400] font-bold">
                              {role.compensation}
                            </p>
                          </div>

                          <div className="flex items-center gap-3">
                            <button
                              type="button"
                              onClick={() => setExpandedRoleId(isExpanded ? null : role.id)}
                              className="px-4 py-2 border border-white/20 hover:border-white text-xs font-mono uppercase tracking-wider text-neutral-300 hover:text-white transition-colors cursor-pointer"
                            >
                              {isExpanded ? "Hide Specs" : "View Specs"}
                            </button>

                            <button
                              type="button"
                              onClick={() => handleApplyClick(role)}
                              className="px-5 py-2.5 bg-[#FFD400] hover:bg-[#ffe34d] text-black text-xs font-mono uppercase tracking-widest font-bold flex items-center gap-1.5 shadow-[0_0_15px_rgba(255,212,0,0.3)] transition-all cursor-pointer group/btn"
                            >
                              <span>Apply for Role</span>
                              <ArrowUpRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Inline Expandable Specs & Responsibilities */}
                    {isExpanded && (
                      <div className="p-6 sm:p-8 border-t border-white/10 bg-[#08090d]/80 grid grid-cols-1 md:grid-cols-2 gap-6 text-xs font-mono">
                        <div className="space-y-2.5">
                          <span className="text-[#FFD400] font-bold uppercase tracking-wider block">
                            Key Responsibilities
                          </span>
                          <ul className="space-y-2 text-neutral-300">
                            {role.keyResponsibilities.map((resp, idx) => (
                              <li key={idx} className="flex items-start gap-2">
                                <span className="text-[#FFD400] shrink-0 mt-0.5">›</span>
                                <span className="font-light leading-relaxed">{resp}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="space-y-2.5">
                          <span className="text-white font-bold uppercase tracking-wider block">
                            Core Prerequisites
                          </span>
                          <ul className="space-y-2 text-neutral-300">
                            {role.requirements.map((req, idx) => (
                              <li key={idx} className="flex items-start gap-2">
                                <CheckCircle2 className="w-3.5 h-3.5 text-[#FFD400] shrink-0 mt-0.5" />
                                <span className="font-light leading-relaxed">{req}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    )}
                  </article>
                );
              })}
            </div>
          )}
        </section>

        {/* =========================================================================
            4. APPLICATION FORM SECTION (Prefilled with Specific Role)
            ========================================================================= */}
        <section
          ref={formSectionRef}
          id="apply-section"
          className="max-w-7xl mx-auto px-6 md:px-12 py-16 scroll-mt-24 border-t border-white/10"
        >
          <div className="bg-[#0c0e14] border border-white/15 p-8 sm:p-12 shadow-2xl relative overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            
            {/* Left Column (5 cols): Instructions & Role Summary */}
            <div className="lg:col-span-5 space-y-6">
              <div className="space-y-3">
                <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#FFD400] font-semibold flex items-center space-x-2">
                  <Briefcase className="w-4 h-4" />
                  <span>DIRECT ENGINEERING APPLICATION</span>
                </span>
                <h2 className="font-[family-name:var(--font-syne)] text-2xl sm:text-3xl lg:text-4xl text-white font-bold uppercase leading-tight">
                  Join the Atelier Squad
                </h2>
                <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed font-light">
                  Submit your engineering portfolio and background. We evaluate candidates primarily on past repository code quality, system design intuition, and problem-solving velocity.
                </p>
              </div>

              {/* Active Selected Role Preview Box */}
              {selectedRole && (
                <div className="p-5 bg-white/[0.02] border border-[#FFD400]/30 shadow-lg space-y-3">
                  <div className="flex items-center justify-between pb-2 border-b border-white/10">
                    <span className="text-[10px] font-mono text-[#FFD400] uppercase tracking-widest font-bold">
                      Target Job Role
                    </span>
                    <span className="text-[10px] font-mono px-2 py-0.5 bg-[#FFD400]/15 text-[#FFD400] border border-[#FFD400]/30">
                      {selectedRole.level}
                    </span>
                  </div>
                  <div>
                    <h3 className="font-[family-name:var(--font-syne)] text-base font-bold text-white uppercase">
                      {selectedRole.title}
                    </h3>
                    <p className="text-xs text-neutral-400 font-mono mt-0.5">
                      Service: {selectedRole.serviceCategory}
                    </p>
                  </div>
                  <div className="flex items-center gap-4 text-xs font-mono text-neutral-300 pt-1">
                    <span>{selectedRole.location}</span>
                    <span>•</span>
                    <span className="text-[#FFD400]">{selectedRole.compensation}</span>
                  </div>
                </div>
              )}

              {/* Review Process SLA */}
              <div className="p-4 bg-white/[0.02] border border-white/10 space-y-2 text-xs font-mono">
                <span className="text-[11px] uppercase tracking-widest text-neutral-400 font-bold block">
                  Application Review Process:
                </span>
                <div className="space-y-1.5 text-neutral-300">
                  <p className="flex items-center justify-between">
                    <span>1. Code / Portfolio Audit:</span>
                    <strong className="text-[#FFD400]">Within 48 Hours</strong>
                  </p>
                  <p className="flex items-center justify-between">
                    <span>2. Technical Architecture Deep-Dive:</span>
                    <strong className="text-white">60 Min Live Session</strong>
                  </p>
                  <p className="flex items-center justify-between">
                    <span>3. Leadership Culture Alignment:</span>
                    <strong className="text-white">Final Chat</strong>
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column (7 cols): The Application Form */}
            <div className="lg:col-span-7">
              {isSubmitted ? (
                <div className="py-12 text-center space-y-4 bg-white/[0.02] border border-white/10 p-8 rounded-xl">
                  <div className="w-14 h-14 rounded-full bg-[#FFD400] text-black mx-auto flex items-center justify-center shadow-[0_0_25px_rgba(255,212,0,0.5)]">
                    <Check className="w-7 h-7 stroke-[3]" />
                  </div>
                  <h3 className="text-xl font-[family-name:var(--font-syne)] font-bold text-white uppercase">
                    Application Transmitted
                  </h3>
                  <p className="text-sm text-neutral-300 max-w-md mx-auto leading-relaxed">
                    Thank you, <strong className="text-white">{formData.fullName}</strong>. Your engineering profile for <span className="text-[#FFD400] font-mono">{selectedRole?.title}</span> has been received. Our Lead Architects review submissions within 48 business hours.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({
                        jobRoleId: careerRoles[0].id,
                        fullName: "",
                        email: "",
                        phone: "",
                        portfolioUrl: "",
                        githubUrl: "",
                        experience: "3-5 years",
                        noticePeriod: "Immediate / 30 Days",
                        resumeLink: "",
                        note: "",
                      });
                    }}
                    className="mt-4 px-6 py-2 rounded-full border border-white/20 text-xs font-mono uppercase tracking-wider text-neutral-300 hover:text-white hover:border-[#FFD400] transition-colors cursor-pointer"
                  >
                    Submit Another Application
                  </button>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-4">
                  
                  {/* Select Role Dropdown */}
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-neutral-400 mb-1.5">
                      Applying for Job Role *
                    </label>
                    <select
                      value={formData.jobRoleId}
                      onChange={(e) => {
                        const newRoleId = e.target.value;
                        setFormData({ ...formData, jobRoleId: newRoleId });
                        const found = careerRoles.find((r) => r.id === newRoleId);
                        if (found) setSelectedRole(found);
                      }}
                      className="w-full px-3 py-2.5 text-xs font-mono bg-[#0c0e14] border border-white/15 text-white focus:outline-none focus:border-[#FFD400] transition-colors"
                    >
                      {careerRoles.map((r) => (
                        <option key={r.id} value={r.id}>
                          {r.title} ({r.serviceCategory})
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Candidate Name & Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-neutral-400 mb-1.5">
                        Full Name *
                      </label>
                      <div className="relative">
                        <User className="w-4 h-4 text-[#FFD400] absolute left-3.5 top-1/2 -translate-y-1/2" />
                        <input
                          type="text"
                          required
                          placeholder="Arjun Patel"
                          value={formData.fullName}
                          onChange={(e) =>
                            setFormData({ ...formData, fullName: e.target.value })
                          }
                          className="w-full pl-10 pr-3.5 py-2.5 text-xs font-mono bg-white/[0.04] border border-white/15 text-white placeholder:text-neutral-500 focus:outline-none focus:border-[#FFD400] transition-colors"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-neutral-400 mb-1.5">
                        Email Address *
                      </label>
                      <div className="relative">
                        <Mail className="w-4 h-4 text-[#FFD400] absolute left-3.5 top-1/2 -translate-y-1/2" />
                        <input
                          type="email"
                          required
                          placeholder="arjun@example.com"
                          value={formData.email}
                          onChange={(e) =>
                            setFormData({ ...formData, email: e.target.value })
                          }
                          className="w-full pl-10 pr-3.5 py-2.5 text-xs font-mono bg-white/[0.04] border border-white/15 text-white placeholder:text-neutral-500 focus:outline-none focus:border-[#FFD400] transition-colors"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Phone & Experience */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-neutral-400 mb-1.5">
                        Phone / WhatsApp *
                      </label>
                      <div className="relative">
                        <Phone className="w-4 h-4 text-[#FFD400] absolute left-3.5 top-1/2 -translate-y-1/2" />
                        <input
                          type="tel"
                          required
                          placeholder="+91 98200 54321"
                          value={formData.phone}
                          onChange={(e) =>
                            setFormData({ ...formData, phone: e.target.value })
                          }
                          className="w-full pl-10 pr-3.5 py-2.5 text-xs font-mono bg-white/[0.04] border border-white/15 text-white placeholder:text-neutral-500 focus:outline-none focus:border-[#FFD400] transition-colors"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-neutral-400 mb-1.5">
                        Years of Experience
                      </label>
                      <select
                        value={formData.experience}
                        onChange={(e) =>
                          setFormData({ ...formData, experience: e.target.value })
                        }
                        className="w-full px-3 py-2.5 text-xs font-mono bg-[#0c0e14] border border-white/15 text-white focus:outline-none focus:border-[#FFD400] transition-colors"
                      >
                        <option value="1-3 years">1 - 3 Years</option>
                        <option value="3-5 years">3 - 5 Years</option>
                        <option value="5-8 years">5 - 8 Years</option>
                        <option value="8+ years">8+ Years (Principal / Staff)</option>
                      </select>
                    </div>
                  </div>

                  {/* Portfolio & GitHub URLs */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-neutral-400 mb-1.5">
                        Portfolio / Live Projects URL *
                      </label>
                      <div className="relative">
                        <Link2 className="w-4 h-4 text-[#FFD400] absolute left-3.5 top-1/2 -translate-y-1/2" />
                        <input
                          type="url"
                          required
                          placeholder="https://arjun.dev"
                          value={formData.portfolioUrl}
                          onChange={(e) =>
                            setFormData({ ...formData, portfolioUrl: e.target.value })
                          }
                          className="w-full pl-10 pr-3.5 py-2.5 text-xs font-mono bg-white/[0.04] border border-white/15 text-white placeholder:text-neutral-500 focus:outline-none focus:border-[#FFD400] transition-colors"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-neutral-400 mb-1.5">
                        GitHub / LinkedIn URL
                      </label>
                      <div className="relative">
                        <Link2 className="w-4 h-4 text-[#FFD400] absolute left-3.5 top-1/2 -translate-y-1/2" />
                        <input
                          type="url"
                          placeholder="https://github.com/username"
                          value={formData.githubUrl}
                          onChange={(e) =>
                            setFormData({ ...formData, githubUrl: e.target.value })
                          }
                          className="w-full pl-10 pr-3.5 py-2.5 text-xs font-mono bg-white/[0.04] border border-white/15 text-white placeholder:text-neutral-500 focus:outline-none focus:border-[#FFD400] transition-colors"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Resume PDF Drive / Cloud Link */}
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-neutral-400 mb-1.5">
                      Resume PDF Link (Google Drive / Dropbox / Notion) *
                    </label>
                    <div className="relative">
                      <FileText className="w-4 h-4 text-[#FFD400] absolute left-3.5 top-1/2 -translate-y-1/2" />
                      <input
                        type="url"
                        required
                        placeholder="https://drive.google.com/file/d/your-resume-pdf"
                        value={formData.resumeLink}
                        onChange={(e) =>
                          setFormData({ ...formData, resumeLink: e.target.value })
                        }
                        className="w-full pl-10 pr-3.5 py-2.5 text-xs font-mono bg-white/[0.04] border border-white/15 text-white placeholder:text-neutral-500 focus:outline-none focus:border-[#FFD400] transition-colors"
                      />
                    </div>
                  </div>

                  {/* Cover Note */}
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-neutral-400 mb-1.5">
                      Engineering Philosophy &amp; Why RnD Technosoft?
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Highlight what drives you, notable technical challenges you've solved, or projects you're proud of..."
                      value={formData.note}
                      onChange={(e) =>
                        setFormData({ ...formData, note: e.target.value })
                      }
                      className="w-full p-3 text-xs font-mono bg-white/[0.04] border border-white/15 text-white placeholder:text-neutral-500 focus:outline-none focus:border-[#FFD400] transition-colors resize-none"
                    />
                  </div>

                  {/* Submit CTA */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-2">
                    <p className="text-[11px] text-neutral-400 font-mono">
                      Confidential review. Your details will not be shared externally.
                    </p>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="px-8 py-3.5 bg-[#FFD400] hover:bg-[#ffe34d] text-black text-xs font-mono uppercase tracking-[0.2em] font-bold transition-all shadow-[0_0_20px_rgba(255,212,0,0.3)] flex items-center justify-center space-x-2 group cursor-pointer disabled:opacity-60"
                    >
                      {isSubmitting ? (
                        <span>Encrypting Profile...</span>
                      ) : (
                        <>
                          <span>Transmit Application</span>
                          <Send className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </section>
      </main>

      {/* Global RnDFooter */}
      <RnDFooter />
    </div>
  );
}
