import React from 'react';
import { render, screen } from '@testing-library/react';
import { Experience } from './Experience';
import { describe, it, expect } from 'vitest';

describe('Experience Component', () => {
  it('renders the main section heading', () => {
    render(<Experience />);
    expect(screen.getByRole('heading', { name: /experience/i })).toBeInTheDocument();
  });

  it('displays the correct past companies as headings', () => {
    render(<Experience />);
    expect(screen.getByRole('heading', { name: /gft deutschland/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /grupo gft/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /adtel/i })).toBeInTheDocument();
  });

  it('renders recent roles with correctly assigned titles', () => {
    render(<Experience />);
    expect(screen.getByRole('heading', { name: /l3 software engineer \(expert\)/i })).toBeInTheDocument();
    const l2Roles = screen.getAllByRole('heading', { name: /l2 software engineer/i });
    expect(l2Roles.length).toBeGreaterThan(1);
  });
});
