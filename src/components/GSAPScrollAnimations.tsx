"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function GSAPScrollAnimations() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // 1. WAVES ANIMATION FOR ALL MAIN H2 & H3 TITLES ON SCROLL TOP TO BOTTOM
      function wrapTextInWaveSpans(el: HTMLElement) {
        if (el.dataset.waveProcessed) {
          return el.querySelectorAll<HTMLElement>(".global-wave-char");
        }
        el.dataset.waveProcessed = "true";

        const walker = document.createTreeWalker(el, NodeFilter.SHOW_TEXT);
        const textNodes: Text[] = [];
        let node: Text | null;
        while ((node = walker.nextNode() as Text | null)) {
          if (node.nodeValue && node.nodeValue.trim().length > 0) {
            textNodes.push(node);
          }
        }

        textNodes.forEach((textNode) => {
          const text = textNode.nodeValue || "";
          const span = document.createElement("span");
          span.className = "inline-block";
          span.innerHTML = text
            .split("")
            .map((char) =>
              char === " "
                ? "&nbsp;"
                : `<span class="global-wave-char inline-block will-change-transform">${char}</span>`
            )
            .join("");
          textNode.parentNode?.replaceChild(span, textNode);
        });

        return el.querySelectorAll<HTMLElement>(".global-wave-char");
      }

      const headings = document.querySelectorAll<HTMLElement>(
        "section h2, section h3"
      );

      headings.forEach((heading) => {
        // Skip hero headline which has its own entry
        if (heading.closest("#hero")) return;

        // If already handled by custom WaveText or typewriter, skip
        if (
          heading.querySelector(".wave-char-span, .animate-text-wave, .animate-cursor-blink")
        ) {
          return;
        }

        const chars = wrapTextInWaveSpans(heading);
        if (!chars || chars.length === 0) return;

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: heading,
            start: "top 88%",
            toggleActions: "restart none none reset",
          },
        });

        // 1. Initial State before wave enters: slightly lower, soft blur
        tl.set(chars, {
          opacity: 0,
          y: 22,
          filter: "blur(4px)",
        });

        // 2. Wave Crest: characters rise up to the wave crest, highlight in gold
        tl.to(chars, {
          opacity: 1,
          y: -10,
          color: "#FFD400",
          filter: "blur(0px)",
          duration: 0.45,
          ease: "power2.out",
          stagger: 0.028,
        });

        // 3. Wave Settle: smooth glide down into baseline and settle with original color
        tl.to(
          chars,
          {
            y: 0,
            color: "inherit",
            duration: 0.42,
            ease: "power2.inOut",
            stagger: 0.028,
            onComplete: () => {
              gsap.set(chars, { clearProps: "color,transform,filter" });
            },
          },
          "<0.18"
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
              toggleActions: "restart none none reset",
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
              toggleActions: "restart none none reset",
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
