"use client";

import { useState } from "react";




export default function Navbar() {
  const [open, setOpen] = useState(false);

  const scrollTo = (id) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToTop = () => {
    setOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const linkClass =
    "relative uppercase text-sm tracking-widest text-white/70 hover:text-white transition";

  const underline =
    "absolute left-1/2 -bottom-1 h-px w-0 bg-white transition-all duration-300 group-hover:w-full group-hover:left-0";

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/40 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* LOGO */}
        <button
          onClick={scrollToTop}
          className="flex items-center"
        >
         <img className="h-8 w-auto object-contain"
          src="/updatedlogo.png" alt="RareFrame Logo" />
        </button>

        {/* DESKTOP NAV */}
        <div className="hidden md:flex gap-8">
          {["portfolio", "about", "contact"].map((id) => (
            <button
              key={id}
              onClick={() => scrollTo(id)}
              className={`group ${linkClass}`}
            >
              {id}
              <span className={underline} />
            </button>
          ))}
        </div>

        {/* MOBILE TOGGLE */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden relative w-6 h-6"
        >
          <span
            className={`absolute w-full h-[2px] bg-white transition-all
            ${open ? "rotate-45 top-3" : "top-1"}`}
          />
          <span
            className={`absolute w-full h-[2px] bg-white transition-all
            ${open ? "opacity-0" : "top-3"}`}
          />
          <span
            className={`absolute w-full h-[2px] bg-white transition-all
            ${open ? "-rotate-45 top-3" : "top-5"}`}
          />
        </button>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500
        ${open ? "max-h-64 opacity-100" : "max-h-0 opacity-0"}`}
      >
        <div className="px-6 pb-6 pt-2 flex flex-col gap-4 bg-black/70 backdrop-blur-md">
          {["portfolio", "about", "contact"].map((id) => (
            <button
              key={id}
              onClick={() => scrollTo(id)}
              className={`group ${linkClass}`}
            >
              {id}
              <span className={underline} />
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}
