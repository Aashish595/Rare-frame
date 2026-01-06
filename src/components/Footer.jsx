import { FaInstagram, FaArtstation, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black py-16 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center gap-8">

        {/* LOGO */}
        <div className="group relative flex items-center cursor-default">
          <img
            src="/updatedLogo.png"
            alt="RareFrame"
            className="h-8 w-auto object-contain opacity-80 transition group-hover:opacity-100"
          />

          {/* underline */}
          <span className="absolute left-1/2 -bottom-2 h-px w-0 bg-white transition-all duration-300 group-hover:w-full group-hover:left-0" />
        </div>

        {/* SOCIAL ICONS */}
        <div className="flex gap-8">
          <a
            href="https://www.instagram.com/rareframe.studio"
            target="_blank"
            aria-label="Instagram"
            className="text-white/60 transition transform hover:text-white hover:-translate-y-1 hover:drop-shadow-[0_0_6px_rgba(255,255,255,0.4)]"
          >
            <FaInstagram size={20} />
          </a>

          <a
            href="https://www.linkedin.com/company/rareframe"
            target="_blank"
            aria-label="LinkedIn"
            className="text-white/60 transition transform hover:text-white hover:-translate-y-1 hover:drop-shadow-[0_0_6px_rgba(255,255,255,0.4)]"
          >
            <FaLinkedinIn size={20} />
          </a>
        </div>

        {/* COPYRIGHT */}
        <p className="text-white/40 text-xs tracking-wide">
          © 2026 RareFrame. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
