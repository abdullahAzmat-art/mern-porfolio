import React from 'react';

const TechBadge = ({ tech }) => {
  const Icon = tech.icon;

  return (
    <div
      className="tech-glass-card group flex flex-col items-center justify-center p-5 sm:p-6 text-center cursor-default"
      style={{ '--brand-color': tech.color }}
    >
      {/* Icon with scaling & brand color hover transition */}
      <div className="text-3xl sm:text-4xl text-gray-300 mb-3 group-hover:scale-110 group-hover:text-[var(--brand-color)] transition-all duration-300">
        <Icon />
      </div>

      {/* Technology Name */}
      <span className="text-xs sm:text-sm font-semibold text-gray-300 group-hover:text-white transition-colors tracking-wide">
        {tech.name}
      </span>
    </div>
  );
};

export default TechBadge;
