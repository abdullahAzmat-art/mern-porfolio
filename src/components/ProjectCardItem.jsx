import React, { useRef, useState } from 'react';
import { Github, ExternalLink } from 'lucide-react';

const ProjectCardItem = ({ project }) => {
  const cardRef = useRef(null);
  const [transformStyle, setTransformStyle] = useState('perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)');
  const [isHovered, setIsHovered] = useState(false);

  // Mouse move tilt effect
  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    // Tilt calculations (-7deg to +7deg max)
    const rotateX = ((y - centerY) / centerY) * -6;
    const rotateY = ((x - centerX) / centerX) * 6;
    
    setTransformStyle(`perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) translateY(-8px)`);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setTransformStyle('perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)');
  };

  const hasLiveLink = project.live && project.live !== '#';
  const hasGithubLink = project.github && project.github !== '#';

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: transformStyle,
        transition: isHovered ? 'transform 0.1s ease-out, box-shadow 0.3s ease' : 'transform 0.5s ease-out, box-shadow 0.3s ease',
        willChange: 'transform',
      }}
      className="project-glass-card group flex flex-col justify-between"
    >
      {/* Top Image Banner */}
      <div className="relative w-full h-48 sm:h-52 overflow-hidden rounded-t-[16px] bg-neutral-900/80">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
          onError={(e) => {
            e.target.src =
              'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="300"%3E%3Crect fill="%23111" width="400" height="300"/%3E%3Ctext fill="%23555" font-family="sans-serif" font-size="18" font-weight="600" x="50%25" y="50%25" text-anchor="middle" dy=".3em"%3EProject Preview%3C/text%3E%3C/svg%3E';
          }}
        />

        {/* Overlay gradient on image */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/90 via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

        {/* Category tag badge */}
        {project.category && (
          <span className="absolute top-3 left-3 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wider text-gray-300 bg-black/60 backdrop-blur-md rounded-full border border-white/10">
            {project.category}
          </span>
        )}
      </div>

      {/* Card Content */}
      <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
        <div>
          {/* Subtitle / Tagline */}
          <span className="text-xs font-semibold uppercase tracking-widest text-gray-400 block mb-1">
            {project.subtitle}
          </span>

          {/* Title */}
          <h3 className="text-xl font-bold text-white mb-2 leading-snug group-hover:text-gray-100 transition-colors">
            {project.title}
          </h3>

          {/* Description */}
          <p className="text-sm text-gray-400 leading-relaxed line-clamp-3 mb-5">
            {project.description}
          </p>
        </div>

        <div>
          {/* Tech Badges */}
          <div className="flex flex-wrap gap-1.5 mb-6">
            {project.technologies.map((tech, index) => (
              <span
                key={index}
                className="px-2.5 py-0.5 text-xs font-medium text-gray-300 bg-white/[0.06] border border-white/10 rounded-md"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-3 pt-2 border-t border-white/10">
            {hasLiveLink ? (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-xs font-bold text-black bg-white hover:bg-gray-200 transition-all duration-300 shadow-md active:scale-95"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                Live Demo
              </a>
            ) : (
              <span className="flex-1 inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-lg text-xs font-semibold text-gray-500 bg-white/[0.04] border border-white/5 cursor-not-allowed">
                In Development
              </span>
            )}

            {hasGithubLink ? (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center p-2.5 rounded-lg text-gray-300 bg-white/[0.06] hover:bg-white/[0.12] hover:text-white border border-white/10 transition-all duration-300 active:scale-95"
                title="View Source Code on GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
            ) : (
              <span
                className="inline-flex items-center justify-center p-2.5 rounded-lg text-gray-600 bg-white/[0.02] border border-white/5 cursor-not-allowed"
                title="Private Repository"
              >
                <Github className="w-4 h-4" />
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCardItem;
