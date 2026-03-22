import React, { useEffect } from 'react';
import { Section } from '../layout/Section';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';
import './Projects.css';

export const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'URBANSTORE E-COMMERCE',
      description: 'A feature-rich e-commerce platform developed for Coderhouse certification. Implemented dynamic product catalogs, secure checkout simulations, and state management using React Context and Hooks.',
      tech: ['React', 'Vite', 'CSS Modules', 'JavaScript', 'Context API'],
      link: 'https://github.com/Siralexisstar/React-Store-Certification',
    },
    {
      id: 2,
      title: 'CSV-TO-WEB DATA VIEWER',
      description: 'UI to visualize CSV in a web page using Antigravity and other tools to improve the UI. Optimized for speed and responsiveness, and deployed as a serverless application on Vercel.',
      tech: ['React', 'Vite', 'Vercel', 'TypeScript', 'CSV Parsing'],
      link: 'https://github.com/Siralexisstar/my-html-csv',
    },
    {
      id: 3,
      title: 'HEXAFLOW ENGINE (IN PROGRESS)',
      description: 'A cutting-edge reactive microservice architected with Spring Boot WebFlux. Employs Hexagonal Architecture and Domain-Driven Design (DDD) to handle massive asynchronous data pipelines, integrated with MongoDB.',
      tech: ['Spring Boot', 'WebFlux', 'Hexagonal Architecture', 'DDD', 'MongoDB'],
      link: '#',
    }
  ];

  useEffect(() => {
    const handleMouseMove = (e) => {
      const cards = document.querySelectorAll('.projects__card');
      cards.forEach(card => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        card.style.setProperty('--mouse-x', `${x}px`);
        card.style.setProperty('--mouse-y', `${y}px`);
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

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
