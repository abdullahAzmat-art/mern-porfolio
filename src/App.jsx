import { useEffect, useRef, useState } from 'react';
import Typed from 'typed.js';
import './App.css';
import Herosection from './components/Herosection';
import About from './components/About';

function App() {
  const el = useRef(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "Looking for a MERN Stack Developer?",
        "You're in the right place."
      ],
      typeSpeed: 40,
      backSpeed: 20,
      loop: true,
    });

    const time = setTimeout(() => {
      setLoading(false);
    }, 7000);

    return () => {
      typed.destroy();
      clearTimeout(time);
    };
  }, []);

  return (
    <>
      {loading && (
        <div className='flex justify-center items-center h-screen '>
          <span data-aos="fade-up"
            ref={el}
            className='font-poppins'
            style={{ color: "white", fontSize: "57px"  , fontWeight: "bold" , textAlign:"center"}}
          ></span>
          <span className="inline-block w-1 h-12 bg-white ml-2 animate-pulse"></span>
        </div>
      )}

      <div className={loading ? 'hidden' : 'visible'}>
  <Herosection/>
  <About/>
</div>
    </>
  );
}

export default App;
