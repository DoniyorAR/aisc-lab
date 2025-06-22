
import Navigation from '../components/Navigation';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import ServicesSection from '../components/ServicesSection';
import PortfolioSection from '../components/PortfolioSection';
import MembersSection from '../components/MembersSection';
import PublicationsSection from '../components/PublicationsSection';
import ContactSection from '../components/ContactSection';

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <PortfolioSection />
      <MembersSection />
      <PublicationsSection />
      <ContactSection />
      
      {/* Footer */}
      <footer className="py-12 border-t border-white/10">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="text-2xl font-bold gradient-text mb-4">AI & Smart City Lab</div>
              <p className="text-foreground/60">
                Leading the future of technology with cutting-edge AI solutions.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-foreground/60">
                <li><a href="#services" className="hover:text-ai-blue transition-colors">Machine Learning</a></li>
                <li><a href="#services" className="hover:text-ai-blue transition-colors">NLP Solutions</a></li>
                <li><a href="#services" className="hover:text-ai-blue transition-colors">Computer Vision</a></li>
                <li><a href="#services" className="hover:text-ai-blue transition-colors">AI Consulting</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-foreground/60">
                <li><a href="#about" className="hover:text-ai-blue transition-colors">About Us</a></li>
                <li><a href="#portfolio" className="hover:text-ai-blue transition-colors">Portfolio</a></li>
                <li><a href="#members" className="hover:text-ai-blue transition-colors">Team</a></li>
                <li><a href="#publications" className="hover:text-ai-blue transition-colors">Publications</a></li>
                <li><a href="#contact" className="hover:text-ai-blue transition-colors">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Connect</h4>
              <ul className="space-y-2 text-foreground/60">
                <li><a href="#" className="hover:text-ai-blue transition-colors">LinkedIn</a></li>
                <li><a href="#" className="hover:text-ai-blue transition-colors">Twitter</a></li>
                <li><a href="#" className="hover:text-ai-blue transition-colors">GitHub</a></li>
                <li><a href="#" className="hover:text-ai-blue transition-colors">Blog</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-white/10 mt-8 pt-8 text-center text-foreground/60">
            <p>&copy; 2025 AI & Smart City Lab. All rights reserved. | Built with cutting-edge AI technology</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
