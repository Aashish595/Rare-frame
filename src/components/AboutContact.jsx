"use client";
import FadeIn from "./FadeIn";
import { useState } from "react";

export default function AboutContact() {
  const [status, setStatus] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("sending");

    const form = e.target;
    const data = new FormData(form);

    const res = await fetch("https://formspree.io/f/mqekqzwv", {
      method: "POST",
      body: data,
      headers: { Accept: "application/json" },
    });

    if (res.ok) {
      setStatus("success");
      form.reset();
    } else {
      setStatus("error");
    }
  }

  return (
    <section className="bg-[#0b0b0b] text-white py-32 px-8">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20">
        {/* ABOUT */}
        <FadeIn>
          <div
            id="about"
            className="relative group rounded-xl p-1 cursor-default"
          >
            <div className="absolute inset-0 rounded-xl border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="relative rounded-xl p-10">
              {/* Section Header */}
              <div className="mb-10">
                <span className="text-xs tracking-widest uppercase text-white/40">
                  About Studio
                </span>

                <div className="flex items-center gap-4 mt-3">
                  <div className="w-10 h-px bg-gradient-to-r from-red-500/70 to-transparent" />
                  <h2 className="text-3xl font-serif tracking-wide">
                    Precision-driven VFX for cinematic storytelling
                  </h2>
                </div>
              </div>

              <div className="flex gap-6">
                {/* Vertical Accent Line */}
                <div className="w-px bg-gradient-to-b from-red-500/60 to-transparent" />

                <div className="space-y-6 max-w-md">
                  <p className="text-lg text-white/90">
                    <span className="text-red-400">High-end compositing</span>{" "}
                    and flawless shot finishing — crafted frame by frame.
                  </p>

                  <p className="text-white/70 leading-relaxed">
                    RareFrame partners with directors who demand visuals that
                    stand up under scrutiny, from first edit to final delivery.
                  </p>

                  <p className="text-white/60 leading-relaxed">
                    Our carefully curated team focuses on visual continuity,
                    disciplined workflows, and close creative oversight —
                    ensuring imagery that feels grounded, intentional, and real.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>

        {/* CONTACT */}
        <FadeIn delay={0.2}>
          <div
            id="contact"
            className="relative group rounded-xl p-1 cursor-default"
          >
            <div className="absolute inset-0 rounded-xl border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="relative rounded-xl p-10">
              {/* Section Header */}
              <div className="mb-8">
                <div className="flex items-center gap-4 mt-3">
                  <div className="w-10 h-px bg-linear-to-r from-red-500/50 to-transparent" />
                  <h2 className="text-3xl font-serif tracking-wide">Contact</h2>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  name="name"
                  required
                  placeholder="Your Name"
                  className="w-full bg-black/40 border border-white/10 p-3 focus:outline-none focus:border-white focus:ring-1 focus:ring-white/20"
                />

                <input
                  type="email"
                  name="email"
                  required
                  placeholder="Your Email"
                  className="w-full bg-black/40 border border-white/10 p-3 focus:outline-none focus:border-white focus:ring-1 focus:ring-white/20"
                />

                <textarea
                  name="message"
                  required
                  placeholder="Tell me about your project (timeline, budget, vision)"
                  className="w-full bg-black/40 border border-white/10 p-3 h-32 focus:outline-none focus:border-white focus:ring-1 focus:ring-white/20"
                />

                <button
                  disabled={status === "sending"}
                  className="border border-white px-6 py-2 hover:bg-white hover:text-black transition disabled:opacity-50"
                >
                  {status === "sending" ? "Sending..." : "Send Message"}
                </button>

                {status === "success" && (
                  <p className="text-green-400 text-sm">
                    Message sent successfully.
                  </p>
                )}
                {status === "error" && (
                  <p className="text-red-400 text-sm">Something went wrong.</p>
                )}
              </form>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
