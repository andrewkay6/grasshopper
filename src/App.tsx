import React from 'react';
import './app.css';
import { ReactComponent as KijijiLogo } from './kijiji.svg';
import { ReactComponent as GrassHopperLogo } from './grasshopper.svg';
import Header from './Header';
import About from './About';
import Pricing from './Pricing';
import Contact from './Contact';
import Footer from './Footer';
import Gallery from './Gallery';
function App() {
  return (
    <div className='appContainer'>
        <Header />    
      <div className='contentContainer'>
        <About />
        {/* <Pricing /> */}
        <Contact />
        <Gallery />
      </div>
      <Footer />
    </div>
  );
}

export default App;
