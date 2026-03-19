import React from 'react';
import { Section } from '../layout/Section';
import { Card } from '../ui/Card';
import './Certifications.css';

export const Certifications = () => {
  const certs = [
    {
      id: 'coderhouse-react',
      title: 'React Js Flex',
      issuer: 'Coderhouse',
      ref: 'Credential ID 66d5913a6f2e9cd3ca041dbb',
      date: 'N/A',
      tech: ['JavaScript', 'React'],
      initials: 'CH',
      color: '#f59e0b' // amber
    },
    {
      id: 'udemy-testing',
      title: 'Master Java Unit Testing with Spring Boot & Mockito',
      issuer: 'Udemy Alumni',
      date: 'Jul 2022',
      tech: ['Java', 'Spring Boot', 'Mockito'],
      initials: 'UD',
      color: '#a855f7' // purple
    },
    {
      id: 'udemy-swagger',
      title: 'Learn Swagger and the OpenAPI Specification',
      issuer: 'Udemy Alumni',
      date: 'Feb 2023',
      tech: ['Swagger', 'OpenAPI'],
      initials: 'UD',
      color: '#a855f7'
    },
    {
      id: 'udemy-tdd',
      title: 'Practical Test Driven Development',
      issuer: 'Udemy Alumni',
      date: 'Feb 2023',
      tech: ['TDD', 'Java'],
      initials: 'UD',
      color: '#a855f7'
    },
    {
      id: 'udemy-jms',
      title: 'Java Message Service',
      issuer: 'Udemy Alumni',
      date: 'Mar 2023 - Apr 2023',
      tech: ['JMS', 'Spring', 'Pub-Sub'],
      initials: 'UD',
      color: '#a855f7'
    },
    {
      id: 'udemy-spark',
      title: 'Apache Spark for Java Developers',
      issuer: 'Udemy Alumni',
      date: 'May 2022',
      tech: ['Big Data', 'Machine Learning', 'Spark', 'Kafka'],
      initials: 'UD',
      color: '#a855f7'
    },
    {
      id: 'udemy-batch',
      title: 'Batch Processing (Spring Batch)',
      issuer: 'Udemy Alumni',
      date: 'Apr 2023',
      tech: ['Spring Batch', 'PostgreSQL', 'MySQL'],
      initials: 'UD',
      color: '#a855f7'
    },
    {
      id: 'udemy-lambdas',
      title: 'Lambdas y Streams en Java',
      issuer: 'Udemy Alumni',
      date: 'Dec 2023 - Jan 2024',
      tech: ['Functional Programming', 'Java Streams'],
      initials: 'UD',
      color: '#a855f7'
    },
    {
      id: 'udemy-bigdata',
      title: 'Big Data y Spark: ingeniería de datos con Python y pyspark',
      issuer: 'Udemy Alumni',
      date: 'Mar 2024',
      tech: ['Python', 'PySpark', 'Big Data'],
      initials: 'UD',
      color: '#a855f7'
    },
    {
      id: 'udemy-jms-mvc',
      title: 'Java Messaging Service - Spring MVC, Spring Boot, ActiveMQ',
      issuer: 'Udemy Alumni',
      date: 'Mar 2024',
      tech: ['JMS', 'Spring MVC', 'ActiveMQ'],
      initials: 'UD',
      color: '#a855f7'
    }
  ];

  return (
    <Section id="certifications" title="Certifications">
      <div className="certs__grid">
        {certs.map((cert) => (
          <Card key={cert.id} className="certs__card">
            <div className="certs__header">
              <div className="certs__thumbnail" style={{ borderColor: cert.color }}>
                <span className="certs__initials" style={{ color: cert.color }}>{cert.initials}</span>
              </div>
              <div className="certs__titles">
                <h3 className="certs__title">{cert.title}</h3>
                <h4 className="certs__issuer">{cert.issuer}</h4>
              </div>
            </div>
            <div className="certs__body">
              {cert.date !== 'N/A' && <p className="certs__date">{cert.date}</p>}
              {cert.ref && <p className="certs__ref">{cert.ref}</p>}
              <div className="certs__tech">
                {cert.tech.map(t => (
                  <span key={t} className="certs__tag">{t}</span>
                ))}
              </div>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
};
