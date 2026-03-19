import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import { describe, it, expect } from 'vitest';

describe('App Integration Pipeline', () => {
  it('renders without crashing and contains main regions', () => {
    const { container } = render(<App />);
    expect(container.querySelector('main')).toBeInTheDocument();
    expect(container.querySelector('footer')).toBeInTheDocument();
    
    // Check if sections are present by their basic tags or ids
    expect(container.querySelector('#experience')).toBeInTheDocument();
  });
});
