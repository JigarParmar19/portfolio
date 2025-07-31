import React from 'react';
import { ChevronDown, Download, ExternalLink } from 'lucide-react';

const Hero = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Hi, I'm{' '}
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              Jigar Parmar
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            A passionate{' '}
            <span className="text-cyan-400 font-semibold">Full Stack Developer</span>
            {' '}crafting beautiful, functional web experiences with modern technologies
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button
              onClick={scrollToAbout}
              className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-cyan-500/25"
            >
              Learn More
            </button>
            
            <a
              href="mailto:jigarparmar7166@gmail.com"
              className="px-8 py-3 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-slate-900 transform hover:scale-105 transition-all duration-200 flex items-center gap-2"
            >
              <ExternalLink size={18} />
              Get In Touch
            </a>
          </div>

          {/* Tech stack indicators */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {['React', 'Node.js', 'MongoDB', 'JavaScript', 'HTML/CSS'].map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 bg-slate-800/50 text-slate-300 rounded-full text-sm border border-slate-700 hover:border-cyan-400 hover:text-cyan-400 transition-all duration-200"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button
            onClick={scrollToAbout}
            className="text-slate-400 hover:text-cyan-400 transition-colors duration-200"
          >
            <ChevronDown size={32} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;