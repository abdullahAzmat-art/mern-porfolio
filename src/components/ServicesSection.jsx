import React from 'react';
import { Globe, Sparkles, Layers } from 'lucide-react';
import ServiceCard from './ServiceCard';

const ServicesSection = () => {
  const services = [
    {
      id: 1,
      icon: Globe,
      title: 'Web Applications',
      description:
        'Custom, responsive web applications built to help businesses establish a strong online presence and convert visitors into customers.',
      features: [
        'Fast & high-performance load times',
        'Scalable & mobile-first design',
        'SEO-friendly structure for maximum visibility',
      ],
    },
    {
      id: 2,
      icon: Sparkles,
      title: 'AI-Integrated Web Applications',
      description:
        'Modern web apps enhanced with AI features (chatbots, automation, smart search, personalization) to give businesses a competitive edge.',
      features: [
        'AI chatbot & assistant integration',
        'Workflow & task automation',
        'Intelligent features tailored to business needs',
      ],
    },
    {
      id: 3,
      icon: Layers,
      title: 'Full-Stack Development',
      description:
        'End-to-end development covering frontend, backend, database, and deployment — a single point of contact from idea to launch.',
      features: [
        'MERN stack (MongoDB, Express, React, Node.js)',
        'Clean & maintainable architecture',
        'Production-ready deployment & cloud hosting',
      ],
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-12 bg-black relative font-poppins" id="services">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-16 appear-animation">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            What I Build
          </h2>
          <div className="w-16 h-1 bg-white/40 rounded-full mx-auto mb-5" />
          <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Solutions tailored to grow your business, not just add features.
          </p>
        </div>

        {/* 3 Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch appear-animation">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default ServicesSection;
