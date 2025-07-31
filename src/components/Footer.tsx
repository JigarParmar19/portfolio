import React from 'react';
import { Github, Mail, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Jigar Parmar
            </h3>
            <p className="text-slate-400 max-w-sm">
              Full Stack Developer passionate about creating beautiful and functional web experiences.
            </p>
            <div className="flex space-x-4">
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

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-white font-semibold">Quick Links</h4>
            <ul className="space-y-2">
              {['About', 'Skills', 'Projects', 'Contact'].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => {
                      const element = document.getElementById(item.toLowerCase());
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                    className="text-slate-400 hover:text-cyan-400 transition-colors duration-200"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-white font-semibold">Get In Touch</h4>
            <div className="space-y-2">
              <p className="text-slate-400">
                <a
                  href="mailto:jigarparmar7166@gmail.com"
                  className="hover:text-cyan-400 transition-colors duration-200"
                >
                  jigarparmar7166@gmail.com
                </a>
              </p>
              <p className="text-slate-400">
                <a
                  href="tel:+917096791919"
                  className="hover:text-cyan-400 transition-colors duration-200"
                >
                  +91 7096791919
                </a>
              </p>
              <p className="text-slate-400">Surat, Gujarat, India</p>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-8 pt-8 text-center">
          <p className="text-slate-400 flex items-center justify-center gap-2">
            © {currentYear} Jigar Parmar. Made with{' '}
            <Heart size={16} className="text-red-500 fill-current" />{' '}
            and lots of coffee.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;