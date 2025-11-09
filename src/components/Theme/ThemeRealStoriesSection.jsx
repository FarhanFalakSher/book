import React from "react";

const ThemeEmotionalConnection = () => {
  return (
    <section
      id="theme-emotional-connection"
      className="w-full bg-[#f8fafc] text-slate-900 py-14 sm:py-16 md:py-20"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ===== HEADER ===== */}
        <div
          className="text-center max-w-3xl mx-auto space-y-4"
          data-aos="fade-up"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#b45309]">
            Emotional Connection
          </h2>

          <p className="text-sm sm:text-base md:text-lg text-slate-600 leading-relaxed">
            Capturing the heartfelt bond between humans and dogs — moments of
            trust, love, and emotional healing that shape everyday life.
          </p>
        </div>

        {/* ===== GALLERY ===== */}
        <div
          className="mt-10 md:mt-12 grid gap-6 sm:gap-8 md:grid-cols-3"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          {/* IMAGE CARD 1 */}
          <figure className="group relative rounded-[28px] overflow-hidden bg-white shadow-[0_15px_40px_rgba(0,0,0,0.12)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_25px_80px_rgba(0,0,0,0.15)]">
            <img
              src="https://iheartdogs.com/wp-content/uploads/2025/07/pexels-kampus-8057575-1.jpg"
              alt="Dog basking in sunlight"
              className="h-72 w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </figure>

          {/* IMAGE CARD 2 */}
          <figure className="group relative rounded-[28px] overflow-hidden bg-white shadow-[0_15px_40px_rgba(0,0,0,0.12)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_25px_80px_rgba(0,0,0,0.15)]">
            <img
              src="https://www.nydailynews.com/wp-content/uploads/migration/2017/11/02/GQAMIZMB4AEAAMEYTRPVNM2ZVE.jpg?w=535"
              alt="German Shepherd resting outdoors"
              className="h-72 w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </figure>

          {/* IMAGE CARD 3 */}
          <figure className="group relative rounded-[28px] overflow-hidden bg-white shadow-[0_15px_40px_rgba(0,0,0,0.12)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_25px_80px_rgba(0,0,0,0.15)]">
            <img
              src="https://media.istockphoto.com/id/1281552700/photo/autumn-hunting.jpg?s=612x612&w=0&k=20&c=e99Q6vTcsCr1nfkwKUL4L0ejkbPbBnBcRxMz58MhVLM="
              alt="Beagle sitting calmly on grass"
              className="h-72 w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </figure>
        </div>

        {/* ===== QUOTE ===== */}
        <div
          className="mt-10 md:mt-12 text-center"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <p className="text-xs sm:text-sm md:text-base text-slate-500 italic max-w-3xl mx-auto">
            “Because every heart heals a little faster with a dog beside it.”
          </p>
        </div>
      </div>
    </section>
  );
};

export default ThemeEmotionalConnection;
