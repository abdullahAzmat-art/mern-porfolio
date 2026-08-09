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
import { Helmet } from 'react-helmet-async';

function App() {
  const scroll = new LocomotiveScroll();
  const [loading, setLoading] = useState(true);

  return (
    <>
      <CustomCursor />
      
      <Helmet>
        <title>Abdullah Azmat | Full Stack Developer</title>
        <meta name="description" content="Abdullah Azmat — Full Stack Developer specializing in React, Next.js, Node.js, and AI-integrated web applications that help businesses grow their online presence." />
        <meta name="keywords" content="Abdullah Azmat, Full Stack Developer, MERN Stack Developer, React Developer, AI Full Stack Developer" />
        <meta name="author" content="Abdullah Azmat" />
        <meta property="og:title" content="Abdullah Azmat | Full Stack Developer" />
        <meta property="og:description" content="Abdullah Azmat — Full Stack Developer specializing in React, Next.js, Node.js, and AI-integrated web applications that help businesses grow their online presence." />
        <meta property="og:url" content="https://abdullah-azmat-porfolio.vercel.app/" />
        <meta property="og:image" content="https://abdullah-azmat-porfolio.vercel.app/portfolio-preview.png" />
        <meta property="og:type" content="website" />
      </Helmet>

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
