import React from "react";

const TherapyEducationSection = () => {
  return (
    <section
      id="theme-therapy-education"
      className="w-full bg-[#f3f6fb] text-slate-900 py-12 sm:py-14 md:py-16"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* HEADER */}
        <div
          className="text-center max-w-3xl mx-auto space-y-3"
          data-aos="fade-up"
        >
          {/* Pill */}
          <div className="inline-flex items-center rounded-full bg-[#f97316] px-5 py-1.5 text-[10px] sm:text-[11px] font-semibold tracking-[0.26em] uppercase text-amber-50 shadow-[0_12px_30px_rgba(0,0,0,0.22)]">
            Theme focus
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#c25b0a]">
            Therapy &amp; Education
          </h2>

          {/* Underline */}
          <div className="flex justify-center">
            <span className="h-[3px] w-24 rounded-full bg-gradient-to-r from-[#f97316] via-[#facc15] to-transparent" />
          </div>

          <p className="text-sm sm:text-base md:text-lg text-slate-700 leading-relaxed">
            Showcasing real moments of care, learning and healing — where dogs
            empower people to connect, recover and grow emotionally in
            classrooms, therapy rooms and everyday life.
          </p>
        </div>

        {/* GALLERY WRAPPER WITH GLOW */}
        <div className="relative mt-10 md:mt-12" data-aos="fade-up">
          <div className="pointer-events-none absolute inset-0 mx-auto max-w-5xl h-full blur-3xl bg-white/40" />

          <div className="relative grid gap-5 sm:gap-6 md:gap-8 md:grid-cols-3">
            {/* Card 1 */}
            <figure className="group relative rounded-[32px] overflow-hidden bg-white shadow-[0_16px_50px_rgba(15,23,42,0.16)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_22px_80px_rgba(15,23,42,0.25)]">
              <div className="relative h-64 sm:h-72 md:h-80">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTr2BhWmZ1gWOb3ifzTxU7W2HbjaC7fqCo8uw&s"
                  alt="Therapy dog in a classroom with children"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Caption */}
                <figcaption className="absolute bottom-0 left-0 right-0 p-4 sm:p-5 text-white">
                  <div className="inline-flex items-center rounded-full bg-black/40 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] mb-1">
                    In the classroom
                  </div>
                  <p className="text-xs sm:text-sm leading-snug text-amber-50/95">
                    Dogs helping pupils practise focus, curiosity and gentle
                    boundaries in busy learning spaces.
                  </p>
                </figcaption>
              </div>
            </figure>

            {/* Card 2 */}
            <figure className="group relative rounded-[32px] overflow-hidden bg-white shadow-[0_16px_50px_rgba(15,23,42,0.16)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_22px_80px_rgba(15,23,42,0.25)]">
              <div className="relative h-64 sm:h-72 md:h-80">
                <img
                  src="https://images.fineartamerica.com/images-medium-large-5/compulsory-education-briton-riviere.jpg"
                  alt="Child working with a therapy dog and therapist"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-500" />

                <figcaption className="absolute bottom-0 left-0 right-0 p-4 sm:p-5 text-white">
                  <div className="inline-flex items-center rounded-full bg-black/40 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] mb-1">
                    Supported play
                  </div>
                  <p className="text-xs sm:text-sm leading-snug text-amber-50/95">
                    Structured games where dogs make therapeutic exercises feel
                    safe, playful and achievable.
                  </p>
                </figcaption>
              </div>
            </figure>

            {/* Card 3 */}
            <figure className="group relative rounded-[32px] overflow-hidden bg-white shadow-[0_16px_50px_rgba(15,23,42,0.16)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_22px_80px_rgba(15,23,42,0.25)]">
              <div className="relative h-64 sm:h-72 md:h-80">
                <img
                  src="https://images.squarespace-cdn.com/content/v1/5c3e3b1931d4df2a5401d843/f71e9ce4-498e-40d3-b29f-75db53491d03/Screenshot+2024-05-20+at+12.40.09%E2%80%AFPM.png"
                  alt="Dog receiving gentle therapeutic touch"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-500" />

                <figcaption className="absolute bottom-0 left-0 right-0 p-4 sm:p-5 text-white">
                  <div className="inline-flex items-center rounded-full bg-black/40 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] mb-1">
                    Therapeutic touch
                  </div>
                  <p className="text-xs sm:text-sm leading-snug text-amber-50/95">
                    Quiet, regulated moments where touch, breath and trust help
                    bodies and minds unwind.
                  </p>
                </figcaption>
              </div>
            </figure>
          </div>
        </div>

        {/* QUOTE */}
        <div
          className="mt-8 sm:mt-10 text-center"
          data-aos="fade-up"
          data-aos-delay="180"
        >
          <p className="text-xs sm:text-sm md:text-base text-slate-600 italic max-w-3xl mx-auto">
            “Through learning and therapy, dogs teach us patience, kindness and
            healing beyond words.”
          </p>
        </div>
      </div>
    </section>
  );
};

export default TherapyEducationSection