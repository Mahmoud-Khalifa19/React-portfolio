import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Section from './components/Section';
import Technologies from './components/Technologies';
import Projects from './components/Projects';
import Contact from './components/Contact';


const App = () => {
  return (
    <div>
      <Navbar />
       <Home /> 
       <Section />
       <Technologies />
       <Projects />
       <Contact />
      </div>
  );
}

export default App
