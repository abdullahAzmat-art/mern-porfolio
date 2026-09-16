import React, { useRef, useState } from 'react';
import { Github, ExternalLink, Sparkles, Cpu } from 'lucide-react';

const ProjectCardItem = ({ project }) => {
  const cardRef = useRef(null);
  const [transformStyle, setTransformStyle] = useState('perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)');
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -5;
    const rotateY = ((x - centerX) / centerX) * 5;
    setTransformStyle(`perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) translateY(-10px)`);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setTransformStyle('perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)');
  };

  const hasLiveLink = project.live && project.live !== '#';
  const hasGithubLink = project.github && project.github !== '#';

  /* ─── FEATURED card (full-width, big visual impact) ─── */
  if (project.featured) {
    return (
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={handleMouseLeave}
        style={{
          transform: transformStyle,
          transition: isHovered ? 'transform 0.1s ease-out' : 'transform 0.6s cubic-bezier(0.16,1,0.3,1)',
          willChange: 'transform',
        }}
        className="col-span-1 md:col-span-2 lg:col-span-3 project-glass-card group grid grid-cols-1 lg:grid-cols-5 overflow-hidden"
      >
        {/* Left: Image — 3/5 width on desktop */}
        <div className="lg:col-span-3 relative min-h-[220px] sm:min-h-[300px] overflow-hidden bg-neutral-900">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full   transition-transform duration-700 ease-out group-hover:scale-105"
            onError={(e) => {
              e.target.src =
                'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="800" height="500"%3E%3Crect fill="%23111" width="800" height="500"/%3E%3Ctext fill="%23555" font-family="sans-serif" font-size="20" x="50%25" y="50%25" text-anchor="middle" dy=".3em"%3EProject Preview%3C/text%3E%3C/svg%3E';
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[#0a0a0a]/90 pointer-events-none hidden lg:block" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/80 via-transparent to-transparent pointer-events-none lg:hidden" />

          {/* Category + AI badge */}
          <div className="absolute top-4 left-4 flex items-center gap-2">
            <span className="px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-gray-200 bg-black/70 backdrop-blur-md rounded-full border border-white/10">
              {project.category}
            </span>
            {project.aiPowered && (
              <span className="flex items-center gap-1 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-[#FFD700] bg-[#FFD700]/10 backdrop-blur-md rounded-full border border-[#FFD700]/30">
                <Cpu className="w-3 h-3" /> AI Powered
              </span>
            )}
          </div>
        </div>

        {/* Right: Content — 2/5 width on desktop */}
        <div className="lg:col-span-2 flex flex-col justify-between p-6 sm:p-8">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Sparkles className="w-4 h-4 text-[#FFD700]" />
              <span className="text-xs font-bold uppercase tracking-widest text-[#FFD700]">Featured Project</span>
            </div>

            <span className="text-xs font-semibold uppercase tracking-widest text-gray-500 block mb-1">
              {project.subtitle}
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-4 leading-tight group-hover:text-gray-100 transition-colors">
              {project.title}
            </h3>
            <p className="text-sm text-gray-400 leading-relaxed mb-6">
              {project.description}
            </p>

            {/* Feature Highlights */}
            {project.highlights && (
              <ul className="space-y-1.5 mb-6">
                {project.highlights.map((h, i) => (
                  <li key={i} className="flex items-start gap-2 text-xs text-gray-400">
                    <span className="mt-0.5 w-1.5 h-1.5 rounded-full bg-[#FFD700] flex-shrink-0" />
                    {h}
                  </li>
                ))}
              </ul>
            )}
          </div>

          <div>
            {/* Tech Badges */}
            <div className="flex flex-wrap gap-1.5 mb-5">
              {project.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="px-2.5 py-0.5 text-xs font-medium text-gray-300 bg-white/[0.06] border border-white/10 rounded-md"
                >
                  {tech}
                </span>
              ))}
            </div>

            
          </div>
        </div>
      </div>
    );
  }

  /* ─── STANDARD card ─── */
  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
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
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/90 via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />
        {project.category && (
          <span className="absolute top-3 left-3 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wider text-gray-300 bg-black/60 backdrop-blur-md rounded-full border border-white/10">
            {project.category}
          </span>
        )}
      </div>

      {/* Card Content */}
      <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
        <div>
          <span className="text-xs font-semibold uppercase tracking-widest text-gray-400 block mb-1">
            {project.subtitle}
          </span>
          <h3 className="text-xl font-bold text-white mb-2 leading-snug group-hover:text-gray-100 transition-colors">
            {project.title}
          </h3>
          <p className="text-sm text-gray-400 leading-relaxed line-clamp-3 mb-5">
            {project.description}
          </p>
        </div>

        <div>
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
              >
                <Github className="w-4 h-4" />
              </a>
            ) : (
              <span className="inline-flex items-center justify-center p-2.5 rounded-lg text-gray-600 bg-white/[0.02] border border-white/5 cursor-not-allowed">
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
