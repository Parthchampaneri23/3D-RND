"use client";

import React, { useState } from "react";
import {
  Sparkles,
  Layers,
  Code2,
  TrendingUp,
  Palette,
  Video,
} from "lucide-react";

// ============================================================================
// GENUINE BRAND SVG LOGOS (IN ACTUAL OFFICIAL BRAND COLORS)
// ============================================================================

export function FullColorToolLogo({
  name,
  className = "w-6 h-6 sm:w-7 sm:h-7",
}: {
  name: string;
  className?: string;
}) {
  const norm = name.toLowerCase().replace(/[^a-z0-9]/g, "");

  // React.js (Cyan #61DAFB)
  if (norm.includes("react")) {
    return (
      <svg className={className} viewBox="-11.5 -10.23174 23 20.46348">
        <circle cx="0" cy="0" r="2.05" fill="#61DAFB" />
        <g stroke="#61DAFB" strokeWidth="1" fill="none">
          <ellipse rx="11" ry="4.9" />
          <ellipse rx="11" ry="4.9" transform="rotate(60)" />
          <ellipse rx="11" ry="4.9" transform="rotate(120)" />
        </g>
      </svg>
    );
  }

  // Next.js (Black & White circle)
  if (norm.includes("next")) {
    return (
      <svg className={className} viewBox="0 0 180 180" fill="none">
        <circle cx="90" cy="90" r="90" fill="#000000" stroke="#333333" strokeWidth="3" />
        <path
          d="M149.508 157.52L69.142 54H54V125.97H66.1136V69.3836L139.999 164.845C143.333 162.614 146.509 160.165 149.508 157.52Z"
          fill="#FFFFFF"
        />
        <rect x="115" y="54" width="12" height="72" fill="#FFFFFF" />
      </svg>
    );
  }

  // Node.js (Green #539E43)
  if (norm.includes("node")) {
    return (
      <svg className={className} viewBox="0 0 256 289">
        <path fill="#539E43" d="M128 0L24 60v120l104 60 104-60V60L128 0z" />
        <path fill="#333333" d="M128 20L44 68v104l84 48 84-48V68L128 20z" opacity="0.3" />
        <path
          fill="#FFFFFF"
          d="M128 65l-50 29v58l50 29 50-29V94l-50-29zm28 71l-28 16-28-16v-32l28-16 28 16v32z"
        />
      </svg>
    );
  }

  // MongoDB (Leaf #00ED64 and #00684A)
  if (norm.includes("mongo")) {
    return (
      <svg className={className} viewBox="0 0 24 24">
        <path
          fill="#00ED64"
          d="M12 0C11.66 0 11.23.16 10.95.42C8.6 2.5 4.5 7.6 4.5 12.87C4.5 17.65 8.1 21.6 12 24C15.9 21.6 19.5 17.65 19.5 12.87C19.5 7.6 15.4 2.5 13.05.42C12.77.16 12.34 0 12 0Z"
        />
        <path
          fill="#00684A"
          d="M12 0v24c3.9-2.4 7.5-6.35 7.5-11.13C19.5 7.6 15.4 2.5 13.05.42C12.77.16 12.34 0 12 0Z"
        />
        <path
          fill="#FFFFFF"
          d="M12 2.37v19.38C12 21.75 9.5 19.8 6.8 12.87c0-3.37 4-8.8 5.2-10.5Z"
          opacity="0.25"
        />
      </svg>
    );
  }

  // SQL / PostgreSQL (Royal Blue #336791 and Cyan #4B8BBE)
  if (norm.includes("sql") || norm.includes("postgres")) {
    return (
      <svg className={className} viewBox="0 0 24 24">
        <ellipse cx="12" cy="5" rx="8" ry="3" fill="#5A9FD4" />
        <path d="M4 5v5c0 1.66 3.58 3 8 3s8-1.34 8-3V5" fill="#336791" />
        <ellipse cx="12" cy="10" rx="8" ry="3" fill="#4B8BBE" />
        <path d="M4 10v5c0 1.66 3.58 3 8 3s8-1.34 8-3v-5" fill="#295172" />
        <ellipse cx="12" cy="15" rx="8" ry="3" fill="#336791" />
        <path d="M4 15v4c0 1.66 3.58 3 8 3s8-1.34 8-3v-4" fill="#1C3D5A" />
        <ellipse cx="12" cy="19" rx="8" ry="3" fill="#295172" />
      </svg>
    );
  }

  // Flutter (#02569B, #0175C2, #47C5FB)
  if (norm.includes("flutter")) {
    return (
      <svg className={className} viewBox="0 0 24 24">
        <path fill="#47C5FB" d="M14.314 0L2.3 12 6 15.7 21.686 0h-7.372z" />
        <path fill="#02569B" d="M14.314 11.143L7.743 17.714l3.7 3.7 2.871-2.871 4.572 4.571H22.6l-8.286-8.271v.286z" />
        <path fill="#0175C2" d="M11.443 21.414l2.871-2.871 4.572 4.571H14.314l-2.871-1.7z" />
      </svg>
    );
  }

  // Figma (Iconic 5 colors: #F24E1E, #FF7262, #A259FF, #1ABCFE, #0ACF83)
  if (norm.includes("figma")) {
    return (
      <svg className={className} viewBox="0 0 38 57">
        <path fill="#1ABCFE" d="M19 28.5C19 23.2533 23.2533 19 28.5 19C33.7467 19 38 23.2533 38 28.5C38 33.7467 33.7467 38 28.5 38C23.2533 38 19 33.7467 19 28.5Z" />
        <path fill="#0ACF83" d="M0 47.5C0 42.2533 4.25329 38 9.5 38H19V47.5C19 52.7467 14.7467 57 9.5 57C4.25329 57 0 52.7467 0 47.5Z" />
        <path fill="#A259FF" d="M0 28.5C0 23.2533 4.25329 19 9.5 19H19V38H9.5C4.25329 38 0 33.7467 0 28.5Z" />
        <path fill="#F24E1E" d="M0 9.5C0 4.25329 4.25329 0 9.5 0H19V19H9.5C4.25329 19 0 14.7467 0 9.5Z" />
        <path fill="#FF7262" d="M19 0H28.5C33.7467 0 38 4.25329 38 9.5C38 14.7467 33.7467 19 28.5 19H19V0Z" />
      </svg>
    );
  }

  // PHP (#777BB4 oval with white typography)
  if (norm.includes("php")) {
    return (
      <svg className={className} viewBox="0 0 24 24">
        <ellipse cx="12" cy="12" rx="11.5" ry="7.5" fill="#777BB4" />
        <path
          fill="#FFFFFF"
          d="M6 14.5h1.2l.5-2.5h1.5c1.4 0 2.2-.6 2.5-1.8.3-1.1-.3-1.8-1.7-1.8H6.5L6 14.5zm1.9-3.2l.3-1.5h1.2c.6 0 .9.3.8.7-.1.5-.4.8-1 .8h-1.3zm5.6 3.2h1.2l.5-2.5h1.5c1.4 0 2.2-.6 2.5-1.8.3-1.1-.3-1.8-1.7-1.8h-3.5l-1.5 6.1zm1.9-3.2l.3-1.5h1.2c.6 0 .9.3.8.7-.1.5-.4.8-1 .8h-1.3zM10.8 14.5h1.2l1.2-6.1H12l-1.2 6.1z"
        />
      </svg>
    );
  }

  // Laravel (Vibrant Red #FF2D20)
  if (norm.includes("laravel")) {
    return (
      <svg className={className} viewBox="0 0 24 24">
        <path
          fill="#FF2D20"
          d="M21.7 6.4L13.1 1.4c-.7-.4-1.5-.4-2.2 0L2.3 6.4c-.7.4-1.1 1.1-1.1 1.9v9.9c0 .8.4 1.5 1.1 1.9l8.6 5c.7.4 1.5.4 2.2 0l8.6-5c.7-.4 1.1-1.1 1.1-1.9V8.3c0-.8-.4-1.5-1.1-1.9zM12 3.6l7.1 4.1-3.2 1.8-7.1-4.1L12 3.6zm-1 16.8l-7.1-4.1V9.5l7.1 4.1v6.8zm2 0v-6.8l7.1-4.1v6.8l-7.1 4.1z"
        />
      </svg>
    );
  }

  // Docker (Docker Blue #2496ED)
  if (norm.includes("docker")) {
    return (
      <svg className={className} viewBox="0 0 24 24">
        <path
          fill="#2496ED"
          d="M13 3h2v2h-2zm-3 0h2v2h-2zm6 3h2v2h-2zm-3 0h2v2h-2zm-3 0h2v2h-2zm-3 0h2v2H7zm9 3h2v2h-2zm-3 0h2v2h-2zm-3 0h2v2H7zm-3 0h2v2H4zm17.9 2.5c-.3-.2-1.3-.4-2.4-.2-.2-.6-.5-1.1-.9-1.5l-.6.4c.4.6.6 1.4.5 2.1-.5.3-1.6.4-2.5.4H1c-.3 1.8.2 5.5 3.3 7.8 2.6 1.9 6.2 1.9 9.8 1.9 6.4 0 9.8-3.5 9.8-7.7 0-.9-.2-2.3-2-3.2z"
        />
      </svg>
    );
  }

  // TypeScript (Blue #3178C6 with white TS)
  if (norm.includes("type") || norm.includes("ts")) {
    return (
      <svg className={className} viewBox="0 0 24 24">
        <rect width="24" height="24" rx="3.5" fill="#3178C6" />
        <path
          d="M5 9h6m-3 0v9m4.5-5.5c.8-.5 1.8-.8 2.8-.8 1.8 0 2.8.9 2.8 2.1 0 1.4-1.1 1.9-2.4 2.2-1.4.3-1.8.6-1.8 1.2 0 .6.5.9 1.4.9 1 0 2-.4 2.6-.9m-5.2-4.7c.6-.4 1.5-.6 2.4-.6"
          stroke="#FFFFFF"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
      </svg>
    );
  }

  // Python (Blue #3776AB and Yellow #FFD43B)
  if (norm.includes("python")) {
    return (
      <svg className={className} viewBox="0 0 24 24">
        <path
          fill="#3776AB"
          d="M11.9 1.2c-5.2 0-4.9 2.3-4.9 2.3v2.4h5v.7H4.9s-3.7-.4-3.7 4.9 3.2 5.1 3.2 5.1h1.9v-2.7s-.1-3.2 3.2-3.2h5.1s3.1.1 3.1-3.1V4.4s.4-3.2-5.8-3.2zm-2.7 1.8c.6 0 1 .4 1 1s-.4 1-1 1-1-.4-1-1 .4-1 1-1z"
        />
        <path
          fill="#FFD43B"
          d="M12.1 22.8c5.2 0 4.9-2.3 4.9-2.3v-2.4h-5v-.7h7.1s3.7.4 3.7-4.9-3.2-5.1-3.2-5.1h-1.9v2.7s.1 3.2-3.2 3.2h-5.1s-3.1-.1-3.1 3.1v3.2s-.4 3.2 5.8 3.2zm2.7-1.8c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1z"
        />
      </svg>
    );
  }

  // Google Analytics 4 (Amber/Orange #F9AB00 and #E37400)
  if (norm.includes("analytics") || norm.includes("ga4")) {
    return (
      <svg className={className} viewBox="0 0 24 24">
        <rect x="2.5" y="13.5" width="4.5" height="8" rx="2.2" fill="#F9AB00" />
        <rect x="9.5" y="7.5" width="4.5" height="14" rx="2.2" fill="#E37400" />
        <rect x="16.5" y="2.5" width="4.5" height="19" rx="2.2" fill="#F9AB00" />
        <circle cx="5" cy="5.5" r="2.8" fill="#E37400" />
      </svg>
    );
  }

  // Google Ads (Google Quad Colors #4285F4, #FBBC04, #34A853)
  if (norm.includes("googleads") || (norm.includes("ads") && !norm.includes("meta"))) {
    return (
      <svg className={className} viewBox="0 0 24 24">
        <path
          fill="#4285F4"
          d="M3.5 14.5l5.8-10.1c.8-1.4 2.6-1.9 4-1.1l1.5.9c1.4.8 1.9 2.6 1.1 4L10.1 18.3c-.8 1.4-2.6 1.9-4 1.1l-1.5-.9c-1.4-.8-1.9-2.6-1.1-4z"
        />
        <path
          fill="#FBBC04"
          d="M10.1 18.3l5.8-10.1c.8-1.4 2.6-1.9 4-1.1l1.5.9c1.4.8 1.9 2.6 1.1 4L16.7 22c-.8 1.4-2.6 1.9-4 1.1l-1.5-.9c-1.4-.8-1.9-2.6-1.1-4z"
        />
        <circle cx="5.5" cy="18.5" r="3.5" fill="#34A853" />
      </svg>
    );
  }

  // Meta Ads (Meta Official Blue Gradient #0668E1 / #0081FB)
  if (norm.includes("meta")) {
    return (
      <svg className={className} viewBox="0 0 24 24">
        <defs>
          <linearGradient id="meta-blue-grad-2" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#0081FB" />
            <stop offset="100%" stopColor="#0668E1" />
          </linearGradient>
        </defs>
        <path
          fill="url(#meta-blue-grad-2)"
          d="M16.8 5.4c-1.9 0-3.6 1.1-4.8 2.8-1.2-1.7-2.9-2.8-4.8-2.8C3.2 5.4 0 8.5 0 12.8c0 4.6 3.7 8.2 7.7 8.2 2.6 0 4.3-1.4 5.1-2.4.8 1 2.5 2.4 5.1 2.4 4 0 7.7-3.6 7.7-8.2-.1-4.3-3.3-7.4-7.8-7.4zm-9.6 13c-2.8 0-5.1-2.4-5.1-5.6 0-3.1 2.2-5.4 5.1-5.4 2.3 0 4 1.9 4.9 3.8-.9 2.1-2.5 7.2-4.9 7.2zm10.4 0c-2.4 0-4-5.1-4.9-7.2.9-1.9 2.6-3.8 4.9-3.8 2.9 0 5.1 2.3 5.1 5.4 0 3.2-2.3 5.6-5.1 5.6z"
        />
      </svg>
    );
  }

  // SEMrush (Vibrant Coral/Orange #FF642D flame crown)
  if (norm.includes("semrush")) {
    return (
      <svg className={className} viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="11" fill="#FF642D" />
        <path
          fill="#FFFFFF"
          d="M12 4.2c-4.3 0-7.8 3.5-7.8 7.8 0 4.3 3.5 7.8 7.8 7.8 4.3 0 7.8-3.5 7.8-7.8 0-4.3-3.5-7.8-7.8-7.8zm1.3 12.2l-2.6-4.5V16.4H9.3V7.6h1.4l2.6 4.5V7.6h1.4v8.8h-1.4z"
        />
      </svg>
    );
  }

  // Ahrefs (Deep Blue #0071E3 & Bright Orange #FF5A36)
  if (norm.includes("ahrefs")) {
    return (
      <svg className={className} viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="11" fill="#0071E3" />
        <path
          fill="#FF5A36"
          d="M6.5 18l4.8-12h1.4l4.8 12h-2.2l-1.2-3.2H9.9l-1.2 3.2H6.5zm4-5h3l-1.5-4-1.5 4z"
        />
        <path fill="#FFFFFF" d="M10.5 13h3L12 9l-1.5 4z" />
      </svg>
    );
  }

  // HubSpot (Coral/Orange #FF7A59 sprocket)
  if (norm.includes("hubspot")) {
    return (
      <svg className={className} viewBox="0 0 24 24">
        <path
          fill="#FF7A59"
          d="M18.5 7.5c-.8 0-1.5.4-1.9 1l-3.3-2.1c.1-.4.2-.9.2-1.4 0-2.2-1.8-4-4-4s-4 1.8-4 4c0 1.9 1.3 3.5 3.1 3.9v5.2c-.8.4-1.4 1.1-1.7 2l-2.4-.7c-.2-.6-.8-1-1.5-1-1 0-1.8.8-1.8 1.8s.8 1.8 1.8 1.8c.8 0 1.5-.5 1.7-1.2l2.5.7c.3 1.2 1.3 2.1 2.6 2.1 1.5 0 2.8-1.3 2.8-2.8 0-.9-.5-1.8-1.2-2.3V12c.7-.2 1.3-.7 1.6-1.3l3.3 2.1c0 .2-.1.5-.1.7 0 1.7 1.3 3 3 3s3-1.3 3-3-1.3-3-3-3zm-9-4c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2z"
        />
      </svg>
    );
  }

  // Google Tag Manager (Blue #246FDB & Cyan #8AB4F8 diamond)
  if (norm.includes("tagmanager") || norm.includes("gtm")) {
    return (
      <svg className={className} viewBox="0 0 24 24">
        <path fill="#246FDB" d="M12 2L2 12l10 10 10-10L12 2z" />
        <path fill="#8AB4F8" d="M12 5.5L18.5 12 12 18.5 5.5 12 12 5.5z" />
        <circle cx="12" cy="12" r="2.8" fill="#FFFFFF" />
      </svg>
    );
  }

  // Google Search Console (Google Quad Colors #4285F4, #FBBC04, #34A853, #EA4335)
  if (norm.includes("searchconsole") || norm.includes("console")) {
    return (
      <svg className={className} viewBox="0 0 24 24">
        <rect width="24" height="24" rx="5" fill="#4285F4" />
        <path fill="#FBBC04" d="M5 18h14v2H5z" />
        <path fill="#FFFFFF" d="M5 14h5v2H5zm7-5h7v2h-7zm0 4h7v2h-7zM5 9h5v2H5z" />
        <circle cx="15.5" cy="9.5" r="3.5" fill="#34A853" />
        <path fill="#EA4335" d="M17.8 11.8L20.5 14.5l-1.4 1.4-2.7-2.7z" />
      </svg>
    );
  }

  // Adobe Illustrator (Dark Maroon #330000 & Bright Orange #FF9A00)
  if (norm.includes("illustrator")) {
    return (
      <svg className={className} viewBox="0 0 24 24">
        <rect width="24" height="24" rx="4.5" fill="#330000" stroke="#FF9A00" strokeWidth="1.6" />
        <text
          x="4.2"
          y="16.5"
          fill="#FF9A00"
          fontFamily="system-ui, -apple-system, sans-serif"
          fontWeight="900"
          fontSize="11.5"
          letterSpacing="-0.5"
        >
          Ai
        </text>
      </svg>
    );
  }

  // Adobe Photoshop (Deep Blue #001E36 & Bright Cyan #31A8FF)
  if (norm.includes("photoshop")) {
    return (
      <svg className={className} viewBox="0 0 24 24">
        <rect width="24" height="24" rx="4.5" fill="#001E36" stroke="#31A8FF" strokeWidth="1.6" />
        <text
          x="3.8"
          y="16.5"
          fill="#31A8FF"
          fontFamily="system-ui, -apple-system, sans-serif"
          fontWeight="900"
          fontSize="11.5"
          letterSpacing="-0.5"
        >
          Ps
        </text>
      </svg>
    );
  }

  // Blender 3D / Blender CGI (Orange #EA7600 & Blue #265787)
  if (norm.includes("blender")) {
    return (
      <svg className={className} viewBox="0 0 24 24">
        <circle cx="12.5" cy="15" r="4.5" fill="#265787" />
        <circle cx="12.5" cy="15" r="2.2" fill="#FFFFFF" />
        <path
          fill="#EA7600"
          d="M12.5 10.5c-2.8 0-5 2.2-5 5s2.2 5 5 5 5-2.2 5-5-2.2-5-5-5zm0 7.8c-1.5 0-2.8-1.2-2.8-2.8s1.2-2.8 2.8-2.8 2.8 1.2 2.8 2.8-1.3 2.8-2.8 2.8zM4.2 10.2L9 13.5l-1.5 2.6L2.7 12.8c-.5-.3-.7-.9-.4-1.4.3-.5.9-.7 1.4-.4l.5-.8zm15.6 0l-.5.8c.5-.3 1.1-.1 1.4.4.3.5.1 1.1-.4 1.4L16.5 16.1 15 13.5l4.8-3.3zM12 2.5l1.5 6.5h-3L12 2.5z"
        />
      </svg>
    );
  }

  // Spline 3D (Vibrant Pink/Purple/Blue Gradient #FF59B3, #7928CA, #4E80EE)
  if (norm.includes("spline")) {
    return (
      <svg className={className} viewBox="0 0 24 24">
        <defs>
          <linearGradient id="spline-neon-grad-2" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#FF59B3" />
            <stop offset="50%" stopColor="#7928CA" />
            <stop offset="100%" stopColor="#4E80EE" />
          </linearGradient>
        </defs>
        <circle cx="12" cy="12" r="10.5" fill="url(#spline-neon-grad-2)" />
        <path
          fill="#FFFFFF"
          d="M12 6c-2.5 0-4.5 1.5-4.5 3.5 0 2.5 4.5 2.5 4.5 5 0 1-1 1.5-2 1.5s-2.5-.8-3-1.5l-1.5 1.5c.8 1.2 2.5 2 4.5 2 2.5 0 4.5-1.5 4.5-3.5 0-2.5-4.5-2.5-4.5-5 0-1 1-1.5 2-1.5s2.5.8 3 1.5l1.5-1.5C15.7 6.8 14 6 12 6z"
        />
      </svg>
    );
  }

  // Framer (Vibrant Electric Blue #0055FF)
  if (norm.includes("framer")) {
    return (
      <svg className={className} viewBox="0 0 24 24">
        <path fill="#0055FF" d="M4 0h16v8h-8zM4 8h8l8 8H4zM4 16h8v8z" />
      </svg>
    );
  }

  // Adobe Premiere Pro (Deep Wine #260033 & Violet/Magenta #EA77FF)
  if (norm.includes("premiere")) {
    return (
      <svg className={className} viewBox="0 0 24 24">
        <rect width="24" height="24" rx="4.5" fill="#260033" stroke="#EA77FF" strokeWidth="1.6" />
        <text
          x="4.2"
          y="16.5"
          fill="#EA77FF"
          fontFamily="system-ui, -apple-system, sans-serif"
          fontWeight="900"
          fontSize="11.5"
          letterSpacing="-0.5"
        >
          Pr
        </text>
      </svg>
    );
  }

  // DaVinci Resolve (Tri-Color Aperture: Red #FF3E3E, Green #00E676, Blue #2979FF)
  if (norm.includes("davinci") || norm.includes("resolve")) {
    return (
      <svg className={className} viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="11" fill="#0c0e14" stroke="#ffffff25" strokeWidth="1.2" />
        <circle cx="12" cy="7.2" r="3.4" fill="#FF3E3E" />
        <circle cx="7.8" cy="15" r="3.4" fill="#00E676" />
        <circle cx="16.2" cy="15" r="3.4" fill="#2979FF" />
      </svg>
    );
  }

  // Adobe After Effects (Deep Navy #00005B & Violet #9999FF)
  if (norm.includes("aftereffects") || norm.includes("ae")) {
    return (
      <svg className={className} viewBox="0 0 24 24">
        <rect width="24" height="24" rx="4.5" fill="#00005B" stroke="#9999FF" strokeWidth="1.6" />
        <text
          x="4.2"
          y="16.5"
          fill="#9999FF"
          fontFamily="system-ui, -apple-system, sans-serif"
          fontWeight="900"
          fontSize="11.5"
          letterSpacing="-0.5"
        >
          Ae
        </text>
      </svg>
    );
  }

  // RED Digital Cinema (8K) (Cinema Red #E50914 Badge with Bold White RED)
  if (norm.includes("red")) {
    return (
      <svg className={className} viewBox="0 0 24 24">
        <rect width="24" height="24" rx="4.5" fill="#E50914" />
        <text
          x="2.4"
          y="15.8"
          fill="#FFFFFF"
          fontFamily="Impact, Arial Black, sans-serif"
          fontWeight="900"
          fontSize="9.8"
          letterSpacing="0.4"
        >
          RED
        </text>
        <text
          x="7.8"
          y="21"
          fill="#000000"
          fontFamily="system-ui, sans-serif"
          fontWeight="900"
          fontSize="4.2"
        >
          8K
        </text>
      </svg>
    );
  }

  // Unreal Engine (Dark Circle #0E1128 with Crisp White U Shield)
  if (norm.includes("unreal")) {
    return (
      <svg className={className} viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="11" fill="#0E1128" stroke="#3b4458" strokeWidth="1.2" />
        <path
          fill="#FFFFFF"
          d="M12 3a9 9 0 0 0-9 9c0 3 1.5 5.8 3.9 7.4l1.8-2.8c-1.6-1.1-2.7-2.8-2.7-4.6 0-3.3 2.7-6 6-6s6 2.7 6 6c0 1.8-1.1 3.5-2.7 4.6l1.8 2.8C18.5 17.8 20 15 20 12a9 9 0 0 0-9-9zm-2 5.5v6.5c0 1.4 1.1 2.5 2.5 2.5s2.5-1.1 2.5-2.5V8.5H13v6c0 .6-.4 1-1 1s-1-.4-1-1v-6h-1z"
        />
      </svg>
    );
  }

  // Fallback
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="#FFD400" strokeWidth="2">
      <rect x="4" y="4" width="16" height="16" rx="2" />
      <path d="M9 9h6v6H9z" />
    </svg>
  );
}

