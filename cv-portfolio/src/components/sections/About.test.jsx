import React from 'react';
import { render, screen } from '@testing-library/react';
import { About } from './About';
import { describe, it, expect } from 'vitest';

describe('About Component', () => {
  it('renders the main about me heading', () => {
    render(<About />);
    expect(screen.getByRole('heading', { name: /about me/i })).toBeInTheDocument();
  });

  it('displays the biography and interest headings', () => {
    render(<About />);
    expect(screen.getByRole('heading', { name: /biography/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /lifestyle & interests/i })).toBeInTheDocument();
  });

  it('renders the gallery with 4 images', () => {
    render(<About />);
    const images = screen.getAllByRole('img');
    // 4 images in the gallery
    expect(images.length).toBe(4);
    
    expect(screen.getByAltText(/crossfit training/i)).toBeInTheDocument();
    expect(screen.getByAltText(/crossfit competition/i)).toBeInTheDocument();
    expect(screen.getByAltText(/my dog/i)).toBeInTheDocument();
    expect(screen.getByAltText(/outdoors and nature/i)).toBeInTheDocument();
  });
});
