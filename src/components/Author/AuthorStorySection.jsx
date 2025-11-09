import React from "react";

const AuthorMeetSection = () => {
  return (
    <section
      id="author-meet"
      className="w-full bg-gradient-to-b from-[#fdf7ee] via-[#fbf1e3] to-[#f7ebd2] text-slate-900"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* LEFT: TEXT */}
          <div
            className="space-y-7 flex flex-col justify-center"
            data-aos="fade-right"
          >
            {/* Pill */}
            <div className="inline-flex items-center rounded-full bg-gradient-to-r from-[#b88617] via-[#c8941f] to-[#e0b847] px-7 py-2 text-[11px] font-semibold tracking-[0.26em] uppercase text-amber-50 shadow-[0_14px_40px_rgba(0,0,0,0.25)]">
              Meet the author
            </div>

            {/* Name */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-[#111827]">
              Author Name
            </h2>

            {/* Paragraphs */}
            <div className="space-y-4 text-base sm:text-lg text-slate-700 leading-relaxed max-w-xl">
              <p>
                Author Name is a therapeutic practitioner and educator who turns
                everyday moments with dogs into stories that steady anxious
                hearts and deepen connection. Years of work in therapy rooms,
                classrooms, family homes and care settings shape every page.
              </p>
              <p>
                Blending real-world practice, careful observation and a deep
                respect for canine wellbeing, their work aims to feel{" "}
                <span className="font-semibold">
                  honest, gentle and quietly transformative
                </span>{" "}
                — something you can carry into supervision, staff rooms and
                kitchen tables alike.
              </p>
            </div>

            {/* Buttons */}
            <div className="pt-3 flex flex-col sm:flex-row gap-3 sm:gap-4">
              <a
                href="#books"
                className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#b88617] via-[#d3aa2f] to-[#f3cd57] px-8 py-2.5 text-sm sm:text-base font-semibold text-amber-50 shadow-[0_18px_50px_rgba(15,23,42,0.35)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_70px_rgba(15,23,42,0.5)]"
              >
                View books
              </a>

              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-full border border-[#d9b44a] bg-transparent px-8 py-2.5 text-sm sm:text-base font-semibold text-[#b88617] shadow-[0_12px_30px_rgba(15,23,42,0.18)] transition-all duration-300 hover:bg-[#fdf5e3] hover:-translate-y-1"
              >
                Contact author
              </a>
            </div>
          </div>

          {/* RIGHT: IMAGE CARD */}
          <div
            className="flex justify-center lg:justify-end items-center"
            data-aos="fade-left"
          >
            <div className="relative w-full max-w-md rounded-[32px] shadow-[0_30px_90px_rgba(15,23,42,0.55)] overflow-hidden bg-black transform hover:-translate-y-1 transition-all duration-500">
              {/* Image */}
              <div className="relative h-[400px] sm:h-[460px] md:h-[500px] w-full">
                <img
                  src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1200"
                  alt="Author portrait"
                  className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-tr from-black/75 via-black/10 to-transparent mix-blend-multiply" />
              </div>

              {/* Text overlay */}
              <div className="absolute bottom-0 left-0 right-0 px-6 sm:px-8 py-5 sm:py-6">
                <h3 className="text-lg sm:text-xl font-semibold text-white">
                  Inspired by Emotion
                </h3>
                <p className="mt-1 text-sm sm:text-base text-gray-200 leading-relaxed">
                  Every story begins with a real room, a real family and a dog
                  who changes how the space feels — long before any words are
                  written down.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AuthorMeetSection;
