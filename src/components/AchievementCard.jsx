import React, { useState } from 'react';
import { X } from 'lucide-react';

const AchievementCard = ({ achievement }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const Icon = achievement.icon;

  return (
    <>
      <div className="achievement-glass-card group flex flex-col h-full p-6 sm:p-8">
        
        {/* If the achievement has an image (Certificate) */}
        {achievement.image ? (
          <div 
            className="relative w-full h-48 sm:h-56 mb-6 rounded-xl overflow-hidden border border-white/10 cursor-pointer"
            onClick={() => setIsModalOpen(true)}
          >
            <img 
              src={achievement.image} 
              alt={achievement.title} 
              className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              onError={(e) => {
                e.target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="300"%3E%3Crect fill="%23111" width="400" height="300"/%3E%3Ctext fill="%23555" font-family="sans-serif" font-size="18" font-weight="600" x="50%25" y="50%25" text-anchor="middle" dy=".3em"%3ECertificate Image%3C/text%3E%3C/svg%3E';
              }}
            />
            {/* Hover overlay for zoom indication */}
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
              <span className="text-white text-sm font-semibold bg-white/20 backdrop-blur-md px-4 py-2 rounded-full">
                View Certificate
              </span>
            </div>
          </div>
        ) : (
          /* Icon for non-image achievements (Hackathons) */
          <div className="w-16 h-16 rounded-2xl bg-white/[0.06] border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-white/[0.1] group-hover:border-white/20 transition-all duration-300 flex-shrink-0">
            <Icon className="w-8 h-8 text-[#FFD700] group-hover:text-yellow-300 transition-colors drop-shadow-[0_0_10px_rgba(255,215,0,0.3)]" />
          </div>
        )}

        {/* Content */}
        <div className="flex flex-col flex-1">
          <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 tracking-tight group-hover:text-gray-100 transition-colors leading-tight">
            {achievement.title}
          </h3>
          <p className="text-sm sm:text-base text-gray-400 leading-relaxed">
            {achievement.description}
          </p>
        </div>
      </div>

      {/* Lightbox / Modal for Image */}
      {isModalOpen && achievement.image && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 backdrop-blur-xl bg-black/80 transition-opacity duration-300">
          
          {/* Close button background area */}
          <div 
            className="absolute inset-0 cursor-pointer" 
            onClick={() => setIsModalOpen(false)}
          ></div>
          
          {/* Modal Content */}
          <div className="relative w-full max-w-4xl bg-[#111] border border-white/10 rounded-2xl p-2 shadow-[0_0_50px_rgba(0,0,0,0.8)] z-10 animate-fade-in-up">
            <button 
              onClick={() => setIsModalOpen(false)}
              className="absolute -top-12 right-0 sm:-right-12 sm:-top-12 p-3 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors border border-white/10"
              aria-label="Close modal"
            >
              <X size={24} />
            </button>
            <img 
              src={achievement.image} 
              alt={achievement.title} 
              className="w-full h-auto max-h-[80vh] object-contain rounded-xl"
              onError={(e) => {
                e.target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="800" height="600"%3E%3Crect fill="%23111" width="800" height="600"/%3E%3Ctext fill="%23555" font-family="sans-serif" font-size="24" font-weight="600" x="50%25" y="50%25" text-anchor="middle" dy=".3em"%3ECertificate Image%3C/text%3E%3C/svg%3E';
              }}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default AchievementCard;
