import React from "react";

const AboutFeaturesSection = () => {
  return (
    <section
      id="about-features"
      className="w-full bg-gradient-to-b from-white via-[#fdf7f0] to-[#f7f2ea] text-slate-900"
    >
      <div className="max-w-6xl mx-auto px-4 py-12 md:py-20">
        {/* HEADER */}
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-5 py-1.5 rounded-full bg-[#f7f2ea] border border-orange-200 shadow-[0_8px_24px_rgba(15,23,42,0.06)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_14px_36px_rgba(15,23,42,0.12)]">
            <span className="h-1.5 w-1.5 rounded-full bg-orange-500 animate-pulse" />
            <span className="text-[11px] font-semibold tracking-[0.22em] uppercase text-orange-600">
              Who this book is for
            </span>
          </div>

          <div className="space-y-3">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight text-[#0f172a]">
              A companion for the people holding the room
            </h2>
            <div className="mx-auto h-1 w-24 rounded-full bg-gradient-to-r from-orange-500 via-orange-300 to-transparent origin-center transition-transform duration-300 hover:scale-x-125" />
          </div>

          <p className="text-sm sm:text-base md:text-lg text-slate-700 leading-relaxed">
            Whether you’re in a clinic, classroom, family home or care setting,
            this book is written for the adults who quietly hold space — and for
            the dogs who stand beside them.
          </p>
        </div>

        {/* FEATURE GRID */}
        <div className="mt-12 grid gap-6 md:gap-7 md:grid-cols-2">
          <div className="group relative overflow-hidden rounded-3xl bg-[#f9f4ec] border border-orange-100 px-5 py-5 sm:px-6 sm:py-6 shadow-[0_10px_28px_rgba(15,23,42,0.06)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_55px_rgba(15,23,42,0.16)] hover:border-orange-300">
            <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-orange-500 via-orange-300 to-orange-200 opacity-70" />
            <div className="absolute -right-8 -bottom-10 h-24 w-24 rounded-full bg-orange-500/10 blur-2xl pointer-events-none" />

            <div className="flex items-start gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white border border-orange-200 text-xl shadow-sm transition-all duration-300 group-hover:-translate-y-0.5 group-hover:shadow-[0_10px_24px_rgba(15,23,42,0.16)] group-hover:rotate-3">
                🧠
              </div>
              <div className="space-y-1.5">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-orange-600">
                  Therapists &amp; practitioners
                </p>
                <h3 className="text-sm sm:text-base font-semibold text-[#111827]">
                  Bringing dogs into trauma-aware work
                </h3>
              </div>
            </div>

            <ul className="mt-3 space-y-1.5 text-xs sm:text-sm text-slate-700">
              <li>• Stories that look like real sessions, not case studies.</li>
              <li>• Language for talking about dogs’ roles in supervision.</li>
              <li>• Gentle prompts to notice consent, pacing and limits.</li>
            </ul>

            <div className="mt-3 text-[11px] font-semibold tracking-[0.18em] uppercase text-orange-500 group-hover:text-orange-600 transition-colors">
              Clinical, but still deeply human
            </div>
          </div>

          {/* Card 2 – Schools & educators */}
          <div className="group relative overflow-hidden rounded-3xl bg-[#f9f4ec] border border-orange-100 px-5 py-5 sm:px-6 sm:py-6 shadow-[0_10px_28px_rgba(15,23,42,0.06)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_55px_rgba(15,23,42,0.16)] hover:border-orange-300">
            <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-orange-500 via-orange-300 to-orange-200 opacity-70" />
            <div className="absolute -left-10 -bottom-12 h-24 w-24 rounded-full bg-orange-400/10 blur-2xl pointer-events-none" />

            <div className="flex items-start gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white border border-orange-200 text-xl shadow-sm transition-all duration-300 group-hover:-translate-y-0.5 group-hover:shadow-[0_10px_24px_rgba(15,23,42,0.16)] group-hover:-rotate-3">
                🏫
              </div>
              <div className="space-y-1.5">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-orange-600">
                  Teachers &amp; school staff
                </p>
                <h3 className="text-sm sm:text-base font-semibold text-[#111827]">
                  Making classrooms feel a little safer
                </h3>
              </div>
            </div>

            <ul className="mt-3 space-y-1.5 text-xs sm:text-sm text-slate-700">
              <li>• Examples from corridors, reading corners and playgrounds.</li>
              <li>• Ideas for boundaries, routines and shared language.</li>
              <li>• Ways to hold the dog’s needs alongside school demands.</li>
            </ul>

            <div className="mt-3 text-[11px] font-semibold tracking-[0.18em] uppercase text-orange-500 group-hover:text-orange-600 transition-colors">
              For pastoral leads &amp; classroom staff
            </div>
          </div>

          {/* Card 3 – Parents & caregivers */}
          <div className="group relative overflow-hidden rounded-3xl bg-[#f9f4ec] border border-orange-100 px-5 py-5 sm:px-6 sm:py-6 shadow-[0_10px_28px_rgba(15,23,42,0.06)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_55px_rgba(15,23,42,0.16)] hover:border-orange-300">
            <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-orange-500 via-orange-300 to-orange-200 opacity-70" />
            <div className="absolute -right-10 -bottom-12 h-24 w-24 rounded-full bg-orange-500/10 blur-2xl pointer-events-none" />

            <div className="flex items-start gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white border border-orange-200 text-xl shadow-sm transition-all duration-300 group-hover:-translate-y-0.5 group-hover:shadow-[0_10px_24px_rgba(15,23,42,0.16)] group-hover:rotate-2">
                🏡
              </div>
              <div className="space-y-1.5">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-orange-600">
                  Parents &amp; caregivers
                </p>
                <h3 className="text-sm sm:text-base font-semibold text-[#111827]">
                  Everyday family life with a dog in the mix
                </h3>
              </div>
            </div>

            <ul className="mt-3 space-y-1.5 text-xs sm:text-sm text-slate-700">
              <li>• Moments where dogs hold routines, stories and secrets.</li>
              <li>• Ways to support children through the dog, not over them.</li>
              <li>• Reflections on grief, change and growing up with dogs.</li>
            </ul>

            <div className="mt-3 text-[11px] font-semibold tracking-[0.18em] uppercase text-orange-500 group-hover:text-orange-600 transition-colors">
              For kitchen tables &amp; living rooms
            </div>
          </div>

          {/* Card 4 – Care & support teams */}
          <div className="group relative overflow-hidden rounded-3xl bg-[#f9f4ec] border border-orange-100 px-5 py-5 sm:px-6 sm:py-6 shadow-[0_10px_28px_rgba(15,23,42,0.06)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_55px_rgba(15,23,42,0.16)] hover:border-orange-300">
            <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-orange-500 via-orange-300 to-orange-200 opacity-70" />
            <div className="absolute -left-8 -bottom-10 h-24 w-24 rounded-full bg-orange-400/12 blur-2xl pointer-events-none" />

            <div className="flex items-start gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white border border-orange-200 text-xl shadow-sm transition-all duration-300 group-hover:-translate-y-0.5 group-hover:shadow-[0_10px_24px_rgba(15,23,42,0.16)] group-hover:-rotate-2">
                🤝
              </div>
              <div className="space-y-1.5">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-orange-600">
                  Care &amp; support teams
                </p>
                <h3 className="text-sm sm:text-base font-semibold text-[#111827]">
                  Working alongside vulnerable adults &amp; elders
                </h3>
              </div>
            </div>

            <ul className="mt-3 space-y-1.5 text-xs sm:text-sm text-slate-700">
              <li>• Stories from residential homes and community support.</li>
              <li>• Attention to pace, dignity and sensory overwhelm.</li>
              <li>• Thinking about when a dog says “enough” and why that matters.</li>
            </ul>

            <div className="mt-3 text-[11px] font-semibold tracking-[0.18em] uppercase text-orange-500 group-hover:text-orange-600 transition-colors">
              For teams who already care deeply
            </div>
          </div>
        </div>

        {/* FOOTER LINE */}
        <div className="mt-10 max-w-3xl mx-auto text-center">
          <p className="text-[11px] sm:text-xs text-slate-600">
            You don’t have to be a “dog expert” to use this book. You just need
            to be someone who notices what happens in the room when a dog is
            there — and wants that to be kind, ethical and genuinely helpful
            for everyone.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutFeaturesSection;
