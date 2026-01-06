"use client";

import FadeIn from "./FadeIn";

const GIFS = ["gif1.gif", "gif2.gif", "gif3.gif" , "gif4.gif", "gif5.gif", "gif6.gif"];

export default function Portfolio() {
  return (
    <section
      id="portfolio"
      className="bg-black pt-14 pb-20 px-8 min-h-screen"
    >
      <div className="max-w-7xl  mx-auto">
        {/* PORTFOLIO HEADING */}
        <FadeIn>
          <div className="mb-8 flex items-center justify-center gap-4">
        
            <h2 className="text-4xl tracking-wide text-gray-300">
              PORTFOLIO
            </h2>
          </div>
        </FadeIn>

        {/* GRID */}
        <div className="grid md:grid-cols-3 gap-2">
          {GIFS.map((gif, index) => (
            <FadeIn key={index}>
              <div className="group relative overflow-hidden rounded-xl cursor-pointer">
                <img
                  src={`/gif/${gif}`}
                  alt={`Project ${index + 1}`}
                  loading="lazy"
                  className="w-full h-50 object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* subtle premium border on hover */}
                <div className="pointer-events-none absolute inset-0 ring-1 ring-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
