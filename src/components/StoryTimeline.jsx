import React from 'react';

// ─────────────────────────────────────────────────────
//  Journey data – edit entries here to update the page
// ─────────────────────────────────────────────────────
const journeyData = [
  {
    id: 1,
    year: '2023',
    title: '10th Grade – Matriculation',
    description:
      'Completed matriculation. My family envisioned a medical future for me, but deep inside I was quietly chasing a different dream — one built with logic and creativity.',
  },
  {
    id: 2,
    year: '2024',
    title: 'FSC Pre-Medical – Punjab College',
    description:
      "Enrolled in Pre-Medical under family expectations. Financial realities and a growing sense that this path wasn't mine made it clear: I needed the courage to pivot.",
  },
  {
    id: 3,
    year: '2024',
    title: 'The Turning Point',
    description:
      'After FSC I made the most important decision of my life — I enrolled in a MERN Stack Web Development course at PNY. The first time I built something on a screen, I knew I had found my real calling.',
    highlight: true,
  },
  {
    id: 4,
    year: '2024 – Present',
    title: 'BSc Computer Science – NUML',
    description:
      'Studying at NUML, currently in my 5th semester. Covered OOP, DSA, DBMS, and core CS fundamentals. Achieved a GPA of 3.2 in my 4th semester — growing stronger every term.',
  },
  {
    id: 5,
    year: 'Ongoing',
    title: 'MERN Stack & AI Engineering',
    description:
      'Continuously shipping projects with MongoDB, Express.js, React, and Node.js — and now diving deep into AI Engineering, building intelligent web applications every day.',
  },
  {
    id: 6,
    year: 'Today',
    title: 'Where I Stand',
    description:
      '"Your passion is your power. Never stop learning, never stop building." I am a developer who turned family pressure into personal purpose — and that resilience lives in every line of code I write.',
  },
];

// ─────────────────────────────────────────────────────
//  Single timeline card
// ─────────────────────────────────────────────────────
const TimelineCard = ({ item, index, isLast }) => (
  <div className="story-timeline-item">
    {/* Left: dot + connector */}
    <div className="story-timeline-line-wrapper">
      <div className={`story-timeline-dot${item.highlight ? ' story-timeline-dot--highlight' : ''}`}>
        <span className="story-timeline-dot-num">{String(index + 1).padStart(2, '0')}</span>
      </div>
      {!isLast && <div className="story-timeline-connector" />}
    </div>

    {/* Card */}
    <div className={`story-glass-card appear-animation${item.highlight ? ' story-glass-card--highlight' : ''}`}>
      <div className="story-card-body">
        <span className="story-card-year">{item.year}</span>
        <h3 className="story-card-title">{item.title}</h3>
        <p className="story-card-desc">{item.description}</p>
      </div>
    </div>
  </div>
);

// ─────────────────────────────────────────────────────
//  Timeline – maps over data
// ─────────────────────────────────────────────────────
const StoryTimeline = () => (
  <div className="story-timeline">
    {journeyData.map((item, idx) => (
      <TimelineCard key={item.id} item={item} index={idx} isLast={idx === journeyData.length - 1} />
    ))}
  </div>
);

export default StoryTimeline;
