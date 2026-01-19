import React, { useState, useEffect } from 'react';


const About = () => {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const fullText = `My Journey: From Pre-Medical to MERN Stack Developer

🎓 10th Grade (2023)
Completed matriculation. My family wanted me to become a doctor, but deep inside, I had different dreams.

📚 FSC Pre-Medical (2024)
Enrolled at Punjab College as a private student. I studied Pre-Medical due to family pressure to pursue a medical career. However, I didn't have enough funds for medical school, and I realized this field was not my true passion.

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
      <h1 className='font-poppins text-center text-white appear-animation' style={{fontSize:"50px", fontWeight:"bold"}}>
        About Me
      </h1>
                <p className="text-gray-500 appear-animation text-md text-center font-poppins ">    From Pre-Medical to MERN Stack Developer
</p>

      <div className="flex flex-col md:flex-row items-center justify-between gap-8 px-4 sm:px-6 md:px-8 lg:px-12 mt-12">
        {/* Left content - VS Code Style Journey */}
        <div className="md:w-1/2 w-full appear-animation"  >
          <div className="relative max-w-2xl rounded-xl addcolor shadow-xl p-6 z-10" data-aos="fade-up-right">
            {/* Header bar */}
            <div className="flex items-center justify-between mb-4 pb-3 border-b border-gray-700">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <div className="text-xs text-gray-400">AbdullahJourney.txt</div>
            </div>

            {/* Journey content - WITH SCROLL */}
            <div className="h-[450px] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-600  no-scrollbar scrollbar-track-gray-800">
              <div className="text-gray-200 leading-relaxed whitespace-pre-wrap font-mono text-sm pr-2">
                {displayedText.split('\n').map((line, i) => {
                  // Title - Purple like VS Code
                  if (line.includes('My Journey:')) {
                    return <div key={i} className="text-purple-600 font-bold mb-3">{line}</div>;
                  }
                  // Emoji headings - Blue like VS Code function names
                  if (line.match(/^[🎓📚✨💻🚀⚡🌟💙]/)) {
                    return <div key={i} className="text-blue-400 font-semibold mt-3 mb-1">{line}</div>;
                  }
                  // Bullet points - Green like VS Code strings
                  if (line.startsWith('•')) {
                    return <div key={i} className="text-green-400 ml-4">{line}</div>;
                  }
                  // Philosophy quote - Yellow like VS Code warnings
                  if (line.includes('"')) {
                    return <div key={i} className="text-yellow-300">{line}</div>;
                  }
                  // Final message - Pink/Red like VS Code keywords
                  if (line.includes('heart ❤️')) {
                    return <div key={i} className="text-pink-400 mt-2">{line}</div>;
                  }
                  // Empty lines
                  if (line.trim() === '') {
                    return <div key={i} className="h-1"></div>;
                  }
                  // Regular text - Gray like VS Code comments
                  return <div key={i} className="text-gray-300">{line}</div>;
                })}
                {/* Blinking cursor */}
                {currentIndex < fullText.length && (
                  <span className="inline-block w-2 h-5 bg-green-400 ml-1 animate-pulse"></span>
                )}
              </div>
            </div>

            {/* Footer */}
            <div className="mt-4 pt-3 border-t border-gray-700 flex items-center justify-between">
              <div className="flex items-center gap-4 text-xs text-gray-500">
                <span>✓ No errors</span>
                <span>{Math.round((currentIndex / fullText.length) * 100)}% complete</span>
              </div>
              <div className="flex items-center gap-2">
                {currentIndex >= fullText.length && (
                  <button
                    onClick={handleRestart}
                    className="px-4 py-1.5 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-all text-xs flex items-center gap-2"
                  >
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                    </svg>
                    Replay
                  </button>
                )}
                <span className={`w-2 h-2 rounded-full ${currentIndex < fullText.length ? 'bg-green-400 animate-pulse' : 'bg-gray-600'}`}></span>
                <span className="text-xs text-gray-500">{currentIndex < fullText.length ? 'Typing...' : 'Complete'}</span>
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
  src="/Capture.PNG"
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