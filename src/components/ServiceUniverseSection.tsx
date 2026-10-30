"use client";

import React, { useState, useEffect, useRef, useMemo, useCallback } from "react";
import Link from "next/link";
import {
  Sparkles,
  ArrowUpRight,
  Code2,
  TrendingUp,
  Palette,
  Video,
  RotateCw,
  Play,
  Pause,
  Compass,
  Layers,
  ChevronRight,
  Info,
  CheckCircle2,
} from "lucide-react";

// ============================================================================
// GENUINE BRAND SVG ICONS (Clean Dark Theme / Silver & Amber Halos)
// ============================================================================

export function ToolBrandIcon({ name, className = "w-6 h-6" }: { name: string; className?: string }) {
  const norm = name.toLowerCase().replace(/[^a-z0-9]/g, "");

  // React
  if (norm.includes("react")) {
    return (
      <svg className={className} viewBox="-11.5 -10.23174 23 20.46348" fill="currentColor">
        <circle cx="0" cy="0" r="2.05" />
        <g stroke="currentColor" strokeWidth="1" fill="none">
          <ellipse rx="11" ry="4.2" />
          <ellipse rx="11" ry="4.2" transform="rotate(60)" />
          <ellipse rx="11" ry="4.2" transform="rotate(120)" />
        </g>
      </svg>
    );
  }

  // Next.js
  if (norm.includes("next")) {
    return (
      <svg className={className} viewBox="0 0 180 180" fill="currentColor">
        <mask height="180" id="mask-next" maskUnits="userSpaceOnUse" width="180" x="0" y="0" style={{ maskType: "alpha" }}>
          <circle cx="90" cy="90" fill="black" r="90" />
        </mask>
        <g mask="url(#mask-next)">
          <circle cx="90" cy="90" data-theme="dark" fill="none" r="90" stroke="currentColor" strokeWidth="6" />
          <path d="M149.508 157.52L69.142 54H54V125.97H66.1136V69.3836L139.999 164.845C143.333 162.614 146.509 160.165 149.508 157.52Z" />
          <rect height="72" width="12" x="115" y="54" />
        </g>
      </svg>
    );
  }

  // Node.js
  if (norm.includes("node")) {
    return (
      <svg className={className} viewBox="0 0 256 289" fill="currentColor">
        <path d="M128 0L24 60v120l104 60 104-60V60L128 0zm79 164l-79 45-79-45V75l79-45 79 45v89z" />
        <path d="M128 72l-48 28v56l48 28 48-28v-56l-48-28zm26 67l-26 15-26-15v-30l26-15 26 15v30z" opacity="0.6" />
      </svg>
    );
  }

  // MongoDB
  if (norm.includes("mongo")) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C11.66 0 11.23.16 10.95.42C8.6 2.5 4.5 7.6 4.5 12.87C4.5 17.65 8.1 21.6 12 24C15.9 21.6 19.5 17.65 19.5 12.87C19.5 7.6 15.4 2.5 13.05.42C12.77.16 12.34 0 12 0ZM12 2.37C13.2 4.07 17.2 9.5 17.2 12.87C17.2 16.5 14.5 19.8 12 21.75V2.37ZM12 21.75C9.5 19.8 6.8 16.5 6.8 12.87C6.8 9.5 10.8 4.07 12 2.37V21.75Z" />
      </svg>
    );
  }

  // PostgreSQL / SQL
  if (norm.includes("sql") || norm.includes("postgres")) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor">
        <ellipse cx="12" cy="5" rx="8" ry="3" fill="none" stroke="currentColor" strokeWidth="1.8" />
        <path d="M4 5v6c0 1.66 3.58 3 8 3s8-1.34 8-3V5" fill="none" stroke="currentColor" strokeWidth="1.8" />
        <path d="M4 11v6c0 1.66 3.58 3 8 3s8-1.34 8-3v-6" fill="none" stroke="currentColor" strokeWidth="1.8" />
      </svg>
    );
  }

  // Flutter
  if (norm.includes("flutter")) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M14.314 0L2.3 12 6 15.7 21.686 0h-7.372zM14.314 11.143L7.743 17.714l3.7 3.7 2.871-2.871 4.572 4.571H22.6l-8.286-8.271v.286z" />
      </svg>
    );
  }

  // Figma
  if (norm.includes("figma")) {
    return (
      <svg className={className} viewBox="0 0 38 57" fill="currentColor">
        <path d="M19 28.5C19 23.2533 23.2533 19 28.5 19C33.7467 19 38 23.2533 38 28.5C38 33.7467 33.7467 38 28.5 38C23.2533 38 19 33.7467 19 28.5Z" />
        <path d="M0 47.5C0 42.2533 4.25329 38 9.5 38H19V47.5C19 52.7467 14.7467 57 9.5 57C4.25329 57 0 52.7467 0 47.5Z" />
        <path d="M0 28.5C0 23.2533 4.25329 19 9.5 19H19V38H9.5C4.25329 38 0 33.7467 0 28.5Z" />
        <path d="M0 9.5C0 4.25329 4.25329 0 9.5 0H19V19H9.5C4.25329 19 0 14.7467 0 9.5Z" />
        <path d="M19 0H28.5C33.7467 0 38 4.25329 38 9.5C38 14.7467 33.7467 19 28.5 19H19V0Z" />
      </svg>
    );
  }

  // PHP
  if (norm.includes("php")) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 3C4.5 3 0 7.5 0 12s4.5 9 12 9 12-4.5 12-9-4.5-9-12-9zm-6.2 12.3H4.1l1.4-6.6h2.8c1.3 0 2.2.6 1.9 2-.4 1.8-1.5 2.6-2.9 2.6H6.1l-.3 2zm2.1-3.6h.8c.8 0 1.3-.4 1.5-1.1.2-.6 0-1-.6-1h-.9l-.8 2.1zm5.2 3.6h-1.6l1.4-6.6h1.6l-.5 2.3h1.8c1.3 0 2.1.6 1.8 2-.4 1.8-1.5 2.6-2.9 2.6h-1.2l-.4 1.7zm2.1-3.6h.8c.8 0 1.3-.4 1.5-1.1.2-.6 0-1-.6-1h-.9l-.8 2.1zm5.2 3.6h-1.7l1.4-6.6h2.8c1.3 0 2.2.6 1.9 2-.4 1.8-1.5 2.6-2.9 2.6h-1.2l-.3 2zm2.1-3.6h.8c.8 0 1.3-.4 1.5-1.1.2-.6 0-1-.6-1h-.9l-.8 2.1z" />
      </svg>
    );
  }

  // Laravel
  if (norm.includes("laravel")) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M21.7 6.4L13.1 1.4c-.7-.4-1.5-.4-2.2 0L2.3 6.4c-.7.4-1.1 1.1-1.1 1.9v9.9c0 .8.4 1.5 1.1 1.9l8.6 5c.7.4 1.5.4 2.2 0l8.6-5c.7-.4 1.1-1.1 1.1-1.9V8.3c0-.8-.4-1.5-1.1-1.9zM12 3.6l7.1 4.1-3.2 1.8-7.1-4.1L12 3.6zm-1 16.8l-7.1-4.1V9.5l7.1 4.1v6.8zm2 0v-6.8l7.1-4.1v6.8l-7.1 4.1z" />
      </svg>
    );
  }

  // TypeScript
  if (norm.includes("type") || norm.includes("ts")) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor">
        <rect x="2" y="2" width="20" height="20" rx="3" fill="none" stroke="currentColor" strokeWidth="2" />
        <path d="M6 8h6m-3 0v9m4-5c1 0 2.5-.2 3.3.4.6.5.7 1.2.5 1.8-.4 1.4-2.5 1.8-3.8 1.8-1.2 0-2.3-.2-3-.6m0-6.4c.8-.4 1.9-.6 3-.6 1.5 0 3 .5 3 2 0 1.2-.9 1.8-2 2.2l-2 .8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      </svg>
    );
  }

  // Docker
  if (norm.includes("docker")) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M13 3h2v2h-2zm-3 0h2v2h-2zm6 3h2v2h-2zm-3 0h2v2h-2zm-3 0h2v2h-2zm-3 0h2v2H7zm9 3h2v2h-2zm-3 0h2v2h-2zm-3 0h2v2H7zm-3 0h2v2H4zm17.9 2.5c-.3-.2-1.3-.4-2.4-.2-.2-.6-.5-1.1-.9-1.5l-.6.4c.4.6.6 1.4.5 2.1-.5.3-1.6.4-2.5.4H1c-.3 1.8.2 5.5 3.3 7.8 2.6 1.9 6.2 1.9 9.8 1.9 6.4 0 9.8-3.5 9.8-7.7 0-.9-.2-2.3-2-3.2z" />
      </svg>
    );
  }

  // Python
  if (norm.includes("python")) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M11.9 1.2c-5.2 0-4.9 2.3-4.9 2.3v2.4h5v.7H4.9s-3.7-.4-3.7 4.9 3.2 5.1 3.2 5.1h1.9v-2.7s-.1-3.2 3.2-3.2h5.1s3.1.1 3.1-3.1V4.4s.4-3.2-5.8-3.2zm-2.7 1.8c.6 0 1 .4 1 1s-.4 1-1 1-1-.4-1-1 .4-1 1-1zm2.9 19.8c5.2 0 4.9-2.3 4.9-2.3v-2.4h-5v-.7h7.1s3.7.4 3.7-4.9-3.2-5.1-3.2-5.1h-1.9v2.7s.1 3.2-3.2 3.2h-5.1s-3.1-.1-3.1 3.1v3.2s-.4 3.2 5.8 3.2zm2.7-1.8c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1z" />
      </svg>
    );
  }

  // Google Analytics / GA4
  if (norm.includes("analytics") || norm.includes("ga4")) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M21 21H3V3h2v16h16v2zM7 17h2v-5H7v5zm5 0h2V7h-2v10zm5 0h2v-8h-2v8z" />
        <circle cx="18" cy="6" r="2" fill="currentColor" />
      </svg>
    );
  }

  // Google Ads
  if (norm.includes("googleads") || norm.includes("ads")) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M3.5 14.5l5.8-10.1c.8-1.4 2.6-1.9 4-1.1l1.5.9c1.4.8 1.9 2.6 1.1 4L10.1 18.3c-.8 1.4-2.6 1.9-4 1.1l-1.5-.9c-1.4-.8-1.9-2.6-1.1-4z" opacity="0.8" />
        <circle cx="17.5" cy="17.5" r="4.5" fill="none" stroke="currentColor" strokeWidth="2" />
        <path d="M10.1 18.3l7.4-4.3" stroke="currentColor" strokeWidth="2" />
      </svg>
    );
  }

  // Meta Ads / Meta
  if (norm.includes("meta")) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M16.8 5.4c-1.9 0-3.6 1.1-4.8 2.8-1.2-1.7-2.9-2.8-4.8-2.8C3.2 5.4 0 8.5 0 12.8c0 4.6 3.7 8.2 7.7 8.2 2.6 0 4.3-1.4 5.1-2.4.8 1 2.5 2.4 5.1 2.4 4 0 7.7-3.6 7.7-8.2-.1-4.3-3.3-7.4-7.8-7.4zm-9.6 13c-2.8 0-5.1-2.4-5.1-5.6 0-3.1 2.2-5.4 5.1-5.4 2.3 0 4 1.9 4.9 3.8-.9 2.1-2.5 7.2-4.9 7.2zm10.4 0c-2.4 0-4-5.1-4.9-7.2.9-1.9 2.6-3.8 4.9-3.8 2.9 0 5.1 2.3 5.1 5.4 0 3.2-2.3 5.6-5.1 5.6z" />
      </svg>
    );
  }

  // SEMrush
  if (norm.includes("semrush")) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15.5v-3.8l3.3 2.2-4.3-8.4v4.4L8.7 9.7 13 17.5z" />
      </svg>
    );
  }

  // Ahrefs
  if (norm.includes("ahrefs")) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2L2 22h5l2.5-5.5h5L17 22h5L12 2zm-1.2 11.5L12 7.8l1.2 5.7h-2.4z" />
      </svg>
    );
  }

  // HubSpot
  if (norm.includes("hubspot")) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.5 7.5c-.8 0-1.5.4-1.9 1l-3.3-2.1c.1-.4.2-.9.2-1.4 0-2.2-1.8-4-4-4s-4 1.8-4 4c0 1.9 1.3 3.5 3.1 3.9v5.2c-.8.4-1.4 1.1-1.7 2l-2.4-.7c-.2-.6-.8-1-1.5-1-1 0-1.8.8-1.8 1.8s.8 1.8 1.8 1.8c.8 0 1.5-.5 1.7-1.2l2.5.7c.3 1.2 1.3 2.1 2.6 2.1 1.5 0 2.8-1.3 2.8-2.8 0-.9-.5-1.8-1.2-2.3V12c.7-.2 1.3-.7 1.6-1.3l3.3 2.1c0 .2-.1.5-.1.7 0 1.7 1.3 3 3 3s3-1.3 3-3-1.3-3-3-3zm-9-4c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2z" />
      </svg>
    );
  }

  // Google Tag Manager
  if (norm.includes("tagmanager") || norm.includes("gtm")) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2L2 12l10 10 10-10L12 2zm0 4.2L17.8 12 12 17.8 6.2 12 12 6.2z" />
        <circle cx="12" cy="12" r="2.5" />
      </svg>
    );
  }

  // Adobe Illustrator
  if (norm.includes("illustrator")) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor">
        <rect x="2" y="2" width="20" height="20" rx="4" fill="none" stroke="currentColor" strokeWidth="2" />
        <path d="M6 16.5l3.5-9h1L14 16.5h-1.6l-.8-2.3H8.4l-.8 2.3H6zm2.8-3.8h2.4l-1.2-3.6-1.2 3.6zm8.2 3.8h-1.6V10h1.6v6.5zm0-8h-1.6V7h1.6v1.5z" />
      </svg>
    );
  }

  // Adobe Photoshop
  if (norm.includes("photoshop")) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor">
        <rect x="2" y="2" width="20" height="20" rx="4" fill="none" stroke="currentColor" strokeWidth="2" />
        <path d="M6 7.5h4.2c1.8 0 3 1.1 3 2.7s-1.2 2.8-3 2.8H7.8v3.5H6V7.5zm1.8 4h2.2c.9 0 1.5-.5 1.5-1.3s-.6-1.3-1.5-1.3H7.8v2.6zm6.8 5c.8.3 1.8.5 2.6.5 1.5 0 2.4-.7 2.4-1.8 0-1-.7-1.5-2.1-2-1.4-.5-2.5-1.2-2.5-2.4 0-1.5 1.2-2.5 3-2.5.9 0 1.8.2 2.4.5l-.5 1.4c-.6-.3-1.2-.4-1.9-.4-1 0-1.6.6-1.6 1.3 0 .8.6 1.2 1.9 1.7 1.6.6 2.7 1.3 2.7 2.6 0 1.7-1.3 2.7-3.3 2.7-1.1 0-2.2-.3-2.9-.6l.3-1.6z" />
      </svg>
    );
  }

  // Blender
  if (norm.includes("blender")) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M12.5 10.5c-2.8 0-5 2.2-5 5s2.2 5 5 5 5-2.2 5-5-2.2-5-5-5zm0 7.8c-1.5 0-2.8-1.2-2.8-2.8s1.2-2.8 2.8-2.8 2.8 1.2 2.8 2.8-1.3 2.8-2.8 2.8zM4.2 10.2L9 13.5l-1.5 2.6L2.7 12.8c-.5-.3-.7-.9-.4-1.4.3-.5.9-.7 1.4-.4l.5-.8zm15.6 0l-.5.8c.5-.3 1.1-.1 1.4.4.3.5.1 1.1-.4 1.4L16.5 16.1 15 13.5l4.8-3.3zM12 2.5l1.5 6.5h-3L12 2.5z" />
      </svg>
    );
  }

  // Spline 3D
  if (norm.includes("spline")) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm0 3c3.9 0 7 3.1 7 7 0 2.2-1 4.2-2.6 5.5-1.2-1.8-3.2-3-5.4-3-2.2 0-4.2 1.2-5.4 3C4 16.2 3 14.2 3 12c0-3.9 3.1-7 7-7zm0 6.5c1.4 0 2.5 1.1 2.5 2.5S13.4 16.5 12 16.5 9.5 15.4 9.5 14s1.1-2.5 2.5-2.5z" />
      </svg>
    );
  }

  // Framer
  if (norm.includes("framer")) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M4 0h16v8h-8zM4 8h8l8 8H4zM4 16h8v8z" />
      </svg>
    );
  }

  // Premiere Pro
  if (norm.includes("premiere")) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor">
        <rect x="2" y="2" width="20" height="20" rx="4" fill="none" stroke="currentColor" strokeWidth="2" />
        <path d="M6 7.5h4c1.8 0 3 1 3 2.6s-1.2 2.6-3 2.6H7.8v3.8H6V7.5zm1.8 3.8h2c.8 0 1.4-.4 1.4-1.2s-.6-1.2-1.4-1.2H7.8v2.4zm7.2 5.2h-1.6V10h1.5v1.2c.4-.8 1.2-1.3 2.1-1.3h.5v1.6h-.6c-1.1 0-1.9.8-1.9 2.1v2.9z" />
      </svg>
    );
  }

  // DaVinci Resolve
  if (norm.includes("davinci") || norm.includes("resolve")) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor">
        <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeWidth="2" />
        <path d="M12 6a6 6 0 0 1 6 6h-6V6zm0 12a6 6 0 0 1-6-6h6v6zm-6-6a6 6 0 0 1 6-6v6H6z" opacity="0.7" />
      </svg>
    );
  }

  // After Effects
  if (norm.includes("aftereffects") || norm.includes("ae")) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor">
        <rect x="2" y="2" width="20" height="20" rx="4" fill="none" stroke="currentColor" strokeWidth="2" />
        <path d="M5.5 16.5l3.2-9h1.1l3.2 9h-1.6l-.7-2.3H7.8l-.7 2.3H5.5zm2.7-3.8h2.1l-1-3.4-1.1 3.4zm6.6 2.3c.7.4 1.6.6 2.4.6 1.8 0 2.8-.9 2.8-2.2 0-2.3-3.2-1.9-3.2-3.1 0-.5.4-.8 1.1-.8.7 0 1.4.2 2 .5l.5-1.2c-.6-.4-1.5-.6-2.4-.6-1.7 0-2.8.9-2.8 2.2 0 2.2 3.2 1.8 3.2 3.1 0 .6-.5.9-1.2.9-.8 0-1.7-.3-2.3-.7l-.6 1.3z" />
      </svg>
    );
  }

  // RED Digital Cinema
  if (norm.includes("red")) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M3 5h6c3 0 5 1.5 5 4s-1.8 3.8-4.2 4L14 20h-3.2l-3.8-6.5H5.8V20H3V5zm2.8 6.2h3c1.4 0 2.2-.7 2.2-1.7s-.8-1.7-2.2-1.7h-3v3.4zm10.2-6.2H21v15h-5v-2.8h2.2V7.8H16V5z" />
      </svg>
    );
  }

  // Unreal Engine
  if (norm.includes("unreal")) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor">
        <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeWidth="2" />
        <path d="M12 4c-4.4 0-8 3.6-8 8 0 2.7 1.4 5.1 3.5 6.5l1.6-2.5C7.9 15.1 7 13.7 7 12c0-2.8 2.2-5 5-5s5 2.2 5 5c0 1.7-.9 3.1-2.1 4l1.6 2.5C18.6 17.1 20 14.7 20 12c0-4.4-3.6-8-8-8zm-2 5v5.5c0 1.1.9 2 2 2s2-.9 2-2V9h-1.5v5c0 .3-.2.5-.5.5s-.5-.2-.5-.5V9H10z" />
      </svg>
    );
  }

  // Default fallback chip
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="4" y="4" width="16" height="16" rx="2" />
      <path d="M9 9h6v6H9z" />
    </svg>
  );
}

