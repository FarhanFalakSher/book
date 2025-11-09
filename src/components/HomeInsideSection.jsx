import React from "react";

const HomeInsideSection = () => {
  return (
    <section
      id="inside"
      className="relative w-full bg-gradient-to-b from-[#fff7ee] via-[#f7efe7] to-[#f5ede4] text-slate-900"
    >
      {/* soft background glows */}
      <div className="pointer-events-none absolute -top-24 left-[-80px] h-64 w-64 rounded-full bg-orange-300/25 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-28 right-[-80px] h-64 w-64 rounded-full bg-orange-500/20 blur-3xl" />

      <div className="relative max-w-6xl mx-auto px-4 py-16 md:py-24">
        {/* HEADING */}
        <div
          className="max-w-3xl mx-auto text-center space-y-5"
          data-aos="fade-up"
        >
          {/* pill */}
          <div className="inline-flex items-center gap-2 px-5 py-1.5 rounded-full bg-white/90 border border-orange-200 shadow-[0_10px_30px_rgba(15,23,42,0.10)]">
            <span className="h-1.5 w-1.5 rounded-full bg-orange-500" />
            <span className="text-[11px] font-semibold tracking-[0.22em] uppercase text-orange-600">
              Inside the book
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight text-[#111827]">
            A clear, grounded look at life with dogs in care
          </h2>

          <p className="text-sm sm:text-base md:text-lg text-slate-700 leading-relaxed">
            Each chapter weaves together story, reflection and next-day ideas,
            so you can see what really happens in real rooms with real people —
            and then gently adapt those moments to your own work, family or
            setting.
          </p>
        </div>

        {/* CARDS */}
        <div className="mt-14 flex justify-center">
          <div className="grid w-full max-w-5xl gap-8 md:grid-cols-3 items-stretch">
            {/* Card 1 */}
            <div
              className="group relative flex flex-col overflow-hidden rounded-[28px] bg-white border border-slate-200 shadow-[0_18px_45px_rgba(15,23,42,0.12)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_26px_70px_rgba(15,23,42,0.20)] hover:border-orange-500"
              data-aos="fade-up"
              data-aos-delay="80"
            >
              {/* top accent */}
              <div className="h-1 w-full bg-gradient-to-r from-orange-600 via-orange-400 to-orange-300" />

              {/* image */}
              <div className="relative aspect-[4/3] w-full overflow-hidden">
                <img
                  src="https://i.pinimg.com/1200x/35/db/8f/35db8fec9db47a1dc11581aa85be6e58.jpg"
                  alt="Dog bringing calm to a therapy space"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* number badge */}
                <div className="absolute bottom-3 left-3 inline-flex items-center rounded-full bg-black/85 px-3 py-1 text-[11px] font-semibold text-white tracking-[0.16em] uppercase shadow-md">
                  01 · Stories
                </div>
              </div>

              {/* text */}
              <div className="flex flex-1 flex-col px-6 pt-5 pb-6 gap-3">
                <h3 className="text-base font-semibold text-[#111827]">
                  Stories from real rooms
                </h3>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed flex-1 min-h-[96px]">
                  Short, vivid stories from therapy, education, parenting and
                  care show how a dog’s steady presence can soften a room,
                  steady a child or give an older person the courage to reach out.
                </p>

                <div className="mt-1 text-[11px] font-semibold tracking-[0.16em] uppercase text-orange-600">
                  Feel how the work actually looks
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div
              className="group relative flex flex-col overflow-hidden rounded-[28px] bg-white border border-slate-200 shadow-[0_18px_45px_rgba(15,23,42,0.12)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_26px_70px_rgba(15,23,42,0.20)] hover:border-orange-500"
              data-aos="fade-up"
              data-aos-delay="140"
            >
              <div className="h-1 w-full bg-gradient-to-r from-orange-600 via-orange-400 to-orange-300" />

              <div className="relative aspect-[4/3] w-full overflow-hidden">
                <img
                  src="https://i.pinimg.com/1200x/0b/3f/f8/0b3ff803af0926657f2c6a7cee2ce4ba.jpg"
                  alt="Dog resting calmly with a child"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                <div className="absolute bottom-3 left-3 inline-flex items-center rounded-full bg-black/85 px-3 py-1 text-[11px] font-semibold text-white tracking-[0.16em] uppercase shadow-md">
                  02 · Reflection
                </div>
              </div>

              <div className="flex flex-1 flex-col px-6 pt-5 pb-6 gap-3">
                <h3 className="text-base font-semibold text-[#111827]">
                  Gentle, grounded reflection
                </h3>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed flex-1 min-h-[96px]">
                  After each story, the book pauses to notice what the dog might
                  be showing about safety, regulation and relationship — giving
                  you language and insight you can bring into supervision, team
                  discussions or daily practice.
                </p>

                <div className="mt-1 text-[11px] font-semibold tracking-[0.16em] uppercase text-orange-600">
                  Make sense of what you see
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div
              className="group relative flex flex-col overflow-hidden rounded-[28px] bg-white border border-slate-200 shadow-[0_18px_45px_rgba(15,23,42,0.12)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_26px_70px_rgba(15,23,42,0.20)] hover:border-orange-500"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="h-1 w-full bg-gradient-to-r from-orange-600 via-orange-400 to-orange-300" />

              <div className="relative aspect-[4/3] w-full overflow-hidden">
                <img
                  src="https://iheartdogs.com/wp-content/uploads/2025/05/shutterstock_2449552485.jpg"
                  alt="Person and dog walking together"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                <div className="absolute bottom-3 left-3 inline-flex items-center rounded-full bg-black/85 px-3 py-1 text-[11px] font-semibold text-white tracking-[0.16em] uppercase shadow-md">
                  03 · Practice
                </div>
              </div>

              <div className="flex flex-1 flex-col px-6 pt-5 pb-6 gap-3">
                <h3 className="text-base font-semibold text-[#111827]">
                  Ideas you can use the very next day
                </h3>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed flex-1 min-h-[96px]">
                  Simple prompts, questions and small exercises help you adapt
                  the ideas for your own context — a classroom, clinic, living
                  room or care home, always with the dog’s wellbeing in mind as
                  much as the humans’.
                </p>

                <div className="mt-1 text-[11px] font-semibold tracking-[0.16em] uppercase text-orange-600">
                  Carry it straight into your setting
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeInsideSection;
