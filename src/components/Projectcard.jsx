import React, { useState } from "react";
import { Github, ExternalLink } from 'lucide-react';

const ProjectsSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [currentCard, setCurrentCard] = useState(null);

  const threshold = 12;

  const techColors = {
    "React": "bg-blue-500",
    "Spring Boot": "bg-green-500",
    "MySQL": "bg-blue-600",
    "Redux": "bg-purple-500",
    "Node.js": "bg-green-600",
    "MongoDB": "bg-green-700",
    "Express": "bg-gray-600",
    "WebSocket": "bg-orange-500",
    "JavaScript": "bg-yellow-500",
    "TypeScript": "bg-blue-400"
  };

  const projects = [
    {
      title: "E-Commerce Platform",
      subtitle: "Spring Boot University Project",
      description: "Full e-commerce website with product catalog, shopping cart, authentication, order management, and payment processing",
      image: "./public/WhatsApp Image 2026-01-18 at 9.51.54 Px.jpeg",
      technologies: ["React", "Spring Boot", "MySQL", "Redux"],
      github: "https://github.com/abdullahAzmat-art/Ecommence-Frontend-with-Spring-boot-Application-",
      live: "#"
    },
    {
      title: "Royal Venue",
      subtitle: "Marriage Hall Booking Platform",
      description: "Platform connecting customers with hall managers. Features pre-booking system for checking availability and real-time communication",
      image: "./public/Capture3.PNG",
      technologies: ["React", "Node.js", "MongoDB", "Express"],
      github: "https://github.com/abdullahAzmat-art/Mariage-hall-booking-System",
      live: "https://royal-venue.vercel.app/"
    },
    {
      title: "VORTX",
      subtitle: "eSports Tournament Platform",
      description: "Online tournament hosting platform for competitive gaming. Supports multiple games with automated bracket generation and real-time leaderboards",
      image: "./public/image.png",
      technologies: ["React", "Node.js", "MongoDB", "WebSocket"],
      github: "https://github.com/abdullahAzmat-art/vortex-esports",
      live: "https://vortex-esports-5swi.vercel.app/"
    }
  ];

  const handleMove = (e, index) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - left) / width - 0.5;
    const y = (e.clientY - top) / height - 0.5;
    setTilt({ x: y * -threshold, y: x * threshold });
    setCurrentCard(index);
  };

  const handleLeave = () => {
    setTilt({ x: 0, y: 0 });
    setCurrentCard(null);
  };

  return (
    <div className="min-h-screen bg-black p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 text-white">
            Featured Projects
          </h1>
          <p className="text-gray-500 text-lg">
            Interactive 3D project showcase
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 appear-animation">
          {projects.map((project, index) => (
            <div
              key={index}
              className="rounded-2xl shadow-2xl overflow-hidden transition-transform duration-200 ease-out cursor-pointer border border-gray-800 hover:border-gray-700"
              onMouseMove={(e) => handleMove(e, index)}
              onMouseLeave={handleLeave}
              onMouseEnter={() => setHoveredIndex(index)}
              style={{
                transform: currentCard === index 
                  ? `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) scale(1.02)`
                  : `perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)`
              }}
            >
              {/* Image */}
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-56 "
                  onError={(e) => {
                    e.target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="300"%3E%3Crect fill="%23111" width="400" height="300"/%3E%3Ctext fill="%23666" font-family="sans-serif" font-size="24" dy="10.5" font-weight="bold" x="50%25" y="50%25" text-anchor="middle"%3E' + project.title + '%3C/text%3E%3C/svg%3E';
                  }}
                />
                
                {/* Overlay on hover */}
                <div className={`absolute inset-0 bg-black backdrop-blur-sm flex items-center justify-center gap-4 transition-all duration-300 ${hoveredIndex === index ? 'opacity-100' : 'opacity-0'}`}>
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <button className="p-3 bg-white rounded-full hover:scale-110 transition-transform">
                      <Github className="w-5 h-5 text-black" />
                    </button>
                  </a>
                  <a href={project.live} target="_blank" rel="noopener noreferrer">
                    <button className="p-3 bg-white rounded-full hover:scale-110 transition-transform">
                      <ExternalLink className="w-5 h-5 text-black" />
                    </button>
                  </a>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="mt-1 mb-2 text-xl font-bold text-white">
                  {project.title}
                </h3>
                
                <p className="text-gray-500 text-sm mb-3">
                  {project.subtitle}
                </p>
                
                <p className="text-gray-400 text-sm mb-5 leading-relaxed line-clamp-3">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className={`px-3 py-1.5 ${techColors[tech] || 'bg-gray-600'} text-white text-xs font-semibold rounded-lg hover:scale-110 transition-transform shadow-lg`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsSection;