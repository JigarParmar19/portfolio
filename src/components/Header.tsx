import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-slate-900/80 backdrop-blur-md border-b border-slate-800' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Jigar Parmar
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {['About', 'Skills', 'Projects', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="text-slate-300 hover:text-cyan-400 transition-colors duration-200 font-medium"
              >
                {item}
              </button>
            ))}
          </nav>

          {/* Social Links */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="https://github.com/JigarParmar19"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-cyan-400 transition-colors duration-200"
            >
              <Github size={20} />
            </a>
            <a
              href="mailto:jigarparmar7166@gmail.com"
              className="text-slate-400 hover:text-cyan-400 transition-colors duration-200"
            >
              <Mail size={20} />
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-300 hover:text-cyan-400 transition-colors duration-200"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden bg-slate-900/95 backdrop-blur-md border-t border-slate-800">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {['About', 'Skills', 'Projects', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="block w-full text-left px-3 py-2 text-slate-300 hover:text-cyan-400 hover:bg-slate-800 rounded-md transition-all duration-200"
                >
                  {item}
                </button>
              ))}
              <div className="flex space-x-4 px-3 py-2">
                <a
                  href="https://github.com/JigarParmar19"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-cyan-400 transition-colors duration-200"
                >
                  <Github size={20} />
                </a>
                <a
                  href="mailto:jigarparmar7166@gmail.com"
                  className="text-slate-400 hover:text-cyan-400 transition-colors duration-200"
                >
                  <Mail size={20} />
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;