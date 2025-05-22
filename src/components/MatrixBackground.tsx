import React, { useEffect, useRef } from 'react';

const MatrixBackground: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    
    const container = containerRef.current;
    const createColumn = () => {
      const column = document.createElement('div');
      column.classList.add('matrix-column');
      
      // Random position, speed and delay
      const left = Math.floor(Math.random() * window.innerWidth);
      const duration = Math.random() * 3 + 2; // 2-5 seconds
      const delay = Math.random() * 2; // 0-2 seconds delay
      
      column.style.left = `${left}px`;
      column.style.animationDuration = `${duration}s`;
      column.style.animationDelay = `${delay}s`;
      
      container.appendChild(column);
      
      // Remove after animation completes
      setTimeout(() => {
        if (column.parentNode === container) {
          container.removeChild(column);
        }
      }, (duration + delay) * 1000);
    };
    
    // Create initial columns
    for (let i = 0; i < 20; i++) {
      createColumn();
    }
    
    // Add new columns periodically
    const interval = setInterval(() => {
      if (container.childElementCount < 50) { // Limit total columns
        createColumn();
      }
    }, 300);
    
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="matrix-bg opacity-20" ref={containerRef}></div>
  );
};

export default MatrixBackground;