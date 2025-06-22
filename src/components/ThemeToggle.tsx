
import { useState, useEffect } from 'react';
import { Sun, Moon } from 'lucide-react';

const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setIsDark(savedTheme === 'dark');
      document.documentElement.classList.toggle('light', savedTheme === 'light');
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = isDark ? 'light' : 'dark';
    setIsDark(!isDark);
    localStorage.setItem('theme', newTheme);
    document.documentElement.classList.toggle('light');
  };

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-lg glass-card hover:bg-white/10 transition-colors duration-300"
      aria-label="Toggle theme"
    >
      {isDark ? (
        <Sun size={20} className="text-ai-blue" />
      ) : (
        <Moon size={20} className="text-ai-purple" />
      )}
    </button>
  );
};

export default ThemeToggle;
