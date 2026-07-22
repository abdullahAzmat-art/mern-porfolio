import React from 'react';
import { ArrowRight } from 'lucide-react';

const ContactCard = ({ contact }) => {
  const Icon = contact.icon;

  return (
    <a
      href={contact.link}
      target={contact.target || '_blank'}
      rel="noopener noreferrer"
      className="group flex items-center justify-between p-4 sm:p-5 w-full bg-white/[0.05] hover:bg-white/[0.08] backdrop-blur-xl border border-white/10 hover:border-white/20 rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.3)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.5)] transition-all duration-300 transform hover:-translate-y-1 overflow-hidden"
    >
      <div className="flex items-center gap-4 sm:gap-5">
        {/* Icon Badge */}
        <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-white/[0.06] border border-white/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:bg-white/[0.1] group-hover:border-white/20 transition-all duration-300">
          <Icon className="w-6 h-6 text-[#FFD700] group-hover:text-yellow-300 transition-colors drop-shadow-[0_0_8px_rgba(255,215,0,0.3)]" />
        </div>

        {/* Text Content */}
        <div className="flex flex-col">
          <span className="text-xs sm:text-sm text-gray-400 font-medium mb-0.5">
            {contact.label}
          </span>
          <span className="text-base sm:text-lg font-bold text-gray-100 group-hover:text-white transition-colors truncate max-w-[200px] sm:max-w-none">
            {contact.value}
          </span>
        </div>
      </div>

      {/* Arrow */}
      <div className="pl-4">
        <ArrowRight className="w-5 h-5 text-gray-500 group-hover:text-white group-hover:translate-x-1 transition-all duration-300" />
      </div>
    </a>
  );
};

export default ContactCard;
