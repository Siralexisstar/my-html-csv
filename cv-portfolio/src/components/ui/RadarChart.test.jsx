import React from 'react';
import { render, screen } from '@testing-library/react';
import { RadarChart } from './RadarChart';
import { describe, it, expect } from 'vitest';

describe('RadarChart Component', () => {
  const mockData = [
    { label: 'Skill 1', value: 50 },
    { label: 'Skill 2', value: 80 },
    { label: 'Skill 3', value: 100 },
  ];

  it('renders correctly with given data labels', () => {
    const { container } = render(<RadarChart data={mockData} size={300} />);
    const labels = Array.from(container.querySelectorAll('text')).map(t => t.textContent.toLowerCase());
    
    mockData.forEach(d => {
      expect(labels).toContain(d.label.toLowerCase());
    });
  });

  it('renders the SVG elements', () => {
    const { container } = render(<RadarChart data={mockData} size={300} />);
    const svg = container.querySelector('svg');
    expect(svg).toBeInTheDocument();
    expect(svg).toHaveAttribute('width', '300');
    expect(svg).toHaveAttribute('height', '300');
  });

  it('renders data points (circles) for each entry', () => {
    const { container } = render(<RadarChart data={mockData} size={300} />);
    const circles = container.querySelectorAll('circle');
    expect(circles.length).toBe(mockData.length);
  });
});
