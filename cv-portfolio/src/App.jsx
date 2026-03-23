import React, { useEffect, useState } from 'react';
import { Navbar } from './components/layout/Navbar';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { Education } from './components/sections/Education';
import { Experience } from './components/sections/Experience';
import { Projects } from './components/sections/Projects';
import { Skills } from './components/sections/Skills';
import { Contact } from './components/sections/Contact';

function App() {
  const [visitCount, setVisitCount] = useState(0);

  useEffect(() => {
    document.title = "Alejandro García Villar - CV";
    // Visit counter using localStorage
    const count = parseInt(localStorage.getItem('cv_visit_count') || '0', 10) + 1;
    localStorage.setItem('cv_visit_count', count);
    setVisitCount(count);
  }, []);

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Contact />
      </main>
      <footer className="footer">
        <p>© {new Date().getFullYear()} Alejandro García Villar. Built with React.</p>
        <span className="footer__visits" title="Total visits from this browser">
          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
            <circle cx="12" cy="12" r="3"/>
          </svg>
          {visitCount} {visitCount === 1 ? 'visit' : 'visits'}
        </span>
      </footer>
    </>
  );
}

export default App;
