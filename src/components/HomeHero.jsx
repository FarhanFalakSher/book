import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

const HomeHero = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: "ease-out-quart",
    });
  }, []);

  return (
    <section
      id="home"
      className="relative w-full min-h-screen overflow-hidden text-white flex items-center justify-center"
    >
      {/* ===== Background Video / Image ===== */}
      <div className="absolute inset-0">
        {/* Video background */}
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
          poster="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&w=2000&q=80"
        >
          {/* 👉 Replace this link with your real MP4 promo video */}
          <source
            src="https://www.w3schools.com/html/mov_bbb.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>

        {/* Gradient overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/70 to-black/80" />
      </div>

      {/* ===== CONTENT ===== */}
      <div className="relative z-10 max-w-4xl mx-auto text-center px-4" data-aos="fade-up">
        {/* Label */}
        <p className="text-xs sm:text-sm tracking-[0.25em] uppercase text-orange-400 font-semibold mb-3">
          New from the practitioner & storyteller
        </p>

        {/* Title */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-wide leading-tight text-white drop-shadow-lg">
          Strong with <span className="text-orange-500">Hearts</span> and{" "}
          <span className="text-orange-500">Hounds</span>
        </h1>

        {/* Subtitle */}
        <p
          className="max-w-2xl mx-auto mt-4 text-base sm:text-lg md:text-xl text-gray-200 leading-relaxed"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          The everyday power of dogs in life and support — therapy, education,
          parenting, and care.
        </p>

        {/* Description */}
        <p
          className="max-w-2xl mx-auto mt-3 text-sm sm:text-base text-gray-300"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          A warm, reflective look at how dogs bring connection, emotional safety,
          and quiet strength into classrooms, homes, and care spaces for children
          and adults.
        </p>

        {/* Buttons */}
        <div
          className="flex flex-wrap gap-4 justify-center mt-8"
          data-aos="zoom-in"
          data-aos-delay="300"
        >
          <Link
  to="/order"
  className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-orange-500 text-black font-semibold tracking-wide shadow-md shadow-orange-500/40 hover:bg-orange-400 transition"
>
  Get the Book
</Link>
          <button className="px-8 py-3 rounded-full border border-white/80 text-white font-semibold tracking-wide hover:bg-white hover:text-black transition">
            Read a Sample
          </button>
        </div>
      </div>

      {/* ===== Optional soft bottom fade ===== */}
      <div className="absolute bottom-0 left-0 right-0 h-20 .bg-gradient-to-t from-black/90 to-transparent" />
    </section>
  );
};

export default HomeHero;
