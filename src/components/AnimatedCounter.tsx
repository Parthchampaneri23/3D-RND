"use client";

import React, { useEffect, useRef, useState } from "react";

interface AnimatedCounterProps {
  value?: number;
  text?: string;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  duration?: number;
  className?: string;
}

export default function AnimatedCounter({
  value,
  text,
  prefix: manualPrefix = "",
  suffix: manualSuffix = "",
  decimals: manualDecimals,
  duration = 1.8,
  className = "",
}: AnimatedCounterProps) {
  // Parse from text if value is not explicitly provided
  let targetNum = value ?? 0;
  let prefix = manualPrefix;
  let suffix = manualSuffix;
  let decimals = manualDecimals ?? 0;

  if (text !== undefined && value === undefined) {
    // Match any leading non-digits, followed by number (int or float), followed by trailing text
    const match = text.match(/^([^0-9.-]*)([0-9]+(?:\.[0-9]+)?)(.*)$/);
    if (match) {
      prefix = manualPrefix || match[1];
      targetNum = parseFloat(match[2]);
      if (manualDecimals === undefined) {
        decimals = match[2].includes(".") ? match[2].split(".")[1].length : 0;
      }
      suffix = manualSuffix || match[3];
    } else {
      // Non-numeric string fallback
      return <span className={className}>{text}</span>;
    }
  }

  const [displayValue, setDisplayValue] = useState(0);
  const elementRef = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const el = elementRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          const startTime = performance.now();
          const startVal = 0;
          const endVal = targetNum;

          const updateCounter = (currentTime: number) => {
            const elapsed = (currentTime - startTime) / 1000;
            const progress = Math.min(elapsed / duration, 1);
            // Smooth easeOutCubic
            const easeOutProgress = 1 - Math.pow(1 - progress, 3);
            const currentVal = startVal + (endVal - startVal) * easeOutProgress;

            setDisplayValue(currentVal);

            if (progress < 1) {
              requestAnimationFrame(updateCounter);
            } else {
              setDisplayValue(endVal);
            }
          };

          requestAnimationFrame(updateCounter);
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [targetNum, duration]);

  const formatted =
    decimals > 0 ? displayValue.toFixed(decimals) : Math.round(displayValue);

  return (
    <span ref={elementRef} className={className}>
      {prefix}
      {formatted}
      {suffix}
    </span>
  );
}
