import React from 'react';
import GlitchText from './GlitchText';
import { Content } from '../types';

interface HeroSectionProps {
  content: Content;
}

const HeroSection: React.FC<HeroSectionProps> = ({ content }) => {
  return (
    <div className="relative h-screen w-full overflow-hidden flex flex-col items-center justify-center text-center px-4">
      {/* Background overlay with crypto symbols */}
      <div className="absolute inset-0 bg-[#0a0a0a] opacity-30 z-0"></div>
      
      {/* Animated background patterns */}
      <div className="absolute inset-0 opacity-10 z-0">
        <div className="absolute top-[10%] left-[15%] text-green-500 text-6xl opacity-30">₿</div>
        <div className="absolute top-[20%] right-[20%] text-green-500 text-6xl opacity-30">Ξ</div>
        <div className="absolute bottom-[25%] left-[25%] text-green-500 text-6xl opacity-30">⟠</div>
        <div className="absolute bottom-[15%] right-[15%] text-green-500 text-5xl opacity-30">₮</div>
        <div className="absolute top-[50%] left-[50%] text-green-500 text-4xl opacity-30">₱</div>
      </div>
      
      {/* Hero content */}
      <div className="relative z-10 max-w-4xl mx-auto">
        <div className="mb-3">
          <GlitchText 
            text={content.subtitle} 
            className="text-green-500 font-mono tracking-widest text-lg md:text-xl mb-1"
            glitchInterval={7000}
          />
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-mono text-white tracking-tight mb-2">
            {content.title}
          </h1>
        </div>

        <h2 className="font-mono text-xl md:text-2xl text-green-400 mb-6 max-w-2xl mx-auto">
          {content.heroText}
        </h2>
        
        <div className="mb-10 font-mono">
          <GlitchText 
            text={content.descriptionTitle} 
            className="text-green-500 text-lg md:text-xl font-bold mb-4"
            glitchInterval={10000}
          />
          <p className="text-gray-300 text-md md:text-lg max-w-2xl mx-auto leading-relaxed">
            {content.description}
          </p>
        </div>

        <button 
          className="group relative px-8 py-4 overflow-hidden bg-black border-2 border-green-500 text-green-500 rounded-md font-mono text-lg md:text-xl tracking-widest transition-all duration-300 hover:bg-green-500 hover:text-black transform hover:scale-105"
        >
          <span className="relative z-10">{content.ctaButton}</span>
          <span className="absolute inset-0 bg-green-500 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
        </button>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-green-500" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </div>
  );
};

export default HeroSection;