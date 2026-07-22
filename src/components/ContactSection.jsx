import React from 'react';
import { Mail, Phone, Github, Linkedin } from 'lucide-react';
import ContactCard from './ContactCard';

const ContactSection = () => {
  const contacts = [
    {
      id: 1,
      icon: Mail,
      label: 'Email',
      value: 'hassanazmat079@gmail.com',
      link: 'mailto:hassanazmat079@gmail.com',
      target: '_self',
    },
    {
      id: 2,
      icon: Phone,
      label: 'Phone',
      value: '03084685669',
      link: 'tel:+923084685669',
      target: '_self',
    },
    {
      id: 4,
      icon: Github,
      label: 'View my projects',
      value: 'github.com/abdullahAzmat-art',
      link: 'https://github.com/abdullahAzmat-art',
    },
    {
      id: 5,
      icon: Linkedin,
      label: 'Connect on LinkedIn',
      value: 'linkedin.com/in/abdullah-azmat-art',
      link: 'https://www.linkedin.com/in/abdullah-azmat-art/',
    },
  ];

  return (
    <section id="contact" className="relative py-24 px-4 sm:px-6 lg:px-12 bg-black overflow-hidden font-poppins">
      
      {/* Background Glow / Particle indication (assuming global particles handle main effect) */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_bottom_left,rgba(251,252,255,0.03),transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-center">
          
          {/* Left Column: Heading & Text */}
          <div className="flex flex-col space-y-6 appear-animation text-center lg:text-left">
            <div className="inline-block">
              <span className="text-xs sm:text-sm font-bold tracking-widest text-gray-500 uppercase px-3 py-1 rounded-full border border-gray-700 bg-gray-900/50">
                Contact
              </span>
            </div>
            
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white leading-tight tracking-tight">
              Let's build something <br className="hidden lg:block"/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-100 to-gray-500 drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]">amazing</span>
            </h2>
            
            <p className="text-lg sm:text-xl text-gray-400 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Have a project in mind? I'd love to hear about it. Drop me a message and let's make it happen.
            </p>
          </div>

          {/* Right Column: Contact Cards Stack */}
          <div className="flex flex-col space-y-4 appear-animation w-full max-w-xl mx-auto lg:max-w-none">
            {contacts.map((contact) => (
              <ContactCard key={contact.id} contact={contact} />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;
