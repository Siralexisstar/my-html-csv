import React from 'react';
import { Section } from '../layout/Section';
import { Card } from '../ui/Card';
import './Experience.css';

export const Experience = () => {
  const experiences = [
    {
      id: 1,
      role: 'Senior Frontend Developer',
      company: 'Tech Company [Placeholder]',
      duration: '2021 - Present',
      description: 'Led the frontend team in rebuilding the core product using React and Vite. Improved performance metrics by 40%.',
    },
    {
      id: 2,
      role: 'Frontend Developer',
      company: 'Digital Agency [Placeholder]',
      duration: '2018 - 2021',
      description: 'Developed accessible, high-performance websites for international clients. Implemented design systems and component libraries.',
    }
  ];

  return (
    <Section id="experience" title="Experience">
      <div className="experience__list">
        {experiences.map((exp) => (
          <Card key={exp.id} className="experience__card">
            <div className="experience__header">
              <h3 className="experience__role">{exp.role}</h3>
              <span className="experience__duration">{exp.duration}</span>
            </div>
            <h4 className="experience__company">{exp.company}</h4>
            <p className="experience__desc">{exp.description}</p>
          </Card>
        ))}
      </div>
    </Section>
  );
};
