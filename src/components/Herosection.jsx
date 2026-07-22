import React, { useEffect } from 'react';
import { ArrowRight, Download } from 'lucide-react';
import ParticlesComponent from './Particlessection';

const Herosection = () => {
  const fullText = "Full Stack Developer & AI Integration Specialist";

  useEffect(() => {
    if (window.AOS) {
      window.AOS.init({ duration: 800, once: true });
    }
  }, []);

  const handleScrollToContact = (e) => {
    e.preventDefault();
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div>
      <div className="relative flex flex-col justify-center items-center min-h-[85vh] bg-black px-4 sm:px-6 md:px-8 lg:px-12 overflow-hidden py-16 sm:py-20 font-poppins">

        {/* Particles */}
        <ParticlesComponent id="hero-particles" />

        {/* Soft radial glow */}
        <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_center,rgba(251,252,255,0.05),transparent_60%)] pointer-events-none" />

        {/* Heading - Largest */}
        <h1 
          className="relative text-white fade-up fade-delay-1 font-extrabold text-center mt-2 sm:mt-5 leading-tight"
          style={{ fontSize: "clamp(48px, 9vw, 110px)", zIndex: "10" }}
        >
          Abdullah Azmat
        </h1>

        {/* Animated underline */}
        <div className="underline-animate mt-3 sm:mt-4" />

        {/* Subtitle - Second Largest */}
        <p 
          className="relative text-gray-200 fade-up fade-delay-2 text-center font-semibold mt-6 sm:mt-8 tracking-wide min-h-[40px] sm:min-h-[60px] flex items-center justify-center px-2"
          style={{ fontSize: "clamp(22px, 4vw, 40px)", zIndex: "10" }}
        >
          {fullText}
        </p>

        {/* Tagline - Third Largest */}
        <p 
          className="relative text-gray-300 fade-up fade-delay-3 text-center mt-4 sm:mt-5 max-w-xl sm:max-w-2xl px-4 sm:px-0 font-bold"
          style={{ fontSize: "clamp(18px, 2.5vw, 24px)", zIndex: "10" }}
        >
          I Build Websites That Grow Your Business
        </p>

        {/* New Short Description Line - Smallest & Muted */}
        <p 
          className="relative text-gray-400 fade-up fade-delay-3 text-center mt-3 sm:mt-4 max-w-xl px-4 sm:px-0 font-normal leading-relaxed"
          style={{ fontSize: "clamp(14px, 1.5vw, 18px)", zIndex: "10" }}
        >
          Helping businesses launch fast, modern, AI-ready web applications.
        </p>

        {/* Dual CTA Buttons (Side-by-side desktop, stacked mobile) */}
        <div className="relative mt-8 sm:mt-10 flex flex-col sm:flex-row items-center gap-4 z-10 w-full sm:w-auto px-4 sm:px-0 fade-up fade-delay-4">
          {/* Primary CTA */}
          <a
            href="#contact"
            onClick={handleScrollToContact}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3 rounded-full font-bold text-sm sm:text-base
                       bg-white text-black border border-white
                       transition-all duration-300 ease-in-out
                       hover:bg-gray-200 hover:scale-105 hover:shadow-[0_0_30px_rgba(255,255,255,0.5)]
                       active:scale-95 cursor-pointer"
          >
            <span>Let's Work Together</span>
            <ArrowRight size={18} />
          </a>

          {/* Secondary CTA */}
          <a
            href="/Abdullah-Azmatresume.pdf"
            download="Abdullah-Azmat-Resume.pdf"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3 rounded-full font-bold text-sm sm:text-base
                       border border-white/60 text-white bg-transparent
                       transition-all duration-300 ease-in-out
                       hover:border-white hover:bg-white/10 hover:scale-105 hover:shadow-[0_0_20px_rgba(255,255,255,0.2)]
                       active:scale-95"
          >
            <Download size={18} />
            <span>Download Resume</span>
          </a>
        </div>

        <style jsx>{`
          .fade-up {
            opacity: 0;
            animation: fadeUp 0.8s ease-out forwards;
          }
          
          .fade-delay-1 {
            animation-delay: 0.2s;
          }
          
          .fade-delay-2 {
            animation-delay: 0.5s;
          }
          
          .fade-delay-3 {
            animation-delay: 1.8s;
          }
          
          .fade-delay-4 {
            animation-delay: 2.5s;
          }
          
          @keyframes fadeUp {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          
          .underline-animate {
            width: 0;
            height: 5px;
            background: linear-gradient(90deg, #fff 0%, #e5e5e5 100%);
            margin: 0 auto;
            border-radius: 2px;
            animation: expandWidth 0.8s ease-out 0.8s forwards;
          }
          
          @keyframes expandWidth {
            from {
              width: 0;
            }
            to {
              width: clamp(85px, 16vw, 150px);
            }
          }
        `}</style>

      </div>
    </div>
  );
};

export default Herosection;