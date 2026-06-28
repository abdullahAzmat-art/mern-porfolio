import React, { useState } from "react";
import { Github, ExternalLink, FileCode2, Terminal, FolderOpen, Code2, ChevronRight } from 'lucide-react';

const ProjectsSection = () => {
  const [activeProject, setActiveProject] = useState(0);

  const projects = [
   
    {
      fileName: "royalVenue.jsx",
      title: "Royal Venue",
      subtitle: "Marriage Hall Booking Platform",
      description: "Platform connecting customers with hall managers. Features pre-booking system for checking availability and real-time communication.",
      image: "/Capture3.PNG",
      technologies: ["React", "Node.js", "MongoDB", "Express"],
      github: "https://github.com/abdullahAzmat-art/Mariage-hall-booking-System",
      live: "https://royal-venue.vercel.app/",
      type: "node"
    },
    {
      fileName: "vortx_esports.ts",
      title: "VORTX",
      subtitle: "eSports Tournament Platform",
      description: "Online tournament hosting platform for competitive gaming. Supports multiple games with automated bracket generation and real-time leaderboards.",
      image: "/image.PNG",
      technologies: ["React", "Node.js", "MongoDB", "WebSocket"],
      github: "https://github.com/abdullahAzmat-art/vortex-esports",
      live: "https://vortex-esports-5swi.vercel.app/",
      type: "typescript"
    },
    {
      fileName: "ayesha_collection.jsx",
      title: "Ayesha.a Collection",
      subtitle: "Boutique E-Commerce Platform",
      description: "An elegant e-commerce platform for a boutique clothing brand, featuring curated collections, everyday elegance, and a seamless shopping experience.",
      image: "/ayesha_boutique1.PNG",
      technologies: ["React", "Node.js", "Express", "MongoDB", "Supabase"],
      github: "https://github.com/abdullahAzmat-art/Boutique-project-",
      live: "https://aayesha-collection.vercel.app/",
      type: "react"
    } ,  {
      fileName: "ecommerce.jsx",
      title: "E-Commerce Platform",
      subtitle: "Spring Boot University Project",
      description: "Full e-commerce website with product catalog, shopping cart, authentication, order management, and payment processing.",
      image: "/WhatsApp Image 2026-01-18 at 9.51.54 Px.jpeg",
      technologies: ["React", "Spring Boot", "MySQL", "Redux"],
      github: "https://github.com/abdullahAzmat-art/Ecommence-Frontend-with-Spring-boot-Application-",
      live: "#",
      type: "react"
    },
    {
      fileName: "lost_and_found.jsx",
      title: "Campus Lost & Found",
      subtitle: "University Community Platform",
      description: "The fastest, smartest way to recover misplaced belongings or return items you've found. Connect with your campus community securely and effortlessly.",
      image: "Capture.PNG",
      technologies: ["React", ".NET Framework", "MySQL", "C#"],
      github: "#",
      live: "#",
      type: "react"
    }
  ];

  return (
    <div className="min-h-screen bg-black p-4 sm:p-8 flex items-center justify-center font-poppins">
      <div className="max-w-6xl w-full mx-auto appear-animation">
        
     {/* Header */}
<div className="text-center mb-16">
  <h1 className="text-5xl font-bold mb-4 text-white tracking-tight" style={{ fontSize: "50px" }}>
    Things I've Built
  </h1>
  <p className="text-gray-400 text-lg max-w-xl mx-auto">
    Turning complex problems into elegant, production-ready code. Hover over a card to explore.
  </p>
</div>
        {/* VS Code Window Container */}
        <div className="w-full bg-[#1e1e1e] rounded-xl overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)] border border-[#333] flex flex-col" style={{ minHeight: '600px' }}>
          
          {/* macOS Title Bar */}
          <div className="h-10 bg-[#2d2d2d] flex items-center px-4 border-b border-[#111]">
            <div className="flex space-x-2">
              <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
              <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
              <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
            </div>
            <div className="flex-1 text-center text-[#858585] text-xs font-mono">
              abdullah-workspace - Visual Studio Code
            </div>
          </div>

          {/* Main IDE Layout */}
          <div className="flex flex-1 flex-col md:flex-row overflow-hidden">
            
            {/* Sidebar (Explorer) */}
            <div className="w-full md:w-64 bg-[#252526] border-r border-[#333] flex flex-col">
              <div className="px-4 py-2 text-[#cccccc] text-xs font-semibold tracking-wider flex items-center">
                <FolderOpen className="w-4 h-4 mr-2" />
                EXPLORER
              </div>
              <div className="px-4 py-1 text-[#858585] text-xs font-bold mt-2">
                PROJECTS
              </div>
              
              <div className="mt-1 flex-1 overflow-y-auto">
                {projects.map((project, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveProject(index)}
                    className={`w-full flex items-center px-6 py-1.5 text-sm font-mono transition-colors ${
                      activeProject === index 
                        ? 'bg-[#37373d] text-white' 
                        : 'text-[#cccccc] hover:bg-[#2a2d2e]'
                    }`}
                  >
                    <FileCode2 className={`w-4 h-4 mr-2 ${
                      project.type === 'react' ? 'text-[#61dafb]' : 
                      project.type === 'node' ? 'text-[#68a063]' : 'text-[#3178c6]'
                    }`} />
                    {project.fileName}
                  </button>
                ))}
              </div>
            </div>

            {/* Editor Area */}
            <div className="flex-1 flex flex-col bg-[#1e1e1e] overflow-hidden relative">
              
              {/* Editor Tabs */}
              <div className="flex bg-[#252526] overflow-x-auto">
                {projects.map((project, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveProject(index)}
                    className={`flex items-center px-4 py-2 border-r border-[#333] text-xs font-mono min-w-fit ${
                      activeProject === index 
                        ? 'bg-[#1e1e1e] text-white border-t-2 border-t-[#007acc]' 
                        : 'bg-[#2d2d2d] text-[#858585] hover:bg-[#252526] border-t-2 border-t-transparent'
                    }`}
                  >
                    <FileCode2 className={`w-3.5 h-3.5 mr-2 ${
                      project.type === 'react' ? 'text-[#61dafb]' : 
                      project.type === 'node' ? 'text-[#68a063]' : 'text-[#3178c6]'
                    }`} />
                    {project.fileName}
                    {activeProject === index && (
                      <span className="ml-3 text-[#858585] hover:text-white rounded-md p-0.5">×</span>
                    )}
                  </button>
                ))}
              </div>

              {/* Breadcrumbs */}
              <div className="px-4 py-1.5 text-[#858585] text-xs font-mono border-b border-[#333] flex items-center">
                abdullah-portfolio <ChevronRight className="w-3 h-3 mx-1" /> projects <ChevronRight className="w-3 h-3 mx-1" /> {projects[activeProject].fileName}
              </div>

              {/* Active Project Content */}
              <div className="flex-1 overflow-y-auto p-4 sm:p-6 flex flex-col lg:flex-row gap-6 lg:gap-8">
                
                {/* Image / Preview Pane */}
                <div className="w-full lg:w-1/2 flex flex-col gap-4">
                  <div className="text-[#cccccc] font-mono text-sm flex items-center">
                    <Terminal className="w-4 h-4 mr-2 text-[#4af626]" />
                    Preview
                  </div>
                  <div className="relative group rounded-lg overflow-hidden border border-[#333] bg-black">
                    <img 
                      src={projects[activeProject].image} 
                      alt={projects[activeProject].title}
                      className="w-full h-[300px] lg:h-[300px] object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                      onError={(e) => {
                        e.target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="300"%3E%3Crect fill="%231a1a1a" width="400" height="300"/%3E%3Ctext fill="%23444" font-family="monospace" font-size="24" dy="10.5" font-weight="500" x="50%25" y="50%25" text-anchor="middle"%3EPreview Unavailable%3C/text%3E%3C/svg%3E';
                      }}
                    />
                    
                    {/* Action Links Overlay */}
                    <div className="absolute inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center gap-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <a href={projects[activeProject].github} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-2 hover:scale-110 transition-transform">
                        <div className="p-3 bg-[#2d2d2d] rounded-full border border-[#444] text-white hover:bg-white hover:text-black transition-colors">
                          <Github className="w-6 h-6" />
                        </div>
                        <span className="text-xs font-mono text-white">Source</span>
                      </a>
                      <a href={projects[activeProject].live} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-2 hover:scale-110 transition-transform">
                        <div className="p-3 bg-[#007acc] rounded-full border border-[#0098ff] text-white hover:bg-white hover:text-black transition-colors">
                          <ExternalLink className="w-6 h-6" />
                        </div>
                        <span className="text-xs font-mono text-white">Live Demo</span>
                      </a>
                    </div>
                  </div>
                </div>

                {/* Code / Description Pane */}
                <div className="w-full lg:w-1/2 font-mono text-sm leading-relaxed overflow-x-auto">
                  <div className="flex">
                    <div className="text-[#858585] text-right pr-4 select-none flex flex-col">
                      {[...Array(15)].map((_, i) => <span key={i}>{i + 1}</span>)}
                    </div>
                    <div className="text-[#d4d4d4]">
                      <div className="mb-2"><span className="text-[#c586c0]">const</span> <span className="text-[#4fc1ff]">project</span> <span className="text-[#d4d4d4]">=</span> <span className="text-[#ffd700]">{'{'}</span></div>
                      
                      <div className="pl-4 mb-1">
                        <span className="text-[#9cdcfe]">title</span><span className="text-[#d4d4d4]">:</span> <span className="text-[#ce9178]">"{projects[activeProject].title}"</span><span className="text-[#d4d4d4]">,</span>
                      </div>
                      
                      <div className="pl-4 mb-1">
                        <span className="text-[#9cdcfe]">subtitle</span><span className="text-[#d4d4d4]">:</span> <span className="text-[#ce9178]">"{projects[activeProject].subtitle}"</span><span className="text-[#d4d4d4]">,</span>
                      </div>
                      
                      <div className="pl-4 mb-1">
                        <span className="text-[#9cdcfe]">description</span><span className="text-[#d4d4d4]">:</span> <span className="text-[#ce9178]">"{projects[activeProject].description}"</span><span className="text-[#d4d4d4]">,</span>
                      </div>
                      
                      <div className="pl-4 mb-1 mt-3">
                        <span className="text-[#9cdcfe]">technologies</span><span className="text-[#d4d4d4]">:</span> <span className="text-[#ffd700]">{"["}</span>
                      </div>
                      
                      <div className="pl-8 flex flex-wrap gap-2 mb-1">
                        {projects[activeProject].technologies.map((tech, i, arr) => (
                          <span key={i}>
                            <span className="text-[#ce9178]">"{tech}"</span>{i < arr.length - 1 ? <span className="text-[#d4d4d4]">, </span> : ''}
                          </span>
                        ))}
                      </div>
                      
                      <div className="pl-4 mb-2">
                        <span className="text-[#ffd700]">{"]"}</span><span className="text-[#d4d4d4]">,</span>
                      </div>

                      <div className="pl-4 mb-1 mt-3">
                        <span className="text-[#6a9955]">/* Project Links */</span>
                      </div>
                      
                      <div className="pl-4 mb-1">
                        <span className="text-[#9cdcfe]">github</span><span className="text-[#d4d4d4]">:</span> <span className="text-[#ce9178]">"{projects[activeProject].github}"</span><span className="text-[#d4d4d4]">,</span>
                      </div>
                      
                      <div className="pl-4 mb-1">
                        <span className="text-[#9cdcfe]">liveDemo</span><span className="text-[#d4d4d4]">:</span> <span className="text-[#ce9178]">"{projects[activeProject].live}"</span>
                      </div>
                      
                      <div className="mb-2"><span className="text-[#ffd700]">{'}'}</span><span className="text-[#d4d4d4]">;</span></div>
                      
                      <div className="mt-4">
                        <span className="text-[#c586c0]">export default</span> <span className="text-[#4fc1ff]">project</span><span className="text-[#d4d4d4]">;</span>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsSection;