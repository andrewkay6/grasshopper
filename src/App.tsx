import React from 'react';
import './app.css';
import { ReactComponent as KijijiLogo } from './kijiji.svg';
import { ReactComponent as GrassHopperLogo } from './grasshopper.svg';
import Header from './Header';
import About from './About';
import Pricing from './Pricing';
import Contact from './Contact';
import Footer from './Footer';
function App() {
  return (
    <>
      <Header />
      <div className='contentContainer'>
        <About />
        <Pricing />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;
