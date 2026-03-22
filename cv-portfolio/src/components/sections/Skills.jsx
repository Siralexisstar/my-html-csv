import React, { useState } from 'react';
import { Section } from '../layout/Section';
import './Skills.css';

export const Skills = () => {
  const [openCategory, setOpenCategory] = useState('Programming Languages');

  const categories = [
    {
      name: 'Programming Languages',
      skills: [
        { name: 'Java', level: 85 },
        { name: 'JavaScript', level: 60 },
        { name: 'TypeScript', level: 60 },
        { name: 'Python', level: 50 },
        { name: 'SQL / PLSQL', level: 40 },
        { name: 'HTML', level: 90 },
        { name: 'CSS', level: 80 },
      ]
    },
    {
      name: 'DDBB',
      skills: [
        { name: 'Oracle', level: 60 },
        { name: 'MySQL / PostgreSQL', level: 60 },
        { name: 'MongoDB', level: 40 },
        { name: 'BigQuery', level: 80 }
      ]
    },
    {
      name: 'Back-End Frameworks',
      skills: [
        { name: 'Spring Boot', level: 70 },
        { name: 'Spark', level: 60 },
        { name: 'Spring WebFlux', level: 50 },
      ]
    },
    {
      name: 'Front-End',
      skills: [
        { name: 'React', level: 70 },
        { name: 'Thymeleaf', level: 70 }
      ]
    },
    {
      name: 'Infrastructure & Containers',
      skills: [
        { name: 'Docker', level: 50 },
        { name: 'Kubernetes (GKE)', level: 20 },
        { name: 'OpenShift', level: 20 },
        { name: 'RabbitMQ', level: 50 }
      ]
    },
    {
      name: 'DevOps & Cloud',
      skills: [
        { name: 'Google Cloud Platform', level: 50 },
        { name: 'GitHub Actions / Jenkins', level: 30 },
        { name: 'CI/CD Pipelines', level: 40 }
      ]
    },
    {
      name: 'Testing',
      skills: [
        { name: 'JUnit', level: 60 },
        { name: 'Mockito', level: 40 },
        { name: 'Cucumber (Integration)', level: 40 },
        { name: 'Postman', level: 80 },
      ]
    }
  ];

  const courses = [
    { id: 'udemy-testing', title: 'Master Java Unit Testing with Spring Boot & Mockito', issuer: 'Udemy Alumni', color: '#a855f7', initials: 'UD' },
    { id: 'udemy-swagger', title: 'Learn Swagger and the OpenAPI Specification', issuer: 'Udemy Alumni', color: '#a855f7', initials: 'UD' },
    { id: 'udemy-tdd', title: 'Practical Test Driven Development', issuer: 'Udemy Alumni', color: '#a855f7', initials: 'UD' },
    { id: 'udemy-jms', title: 'Java Message Service', issuer: 'Udemy Alumni', color: '#a855f7', initials: 'UD' },
    { id: 'udemy-spark', title: 'Apache Spark for Java Developers', issuer: 'Udemy Alumni', color: '#a855f7', initials: 'UD' },
    { id: 'udemy-batch', title: 'Batch Processing (Spring Batch)', issuer: 'Udemy Alumni', color: '#a855f7', initials: 'UD' },
    { id: 'udemy-lambdas', title: 'Lambdas and Streams in Java', issuer: 'Udemy Alumni', color: '#a855f7', initials: 'UD' },
    { id: 'udemy-bigdata', title: 'Big Data and Spark: data engineering with Python and PySpark', issuer: 'Udemy Alumni', color: '#a855f7', initials: 'UD' },
    { id: 'udemy-jms-mvc', title: 'Java Messaging Service - Spring MVC, Spring Boot, ActiveMQ', issuer: 'Udemy Alumni', color: '#a855f7', initials: 'UD' }
  ];

  const certifications = [
    { id: 'coderhouse-react', title: 'React Js Flex', issuer: 'Coderhouse', ref: '66d5913a6f2e9cd3ca041dbb', color: '#f59e0b', initials: 'CH' }
  ];

  const handleToggle = (name) => {
    setOpenCategory(openCategory === name ? null : name);
  };

  return (
    <Section id="skills" title="Skills, Courses & Certifications" className="skills-section">
      <div className="skills-layout-vertical">

        {/* 1. Skills Accordion */}
        <div className="skills-accordion">
          <h3 className="section-subtitle">SKILLS</h3>
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

        {/* 2. Courses Horizontal Carousel */}
        <div className="carousel-section">
          <h3 className="section-subtitle">COURSES (FINISHED)</h3>
          <div className="carousel-container">
            {courses.map(course => (
              <div key={course.id} className="carousel-card">
                <div>
                  <h4 className="course-title">{course.title.toUpperCase()}</h4>
                  <p className="course-issuer">{course.issuer}</p>
                </div>
                <div className="course-logo">
                  <img src="/images/udemy.png" alt="Udemy Logo" style={{ height: '36px', objectFit: 'contain', opacity: 0.9 }} />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 3. Certifications Horizontal Carousel */}
        <div className="carousel-section">
          <h3 className="section-subtitle">CERTIFICATIONS</h3>
          <div className="carousel-container">
            {certifications.map(cert => (
              <div key={cert.id} className="carousel-card">
                <div>
                  <h4 className="course-title">{cert.title.toUpperCase()}</h4>
                  <p className="course-issuer">{cert.issuer}</p>
                  <p className="course-ref">{cert.ref}</p>
                </div>
                <div className="course-logo">
                  <img src="/images/coderhouse.png" alt="Coderhouse Logo" style={{ height: '36px', objectFit: 'contain', opacity: 0.9 }} />
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </Section>
  );
};