// ============================================================================
// DATA: 4 SERVICES & EXACT REQUESTED TOOLS
// ============================================================================

interface ToolItem {
  id: string;
  name: string;
  tagline: string;
}

interface ServiceDivision {
  id: string;
  index: string;
  serviceName: string;
  tierNumber: number;
  tagline: string;
  icon: React.ElementType;
  accentGlow: string;
  tools: ToolItem[];
}

const SERVICE_DIVISIONS: ServiceDivision[] = [
  {
    id: "technology-solutions",
    index: "01",
    serviceName: "Technology solutions",
    tierNumber: 1,
    tagline: "Enterprise Full-Stack, Cloud Platforms & Reactive Architecture",
    icon: Code2,
    accentGlow: "#FFD400",
    tools: [
      { id: "react", name: "React.js", tagline: "Frontend Reactive Engine" },
      { id: "nodejs", name: "Node.js", tagline: "Asynchronous I/O Runtime" },
      { id: "mongodb", name: "MongoDB", tagline: "High-Scale Document DB" },
      { id: "sql", name: "SQL", tagline: "ACID Relational Storage" },
      { id: "nextjs", name: "NEXT JS", tagline: "Server Components & Edge" },
      { id: "flutter", name: "Flutter", tagline: "Native iOS & Android Engine" },
      { id: "figma-tech", name: "Figma", tagline: "Design Token Pipeline" },
      { id: "php", name: "PHP", tagline: "Modern Backend Runtime" },
      { id: "laravel", name: "LARAVEL", tagline: "Elegant MVC API Framework" },
      { id: "docker", name: "Docker", tagline: "Containerization & DevOps" },
      { id: "typescript", name: "TypeScript", tagline: "Strict Contract Safety" },
      { id: "python", name: "Python", tagline: "Neural Mesh & AI Serving" },
    ],
  },
  {
    id: "digital-marketing",
    index: "02",
    serviceName: "Digital marketing",
    tierNumber: 2,
    tagline: "Programmatic Search, High-ROI Paid Acquisition & Attribution",
    icon: TrendingUp,
    accentGlow: "#38bdf8",
    tools: [
      { id: "ga4", name: "Google Analytics 4", tagline: "Event Telemetry & Funnels" },
      { id: "google-ads", name: "Google Ads", tagline: "High-Intent Intent Bidding" },
      { id: "meta-ads", name: "Meta Ads", tagline: "Social Growth & Lookalikes" },
      { id: "semrush", name: "SEMrush", tagline: "Keyword & SERP Intelligence" },
      { id: "ahrefs", name: "Ahrefs", tagline: "Backlink Graph Topology" },
      { id: "hubspot", name: "HubSpot", tagline: "Inbound Pipeline Automation" },
      { id: "gtm", name: "Google Tag Manager", tagline: "Serverless Event Routing" },
      { id: "search-console", name: "Search Console", tagline: "Crawl Diagnostics & Health" },
    ],
  },
  {
    id: "branding-design",
    index: "03",
    serviceName: "Branding and design",
    tierNumber: 3,
    tagline: "Spatial 3D Design Systems, Key Visuals & Brand Identities",
    icon: Palette,
    accentGlow: "#c084fc",
    tools: [
      { id: "figma-brand", name: "Figma", tagline: "Vector Design Systems" },
      { id: "illustrator", name: "Adobe Illustrator", tagline: "Precision Vector Identity" },
      { id: "photoshop", name: "Adobe Photoshop", tagline: "Key Visuals & Retouching" },
      { id: "blender-3d", name: "Blender 3D", tagline: "Photorealistic PBR 3D" },
      { id: "spline-3d", name: "Spline 3D", tagline: "Interactive WebGL 3D" },
      { id: "framer", name: "Framer", tagline: "Spatial Interaction Design" },
      { id: "after-effects-design", name: "After Effects", tagline: "Kinetic Motion Typography" },
    ],
  },
  {
    id: "media-production",
    index: "04",
    serviceName: "Media production",
    tierNumber: 4,
    tagline: "8K Cinema Cameras, Color Grading, Virtual Production & Sound",
    icon: Video,
    accentGlow: "#f43f5e",
    tools: [
      { id: "premiere", name: "Adobe Premiere Pro", tagline: "Cinema Narrative Assembly" },
      { id: "davinci", name: "DaVinci Resolve", tagline: "ACES Color Science & Audio" },
      { id: "after-effects-media", name: "Adobe After Effects", tagline: "3D VFX & Screen Tracking" },
      { id: "red-cinema", name: "RED Digital Cinema (8K)", tagline: "8K RAW Film Sensors" },
      { id: "unreal", name: "Unreal Engine", tagline: "In-Camera Virtual Production" },
      { id: "blender-cgi", name: "Blender CGI", tagline: "Particle Simulations & FX" },
    ],
  },
];

