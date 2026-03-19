import React from 'react';
import { Section } from '../layout/Section';
import './Skills.css';

export const Skills = () => {
  const customSkills = [
    { category: 'Frontend', items: ['React', 'Vite', 'HTML5', 'CSS3/SASS', 'JavaScript (ES6+)'] },
    { category: 'Design', items: ['Figma', 'Responsive Design', 'Accessibility (WCAG)', 'UI/UX Principles'] },
    { category: 'Tools', items: ['Git', 'GitHub', 'Vercel', 'NPM', 'VS Code'] },
  ];

  return (
    <Section id="skills" title="Skills & Expertise" className="skills">
      <div className="skills__container">
        {customSkills.map((skillGroup, idx) => (
          <div key={idx} className="skills__group">
            <h3 className="skills__category">{skillGroup.category}</h3>
            <div className="skills__list">
              {skillGroup.items.map(item => (
                <span key={item} className="skills__item">{item}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};
