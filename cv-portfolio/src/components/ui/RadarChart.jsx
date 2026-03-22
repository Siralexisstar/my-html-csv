import React, { useEffect, useState } from 'react';

export const RadarChart = ({ data, size = 300 }) => {
  const [animatedData, setAnimatedData] = useState(data.map(d => ({ ...d, value: 0 })));
  
  useEffect(() => {
    const timeout = setTimeout(() => {
      setAnimatedData(data);
    }, 100);
    return () => clearTimeout(timeout);
  }, [data]);

  const centerX = size / 2;
  const centerY = size / 2;
  const radius = (size / 2) * 0.7;
  const numAxes = data.length;

  // Calculate coordinates for a point
  const getCoordinates = (index, value, max = 100) => {
    const angle = (Math.PI * 2 * index) / numAxes - Math.PI / 2;
    const r = (radius * value) / max;
    return {
      x: centerX + r * Math.cos(angle),
      y: centerY + r * Math.sin(angle),
    };
  };

  // Grid levels (e.g., 25%, 50%, 75%, 100%)
  const gridLevels = [0.25, 0.5, 0.75, 1];
  const gridPoints = gridLevels.map(level => {
    return data.map((_, i) => {
      const p = getCoordinates(i, level * 100);
      return `${p.x},${p.y}`;
    }).join(' ');
  });

  // Data polygon points
  const dataPoints = animatedData.map((d, i) => {
    const p = getCoordinates(i, d.value);
    return `${p.x},${p.y}`;
  }).join(' ');

  return (
    <div className="radar-chart" style={{ width: size, height: size, margin: '0 auto' }}>
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
        {/* Grid Circles/Polygons */}
        {gridPoints.map((points, i) => (
          <polygon
            key={i}
            points={points}
            fill="none"
            stroke="rgba(255, 255, 255, 0.1)"
            strokeWidth="1"
          />
        ))}

        {/* Axis Lines */}
        {data.map((_, i) => {
          const p = getCoordinates(i, 100);
          return (
            <line
              key={i}
              x1={centerX}
              y1={centerY}
              x2={p.x}
              y2={p.y}
              stroke="rgba(255, 255, 255, 0.1)"
              strokeWidth="1"
            />
          );
        })}

        {/* Data Polygon */}
        <polygon
          points={dataPoints}
          fill="rgba(255, 0, 60, 0.2)"
          stroke="var(--color-primary)"
          strokeWidth="2"
          style={{ transition: 'all 1.5s ease-out' }}
        />

        {/* Data Points */}
        {animatedData.map((d, i) => {
          const p = getCoordinates(i, d.value);
          return (
            <circle
              key={i}
              cx={p.x}
              cy={p.y}
              r="4"
              fill="var(--color-primary)"
              style={{ transition: 'all 1.5s ease-out' }}
            >
              <title>{`${d.label}: ${d.value}%`}</title>
            </circle>
          );
        })}

        {/* Labels */}
        {data.map((d, i) => {
          const p = getCoordinates(i, 115); // Place label slightly outside
          return (
            <text
              key={i}
              x={p.x}
              y={p.y}
              textAnchor="middle"
              dominantBaseline="middle"
              fill="var(--color-text-muted)"
              fontSize="12"
              fontFamily="var(--font-mono)"
              style={{ textTransform: 'uppercase', letterSpacing: '1px' }}
            >
              {d.label}
            </text>
          );
        })}
      </svg>
    </div>
  );
};
