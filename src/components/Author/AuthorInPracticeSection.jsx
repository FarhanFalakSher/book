import React from "react";

const AuthorFeaturedBooksSection = () => {
  const works = [
    {
      id: 1,
      title: "Whispers of the Pages",
      description:
        "A heartfelt journey through imagination, where stories breathe and characters find life.",
      cta: "Read More",
      image:
        "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=900&q=80",
    },
    {
      id: 2,
      title: "Canvas of Dreams",
      description:
        "A celebration of art, literature, and design — the soul of every book John creates.",
      cta: "Read More",
      image:
        "https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=900&q=80",
    },
  ];

  const featureImage =
    "https://i.ytimg.com/vi/otaSWMeT8w8/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLASfjdV6WWdH8gR_OTM_OMRBbKa7A";

  return (
    <section
      id="books"
      className="w-full bg-gradient-to-b from-[#fef9f4] via-[#fbf2e3] to-[#f4e6d4] text-slate-900 py-14 sm:py-18 md:py-24"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* HEADER */}
        <header
          className="mb-10 sm:mb-12 space-y-4 max-w-4xl mx-auto lg:mx-0 text-center lg:text-left"
          data-aos="fade-right"
        >
          {/* badge */}
          <div className="inline-flex items-center px-5 sm:px-6 py-1.5 sm:py-2 rounded-full bg-gradient-to-r from-[#f3ca76] to-[#d59b2a] shadow-[0_12px_36px_rgba(212,163,55,0.45)] border border-[#f4d58d]">
            <span className="text-[10px] sm:text-[11px] font-semibold tracking-[0.26em] uppercase text-amber-50">
              Featured Works
            </span>
          </div>

          {/* big heading */}
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight leading-tight">
            <span className="text-[#111827]">Featured Books &amp; </span>
            <span className="text-[#c28a18]">Design Projects</span>
          </h2>

          {/* intro copy */}
          <p className="text-xs sm:text-sm md:text-lg text-slate-700 leading-relaxed max-w-2xl mx-auto lg:mx-0">
            Explore a collection of stories and visual projects that bring
            imagination, craft, and design together — from intimate narratives
            to bold, expressive covers.
          </p>
        </header>

        {/* MAIN LAYOUT */}
        <div className="flex flex-col gap-8 lg:gap-10 lg:flex-row lg:items-start">
          {/* LEFT COLUMN: STACKED CARDS */}
          <div
            className="w-full lg:w-[55%] space-y-5 sm:space-y-6"
            data-aos="fade-right"
          >
            {works.map((work, index) => (
              <article
                key={work.id}
                className="group flex flex-col sm:flex-row bg-white rounded-3xl sm:rounded-[32px] shadow-[0_18px_50px_rgba(15,23,42,0.10)] overflow-hidden border border-slate-100/70 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_24px_80px_rgba(15,23,42,0.18)]"
                data-aos="fade-right"
                data-aos-delay={80 + index * 90}
              >
                {/* image side */}
                <div className="relative w-full sm:w-40 md:w-60 h-40 sm:h-44 md:h-48 flex-shrink-0">
                  <img
                    src={work.image}
                    alt={work.title}
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>

                {/* text side */}
                <div className="flex-1 px-4 py-4 sm:px-6 sm:py-6 md:px-8 md:py-7 flex flex-col justify-center">
                  <h3 className="text-base sm:text-lg md:text-xl font-semibold text-slate-900 mb-1.5">
                    {work.title}
                  </h3>
                  <p className="text-xs sm:text-sm md:text-base text-slate-600 leading-relaxed mb-3">
                    {work.description}
                  </p>

                  <button className="inline-flex items-center gap-2 text-xs sm:text-sm md:text-[15px] font-semibold text-[#c28a18] group-hover:text-[#a67411] transition-colors">
                    <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#fdf3d2] border border-[#e4c165] text-[13px]">
                      📖
                    </span>
                    <span className="underline-offset-4 group-hover:underline">
                      {work.cta}
                    </span>
                  </button>
                </div>
              </article>
            ))}
          </div>

          {/* RIGHT COLUMN: FEATURE CARD */}
          <div
            className="w-full lg:w-[45%] mt-2 lg:mt-0"
            data-aos="fade-left"
            data-aos-delay="160"
          >
            <div className="relative w-full min-h-[220px] xs:min-h-[260px] sm:min-h-[320px] lg:min-h-[420px] rounded-[28px] sm:rounded-[40px] overflow-hidden shadow-[0_24px_80px_rgba(15,23,42,0.35)]">
              {/* photo */}
              <img
                src={featureImage}
                alt="Creativity in every cover"
                className="absolute inset-0 h-full w-full object-cover"
              />

              {/* white border like in screenshot */}
              <div className="pointer-events-none absolute inset-0 rounded-[28px] sm:rounded-[40px] border border-white/85" />

              {/* dark gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/45 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-transparent" />

              {/* text content bottom-left */}
              <div className="absolute inset-x-0 bottom-0 p-4 sm:p-6 md:p-8 space-y-2 sm:space-y-3 text-white">
                <p className="text-[10px] sm:text-[11px] md:text-xs font-semibold tracking-[0.22em] uppercase text-amber-300">
                  Cover Design Story
                </p>
                <h3 className="text-lg sm:text-2xl md:text-3xl font-extrabold leading-tight drop-shadow-md">
                  Creativity in Every Cover
                </h3>
                <p className="text-xs sm:text-sm md:text-base text-slate-100/90 max-w-md leading-relaxed">
                  Each design tells a story — crafted with heart, emotion, and a
                  touch of timeless elegance.
                </p>
              </div>

              {/* soft outer glow */}
              <div className="pointer-events-none absolute -inset-4 sm:-inset-5 rounded-[32px] sm:rounded-[46px] bg-gradient-to-b from-white/10 via-transparent to-amber-300/10 blur-xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AuthorFeaturedBooksSection;
