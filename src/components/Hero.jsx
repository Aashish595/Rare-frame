"use client";
import FadeIn from "./FadeIn";

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* VIDEO */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/video.mp4" type="video/mp4" />
      </video>

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/40 to-black/20" />

      {/* CONTENT */}
      <div className="relative z-10 h-full flex items-center justify-center text-center px-6">
        <FadeIn>
          <div className="max-w-3xl">
            <h1
              className="
          max-w-5xl mx-auto
          text-[48px] md:text-[56px]
          font-semibold
          tracking-[-0.02em]
          leading-tight
          text-gray-200
        "
            >
              High-End Compositing & Shot Finishing
            </h1>

            <p
              className="
          mt-3
          text-[18px] md:text-[20px]
          font-normal
          text-gray-400
          max-w-lg
          mx-auto
        "
            >
              Cinematic visual effects built for real-world production.
            </p>
          </div>
        </FadeIn>
      </div>

      {/* SCROLL */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50 text-xs tracking-widest animate-pulse">
        SCROLL
      </div>
    </section>
  );
}
