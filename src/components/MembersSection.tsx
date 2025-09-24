
import { useEffect, useRef, useState } from 'react';
import { Linkedin, Twitter, Github } from 'lucide-react';

const MembersSection = () => {
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

  const members = [
    {
      name: 'Professor,Cho Young-Im',
      role: 'Chief of the Lab',
      expertise: 'Gachon University Professor, HoD of ISO/IEC JTC 1/SC 42,  Convenor of ISO/IEC JTC 1/SC 43 WG 5 ',
      image: '/prof.jpg',
      bio: 'Standards Subcommittee for the AI New Industry Committee under the Ministry of Trade.',
      social: {
        linkedin: '#',
        twitter: '#',
        github: '#'
      }
    },
    {
      name: 'Mr Oh Kang-Hwan',
      role: 'Project Manager',
      expertise: 'Artificial Intelegence & Software development',
      image: '/mr_oh.png',
      bio: ' Project Planning Leader',
      social: {
        linkedin: '#',
        twitter: '#',
        github: '#'
      }
    },
    {
      name: 'Dr. Muksimova Shakhnoza',
      role: 'Assistant Professor',
      expertise: 'Artificial Intelegence, Medical AI',
      image: '/shaxnoza.jpg',
      bio: 'Expert in real-time AI for medical imaging, fire detection, and drone applications. Specializes in lightweight models and multi-modal learning for efficient deployment.',
      social: {
        linkedin: '#',
        twitter: '#',
        github: '#'
      }
    },
    {
      name: 'Mukhtorov Doni',
      role: 'Ph.D Researcher',
      expertise: 'AI researcher, Software Engineer, ISO/IEC JTC 1/SC 43/ WG5 Project Editor',
      image: '/doni.jpg',
      bio: 'Expert in scaling AI systems',
      social: {
        linkedin: '#',
        twitter: '#',
        github: '#'
      }
    },

    {
      name: 'Misheel Galbadrakh',
      role: 'Masters, Researcher',
      expertise: 'Artificial Intelegence, Computer Vision',
      image: '/michael.jpg',
      bio: 'Master’s student specializing in Artificial Intelligence research, focusing on computer vision, machine learning, and data labeling etc',
      social: {
        linkedin: '#',
        twitter: '#',
        github: '#'
      }
    },
    {
      name: ' Saydirasulov Norkobil',
      role: 'Post Doc',
      expertise: 'Artificial Intelegence',
      image: '/norqobilaka.jpg',
      bio: 'Ensuring AI systems are fair, transparent, and beneficial for society.',
      social: {
        linkedin: '#',
        twitter: '#',
        github: '#'
      }
    },
  
       {
      name: 'Man Qia Yue',
      role: 'Assistant Professor',
      expertise: 'MLOps & Infrastructure',
      image: '/gachon_logo.jpg',
      bio: 'Expert in scaling AI systems and building robust ML infrastructure.',
      social: {
        linkedin: '#',
        twitter: '#',
        github: '#'
      }
    },

     {
      name: 'Bolikulov Furqat',
      role: 'Ph.D Researcher',
      expertise: 'AI, Fire detection, 3D image contruction, tree health detection',
      image: '/gachon_logo.jpg',
      bio: 'Researcher.',
      social: {
        linkedin: '#',
        twitter: '#',
        github: '#'
      }
    },
     {
      name: 'Khasanov Asliddin',
      role: 'Master Reseacher',
      expertise: 'AI, Fire detection, 3D image contruction, tree health detection',
      image: '/asliddin.jpg',
      bio: 'Researcher.',
      social: {
        linkedin: '#',
        twitter: '#',
        github: '#'
      }
    },
  ];

  return (
    <section id="members" ref={sectionRef} className="py-20 bg-gradient-to-br from-accent/5 to-background">
      <div className="container mx-auto px-6">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Lab <span className="gradient-text"> Members</span>
          </h2>
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
          
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {members.map((member, index) => (
            <div 
              key={index}
              className={`glass-card p-6 hover:scale-105 transition-all duration-500 group ${
                isVisible ? 'animate-fade-in' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="text-center">
                <div className="relative mb-6">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-32 h-32 rounded-full mx-auto object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ai-blue/20 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                
                <h3 className="text-xl font-bold gradient-text mb-2">{member.name}</h3>
                <p className="text-ai-blue font-semibold mb-2">{member.role}</p>
                <p className="text-sm text-foreground/60 mb-4">{member.expertise}</p>
                <p className="text-foreground/70 text-sm leading-relaxed mb-6">{member.bio}</p>
                
                <div className="flex justify-center gap-3">
                  <a 
                    href={member.social.linkedin} 
                    className="p-2 bg-accent/20 rounded-full hover:bg-ai-blue hover:text-white transition-all duration-300"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                  <a 
                    href={member.social.twitter} 
                    className="p-2 bg-accent/20 rounded-full hover:bg-ai-blue hover:text-white transition-all duration-300"
                  >
                    <Twitter className="w-4 h-4" />
                  </a>
                  <a 
                    href={member.social.github} 
                    className="p-2 bg-accent/20 rounded-full hover:bg-ai-blue hover:text-white transition-all duration-300"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MembersSection;
