import React, { useState } from 'react';
import ProjectCardItem from './ProjectCardItem';

const ProjectsSection = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const projects = [
    {
      id: 1,
      title: "Royal Venue",
      subtitle: "Marriage Hall Booking Platform",
      description: "Platform connecting customers with hall managers. Features pre-booking system for checking availability, venue details, and real-time reservation inquiries.",
      image: "/Capture3.PNG",
      technologies: ["React", "Node.js", "MongoDB", "Express"],
      github: "https://github.com/abdullahAzmat-art/Mariage-hall-booking-System",
      live: "https://royal-venue.vercel.app/",
      category: "Booking Platform"
    },
    {
      id: 2,
      title: "VORTX",
      subtitle: "eSports Tournament Platform",
      description: "Online tournament hosting platform for competitive gaming. Supports multiple games with automated bracket generation and real-time leaderboards.",
      image: "/image.PNG",
      technologies: ["React", "Node.js", "MongoDB", "WebSocket"],
      github: "https://github.com/abdullahAzmat-art/vortex-esports",
      live: "https://vortex-esports-5swi.vercel.app/",
      category: "Web Application"
    },
    {
      id: 3,
      title: "Ayesha.a Collection",
      subtitle: "Boutique E-Commerce Platform",
      description: "An elegant e-commerce platform for a boutique clothing brand, featuring curated collections, everyday elegance, and a seamless shopping experience.",
      image: "/ayesha_boutique1.PNG",
      technologies: ["React", "Node.js", "Express", "MongoDB", "Supabase"],
      github: "https://github.com/abdullahAzmat-art/Boutique-project-",
      live: "https://aayesha-collection.vercel.app/",
      category: "E-Commerce"
    },
    {
      id: 4,
      title: "E-Commerce Platform",
      subtitle: "Spring Boot University Project",
      description: "Full-stack e-commerce website featuring product catalogs, cart state management, user authentication, order processing, and administrative controls.",
      image: "/WhatsApp Image 2026-01-18 at 9.51.54 Px.jpeg",
      technologies: ["React", "Spring Boot", "MySQL", "Redux"],
      github: "https://github.com/abdullahAzmat-art/Ecommence-Frontend-with-Spring-boot-Application-",
      live: "#",
      category: "E-Commerce"
    },
    {
      id: 5,
      title: "Campus Lost & Found",
      subtitle: "University Community Platform",
      description: "Smart community platform to report, discover, and recover misplaced campus belongings with location tagging and item claim validation.",
      image: "/Capture.PNG",
      technologies: ["React", ".NET", "MySQL", "C#"],
      github: "#",
      live: "#",
      category: "Web Application"
    }
  ];

  const categories = ['All', 'E-Commerce', 'Booking Platform', 'Web Application'];

  const filteredProjects = activeFilter === 'All'
    ? projects
    : projects.filter(p => p.category === activeFilter);

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-12 bg-black min-h-screen relative font-poppins" id="projects">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-12 appear-animation">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            Things I've Built
          </h2>
          <div className="w-16 h-1 bg-white/40 rounded-full mx-auto mb-5" />
          <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            A showcase of full-stack web applications, e-commerce platforms, and real-world client solutions.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-14 appear-animation">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 ${
                activeFilter === category
                  ? 'bg-white text-black shadow-lg scale-105'
                  : 'bg-white/[0.05] text-gray-400 hover:text-white hover:bg-white/[0.1] border border-white/10'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch appear-animation">
          {filteredProjects.map((project) => (
            <ProjectCardItem key={project.id} project={project} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default ProjectsSection;