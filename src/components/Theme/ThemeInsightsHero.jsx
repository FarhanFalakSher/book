import React from "react";
import { Link } from "react-router-dom";

const ThemeInsightsHero = () => {
  return (
    <section
      id="theme-insights-hero"
      className="relative w-full min-h-screen bg-black text-white"
    >
      {/* ===== HERO BACKGROUND ===== */}
      <div className="relative h-full min-h-screen">
        {/* Image */}
        <img
          src="https://i.pinimg.com/1200x/1f/29/2a/1f292a1b997de4c61399e1926472d37b.jpg"
          alt="Puppies symbolising warmth and connection"
          className="absolute inset-0 h-full w-full object-cover"
        />

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/40" />

        {/* ===== HERO CONTENT ===== */}
        <div className="relative z-10 flex items-center justify-center h-full min-h-screen">
          <div
            className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6 sm:space-y-8"
            data-aos="fade-up"
          >
            {/* Heading */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
              <span className="block">Strong with</span>
              <span className="block">
                <span className="text-white">Hearts and</span>{" "}
                <span className="text-[#f97316]">Hounds</span>
              </span>
            </h1>

            {/* Subheading – Theme & Insights focus */}
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-100 leading-relaxed max-w-3xl mx-auto">
              A deep-dive into the{" "}
              <span className="font-semibold">themes and insights</span> behind
              the bond between humans and dogs — exploring therapy, family
              life, education and emotional support. Discover how each story
              carries warmth, care and practical wisdom you can use in real
              rooms with real dogs.
            </p>

            {/* Underline */}
            <div className="flex justify-center">
              <div className="mt-2 h-1 w-20 bg-[#f97316] rounded-full" />
            </div>

            {/* Buttons */}
            <div className="mt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="#themes"
                className="inline-flex items-center justify-center rounded-full bg-[#f97316] px-10 py-3 text-sm sm:text-base font-semibold text-white shadow-[0_15px_40px_rgba(0,0,0,0.35)] transition-all duration-300 hover:bg-[#ea580c] hover:-translate-y-1"
              >
                Explore Themes
              </a>

              <Link
  to="/order"
  className="inline-flex items-center justify-center rounded-full border-2 border-[#f97316] px-10 py-3 text-sm sm:text-base font-semibold text-[#f97316] bg-transparent shadow-[0_10px_30px_rgba(0,0,0,0.25)] transition-all duration-300 hover:bg-black/40 hover:-translate-y-1"
>
  Pre-Order Book
</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ThemeInsightsHero;
