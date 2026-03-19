import React from 'react';
import { render, screen } from '@testing-library/react';
import { Contact } from './Contact';
import { describe, it, expect } from 'vitest';

describe('Contact Component', () => {
  it('renders the contact links with correct URLs', () => {
    render(<Contact />);
    
    const emailLink = screen.getByRole('link', { name: /say hello/i });
    expect(emailLink).toHaveAttribute('href', 'mailto:alexgarciavillar96@gmail.com');
    
    const githubLink = screen.getByRole('link', { name: /github/i });
    expect(githubLink).toHaveAttribute('href', 'https://github.com/Siralexisstar');
  });
});
