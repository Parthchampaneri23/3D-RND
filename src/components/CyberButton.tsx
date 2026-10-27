"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export interface CyberButtonProps {
  href?: string;
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
  showDot?: boolean;
  size?: "sm" | "md" | "lg";
  variant?: "dark" | "gold";
  type?: "button" | "submit" | "reset";
  fullWidth?: boolean;
}

export default function CyberButton({
  href,
  onClick,
  children,
  className = "",
  showDot = true,
  size = "md",
  variant = "dark",
  type = "button",
  fullWidth = false,
}: CyberButtonProps) {
  const sizeStyles = {
    sm: "px-4 py-2 text-xs gap-3",
    md: "px-5 sm:px-6 py-2.5 sm:py-3 text-xs sm:text-sm gap-4 sm:gap-6",
    lg: "px-6 sm:px-8 py-3.5 sm:py-4 text-sm sm:text-base gap-6 sm:gap-8",
  };

  const iconSizes = {
    sm: "w-6 h-6",
    md: "w-7 h-7 sm:w-8 sm:h-8",
    lg: "w-8 h-8 sm:w-9 sm:h-9",
  };

  const variantStyles = {
    dark: "bg-[#12141a]/95 hover:bg-[#1a1d26] border border-white/15 hover:border-[#FFD400]/70 text-white shadow-[0_4px_20px_rgba(0,0,0,0.6)] hover:shadow-[0_0_25px_rgba(255,212,0,0.28)]",
    gold: "bg-[#FFD400] hover:bg-[#ffe34d] border border-[#FFD400] text-black shadow-[0_4px_25px_rgba(255,212,0,0.4)] hover:shadow-[0_0_35px_rgba(255,212,0,0.6)]",
  };

  const badgeStyles = {
    dark: "bg-white/10 group-hover:bg-[#FFD400] text-[#FFD400] group-hover:text-black",
    gold: "bg-black/15 group-hover:bg-black text-black group-hover:text-[#FFD400]",
  };

  const content = (
    <div
      className={`group relative inline-flex items-center justify-between rounded-full ${variantStyles[variant]} transition-all duration-300 cursor-pointer select-none ${sizeStyles[size]} ${
        fullWidth ? "w-full" : ""
      } ${className}`}
    >
      {/* Left indicator + Button Text */}
      <div className="flex items-center space-x-3 sm:space-x-3.5">
        {showDot && (
          <span
            className={`w-2.5 h-2.5 rounded-full shrink-0 animate-pulse ${
              variant === "gold"
                ? "bg-black shadow-[0_0_8px_rgba(0,0,0,0.6)]"
                : "bg-[#FFD400] shadow-[0_0_8px_#FFD400]"
            }`}
          />
        )}
        <span
          className={`font-mono font-bold tracking-[0.18em] uppercase transition-colors whitespace-nowrap ${
            variant === "gold"
              ? "text-black"
              : "text-white group-hover:text-[#FFD400]"
          }`}
        >
          {children}
        </span>
      </div>

      {/* Right Circular Icon Sub-Badge */}
      <div
        className={`${iconSizes[size]} rounded-full ${badgeStyles[variant]} flex items-center justify-center transition-all duration-300 shrink-0 ml-2 shadow-inner`}
      >
        <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
      </div>
    </div>
  );

  if (href) {
    if (href.startsWith("#") || href.startsWith("/")) {
      return (
        <Link
          href={href}
          className={`${fullWidth ? "w-full block" : "inline-block"}`}
          onClick={onClick}
        >
          {content}
        </Link>
      );
    }
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`${fullWidth ? "w-full block" : "inline-block"}`}
        onClick={onClick}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${fullWidth ? "w-full block" : "inline-block"}`}
    >
      {content}
    </button>
  );
}
