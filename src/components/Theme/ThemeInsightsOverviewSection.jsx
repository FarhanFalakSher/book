import React from "react";

const ThemeInsightsOverviewSection = () => {
  return (
    <section
      id="theme-insights-overview"
      className="w-full bg-gradient-to-b from-[#fdf7ee] via-[#fbf1e3] to-[#f7ebd2] text-slate-900 py-16 sm:py-20 md:py-24"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* HEADER */}
        <div
          className="max-w-3xl mx-auto text-center space-y-4"
          data-aos="fade-up"
        >
          <div className="inline-flex items-center rounded-full bg-[#f97316] px-6 py-1.5 text-[11px] font-semibold tracking-[0.26em] uppercase text-amber-50 shadow-[0_14px_40px_rgba(0,0,0,0.25)]">
            Themes &amp; Insights
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-[#111827]">
            What you&apos;ll explore
          </h2>

          <p className="text-sm sm:text-base md:text-lg text-slate-700 leading-relaxed">
            Each chapter of <span className="font-semibold">Strong with Hearts
            and Hounds</span> holds a different lens on the bond between humans
            and dogs — from therapy rooms and classrooms to family homes and
            care settings — offering reflective questions and small, usable
            ideas for everyday practice.
          </p>
        </div>

        {/* THEMES GRID */}
        <div className="mt-12 md:mt-16 grid gap-8 md:gap-10 md:grid-cols-2">
          {/* Card 1 */}
          <article
            className="group relative rounded-3xl bg-white/90 border border-amber-100 shadow-[0_18px_55px_rgba(15,23,42,0.12)] p-6 sm:p-7 flex flex-col gap-3 overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_24px_80px_rgba(15,23,42,0.18)]"
            data-aos="fade-up"
            data-aos-delay="60"
          >
            <div className="pointer-events-none absolute -top-10 -right-12 h-32 w-32 rounded-full bg-[#f97316]/30 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="inline-flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#fff3df] border border-[#f5b565] text-xl">
                <span aria-hidden="true">🛋️</span>
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-[#111827]">
                Therapeutic companionship
              </h3>
            </div>

            <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
              How dogs steady anxious hearts in counselling, play therapy and
              mental health work — and what practitioners can notice, name and
              protect in the process.
            </p>

            <p className="mt-2 text-xs sm:text-sm font-medium uppercase tracking-[0.22em] text-[#b85610]">
              Regulation • Safety • Trust
            </p>
          </article>

          {/* Card 2 */}
          <article
            className="group relative rounded-3xl bg-white/90 border border-amber-100 shadow-[0_18px_55px_rgba(15,23,42,0.12)] p-6 sm:p-7 flex flex-col gap-3 overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_24px_80px_rgba(15,23,42,0.18)]"
            data-aos="fade-up"
            data-aos-delay="120"
          >
            <div className="pointer-events-none absolute -bottom-12 -right-10 h-32 w-32 rounded-full bg-[#f97316]/30 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="inline-flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#fff3df] border border-[#f5b565] text-xl">
                <span aria-hidden="true">🏫</span>
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-[#111827]">
                Learning &amp; classrooms
              </h3>
            </div>

            <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
              Dogs in corridors, nurture groups and playground edges — helping
              pupils practise attention, boundaries and repair without feeling
              like they&apos;re being &quot;managed.&quot;
            </p>

            <p className="mt-2 text-xs sm:text-sm font-medium uppercase tracking-[0.22em] text-[#b85610]">
              Curiosity • Play • Inclusion
            </p>
          </article>

          {/* Card 3 */}
          <article
            className="group relative rounded-3xl bg-white/90 border border-amber-100 shadow-[0_18px_55px_rgba(15,23,42,0.12)] p-6 sm:p-7 flex flex-col gap-3 overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_24px_80px_rgba(15,23,42,0.18)]"
            data-aos="fade-up"
            data-aos-delay="180"
          >
            <div className="pointer-events-none absolute -top-10 -left-12 h-32 w-32 rounded-full bg-[#f97316]/26 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="inline-flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#fff3df] border border-[#f5b565] text-xl">
                <span aria-hidden="true">🏡</span>
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-[#111827]">
                Everyday family moments
              </h3>
            </div>

            <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
              Kitchen tables, car journeys and bedtime — how dogs become a
              bridge for connection when words feel hard, and how families can
              share the emotional load.
            </p>

            <p className="mt-2 text-xs sm:text-sm font-medium uppercase tracking-[0.22em] text-[#b85610]">
              Attachment • Playfulness • Repair
            </p>
          </article>

          {/* Card 4 */}
          <article
            className="group relative rounded-3xl bg-white/90 border border-amber-100 shadow-[0_18px_55px_rgba(15,23,42,0.12)] p-6 sm:p-7 flex flex-col gap-3 overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_24px_80px_rgba(15,23,42,0.18)]"
            data-aos="fade-up"
            data-aos-delay="240"
          >
            <div className="pointer-events-none absolute -bottom-12 -left-10 h-32 w-32 rounded-full bg-[#f97316]/26 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="inline-flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#fff3df] border border-[#f5b565] text-xl">
                <span aria-hidden="true">🕊️</span>
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-[#111827]">
                Care, loss &amp; hope
              </h3>
            </div>

            <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
              Stories from residential care, hospice work and community teams,
              where dogs help everyone in the room hold grief, transition and
              uncertainty with a little more softness.
            </p>

            <p className="mt-2 text-xs sm:text-sm font-medium uppercase tracking-[0.22em] text-[#b85610]">
              Dignity • Goodbye • Continuity
            </p>
          </article>
        </div>

        {/* SMALL TAG STRIP */}
        <div
          className="mt-14 md:mt-16 flex flex-wrap items-center justify-center gap-3 sm:gap-4"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          {[
            "For parents",
            "For therapists",
            "For teachers",
            "For carers",
            "For dog people",
          ].map((label) => (
            <div
              key={label}
              className="inline-flex items-center rounded-full border border-[#f5b565] bg-white/80 px-4 sm:px-5 py-1.5 text-xs sm:text-sm font-semibold text-[#b85610] tracking-[0.16em] uppercase shadow-[0_10px_30px_rgba(148,124,80,0.25)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#fff7e3]"
            >
              {label}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ThemeInsightsOverviewSection;