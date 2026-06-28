import React, { useState, useEffect } from 'react';

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [trailingPosition, setTrailingPosition] = useState({ x: -100, y: -100 });

  useEffect(() => {
    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('mousemove', updateMousePosition);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
    };
  }, []);

  useEffect(() => {
    let animationFrameId;
    const updateTrailingPosition = () => {
      setTrailingPosition(prev => {
        // Linear interpolation for smooth trailing effect
        const ease = 0.15;
        const dx = mousePosition.x - prev.x;
        const dy = mousePosition.y - prev.y;
        
        // If it's very close, just snap to it to avoid micro-jitter
        if (Math.abs(dx) < 0.1 && Math.abs(dy) < 0.1) {
          return mousePosition;
        }
        
        return {
          x: prev.x + dx * ease,
          y: prev.y + dy * ease
        };
      });
      animationFrameId = requestAnimationFrame(updateTrailingPosition);
    };
    
    animationFrameId = requestAnimationFrame(updateTrailingPosition);
    
    return () => cancelAnimationFrame(animationFrameId);
  }, [mousePosition]);

  return (
    <>
      {/* Small dot (instant) */}
      <div 
        className="fixed top-0 left-0 w-2 h-2 bg-white rounded-full pointer-events-none z-[9999] mix-blend-difference"
        style={{ 
          transform: `translate3d(${mousePosition.x - 4}px, ${mousePosition.y - 4}px, 0)` 
        }}
      />
      {/* Trailing ring (delayed smooth) */}
      <div 
        className="fixed top-0 left-0 w-8 h-8 border border-white rounded-full pointer-events-none z-[9999] mix-blend-difference"
        style={{ 
          transform: `translate3d(${trailingPosition.x - 16}px, ${trailingPosition.y - 16}px, 0)` 
        }}
      />
    </>
  );
};

export default CustomCursor;
