import React from 'react';
import {
  SiMongodb,
  SiReact,
  SiNextdotjs,
  SiExpress,
  SiNodedotjs,
  SiJavascript,
  SiTypescript,
  SiCplusplus,
  SiDotnet,
  SiMysql,
  SiHtml5,
  SiCss,
  SiPython,
  SiLangchain,
} from 'react-icons/si';
import { Layers, Bot, GitFork } from 'lucide-react';
import TechBadge from './TechBadge';

const TechStackSection = () => {
  const technologies = [
    { name: 'MERN Stack', icon: Layers, color: '#61DAFB' },
    { name: 'Python', icon: SiPython, color: '#3776AB' },
    { name: 'LangChain', icon: SiLangchain, color: '#38BDF8' },
    { name: 'LangGraph', icon: GitFork, color: '#A78BFA' },
    { name: 'RAG', icon: Bot, color: '#34D399' },
    { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
    { name: 'React', icon: SiReact, color: '#61DAFB' },
    { name: 'Next.js', icon: SiNextdotjs, color: '#FFFFFF' },
    { name: 'Express', icon: SiExpress, color: '#E0E0E0' },
    { name: 'Node.js', icon: SiNodedotjs, color: '#5FA04E' },
    { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
    { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
    { name: 'C++', icon: SiCplusplus, color: '#00599C' },
    { name: '.NET', icon: SiDotnet, color: '#512BD4' },
    { name: 'MySQL', icon: SiMysql, color: '#4479A1' },
    { name: 'HTML', icon: SiHtml5, color: '#E34F26' },
    { name: 'CSS', icon: SiCss, color: '#1572B6' },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-12 bg-black relative font-poppins" id="tech-stack">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 appear-animation">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            Technologies I Work With
          </h2>
          <div className="w-16 h-1 bg-white/40 rounded-full mx-auto mb-5" />
          <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            The tools, AI frameworks, and languages I use to bring ideas to life.
          </p>
        </div>

        {/* Responsive Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-6 appear-animation">
          {technologies.map((tech, index) => (
            <TechBadge key={index} tech={tech} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStackSection;
