import React, { useEffect, useState } from 'react';

interface GlitchTextProps {
  text: string;
  className?: string;
  glitchInterval?: number;
}

const GlitchText: React.FC<GlitchTextProps> = ({ 
  text, 
  className = '',
  glitchInterval = 5000
}) => {
  const [glitching, setGlitching] = useState(false);

  useEffect(() => {
    // Initial glitch
    setTimeout(() => {
      triggerGlitch();
    }, 1000);

    // Set up interval for recurring glitches
    const interval = setInterval(() => {
      triggerGlitch();
    }, glitchInterval);

    return () => clearInterval(interval);
  }, [glitchInterval]);

  const triggerGlitch = () => {
    setGlitching(true);
    setTimeout(() => {
      setGlitching(false);
    }, 500);
  };

  return (
    <div className={`relative ${className}`}>
      <div 
        className={`transition-all duration-100 ${
          glitching ? 'glitch' : ''
        }`}
      >
        {text}
      </div>

      {/* Glitch layers */}
      {glitching && (
        <>
          <div className="absolute top-0 left-0 w-full h-full text-green-400 opacity-70" style={{ 
            clipPath: 'polygon(0 30%, 100% 30%, 100% 50%, 0 50%)',
            transform: 'translate(-5px, 0)',
            zIndex: -1
          }}>
            {text}
          </div>
          <div className="absolute top-0 left-0 w-full h-full text-red-500 opacity-70" style={{ 
            clipPath: 'polygon(0 65%, 100% 65%, 100% 80%, 0 80%)',
            transform: 'translate(5px, 0)',
            zIndex: -1
          }}>
            {text}
          </div>
        </>
      )}
    </div>
  );
};

export default GlitchText;