// ============================================================================
// DATA: 4 CORE SERVICE DIVISIONS & TOOLS
// ============================================================================

interface ToolItem {
  id: string;
  name: string;
  tagline: string;
  role: string;
  badge: string;
  version: string;
}

interface ServiceDivision {
  id: string;
  index: string;
  tierNumber: number;
  title: string;
  shortTitle: string;
  tagline: string;
  description: string;
  icon: React.ElementType;
  accentGlow: string;
  discTheme: string;
  tools: ToolItem[];
}

const SERVICE_DIVISIONS: ServiceDivision[] = [
  {
    id: "technology-solutions",
    index: "01",
    tierNumber: 1,
    title: "Technology Solutions",
    shortTitle: "Technology",
    tagline: "High-Performance Full-Stack & Cloud Frameworks",
    description:
      "Enterprise microservices, reactive frontend architectures, scalable distributed databases, and fault-tolerant cloud deployments engineered for sub-second latency.",
    icon: Code2,
    accentGlow: "#FFD400",
    discTheme: "from-[#FFD400]/25 via-blue-500/15 to-transparent",
    tools: [
      { id: "react", name: "React.js", tagline: "60 FPS Virtual DOM & Component Architecture", role: "Frontend Engine", badge: "Reactive", version: "v19.0" },
      { id: "nextjs", name: "Next.js", tagline: "Server Components & Edge Caching", role: "Full-Stack Web", badge: "Production", version: "v15.2" },
      { id: "nodejs", name: "Node.js", tagline: "Asynchronous High-Throughput I/O Runtime", role: "Backend Microservices", badge: "V8 Engine", version: "v22 LTS" },
      { id: "mongodb", name: "MongoDB", tagline: "Document Database with Auto-Sharding", role: "NoSQL Database", badge: "High-Scale", version: "v7.0" },
      { id: "postgresql", name: "SQL & PostgreSQL", tagline: "ACID Relational Storage & JSONB indexing", role: "Core Database", badge: "Zero-Loss", version: "v16.1" },
      { id: "flutter", name: "Flutter", tagline: "Cross-Platform Native iOS & Android Engine", role: "Mobile Native", badge: "Single Codebase", version: "v3.24" },
      { id: "figma-tech", name: "Figma", tagline: "Design Tokens & Design-to-Code Pipeline", role: "Design Token Sync", badge: "Collaborative", version: "Cloud" },
      { id: "php", name: "PHP", tagline: "Modern Modernized Backend Runtime & APIs", role: "Server Runtime", badge: "Reliable", version: "v8.3" },
      { id: "laravel", name: "Laravel", tagline: "Elegant MVC Backend with Eloquent ORM", role: "Enterprise API", badge: "Robust", version: "v11.x" },
      { id: "docker", name: "Docker", tagline: "Containerization & Multi-Arch Builds", role: "Cloud DevOps", badge: "Immutable", version: "Engine" },
      { id: "typescript", name: "TypeScript", tagline: "Strict Type Safety & Compiler Contracts", role: "Language", badge: "Zero Runtime Bugs", version: "v5.6" },
      { id: "python", name: "Python", tagline: "AI Model Serving & Data Pipelines", role: "AI / Backend", badge: "Neural Mesh", version: "v3.12" },
    ],
  },
  {
    id: "digital-marketing",
    index: "02",
    tierNumber: 2,
    title: "Digital Marketing",
    shortTitle: "Marketing",
    tagline: "Programmatic Search, Attribution & Multi-Channel Funnels",
    description:
      "Algorithmic audience discovery, automated bid tuning, deep-crawl technical backlink telemetry, and multi-touch attribution delivering compounding return on capital.",
    icon: TrendingUp,
    accentGlow: "#38bdf8",
    discTheme: "from-[#38bdf8]/25 via-indigo-500/15 to-transparent",
    tools: [
      { id: "ga4", name: "Google Analytics 4", tagline: "Event-Driven Telemetry & Funnel Dropoff Audits", role: "Analytics", badge: "Telemetry", version: "GA4 Enterprise" },
      { id: "gads", name: "Google Ads", tagline: "Search, Shopping & High-Intent Intent Bidding", role: "Paid PPC", badge: "High-ROI", version: "Smart Bidding" },
      { id: "metaads", name: "Meta Ads", tagline: "Hyper-Targeted Social Acquisition & CBO", role: "Paid Social", badge: "Lookalike", version: "Advantage+" },
      { id: "semrush", name: "SEMrush", tagline: "Keyword Topology, SERP Gap & Organic Intelligence", role: "SEO Research", badge: "SERP Dominance", version: "Suite" },
      { id: "ahrefs", name: "Ahrefs", tagline: "Deep Backlink Graph Exploration & Domain Authority", role: "Authority SEO", badge: "Crawler", version: "v3 Mesh" },
      { id: "hubspot", name: "HubSpot", tagline: "Inbound Pipeline Automation & Lifecycle Lead Routing", role: "CRM & Funnel", badge: "Automation", version: "Enterprise" },
      { id: "gtm", name: "Google Tag Manager", tagline: "Server-Side Event Pipelines & Conversions API", role: "Tag Governance", badge: "Sub-10ms", version: "Serverless" },
      { id: "search-console", name: "Search Console", tagline: "Indexation Health, Core Web Vitals & Crawl Budget", role: "Crawl Diagnostics", badge: "Real-Time", version: "Cloud" },
    ],
  },
  {
    id: "branding-design",
    index: "03",
    tierNumber: 3,
    title: "Branding and design",
    shortTitle: "Branding",
    tagline: "Spatial 3D Design Systems, Identity & High-Prestige Typography",
    description:
      "Transforming raw concepts into iconic luxury identities, spatial WebGL visual frameworks, and unified multi-touchpoint brand token architectures.",
    icon: Palette,
    accentGlow: "#c084fc",
    discTheme: "from-[#c084fc]/25 via-pink-500/15 to-transparent",
    tools: [
      { id: "figma-brand", name: "Figma", tagline: "Vector Design Systems & Interactive Prototyping", role: "UI/UX Master", badge: "Live Canvas", version: "Auto-Layout" },
      { id: "illustrator", name: "Adobe Illustrator", tagline: "Precision Vector Identity & Geometric Glyphs", role: "Identity Craft", badge: "Vector Math", version: "CC 2026" },
      { id: "photoshop", name: "Adobe Photoshop", tagline: "Editorial Retouching, Key Visuals & Textures", role: "Key Visuals", badge: "Pixel Master", version: "CC 2026" },
      { id: "blender-design", name: "Blender 3D", tagline: "Photorealistic PBR Asset Baking & Volumetric CGI", role: "Spatial 3D", badge: "Cycles Render", version: "v4.2" },
      { id: "spline", name: "Spline 3D", tagline: "Real-Time Interactive 3D for Modern Browsers", role: "Interactive WebGL", badge: "60 FPS", version: "Engine" },
      { id: "framer", name: "Framer", tagline: "High-Velocity Spatial Interactive Landing Experiences", role: "Motion Web", badge: "Live Code", version: "React Mesh" },
      { id: "aftereffects-design", name: "After Effects", tagline: "Kinetic Typography & Brand Micro-Interactions", role: "Motion Branding", badge: "Timeline", version: "CC 2026" },
    ],
  },
  {
    id: "media-production",
    index: "04",
    tierNumber: 4,
    title: "Media production",
    shortTitle: "Media",
    tagline: "8K Cinema Cameras, VFX, DaVinci Grading & Immersive Audio",
    description:
      "High-production commercial films, extreme-environment drone cinematography, Hollywood-grade color grading, and Dolby Atmos spatial audio mixing.",
    icon: Video,
    accentGlow: "#f43f5e",
    discTheme: "from-[#f43f5e]/25 via-amber-500/15 to-transparent",
    tools: [
      { id: "premiere", name: "Premiere Pro", tagline: "Cinema Narrative Assembly & Multi-Cam Sync", role: "Video Editorial", badge: "8K Timeline", version: "CC 2026" },
      { id: "davinci", name: "DaVinci Resolve", tagline: "ACES Color Grading & Fairlight Sound Mastery", role: "Color & Audio", badge: "Studio Grade", version: "Studio 19" },
      { id: "aftereffects", name: "After Effects", tagline: "3D Camera Tracking, Screen Replace & Compositing", role: "VFX & Motion", badge: "Compositor", version: "CC 2026" },
      { id: "red-cinema", name: "RED Digital Cinema", tagline: "8K Monstro Sensor & 16-Bit RAW Film Mastering", role: "Cinema Camera", badge: "8K DCI", version: "V-Raptor" },
      { id: "unreal", name: "Unreal Engine", tagline: "Real-Time Virtual Production & In-Camera VFX", role: "Virtual Stages", badge: "Lumen & Nanite", version: "v5.4" },
      { id: "blender-media", name: "Blender CGI", tagline: "Particle Simulations, Rigid Body Dynamics & FX", role: "3D Animation", badge: "GPU Accelerated", version: "v4.2" },
    ],
  },
];

