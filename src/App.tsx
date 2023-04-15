import React from 'react';
import './app.css';
import { ReactComponent as KijijiLogo } from './kijiji.svg';
import { ReactComponent as GrassHopperLogo } from './grasshopper.svg';
import Header from './Header';
import About from './About';
import Pricing from './Pricing';
import Contact from './Contact';
function App() {
  return (
    <>
    <Header/>
    <About/>
    <Pricing/>
    <Contact/>
    </>
  );
}

export default App;
