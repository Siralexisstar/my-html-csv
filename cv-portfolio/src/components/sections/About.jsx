import React from 'react';
import { Section } from '../layout/Section';
import './About.css';

export const About = () => {
  return (
    <Section id="about" title="About Me" className="about">
      <div className="about__grid">
        <div className="about__text">
          <div className="about__bio">
            <h3 className="about__subheading">Biography & Continuous Learning</h3>
            <p>
              Hi, I'm Alejandro. I am a versatile Software Engineer with a passion for building fully integrated digital solutions. Originally starting in systems and backend engineering, I've expanded my expertise across the entire stack—delivering resilient microservices and engaging React-based frontends. 
            </p>
            <p>
              Beyond my daily professional work, my passion for technology drives me to constantly innovate, study, and learn. I am always striving to stay up to date with the latest technologies, frameworks, and architectural patterns to continuously evolve as an engineer.
            </p>
          </div>
          <div className="about__interests">
            <h3 className="about__subheading">Lifestyle & Interests</h3>
            <p>
              Outside of programming, I dedicate a massive part of my free time to sports, specifically <strong>CrossFit</strong>. Training hard and competing is more than just a hobby—it's a lifestyle that strengthens my mindset. It helps me stay ambitious, disciplined, and perseverant in chasing both my professional and personal goals.
            </p>
            <p>
              When I need to disconnect from the daily grind, there's nothing I enjoy more than spending quality time with my dog, going to the beach, and taking long outdoors walks to reset my mind.
            </p>
          </div>
        </div>
        <div className="about__visual">
          <div className="about__gallery">
            <div className="about__image-container">
              <img src="/images/crossfit1.jpeg" alt="CrossFit Training" className="about__img" />
            </div>
            <div className="about__image-container">
              <img src="/images/crossfit2.jpeg" alt="CrossFit Competition" className="about__img" />
            </div>
            <div className="about__image-container">
              <img src="/images/dog1.jpeg" alt="My Dog" className="about__img" />
            </div>
            <div className="about__image-container">
              <img src="/images/outdoors1.jpeg" alt="Outdoors and Nature" className="about__img" />
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};
