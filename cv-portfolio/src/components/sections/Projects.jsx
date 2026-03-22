import React, { useEffect } from 'react';
import { Terminal } from 'lucide-react';
import { Section } from '../layout/Section';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';
import './Projects.css';

export const Projects = () => {
  const projects = [
    {
      id: 1,
      category: '// FRONTEND',
      title: 'BANK UI',
      description: 'Development of modern banking user interfaces focused on performance, usability, and scalability. Implementation of complex business logic, validations, and data visualizations (charts) to enhance user experience. Integration with backend services through secure APIs and gateways, ensuring smooth communication with Java Spring WebFlux microservices. Deployed on GCP with CI/CD pipelines using GitHub Actions.',
      tech: ['React', 'Vite', 'CSS Modules', 'JavaScript', 'Context API'],
    },
    {
      id: 2,
      category: '// MICROSERVICES',
      title: 'BANK MICROSERVICES',
      description: 'Design and development of scalable, event-driven microservices for banking systems using Java and Spring WebFlux. Implementation of reactive architectures, ensuring high performance and non-blocking data processing. Integration with BigQuery for data persistence and analytics. Full testing strategy including unit and integration tests (JUnit, Mockito). Deployment on GCP with automated CI/CD pipelines via GitHub Actions.',
      tech: ['Spring Boot', 'WebFlux', 'Java', 'JUnit', 'Mockito', 'BigQuery', 'GitHub Actions', 'CI/CD'],
    },
    {
      id: 3,
      category: '// IA',
      title: 'IA',
      description: 'Design and implementation of automation workflows for business processes using n8n. Integration of external services and APIs to orchestrate end-to-end automated solutions. Deployment and management of Docker-based environments on dedicated servers (Hetzner, Coolify). Development of scalable automation systems, including integrations with platforms such as WhatsApp Business API.',
      tech: ['N8N', 'Docker', 'Coolify', 'Hetzner', 'JAVASCRIPT', 'META', 'WHATSAPP BUSINESS API'],
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
    <Section id="projects" title="Featured Projects" icon={<Terminal size={28} />}>
      <div className="projects__grid">
        {projects.map(project => (
          <Card key={project.id} className="projects__card">
            <div className="projects__category">{project.category}</div>
            <h3 className="projects__title">{project.title}</h3>
            <p className="projects__desc">{project.description}</p>
            <div className="projects__tech">
              {project.tech.map(t => (
                <span key={t} className="projects__tag">{t}</span>
              ))}
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
};
