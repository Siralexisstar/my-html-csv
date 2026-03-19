import React from 'react';
import { Section } from '../layout/Section';
import { Button } from '../ui/Button';
import './Hero.css';

export const Hero = () => {
  return (
    <Section id="top" className="hero">
      <div className="hero__content">
        <h1 className="hero__title">
          <span className="hero__greeting">Hello, I'm</span>
          <br />
          Alejandro García Villar
        </h1>
        <h2 className="hero__subtitle">Frontend Developer</h2>
        <p className="hero__summary">
          [Placeholder] Experienced in building scalable, responsive, and accessible web experiences using React and modern frontend technologies.
        </p>
        <div className="hero__actions">
          <Button as="a" href="#contact" variant="primary" size="lg">Get in touch</Button>
          <Button as="a" href="#projects" variant="outline" size="lg">View work</Button>
        </div>
      </div>
    </Section>
  );
};
