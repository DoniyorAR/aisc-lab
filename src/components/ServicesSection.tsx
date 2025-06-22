
import { useEffect, useRef, useState } from 'react';

const ServicesSection = () => {
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

  const services = [
    {
      title: 'Machine Learning',
      description: 'Custom ML models that learn from your data to predict, classify, and optimize business outcomes.',
      icon: '🧠',
      features: ['Predictive Analytics', 'Pattern Recognition', 'Data Mining', 'Model Optimization']
    },
    {
      title: 'Computer Vision',
      description: 'Visual AI systems for image recognition, object detection, and automated quality control.',
      icon: '👁️',
      features: ['Image Classification', 'Object Detection', 'Facial Recognition', 'Quality Inspection']
    },
    {
      title: 'AI Inference',
      description: 'Deploy and accelerate AI models for real-time and batch predictions across a variety of domains.',
      icon: '🚀',
      features: ['Model Serving', 'Edge Deployment', 'Low-latency Inference', 'Scalability']
    },
    {
      title: 'AI Standardization',
      description: 'Develop and implement standards for reliable, interoperable, and trustworthy AI systems.',
      icon: '📏',
      features: ['Compliance', 'Interoperability', 'AI Evaluation', 'Best Practices']
    },
    {
      title: 'Multi-modal AI',
      description: 'Integrate and analyze data from multiple sources including text, images, and sensor streams.',
      icon: '🧠',
      features: ['Vision & Language', 'Cross-modal Learning', 'Sensor Fusion', 'Unified Models']
    },
    {
      title: 'Data Fusion',
      description: 'Combine information from diverse datasets to enhance accuracy and uncover new insights.',
      icon: '🔗',
      features: ['Data Integration', 'Multi-source Analytics', 'Signal Processing', 'Knowledge Graphs']
    }
  ];

  return (
    <section id="services" ref={sectionRef} className="py-20 bg-accent/5">
      <div className="container mx-auto px-6">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our <span className="gradient-text">Research Area</span>
          </h2>
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
            AI research and solutions designed to advance smart city technologies and empower innovation in diverse fields.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className={`glass-card p-8 hover:scale-105 transition-all duration-500 group cursor-pointer ${
                isVisible ? 'animate-fade-in' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="text-4xl mb-4 group-hover:animate-float">{service.icon}</div>
              <h3 className="text-xl font-bold mb-4 gradient-text">{service.title}</h3>
              <p className="text-foreground/70 mb-6 leading-relaxed">{service.description}</p>
              
              <div className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <div 
                    key={featureIndex}
                    className="flex items-center text-sm text-foreground/60"
                  >
                    <div className="w-2 h-2 bg-ai-blue rounded-full mr-3"></div>
                    {feature}
                  </div>
                ))}
              </div>
              
              <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <button className="text-ai-blue font-semibold hover:text-ai-purple transition-colors">
                  Learn More →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
