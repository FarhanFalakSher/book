import React, { useState } from "react";

const Footer = () => {
  const year = new Date().getFullYear();
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      alert(`Thank you for subscribing with: ${email}`);
      setEmail("");
    }
  };

  // Navigation items matching the navbar exactly
  const navItems = [
    { name: "Home", href: "/", icon: "🏠" },
    { name: "About", href: "/about", icon: "📖" },
    { name: "Themes", href: "/theme", icon: "🎨" },
    { name: "Author", href: "/author", icon: "✍️" },
    { name: "Contact", href: "/contact", icon: "📞" },
  ];

  const socialLinks = [
    { icon: "📘", label: "Facebook", color: "hover:bg-blue-500" },
    { icon: "📷", label: "Instagram", color: "hover:bg-pink-500" },
    { icon: "💼", label: "LinkedIn", color: "hover:bg-blue-400" },
    { icon: "🐦", label: "Twitter", color: "hover:bg-sky-500" }
  ];

  const legalLinks = ["Privacy Policy", "Terms of Service", "Cookies", "Accessibility"];

  return (
    <footer className="w-full bg-gradient-to-b from-[#020712] to-[#0a0f1f] text-slate-200 border-t border-amber-500/20">
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-8 md:pt-20 md:pb-12">
        {/* MAIN CONTENT GRID */}
        <div className="grid gap-12 md:gap-16 md:grid-cols-2 lg:grid-cols-4 mb-12">
          
          {/* BRAND SECTION */}
          <div className="space-y-6">
            <div className="flex items-center gap-4 group">
              <div className="relative">
                <div className="w-14 h-14 bg-gradient-to-br from-amber-500 to-amber-600 rounded-2xl flex items-center justify-center shadow-2xl shadow-amber-500/30 group-hover:shadow-amber-500/50 transition-all duration-500 group-hover:scale-110">
                  <span className="text-2xl">📚</span>
                </div>
                <div className="absolute -inset-2 bg-amber-400/20 rounded-2xl blur-lg group-hover:blur-xl transition-all duration-500 -z-10"></div>
              </div>
              <div>
                <p className="text-sm font-bold tracking-widest uppercase text-amber-300 bg-amber-500/10 px-3 py-1 rounded-full inline-block">
                  BookCraft
                </p>
                <p className="text-xs text-slate-400 mt-2 font-medium">
                  PREMIUM PUBLISHING EXCELLENCE
                </p>
              </div>
            </div>

            <p className="text-sm text-slate-300 leading-relaxed max-w-sm bg-slate-900/30 p-4 rounded-xl border border-slate-800/50">
              Your premier destination for exceptional publishing services. 
              We transform manuscripts into masterpieces with unparalleled 
              quality, design, and distribution expertise.
            </p>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-3 pt-2">
              <div className="bg-slate-900/50 border border-slate-700 rounded-lg px-3 py-2">
                <p className="text-xs text-amber-400 font-semibold">⭐ 4.9/5 Rating</p>
              </div>
              <div className="bg-slate-900/50 border border-slate-700 rounded-lg px-3 py-2">
                <p className="text-xs text-amber-400 font-semibold">🚀 Fast Delivery</p>
              </div>
            </div>
          </div>

          {/* QUICK NAVIGATION - Only Navbar Items */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-1 h-6 bg-gradient-to-b from-amber-400 to-amber-600 rounded-full"></div>
              <p className="text-sm font-bold tracking-widest uppercase text-amber-300">
                Quick Navigation
              </p>
            </div>
            <ul className="space-y-3">
              {navItems.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="flex items-center gap-3 text-slate-300 hover:text-amber-300 hover:translate-x-2 transition-all duration-300 group py-2"
                  >
                    <span className="text-lg opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-110">
                      {item.icon}
                    </span>
                    <span className="font-medium">{item.name}</span>
                    <svg 
                      className="w-4 h-4 ml-auto opacity-0 group-hover:opacity-100 text-amber-400 transition-all duration-300 transform group-hover:translate-x-1" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* GET THE BOOK SECTION */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-1 h-6 bg-gradient-to-b from-amber-400 to-amber-600 rounded-full"></div>
              <p className="text-sm font-bold tracking-widest uppercase text-amber-300">
                Get Your Copy
              </p>
            </div>
            
            {/* Main CTA */}
            <div className="bg-gradient-to-r from-amber-500/10 to-amber-600/10 border border-amber-500/20 rounded-xl p-6 text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-amber-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg shadow-amber-500/30">
                <span className="text-xl">🛒</span>
              </div>
              <p className="text-sm font-semibold text-amber-300 mb-3">Ready to Read?</p>
              <p className="text-xs text-slate-300 mb-4">
                Get your copy of our premium publication today
              </p>
              <a
                href="/order"
                className="inline-flex items-center gap-2 bg-amber-600 hover:bg-amber-700 text-white px-6 py-3 rounded-lg transition-all duration-300 hover:scale-105 font-semibold text-sm w-full justify-center"
              >
                Get the Book
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
            </div>

            {/* Additional Info */}
            <div className="text-center">
              <p className="text-xs text-slate-500">
                Available in digital and print formats
              </p>
            </div>
          </div>

          {/* NEWSLETTER & CONTACT */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-1 h-6 bg-gradient-to-b from-amber-400 to-amber-600 rounded-full"></div>
              <p className="text-sm font-bold tracking-widest uppercase text-amber-300">
                Stay Connected
              </p>
            </div>

            <div className="space-y-4">
              <div className="bg-slate-900/30 border border-slate-700 rounded-xl p-4">
                <p className="text-slate-300 text-sm font-medium mb-2">Get Publishing Insights</p>
                <a
                  href="mailto:contact@bookcraft.com"
                  className="text-amber-400 hover:text-amber-300 transition-colors text-sm font-semibold break-all"
                >
                  contact@bookcraft.com
                </a>
                <p className="text-xs text-slate-500 mt-2">
                  For authors and book enthusiasts
                </p>
              </div>

              {/* Newsletter Form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="relative">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email for updates"
                    className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-xl text-slate-100 placeholder-slate-500 focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 transition-all duration-300 text-sm"
                    required
                  />
                  <span className="absolute right-3 top-3 text-lg">✉️</span>
                </div>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white font-semibold py-3 rounded-xl transition-all duration-300 hover:scale-105 shadow-lg shadow-amber-500/25 hover:shadow-amber-500/40 flex items-center justify-center gap-2"
                >
                  <span>Subscribe to Updates</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </button>
                <p className="text-xs text-slate-500 text-center">
                  Join 5,000+ readers. No spam, just valuable content.
                </p>
              </form>
            </div>

            {/* Social Links */}
            <div className="pt-4">
              <p className="text-sm font-semibold text-slate-400 mb-3">Follow Our Journey</p>
              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href="#"
                    className={`w-12 h-12 rounded-2xl bg-slate-900/50 border border-slate-700 flex items-center justify-center text-lg transition-all duration-300 hover:scale-110 hover:border-amber-500/50 ${social.color} hover:text-white`}
                    aria-label={social.label}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM SECTION */}
        <div className="border-t border-slate-800 pt-8">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            {/* Copyright */}
            <div className="flex items-center gap-4">
              <div className="w-8 h-8 bg-gradient-to-br from-amber-500 to-amber-600 rounded-lg flex items-center justify-center">
                <span className="text-white text-sm font-bold">BC</span>
              </div>
              <div>
                <p className="text-sm text-slate-400 font-semibold">
                  © {year} BookCraft Publishing. All rights reserved.
                </p>
                <p className="text-xs text-slate-600 mt-1">
                  Crafting stories that inspire generations
                </p>
              </div>
            </div>

            {/* Legal Links */}
            <div className="flex flex-wrap gap-6">
              {legalLinks.map((item) => (
                <a
                  key={item}
                  href={`/${item.toLowerCase().replace(' ', '-')}`}
                  className="text-slate-400 hover:text-amber-300 transition-colors text-sm font-medium hover:scale-105"
                >
                  {item}
                </a>
              ))}
            </div>

            {/* Made With Love */}
            <div className="flex items-center gap-2 text-slate-500 text-sm">
              <span>Made with</span>
              <span className="text-amber-400 text-lg">❤️</span>
              <span>by Farhan Falaksher</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;