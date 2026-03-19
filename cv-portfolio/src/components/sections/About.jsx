import React from 'react';
import { Section } from '../layout/Section';
import './About.css';

export const About = () => {
  return (
    <Section id="about" title="About Me" className="about">
      <div className="about__grid">
        <div className="about__text">
          <div className="about__bio">
            <h3 className="about__subheading">Biography</h3>
            <p>
              Hi, I'm Alejandro. I am a versatile Software Engineer with a passion for building fully integrated digital solutions. Originally starting in systems and backend engineering, I've expanded my expertise across the entire stack—delivering resilient microservices and engaging React-based frontends.
            </p>
            <p>
              My philosophy centers around scalability, clean architecture, and continuous learning. Whether it's orchestrating complex data pipelines on GCP or crafting pixel-perfect UI components, I view every layer of the stack as critical to the final product.
            </p>
          </div>
          <div className="about__interests">
            <h3 className="about__subheading">Interests</h3>
            <p>
              When I'm not decommissioning legacy platforms or optimizing React renders, I enjoy exploring the outdoors, staying up-to-date with emerging tech trends, and experimenting with new rendering engines. Connecting with nature helps me reset and bring fresh perspectives to complex engineering problems.
            </p>
          </div>
        </div>
        <div className="about__visual">
          <div className="about__photo-grid">
            <img src="/images/profileImg.jpeg" alt="Developer setup" className="about__photo about__photo--main" />
            <img src="/images/hobby_nature.png" alt="Outdoor hobbies" className="about__photo about__photo--secondary" />
          </div>
        </div>
      </div>
    </Section>
  );
};
