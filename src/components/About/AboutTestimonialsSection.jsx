import React from "react";

export default TestimonialsSection = () => {
  return (
    <section
      id="testimonials"
      className="w-full bg-[#0b0b10] text-white"
    >
      <div className="max-w-6xl mx-auto px-4 py-12 md:py-20">
        {/* HEADER */}
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-5 py-1.5 rounded-full bg-black/70 border border-orange-400/60 shadow-[0_14px_40px_rgba(0,0,0,0.7)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_20px_60px_rgba(0,0,0,0.9)]">
            <span className="h-1.5 w-1.5 rounded-full bg-orange-400 animate-pulse" />
            <span className="text-[11px] font-semibold tracking-[0.22em] uppercase text-orange-100">
              Testimonials
            </span>
          </div>

          <div className="space-y-3">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight text-white">
              How this book lands in real rooms
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-200 leading-relaxed">
              Early readers from therapy, education, parenting and care describe
              Strong with Hearts and Hounds as a book they can actually carry
              into everyday work — and leave on the kitchen table.
            </p>
          </div>
        </div>

        {/* TESTIMONIAL GRID */}
        <div className="mt-12 grid gap-6 md:gap-7 md:grid-cols-3">
          {/* Card 1 */}
          <div className="group relative flex flex-col rounded-3xl bg-black/70 border border-slate-800 px-5 py-5 sm:px-6 sm:py-6 shadow-[0_16px_50px_rgba(0,0,0,0.7)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_26px_80px_rgba(0,0,0,0.9)] hover:border-orange-400/70">
            {/* top accent */}
            <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-orange-500 via-orange-300 to-transparent opacity-80" />

            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-orange-500/15 border border-orange-300/60 text-lg shadow-sm">
                <span className="translate-y-[-1px]">“</span>
              </div>
              <div>
                <p className="text-sm font-semibold text-white">
                  Child &amp; family therapist
                </p>
                <p className="text-[11px] text-gray-400">
                  Community mental health service
                </p>
              </div>
            </div>

            <p className="mt-4 text-xs sm:text-sm text-gray-200 leading-relaxed">
              <span className="text-orange-300 font-medium">
                “It feels like sitting in supervision with someone who actually
                understands dogs.”
              </span>{" "}
              The stories are gentle but honest, and the reflections helped me
              name what my dog is already doing in the room — and what I need to
              protect for her.”
            </p>

            <div className="mt-4 text-[11px] font-semibold tracking-[0.18em] uppercase text-orange-400">
              Holds both the work and the dog
            </div>
          </div>

          {/* Card 2 */}
          <div className="group relative flex flex-col rounded-3xl bg-black/70 border border-slate-800 px-5 py-5 sm:px-6 sm:py-6 shadow-[0_16px_50px_rgba(0,0,0,0.7)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_26px_80px_rgba(0,0,0,0.9)] hover:border-orange-400/70">
            <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-orange-500 via-orange-300 to-transparent opacity-80" />

            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-orange-500/15 border border-orange-300/60 text-lg shadow-sm">
                <span className="translate-y-[-1px]">“</span>
              </div>
              <div>
                <p className="text-sm font-semibold text-white">
                  Assistant head &amp; SENCO
                </p>
                <p className="text-[11px] text-gray-400">
                  Mainstream primary school
                </p>
              </div>
            </div>

            <p className="mt-4 text-xs sm:text-sm text-gray-200 leading-relaxed">
              “We already had a school dog, but this book gave us{" "}
              <span className="text-orange-300 font-medium">
                language and small, doable changes
              </span>{" "}
              — things like how we introduce her to new classes, when she gets to
              opt out, and how we talk about her feelings with the children.”
            </p>

            <div className="mt-4 text-[11px] font-semibold tracking-[0.18em] uppercase text-orange-400">
              Practical for busy school days
            </div>
          </div>

          {/* Card 3 */}
          <div className="group relative flex flex-col rounded-3xl bg-black/70 border border-slate-800 px-5 py-5 sm:px-6 sm:py-6 shadow-[0_16px_50px_rgba(0,0,0,0.7)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_26px_80px_rgba(0,0,0,0.9)] hover:border-orange-400/70">
            <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-orange-500 via-orange-300 to-transparent opacity-80" />

            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-orange-500/15 border border-orange-300/60 text-lg shadow-sm">
                <span className="translate-y-[-1px]">“</span>
              </div>
              <div>
                <p className="text-sm font-semibold text-white">
                  Care home manager &amp; daughter
                </p>
                <p className="text-[11px] text-gray-400">
                  Residential setting for older adults
                </p>
              </div>
            </div>

            <p className="mt-4 text-xs sm:text-sm text-gray-200 leading-relaxed">
              “I read it first as a manager, then again as a daughter. It helped
              our team see{" "}
              <span className="text-orange-300 font-medium">
                why our residents light up around the dog
              </span>{" "}
              — and what we need to notice when she’s tired or saying no.”
            </p>

            <div className="mt-4 text-[11px] font-semibold tracking-[0.18em] uppercase text-orange-400">
              Human, tender and very real
            </div>
          </div>
        </div>

        {/* FOOTER LINE */}
        <div className="mt-10 max-w-3xl mx-auto text-center">
          <p className="text-[11px] sm:text-xs text-gray-400">
            These are composite voices based on real roles and settings, shared
            with permission. The details have been gently blended to protect
            privacy while keeping the heart of the feedback.
          </p>
        </div>
      </div>
    </section>
  );
};


