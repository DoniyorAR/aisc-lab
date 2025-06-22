
import { useEffect, useRef, useState } from 'react';

const PortfolioSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
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

  const projects = [
    {
      title: 'Smart Manufacturing AI',
      category: 'Computer Vision',
      description: 'AI-powered quality control system that reduced defects by 85% and increased production efficiency.',
      image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      technologies: ['TensorFlow', 'OpenCV', 'Python', 'Edge Computing'],
      metrics: ['85% defect reduction', '40% faster inspection', '$2M annual savings']
    },
    {
      title: 'Healthcare Diagnosis Platform',
      category: 'Machine Learning',
      description: 'Deep learning system for medical image analysis with 95% accuracy in early disease detection.',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      technologies: ['PyTorch', 'Medical Imaging', 'Cloud Computing', 'HIPAA Compliance'],
      metrics: ['95% accuracy', '10x faster diagnosis', '1M+ patients helped']
    },
    {
      title: 'Financial Fraud Detection',
      category: 'Data Science',
      description: 'Real-time fraud detection system processing millions of transactions with 99.9% accuracy.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      technologies: ['Apache Spark', 'Kafka', 'Machine Learning', 'Real-time Analytics'],
      metrics: ['99.9% accuracy', '50% fraud reduction', '<100ms response time']
    },
    {
      title: 'Autonomous Logistics',
      category: 'AI Automation',
      description: 'Intelligent supply chain optimization reducing costs and improving delivery times.',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      technologies: ['Reinforcement Learning', 'IoT Integration', 'Route Optimization', 'Predictive Analytics'],
      metrics: ['30% cost reduction', '25% faster delivery', '500+ routes optimized']
    },
    {
      title: 'Customer Service AI',
      category: 'Natural Language Processing',
      description: 'Intelligent chatbot handling 80% of customer queries with human-like conversation.',
      image: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      technologies: ['NLP', 'Transformers', 'Conversational AI', 'Multi-language Support'],
      metrics: ['80% query resolution', '24/7 availability', '90% satisfaction rate']
    },
    {
      title: 'Predictive Maintenance',
      category: 'IoT & AI',
      description: 'IoT-enabled predictive maintenance system preventing equipment failures before they occur.',
      image: 'https://images.unsplash.com/photo-1473091534298-04dcbce3278c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      technologies: ['IoT Sensors', 'Time Series Analysis', 'Anomaly Detection', 'Cloud Infrastructure'],
      metrics: ['70% downtime reduction', '$5M in prevented failures', '99.5% uptime achieved']
    }
  ];

  return (
    <section id="portfolio" ref={sectionRef} className="py-20">
      <div className="container mx-auto px-6">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
          <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
            Explore our successful AI implementations that have transformed businesses across various industries.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className={`glass-card overflow-hidden hover:scale-105 transition-all duration-500 cursor-pointer group ${
                isVisible ? 'animate-fade-in' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 150}ms` }}
              onClick={() => setSelectedProject(selectedProject === index ? null : index)}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 bg-ai-blue/80 text-white text-xs rounded-full">
                    {project.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 gradient-text">{project.title}</h3>
                <p className="text-foreground/70 mb-4 leading-relaxed">{project.description}</p>
                
                {selectedProject === index && (
                  <div className="animate-fade-in space-y-4">
                    <div>
                      <h4 className="font-semibold text-ai-blue mb-2">Technologies Used:</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, techIndex) => (
                          <span 
                            key={techIndex}
                            className="px-2 py-1 bg-accent text-xs rounded"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-ai-purple mb-2">Key Results:</h4>
                      <ul className="space-y-1">
                        {project.metrics.map((metric, metricIndex) => (
                          <li key={metricIndex} className="text-sm text-foreground/70 flex items-center">
                            <div className="w-2 h-2 bg-ai-orange rounded-full mr-2"></div>
                            {metric}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
                
                <div className="mt-4 text-ai-blue font-semibold group-hover:text-ai-purple transition-colors">
                  {selectedProject === index ? 'Click to collapse' : 'Click to expand'} →
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
