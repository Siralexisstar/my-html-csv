import React from 'react';
import { Section } from '../layout/Section';
import { Button } from '../ui/Button';
import './Contact.css';

export const Contact = () => {
  return (
    <Section id="contact" title="Get In Touch" className="contact">
      <div className="contact__wrapper">
        <p className="contact__desc">
          I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
        </p>
        <div className="contact__actions">
          <Button as="a" href="mailto:[alexgarciavillar96@gmail.com]" size="lg">
            Say Hello
          </Button>
          <div className="contact__socials">
            <a href="https://linkedin.com/in/alejandro-garcía-villar-175875205/" target="_blank" rel="noopener noreferrer" className="contact__link">LinkedIn</a>
            <a href="https://github.com/Siralexisstar" target="_blank" rel="noopener noreferrer" className="contact__link">GitHub</a>
          </div>
        </div>
      </div>
    </Section>
  );
};