export default function ServiceUniverseSection() {
  const [activeDivisionIdx, setActiveDivisionIdx] = useState<number>(0);
  const [rotationAngle, setRotationAngle] = useState<number>(0);
  const [isAutoRotating, setIsAutoRotating] = useState<boolean>(true);
  const [selectedTool, setSelectedTool] = useState<ToolItem | null>(null);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [dragStartX, setDragStartX] = useState<number>(0);

  const activeDivision = SERVICE_DIVISIONS[activeDivisionIdx];
  const totalTools = activeDivision.tools.length;

  // Set default selected tool on division change
  useEffect(() => {
    setSelectedTool(activeDivision.tools[0]);
  }, [activeDivisionIdx, activeDivision.tools]);

  // Smooth continuous auto-rotation loop
  useEffect(() => {
    if (!isAutoRotating || isDragging) return;

    let animId: number;
    let lastTime = performance.now();

    const updateRotation = (currentTime: number) => {
      const delta = currentTime - lastTime;
      lastTime = currentTime;
      // ~18 degrees per second for silky celestial spin
      setRotationAngle((prev) => (prev + (delta * 0.018)) % 360);
      animId = requestAnimationFrame(updateRotation);
    };

    animId = requestAnimationFrame(updateRotation);
    return () => cancelAnimationFrame(animId);
  }, [isAutoRotating, isDragging]);

  // Drag interaction to spin 360 degrees manually
  const handlePointerDown = (e: React.PointerEvent) => {
    setIsDragging(true);
    setDragStartX(e.clientX);
    setIsAutoRotating(false);
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isDragging) return;
    const deltaX = e.clientX - dragStartX;
    setRotationAngle((prev) => (prev + deltaX * 0.35 + 360) % 360);
    setDragStartX(e.clientX);
  };

  const handlePointerUp = () => {
    setIsDragging(false);
  };

  return (
    <section
      id="service-universe"
      className="relative py-20 sm:py-28 lg:py-32 text-white overflow-hidden scroll-mt-20 select-none"
    >
      {/* Background Celestial Mist (Dark Theme / Subtle Cyan-Amber Glow Matching Image) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1100px] h-[700px] bg-gradient-to-b from-[#38bdf8]/[0.03] via-[#FFD400]/[0.02] to-transparent rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12 relative z-10">
        
        {/* =========================================================================
            HEADER: TITLE & DARK CYBER BADGE
            ========================================================================= */}
        <div className="text-center max-w-4xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-medium tracking-[0.25em] uppercase mb-4 bg-black/70 border border-[#FFD400]/40 text-[#FFD400] backdrop-blur-md shadow-sm">
            <Sparkles className="w-3.5 h-3.5" />
            <span>2.2 SERVICE UNIVERSE // MULTIVERSE TECH STACK</span>
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-7xl font-[family-name:var(--font-bebas)] tracking-wide uppercase leading-[0.92] text-white drop-shadow-[0_4px_24px_rgba(0,0,0,0.95)]">
            MULTIVERSE <span className="text-[#FFD400]">TECHNOLOGY ARCHITECTURE</span>
          </h2>
          <p className="text-xs sm:text-sm md:text-base font-normal mt-3 leading-relaxed text-neutral-300 max-w-2xl mx-auto font-[family-name:var(--font-jakarta)]">
            Explore our specialized tools across all 4 service divisions. The multi-tiered cosmic discs rotate in 360 degrees—drag to explore or inspect genuine tool specifications.
          </p>
        </div>

        {/* =========================================================================
            DIVISION SWITCHER PILLS (DARK THEME - NO COLORFUL CLUTTER)
            ========================================================================= */}
        <div className="flex items-center justify-center gap-2 sm:gap-3 flex-wrap mb-10">
          {SERVICE_DIVISIONS.map((div, dIdx) => {
            const isActive = activeDivisionIdx === dIdx;
            const Icon = div.icon;

            return (
              <button
                key={div.id}
                onClick={() => {
                  setActiveDivisionIdx(dIdx);
                  setRotationAngle(0);
                }}
                className={`group relative inline-flex items-center gap-2.5 px-4 sm:px-6 py-2.5 rounded-full text-xs sm:text-sm font-mono tracking-wider uppercase transition-all duration-300 cursor-pointer ${
                  isActive
                    ? "bg-[#0c0e14] text-[#FFD400] border border-[#FFD400] shadow-[0_0_25px_rgba(255,212,0,0.25)] font-bold"
                    : "bg-white/[0.03] text-neutral-400 hover:text-white border border-white/10 hover:border-white/30 hover:bg-white/[0.06]"
                }`}
              >
                <span className="text-[10px] font-mono text-[#FFD400]">{div.index}</span>
                <Icon className={`w-4 h-4 transition-transform ${isActive ? "text-[#FFD400]" : "text-neutral-400 group-hover:text-white"}`} />
                <span>{div.title}</span>
                <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-white/10 text-neutral-300 ml-1">
                  {div.tools.length}
                </span>
              </button>
            );
          })}
        </div>

        {/* =========================================================================
            3D COSMIC STACKED DISCS STAGE (EXACT LAYOUT OF REFERENCE IMAGE)
            - Vertically stacked glowing discs in 3D perspective
            - Vertical luminous threads running through the discs with bead nodes
            - Suspended planetary spheres & atomic rings on the side threads
            - 360-degree rotating orbital tool ring around the active disc
            ========================================================================= */}
        <div className="relative rounded-[32px] sm:rounded-[44px] bg-[#07080c]/90 border border-white/10 shadow-[0_20px_80px_rgba(0,0,0,0.9)] overflow-hidden p-4 sm:p-8 lg:p-12 mb-12">
          
          {/* Subtle Cyber Grid Background */}
          <div className="absolute inset-0 bg-[radial-gradient(#ffffff0a_1px,transparent_1px)] [background-size:28px_28px] pointer-events-none" />

          {/* Top Stage Control Strip */}
          <div className="relative z-30 flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-white/10 text-xs font-mono">
            <div className="flex items-center gap-3">
              <span className="px-2.5 py-1 rounded bg-[#FFD400]/10 border border-[#FFD400]/30 text-[#FFD400] font-bold">
                TIER 0{activeDivision.tierNumber} // {activeDivision.shortTitle.toUpperCase()}
              </span>
              <span className="text-neutral-400 hidden sm:inline">
                {activeDivision.tagline}
              </span>
            </div>

            {/* 360° Controls: Play/Pause, Angle readout, Step rotation */}
            <div className="flex items-center gap-2">
              <span className="text-[11px] text-neutral-400 tracking-wider">
                ORBIT: <span className="text-[#FFD400] font-bold">{Math.round(rotationAngle)}°</span>
              </span>

              <button
                onClick={() => setIsAutoRotating(!isAutoRotating)}
                className="p-2 rounded-full bg-white/[0.05] hover:bg-white/[0.1] border border-white/15 text-white transition-colors cursor-pointer"
                title={isAutoRotating ? "Pause 360° Rotation" : "Resume 360° Rotation"}
              >
                {isAutoRotating ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5 text-[#FFD400]" />}
              </button>

              <button
                onClick={() => setRotationAngle((prev) => (prev + 45) % 360)}
                className="px-2.5 py-1.5 rounded-full bg-white/[0.05] hover:bg-white/[0.1] border border-white/15 text-white text-[11px] font-mono transition-colors cursor-pointer flex items-center gap-1"
                title="Rotate +45°"
              >
                <RotateCw className="w-3 h-3 text-[#FFD400]" />
                <span>+45°</span>
              </button>
            </div>
          </div>

          {/* MAIN 3D VISUAL VIEWPORT (Interactive Drag to Rotate 360°) */}
          <div
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerUp}
            className="relative w-full h-[540px] sm:h-[620px] lg:h-[680px] flex items-center justify-center cursor-grab active:cursor-grabbing perspective-[1200px]"
          >
            {/* Center Vertical Light Shaft (Cosmic Beam passing through all discs) */}
            <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-[2px] bg-gradient-to-b from-transparent via-[#FFD400]/40 to-transparent pointer-events-none" />
            <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-[16px] bg-gradient-to-b from-transparent via-blue-400/10 to-transparent blur-[6px] pointer-events-none" />

            {/* Suspended Vertical Side Threads (Left & Right hanging threads with bead planets) */}
            {/* Left Thread 1 */}
            <div className="absolute top-8 bottom-8 left-[12%] sm:left-[18%] w-[1px] bg-white/15 pointer-events-none">
              <div className="absolute top-[20%] -left-2 w-4 h-4 rounded-full bg-[#141a29] border border-cyan-400/50 shadow-[0_0_12px_rgba(56,189,248,0.5)]" />
              <div className="absolute top-[55%] -left-1.5 w-3 h-3 rounded-full bg-[#1b1f2e] border border-white/30" />
            </div>

            {/* Left Thread 2 (With Atomic Ring like reference image) */}
            <div className="absolute top-4 bottom-4 left-[24%] sm:left-[28%] w-[1px] bg-white/10 pointer-events-none hidden sm:block">
              <div className="absolute top-[35%] -left-3 w-6 h-6 rounded-full border border-[#FFD400]/40 flex items-center justify-center animate-spin" style={{ animationDuration: "12s" }}>
                <span className="w-1.5 h-1.5 rounded-full bg-[#FFD400]" />
              </div>
              <div className="absolute top-[75%] -left-1.5 w-3 h-3 rounded-full bg-cyan-950 border border-cyan-400/30" />
            </div>

            {/* Right Thread 1 */}
            <div className="absolute top-8 bottom-8 right-[12%] sm:right-[18%] w-[1px] bg-white/15 pointer-events-none">
              <div className="absolute top-[30%] -left-3 w-6 h-6 rounded-full bg-[#121622] border border-[#FFD400]/50 shadow-[0_0_14px_rgba(255,212,0,0.4)]" />
              <div className="absolute top-[65%] -left-1.5 w-3 h-3 rounded-full bg-neutral-900 border border-white/30" />
            </div>

            {/* Right Thread 2 (With Hanging Orb) */}
            <div className="absolute top-4 bottom-4 right-[24%] sm:right-[28%] w-[1px] bg-white/10 pointer-events-none hidden sm:block">
              <div className="absolute top-[48%] -left-2.5 w-5 h-5 rounded-full bg-[#161a26] border border-purple-400/40 shadow-[0_0_10px_rgba(192,132,252,0.4)]" />
              <div className="absolute top-[18%] -left-1 w-2 h-2 rounded-full bg-white/60" />
            </div>

            {/* =========================================================================
                THE STACKED TIERED DISCS (5 Tiers Vertically Tiered In Perspective)
                ========================================================================= */}
            <div className="relative w-full max-w-[900px] h-full flex flex-col items-center justify-between py-6">
              {[
                { tier: 1, label: "01 TECHNOLOGY", size: "w-[85%] max-w-[760px] h-[80px]", scale: 1.05, y: "-translate-y-4" },
                { tier: 2, label: "02 MARKETING", size: "w-[78%] max-w-[680px] h-[75px]", scale: 0.98, y: "translate-y-0" },
                { tier: 3, label: "03 BRANDING", size: "w-[72%] max-w-[620px] h-[70px]", scale: 0.92, y: "translate-y-2" },
                { tier: 4, label: "04 MEDIA", size: "w-[66%] max-w-[560px] h-[65px]", scale: 0.86, y: "translate-y-4" },
                { tier: 5, label: "05 CORE ENGINE", size: "w-[58%] max-w-[480px] h-[60px]", scale: 0.80, y: "translate-y-6" },
              ].map((plate, pIdx) => {
                const isThisDivision = activeDivisionIdx === pIdx;

                return (
                  <div
                    key={plate.tier}
                    onClick={() => {
                      if (pIdx < 4) {
                        setActiveDivisionIdx(pIdx);
                        setRotationAngle(0);
                      }
                    }}
                    className={`relative ${plate.size} rounded-[100%] transition-all duration-700 cursor-pointer flex items-center justify-center ${
                      isThisDivision
                        ? "z-20 scale-105"
                        : "z-10 hover:scale-[1.02] opacity-75 hover:opacity-100"
                    }`}
                    style={{
                      transform: `perspective(1000px) rotateX(68deg) scale(${plate.scale})`,
                      boxShadow: isThisDivision
                        ? `0 0 50px rgba(255,212,0,0.35), inset 0 0 30px rgba(255,212,0,0.2)`
                        : `0 0 25px rgba(255,255,255,0.06), inset 0 0 15px rgba(255,255,255,0.04)`,
                    }}
                  >
                    {/* Glowing Outer Rim Border */}
                    <div
                      className={`absolute inset-0 rounded-[100%] border transition-colors duration-500 ${
                        isThisDivision
                          ? "border-[#FFD400] shadow-[0_0_20px_#FFD400]"
                          : "border-white/20 hover:border-white/40"
                      }`}
                    />

                    {/* Concentric Inner Ring */}
                    <div className="absolute inset-3 rounded-[100%] border border-white/10 pointer-events-none" />

                    {/* Inner Celestial Plate Fill (Gradient Map mimicking the image) */}
                    <div
                      className={`absolute inset-0 rounded-[100%] bg-gradient-to-r from-[#07090e]/95 via-[#121622]/90 to-[#07090e]/95 backdrop-blur-md pointer-events-none`}
                    />

                    {/* Central Core Glow Beacon */}
                    <div
                      className={`w-10 h-10 rounded-full transition-all duration-500 ${
                        isThisDivision
                          ? "bg-[#FFD400] shadow-[0_0_30px_#FFD400] scale-125"
                          : "bg-white/20"
                      }`}
                    />

                    {/* Disc Edge Label */}
                    <div
                      className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-[10px] font-mono tracking-widest text-neutral-400 uppercase pointer-events-none"
                      style={{ transform: "rotateX(-68deg)" }}
                    >
                      {plate.label}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* =========================================================================
                THE 360-DEGREE ROTATING TOOLS CAROUSEL (ORBITING AROUND ACTIVE TIER)
                ========================================================================= */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div
                className="relative w-[340px] h-[340px] sm:w-[500px] sm:h-[500px] lg:w-[620px] lg:h-[620px] rounded-full pointer-events-auto"
                style={{
                  transformStyle: "preserve-3d",
                  transform: "perspective(1200px) rotateX(68deg)",
                }}
              >
                {/* 360° Orbital Path Ring */}
                <div className="absolute inset-0 rounded-full border border-dashed border-[#FFD400]/40 shadow-[0_0_30px_rgba(255,212,0,0.15)] pointer-events-none" />

                {/* Orbiting Tool Nodes */}
                {activeDivision.tools.map((tool, tIdx) => {
                  // Distribute evenly around 360 degrees
                  const baseAngle = (tIdx / totalTools) * 360;
                  const currentAngle = (baseAngle + rotationAngle) % 360;
                  const rad = (currentAngle * Math.PI) / 180;

                  // Radius from center
                  const radius = typeof window !== "undefined" && window.innerWidth < 640 ? 150 : 260;
                  const x = Math.cos(rad) * radius;
                  const y = Math.sin(rad) * radius;

                  // Z-depth for perspective sizing & stacking
                  const isFront = y > 0;
                  const isSelected = selectedTool?.id === tool.id;

                  return (
                    <div
                      key={tool.id}
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedTool(tool);
                      }}
                      className={`group absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-transform duration-300 cursor-pointer ${
                        isSelected ? "z-30 scale-125" : "z-10 hover:scale-115"
                      }`}
                      style={{
                        transform: `translate(${x}px, ${y}px) rotateX(-68deg)`,
                      }}
                    >
                      {/* Tool Card Node (Dark Theme Silver / Amber Glow) */}
                      <div
                        className={`relative rounded-2xl p-2.5 sm:p-3 flex items-center gap-2.5 transition-all duration-300 shadow-2xl ${
                          isSelected
                            ? "bg-[#0c0e14] border-2 border-[#FFD400] text-[#FFD400] shadow-[0_0_25px_rgba(255,212,0,0.5)]"
                            : "bg-[#090b10]/95 hover:bg-[#111420] border border-white/20 hover:border-white/50 text-white"
                        } backdrop-blur-xl`}
                      >
                        {/* Genuine SVG Brand Icon */}
                        <div
                          className={`w-7 h-7 sm:w-8 sm:h-8 rounded-xl flex items-center justify-center p-1.5 transition-colors shrink-0 ${
                            isSelected
                              ? "bg-[#FFD400]/15 text-[#FFD400]"
                              : "bg-white/[0.06] text-neutral-200 group-hover:text-white"
                          }`}
                        >
                          <ToolBrandIcon name={tool.name} className="w-full h-full" />
                        </div>

                        {/* Tool Name Label */}
                        <div className="flex flex-col pr-1">
                          <span className="text-xs sm:text-sm font-bold font-mono tracking-tight whitespace-nowrap">
                            {tool.name}
                          </span>
                          <span className="text-[9px] font-mono text-neutral-400 uppercase tracking-widest hidden sm:inline">
                            {tool.role}
                          </span>
                        </div>

                        {/* Selected Indicator Dot */}
                        {isSelected && (
                          <span className="w-1.5 h-1.5 rounded-full bg-[#FFD400] animate-pulse" />
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Bottom 360 Drag Instruction Badge */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 pointer-events-none">
              <div className="px-4 py-1.5 rounded-full bg-black/80 backdrop-blur-md border border-white/15 text-[11px] font-mono text-neutral-300 flex items-center gap-2 shadow-lg">
                <RotateCw className="w-3.5 h-3.5 text-[#FFD400] animate-spin" style={{ animationDuration: "8s" }} />
                <span>DRAG HORIZONTALLY TO ROTATE 360° // CLICK ANY TOOL</span>
              </div>
            </div>
          </div>

          {/* =========================================================================
              SELECTED TOOL DETAIL INSPECTOR (DARK THEME PREVIEW PANEL)
              ========================================================================= */}
          {selectedTool && (
            <div className="relative z-20 mt-6 p-6 sm:p-8 rounded-3xl bg-white/[0.03] border border-white/10 backdrop-blur-xl flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div className="flex items-center gap-4 sm:gap-5">
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-[#0c0e14] border border-[#FFD400]/40 flex items-center justify-center p-3 text-[#FFD400] shadow-[0_0_20px_rgba(255,212,0,0.2)] shrink-0">
                  <ToolBrandIcon name={selectedTool.name} className="w-full h-full" />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs font-mono text-[#FFD400] px-2 py-0.5 rounded bg-[#FFD400]/10 border border-[#FFD400]/20 uppercase">
                      {selectedTool.role}
                    </span>
                    <span className="text-xs font-mono text-neutral-400">
                      {selectedTool.version}
                    </span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight font-[family-name:var(--font-jakarta)]">
                    {selectedTool.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-300 font-light mt-1 max-w-xl">
                    {selectedTool.tagline}
                  </p>
                </div>
              </div>

              <div className="shrink-0 flex items-center gap-3 w-full md:w-auto justify-end">
                <Link
                  href="/contact-us?intent=consultation"
                  className="w-full md:w-auto inline-block text-center"
                >
                  <div className="inline-flex items-center justify-between gap-3 px-5 py-2.5 rounded-full bg-[#FFD400] text-black font-mono font-bold text-xs uppercase tracking-wider hover:bg-[#ffe34d] transition-all cursor-pointer shadow-[0_0_15px_rgba(255,212,0,0.3)]">
                    <span>ARCHITECT WITH {selectedTool.name.toUpperCase()}</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </div>
                </Link>
              </div>
            </div>
          )}
        </div>

        {/* =========================================================================
            COMPLETE TECHNOLOGY MATRIX FOR ACTIVE SERVICE (RESPONSIVE GRID)
            ========================================================================= */}
        <div className="mt-14">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8 pb-4 border-b border-white/10">
            <div>
              <div className="text-xs font-mono text-[#FFD400] uppercase tracking-widest mb-1">
                COMPLETE TOOL CATALOGUE
              </div>
              <h3 className="text-2xl sm:text-4xl font-[family-name:var(--font-bebas)] tracking-wide uppercase text-white">
                {activeDivision.title} <span className="text-[#FFD400]">ECOSYSTEM</span>
              </h3>
            </div>
            <span className="text-xs font-mono text-neutral-400">
              Showing {activeDivision.tools.length} verified production tools
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
            {activeDivision.tools.map((tool) => {
              const isSelected = selectedTool?.id === tool.id;

              return (
                <div
                  key={tool.id}
                  onClick={() => setSelectedTool(tool)}
                  className={`group relative rounded-2xl p-5 sm:p-6 transition-all duration-300 cursor-pointer flex flex-col justify-between ${
                    isSelected
                      ? "bg-[#0e111a] border-2 border-[#FFD400] shadow-[0_0_25px_rgba(255,212,0,0.2)]"
                      : "bg-[#08090d]/85 hover:bg-[#0c0e14] border border-white/10 hover:border-white/30"
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-4">
                      <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center p-2 text-white group-hover:text-[#FFD400] transition-colors">
                        <ToolBrandIcon name={tool.name} className="w-full h-full" />
                      </div>
                      <span className="text-[10px] font-mono text-neutral-400 px-2 py-0.5 rounded bg-white/[0.04] border border-white/10">
                        {tool.version}
                      </span>
                    </div>

                    <h4 className="text-base sm:text-lg font-bold text-white tracking-tight mb-1 group-hover:text-[#FFD400] transition-colors font-[family-name:var(--font-jakarta)]">
                      {tool.name}
                    </h4>
                    <p className="text-xs font-mono text-[#FFD400] mb-2">
                      {tool.role}
                    </p>
                    <p className="text-xs text-neutral-300 font-light leading-relaxed mb-4">
                      {tool.tagline}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-white/10 flex items-center justify-between text-[11px] font-mono">
                    <span className="text-neutral-400">{tool.badge}</span>
                    <span className="text-[#FFD400] group-hover:translate-x-0.5 transition-transform">
                      SELECT &rarr;
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
