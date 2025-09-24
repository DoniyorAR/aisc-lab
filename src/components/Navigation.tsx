import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { label: 'Home', id: 'home' },
    { label: 'About', id: 'about' },
    { label: 'Services', id: 'services' },
    { label: 'Portfolio', id: 'portfolio' },
    { label: 'Members', id: 'members' },
    { label: 'Publications', id: 'publications' },
    { label: 'Contact', id: 'contact' },
  ];

  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-background/80 backdrop-blur-lg border-b border-white/10' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="text-2xl font-bold gradient-text">AI & Smart City Lab</div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-foreground hover:text-ai-blue transition-colors duration-300 relative group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-ai-blue to-ai-purple transition-all duration-300 group-hover:w-full" />
              </button>
            ))}

            {/* Login as a regular menu item (after Contact) */}
            <a
              href="https://b24-10dywj.bitrix24.com/online/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:text-ai-blue transition-colors duration-300 relative group"
              aria-label="Login (opens Bitrix24 in a new tab)"
            >
              Login
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-ai-blue to-ai-purple transition-all duration-300 group-hover:w-full" />
            </a>

            <ThemeToggle />
          </div>

          {/* Mobile Menu Button + Theme */}
          <div className="md:hidden flex items-center space-x-2">
            <ThemeToggle />
            <button
              className="text-foreground hover:text-ai-blue transition-colors"
              onClick={() => setIsMobileMenuOpen((v) => !v)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 glass-card p-4 animate-fade-in">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="block w-full text-left py-2 text-foreground hover:text-ai-blue transition-colors duration-300"
              >
                {item.label}
              </button>
            ))}
            {/* Login item for mobile */}
            <a
              href="https://b24-10dywj.bitrix24.com/online/"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-left py-2 text-foreground hover:text-ai-blue transition-colors duration-300"
            >
              Login
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
