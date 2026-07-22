import React from 'react';
import StoryTimeline from './StoryTimeline';

const About = () => {
  return (
    <section className="story-section" id="my-story" aria-label="My Story">

      {/* ── Section header ── */}
      <div className="story-header appear-animation">
        <h2 className="story-heading">My Story</h2>
        <p className="story-subheading">
          A unique transition from a Pre-Medical background into a passionate MERN Stack
          developer — driven by curiosity, resilience, and the belief that it's never too
          late to follow what truly excites you.
        </p>
      </div>

      {/* ── Two-column layout: timeline left, portrait right ── */}
      <div className="story-layout">

        {/* Timeline column */}
        <div className="story-timeline-col">
          <StoryTimeline />
        </div>

        {/* Portrait column */}
        <div className="story-portrait-col">
          <div className="story-portrait-wrapper appear-animation">
            {/* Subtle glow ring behind the photo */}
            <div className="story-portrait-glow" />
            <img
              src="/fonts/WhatsApp Image 2026-01-20 at 10.45.57 AM.jpeg"
              alt="Abdullah Azmat – MERN Stack Developer"
              className="story-portrait-img"
            />
          </div>

          {/* Quick-facts glass card beneath the portrait */}
          <div className="story-facts-card appear-animation">
            <div className="story-fact">
              <div>
                <div className="story-fact-label">University</div>
                <div className="story-fact-value">NUML – BSc Computer Science</div>
              </div>
            </div>
            <div className="story-fact">
              <div>
                <div className="story-fact-label">Location</div>
                <div className="story-fact-value">Pakistan</div>
              </div>
            </div>
            <div className="story-fact">
              <div>
                <div className="story-fact-label">Focus</div>
                <div className="story-fact-value">MERN Stack & AI Engineering</div>
              </div>
            </div>
            <div className="story-fact">
              <div>
                <div className="story-fact-label">GPA (4th Sem)</div>
                <div className="story-fact-value">3.2 / 4.0 — 5th Sem ongoing</div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;