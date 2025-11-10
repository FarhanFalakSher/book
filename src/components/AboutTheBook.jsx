import React from "react";

const AboutSection = () => {
  return (
    <section
      id="about"
      className="w-full bg-[#faf5ee] text-[#0f172a] border-t border-[#f1e4d6]"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 lg:py-24">
        {/* main grid */}
        <div className="grid gap-12 lg:gap-16 md:grid-cols-1 lg:grid-cols-2 items-start lg:items-center">
          {/* LEFT COLUMN */}
          <div className="space-y-7">
            <div className="inline-flex items-center px-4 py-1 rounded-full bg-[#fff4cf] border border-[#facc6b] text-[11px] font-semibold tracking-[0.16em] uppercase text-[#92400e]">
              Featured Publication
            </div>

            <div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight text-[#020617]">
                About the <span className="text-[#f59e0b]">Book</span>
              </h2>
              <div className="mt-3 h-1 w-20 rounded-full bg-[#f59e0b]" />
            </div>

            <div className="space-y-3 text-base md:text-lg leading-relaxed text-[#111827]">
              <p>
                <span className="font-semibold">Strong with Hearts and Hounds</span> is a
                seminal work that examines the profound interspecies connection
                between humans and canines. Grounded in empirical research and
                clinical practice, this volume elucidates how canine companions
                serve as catalysts for emotional regulation and psychological
                resilience.
              </p>
            </div>

            <div className="rounded-2xl bg-[#fff9e6] border border-[#fde68a] border-l-4 border-l-[#f59e0b] px-5 py-4 md:px-6 md:py-5 shadow-[0_24px_60px_rgba(248,187,97,0.35)]">
              <p className="text-sm sm:text-base md:text-lg leading-relaxed text-[#92400e] italic">
                Through compelling case studies and reflective analysis,&nbsp;
                <span className="font-semibold">
                  Strong with Hearts and Hounds
                </span>{" "}
                redefines canine companions as co-regulators, emotional anchors,
                and transformative partners in human development and healing.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-3 text-sm sm:text-base text-[#111827] pt-1">
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-2 w-2 rounded-full bg-[#f59e0b]" />
                  <span>Evidence-Based</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-2 w-2 rounded-full bg-[#f59e0b]" />
                  <span>Practical Framework</span>
                </li>
              </ul>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-2 w-2 rounded-full bg-[#f59e0b]" />
                  <span>Clinical Insights</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-2 w-2 rounded-full bg-[#f59e0b]" />
                  <span>Case Studies</span>
                </li>
              </ul>
            </div>

            <div className="pt-2">
              <button className="inline-flex items-center px-8 py-3.5 rounded-full bg-[#f59e0b] text-white text-sm sm:text-base font-semibold shadow-[0_22px_55px_rgba(248,187,97,0.7)] hover:bg-[#ea8a05] transition-colors duration-200">
                Get Started
                <span className="ml-2 text-lg leading-none">→</span>
              </button>
            </div>
          </div>

          {/* RIGHT COLUMN – IMAGES */}
          <div className="relative flex justify-center lg:justify-end items-start mt-6 md:mt-12 lg:mt-0">
            <div className="relative grid grid-cols-2 gap-4 sm:gap-6 max-w-sm sm:max-w-md w-full ">
              <div className="relative row-span-2 rounded-3xl overflow-hidden bg-black shadow-[0_26px_70px_rgba(15,23,42,0.55)] h-[360px] sm:h-[420px] md:h-[460px] transition-all duration-300 hover:-translate-y-2">
                <img
                  src="https://i.pinimg.com/1200x/bc/1c/58/bc1c588d25f51fc160bd4a82aec5c457.jpg"
                  alt="Book on a shelf"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent" />
                <div className="absolute left-4 bottom-4">
                  <p className="text-sm font-semibold text-white">Book Cover</p>
                </div>
              </div>

              <div className="grid grid-rows-2 gap-4 sm:gap-6">
                <div className="relative rounded-3xl overflow-hidden bg-black shadow-[0_20px_55px_rgba(15,23,42,0.5)] h-[170px] sm:h-[210px] transition-all duration-300 hover:-translate-y-2">
                  <img
                    src="https://hips.hearstapps.com/hmg-prod/images/hound-dog-breeds-667ed4507b486.jpg?crop=1.00xw:1.00xh;0,0&resize=640:*"
                    alt="Woman hugging her dog"
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
                  <div className="absolute left-4 bottom-4">
                    <p className="text-xs font-medium text-white">
                      Readers &amp; their dogs
                    </p>
                  </div>
                  <div className="absolute -top-3 right-4">
                   
                  </div>
                </div>

                <div className="relative rounded-3xl overflow-hidden bg-black shadow-[0_20px_55px_rgba(15,23,42,0.5)] h-[170px] sm:h-[210px] transition-all duration-300 hover:-translate-y-2">
                  <img
                    src="https://images.pexels.com/photos/1390784/pexels-photo-1390784.jpeg?auto=compress&cs=tinysrgb&w=1200"
                    alt="Dog with glasses reading a book"
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
                  <div className="absolute left-4 bottom-4">
                    <p className="text-xs font-medium text-white">
                      Dogs in learning spaces
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
