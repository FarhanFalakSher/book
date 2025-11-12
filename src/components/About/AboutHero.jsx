import React from "react";
import { Link } from "react-router-dom";

const AboutHero = () => {
  return (
    <section
      id="about"
      className="relative w-full overflow-hidden text-white"
    >
      {/* BACKGROUND IMAGE + OVERLAY */}
      <div className="absolute inset-0">
        <img
          src="https://i.pinimg.com/736x/b5/66/89/b56689dc24f6541adc372c1e3af120f3.jpg"
          alt="Dog close to a person in a warm light"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/60 to-black/40" />
      </div>

      {/* SOFT ORANGE GLOWS */}
      <div className="absolute -top-24 -left-16 h-64 w-64 rounded-full bg-orange-500/25 blur-3xl" />
      <div className="absolute -bottom-32 -right-20 h-72 w-72 rounded-full bg-orange-400/25 blur-3xl" />

      {/* CONTENT */}
      <div className="relative max-w-7xl mx-auto px-4 py-20 pt-28 sm:pt-24 md:pt-28 sm:py-24 md:py-28 lg:py-32 min-h-[70vh] flex items-center">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] items-center w-full">
          {/* LEFT: MAIN TEXT */}
          <div className="space-y-6 text-center lg:text-left">
            {/* Pill label */}
            <div className="inline-flex items-center gap-2 px-5 py-1.5 rounded-full bg-black/70 border border-orange-300/70 shadow-[0_10px_40px_rgba(0,0,0,0.8)]">
              <span className="h-1.5 w-1.5 rounded-full bg-orange-400" />
              <span className="text-[11px] font-semibold tracking-[0.22em] uppercase text-orange-100">
                About the book
              </span>
            </div>

            {/* Title */}
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight tracking-tight">
              Strong with Hearts and Hounds
            </h1>

            {/* Tagline */}
            <p className="text-sm sm:text-base md:text-lg text-gray-200 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              The everyday power of dogs in life and support — in therapy,
              education, parenting and care. Real stories, real rooms, and
              small shifts that change how humans and dogs feel together.
            </p>

            {/* Chips: who it’s for */}
            <div className="mt-4 flex flex-wrap justify-center lg:justify-start gap-2">
              {[
                "Therapists & practitioners",
                "Teachers & school staff",
                "Parents & caregivers",
                "Care & support teams",
              ].map((item) => (
                <span
                  key={item}
                  className="px-3 py-1 rounded-full bg-black/60 border border-white/10 text-[11px] sm:text-xs text-gray-100"
                >
                  {item}
                </span>
              ))}
            </div>

            {/* CTAs */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3">
              <a
                href="#inside"
                className="w-full sm:w-auto inline-flex items-center justify-center px-7 py-2.5 rounded-full bg-orange-500 hover:bg-orange-600 text-sm font-semibold tracking-wide shadow-[0_18px_40px_rgba(0,0,0,0.9)] transition-colors"
              >
                Explore what’s inside
              </a>
             

<Link
  to="/author"  // 👈 navigate to your Author page/route
  className="w-full sm:w-auto inline-flex items-center justify-center px-7 py-2.5 rounded-full border border-orange-300/80 bg-black/40 text-sm font-semibold tracking-wide text-orange-100 hover:bg-black/70 transition-colors"
>
  Meet the author
</Link>

            </div>
          </div>

          {/* RIGHT: DETAIL CARD */}
          <div className="hidden sm:flex justify-center lg:justify-end">
            <div className="relative w-full max-w-sm">
              {/* Glow behind card */}
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-orange-500/40 via-white/10 to-orange-300/25 blur-2xl" />

              <div className="relative rounded-3xl bg-black/75 border border-white/10 backdrop-blur-sm px-6 py-5 shadow-[0_24px_80px_rgba(0,0,0,0.95)] space-y-4">
                <p className="text-[11px] font-semibold tracking-[0.22em] uppercase text-orange-300">
                  What this book offers
                </p>

                <p className="text-xs sm:text-sm text-gray-100 leading-relaxed">
                  Not a technique or a rigid program, but a companion: stories,
                  reflections and practical ideas that honour both the humans
                  and the dogs in therapeutic, educational and family life.
                </p>

                <div className="grid grid-cols-2 gap-3 text-[11px] sm:text-xs text-gray-200">
                  <div className="space-y-1">
                    <p className="font-semibold text-orange-200">
                      Everyday settings
                    </p>
                    <p>Therapy rooms, classrooms, homes and care environments.</p>
                  </div>
                  <div className="space-y-1">
                    <p className="font-semibold text-orange-200">
                      Tone &amp; approach
                    </p>
                    <p>Warm, trauma-aware, attachment-focused, dog-respecting.</p>
                  </div>
                </div>

                <div className="h-px w-full bg-gradient-to-r from-transparent via-orange-400/70 to-transparent" />

                <p className="text-[11px] text-gray-300 leading-relaxed">
                  For people who already care deeply — and want dogs in their
                  work and lives to feel thoughtful, ethical and deeply
                  connected, not just “used as tools”.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
