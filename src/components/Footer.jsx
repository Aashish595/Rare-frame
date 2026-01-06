import { FaInstagram, FaYoutube, FaArtstation, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black py-16 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center gap-6">

        {/* LOGO  */}
        <div className=" tracking-widest">
           <img src="/updatedLogo.png" alt="Rare frame"  className="h-6 w-auto object-contain"/>
        </div>

        {/* SOCIAL ICONS */}
        <div className="flex gap-6">
          <a
            href="https://www.instagram.com/rareframe.studio"
            target="_blank"
            className="text-white/60 hover:text-white transition"
          >
            <FaInstagram size={20} />
          </a>

          {/* <a
            href="https://youtube.com"
            target="_blank"
            className="text-white/60 hover:text-white transition"
          >
            <FaYoutube size={20} />
          </a> */}

          <a
            href="https://www.linkedin.com/company/rareframe"
            target="_blank"
            className="text-white/60 hover:text-white transition"
          >
            <FaLinkedinIn size={20} />
          </a>
        </div>

        {/* COPYRIGHT */}
        <p className="text-white/40 text-sm">
          © 2026 RareFrame. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
