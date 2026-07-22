import { useEffect, useRef, useState } from 'react';
import './App.css';
import Herosection from './components/Herosection';
import About from './components/About';
import ServicesSection from './components/ServicesSection';
import TechStackSection from './components/TechStackSection';
import AchievementsSection from './components/AchievementsSection';
import ProjectsSection from './components/Projectcard';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import LocomotiveScroll from 'locomotive-scroll';
import CustomCursor from './components/CustomCursor';
import Loader from './components/Loader';

function App() {
  const scroll = new LocomotiveScroll();
  const [loading, setLoading] = useState(true);

  return (
    <>
      <CustomCursor />
      
      {loading && <Loader onComplete={() => setLoading(false)} />}

      <div className={loading ? 'hidden' : 'visible'}>
        <Herosection/>
        <About/>
        <ServicesSection/>
        <TechStackSection/>
        <AchievementsSection/>
        <ProjectsSection/>
        <ContactSection/>
        <Footer/>
      </div>
    </>
  );
}

export default App;
