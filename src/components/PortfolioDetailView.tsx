"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Home,
  ChevronRight,
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  Calendar,
  Layers,
  Cpu,
  Globe,
  Database,
  Server,
  Zap,
  TrendingUp,
  Clock,
  Play,
  X,
  Building2,
  Quote,
  Check,
} from "lucide-react";
import Navbar from "./Navbar";
import RnDFooter from "./RnDFooter";
import SpaceBackground from "./SpaceBackground";
import ServiceConversionCTA from "./ServiceConversionCTA";
import { PortfolioProjectDetail } from "@/data/portfolioData";

export interface PortfolioDetailViewProps {
  project: PortfolioProjectDetail;
  prevProject: PortfolioProjectDetail | null;
  nextProject: PortfolioProjectDetail | null;
  relatedProjects: PortfolioProjectDetail[];
}

export default function PortfolioDetailView({
  project,
  prevProject,
  nextProject,
  relatedProjects,
}: PortfolioDetailViewProps) {
  const [selectedGalleryImg, setSelectedGalleryImg] = useState<string | null>(null);
  const [showVideoModal, setShowVideoModal] = useState(false);

  return (
    <div className="relative min-h-screen bg-[#050608] text-white selection:bg-[#FFD400] selection:text-black font-sans">
      {/* Background Starfield */}
      <SpaceBackground />

      {/* Global Navbar */}
      <Navbar />

      {/* Lightbox Modal for Gallery Images */}
      {selectedGalleryImg && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-xl flex items-center justify-center p-4 sm:p-8"
          onClick={() => setSelectedGalleryImg(null)}
        >
          <button
            type="button"
            onClick={() => setSelectedGalleryImg(null)}
            className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
          <div className="relative max-w-5xl max-h-[85vh] w-full h-[70vh] rounded-2xl overflow-hidden border border-white/20 shadow-2xl">
            <Image
              src={selectedGalleryImg}
              alt="Project Showcase Zoom"
              fill
              className="object-contain"
            />
          </div>
        </div>
      )}

      {/* Video Modal (when available) */}
      {showVideoModal && project.videoUrl && (
        <div
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-2xl flex items-center justify-center p-4 sm:p-8"
          onClick={() => setShowVideoModal(false)}
        >
          <button
            type="button"
            onClick={() => setShowVideoModal(false)}
            className="absolute top-6 right-6 w-11 h-11 rounded-full bg-white/10 hover:bg-[#FFD400] hover:text-black flex items-center justify-center text-white transition-all cursor-pointer shadow-xl"
          >
            <X className="w-5 h-5" />
          </button>
          <div
            className="relative w-full max-w-4xl aspect-video rounded-3xl overflow-hidden border border-white/20 shadow-2xl bg-black"
            onClick={(e) => e.stopPropagation()}
          >
            <iframe
              src={`${project.videoUrl}?autoplay=1`}
              title={`${project.title} Video Showcase`}
              className="w-full h-full border-0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      )}

      <main className="relative z-10 pt-28 sm:pt-36">
        {/* =========================================================================
            1. BREADCRUMB & HERO HEADER
            ========================================================================= */}
        <div className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12 mb-12 sm:mb-16">
          {/* Breadcrumb Navigation */}
          <nav className="flex items-center space-x-2 text-xs font-mono tracking-wider uppercase text-neutral-400 mb-8 overflow-x-auto pb-1 scrollbar-none">
            <Link
              href="/"
              className="hover:text-[#FFD400] transition-colors flex items-center gap-1.5 shrink-0"
            >
              <Home className="w-3.5 h-3.5" />
              <span>Home</span>
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-neutral-600 shrink-0" />
            <Link
              href="/portfolios"
              className="hover:text-[#FFD400] transition-colors shrink-0"
            >
              Portfolios
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-neutral-600 shrink-0" />
            <span className="text-[#FFD400] font-semibold truncate shrink-0">
              {project.category}
            </span>
            <ChevronRight className="w-3.5 h-3.5 text-neutral-600 shrink-0" />
            <span className="text-white font-semibold truncate">
              {project.title}
            </span>
          </nav>

          {/* Hero Header Card */}
          <div className="relative rounded-[32px] sm:rounded-[40px] overflow-hidden bg-gradient-to-br from-[#0e111a]/95 via-[#090b10]/95 to-[#0e111a]/95 border border-white/15 p-6 sm:p-12 lg:p-16 shadow-[0_25px_80px_rgba(0,0,0,0.85)]">
            <div className="absolute inset-0 bg-[radial-gradient(#ffffff0a_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

            <div className="relative z-10">
              {/* Category & Status Pill Bar */}
              <div className="flex flex-wrap items-center gap-3 mb-6">
                <span className="px-3 py-1 rounded-full bg-black/60 border border-[#FFD400]/40 text-[#FFD400] text-xs font-mono font-medium tracking-[0.2em] uppercase">
                  [{project.index}] // {project.category}
                </span>
                <span className="px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-neutral-300 text-xs font-mono tracking-wider">
                  {project.projectDate || project.year}
                </span>
                {project.sla && (
                  <span className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-400/30 text-blue-400 text-xs font-mono tracking-wider">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>{project.sla}</span>
                  </span>
                )}
              </div>

              {/* Title & Subtitle */}
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold font-[family-name:var(--font-syne)] uppercase tracking-tight text-white leading-[1.05] mb-4">
                {project.title}
              </h1>

              <p className="text-lg sm:text-xl text-[#FFD400] font-mono tracking-wide mb-6">
                {project.subtitle}
              </p>

              <p className="text-sm sm:text-base text-neutral-300 font-light leading-relaxed max-w-4xl mb-10">
                {project.summary || project.tagline}
              </p>

              {/* Meta Specs Grid (Client, Industry, Services, Duration) */}
              <div className="pt-8 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-6 text-xs font-mono">
                <div>
                  <span className="text-neutral-500 block uppercase tracking-wider mb-1">
                    Client Organization
                  </span>
                  <div className="flex items-center gap-1.5 text-white font-bold">
                    <span>{project.client}</span>
                    {project.clientApproved && (
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#FFD400]" />
                    )}
                  </div>
                </div>

                <div>
                  <span className="text-neutral-500 block uppercase tracking-wider mb-1">
                    Industry Sector
                  </span>
                  <span className="text-white font-bold">{project.industry}</span>
                </div>

                <div>
                  <span className="text-neutral-500 block uppercase tracking-wider mb-1">
                    Sprint Duration
                  </span>
                  <span className="text-white font-bold">{project.duration || "10-14 Weeks"}</span>
                </div>

                <div>
                  <span className="text-neutral-500 block uppercase tracking-wider mb-1">
                    Project Type
                  </span>
                  <span className="text-white font-bold">{project.projectType}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* =========================================================================
            2. VERIFIED RESULTS METRICS (When Data Available)
            ========================================================================= */}
        {project.results && project.results.length > 0 && (
          <div className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12 mb-16">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#FFD400] font-bold flex items-center gap-2">
                <TrendingUp className="w-4 h-4" />
                VERIFIED PERFORMANCE TELEMETRY
              </span>
              <span className="text-[11px] font-mono text-neutral-400">
                Audit Verified // Zero Fluff Metrics
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {project.results.map((res, i) => (
                <div
                  key={i}
                  className="p-6 rounded-2xl bg-gradient-to-br from-[#0c0e14] to-[#121520] border border-white/10 hover:border-[#FFD400]/40 transition-all shadow-xl"
                >
                  <div className="text-3xl sm:text-4xl font-bold font-mono text-[#FFD400] mb-2 tracking-tight">
                    {res.metric}
                  </div>
                  <div className="text-xs font-medium text-white mb-2 leading-snug">
                    {res.label}
                  </div>
                  {res.verifiedBy && (
                    <div className="text-[10px] font-mono text-neutral-400 flex items-center gap-1.5 pt-2 border-t border-white/5">
                      <ShieldCheck className="w-3 h-3 text-[#FFD400]" />
                      <span>Source: {res.verifiedBy}</span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* =========================================================================
            3. MAIN SHOWCASE THUMBNAIL & VIDEO PREVIEW
            ========================================================================= */}
        <div className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12 mb-20">
          <div className="relative rounded-3xl overflow-hidden aspect-[16/9] md:aspect-[21/9] border border-white/15 shadow-2xl group">
            <Image
              src={project.image}
              alt={project.title}
              fill
              priority
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20 pointer-events-none" />

            {/* Video Play Overlay (when video exists) */}
            {project.videoUrl && (
              <button
                type="button"
                onClick={() => setShowVideoModal(true)}
                className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-black/30 hover:bg-black/50 transition-all cursor-pointer group/btn"
              >
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#FFD400] text-black flex items-center justify-center shadow-[0_0_35px_rgba(255,212,0,0.5)] group-hover/btn:scale-110 transition-transform">
                  <Play className="w-7 h-7 sm:w-8 sm:h-8 fill-black ml-1" />
                </div>
                <span className="text-xs sm:text-sm font-mono font-bold tracking-widest uppercase text-white bg-black/60 px-4 py-1.5 rounded-full border border-white/20 backdrop-blur-md">
                  PLAY COMMERCIAL SHOWCASE
                </span>
              </button>
            )}

            {/* Bottom Floating Badge */}
            <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-xs font-mono text-white pointer-events-none">
              <span className="bg-black/70 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/15">
                {project.badge || "MISSION ARCHITECTURE"}
              </span>
              <span className="bg-black/70 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/15 text-[#FFD400]">
                STATUS: DEPLOYED &amp; ACTIVE
              </span>
            </div>
          </div>
        </div>

        {/* =========================================================================
            4. THE STRATEGIC NARRATIVE: BRIEF, CHALLENGE, SOLUTION & DELIVERABLES
            ========================================================================= */}
        <div className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12 mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            {/* The Brief */}
            <div className="p-8 sm:p-10 rounded-3xl bg-[#0c0e14]/90 border border-white/10 hover:border-[#FFD400]/40 transition-colors shadow-xl">
              <div className="text-[11px] font-mono uppercase tracking-[0.25em] text-[#FFD400] mb-3">
                01 // EXECUTIVE MANDATE
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold font-[family-name:var(--font-syne)] uppercase text-white mb-4">
                The Client Brief
              </h3>
              <p className="text-sm sm:text-base text-neutral-300 font-light leading-relaxed">
                {project.brief}
              </p>
            </div>

            {/* The Challenge */}
            <div className="p-8 sm:p-10 rounded-3xl bg-[#0c0e14]/90 border border-white/10 hover:border-red-400/40 transition-colors shadow-xl">
              <div className="text-[11px] font-mono uppercase tracking-[0.25em] text-red-400 mb-3">
                02 // TECHNICAL BOTTLENECKS
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold font-[family-name:var(--font-syne)] uppercase text-white mb-4">
                The Core Challenge
              </h3>
              <p className="text-sm sm:text-base text-neutral-300 font-light leading-relaxed">
                {project.challenge}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* The Solution */}
            <div className="lg:col-span-7 p-8 sm:p-10 rounded-3xl bg-[#0c0e14]/90 border border-white/10 hover:border-emerald-400/40 transition-colors shadow-xl">
              <div className="text-[11px] font-mono uppercase tracking-[0.25em] text-emerald-400 mb-3">
                03 // ENGINEERING EXECUTION
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold font-[family-name:var(--font-syne)] uppercase text-white mb-4">
                The RnD Solution
              </h3>
              <p className="text-sm sm:text-base text-neutral-300 font-light leading-relaxed mb-6">
                {project.solution}
              </p>

              {/* Quote Block (When Available) */}
              {project.quote && (
                <div className="p-6 rounded-2xl bg-white/[0.03] border-l-2 border-[#FFD400] space-y-3">
                  <Quote className="w-5 h-5 text-[#FFD400]" />
                  <p className="text-xs sm:text-sm text-neutral-200 italic font-light leading-relaxed">
                    &ldquo;{project.quote.text}&rdquo;
                  </p>
                  <p className="text-xs font-mono text-[#FFD400] font-semibold">
                    — {project.quote.author}
                  </p>
                </div>
              )}
            </div>

            {/* Deliverables Matrix */}
            <div className="lg:col-span-5 p-8 sm:p-10 rounded-3xl bg-[#0c0e14]/90 border border-white/10 shadow-xl flex flex-col justify-between">
              <div>
                <div className="text-[11px] font-mono uppercase tracking-[0.25em] text-[#FFD400] mb-3">
                  04 // TANGIBLE DELIVERABLES
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold font-[family-name:var(--font-syne)] uppercase text-white mb-6">
                  Delivered Scope
                </h3>
                <div className="space-y-4">
                  {project.deliverables.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-neutral-300">
                      <div className="w-5 h-5 rounded-md bg-[#FFD400]/15 border border-[#FFD400]/30 flex items-center justify-center text-[#FFD400] shrink-0 mt-0.5">
                        <Check className="w-3.5 h-3.5 stroke-[3]" />
                      </div>
                      <span className="leading-relaxed">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-white/10 flex items-center justify-between text-xs font-mono text-neutral-400">
                <span>100% IP Repository Transfer</span>
                <ShieldCheck className="w-4 h-4 text-[#FFD400]" />
              </div>
            </div>
          </div>
        </div>

        {/* =========================================================================
            5. INTERACTIVE MULTI-IMAGE GALLERY
            ========================================================================= */}
        {project.galleryImages && project.galleryImages.length > 0 && (
          <div className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12 mb-20">
            <div className="flex items-center justify-between mb-6 pb-3 border-b border-white/10">
              <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#FFD400] font-bold">
                SHOWCASE GALLERY &amp; SCREENSHOTS ({project.galleryImages.length})
              </span>
              <span className="text-[11px] font-mono text-neutral-400">
                Click image to zoom
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {project.galleryImages.map((imgUrl, i) => (
                <div
                  key={i}
                  onClick={() => setSelectedGalleryImg(imgUrl)}
                  className="group relative rounded-2xl overflow-hidden aspect-video bg-[#0c0e14] border border-white/10 hover:border-[#FFD400] transition-all cursor-pointer shadow-xl"
                >
                  <Image
                    src={imgUrl}
                    alt={`${project.title} Gallery Shot ${i + 1}`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
                  <div className="absolute bottom-3 right-3 w-8 h-8 rounded-full bg-black/70 backdrop-blur-md flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
                    <ArrowUpRight className="w-4 h-4 text-[#FFD400]" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* =========================================================================
            6. ARCHITECTURAL SCOPE MODULES & TECH STACK
            ========================================================================= */}
        <div className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12 mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Scope Steps */}
            <div className="lg:col-span-8">
              <div className="text-xs font-mono uppercase tracking-[0.2em] text-[#FFD400] font-bold mb-4">
                SPRINT ARCHITECTURE PHASES
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {project.scope.map((step) => (
                  <div
                    key={step.number}
                    className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-[#FFD400]/40 transition-colors"
                  >
                    <span className="font-mono text-xs text-[#FFD400] font-bold block mb-1">
                      PHASE // {step.number}
                    </span>
                    <h4 className="text-base font-bold text-white uppercase font-[family-name:var(--font-syne)] mb-2">
                      {step.title}
                    </h4>
                    <p className="text-xs text-neutral-300 font-light leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Tech Stack & Linked Services */}
            <div className="lg:col-span-4 space-y-6">
              {/* Tech Stack Box */}
              <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10">
                <div className="text-xs font-mono uppercase tracking-[0.2em] text-[#FFD400] font-bold mb-4">
                  CORE TECH STACK
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1.5 rounded-lg bg-black/60 border border-white/15 text-xs font-mono text-white"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Linked Services Box */}
              <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10">
                <div className="text-xs font-mono uppercase tracking-[0.2em] text-[#FFD400] font-bold mb-3">
                  DEPLOYED SERVICES
                </div>
                <div className="space-y-2">
                  {project.services.map((srv) => (
                    <Link
                      key={srv.name}
                      href={srv.href}
                      className="flex items-center justify-between p-2.5 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] text-xs font-mono text-neutral-300 hover:text-white transition-colors"
                    >
                      <span>{srv.name}</span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-[#FFD400]" />
                    </Link>
                  ))}
                </div>
              </div>

              {/* Linked Industries Box */}
              <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10">
                <div className="text-xs font-mono uppercase tracking-[0.2em] text-[#FFD400] font-bold mb-3">
                  RELEVANT INDUSTRIES
                </div>
                <div className="space-y-2">
                  {project.industries.map((ind) => (
                    <Link
                      key={ind.name}
                      href={ind.href}
                      className="flex items-center justify-between p-2.5 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] text-xs font-mono text-neutral-300 hover:text-white transition-colors"
                    >
                      <span className="truncate">{ind.name}</span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-[#FFD400] shrink-0" />
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* =========================================================================
            7. RELATED PROJECTS (Same Category or Stack)
            ========================================================================= */}
        {relatedProjects.length > 0 && (
          <div className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12 mb-24">
            <div className="flex items-center justify-between mb-8 pb-3 border-b border-white/10">
              <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#FFD400] font-bold">
                EXPLORE RELATED CASE STUDIES
              </span>
              <Link
                href="/portfolios"
                className="text-xs font-mono text-neutral-400 hover:text-white flex items-center gap-1"
              >
                <span>View Full Archive</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedProjects.map((rel) => (
                <Link
                  key={rel.id}
                  href={`/portfolios/${rel.id}`}
                  className="group rounded-2xl overflow-hidden bg-[#0c0e14] border border-white/10 hover:border-[#FFD400]/60 transition-all shadow-xl flex flex-col justify-between"
                >
                  <div className="relative aspect-video overflow-hidden">
                    <Image
                      src={rel.image}
                      alt={rel.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 right-3 px-2.5 py-0.5 rounded-full bg-black/80 backdrop-blur-md border border-[#FFD400]/40 text-[#FFD400] text-[10px] font-mono uppercase tracking-wider">
                      {rel.category}
                    </div>
                  </div>

                  <div className="p-5 flex flex-col justify-between flex-1">
                    <div>
                      <span className="text-[10px] font-mono text-[#FFD400] block mb-1">
                        {rel.client}
                      </span>
                      <h4 className="text-lg font-bold text-white uppercase font-[family-name:var(--font-syne)] group-hover:text-[#FFD400] transition-colors mb-2">
                        {rel.title}
                      </h4>
                      <p className="text-xs text-neutral-400 font-light line-clamp-2 leading-relaxed">
                        {rel.summary || rel.subtitle}
                      </p>
                    </div>

                    <div className="pt-4 mt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono text-neutral-300">
                      <span>View Case Study</span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-[#FFD400] group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* =========================================================================
            8. PREVIOUS / NEXT MISSION NAVIGATION
            ========================================================================= */}
        <div className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12 mb-20">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-6 rounded-2xl bg-white/[0.02] border border-white/10">
            {prevProject ? (
              <Link
                href={`/portfolios/${prevProject.id}`}
                className="group flex items-center gap-3 text-left w-full sm:w-auto"
              >
                <div className="w-9 h-9 rounded-full bg-white/10 group-hover:bg-[#FFD400] text-[#FFD400] group-hover:text-black flex items-center justify-center transition-colors shrink-0">
                  <ArrowLeft className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-neutral-500 block">
                    Previous Case Study
                  </span>
                  <span className="text-xs sm:text-sm font-bold text-white group-hover:text-[#FFD400] transition-colors">
                    {prevProject.title}
                  </span>
                </div>
              </Link>
            ) : (
              <div />
            )}

            {nextProject ? (
              <Link
                href={`/portfolios/${nextProject.id}`}
                className="group flex items-center justify-end gap-3 text-right w-full sm:w-auto ml-auto"
              >
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-neutral-500 block">
                    Next Case Study
                  </span>
                  <span className="text-xs sm:text-sm font-bold text-white group-hover:text-[#FFD400] transition-colors">
                    {nextProject.title}
                  </span>
                </div>
                <div className="w-9 h-9 rounded-full bg-white/10 group-hover:bg-[#FFD400] text-[#FFD400] group-hover:text-black flex items-center justify-center transition-colors shrink-0">
                  <ArrowRight className="w-4 h-4" />
                </div>
              </Link>
            ) : (
              <div />
            )}
          </div>
        </div>

        {/* =========================================================================
            9. SIMILAR-PROJECT ENQUIRY CTA FORM
            ========================================================================= */}
        <div className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12 pb-24">
          <ServiceConversionCTA
            id="inquire-form"
            defaultService={project.title}
            category={project.category}
            badge="COMMISSION A SIMILAR ARCHITECTURE"
            title={`Ready to Commission a Project Similar to ${project.title}?`}
            subtitle={`Whether you need the same performance architecture, headless storefront, or digital acquisition engine, our engineering leadership is ready to review your brief.`}
          />
        </div>
      </main>

      {/* Global Footer */}
      <RnDFooter />
    </div>
  );
}
