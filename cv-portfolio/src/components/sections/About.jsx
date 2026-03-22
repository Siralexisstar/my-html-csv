import React from 'react';
import { Section } from '../layout/Section';
import './About.css';

export const About = () => {
  return (
    <Section id="about" title="About Me" icon="# whoami" className="about">
      <div className="about__grid">
        <div className="about__text">
          <div className="about__bio">
            <h3 className="about__subheading">Biography</h3>
            <p>
              Hi, I’m Alejandro, a Software Engineer based in Barcelona.
              I specialize in building scalable, end-to-end digital solutions, with a strong foundation in backend engineering and a growing focus on modern frontend development.
              Over time, I’ve evolved into a full-stack engineer, designing and delivering resilient microservices, cloud-based architectures, and intuitive React applications that work seamlessly together.
              My approach combines performance, scalability, and clean architecture to create systems that are both reliable and user-focused.
            </p>
            <p>
              I’m driven by continuous learning and a strong curiosity for technology. I constantly explore new tools, frameworks, and architectural patterns to improve how systems are built and delivered.
            </p>
          </div>
          <div className="about__interests">
            <h3 className="about__subheading">Lifestyle & Interests</h3>
            <p>
              Outside of engineering, I dedicate a big part of my life to <strong>CrossFit</strong>.
              Training and competing is more than a hobby, it's a mindset that reinforces discipline, resilience, and consistency, values I also bring into my professional work.
            </p>
            <p>
              I enjoy disconnecting through simple but meaningful moments: spending time with my dog, going to the beach, and long outdoor walks that help me reset and stay focused.
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
