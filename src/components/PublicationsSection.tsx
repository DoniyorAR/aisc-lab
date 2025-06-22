
import { useEffect, useRef, useState } from 'react';
import { ExternalLink, Calendar, User } from 'lucide-react';

const PublicationsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('all');
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

  const publications = [
  {
    title: 'CerviLearnNet: Advancing Cervical Cancer Diagnosis with Reinforcement Learning-Enhanced Convolutional Networks',
    authors: 'S. Muksimova, S. Umirzakova, S. Kang, Y. Im Cho',
    journal: 'Heliyon',
    year: '2024',
    category: 'medical-ai',
    abstract: 'This paper introduces CerviLearnNet, a novel reinforcement learning-enhanced convolutional neural network for cervical cancer diagnosis, demonstrating improved accuracy in challenging clinical scenarios.',
    link: 'https://www.cell.com/heliyon/fulltext/S2405-8440(24)01151-1', // Example link, replace with actual if different
    type: 'Journal Article'
  },
  {
    title: 'Fire and Smoke Detection in Complex Environments',
    authors: 'F. Safarov, S. Muksimova, M. Kamoliddin, Y. I. Cho',
    journal: 'Fire',
    year: '2024',
    category: 'environment',
    abstract: 'We present a real-time fire and smoke detection approach for complex and large-scale environments, surpassing traditional monitoring systems and supporting effective disaster prevention.',
    link: 'https://www.mdpi.com/2571-6255/7/6/276', // Example link
    type: 'Journal Article'
  },
  {
    title: 'Optimizing Fire Scene Analysis: Hybrid Convolutional Neural Network Model Leveraging Multiscale Feature and Attention Mechanisms',
    authors: 'S. Muksimova, S. Umirzakova, M. Abdullaev, Y. I. Cho',
    journal: 'Fire',
    year: '2024',
    category: 'environment',
    abstract: 'This study proposes a hybrid CNN model utilizing multiscale feature extraction and attention mechanisms to enhance fire scene classification and analysis for disaster management.',
    link: 'https://www.mdpi.com/2571-6255/7/6/285', // Example link
    type: 'Journal Article'
  },
  {
    title: 'A Multi-Scale Approach to Early Fire Detection in Smart Homes',
    authors: 'F. Safarov, S. Mirzakhalilov, N. Egamberdiev, Y. I. Cho',
    journal: 'Electronics',
    year: '2024',
    category: 'smart-home',
    abstract: 'This paper introduces a multi-scale deep learning-based method for early fire detection in smart home environments, enhancing safety and response times.',
    link: 'https://www.mdpi.com/2079-9292/13/2/321', // Example link
    type: 'Journal Article'
  },
  {
    title: 'Integrating Principal Component Analysis and Multi-Input Convolutional Neural Networks for Advanced Skin Lesion Cancer Classification',
    authors: 'R. Madinakhon, D. Mukhtorov, Y. I. Cho',
    journal: 'Applied Sciences',
    year: '2024',
    category: 'medical-ai',
    abstract: 'A novel approach combining principal component analysis and multi-input CNNs for enhanced accuracy in skin lesion cancer classification, highlighting the importance of early detection.',
    link: 'https://www.mdpi.com/2076-3417/14/3/1832', // Example link
    type: 'Journal Article'
  },
  {
    title: 'RL-Cervix.Net: A Hybrid Lightweight Model Integrating Reinforcement Learning for Cervical Cell Classification',
    authors: 'S. Muksimova, S. Umirzakova, J. Baltayev, Y. I. Cho',
    journal: 'Diagnostics',
    year: '2025',
    category: 'medical-ai',
    abstract: 'RL-Cervix.Net presents a hybrid lightweight model that integrates reinforcement learning for efficient and accurate cervical cell classification in medical diagnostics.',
    link: 'https://www.mdpi.com/2075-4418/15/1/105', // Example link
    type: 'Journal Article'
  }
];

  const categories = [
    { id: 'all', label: 'All Publications' },
    { id: 'research', label: 'Research' },
    { id: 'ethics', label: 'AI Ethics' },
    { id: 'vision', label: 'Computer Vision' },
    { id: 'nlp', label: 'NLP' },
    { id: 'engineering', label: 'Engineering' }
  ];

  const filteredPublications = selectedCategory === 'all' 
    ? publications 
    : publications.filter(pub => pub.category === selectedCategory);

  return (
    <section id="publications" ref={sectionRef} className="py-20">
      <div className="container mx-auto px-6">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
          <span className="gradient-text">Publications</span>
          </h2>
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
            Discover our latest research and contributions to the AI community through peer-reviewed publications and thought leadership articles.
          </p>
        </div>

        {/* Category Filter */}
        <div className={`flex flex-wrap justify-center gap-3 mb-12 transition-all duration-1000 delay-300 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category.id
                  ? 'bg-gradient-to-r from-ai-blue to-ai-purple text-white'
                  : 'bg-accent/20 text-foreground/70 hover:bg-accent/40'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Publications Grid */}
        <div className="space-y-6">
          {filteredPublications.map((publication, index) => (
            <div 
              key={index}
              className={`glass-card p-6 hover:scale-[1.02] transition-all duration-500 group ${
                isVisible ? 'animate-fade-in' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="grid md:grid-cols-4 gap-6">
                <div className="md:col-span-3">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold gradient-text mb-2 group-hover:text-ai-purple transition-colors">
                        {publication.title}
                      </h3>
                      <div className="flex items-center gap-4 text-sm text-foreground/60 mb-3">
                        <div className="flex items-center gap-1">
                          <User className="w-4 h-4" />
                          <span>{publication.authors}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          <span>{publication.year}</span>
                        </div>
                      </div>
                    </div>
                    <span className="px-3 py-1 bg-ai-blue/10 text-ai-blue text-xs rounded-full whitespace-nowrap">
                      {publication.type}
                    </span>
                  </div>
                  
                  <p className="text-foreground/70 leading-relaxed mb-4">
                    {publication.abstract}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-medium text-ai-blue">
                      Published in: {publication.journal}
                    </p>
                    <a 
                      href={publication.link}
                      className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-ai-blue to-ai-purple text-white rounded-lg hover:scale-105 transition-all duration-300"
                    >
                      <span>Read More</span>
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PublicationsSection;
