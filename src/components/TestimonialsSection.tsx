"use client";

import { Star, Quote, Sparkles } from "lucide-react";

export default function TestimonialsSection() {
  const testimonials = [
    {
      quote:
        "RND Technosoft overhauled our core 3D interactive web visualizer from the ground up. Their engineering prowess in WebGL and Next.js delivered a 4x boost in framerates and a massive jump in client conversions.",
      author: "Marcus Vance",
      role: "VP of Product Engineering",
      company: "AuraSpace Technologies",
      avatar: "MV",
      rating: 5,
    },
    {
      quote:
        "The AI infrastructure and automated vector search pipeline built by RND Technosoft saved our data engineering team 6 months of trial-and-error. Sub-15ms response times across 200k daily queries.",
      author: "Elena Rostova",
      role: "Chief Technology Officer",
      company: "Synapse Financial",
      avatar: "ER",
      rating: 5,
    },
    {
      quote:
        "Incredible professionalism, agile cadence, and deep architectural insight. RND Technosoft feels like an elite in-house strike team rather than an external agency.",
      author: "David Chen",
      role: "Head of Infrastructure",
      company: "Kinetix Robotics",
      avatar: "DC",
      rating: 5,
    },
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-950/60 border border-indigo-500/30 text-indigo-300 text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
            Client Endorsements
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Trusted By Engineering Leaders{" "}
            <span className="bg-gradient-to-r from-indigo-400 via-sky-300 to-cyan-400 bg-clip-text text-transparent">
              Worldwide
            </span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Hear directly from enterprise teams who scaled their mission-critical products with RND Technosoft.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="p-7 rounded-2xl bg-slate-900/40 border border-slate-800 hover:border-slate-700 flex flex-col justify-between transition-all hover:bg-slate-900/70"
            >
              <div>
                <div className="flex items-center gap-1 text-amber-400 mb-4">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>
                <p className="text-slate-300 text-sm leading-relaxed italic">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>

              <div className="mt-6 pt-5 border-t border-slate-800/80 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-cyan-500 to-indigo-600 flex items-center justify-center font-bold text-xs text-white">
                  {t.avatar}
                </div>
                <div>
                  <div className="text-sm font-semibold text-white">{t.author}</div>
                  <div className="text-xs text-slate-400">
                    {t.role} • <span className="text-cyan-400">{t.company}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
