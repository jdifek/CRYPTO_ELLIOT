import React from 'react';
import { LanguageOption } from '../types';

interface LanguageToggleProps {
  options: LanguageOption[];
  currentLanguage: string;
  onLanguageChange: (id: string) => void;
}

const LanguageToggle: React.FC<LanguageToggleProps> = ({
  options,
  currentLanguage,
  onLanguageChange,
}) => {
  return (
    <div className="fixed top-5 right-5 z-50">
      <div className="bg-black/40 backdrop-blur-sm border border-green-500/30 rounded-full px-1 py-1 flex">
        {options.map((option) => (
          <button
            key={option.id}
            onClick={() => onLanguageChange(option.id)}
            className={`px-3 py-1 rounded-full text-sm font-mono transition-colors duration-300 ${
              currentLanguage === option.id
                ? 'bg-green-500 text-black'
                : 'text-green-500 hover:bg-green-500/20'
            }`}
          >
            {option.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default LanguageToggle;