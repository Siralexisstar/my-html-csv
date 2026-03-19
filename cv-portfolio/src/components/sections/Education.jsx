import React from 'react';
import { Section } from '../layout/Section';
import { Card } from '../ui/Card';
import './Education.css';

export const Education = () => {
  const educationList = [
    {
      id: 'ifp',
      degree: 'Higher National Diploma in Multi-platform and Web Application Development',
      institution: 'iFP - Grupo Planeta',
      duration: 'Feb 2021 - Feb 2023',
      initials: 'iFP',
      color: '#0ea5e9' // sky blue
    },
    {
      id: 'ub',
      degree: 'Bachelor\'s Degree in Geology',
      institution: 'University of Barcelona',
      duration: 'Sep 2014 - Aug 2019',
      initials: 'UB',
      color: '#3b82f6' // blue
    },
    {
      id: 'ies',
      degree: 'High School Diploma in Science and Technology',
      institution: 'IES Frederic Mompou Barcelona',
      duration: '2016 - 2018',
      initials: 'IES',
      color: '#10b981' // emerald
    }
  ];

  return (
    <Section id="education" title="Education">
      <div className="education__list">
        {educationList.map((edu) => (
          <Card key={edu.id} className="education__card">
            <div className="education__thumbnail" style={{ borderColor: edu.color }}>
              <span className="education__initials" style={{ color: edu.color }}>{edu.initials}</span>
            </div>
            <div className="education__content">
              <div className="education__header">
                <h3 className="education__degree">{edu.degree}</h3>
                <span className="education__duration">{edu.duration}</span>
              </div>
              <h4 className="education__institution">{edu.institution}</h4>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
};
