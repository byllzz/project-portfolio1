import React, { useEffect, useState } from 'react';
import Preloader from './components/Preloader';
import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
import Home from './components/Home';
import HeroHighlightIntro from './components/HeroHighlightIntro';
import ShootingStarsBackground from './components/ShootingStarsBackground';
import Services from './components/Services';
import Skills from './components/Skills';
import Footer from './components/Footer';
import Contact from './components/Contact';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
   
    const timer = setTimeout(() => {
      setLoading(false);
    }, 4800); 

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? <Preloader /> : 
      <>
      <CustomCursor />
      <ShootingStarsBackground />
      <div className="container">
        <Navbar />
        <Home />
      <HeroHighlightIntro />
        <Skills />
     <Services />
     <Contact />
      </div>
      <Footer />
      </>
      }
    </>
  );
}

export default App;