// ============================================================================
// MAIN SERVICE UNIVERSE COMPONENT (TECHNOLOGY & TOOLS MATRICES)
// ============================================================================

export default function ServiceUniverseSection() {
  const [activeTab, setActiveTab] = useState<string>("all");

  // Filter divisions based on active tab
  const displayedDivisions =
    activeTab === "all"
      ? SERVICE_DIVISIONS
      : SERVICE_DIVISIONS.filter((d) => d.id === activeTab);

  return (
    <section
      id="service-universe"
      className="relative py-16 sm:py-24 text-white overflow-hidden scroll-mt-20 select-none"
    >
      {/* Background Celestial Mist (Dark Theme) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[900px] bg-gradient-to-b from-[#38bdf8]/[0.025] via-[#FFD400]/[0.02] to-transparent rounded-full blur-[220px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 relative z-10">
        {/* =========================================================================
            HEADER: TITLE & DARK CYBER BADGE
            ========================================================================= */}
        <div className="text-center max-w-4xl mx-auto mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-medium tracking-[0.25em] uppercase mb-4 bg-black/70 border border-[#FFD400]/40 text-[#FFD400] backdrop-blur-md shadow-sm">
            <Sparkles className="w-3.5 h-3.5" />
            <span>2.2 SERVICE UNIVERSE // CORE STACK &amp; TOOLS</span>
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-[family-name:var(--font-bebas)] tracking-wide uppercase leading-[0.92] text-white drop-shadow-[0_4px_24px_rgba(0,0,0,0.95)]">
            MULTIVERSE <span className="text-[#FFD400]">TECHNOLOGY ARCHITECTURE</span>
          </h2>
          <p className="text-xs sm:text-sm md:text-base font-normal mt-3 leading-relaxed text-neutral-300 max-w-2xl mx-auto font-[family-name:var(--font-jakarta)]">
            Explore our verified tools and enterprise platforms across Technology, Digital Marketing, Branding &amp; Design, and Media Production. Official brand logos in genuine colors.
          </p>
        </div>

        {/* =========================================================================
            VIEW CONTROLS & SERVICE TABS
            ========================================================================= */}
        <div className="flex items-center justify-center gap-2 sm:gap-3 flex-wrap mb-10">
          {/* ALL 4 TIERS VIEW BUTTON */}
          <button
            type="button"
            onClick={() => setActiveTab("all")}
            className={`group inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-mono tracking-wider uppercase transition-all duration-300 cursor-pointer ${
              activeTab === "all"
                ? "bg-[#FFD400] text-black font-bold shadow-[0_0_25px_rgba(255,212,0,0.4)]"
                : "bg-white/[0.04] text-neutral-300 hover:text-white border border-white/10 hover:border-white/30"
            }`}
          >
            <Layers className="w-4 h-4" />
            <span>ALL 4 SERVICE TIERS (STACKED)</span>
          </button>

          {/* INDIVIDUAL SERVICE SELECTORS */}
          {SERVICE_DIVISIONS.map((div) => {
            const isActive = activeTab === div.id;
            const Icon = div.icon;

            return (
              <button
                key={div.id}
                type="button"
                onClick={() => setActiveTab(div.id)}
                className={`group inline-flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-full text-xs sm:text-sm font-mono tracking-wider uppercase transition-all duration-300 cursor-pointer ${
                  isActive
                    ? "bg-[#0c0e14] text-[#FFD400] border-2 border-[#FFD400] shadow-[0_0_20px_rgba(255,212,0,0.3)] font-bold"
                    : "bg-white/[0.03] text-neutral-400 hover:text-white border border-white/10 hover:border-white/30"
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${isActive ? "text-[#FFD400]" : "text-neutral-400"}`} />
                <span>{div.serviceName}</span>
                <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-white/10 text-neutral-300">
                  {div.tools.length}
                </span>
              </button>
            );
          })}
        </div>

        {/* =========================================================================
            COMPLETE 4-SERVICE ECOSYSTEM MATRIX:
            SHOWS ALL 4 SERVICE NAMES + ALL TOOL LOGOS IN ACTUAL COLOR (NO TEXT NAMES)
            ========================================================================= */}
        <div className="space-y-8">
          <div
            className={`grid gap-6 sm:gap-8 ${
              activeTab === "all"
                ? "grid-cols-1 lg:grid-cols-2"
                : "grid-cols-1 max-w-4xl mx-auto"
            }`}
          >
            {displayedDivisions.map((division) => {
              const Icon = division.icon;

              return (
                <div
                  key={division.id}
                  className={`relative rounded-3xl p-6 sm:p-8 bg-[#08090d]/85 border transition-all duration-300 shadow-xl ${
                    activeTab === division.id
                      ? "border-[#FFD400]/70 shadow-[0_0_35px_rgba(255,212,0,0.18)]"
                      : "border-white/10 hover:border-white/30"
                  }`}
                >
                  {/* SERVICE NAME HEADER */}
                  <div className="flex items-center justify-between gap-4 pb-4 mb-6 border-b border-white/10">
                    <div className="flex items-center gap-3">
                      <div
                        className="w-10 h-10 rounded-xl flex items-center justify-center p-2 shadow-lg"
                        style={{
                          backgroundColor: `${division.accentGlow}20`,
                          color: division.accentGlow,
                        }}
                      >
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <span
                          className="text-[10px] font-mono uppercase tracking-widest block font-bold"
                          style={{ color: division.accentGlow }}
                        >
                          DIVISION 0{division.tierNumber} // ACTIVE ECOSYSTEM
                        </span>
                        {/* PROMINENT SERVICE NAME */}
                        <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight font-[family-name:var(--font-jakarta)]">
                          {division.serviceName}
                        </h3>
                      </div>
                    </div>

                    <span className="text-xs font-mono font-bold px-3 py-1 rounded-full bg-white/10 text-white border border-white/10">
                      {division.tools.length} Logos
                    </span>
                  </div>

                  {/* LOGOS ONLY - ACTUAL OFFICIAL BRAND COLORS - NO NAMES */}
                  <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3 sm:gap-3.5">
                    {division.tools.map((t) => (
                      <div
                        key={t.id}
                        className="group relative aspect-square rounded-2xl bg-white/[0.04] hover:bg-white/[0.09] border border-white/15 hover:border-[#FFD400]/70 flex flex-col items-center justify-center p-3 transition-all duration-300 hover:scale-105 shadow-md hover:shadow-[0_0_20px_rgba(255,212,0,0.2)] cursor-default"
                        title={t.name}
                      >
                        {/* ACTUAL BRAND LOGO IN FULL OFFICIAL COLOR */}
                        <div className="w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center">
                          <FullColorToolLogo
                            name={t.name}
                            className="w-full h-full object-contain"
                          />
                        </div>

                        {/* Floating tooltip on hover */}
                        <div className="absolute -top-9 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-200 pointer-events-none px-2.5 py-1 rounded-md bg-black/95 border border-white/20 text-[11px] font-mono text-white whitespace-nowrap z-30 shadow-2xl">
                          <span className="text-[#FFD400] font-bold">{t.name}</span>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Bottom selection prompt */}
                  <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-xs font-mono">
                    <span className="text-neutral-400">{division.tagline}</span>
                    <button
                      type="button"
                      onClick={() =>
                        setActiveTab(activeTab === division.id ? "all" : division.id)
                      }
                      className="flex items-center gap-1 font-bold hover:underline cursor-pointer"
                      style={{ color: division.accentGlow }}
                    >
                      {activeTab === division.id ? "SHOW ALL TIERS" : "FOCUS THIS TIER →"}
                    </button>
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
