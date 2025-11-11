import React from "react";

const ApproachSection = () => {
  return (
    <section id="approach" className="w-full bg-[#fdf7ea] text-slate-900">
      <div className="max-w-6xl mx-auto  px-4 py-12 md:py-20 space-y-16">
        {/* APPROACH & METHODOLOGY */}
        <div className="space-y-10">
          {/* Heading */}
          <div className="text-center space-y-3 max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight text-[#111827]">
              Approach &amp; Methodology
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-slate-700 leading-relaxed">
              Combining real-world therapeutic experience with practical ideas
              you can use straight away in your own setting.
            </p>
          </div>

          {/* 3 cards */}
          <div className="grid gap-6 md:grid-cols-3">
            {/* Card 1 */}
            <div className="flex flex-col items-center rounded-3xl border border-orange-300 bg-[#fffaf1] px-6 py-6 shadow-[0_10px_26px_rgba(15,23,42,0.08)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_18px_40px_rgba(15,23,42,0.18)] hover:border-orange-400">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-500 text-white text-sm font-semibold mb-3">
                1
              </div>
              <h3 className="text-base sm:text-lg font-semibold text-[#111827] text-center">
                Professional
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-slate-700 text-center leading-relaxed">
                Grounded in therapeutic practice and ethical canine work,
                suitable for use in professional settings and teams.
              </p>
            </div>

            {/* Card 2 */}
            <div className="flex flex-col items-center rounded-3xl border border-orange-300 bg-[#fffaf1] px-6 py-6 shadow-[0_10px_26px_rgba(15,23,42,0.08)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_18px_40px_rgba(15,23,42,0.18)] hover:border-orange-400">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-500 text-white text-sm font-semibold mb-3">
                2
              </div>
              <h3 className="text-base sm:text-lg font-semibold text-[#111827] text-center">
                Accessible
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-slate-700 text-center leading-relaxed">
                Clear, jargon-light language and short chapters that work for
                busy therapists, teachers, parents and carers.
              </p>
            </div>

            {/* Card 3 */}
            <div className="flex flex-col items-center rounded-3xl border border-orange-300 bg-[#fffaf1] px-6 py-6 shadow-[0_10px_26px_rgba(15,23,42,0.08)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_18px_40px_rgba(15,23,42,0.18)] hover:border-orange-400">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-500 text-white text-sm font-semibold mb-3">
                3
              </div>
              <h3 className="text-base sm:text-lg font-semibold text-[#111827] text-center">
                Evidence-Informed
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-slate-700 text-center leading-relaxed">
                Draws on trauma, attachment and neurodiversity-informed
                thinking, always translated into everyday practice.
              </p>
            </div>
          </div>
        </div>

        {/* CTA BAND */}
        <div className="rounded-[32px] bg-[#f28b14] text-white px-6 py-10 sm:px-10 sm:py-12 shadow-[0_18px_60px_rgba(15,23,42,0.45)]">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              Ready to transform your practice?
            </h3>
            <p className="text-sm sm:text-base md:text-lg text-orange-50 leading-relaxed">
              Join practitioners, teachers and families who are discovering how
              thoughtful, dog-inclusive work can deepen safety, connection and
              care.
            </p>
          </div>

          {/* Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            <a
              href="#get-the-book"
              className="w-full sm:w-auto inline-flex items-center justify-center rounded-full bg-white text-[#b45309] px-7 py-2.5 text-sm font-semibold tracking-wide shadow-[0_14px_32px_rgba(15,23,42,0.35)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_20px_46px_rgba(15,23,42,0.55)]"
            >
              <span className="mr-2">🛒</span>
              Pre-order hardcover
            </a>
            <a
              href="#sample"
              className="w-full sm:w-auto inline-flex items-center justify-center rounded-full border border-white/80 bg-transparent text-sm font-semibold tracking-wide px-7 py-2.5 text-white shadow-[0_10px_26px_rgba(15,23,42,0.35)] transition-all duration-300 hover:bg-white/10"
            >
              <span className="mr-2">📥</span>
              Download sample chapter
            </a>
          </div>

          {/* Benefits row */}
          <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4 text-[11px] sm:text-xs text-orange-50/90">
            <div className="flex items-center gap-1.5">
              <span className="text-lg">✔</span>
              <span>Free UK &amp; EU shipping</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="text-lg">✔</span>
              <span>Early reader pricing</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="text-lg">✔</span>
              <span>Bonus reflective prompts download</span>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-orange-300/60 text-[11px] sm:text-xs text-orange-50/80 text-center">
            Available in hardcover, paperback &amp; ebook · Worldwide shipping
            options · 30-day returns on print copies
          </div>
        </div>
      </div>
    </section>
  );
};

export default ApproachSection