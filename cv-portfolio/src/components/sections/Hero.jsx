import React, { useState, useEffect } from 'react';
import { Section } from '../layout/Section';
import { Button } from '../ui/Button';
import { MatrixBackground } from '../ui/MatrixBackground';
import './Hero.css';

export const Hero = () => {
  const [typedTitle, setTypedTitle] = useState('');
  const fullTitle = "Alejandro García Villar";
  
  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setTypedTitle(fullTitle.slice(0, index + 1));
      index++;
      if (index >= fullTitle.length) clearInterval(interval);
    }, 80);
    return () => clearInterval(interval);
  }, []);

  return (
    <Section id="top" className="hero">
      <div className="hero__matrix-container">
        <MatrixBackground color="rgba(255, 0, 60, 0.4)" fontSize={16} />
      </div>
      
      <div className="hero__grid">
        <div className="hero__content">
          <h1 className="hero__title">
            <span className="hero__greeting">Hello, I'm</span>
            <br />
            {typedTitle}
            <span className="hero__cursor"></span>
          </h1>
          <h2 className="hero__subtitle">Software Engineer (Backend and Frontend)</h2>
          <p className="hero__summary">
            Software Engineer specialized in designing and building scalable, high-performance web applications using modern technologies.
            Strong focus on end-to-end development, seamlessly integrating robust backend systems with intuitive, high-quality frontend experiences.
          </p>
          <div className="hero__actions">
            <Button as="a" href="#contact" variant="primary" size="lg">Get in touch</Button>
            <Button as="a" href="#projects" variant="outline" size="lg">View work</Button>
          </div>
        </div>
        <div className="hero__image-container">
          <div className="hero__image-wrapper">
            <img
              src="/images/profileImg.jpeg"
              alt="Alejandro García Villar"
              className="hero__profile-img"
            />
          </div>
        </div>
      </div>
    </Section>
  );
};
