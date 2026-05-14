import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Education from './components/Education';
import Contact from './components/Contact';

function App() {
  return (
    <div className="bg-brand-black min-h-screen relative text-brand-gray font-sans selection:bg-brand-purple/30 selection:text-brand-white">
      <div className="relative z-10">
        <Navbar />
        <main className="flex flex-col items-center w-full">
          <Hero />
          <About />
          <Experience />
          <Projects />
          <Skills />
          <Education />
          <Contact />
        </main>
      </div>
    </div>
  );
}

export default App;
