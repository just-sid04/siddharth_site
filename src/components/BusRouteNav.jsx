import { useEffect, useState } from 'react';

const STOPS = [
  { id: 'hero', label: 'Start' },
  { id: 'about', label: 'Stop 1' },
  { id: 'skills', label: 'Stop 2' },
  { id: 'projects', label: 'Stop 3' },
  { id: 'experience', label: 'Stop 4' },
  { id: 'contact', label: 'Final Stop' },
];

export default function BusRouteNav({ activeSection }) {
  const activeIndex = STOPS.findIndex(s => s.id === activeSection);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="bus-route hidden md:flex">
      {STOPS.map((stop, i) => (
        <div key={stop.id} className="flex flex-col items-center">
          <div className="relative group">
            <div
              className={`stop-dot ${activeSection === stop.id ? 'active' : i < activeIndex ? 'visited' : ''}`}
              onClick={() => scrollTo(stop.id)}
              title={stop.label}
            />
            {/* Tooltip */}
            <div className="absolute right-5 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
              <div className="glass-card px-3 py-1.5 text-xs font-medium text-white whitespace-nowrap" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
                {stop.label}
              </div>
            </div>
          </div>
          {i < STOPS.length - 1 && (
            <div
              className="stop-line"
              style={{
                background: i < activeIndex
                  ? 'linear-gradient(to bottom, #9b59f5, rgba(155, 89, 245, 0.3))'
                  : 'linear-gradient(to bottom, rgba(79, 142, 247, 0.4), rgba(79, 142, 247, 0.1))'
              }}
            />
          )}
        </div>
      ))}

      {/* Bus icon */}
      <div
        className="mt-4 text-lg transition-all duration-500"
        style={{
          transform: `translateY(${activeIndex * -52}px)`,
          position: 'absolute',
          left: '-18px',
          bottom: `${(STOPS.length - 1 - activeIndex) * 52}px`,
        }}
      >
        🚌
      </div>
    </div>
  );
}
