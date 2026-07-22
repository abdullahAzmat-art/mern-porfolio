import React from 'react';
import { Trophy, Medal, Award } from 'lucide-react';
import AchievementCard from './AchievementCard';

const AchievementsSection = () => {
  const achievements = [
    {
      id: 1,
      icon: Trophy,
      title: 'HackaForge NUML 1.0 — 2nd Position',
      description: 'Secured 2nd position in HackaForge NUML 1.0, a highly competitive hackathon held at the National University of Modern Languages.',
      image: null,
    },
    {
      id: 2,
      icon: Medal,
      title: 'HackaForge NUML 3.0 — 2nd Position',
      description: 'Secured 2nd position again in HackaForge NUML 3.0, demonstrating consistent competitive performance and problem-solving skills.',
      image: null,
    },
    {
      id: 3,
      icon: Award,
      title: 'MERN Stack Development Certification — PNY Training',
      description: 'Successfully completed and certified in MERN Stack Web Development from PNY Training, mastering full-stack applications.',
      image: null,
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-12 bg-black relative font-poppins" id="achievements">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-16 appear-animation">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            Achievements & Certifications
          </h2>
          <div className="w-16 h-1 bg-white/40 rounded-full mx-auto mb-5" />
          <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Recognition earned through competition, continuous learning, and pushing boundaries.
          </p>
        </div>

        {/* 3 Achievement Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch appear-animation">
          {achievements.map((achievement) => (
            <AchievementCard key={achievement.id} achievement={achievement} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default AchievementsSection;
