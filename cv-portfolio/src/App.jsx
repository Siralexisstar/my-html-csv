import React, { useEffect } from 'react';
import { Navbar } from './components/layout/Navbar';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { Education } from './components/sections/Education';
import { Experience } from './components/sections/Experience';
import { Projects } from './components/sections/Projects';
import { Skills } from './components/sections/Skills';
import { Contact } from './components/sections/Contact';

function App() {
  // Adding a simple scroll listener to update active links if navigation was present
  // Also can be used for animations later
  useEffect(() => {
    document.title = "Alejandro García Villar - CV";
  }, []);

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Education />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <footer className="footer">
        <p>© {new Date().getFullYear()} Alejandro García Villar. Built with React & Vite.</p>
      </footer>
    </>
  );
}

export default App;
