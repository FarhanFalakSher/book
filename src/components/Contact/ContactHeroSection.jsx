import React from "react";

const ContactHeroSection = () => {
  return (
    <section
      id="contact-hero"
      className="relative w-full min-h-[70vh] sm:min-h-[75vh] text-white flex items-center justify-center"
    >
      {/* BACKGROUND IMAGE */}
      <div className="absolute inset-0 -z-10">
        <img
          src="https://images.pexels.com/photos/46274/pexels-photo-46274.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt="Stack of books on wooden table"
          className="h-full w-full object-cover"
        />
        {/* dark overlay */}
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* CONTENT */}
      <div
        className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6 sm:space-y-8"
        data-aos="fade-up"
      >
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
          Let&apos;s Create Your Next Best-Selling{" "}
          <span className="text-[#fed7aa]">Book Cover</span>
        </h1>

        <p className="text-sm sm:text-base md:text-lg text-gray-100 leading-relaxed max-w-3xl mx-auto">
          Have a story that deserves a stunning cover — especially one that
          honours the bond between humans and dogs? Reach out and let&apos;s
          bring your vision to life with warmth, emotion and thoughtful design.
        </p>

        <div className="pt-2">
          <a
            href="#contact-form"
            className="inline-flex items-center justify-center rounded-full bg-[#f97316] px-10 py-3 text-sm sm:text-base font-semibold text-white shadow-[0_18px_50px_rgba(0,0,0,0.4)] transition-all duration-300 hover:bg-[#ea580c] hover:-translate-y-1"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactHeroSection;
