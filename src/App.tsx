import React, { useState } from 'react';
import { languageOptions, content } from './data/content';
import LanguageToggle from './components/LanguageToggle';
import HeroSection from './components/HeroSection';
import FeatureSection from './components/FeatureSection';
import Footer from './components/Footer';
import CursorEffect from './components/CursorEffect';
import MatrixBackground from './components/MatrixBackground';

function App() {
  const [language, setLanguage] = useState('en');

  const handleLanguageChange = (id: string) => {
    setLanguage(id);
  };

  return (
    <div className="font-mono text-white">
      {/* Custom cursor effect */}
      <CursorEffect />
      
      {/* Matrix-like background */}
      <MatrixBackground />
      
      {/* Language toggle */}
      <LanguageToggle 
        options={languageOptions}
        currentLanguage={language}
        onLanguageChange={handleLanguageChange}
      />
      
      {/* Main content */}
      <main>
        <HeroSection content={content[language]} />
        <FeatureSection content={content[language]} />
      </main>
      
      <Footer />
    </div>
  );
}

export default App;