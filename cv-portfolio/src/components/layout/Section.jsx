import React from 'react';
import './Section.css';
import { Container } from './Container';

export const Section = ({ id, title, children, className = '' }) => {
  return (
    <section id={id} className={`section ${className}`}>
      <Container>
        {title && <h2 className="section__title">{title}</h2>}
        {children}
      </Container>
    </section>
  );
};
