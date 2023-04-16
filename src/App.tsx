import './App.css';
import Header from './Header';
import About from './About';
import Contact from './Contact';
import Footer from './Footer';
import Gallery from './Gallery';
function App() {
  return (
    <div className='appContainer'>
        <Header />    
      <div className='contentContainer'>
        <About />
        <Contact />
        <Gallery />
      </div>
      <Footer />
    </div>
  );
}

export default App;
