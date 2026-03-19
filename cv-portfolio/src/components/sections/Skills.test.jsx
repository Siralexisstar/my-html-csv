import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Skills } from './Skills';
import { describe, it, expect } from 'vitest';

describe('Skills Component', () => {
  it('renders the main skills categories accordion headers', () => {
    render(<Skills />);
    expect(screen.getByRole('heading', { name: /skills, courses & certifications/i })).toBeInTheDocument();
    
    expect(screen.getByRole('button', { name: /programming languages/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /ddbb/i })).toBeInTheDocument();
  });

  it('toggles the accordion category when clicked', async () => {
    const user = userEvent.setup();
    render(<Skills />);
    
    const ddbbButton = screen.getByRole('button', { name: /ddbb/i });
    const ddbbContainer = ddbbButton.closest('.accordion-item');
    
    // Initially not open
    expect(ddbbContainer).not.toHaveClass('is-open');
    
    // Click toggle
    await user.click(ddbbButton);
    expect(ddbbContainer).toHaveClass('is-open');
  });

  it('renders the courses and certifications carousels', () => {
    render(<Skills />);
    expect(screen.getByRole('heading', { name: /courses \(finished\)/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /certifications/i })).toBeInTheDocument();
  });
});
