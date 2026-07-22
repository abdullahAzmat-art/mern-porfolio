import React from 'react';
import { SiWhatsapp } from 'react-icons/si';

const FloatingWhatsApp = () => {
  return (
    <a
      href="https://wa.me/923084685669"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 sm:bottom-8 sm:right-8 z-50 flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 bg-[#25D366] hover:bg-[#20b858] text-white rounded-full shadow-[0_4px_15px_rgba(37,211,102,0.4)] hover:shadow-[0_8px_25px_rgba(37,211,102,0.6)] transition-all duration-300 transform hover:-translate-y-1 hover:scale-110 group"
      aria-label="Chat with me on WhatsApp"
    >
      <SiWhatsapp className="w-8 h-8 sm:w-9 sm:h-9 drop-shadow-md group-hover:drop-shadow-lg transition-all" />
      
      {/* Tooltip */}
      <span className="absolute right-full mr-4 px-3 py-1.5 bg-gray-900 text-white text-xs font-semibold rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap border border-gray-700 shadow-xl">
        Chat on WhatsApp
        <span className="absolute top-1/2 -right-1 -translate-y-1/2 border-y-4 border-y-transparent border-l-4 border-l-gray-900"></span>
      </span>
    </a>
  );
};

export default FloatingWhatsApp;
