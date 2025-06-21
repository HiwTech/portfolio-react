import React from 'react'
import './assets/styles.css'
import Navbar from './Components/NavBar/Navbar';
import Intro from './Components/Intro/Intro'
import About from './Components/About/About';
import Skills from './Components/Skills/Skills';
import Portfolio from './Components/Portfolio/Portfolio';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import HomePage from "./Components/Intro/HomePage";



function App() {

  
  return (
    <div>
      <Navbar />
     
      <Intro />
      <About />
      <Skills />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}

export default App
