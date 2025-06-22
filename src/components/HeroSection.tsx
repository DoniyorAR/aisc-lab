
import { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import ParticlesBackground from './ParticlesBackground';

const HeroSection = () => {
  const [displayText, setDisplayText] = useState('');
  const fullText = 'Artificial Intelligence Solutions';
  
  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index < fullText.length) {
        setDisplayText(fullText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 100);

    return () => clearInterval(timer);
  }, []);

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <ParticlesBackground />
      
      <div className="container mx-auto px-6 text-center z-10">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6">
            <span className="gradient-text">AI & Smart City Lab</span>
          </h1>
          
          {/* <div className="text-xl md:text-2xl lg:text-3xl mb-8 h-12 flex items-center justify-center">
            <span className="text-foreground/80">
              {displayText}
              <span className="animate-pulse">|</span>
            </span>
          </div> */}
          <div className="text-xl md:text-2xl lg:text-3xl mb-8 flex flex-col items-center justify-center">
            <span className="text-foreground/80 flex items-center justify-center">
              {displayText}
              <span className="animate-pulse">|</span>
            </span>
            <img
              src="/main.png"
              alt="Lab Logo"
              className="mt-5 max-w-xs md:max-w-md lg:max-w-lg w-full h-auto object-contain mx-auto"
              draggable={false}
            />
          </div>


          <p className="text-lg md:text-xl text-foreground/60 max-w-3xl mx-auto mb-12 leading-relaxed">
            AI & Smart City Lab at Gachon University, led by Professor Young Im Cho, Our research focuses on advancing artificial intelligence and its applications using Multi-modal and Multi-task AI, AI inference, Validation systems. 
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button 
              onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 bg-gradient-to-r from-ai-blue to-ai-purple text-white font-semibold rounded-lg hover:scale-105 transition-all duration-300 animate-glow"
            >
              Projects
            </button>
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 border border-ai-blue text-ai-blue font-semibold rounded-lg hover:bg-ai-blue hover:text-white transition-all duration-300"
            >
              Contact with us
            </button>
          </div>
        </div>
      </div>
      
      <button 
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-ai-blue animate-bounce"
      >
        <ChevronDown size={32} />
      </button>
    </section>
  );
};

export default HeroSection;
