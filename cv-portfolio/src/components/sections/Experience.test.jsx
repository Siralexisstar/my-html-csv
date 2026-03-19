import React from 'react';
import { render, screen } from '@testing-library/react';
import { Experience } from './Experience';
import { describe, it, expect } from 'vitest';

describe('Experience Component', () => {
  it('renders the main heading', () => {
    render(<Experience />);
    // Checking the title of the section
    expect(screen.getByText('Experience')).toBeInTheDocument();
  });

  it('displays the correct companies', () => {
    render(<Experience />);
    expect(screen.getByText('GFT Deutschland')).toBeInTheDocument();
    expect(screen.getByText('Grupo GFT')).toBeInTheDocument();
    expect(screen.getByText('ADTEL')).toBeInTheDocument();
  });

  it('renders recent roles with correctly assigned titles', () => {
    render(<Experience />);
    expect(screen.getByText('L3 Software Engineer (Expert)')).toBeInTheDocument();
    const l2Roles = screen.getAllByText('L2 Software Engineer');
    expect(l2Roles.length).toBeGreaterThan(1);
  });
});
