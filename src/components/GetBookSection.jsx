import React from "react";

const GetBookSection = () => {
  return (
    <section id="order" className="w-full bg-white text-slate-900">
      {/* GET YOUR COPY BAND */}
      <div className="w-full bg-[#f5efe6]">
        <div className="max-w-4xl mx-auto px-4 py-14 md:py-16 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#111827]">
            Get Your Copy
          </h2>

          <p className="mt-4 text-sm sm:text-base md:text-lg text-[#374151] leading-relaxed">
            Available now in paperback and eBook formats. Discover the everyday
            power of dogs in life and support.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            {/* Primary button */}
            <button className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-[#f59e0b] text-white text-sm sm:text-base font-semibold shadow-[0_18px_40px_rgba(245,158,11,0.55)] hover:bg-[#ea8a05] transition-all">
              <span className="text-base">📖</span>
              <span>Buy on Amazon</span>
            </button>

            {/* Secondary button */}
            <button className="inline-flex items-center gap-2 px-8 py-3 rounded-full border border-[#f59e0b] text-[#f59e0b] text-sm sm:text-base font-semibold bg-transparent hover:bg-[#fff7ea] transition-all">
              <span>Learn More</span>
            </button>
          </div>
        </div>
      </div>

      {/* STAY CONNECTED PANEL */}
      <div className="w-full bg-white">
        <div className="max-w-5xl mx-auto px-4 py-14 md:py-16">
          <div className="relative rounded-[32px] bg-[#e8a768] text-white shadow-[0_24px_60px_rgba(148,90,32,0.55)] overflow-hidden">
            {/* subtle texture effect using gradient noise feel */}
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.25)_0,_transparent_55%)] opacity-70" />

            <div className="relative px-6 sm:px-10 py-10 sm:py-12 text-center space-y-6">
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#111827]">
                Stay Connected
              </h3>

              <p className="text-sm sm:text-base md:text-lg text-[#111827]/90 max-w-2xl mx-auto">
                Subscribe to get updates, insights, and special releases from
                the author.
              </p>

              {/* Email input + button */}
              <div className="mt-4 flex flex-col sm:flex-row items-center justify-center gap-4 max-w-xl mx-auto">
                <div className="flex-1 w-full">
                  <div className="flex items-center w-full rounded-full bg-white/90 border border-white/80 px-4 py-2 sm:py-3 shadow-[0_10px_30px_rgba(0,0,0,0.18)]">
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="w-full bg-transparent text-sm sm:text-base text-[#111827] placeholder:text-slate-400 focus:outline-none"
                    />
                    <span className="ml-2 text-lg" aria-hidden="true">
                      🐶
                    </span>
                  </div>
                </div>

                <button className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3 rounded-full bg-[#f59e0b] text-white text-sm sm:text-base font-semibold shadow-[0_18px_40px_rgba(245,158,11,0.6)] hover:bg-[#ea8a05] transition-all">
                  <span className="text-base">✉️</span>
                  <span>Subscribe</span>
                </button>
              </div>

              <p className="text-[11px] sm:text-xs text-[#111827]/80 pt-1">
                No spam — just occasional notes about dogs, practice and new
                writing.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetBookSection;
