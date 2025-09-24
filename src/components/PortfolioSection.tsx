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
      title: 'ISO/IEC JTC1 SC43 Plenary Meeting, INDIA',
      category: 'Brain Computer Interface',
      description:
        'Professor Cho Young Im, Convenor of WG5, BCI data, and Project Editor Doni participated in the Plenary Meeting in India.',
      image: '/india.jpg',
      details: [
        'Discussion on Brain-Computer Interface data standardization',
        'Presentation of progress on ISO/IEC 27571 project',
        'Collaboration with international experts from multiple NBs',
        'Future roadmap for SC43/WG5 projects and working items',
      ],
    },
    {
      title: 'Pyeongtaek City AI Project',
      category: 'Artificial Intelegence',
      description:
        'A comprehensive Smart City AI initiative in Pyeongtaek, integrating deep learning, IoT, and environmental data for carbon neutrality, underground risk prediction, and citizen engagement.',
      image:
        '/pye.jpg',
      details: [
      'G3: Tree Growth & Carbon-Neutral Platform using LiDAR-based tree measurement and citizen mobile participation',
      'G6: Carbon-Neutral Dashboard for city-wide CO₂ and green-zone management',
      'G7: Underground Risk Prediction Service using IoT sensors and AI to detect soil movement and flooding risks',
      'Integration of AI validation and modeling services for environmental datasets',
      'Partnership with Pyeongtaek City, KOMSA, KOMERI, KETI, and Gachon University',
      'Supports sustainable urban planning and climate resilience goals',
    ],
    },
    {
      title: 'Lab Meeting on Tree Growth Rate Project',
      category: 'Meeting',
      description:
        'Internal lab meeting discussing AI-driven methods for estimating tree growth rates using LiDAR data, deep learning models, and field measurements',
      image:
        '/lab1.jpg',
      details: [
      'Review of LiDAR and drone-based tree scanning methodologies',
      'Discussion on DBH (Diameter at Breast Height) and tree height measurement accuracy',
      'Evaluation of PointNet++ and deep learning models for growth rate estimation',
      'Planning for integration of field survey data with AI models',
      'Assignment of tasks for dataset preparation, preprocessing, and model training',
    ],
    },
    {
      title: 'Lightweight AI Meeting',
      category: 'Collaboration with Forign Researcher',
      description:
        'Research meeting focused on lightweight AI models for Brain-Computer Interface (BCI) and Smart City applications, with participation from visiting researchers from Kazakhstan.',
      image:
        '/comp.jpg',
      details: [
      'Two researchers from Kazakhstan joined as visiting interns for joint research',
      'Discussion on lightweight AI model architectures and optimization techniques',
      'Exploration of BCI data processing with reduced computational cost',
      'Plans for integration into Smart City projects and international collaboration',
    ],
    },
    {
      title: 'Dinner with Professor',
      category: 'Lab Members',
      description:
        'A lab gathering and dinner with Professor Cho Young Im, strengthening relationships among lab members and celebrating ongoing research achievements',
      image:
        '/team.jpg',
      details: [
      'Team dinner with Professor Cho Young Im and lab members',
      'Celebration of recent project milestones and publications',
      'Strengthened relationships and collaboration spirit within the lab',
      'Shared future goals for AI and Smart City research',
    ],
    },
    {
      title: 'Poland, Biometrics',
      category: 'Summer School',
      description:
        'Professor Cho and Doni participated in the Summer School and Biometrics Conference held in Poland, engaging with international researchers on biometric technologies and AI applications.',
      image:
        '/poland.png',
      details: [
        'Participation in Poland Summer School focused on Biometrics and AI',
        'Presentation of lab research on Brain-Computer Interface and lightweight AI',
        'Collaboration with international researchers and students',
        'Exploration of biometric applications in healthcare and security',
      ],
    },
  ];

  return (
    <section id="portfolio" ref={sectionRef} className="py-20">
      <div className="container mx-auto px-6">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? 'animate-fade-in' : 'opacity-0'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Activities</span>
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
              onClick={() =>
                setSelectedProject(selectedProject === index ? null : index)
              }
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
                <h3 className="text-xl font-bold mb-3 gradient-text">
                  {project.title}
                </h3>
                <p className="text-foreground/70 mb-4 leading-relaxed">
                  {project.description}
                </p>

                {selectedProject === index && (
                  <div className="animate-fade-in space-y-4">
                    <div>
                      <h4 className="font-semibold text-ai-blue mb-2">
                        Details:
                      </h4>
                      <ul className="space-y-1">
                        {project.details.map((d, i) => (
                          <li
                            key={i}
                            className="text-sm text-foreground/70 flex items-center"
                          >
                            <div className="w-2 h-2 bg-ai-orange rounded-full mr-2"></div>
                            {d}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}

                <div className="mt-4 text-ai-blue font-semibold group-hover:text-ai-purple transition-colors">
                  {selectedProject === index
                    ? 'Click to collapse'
                    : 'Click to expand'}{' '}
                  →
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
