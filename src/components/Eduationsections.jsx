import React, { useState } from 'react';
import { GraduationCap, Microscope, Rocket, Laptop } from 'lucide-react';

const EducationJourney = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const milestones = [
    {
      title: "Matriculation",
      subtitle: "9th & 10th Grade",
      year: "2021 - 2022",
      icon: GraduationCap,
      details: [
        "9th Grade - 2021",
        "10th Grade - 2022"
      ]
    },
    {
      title: "FSC Pre-Medical",
      subtitle: "11th & 12th Grade",
      year: "2023 - 2024",
      icon: Microscope,
      details: [
        "11th Grade - 2023",
        "12th Grade - 2024"
      ]
    },
    {
      title: "MERN Stack Course",
      subtitle: "PNY Training",
      year: "Aug 2024 - Jan 2025",
      icon: Rocket,
      badge: "NEW",
      details: [
        "Full-stack Development",
        "MongoDB, Express, React, Node.js"
      ]
    },
    {
      title: "BSc Computer Science",
      subtitle: "3rd Semester",
      year: "Sep 2024 - Present",
      icon: Laptop,
      details: [
        "Started: September 2024",
        "Currently in 3rd Semester"
      ]
    }
  ];

  return (
    <div className="min-h-screen  p-8 relative overflow-hidden mt-10">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-4 text-white" style={{fontSize:"50px"}}>
            Education Journey
          </h1>
          <p className="text-gray-500 text-lg">Hover over each milestone to see details</p>
        </div>

        {/* Desktop View - Curved Line */}
        <div className="hidden md:block relative mb-20 appear-animation" style={{ minHeight: '450px' }}>
          {/* SVG for curved path */}
          <svg 
            className="absolute inset-0 w-full pointer-events-none" 
            style={{ height: '300px', top: '50px' }}
            viewBox="0 0 1000 300"
            preserveAspectRatio="none"
          >
            <defs>
              <linearGradient id="pathGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#ffffff" stopOpacity="0.5" />
                <stop offset="50%" stopColor="#9ca3af" stopOpacity="0.5" />
                <stop offset="100%" stopColor="#ffffff" stopOpacity="0.5" />
              </linearGradient>
            </defs>
            <path
              d="M 100,150 C 250,80 350,80 450,150 C 550,220 650,220 900,150"
              stroke="url(#pathGradient)"
              strokeWidth="2.5"
              fill="none"
              strokeLinecap="round"
            />
          </svg>

          {/* Milestones Grid */}
          <div className="relative grid grid-cols-4 gap-8 px-8">
            {milestones.map((milestone, index) => {
              const Icon = milestone.icon;
              const topPositions = ['100px', '70px', '160px', '110px'];
              
              return (
                <div
                  key={index}
                  className="flex flex-col items-center"
                  style={{ 
                    position: 'relative',
                    top: topPositions[index]
                  }}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <div className={`mt-10
                    relative w-24 h-24 rounded-full bg-gray-900
                    flex items-center justify-center transform transition-all duration-500
                    ${hoveredIndex === index ? 'scale-125 shadow-2xl shadow-white/20' : 'mt-4 scale-100 shadow-lg shadow-white/10'}
                    cursor-pointer border-4 border-gray-800
                    hover:border-white z-10
                  `}>
                    <div className={`
                      w-20 h-20 rounded-full bg-gradient-to-br from-white to-gray-400
                      flex items-center justify-center transition-all duration-500
                      ${hoveredIndex === index ? 'from-white to-gray-300' : ''}
                    `}>
                      <Icon className="w-10 h-10 text-black" />
                    </div>
                    
                    {milestone.badge && (
                      <div className="absolute -top-2 -right-2 bg-white text-black text-xs px-3 py-1 rounded-full font-bold shadow-lg">
                        {milestone.badge}
                      </div>
                    )}
                  </div>

                  <div className={`
                    mt-6 text-center transition-all duration-500 transform
                    ${hoveredIndex === index ? 'scale-105' : 'scale-100'}
                  `}>
                    <h3 className="text-xl font-bold mb-1 text-white">{milestone.title}</h3>
                    <p className="text-gray-500 text-sm mb-1 font-medium">{milestone.subtitle}</p>
                    <p className="text-gray-500 text-sm mb-3">{milestone.year}</p>
                    
                    <div className={`
                      transition-all duration-500 overflow-hidden
                      ${hoveredIndex === index ? 'max-h-32 opacity-100' : 'max-h-0 opacity-0'}
                    `}>
                      <div className="bg-gray-900 rounded-xl px-4 py-3 shadow-lg border border-gray-800 mt-3">
                        {milestone.details.map((detail, idx) => (
                          <p key={idx} className="text-white text-sm leading-relaxed">
                            {detail}
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Mobile View - Vertical Line */}
        <div className="md:hidden relative">
          {/* Vertical Line */}
          <div className="absolute left-12 top-0 bottom-0 w-0.5 bg-gradient-to-b from-white via-gray-500 to-white opacity-50"></div>

          {/* Milestones */}
          <div className="space-y-12">
            {milestones.map((milestone, index) => {
              const Icon = milestone.icon;
              
              return (
                <div
                  key={index}
                  className="flex items-start gap-6"
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  {/* Circle on the line */}
                  <div className={`
                    relative w-24 h-24 rounded-full flex-shrink-0
                    flex items-center justify-center transform transition-all duration-500
                    ${hoveredIndex === index ? 'scale-110 shadow-2xl shadow-white/20' : 'scale-100 shadow-lg shadow-white/10'}
                    cursor-pointer border-4 border-gray-800
                    hover:border-white z-10
                  `}>
                    <div className={`
                      w-20 h-20 rounded-full bg-gradient-to-br from-white to-gray-400
                      flex items-center justify-center transition-all duration-500
                      ${hoveredIndex === index ? 'from-white to-gray-300' : ''}
                    `}>
                      <Icon className="w-10 h-10 text-black" />
                    </div>
                    
                    {milestone.badge && (
                      <div className="absolute -top-2 -right-2 bg-white text-black text-xs px-3 py-1 rounded-full font-bold shadow-lg">
                        {milestone.badge}
                      </div>
                    )}
                  </div>

                  {/* Milestone Info */}
                  <div className={`
                    flex-1 transition-all duration-500 transform
                    ${hoveredIndex === index ? 'scale-105' : 'scale-100'}
                  `}>
                    <h3 className="text-xl font-bold mb-1 text-white">{milestone.title}</h3>
                    <p className="text-gray-500 text-sm mb-1 font-medium">{milestone.subtitle}</p>
                    <p className="text-gray-500 text-sm mb-3">{milestone.year}</p>
                    
                    <div className={`
                      transition-all duration-500 overflow-hidden
                      ${hoveredIndex === index ? 'max-h-32 opacity-100' : 'max-h-0 opacity-0'}
                    `}>
                      <div className="bg-gray-900 rounded-xl px-4 py-3 shadow-lg border border-gray-800 mt-3">
                        {milestone.details.map((detail, idx) => (
                          <p key={idx} className="text-white text-sm leading-relaxed">
                            {detail}
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EducationJourney;