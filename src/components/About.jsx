import React, { useState, useEffect } from 'react';


const About = () => {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const fullText = `My Journey: From Pre-Medical to MERN Stack Developer

🎓 10th Grade (2023)
Completed matriculation. My family wanted me to become a doctor, but deep inside, I had different dreams.

📚 FSC Pre-Medical (2024)
Enrolled at Punjab College. I studied Pre-Medical due to family pressure to pursue a medical career. However, I didn't have enough funds for medical school, and I realized this field was not my true passion.

✨ The Turning Point (2024)
After FSC, I made the most important decision of my life — I enrolled in a MERN Stack Web Development course at PNY. This decision changed everything. I discovered my true interest in coding and software development.

💻 BSc First Semester (NUML)
Started my BSc in Computer Science at NUML (National University of Modern Languages).
• Studied Object-Oriented Programming (OOP)
• Built strong programming concepts
• Achieved a GPA of 3.3
This semester helped me think logically and understand how real software is structured.

🚀 BSc Third Semester (Current)
Currently studying core Computer Science subjects:
• DSA (Data Structures & Algorithms)
• DBMS (Database Management Systems)
These subjects are strengthening my problem-solving skills and data handling concepts.

⚡ MERN Stack Focus
Alongside my degree, I am continuously improving my skills in:
• MongoDB (Database)
• Express.js (Backend)
• React.js (Frontend)
• Node.js (Runtime)
Building real-world projects and learning every day.

🌟 Present Day
I am a passionate MERN Stack Developer who believes in growth through consistency. My journey from family pressure to finding my passion has been challenging, but it shaped who I am today.

💙 My Philosophy
"Your passion is your power. Never stop learning, never stop building."

The best decisions come from following your heart ❤️`;

  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(fullText.substring(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      }, 15); // Typing speed
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, fullText]);

  const handleRestart = () => {
    setDisplayedText('');
    setCurrentIndex(0);
  };

  return (
    <div className='min-h-screen mt-8 bg-black'>
    {/* Header */}
<div className="text-center mb-12">
  <h1 className="font-poppins text-white appear-animation font-bold tracking-tight" style={{ fontSize: "50px" }}>
    My Story
  </h1>
  <p className="text-gray-400 appear-animation text-lg max-w-xl mx-auto font-poppins">
    A unique transition from a Pre-Medical background into a passionate MERN Stack developer, driven by logic, code, and continuous learning.
  </p>
</div>

      <div className="flex flex-col md:flex-row items-center justify-between gap-8 px-4 sm:px-6 md:px-8 lg:px-12 mt-12">
        {/* Left content - VS Code Style Journey */}
        <div className="md:w-1/2 w-full appear-animation"  >
          <div className="relative max-w-2xl rounded-xl bg-[#1e1e1e] shadow-[0_0_50px_rgba(0,0,0,0.5)] border border-[#333] z-10 overflow-hidden" data-aos="fade-up-right">
            {/* Header bar */}
            <div className="h-10 bg-[#2d2d2d] flex items-center px-4 border-b border-[#111] justify-between">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
                <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
                <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
              </div>
              <div className="text-xs text-[#858585] font-mono">AbdullahJourney.txt</div>
              <div className="w-12"></div> {/* Spacer to center the text properly if needed, but flex-between handles it */}
            </div>

            {/* Journey content - WITH SCROLL */}
            <div className="h-[450px] overflow-y-auto scrollbar-thin scrollbaredit p-6">
              <div className="text-[#d4d4d4] leading-relaxed whitespace-pre-wrap font-mono text-sm pr-2">
                {displayedText.split('\n').map((line, i) => {
                  // Title - Keyword Purple
                  if (line.includes('My Journey:')) {
                    return <div key={i} className="text-[#c586c0] font-bold mb-3">{line}</div>;
                  }
                  // Emoji headings - Function Blue
                  if (line.match(/^[🎓📚✨💻🚀⚡🌟💙]/)) {
                    return <div key={i} className="text-[#4fc1ff] font-semibold mt-3 mb-1">{line}</div>;
                  }
                  // Bullet points - String Orange/Brown
                  if (line.startsWith('•')) {
                    return <div key={i} className="text-[#ce9178] ml-4">{line}</div>;
                  }
                  // Philosophy quote - Bracket Yellow
                  if (line.includes('"')) {
                    return <div key={i} className="text-[#ffd700]">{line}</div>;
                  }
                  // Final message - Property Light Blue
                  if (line.includes('heart ❤️')) {
                    return <div key={i} className="text-[#9cdcfe] mt-2">{line}</div>;
                  }
                  // Empty lines
                  if (line.trim() === '') {
                    return <div key={i} className="h-1"></div>;
                  }
                  // Regular text - Standard Gray
                  return <div key={i} className="text-[#d4d4d4]">{line}</div>;
                })}
                {/* Blinking cursor */}
                {currentIndex < fullText.length && (
                  <span className="inline-block w-2 h-4 bg-[#d4d4d4] ml-1 animate-pulse align-middle"></span>
                )}
              </div>
            </div>

            {/* Footer */}
            <div className="px-6 py-3 border-t border-[#333] bg-[#007acc] flex items-center justify-between">
              <div className="flex items-center gap-4 text-xs text-white font-mono">
                <span>✓ No errors</span>
                <span>{Math.round((currentIndex / fullText.length) * 100)}% complete</span>
              </div>
              <div className="flex items-center gap-2">
                {currentIndex >= fullText.length && (
                  <button
                    onClick={handleRestart}
                    className="px-3 py-1 bg-white/20 hover:bg-white/30 text-white rounded transition-all text-xs flex items-center gap-2 font-mono"
                  >
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                    </svg>
                    Replay
                  </button>
                )}
                <span className={`w-2 h-2 rounded-full ${currentIndex < fullText.length ? 'bg-white animate-pulse' : 'bg-gray-400'}`}></span>
                <span className="text-xs text-white font-mono">{currentIndex < fullText.length ? 'Typing...' : 'Complete'}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right content */}
       <div className="md:w-1/2 w-full  
 flex appear-animation justify-center items-center relative">
  
  {/* soft glow background */}
  {/* <div className="absolute w-72 h-72 bg-gray-800/30 blur-4xl rounded-full"></div> */}

 <img
  src="/fonts/WhatsApp Image 2026-01-20 at 10.45.57 AM.jpeg"
  alt="About Me Illustration"
  className="
    relative
    w-64 md:w-90
    rounded-xl
    grayscale
    brightness-75
    contrast-125
   
            hidden 
    sm:block
    opacity-80
    shadow-[0_40px_80px_rgba(0,0,0,0.8)]
    transition-all
    duration-700
    ease-out
    hover:grayscale-0
    hover:brightness-90
    hover:blur-0
    hover:opacity-100
    hover:scale-105
    hover:shadow-[0_30px_80px_rgba(255,255,255,0.15)]
  "
//   style={{ filter: "blur(2px)" }} 

/>

</div>
      </div>
    </div>
  );
}

export default About;