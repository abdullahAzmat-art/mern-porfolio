import React, { useEffect, useState } from 'react';

const Loader = ({ onComplete }) => {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    // Sequence of animations
    const t1 = setTimeout(() => setPhase(1), 400);  // Show brackets
    const t2 = setTimeout(() => setPhase(2), 1000); // Reveal name
    const t3 = setTimeout(() => setPhase(3), 2000); // Glow & Scale up
    const t4 = setTimeout(() => {
      setPhase(4);
      setTimeout(onComplete, 500); // Notify parent to remove loader
    }, 2600); // Fade out

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
    };
  }, [onComplete]);

  return (
    <div className={`fixed inset-0 z-[9999] bg-black flex items-center justify-center transition-opacity duration-500 ${phase === 4 ? 'opacity-0' : 'opacity-100'}`}>
      
      {/* Background ambient glow */}
      <div className={`absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,215,0,0.05),transparent_50%)] transition-all duration-1000 ${phase >= 3 ? 'scale-[2] opacity-0' : 'scale-100 opacity-100'}`} />

      <div className="relative flex items-center font-poppins text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
        
        {/* Left Bracket */}
        <span 
          className={`text-[#FFD700] transition-all duration-500 ease-out transform ${
            phase >= 1 ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
          } ${phase >= 3 ? 'scale-[3] opacity-0 blur-md' : ''}`}
        >
          {'{'}
        </span>

        {/* Name Reveal */}
        <div 
          className={`overflow-hidden transition-all duration-700 ease-in-out flex items-center justify-center ${
            phase >= 2 ? 'w-auto max-w-[500px] opacity-100 px-3 sm:px-4' : 'w-0 max-w-0 opacity-0 px-0'
          } ${phase >= 3 ? 'scale-150 opacity-0 blur-md' : ''}`}
          style={{ whiteSpace: 'nowrap' }}
        >
          <span className="text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]">
            Abdullah <span className="text-[#FFD700]">.</span>dev
          </span>
        </div>

        {/* Right Bracket */}
        <span 
          className={`text-[#FFD700] transition-all duration-500 ease-out transform ${
            phase >= 1 ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
          } ${phase >= 3 ? 'scale-[3] opacity-0 blur-md' : ''}`}
        >
          {'}'}
        </span>
      </div>

    </div>
  );
};

export default Loader;
