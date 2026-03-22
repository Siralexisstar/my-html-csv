import React from 'react';
import './Section.css';
import { Container } from './Container';

export const Section = ({ id, title, icon, children, className = '' }) => {
  return (
    <section id={id} className={`section ${className}`}>
      <Container>
        {title && (
          <h2 className="section__title">
            {icon && <span className="section__icon">{icon}</span>}
            {title}
          </h2>
        )}
        {children}
      </Container>
    </section>
  );
};
