import React from "react";

const AuthorSection = () => {
  return (
    <section
      id="author"
      className="relative w-full overflow-hidden bg-gradient-to-br from-[#020203] via-[#050509] to-[#000000] text-white"
    >
      {/* Soft background glows in orange */}
      <div className="pointer-events-none absolute -top-10 -left-10 h-52 w-52 rounded-full bg-orange-500/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-16 -right-10 h-56 w-56 rounded-full bg-orange-300/14 blur-3xl" />

      <div className="relative max-w-6xl mx-auto px-4 py-16 md:py-20">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] items-center">
          {/* LEFT: TEXT */}
          <div className="space-y-7" data-aos="fade-right">
            {/* Label Pill */}
            <div className="inline-flex items-center gap-2 px-5 py-1.5 rounded-full bg-black/80 border border-orange-400/60 shadow-[0_14px_40px_rgba(0,0,0,0.7)]">
              <span className="h-1.5 w-1.5 rounded-full bg-orange-400" />
              <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-orange-100">
                About the author
              </span>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-white leading-tight">
                The heart behind the work,
                <br className="hidden sm:block" />
                the stories and the dogs.
              </h2>

              <div className="h-1 w-20 bg-gradient-to-r from-orange-500 via-orange-300 to-white rounded-full" />

              <p className="text-sm sm:text-base text-gray-200 leading-relaxed">
                A therapeutic practitioner, educator and lifelong dog lover,
                the author has spent years working where vulnerability and care
                meet — in therapy rooms, classrooms, family homes and
                residential settings, always with dogs woven into the everyday.
              </p>

              <p className="text-sm sm:text-base text-gray-200 leading-relaxed">
                <span className="font-semibold text-orange-300">
                  Strong with Hearts and Hounds
                </span>{" "}
                grows out of real practice, not theory: listening closely to
                children, families and adults, watching dogs with respect, and
                noticing the subtle shifts in safety, trust and connection when
                both humans and dogs are truly seen.
              </p>
            </div>

            {/* HIGHLIGHT CARDS */}
            <div className="grid gap-4 sm:grid-cols-3 pt-1">
              <div className="rounded-xl bg-black/70 border border-neutral-800 px-4 py-3 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-orange-400 hover:shadow-[0_18px_50px_rgba(0,0,0,0.9)]">
                <p className="text-[11px] font-semibold tracking-[0.16em] uppercase text-orange-300">
                  Experience
                </p>
                <p className="mt-1 text-xs sm:text-[13px] text-gray-100 leading-relaxed">
                  Years in therapeutic care, education and support work — with
                  dogs present as steady partners, not props.
                </p>
              </div>

              <div className="rounded-xl bg-black/70 border border-neutral-800 px-4 py-3 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:bg-orange-500/10 hover:border-orange-300 hover:shadow-[0_18px_50px_rgba(0,0,0,0.9)]">
                <p className="text-[11px] font-semibold tracking-[0.16em] uppercase text-orange-200">
                  Approach
                </p>
                <p className="mt-1 text-xs sm:text-[13px] text-gray-100 leading-relaxed">
                  Trauma-aware, attachment-focused and neurodiversity-affirming
                  — warm, boundaried and deeply practical.
                </p>
              </div>

              <div className="rounded-xl bg-black/70 border border-neutral-800 px-4 py-3 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-orange-400 hover:shadow-[0_18px_50px_rgba(0,0,0,0.9)]">
                <p className="text-[11px] font-semibold tracking-[0.16em] uppercase text-orange-300">
                  Centred on
                </p>
                <p className="mt-1 text-xs sm:text-[13px] text-gray-100 leading-relaxed">
                  The wellbeing of both humans and dogs — relationship,
                  consent and partnership at the core.
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT: AUTHOR CARD */}
          <div className="flex justify-center lg:justify-end" data-aos="fade-left">
            <div className="relative w-full max-w-sm group">
              {/* Glow behind card */}
              <div className="pointer-events-none absolute -inset-4 rounded-3xl bg-gradient-to-br from-orange-500/25 via-orange-300/18 to-white/8 blur-2xl -z-10" />

              <div className="relative rounded-3xl bg-black/80 border border-neutral-800 shadow-[0_28px_80px_rgba(0,0,0,1)] overflow-hidden backdrop-blur-sm transition-transform duration-500 group-hover:-translate-y-2">
                {/* Author image */}
                <div className="h-60 sm:h-72 w-full overflow-hidden">
                  <img
                    src="https://i.pinimg.com/1200x/97/7c/3b/977c3be663037c923335981216312a75.jpg"
                    alt="Author portrait with dog"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>

                {/* Info at bottom */}
                <div className="px-5 py-4 border-t border-neutral-800 flex flex-col gap-2 bg-gradient-to-r from-black via-black/95 to-black">
                  <div>
                    <p className="text-sm font-semibold text-white tracking-wide">
                      Author Name
                    </p>
                    <p className="text-xs text-gray-300 mt-0.5">
                      Therapeutic practitioner, educator and advocate for
                      dog–human partnerships in everyday care.
                    </p>
                  </div>

                  <div className="mt-2 flex flex-wrap gap-2">
                    <span className="px-2.5 py-1 rounded-full bg-black/80 text-[11px] text-gray-100 border border-neutral-700">
                      Therapeutic care &amp; support
                    </span>
                    <span className="px-2.5 py-1 rounded-full bg-black/80 text-[11px] text-gray-100 border border-neutral-700">
                      Schools, families &amp; parenting
                    </span>
                    <span className="px-2.5 py-1 rounded-full bg-black/80 text-[11px] text-gray-100 border border-neutral-700">
                      Dogs in practice
                    </span>
                  </div>

                  {/* Small accent line */}
                  <div className="mt-3 h-px w-full bg-gradient-to-r from-transparent via-orange-400/70 to-transparent" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AuthorSection;
