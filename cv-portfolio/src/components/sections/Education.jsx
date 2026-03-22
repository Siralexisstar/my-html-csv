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
      logo: '/images/descarga.png',
      color: '#0ea5e9' // sky blue
    },
    {
      id: 'ub',
      degree: 'Bachelor\'s Degree in Geology',
      institution: 'University of Barcelona',
      duration: 'Sep 2014 - Aug 2019',
      initials: 'UB',
      logo: '/images/UB.png',
      color: '#3b82f6' // blue
    },
    {
      id: 'ies',
      degree: 'High School Diploma in Science and Technology',
      institution: 'IES Frederic Mompou Barcelona',
      duration: '2016 - 2018',
      initials: 'IES',
      logo: '/images/Logo-FredericMompou.png',
      color: '#10b981' // emerald
    }
  ];

  return (
    <Section id="education" title="Education" icon="# cat education">
      <div className="education__list">
        {educationList.map((edu) => (
          <Card key={edu.id} className="education__card">
            <div className="education__thumbnail" style={{ borderColor: edu.color, overflow: 'hidden', padding: edu.logo ? '6px' : '0', backgroundColor: edu.logo ? '#fff' : 'var(--color-bg)' }}>
              {edu.logo ? (
                <img src={edu.logo} alt={`${edu.institution} logo`} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
              ) : (
                <span className="education__initials" style={{ color: edu.color }}>{edu.initials}</span>
              )}
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
