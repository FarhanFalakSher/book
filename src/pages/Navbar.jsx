import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Add scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Themes", href: "/theme" },
    { name: "Author", href: "/author" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-500 ${
        scrolled
          ? "bg-black/70 backdrop-blur-xl border-b border-silk-100 shadow-lg shadow-gray-200/30 py-3"
          : "bg-black/75 backdrop-blur-lg border-b border-silk-100 py-5"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-8">
        <div className="flex items-center justify-between">
          {/* ENHANCED LOGO SECTION */}
          <div className="flex items-center flex-shrink-0">
            <a
              href="/"
              className="group flex items-center gap-4 transition-all duration-300 hover:scale-105"
            >
              {/* Beautiful Book Icon */}
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-br from-amber-500 via-amber-600 to-amber-700 rounded-xl flex items-center justify-center shadow-lg shadow-amber-500/25 group-hover:shadow-amber-500/40 transition-all duration-300">
                  <svg 
                    className="w-6 h-6 text-white" 
                    fill="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20M9 10h6v2H9v-2z"/>
                  </svg>
                </div>
                {/* Subtle Glow Effect */}
                <div className="absolute -inset-1 bg-amber-400/10 rounded-xl blur-sm group-hover:blur-md transition-all duration-300 -z-10"></div>
              </div>

              {/* Enhanced Logo Text */}
              <div className="flex flex-col text-left leading-tight">
                <span className="font-bold text-2xl bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-white tracking-tight group-hover:from-amber-600 group-hover:to-amber-700 transition-all duration-300">
                  BookCraft
                </span>
                <span className="text-xs text-gray-500 font-semibold tracking-widest mt-1 uppercase group-hover:text-amber-600 transition-all duration-300">
                  PREMIUM PUBLISHING
                </span>
              </div>
            </a>
          </div>

          {/* BEAUTIFUL DESKTOP NAVIGATION */}
          <div className="hidden lg:flex items-center justify-center flex-1">
            <ul className="flex items-center gap-8 bg-white/85 backdrop-blur-sm rounded-2xl px-6 py-2 border border-gray-100 shadow-sm">
              {navItems.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="relative px-4 py-2 text-sm font-semibold text-gray-600 hover:text-amber-700 transition-all duration-300 group"
                  >
                    <span className="relative z-10 tracking-wide">
                      {item.name}
                    </span>
                    {/* Animated Underline */}
                    <div className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-amber-500 to-amber-600 rounded-full transition-all duration-300 group-hover:w-4/5 group-hover:left-1/10 transform -translate-x-1/2 group-hover:translate-x-0"></div>
                    {/* Hover Background */}
                    <div className="absolute inset-0 bg-gradient-to-r from-amber-50 to-amber-100 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 -z-10"></div>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* STUNNING CTA BUTTON */}
          <div className="hidden lg:flex items-center flex-shrink-0">
            <div className="relative group">
              {/* Glow Effect */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-amber-500 to-amber-600 rounded-xl blur-sm opacity-70 group-hover:opacity-100 group-hover:blur transition-all duration-300"></div>
              <a
                href="/order"
                className="relative px-8 py-3.5 bg-gradient-to-r from-amber-600 to-amber-700 text-white rounded-xl font-bold text-sm flex items-center gap-3 transition-all duration-300 group-hover:from-amber-700 group-hover:to-amber-800 group-hover:scale-105 shadow-lg shadow-amber-500/30 group-hover:shadow-amber-500/50"
              >
                <span className="tracking-wide">Get the Book</span>
                <svg
                  className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </a>
            </div>
          </div>

          {/* ENHANCED MOBILE MENU BUTTON */}
          <div className="lg:hidden flex items-center flex-shrink-0">
            <button
              className="relative w-12 h-12 flex flex-col items-center justify-center group focus:outline-none hover:bg-gray-800 rounded-xl transition-all duration-300 border border-gray-600 hover:border-amber-500"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              <span
                className={`w-6 h-0.5 bg-gray-400 transition-all duration-300 group-hover:bg-amber-500 ${
                  menuOpen ? "rotate-45 translate-y-1.5 bg-amber-500" : "-translate-y-1"
                }`}
              ></span>
              <span
                className={`w-6 h-0.5 bg-gray-400 transition-all duration-300 mt-1.5 group-hover:bg-amber-500 ${
                  menuOpen ? "opacity-0 scale-0" : "opacity-100 scale-100"
                }`}
              ></span>
              <span
                className={`w-6 h-0.5 bg-gray-400 transition-all duration-300 mt-1.5 group-hover:bg-amber-500 ${
                  menuOpen ? "-rotate-45 -translate-y-1.5 bg-amber-500" : "translate-y-1"
                }`}
              ></span>
            </button>
          </div>
        </div>

        {/* PERFECTLY ALIGNED MOBILE MENU */}
        <div
          className={`lg:hidden transition-all duration-500 overflow-hidden bg-gray-900/95 backdrop-blur-lg rounded-2xl border border-gray-700 shadow-2xl ${
            menuOpen ? "max-h-[500px] opacity-100 mt-4" : "max-h-0 opacity-0"
          }`}
        >
          <div className="p-4">
            {/* Mobile Menu Header */}
            <div className="px-4 py-3 border-b border-gray-700 mb-2">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-gradient-to-br from-amber-500 to-amber-600 rounded-lg flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20M9 10h6v2H9v-2z"/>
                  </svg>
                </div>
                <div className="flex flex-col">
                  <span className="font-bold text-white text-sm">BookCraft</span>
                  <span className="text-xs text-gray-400">PREMIUM PUBLISHING</span>
                </div>
              </div>
            </div>

            <ul className="flex flex-col gap-1">
              {navItems.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="flex items-center gap-4 px-4 py-4 text-base font-medium text-gray-300 hover:text-white hover:bg-gray-800 rounded-xl transition-all duration-200 group border border-transparent hover:border-amber-500/30"
                    onClick={() => setMenuOpen(false)}
                  >
                    <div className="w-2 h-2 bg-amber-500 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                    <span className="flex-1">{item.name}</span>
                    <svg 
                      className="w-4 h-4 text-gray-500 group-hover:text-amber-500 transition-all duration-300" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </li>
              ))}

              {/* GET THE BOOK BUTTON - NOW VISIBLE */}
              <li className="mt-3 pt-3 border-t border-gray-700">
                <a
                  href="/order"
                  className="flex items-center justify-center gap-3 w-full px-6 py-4 rounded-xl bg-gradient-to-r from-amber-600 to-amber-700 text-white font-bold text-base shadow-lg shadow-amber-500/30 hover:shadow-amber-500/50 transition-all duration-300 hover:scale-105 active:scale-95 group"
                  onClick={() => setMenuOpen(false)}
                >
                  <span>Get the Book</span>
                  <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </a>
              </li>

              {/* FOOTER SECTION */}
              <li className="mt-4 pt-3 border-t border-gray-700">
                <div className="px-2 py-2">
                  <p className="text-xs text-gray-500 text-center">
                    Keyboard shortcuts | Map data ©2025 Google | Terms
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;