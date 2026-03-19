import React from 'react';
import { render, screen } from '@testing-library/react';
import { Education } from './Education';
import { describe, it, expect } from 'vitest';

describe('Education Component', () => {
  it('renders the education history items correctly', () => {
    render(<Education />);
    
    expect(screen.getByRole('heading', { name: /education/i })).toBeInTheDocument();
    
    // Validate that our key items render with accessible heading roles
    expect(screen.getByRole('heading', { name: /higher national diploma in multi-platform and web application development/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /bachelor's degree in geology/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /high school diploma in science and technology/i })).toBeInTheDocument();
  });
});
