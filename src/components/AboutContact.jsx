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
                <span className="text-2xl tracking-widest uppercase  text-gray-300">
                  About
                </span>

                <div className="flex items-center gap-4 mt-3"></div>
              </div>

              <div className="flex gap-6">
                <div className="space-y-6 max-w-md">
                  <p className="text-lg text-gray-100">
                    High-end compositing and shot finishing, crafted
                    frame by frame.
                  </p>

                  <p className="text-white/70 leading-relaxed">
                    RareFrame partners with directors who demand visuals that
                    stand up under scrutiny, from first edit to final delivery.
                  </p>

                  <p className="text-white/60 leading-relaxed">
                    Our carefully curated team focuses on visual continuity,
                    disciplined workflows, and close creative oversight
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
                <div className="flex items-center gap-4 ">
                  <h2 className="text-2xl text-gray-300 tracking-wide">
                    CONTACT
                  </h2>
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
                  placeholder="Tell us about your project (timeline, budget, vision)"
                  className="w-full bg-black/40 border border-white/10 p-3 h-32 focus:outline-none focus:border-white focus:ring-1 focus:ring-white/20"
                />

                <button
                  disabled={status === "sending"}
                  className="border border-white px-6 py-2 hover:bg-white  hover:text-black transition disabled:opacity-50"
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
