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
            {/* Line 1 */}
            <h1
              className="
    whitespace-normal md:whitespace-nowrap
    text-[30px] sm:text-[36px] md:text-[44px] lg:text-[52px]
    font-semibold
    tracking-[-0.02em]
    leading-tight
    text-gray-200
    max-w-full
  "
            >
              High-End Compositing & Shot Finishing
            </h1>

            {/* Line 2 */}
            <p
              className="
                mt-4
                text-[20px] md:text-[30px]
                font-medium
                text-gray-300
              "
            >
              For films and commercials.
            </p>

            {/* Line 3 */}
            <p
              className="
                mt-2
                text-[15px] md:text-[16px]
                font-normal
                text-gray-400
                max-w-md
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
