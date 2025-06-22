
import { useEffect, useRef, useState } from 'react';

const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const milestones = [
    { year: '2019', title: 'Company Founded', description: 'Started with a vision to democratize AI technology' },
    { year: '2020', title: 'First AI Platform', description: 'Launched our flagship machine learning platform' },
    { year: '2021', title: 'Scale & Growth', description: 'Expanded to serve Fortune 500 companies' },
    { year: '2022', title: 'AI Innovation', description: 'Pioneered breakthrough in neural network optimization' },
    { year: '2023', title: 'Global Expansion', description: 'Established offices in 12 countries worldwide' },
    { year: '2024', title: 'Future Forward', description: 'Leading the next generation of AI solutions' }
  ];

  return (
    <section id="about" ref={sectionRef} className="py-20 bg-gradient-to-br from-background to-accent/5">
      <div className="container mx-auto px-6">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="gradient-text">AI & Smart City Lab</span>
          </h2>
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
            
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'animate-slide-in' : 'opacity-0 -translate-x-10'}`}>
            <div className="glass-card p-8">
              <h3 className="text-2xl font-bold mb-4 gradient-text">Our Research</h3>
              <p className="text-foreground/80 leading-relaxed mb-6">
                Under the guidance of Professor Young Im Cho, our lab has published over 300 high-quality research articles in leading scientific journals. Our work spans a wide range of AI-driven applications, including wildfire detection, advanced medical diagnostics, and intelligent image processing. We are dedicated to pushing the boundaries of artificial intelligence to solve real-world challenges and improve lives.
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-ai-blue/10 rounded-lg">
                  <div className="text-3xl font-bold text-ai-blue">300+</div>
                  <div className="text-sm text-foreground/60">Research Articles</div>
                </div>
                <div className="text-center p-4 bg-ai-purple/10 rounded-lg">
                  <div className="text-3xl font-bold text-ai-purple">10+</div>
                  <div className="text-sm text-foreground/60">Researchers and Software Team</div>
                </div>
              </div>
            </div>
          </div>

          <div className={`transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            <img 
              src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="AI Technology Showcase"
              className="rounded-lg shadow-2xl hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>

        {/* Timeline */}
        {/* <div className={`transition-all duration-1000 delay-700 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          <h3 className="text-3xl font-bold text-center mb-12 gradient-text">Our Journey</h3>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-ai-blue to-ai-purple"></div>
            
            {milestones.map((milestone, index) => (
              <div key={index} className="relative flex items-center mb-8">
                <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 order-2'}`}>
                  <div className="glass-card p-6 hover:scale-105 transition-transform duration-300">
                    <div className="text-ai-blue font-bold text-lg">{milestone.year}</div>
                    <h4 className="font-semibold mb-2">{milestone.title}</h4>
                    <p className="text-foreground/70 text-sm">{milestone.description}</p>
                  </div>
                </div>
                
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-ai-blue rounded-full border-4 border-background z-10"></div>
              </div>
            ))}
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default AboutSection;
