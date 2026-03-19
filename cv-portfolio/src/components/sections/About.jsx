import React from 'react';
import { Section } from '../layout/Section';
import './About.css';

export const About = () => {
  return (
    <Section id="about" title="About Me" className="about">
      <div className="about__grid">
        <div className="about__text">
          <p>
            [Placeholder] Hello! I'm Alejandro, a frontend expert passionate about crafting premium, accessible, and fast web experiences. I specialize in the React ecosystem.
          </p>
          <p>
            [Placeholder] My journey in web development started back in...</p>
        </div>
        <div className="about__visual">
          {/* Will wrap an image or illustration when available */}
          <div className="about__placeholder-img">
            <span>[Your Image]</span>
          </div>
        </div>
      </div>
    </Section>
  );
};
