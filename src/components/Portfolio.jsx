"use client";

import FadeIn from "./FadeIn";

const GIFS = [
  "gif1.gif",
  "gif2.gif",
  "gif3.gif",
  "gif4.gif",
  "gif5.gif",
  "gif6.gif",
];

export default function Portfolio() {
  return (
    <section
      id="portfolio"
      className="bg-black pt-35 pb-20 px-8 min-h-screen"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 auto-rows-fr gap-4">
          {GIFS.map((gif, index) => (
            <FadeIn key={index}>
              <div className="group relative rounded-xl overflow-hidden cursor-pointer flex items-center">
                <img
                  src={`/gif/${gif}`}
                  alt={`Project ${index + 1}`}
                  loading="lazy"
                  className="w-full h-[260px] object-cover transition-transform duration-700 group-hover:scale-105"
                />

                <div className="pointer-events-none absolute inset-0 ring-1 ring-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
