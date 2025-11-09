import React from "react";

const AboutStorySection = () => {
  return (
    <section
      id="about-story"
      className="w-full bg-gradient-to-b from-[#f9f3e9] via-[#f7f2ea] to-[#f9f4ec] text-slate-900"
    >
      <div className="max-w-6xl mx-auto px-4 py-16 md:py-20">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] items-start">
          {/* LEFT: MAIN COPY */}
          <div className="space-y-6">
            {/* Label pill */}
            <div className="inline-flex items-center gap-2 px-5 py-1.5 rounded-full bg-white/90 border border-orange-200 shadow-[0_10px_30px_rgba(15,23,42,0.06)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_16px_40px_rgba(15,23,42,0.12)]">
              <span className="h-1.5 w-1.5 rounded-full bg-orange-500 animate-pulse" />
              <span className="text-[11px] font-semibold tracking-[0.22em] uppercase text-orange-600">
                Why this book
              </span>
            </div>

            <div className="space-y-3">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight text-[#111827]">
                Written for the people who sit on the floor beside the dog
              </h2>
              <div className="h-1 w-20 rounded-full bg-gradient-to-r from-orange-500 via-orange-300 to-transparent origin-left transition-transform duration-300 hover:scale-x-125" />
            </div>

            <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
              <span className="font-semibold">
                Strong with Hearts and Hounds
              </span>{" "}
              was born out of years of working in places where emotions are big
              and language can be small: therapy rooms, classrooms, family
              homes and residential care. In all of those spaces, dogs were not
              “tools”, but steady, feeling companions in the work.
            </p>

            <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
              Instead of offering a neat model or protocol, the book slows down
              to notice what is really happening in the room — the tiny shifts
              when a child relaxes against a dog, when an adult finds words
              more easily with a warm body at their feet, when a dog quietly
              shows us a limit that needs respecting.
            </p>

            <div className="grid gap-4 sm:grid-cols-2 pt-2">
              {/* Card 01 */}
              <div className="group relative rounded-2xl bg-white border border-slate-200 px-4 py-4 shadow-[0_10px_30px_rgba(15,23,42,0.06)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(15,23,42,0.14)] hover:border-orange-300">
                <div className="absolute -top-2 left-4 h-6 w-6 rounded-full bg-orange-500/10 border border-orange-300 flex items-center justify-center text-[11px] font-semibold text-orange-700 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:bg-orange-500/20">
                  01
                </div>
                <p className="mt-4 text-[11px] font-semibold tracking-[0.18em] uppercase text-orange-600">
                  For your real life
                </p>
                <p className="mt-2 text-xs sm:text-sm text-slate-700 leading-relaxed">
                  Written with busy practitioners, parents and carers in mind —
                  readable in short bursts, grounded in real stories you can
                  recognise from your own setting.
                </p>
              </div>

              {/* Card 02 */}
              <div className="group relative rounded-2xl bg-white border border-slate-200 px-4 py-4 shadow-[0_10px_30px_rgba(15,23,42,0.06)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(15,23,42,0.14)] hover:border-orange-300">
                <div className="absolute -top-2 left-4 h-6 w-6 rounded-full bg-orange-500/10 border border-orange-300 flex items-center justify-center text-[11px] font-semibold text-orange-700 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:bg-orange-500/20">
                  02
                </div>
                <p className="mt-4 text-[11px] font-semibold tracking-[0.18em] uppercase text-orange-600">
                  Holding both dog &amp; human
                </p>
                <p className="mt-2 text-xs sm:text-sm text-slate-700 leading-relaxed">
                  The wellbeing and consent of dogs is held as seriously as the
                  needs of children, families and adults — partnership, not
                  performance.
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT: IMAGE + PILLARS CARD */}
          <div className="space-y-5 lg:space-y-6">
            {/* Image block */}
            <div className="group relative overflow-hidden rounded-3xl bg-slate-900/5 border border-orange-200/70 shadow-[0_18px_45px_rgba(15,23,42,0.10)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_24px_60px_rgba(15,23,42,0.18)]">
              <div className="aspect-[4/3] w-full overflow-hidden">
                <img
                  src="https://img.freepik.com/premium-photo/cute-dog-glasses-reading-book-neutral-background_113954-1626.jpg"
                  alt="Child and adult sitting with a dog"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              {/* small overlay label */}
              <div className="absolute bottom-3 left-3 inline-flex items-center rounded-full bg-black/70 px-3 py-1 text-[11px] font-medium text-orange-50 backdrop-blur-sm transition-all duration-300 group-hover:bg-black/80 group-hover:translate-y-[-2px]">
                Real rooms · Real dogs
              </div>
            </div>

            {/* Pillars card */}
            <div className="rounded-3xl bg-white border border-slate-200 px-5 py-5 shadow-[0_16px_40px_rgba(15,23,42,0.10)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_22px_55px_rgba(15,23,42,0.16)] hover:border-orange-300">
              <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-orange-600">
                Four everyday arenas
              </p>

              <div className="mt-3 grid gap-3 sm:grid-cols-2 text-xs sm:text-sm text-slate-800">
                <div className="space-y-1.5">
                  <p className="font-semibold text-slate-900">
                    Therapeutic care
                  </p>
                  <p>Sessions where dogs quietly anchor big feelings.</p>
                </div>
                <div className="space-y-1.5">
                  <p className="font-semibold text-slate-900">Education</p>
                  <p>Classrooms, corridors and playgrounds with paws.</p>
                </div>
                <div className="space-y-1.5">
                  <p className="font-semibold text-slate-900">Parenting</p>
                  <p>Family life where dogs hold stories and routines.</p>
                </div>
                <div className="space-y-1.5">
                  <p className="font-semibold text-slate-900">
                    Care &amp; support
                  </p>
                  <p>Homes and services for older adults and vulnerable people.</p>
                </div>
              </div>

              <div className="mt-4 h-px w-full bg-gradient-to-r from-transparent via-orange-400/70 to-transparent" />

              <p className="mt-3 text-[11px] sm:text-xs text-slate-600">
                This isn’t a promise that dogs “fix” anything. It’s an invitation
                to notice how they change the feel of our work, and what we owe
                them in return.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutStorySection;
