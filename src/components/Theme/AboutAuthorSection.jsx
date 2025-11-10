import React from "react";

export default AboutAuthorSection = () => {
  return (
    <section
      id="theme-about-author"
      className="w-full bg-[#f4f7fb] text-slate-900 py-14 sm:py-16 md:py-20"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* HEADER */}
        <div
          className="text-center max-w-3xl mx-auto space-y-4"
          data-aos="fade-up"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#c25b0a]">
            About the Author
          </h2>

          <p className="text-sm sm:text-base md:text-lg text-slate-600 leading-relaxed">
            Behind <span className="font-semibold">“Strong with Hearts and Hounds”</span>{" "}
            lies a story of empathy, therapy, and the unspoken bond between humans
            and their loyal canine companions.
          </p>
        </div>

        {/* IMAGE ROW */}
        <div
          className="mt-10 md:mt-12 grid gap-6 md:gap-8 md:grid-cols-2"
          data-aos="fade-up"
          data-aos-delay="80"
        >
          {/* Author image 1 */}
          <div className="group relative rounded-[32px] overflow-hidden bg-white shadow-[0_18px_55px_rgba(15,23,42,0.16)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_26px_80px_rgba(15,23,42,0.22)]">
            <div className="relative h-[260px] sm:h-[320px] md:h-[360px]">
              <img
                src="https://www.dogstrust.org.uk/images/800x600/dogs/1241517/068Sh00000KYeyvIAD.jpg"
                alt="Author with a therapy dog"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          </div>

          {/* Author image 2 */}
          <div className="group relative rounded-[32px] overflow-hidden bg-white shadow-[0_18px_55px_rgba(15,23,42,0.16)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_26px_80px_rgba(15,23,42,0.22)]">
            <div className="relative h-[260px] sm:h-[320px] md:h-[360px]">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQN6cp6CMKg-Wlx_lJ0W89wmG_prCbJ6eAYOZJN8RhQexzVxFHsbe6Id920fXvhp6uai9I&usqp=CAU"
                alt="Author with two dogs outdoors"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

