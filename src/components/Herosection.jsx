import React, { useEffect, useState } from 'react';
import { ChevronDown } from 'lucide-react';
import ParticlesComponent from './Particlessection';

const Herosection = () => {
  const [displayText, setDisplayText] = useState('');
  const fullText = "MERN Stack Developer";

  useEffect(() => {
    if (window.AOS) {
      window.AOS.init({ duration: 800, once: true });
    }
  }, []);

  // Typing effect
  useEffect(() => {
    let index = 0;
    const timer = setTimeout(() => {
      const interval = setInterval(() => {
        if (index <= fullText.length) {
          setDisplayText(fullText.slice(0, index));
          index++;
        } else {
          clearInterval(interval);
        }
      }, 80);
      return () => clearInterval(interval);
    }, 7200);

    return () => clearTimeout(timer);
  }, []);

  return (
   <div>
     <div className="relative flex flex-col justify-center items-center min-h-screen bg-black px-4 sm:px-6 md:px-8 lg:px-12 overflow-hidden py-4 sm:py-0">

      {/* Particles */}
      <ParticlesComponent id="hero-particles" />

      {/* Soft radial glow */}
      <div className="absolute inset-0 z-0
        bg-[radial-gradient(circle_at_center,rgba(251,252,255,0.05),transparent_60%)]">
      </div> 

      {/* Heading - Fully Responsive */}
      <h1 
        className="relative text-white fade-up fade-delay-1 font-poppins font-extrabold text-center mt-2 sm:mt-5 leading-tight"
        style={{ fontSize: "clamp(48px, 9vw, 110px)", zIndex: "10" }}
      >
        Abdullah Azmat
      </h1>

      {/* Animated underline - Responsive width */}
      <div className="underline-animate mt-3 sm:mt-3"></div>

      {/* Subtext with Typing Effect - Responsive */}
      <p 
        className="relative text-gray-300 fade-up fade-delay-2 font-poppins text-center font-semibold mt-4 sm:mt-6 tracking-wide min-h-[50px] sm:min-h-[70px] flex items-center justify-center px-2"
        style={{ fontSize: "clamp(24px, 4vw, 51px)" }}
      >
        {displayText}
        {/* <span className="inline-block w-0.5 sm:w-1 h-8 sm:h-12 bg-white ml-1 sm:ml-2 animate-pulse"></span> */}
      </p>

      {/* Tagline - Responsive */}
      <p 
        className="relative text-gray-500 fade-up fade-delay-3 font-poppins text-center mt-3 sm:mt-4 max-w-xl sm:max-w-2xl px-4 sm:px-0"
        style={{ fontSize: "clamp(14px, 2vw, 20px)", zIndex: "10" }}
      >
        Building scalable web applications with modern technologies
      </p>

      {/* Button - Responsive */}
      <a
        href="/Abdullah-Azmatresume.pdf"
        download="Abdullah-Azmat-Resume.pdf"
        className="relative mt-6 sm:mt-10 px-5 sm:px-7 py-2.5 sm:py-3 rounded-full font-poppins font-bold text-sm sm:text-base
                   border border-white text-white
                   bg-transparent
                   transition-all duration-500 ease-in-out
                   hover:bg-white hover:text-black
                   hover:scale-105 hover:shadow-[0_0_25px_rgba(255,254,255,0.6)]
                   active:scale-95"
        style={{ zIndex: "10" }}
      >
        Download Resume
      </a>

      {/* Scroll Down Indicator - Responsive */}
      <div 
        className="absolute bottom-4 sm:bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 sm:gap-2 opacity-0 fade-up fade-delay-4"
        style={{ zIndex: "10" }}
      >
        <span className="text-gray-500 text-xs sm:text-sm font-poppins">Scroll Down</span>
        <ChevronDown className="text-white animate-bounce" size={20} />
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
        
        /* Mobile optimization */
        @media (max-width: 640px) {
          .animate-bounce {
            animation: bounce 2s ease-in-out infinite;
          }
          
          @keyframes bounce {
            0%, 100% {
              transform: translateY(0);
            }
            50% {
              transform: translateY(-8px);
            }
          }
        }
      `}</style>

    </div>
      {/* <div className='flex justify-end items-end text-white  mb-4 p-4 absolute bottom-0 right-1 fixed'>
        <div className=''><a href='https://wa.me/03084685669?text=Hello%20I%20want%20to%20contact%20you  target="_blank"
'><img src="/fonts/wrpp2Nl4.png" alt="Abdullah Azmat" className="h-14 w-14 text-white rounded-2xl drop-shadow-[gray]" /></a></div>
      </div> */}
   </div>
  );
};

export default Herosection;