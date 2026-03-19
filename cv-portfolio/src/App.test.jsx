import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import { describe, it, expect } from 'vitest';

describe('App Integration Pipeline', () => {
  it('renders without crashing and contains main regions sequentially', () => {
    render(<App />);
    
    expect(screen.getByRole('main')).toBeInTheDocument();
    expect(screen.getByRole('contentinfo')).toBeInTheDocument(); // footer
    
    // Validating primary sub-sections exist contextually matching the navigation flow
    expect(screen.getByRole('heading', { name: /experience/i })).toBeInTheDocument();
  });
});
