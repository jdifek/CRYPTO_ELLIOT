import React, { useEffect, useState } from 'react';

const CursorEffect: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener('mousemove', updatePosition);
    window.addEventListener('mouseout', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', updatePosition);
      window.removeEventListener('mouseout', handleMouseLeave);
    };
  }, []);

  return (
    <>
      <div 
        className={`hidden md:block fixed pointer-events-none z-50 rounded-full mix-blend-exclusion transition-opacity duration-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          width: '30px',
          height: '30px',
          backgroundColor: 'rgba(0, 255, 0, 0.5)',
          transform: 'translate(-50%, -50%)',
          boxShadow: '0 0 20px 5px rgba(0, 255, 0, 0.3)',
        }}
      />
      <div 
        className={`hidden md:block fixed pointer-events-none z-50 mix-blend-exclusion transition-opacity duration-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          width: '5px',
          height: '5px',
          backgroundColor: 'rgb(0, 255, 0)',
          transform: 'translate(-50%, -50%)',
        }}
      />
    </>
  );
};

export default CursorEffect;