import React from "react";

const AuthorApproachSection = () => {
  return (
    <section
      id="author-approach"
      className="w-full bg-[#050816] text-amber-50 py-16 sm:py-20 md:py-24"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* HEADER */}
        <div
          className="text-center max-w-3xl mx-auto space-y-4"
          data-aos="fade-up"
        >
          {/* Pill */}
          <div className="inline-flex items-center rounded-full bg-[#e0b847] px-6 py-1.5 text-[11px] font-semibold tracking-[0.26em] uppercase text-slate-900 shadow-[0_16px_45px_rgba(0,0,0,0.55)]">
            How the work is shaped
          </div>

          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight">
            Grounded in{" "}
            <span className="text-[#facc4a]">real rooms, real dogs</span>
          </h2>

          {/* Subtext */}
          <p className="text-sm sm:text-base md:text-lg text-amber-100/90 leading-relaxed">
            Behind every page of{" "}
            <span className="font-semibold text-[#facc4a]">
              Strong with Hearts and Hounds
            </span>{" "}
            sits careful practice, supervision and deep respect for the dogs
            and people involved. The writing is shaped so that parents,
            therapists, teachers and carers can use it in{" "}
            <span className="font-semibold">
              therapy sessions, classrooms, family homes and care settings
            </span>
            — not just admire it on a shelf.
          </p>
        </div>

        {/* CARDS */}
        <div className="mt-12 md:mt-16 grid gap-8 md:gap-10 md:grid-cols-3">
          {/* CARD 1 */}
          <article
            className="group relative rounded-3xl bg-gradient-to-b from-slate-900/95 via-slate-900/90 to-slate-900/95 border border-slate-700/60 shadow-[0_24px_70px_rgba(0,0,0,0.7)] p-6 sm:p-7 flex flex-col justify-between overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_30px_90px_rgba(0,0,0,0.9)]"
            data-aos="fade-up"
            data-aos-delay="80"
          >
            {/* Glow */}
            <div className="pointer-events-none absolute -top-16 -right-16 h-40 w-40 rounded-full bg-[#facc4a]/18 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="space-y-3">
              {/* Icon */}
              <div className="inline-flex items-center justify-center h-11 w-11 rounded-2xl bg-[#facc4a]/10 border border-[#facc4a]/40 backdrop-blur-sm">
                <span className="text-xl" aria-hidden="true">
                  🐾
                </span>
              </div>

              <h3 className="text-lg sm:text-xl font-semibold text-amber-50">
                Dog-first, always
              </h3>

              <p className="text-sm sm:text-base text-amber-100/80 leading-relaxed">
                Work begins with the dog&apos;s wellbeing: consent, pace, choice
                and safety. When dogs are protected and understood, anxious
                hearts in the room — children, adults and staff — can settle
                and do the work they came to do.
              </p>
            </div>

            <p className="mt-5 text-xs sm:text-sm font-medium uppercase tracking-[0.22em] text-amber-300/70">
              Ethics • Welfare • Consent
            </p>
          </article>

          {/* CARD 2 */}
          <article
            className="group relative rounded-3xl bg-gradient-to-b from-slate-900/95 via-slate-900/90 to-slate-900/95 border border-slate-700/60 shadow-[0_24px_70px_rgba(0,0,0,0.7)] p-6 sm:p-7 flex flex-col justify-between overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_30px_90px_rgba(0,0,0,0.9)]"
            data-aos="fade-up"
            data-aos-delay="170"
          >
            <div className="pointer-events-none absolute -bottom-16 -right-10 h-40 w-40 rounded-full bg-[#facc4a]/16 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="space-y-3">
              <div className="inline-flex items-center justify-center h-11 w-11 rounded-2xl bg-[#facc4a]/10 border border-[#facc4a]/40 backdrop-blur-sm">
                <span className="text-xl" aria-hidden="true">
                  💬
                </span>
              </div>

              <h3 className="text-lg sm:text-xl font-semibold text-amber-50">
                Lived experience, honoured
              </h3>

              <p className="text-sm sm:text-base text-amber-100/80 leading-relaxed">
                Stories grow from years spent in therapy rooms, school corridors,
                staff meetings and night-time debriefs at the kitchen table.
                Details are blended and anonymised to protect confidentiality,
                while the emotional truth is held with care.
              </p>
            </div>

            <p className="mt-5 text-xs sm:text-sm font-medium uppercase tracking-[0.22em] text-amber-300/70">
              Real stories • Real rooms
            </p>
          </article>

          {/* CARD 3 */}
          <article
            className="group relative rounded-3xl bg-gradient-to-b from-slate-900/95 via-slate-900/90 to-slate-900/95 border border-slate-700/60 shadow-[0_24px_70px_rgba(0,0,0,0.7)] p-6 sm:p-7 flex flex-col justify-between overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_30px_90px_rgba(0,0,0,0.9)]"
            data-aos="fade-up"
            data-aos-delay="260"
          >
            <div className="pointer-events-none absolute -top-12 -left-12 h-40 w-40 rounded-full bg-[#facc4a]/18 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="space-y-3">
              <div className="inline-flex items-center justify-center h-11 w-11 rounded-2xl bg-[#facc4a]/10 border border-[#facc4a]/40 backdrop-blur-sm">
                <span className="text-xl" aria-hidden="true">
                  🧭
                </span>
              </div>

              <h3 className="text-lg sm:text-xl font-semibold text-amber-50">
                Written to be used
              </h3>

              <p className="text-sm sm:text-base text-amber-100/80 leading-relaxed">
                Chapters are built like gentle tools — reflections, questions
                and practical ideas you can carry straight into supervision,
                lesson planning, team training or a quiet moment with a parent
                who needs to feel less alone.
              </p>
            </div>

            <p className="mt-5 text-xs sm:text-sm font-medium uppercase tracking-[0.22em] text-amber-300/70">
              Practical • Reflective • Kind
            </p>
          </article>
        </div>

        {/* QUOTE BAR */}
        <div
          className="mt-14 md:mt-16 rounded-3xl border border-amber-200/15 bg-gradient-to-r from-slate-900 via-slate-900/95 to-slate-900 px-5 sm:px-7 md:px-10 py-6 sm:py-7 md:py-8 flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-6 shadow-[0_22px_70px_rgba(0,0,0,0.7)]"
          data-aos="fade-up"
          data-aos-delay="340"
        >
          <div className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-[#facc4a]/15 border border-[#facc4a]/40">
            <span className="text-2xl" aria-hidden="true">
              “
            </span>
          </div>

          <p className="text-sm sm:text-base md:text-lg text-amber-100/90 leading-relaxed">
            <span className="font-semibold text-[#facc4a]">
              Strong with Hearts and Hounds
            </span>{" "}
            is for the people who sit with worry and hope every day — parents,
            therapists, teachers and carers — and for the dogs who steady the
            room beside them, one quiet breath at a time.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AuthorApproachSection;
