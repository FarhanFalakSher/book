import React from "react";

 const ContactMainSection = () => {
  return (
    <section
      id="contact-main"
      className="w-full bg-[#f8fafc] py-14 sm:py-16 md:py-20"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* HEADER */}
        <div
          className="text-center space-y-2"
          data-aos="fade-up"
        >
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0f172a]">
            Contact Us
          </h2>

          <div className="flex items-center justify-center gap-4 text-[11px] sm:text-xs font-semibold tracking-[0.25em] text-[#f97316] uppercase">
            <span className="h-px w-12 bg-[#e5e7eb]" />
            <span>Get in touch</span>
            <span className="h-px w-12 bg-[#e5e7eb]" />
          </div>
        </div>

        {/* GRID */}
        <div className="mt-10 md:mt-12 grid gap-8 lg:gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          {/* LEFT COLUMN: INFO + MAP */}
          <div className="space-y-4" data-aos="fade-right">
            {/* Info cards */}
            <div className="space-y-3">
              {/* Phone */}
              <div className="flex items-center gap-4 rounded-2xl bg-white shadow-[0_10px_30px_rgba(15,23,42,0.06)] border border-slate-100 px-4 py-4 sm:px-5 sm:py-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#f9fafb] border border-slate-200 text-lg">
                  ☎️
                </div>
                <div>
                  <p className="text-xs sm:text-sm font-semibold text-slate-900">
                    Phone
                  </p>
                  <p className="text-xs sm:text-sm text-slate-600">
                    +1 (555) 123-4567
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-center gap-4 rounded-2xl bg-white shadow-[0_10px_30px_rgba(15,23,42,0.06)] border border-slate-100 px-4 py-4 sm:px-5 sm:py-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#f9fafb] border border-slate-200 text-lg">
                  ✉️
                </div>
                <div>
                  <p className="text-xs sm:text-sm font-semibold text-slate-900">
                    Email
                  </p>
                  <p className="text-xs sm:text-sm text-slate-600 break-all">
                    design@bookcoverstudio.com
                  </p>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-center gap-4 rounded-2xl bg-white shadow-[0_10px_30px_rgba(15,23,42,0.06)] border border-slate-100 px-4 py-4 sm:px-5 sm:py-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#f9fafb] border border-slate-200 text-lg">
                  📍
                </div>
                <div>
                  <p className="text-xs sm:text-sm font-semibold text-slate-900">
                    Studio Location
                  </p>
                  <p className="text-xs sm:text-sm text-slate-600">
                    123 Design Street, Creative City
                  </p>
                </div>
              </div>
            </div>

            {/* Map placeholder / embed */}
            <div className="rounded-2xl overflow-hidden bg-white shadow-[0_12px_35px_rgba(15,23,42,0.08)] border border-slate-100 h-60 sm:h-64">
              {/* Use a real map iframe here if you like */}
              <iframe
                title="Studio Location Map"
                className="h-full w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509377!2d144.95565131550473!3d-37.817327979751876!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzfCsDQ5JzAyLjQiUyAxNDTCsDU3JzIyLjQiRQ!5e0!3m2!1sen!2s!4v1700000000000"
              />
            </div>
          </div>

          {/* RIGHT COLUMN: FORM */}
          <div
            className="relative"
            data-aos="fade-left"
          >
            <div className="pointer-events-none absolute -inset-4 rounded-[32px] bg-white/60 blur-3xl" />
            <div className="relative rounded-[28px] bg-white shadow-[0_22px_70px_rgba(15,23,42,0.15)] border border-slate-100 px-4 py-5 sm:px-6 sm:py-7">
              <form
                className="space-y-4"
                onSubmit={(e) => e.preventDefault()}
              >
                {/* Full Name */}
                <div className="space-y-1.5">
                  <label
                    htmlFor="fullName"
                    className="block text-xs sm:text-sm font-semibold text-slate-800"
                  >
                    Full Name *
                  </label>
                  <div className="relative">
                    <input
                      id="fullName"
                      type="text"
                      placeholder="Enter your full name"
                      className="w-full rounded-xl border border-slate-200 bg-slate-50/70 px-3.5 py-2.5 text-sm text-slate-900 focus:border-[#f97316] focus:ring-2 focus:ring-[#f97316]/30 outline-none transition-all"
                    />
                  </div>
                </div>

                {/* Email */}
                <div className="space-y-1.5">
                  <label
                    htmlFor="email"
                    className="block text-xs sm:text-sm font-semibold text-slate-800"
                  >
                    Email Address *
                  </label>
                  <div className="relative">
                    <input
                      id="email"
                      type="email"
                      placeholder="your.email@example.com"
                      className="w-full rounded-xl border border-slate-200 bg-slate-50/70 px-3.5 py-2.5 text-sm text-slate-900 focus:border-[#f97316] focus:ring-2 focus:ring-[#f97316]/30 outline-none transition-all"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label
                    htmlFor="phone"
                    className="block text-xs sm:text-sm font-semibold text-slate-800"
                  >
                    Phone Number
                  </label>
                  <div className="relative">
                    <input
                      id="phone"
                      type="tel"
                      placeholder="+1 (555) 123-4567"
                      className="w-full rounded-xl border border-slate-200 bg-slate-50/70 px-3.5 py-2.5 text-sm text-slate-900 focus:border-[#f97316] focus:ring-2 focus:ring-[#f97316]/30 outline-none transition-all"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label
                    htmlFor="details"
                    className="block text-xs sm:text-sm font-semibold text-slate-800"
                  >
                    Project Details *
                  </label>
                  <textarea
                    id="details"
                    rows={4}
                    placeholder="Tell us about your book, genre, target audience, design preferences, timeline, and any specific requirements..."
                    className="w-full rounded-xl border border-slate-200 bg-slate-50/70 px-3.5 py-2.5 text-sm text-slate-900 focus:border-[#f97316] focus:ring-2 focus:ring-[#f97316]/30 outline-none transition-all resize-none"
                  />
                </div>

                {/* Button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center rounded-full bg-[#f3b66c] px-6 py-3 text-sm sm:text-base font-semibold text-white shadow-[0_18px_50px_rgba(15,23,42,0.25)] transition-all duration-300 hover:bg-[#f59e0b] hover:-translate-y-0.5"
                  >
                    Send Message
                  </button>
                </div>
              </form>

              {/* Note */}
              <p className="mt-3 text-[11px] sm:text-xs text-slate-500 text-center">
                We typically respond within <span className="font-semibold">2–4 business hours</span>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactMainSection;