import React from 'react';
import { Content } from '../types';
import { Terminal, Fingerprint, Users } from 'lucide-react';

interface FeatureSectionProps {
  content: Content;
}

const FeatureSection: React.FC<FeatureSectionProps> = ({ content }) => {
  const icons = [
    <Terminal className="w-12 h-12 text-green-500" />,
    <Fingerprint className="w-12 h-12 text-green-500" />,
    <Users className="w-12 h-12 text-green-500" />
  ];

  return (
    <div className="bg-[#0a0a0a] py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-center text-3xl md:text-4xl font-bold font-mono text-white mb-16 tracking-widest">
          {content.featuresTitle}
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {content.features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-black/50 border border-green-500/20 p-6 rounded-lg hover:border-green-500/50 transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="flex justify-center mb-4">
                {icons[index]}
              </div>
              <h3 className="text-center text-xl font-mono text-green-500 mb-4 tracking-wider">
                {feature.title}
              </h3>
              <p className="text-center text-gray-400 font-mono">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeatureSection;