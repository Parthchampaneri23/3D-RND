"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function GSAPScrollAnimations() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // 1. ANIMS FOR ALL SECTION HEADINGS & TITLES
      const headings = document.querySelectorAll<HTMLElement>(
        "section h2:not([data-no-gsap]), section h3.section-title"
      );

      headings.forEach((heading) => {
        // Skip hero headline which has its own entry
        if (heading.closest("#hero")) return;

        gsap.fromTo(
          heading,
          {
            opacity: 0,
            y: 50,
            filter: "blur(6px)",
          },
          {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            duration: 1.1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: heading,
              start: "top 88%",
              toggleActions: "play none none none",
            },
          }
        );
      });

      // 2. ANIMS FOR SECTION BADGE PILLS (CATEGORIES & TAGS)
      const badges = document.querySelectorAll<HTMLElement>(
        "section .inline-flex.rounded-full:not([data-no-gsap])"
      );

      badges.forEach((badge) => {
        if (badge.closest("#hero")) return;

        gsap.fromTo(
          badge,
          {
            opacity: 0,
            y: 24,
            scale: 0.92,
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            ease: "back.out(1.5)",
            scrollTrigger: {
              trigger: badge,
              start: "top 90%",
              toggleActions: "play none none none",
            },
          }
        );
      });

      // 3. ANIMS FOR SUPPORTING HEADLINE SUBTITLES & PARAGRAPHS
      const sectionParagraphs = document.querySelectorAll<HTMLElement>(
        "section .max-w-3xl p, section .border-b p, section .max-w-lg p"
      );

      sectionParagraphs.forEach((para) => {
        if (para.closest("#hero")) return;

        gsap.fromTo(
          para,
          {
            opacity: 0,
            y: 30,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.95,
            ease: "power2.out",
            scrollTrigger: {
              trigger: para,
              start: "top 88%",
              toggleActions: "play none none none",
            },
          }
        );
      });

      // 4. ANIMS FOR IMAGES & SHOWCASE FRAMES
      const images = document.querySelectorAll<HTMLElement>(
        "section img:not([data-no-gsap]), section .group\\/img, section .relative.overflow-hidden.rounded-2xl"
      );

      images.forEach((img) => {
        // Skip hero astronaut or horizontal work track items (they have custom scrub)
        if (img.closest("#hero") || img.closest(".capability-horizontal-card")) return;

        gsap.fromTo(
          img,
          {
            opacity: 0,
            y: 40,
            scale: 0.96,
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 1.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: img,
              start: "top 86%",
              toggleActions: "play none none none",
            },
          }
        );
      });

      // 5. STAGGERED REVEALS FOR CARDS & GRID CONTAINERS
      const gridContainers = document.querySelectorAll<HTMLElement>(
        "#why-choose .grid, #showreel .grid, #insights .grid, #process .grid"
      );

      gridContainers.forEach((grid) => {
        const cards = Array.from(grid.children) as HTMLElement[];
        if (cards.length === 0) return;

        gsap.fromTo(
          cards,
          {
            opacity: 0,
            y: 45,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.85,
            stagger: 0.12,
            ease: "power2.out",
            scrollTrigger: {
              trigger: grid,
              start: "top 82%",
              toggleActions: "play none none none",
            },
          }
        );
      });

      // 6. SUBTLE PARALLAX ON BACKGROUND COSMIC NEBULAE GLOWS
      const ambientGlows = document.querySelectorAll<HTMLElement>(
        "section .blur-\\[160px\\], section .blur-\\[180px\\]"
      );

      ambientGlows.forEach((glow) => {
        const parentSec = glow.closest("section");
        if (!parentSec) return;

        gsap.to(glow, {
          y: 70,
          ease: "none",
          scrollTrigger: {
            trigger: parentSec,
            start: "top bottom",
            end: "bottom top",
            scrub: 1.5,
          },
        });
      });

      // Refresh ScrollTrigger to recalculate precise offsets once DOM settles
      const timer = setTimeout(() => {
        ScrollTrigger.refresh();
      }, 500);

      return () => clearTimeout(timer);
    });

    return () => {
      ctx.revert();
    };
  }, []);

  return null;
}
