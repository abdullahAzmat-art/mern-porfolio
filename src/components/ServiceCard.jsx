import React from 'react';
import { Check } from 'lucide-react';

const ServiceCard = ({ service }) => {
  const Icon = service.icon;

  return (
    <div className="service-glass-card group p-6 sm:p-8 flex flex-col justify-between h-full">
      <div>
        {/* Top Icon Circle */}
        <div className="w-14 h-14 rounded-2xl bg-white/[0.06] border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-white/[0.1] group-hover:border-white/20 transition-all duration-300">
          <Icon className="w-7 h-7 text-[#FFD700] group-hover:text-yellow-300 transition-colors drop-shadow-[0_0_8px_rgba(255,215,0,0.3)]" />
        </div>

        {/* Service Title */}
        <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 tracking-tight group-hover:text-gray-100 transition-colors">
          {service.title}
        </h3>

        {/* Service Description */}
        <p className="text-sm sm:text-base text-gray-400 leading-relaxed mb-6">
          {service.description}
        </p>
      </div>

      {/* Feature Bullet Points */}
      <div className="pt-5 border-t border-white/10">
        <span className="text-xs font-semibold uppercase tracking-wider text-gray-400 block mb-3">
          Key Highlights
        </span>
        <ul className="space-y-2.5">
          {service.features.map((feature, idx) => (
            <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-300">
              <span className="w-4 h-4 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 mt-0.5 border border-white/10">
                <Check className="w-2.5 h-2.5 text-white" />
              </span>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ServiceCard;
