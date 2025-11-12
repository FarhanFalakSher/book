import React from "react";

const ThemePracticalToolsSection = () => {
  return (
    <section
      id="theme-practical-tools"
      className="w-full bg-gradient-to-b from-[#fdf5e9] via-[#fdf1e1] to-[#f9ebd6] text-slate-900 py-12 sm:py-14 md:py-16"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:gap-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] items-start">
          {/* LEFT: TEXT BLOCK */}
          <div className="space-y-5" data-aos="fade-right">
            {/* pill + glow */}
            <div className="relative inline-block">
              <div className="pointer-events-none absolute inset-0 blur-2xl bg-[#f97316]/35 opacity-70" />
              <div className="relative inline-flex items-center rounded-full bg-[#f97316] px-6 py-1.5 text-[10px] sm:text-[11px] font-semibold tracking-[0.26em] uppercase text-amber-50 shadow-[0_14px_35px_rgba(0,0,0,0.25)]">
                From page to practice
              </div>
            </div>

            <div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-[#0f172a]">
                Tools you can carry into real work
              </h2>
              <div className="mt-2 h-[3px] w-24 rounded-full bg-gradient-to-r from-[#f97316] via-[#fbbf24] to-transparent" />
            </div>

            <p className="text-xs sm:text-sm md:text-base text-slate-700 leading-relaxed">
              <span className="font-semibold">Strong with Hearts and Hounds</span>{" "}
              isn&apos;t just stories — each chapter finishes with gentle, usable
              tools designed for supervision, staff rooms and kitchen tables
              alike. Nothing overwhelming, nothing perfect; just{" "}
              <span className="font-semibold">small, realistic shifts</span> that
              keep both humans and dogs in mind.
            </p>

            {/* Bulleted list */}
            <ul className="space-y-2.5 text-xs sm:text-sm md:text-[15px] text-slate-700">
              <li className="flex items-start gap-3">
                <span className="mt-[3px] flex h-6 w-6 items-center justify-center rounded-full bg-[#fef9c3] text-[12px] text-[#22c55e] shadow-sm">
                  ✓
                </span>
                <span>
                  Reflective questions that can be used in{" "}
                  <span className="font-semibold">supervision or team debriefs</span>.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-[3px] flex h-6 w-6 items-center justify-center rounded-full bg-[#fae8ff] text-[12px] text-[#a855f7] shadow-sm">
                  ✓
                </span>
                <span>
                  Simple prompts to help you talk with{" "}
                  <span className="font-semibold">children, families and staff</span>{" "}
                  about what the dog is noticing.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-[3px] flex h-6 w-6 items-center justify-center rounded-full bg-[#dcfce7] text-[12px] text-[#16a34a] shadow-sm">
                  ✓
                </span>
                <span>
                  Quick check-ins to protect{" "}
                  <span className="font-semibold">dog welfare, consent and rest</span>{" "}
                  — even on busy days.
                </span>
              </li>
            </ul>
          </div>

          {/* RIGHT: AUDIENCE CARDS */}
          <div
            className="grid gap-4 sm:gap-5 sm:grid-cols-2"
            data-aos="fade-left"
          >
            {[
              {
                title: "For therapists",
                desc: "Use vignettes and questions to deepen case thinking, risk conversations and endings.",
                icon: "🧠",
                tone: "from-[#fee2e2] to-[#fff7ed]",
              },
              {
                title: "For teachers",
                desc: "Turn stories into practical ideas for regulation corners, nurture groups and transitions.",
                icon: "🏫",
                tone: "from-[#e0f2fe] to-[#fefce8]",
              },
              {
                title: "For parents & carers",
                desc: "Find language for tricky feelings, family routines and shared responsibility with dogs.",
                icon: "🏡",
                tone: "from-[#dcfce7] to-[#f0f9ff]",
              },
              {
                title: "For support teams",
                desc: "Shape policies, handovers and daily routines that keep dogs, staff and residents safe.",
                icon: "🤝",
                tone: "from-[#fef3c7] to-[#fee2e2]",
              },
            ].map((item, idx) => (
              <article
                key={item.title}
                className={`group relative rounded-2xl bg-gradient-to-br ${item.tone} border border-white shadow-[0_14px_40px_rgba(15,23,42,0.14)] px-4 py-4 sm:px-5 sm:py-5 flex flex-col gap-2.5 overflow-hidden transition-all duration-400 hover:-translate-y-1.5 hover:shadow-[0_20px_70px_rgba(15,23,42,0.22)]`}
                data-aos="fade-left"
                data-aos-delay={100 + idx * 70}
              >
                <div className="pointer-events-none absolute -top-8 -right-10 h-20 w-20 rounded-full bg-white/40 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-400" />

                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-[0_6px_18px_rgba(15,23,42,0.18)] text-lg">
                    {item.icon}
                  </div>
                  <h3 className="text-sm sm:text-base font-semibold text-[#0f172a]">
                    {item.title}
                  </h3>
                </div>

                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  {item.desc}
                </p>
              </article>
            ))}
          </div>
        </div>

        {/* FOOTNOTE */}
        <div
          className="mt-8 md:mt-10 text-center"
          data-aos="fade-up"
          data-aos-delay="320"
        >
          <p className="text-[11px] sm:text-xs md:text-sm text-slate-600 max-w-3xl mx-auto">
            Every tool is offered as an{" "}
            <span className="font-semibold">invitation, not instruction</span> —
            so you can adapt it to your setting, your dog and your own way of
            working.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ThemePracticalToolsSection;