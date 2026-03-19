import React, { useState } from 'react';
import { Section } from '../layout/Section';
import './Skills.css';

export const Skills = () => {
  const [openCategory, setOpenCategory] = useState('Programming Languages');

  const categories = [
    {
      name: 'Programming Languages',
      skills: [
        { name: 'Java', level: 90 },
        { name: 'JavaScript', level: 85 },
        { name: 'SQL / PLSQL', level: 80 },
        { name: 'Python', level: 60 }
      ]
    },
    {
      name: 'DDBB',
      skills: [
        { name: 'Oracle', level: 85 },
        { name: 'MySQL / PostgreSQL', level: 80 },
        { name: 'BigQuery', level: 75 }
      ]
    },
    {
      name: 'Back-End Frameworks',
      skills: [
        { name: 'Spring Boot', level: 90 },
        { name: 'Spring Batch', level: 85 },
        { name: 'Spring MVC', level: 80 }
      ]
    },
    {
      name: 'Front-End',
      skills: [
        { name: 'React', level: 80 },
        { name: 'HTML5 / CSS3', level: 85 },
        { name: 'Thymeleaf', level: 70 }
      ]
    },
    {
      name: 'Infrastructure & Containers',
      skills: [
        { name: 'Docker', level: 75 },
        { name: 'Kubernetes (GKE)', level: 65 },
        { name: 'Networking / Routing', level: 80 }
      ]
    },
    {
      name: 'DevOps & Cloud',
      skills: [
        { name: 'GCP (Dataflow, Pub/Sub)', level: 80 },
        { name: 'GitHub Actions / Jenkins', level: 80 },
        { name: 'CI/CD Pipelines', level: 85 }
      ]
    },
    {
      name: 'Testing',
      skills: [
        { name: 'JUnit / Mockito', level: 85 },
        { name: 'Cucumber (Integration)', level: 75 },
        { name: 'TDD', level: 80 }
      ]
    }
  ];

  const certs = [
    { id: 'coderhouse-react', title: 'React Js Flex', issuer: 'Coderhouse', color: '#f59e0b' },
    { id: 'udemy-testing', title: 'Master Java Unit Testing with Spring Boot & Mockito', issuer: 'Udemy Alumni', color: '#a855f7' },
    { id: 'udemy-swagger', title: 'Learn Swagger and the OpenAPI Specification', issuer: 'Udemy Alumni', color: '#a855f7' },
    { id: 'udemy-tdd', title: 'Practical Test Driven Development', issuer: 'Udemy Alumni', color: '#a855f7' },
    { id: 'udemy-jms', title: 'Java Message Service', issuer: 'Udemy Alumni', color: '#a855f7' },
    { id: 'udemy-spark', title: 'Apache Spark for Java Developers', issuer: 'Udemy Alumni', color: '#a855f7' },
    { id: 'udemy-batch', title: 'Batch Processing (Spring Batch)', issuer: 'Udemy Alumni', color: '#a855f7' },
    { id: 'udemy-lambdas', title: 'Lambdas y Streams en Java', issuer: 'Udemy Alumni', color: '#a855f7' },
    { id: 'udemy-bigdata', title: 'Big Data y Spark: ingeniería de datos con Python y pyspark', issuer: 'Udemy Alumni', color: '#a855f7' },
    { id: 'udemy-jms-mvc', title: 'Java Messaging Service - Spring MVC, Spring Boot, ActiveMQ', issuer: 'Udemy Alumni', color: '#a855f7' }
  ];

  const handleToggle = (name) => {
    setOpenCategory(openCategory === name ? null : name);
  };

  return (
    <Section id="skills" title="Skills & Certifications" className="skills-section">
      <div className="skills-layout">
        <div className="skills-accordion">
          {categories.map((cat) => (
            <div key={cat.name} className={`accordion-item ${openCategory === cat.name ? 'is-open' : ''}`}>
              <button className="accordion-header" onClick={() => handleToggle(cat.name)}>
                {cat.name}
              </button>
              <div className="accordion-body">
                {cat.skills.map(skill => (
                  <div key={skill.name} className="skill-row">
                    <div className="skill-labels">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-percent">{skill.level}%</span>
                    </div>
                    <div className="skill-bar-bg">
                      <div className="skill-bar-fill" style={{ width: `${skill.level}%` }}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="skills-sidebar">
          <h3 className="sidebar-title">COURSES & CERTIFICATES</h3>
          <div className="courses-list">
            {certs.map(cert => (
              <div key={cert.id} className="course-item">
                <span className="course-bullet"></span>
                <div className="course-info">
                  <h4 className="course-title">{cert.title.toUpperCase()}</h4>
                  <p className="course-issuer">{cert.issuer}</p>
                </div>
                <div className="course-logo" style={{ color: cert.color }}>
                  {cert.issuer === 'Udemy Alumni' ? 'U' : 'CH'}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};
