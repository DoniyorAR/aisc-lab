
import { useEffect, useRef } from 'react';

const ParticlesBackground = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const createParticle = () => {
      if (!containerRef.current) return;

      const particle = document.createElement('div');
      particle.className = 'particle';
      
      // Random size between 2px and 6px
      const size = Math.random() * 4 + 2;
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      
      // Random position
      particle.style.left = `${Math.random() * 100}%`;
      particle.style.top = `${Math.random() * 100}%`;
      
      // Random animation duration
      particle.style.animationDuration = `${Math.random() * 4 + 4}s`;
      particle.style.animationDelay = `${Math.random() * 2}s`;
      
      containerRef.current.appendChild(particle);
      
      // Remove particle after animation
      setTimeout(() => {
        if (particle.parentNode) {
          particle.parentNode.removeChild(particle);
        }
      }, 8000);
    };

    // Create initial particles
    for (let i = 0; i < 20; i++) {
      setTimeout(createParticle, i * 200);
    }

    // Continue creating particles
    const interval = setInterval(createParticle, 1000);

    return () => clearInterval(interval);
  }, []);

  return <div ref={containerRef} className="particles" />;
};

export default ParticlesBackground;
