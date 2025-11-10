import React from "react";

const AuthorHeroSection = () => {
  return (
    <section
      id="author-hero"
      className="relative w-full overflow-hidden text-white min-h-[80vh] flex items-center "
    >
      {/* ===== BACKGROUND ===== */}
      <div className="absolute inset-0 -z-10 ">
        <img
          src="https://images.pexels.com/photos/46274/pexels-photo-46274.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt="Author workspace with open book"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/80 to-black/85" />
        <div className="absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-black/80 via-black/60 to-transparent" />
      </div>

      {/* ===== FLOATING LIGHTS ===== */}
      <div className="pointer-events-none absolute left-1/4 top-1/3 h-2 w-2 rounded-full bg-yellow-400/70 blur-[2px] animate-pulse" />
      <div className="pointer-events-none absolute right-1/4 top-1/2 h-2 w-2 rounded-full bg-yellow-300/70 blur-[2px] animate-pulse" />
      <div className="pointer-events-none absolute left-1/2 bottom-1/3 h-2 w-2 rounded-full bg-yellow-500/70 blur-[2px]" />

      {/* ===== CONTENT ===== */}
<div className="relative w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-30 sm:pt-24 md:pt-28 pb-20 flex items-center">
        <div
          className="w-full text-center lg:text-left flex flex-col items-center lg:items-start space-y-6"
          data-aos="fade-up"
        >
          {/* LABEL PILL */}
          <div
            className="inline-flex items-center gap-2 rounded-full bg-[#b57a16] px-6 py-1.5 text-[11px] font-semibold tracking-[0.22em] uppercase text-yellow-50 shadow-[0_10px_30px_rgba(0,0,0,0.8)]"
            data-aos="fade-up"
            data-aos-delay="50"
          >
            Featured Author
          </div>

          {/* HEADING */}
          <h1
            className="max-w-3xl text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight"
            data-aos="fade-up"
            data-aos-delay="120"
          >
            <span className="block">Discover the</span>
            <span className="block">
              <span className="text-white">Art of</span>{" "}
              <span className="text-[#facc4a]">Storytelling</span>
            </span>
            <span className="block text-[#facc4a]">&amp; Imagination</span>
          </h1>

          {/* UNDERLINE */}
          <div
            className="h-1 w-24 bg-gradient-to-r from-[#facc4a] via-yellow-400 to-transparent rounded-full mx-auto lg:mx-0"
            data-aos="fade-right"
            data-aos-delay="200"
          />

          {/* SUBTEXT */}
          <p
            className="max-w-3xl text-sm sm:text-base md:text-lg text-gray-200 leading-relaxed"
            data-aos="fade-up"
            data-aos-delay="250"
          >
            From heartfelt words to captivating worlds, this author weaves
            stories that steady anxious hearts, honour lived experience, and
            celebrate the quiet power of dogs in human lives — blending{" "}
            <span className="font-semibold text-yellow-200">emotion</span>,{" "}
            <span className="font-semibold text-yellow-200">care</span> and{" "}
            <span className="font-semibold text-yellow-200">craft</span> in
            every chapter.
          </p>

          {/* META LINE */}
          <p
            className="text-[11px] sm:text-xs text-yellow-100/90 tracking-[0.18em] uppercase"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            Therapeutic Practitioner • Educator • Lifelong Dog Person
          </p>

          {/* BUTTONS */}
          <div
            className="pt-4 flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-3 sm:gap-4"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            {/* Glow effect behind buttons */}
            <div className="pointer-events-none absolute bottom-10 left-0 right-0 mx-auto max-w-lg h-32 bg-[#facc4a]/25 blur-3xl -z-10" />

            <a
              href="#books"
              className="inline-flex w-full sm:w-auto items-center justify-center rounded-full bg-[#facc4a] px-8 py-3 text-sm sm:text-base font-semibold text-[#3f2604] shadow-[0_16px_40px_rgba(0,0,0,0.8)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_22px_60px_rgba(0,0,0,0.9)] hover:bg-[#fbd54f]"
            >
              Explore My Books
            </a>

            <a
              href="#author"
              className="inline-flex w-full sm:w-auto items-center justify-center rounded-full border border-[#facc4a] px-8 py-3 text-sm sm:text-base font-semibold text-[#facc4a] bg-black/40 backdrop-blur-sm shadow-[0_12px_32px_rgba(0,0,0,0.7)] transition-all duration-300 hover:bg-[#facc4a]/10 hover:-translate-y-1"
            >
              About the Author
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AuthorHeroSection;
