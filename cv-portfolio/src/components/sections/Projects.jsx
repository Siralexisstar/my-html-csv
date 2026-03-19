import React from 'react';
import { Section } from '../layout/Section';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';
import './Projects.css';

export const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A blazing fast, responsive online store built with React, Vite, and modern CSS.',
      tech: ['React', 'Vite', 'CSS Modules'],
      link: '#',
    },
    {
      id: 2,
      title: 'Dashboard App',
      description: 'Analytics dashboard featuring complex data visualization and real-time updates.',
      tech: ['React', 'Chart.js', 'REST API'],
      link: '#',
    },
    {
      id: 3,
      title: 'Portfolio V1',
      description: 'My previous portfolio focusing on animations and creative layouts.',
      tech: ['HTML', 'SASS', 'Vanilla JS'],
      link: '#',
    }
  ];

  return (
    <Section id="projects" title="Featured Projects">
      <div className="projects__grid">
        {projects.map(project => (
          <Card key={project.id} className="projects__card">
            <h3 className="projects__title">{project.title}</h3>
            <p className="projects__desc">{project.description}</p>
            <div className="projects__tech">
              {project.tech.map(t => (
                <span key={t} className="projects__tag">{t}</span>
              ))}
            </div>
            <div className="projects__actions">
              <Button as="a" href={project.link} variant="outline" size="sm">View Project</Button>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
};
