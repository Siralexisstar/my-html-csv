import React from 'react';
import { Section } from '../layout/Section';
import { Card } from '../ui/Card';

export const Education = () => {
  return (
    <Section id="education" title="Education">
      <div style={{ maxWidth: '800px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 'var(--spacing-md)' }}>
        <Card>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 'var(--spacing-sm)' }}>
            <h3 style={{ color: 'var(--color-primary)', fontSize: '1.25rem', margin: 0 }}>Computer Engineering Degree</h3>
            <span style={{ color: 'var(--color-text-muted)', fontSize: '0.875rem' }}>2017 - 2021</span>
          </div>
          <h4 style={{ color: '#fff', fontSize: '1.125rem', marginBottom: 'var(--spacing-md)', fontWeight: 500 }}>University of Example</h4>
          <p style={{ margin: 0, color: 'var(--color-text-muted)' }}>Foundational studies in computer science, software engineering, and networking. [Placeholder data]</p>
        </Card>
      </div>
    </Section>
  );
};
