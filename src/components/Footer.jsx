import React from "react";
import {
  Github,
  Linkedin,
  Instagram,
  Mail,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="w-full bg-black/60 backdrop-blur-xl border-t border-gray-600/30 text-white mt-32">
      <div className="max-w-7xl mx-auto px-6 py-14 flex flex-col items-center">

        {/* Logo */}
        <img
          src="./public/fonts/Gemini_Generated_Image_ltvr7bltvr7bltvr.png"
          alt="Abdullah Azmat"
          className="h-16 w-20 rounded-2xl drop-shadow-[gray] mb-4"
        />

        {/* Description */}
        <p className="text-center max-w-2xl text-sm md:text-base text-gray-300 leading-relaxed">
          Abdullah Azmat — MERN Stack Full-Stack Developer.  
          Building modern, scalable & performance-driven web applications.
        </p>

        {/* Social Icons */}
        <div className="flex gap-6 mt-8">
          <a href="https://github.com/abdullahAzmat-art" target="_blank">
            <Github className="w-6 h-6 text-gray-400 hover:text-purple-400 transition-all hover:scale-110" />
          </a>

          <a href="https://www.linkedin.com/in/abdullah-azmat-art/" target="_blank">
            <Linkedin className="w-6 h-6 text-gray-400 hover:text-purple-400 transition-all hover:scale-110" />
          </a>

          <a href="https://instagram.com/brav_eabdullah" target="_blank">
            <Instagram className="w-6 h-6 text-gray-400 hover:text-purple-400 transition-all hover:scale-110" />
          </a>

          <a href="mailto:hasssanazmat079@gmail.com">
            <Mail className="w-6 h-6 text-gray-400 hover:text-purple-400 transition-all hover:scale-110" />
          </a>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-gray-600/20">
        <div className="text-center text-xs text-gray-400 py-4">
          © 2025 Abdullah Azmat • All Rights Reserved
        </div>
      </div>
    </footer>
  );
};

export default Footer;
