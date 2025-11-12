import React from "react";

const ContactHero = () => {
  return (
    <section
      id="contact-hero"
      className="relative w-full min-h-[85vh] sm:min-h-[80vh] text-white flex items-center justify-center overflow-hidden"
    >
      
      <div className="absolute inset-0 -z-10">
        <img
          src="https://images.pexels.com/photos/46274/pexels-photo-46274.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt="Stack of books on wooden table"
          className="h-full w-full object-cover"
        />
      
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black/85" />
      </div>

      {/* ===== CONTENT ===== */}
      <div
        className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6 sm:space-y-8 pt-24 sm:pt-20"
        data-aos="fade-up"
      >
        {/* TOP LABEL */}
        <div
          className="inline-flex items-center justify-center gap-2 rounded-full bg-[#f97316]/20 border border-[#f97316]/50 px-5 py-1.5 text-[32px] sm:text-xs font-bold tracking-[0.22em] uppercase text-white shadow-[0_8px_25px_rgba(0,0,0,0.5)]"
          data-aos="fade-down"
        >
          Contact Us
        </div>

        {/* HEADING */}
        <h1
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          Let&apos;s Create Your Next{" "}
          <span className="text-[#facc4a]">Best-Selling Book Cover</span>
        </h1>

        {/* SUBTEXT */}
        <p
          className="text-sm sm:text-base md:text-lg text-gray-200 leading-relaxed max-w-3xl mx-auto"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Have a story that deserves a stunning cover — one that captures
          emotion, warmth, and the bond between humans and dogs? Reach out and
          let&apos;s bring your vision to life with thoughtful design and care.
        </p>

        {/* BUTTON */}
        <div className="pt-4" data-aos="fade-up" data-aos-delay="300">
          <a
            href="#contact-form"
            className="inline-flex items-center justify-center rounded-full bg-[#facc4a] px-10 py-3 text-sm sm:text-base font-semibold text-[#3f2604] shadow-[0_18px_50px_rgba(0,0,0,0.6)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_25px_70px_rgba(0,0,0,0.8)] hover:bg-[#ffdd57]"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactHero;
