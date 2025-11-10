import React from "react";

const HomeNextSection = () => {
  return (
    <section
      id="about"
      className="relative w-full bg-gradient-to-br from-[#f9fafb] via-white to-[#fff4e7] text-slate-900"
    >
      <div className="max-w-6xl mx-auto px-4 py-16 md:py-24">
        <div className="grid gap-12 lg:gap-16 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)] lg:items-center">
          {/* LEFT: TEXT BLOCK */}
          <div data-aos="fade-right" className="space-y-7">
            {/* Label pill */}
            <div className="inline-flex items-center gap-2 px-5 py-1.5 rounded-full bg-white border border-orange-200 shadow-[0_10px_30px_rgba(15,23,42,0.08)]">
              <span className="text-base">🐾</span>
              <span className="text-[10px] font-bold tracking-[0.18em] uppercase text-orange-500">
                The everyday power of dogs
              </span>
            </div>

            {/* Heading */}
            <div className="space-y-3">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight text-[#020617] leading-tight">
                Dogs at the heart of
                {/* <br className="hidden sm:block" /> */}
                 therapy, education,
                {/* <br className="hidden sm:block" /> */}
                parenting &amp; care
              </h2>
              <div className="h-1 w-24 rounded-full bg-orange-500" />
            </div>

            {/* Lead + body */}
            <div className="space-y-3 text-sm sm:text-base md:text-lg leading-relaxed text-[#374151]">
              <p className="text-base sm:text-lg md:text-xl text-[#111827]">
                <span className="font-semibold italic text-[#020617]">
                  Strong with Hearts and Hounds
                </span>{" "}
                is a warm, non-fiction reflection on how dogs quietly support
                children, families and vulnerable people — not through tricks or
                performance, but through steady, everyday presence.
              </p>
              <p>
                From classrooms and therapy rooms to homes and care settings,
                this book celebrates those small, real-world moments when a
                dog’s calm softens the room and helps people breathe a little
                easier.
              </p>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 pt-2">
              <button className="px-4 py-1.5 rounded-full text-[11px] font-semibold bg-black text-white border border-black shadow-[0_10px_30px_rgba(15,23,42,0.35)] hover:-translate-y-0.5 transition-transform">
                Therapy &amp; emotional support
              </button>
              <button className="px-4 py-1.5 rounded-full text-[11px] font-semibold bg-orange-50 text-orange-700 border border-orange-300 hover:bg-orange-100 transition-colors">
                Education &amp; classrooms
              </button>
              <button className="px-4 py-1.5 rounded-full text-[11px] font-semibold bg-slate-50 text-slate-900 border border-slate-300 hover:bg-slate-100 transition-colors">
                Parenting &amp; family life
              </button>
              <button className="px-4 py-1.5 rounded-full text-[11px] font-semibold bg-[#fff7ed] text-[#c05621] border border-[#fed7aa] hover:bg-[#ffedd5] transition-colors">
                Care &amp; support work
              </button>
            </div>
          </div>

          {/* RIGHT: IMAGE CARD */}
          <div
            data-aos="fade-left"
            className="relative flex justify-center lg:justify-end"
          >
            {/* soft glow behind card */}
            <div className="absolute -inset-6 bg-gradient-to-tr from-orange-100/70 via-white to-sky-100/60 blur-3xl -z-10" />

            <div className="relative w-full max-w-xl rounded-[32px] overflow-hidden border border-slate-100 bg-black shadow-[0_30px_90px_rgba(15,23,42,0.45)] group">
              <img
                src="https://images.pexels.com/photos/1959054/pexels-photo-1959054.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Dogs alongside people in a care setting"
                className="w-full h-[260px] sm:h-[300px] md:h-[320px] object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* HOVER TEXT */}
              <div className="absolute inset-0 bg-opacity-50 flex flex-col items-center justify-center text-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 px-4 ">
                <p className="font-bold text-lg mb-2">
                  Real warmth. Real connection.
                </p>
                <p className="text-sm sm:text-base ">
                  Therapy sessions, classrooms and homes where a dog quietly
                  sits beside someone and changes the whole tone of the room.
                </p>
              </div>

              {/* gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/40 to-transparent" />

              {/* small floating pill top-left */}
              <div className="absolute top-4 left-4">
                <span className="inline-flex items-center px-3 py-1 rounded-full bg-white/85 text-[10px] font-semibold tracking-[0.16em] uppercase text-slate-800 backdrop-blur-sm">
                  Field-tested insight
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeNextSection;
