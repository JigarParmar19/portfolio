import React from 'react';
import { ExternalLink, Github, Zap } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce application built with React, Node.js, and MongoDB. Features include user authentication, product management, shopping cart, and payment integration.',
      technologies: ['React.js', 'Node.js', 'MongoDB', 'Express.js', 'Bootstrap'],
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      demoUrl: '#',
      githubUrl: '#',
      featured: true
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'A responsive task management application with drag-and-drop functionality, user authentication, and real-time updates. Built with React and Firebase.',
      technologies: ['React.js', 'Firebase', 'CSS3', 'JavaScript'],
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      demoUrl: '#',
      githubUrl: '#',
      featured: false
    },
    {
      id: 3,
      title: 'Portfolio Website',
      description: 'A modern, responsive portfolio website showcasing my projects and skills. Built with React, TypeScript, and Tailwind CSS with smooth animations.',
      technologies: ['React.js', 'TypeScript', 'Tailwind CSS'],
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      demoUrl: '#',
      githubUrl: '#',
      featured: true
    },
    {
      id: 4,
      title: 'Weather App',
      description: 'A clean and intuitive weather application that provides current weather conditions and forecasts. Features location-based weather and beautiful UI.',
      technologies: ['JavaScript', 'HTML5', 'CSS3', 'Weather API'],
      image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      demoUrl: '#',
      githubUrl: '#',
      featured: false
    },
    {
      id: 5,
      title: 'Social Media Dashboard',
      description: 'A comprehensive dashboard for managing multiple social media accounts with analytics, scheduling, and engagement tracking features.',
      technologies: ['React.js', 'Node.js', 'MySQL', 'Chart.js'],
      image: 'https://images.pexels.com/photos/147413/twitter-facebook-together-exchange-of-information-147413.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      demoUrl: '#',
      githubUrl: '#',
      featured: false
    },
    {
      id: 6,
      title: 'Learning Management System',
      description: 'An educational platform with course management, student progress tracking, and interactive learning modules. Built for modern education needs.',
      technologies: ['React.js', 'Node.js', 'MongoDB', 'Socket.io'],
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      demoUrl: '#',
      githubUrl: '#',
      featured: true
    }
  ];

  return (
    <section id="projects" className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            My <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto rounded-full"></div>
          <p className="text-slate-300 max-w-2xl mx-auto mt-6 text-lg">
            Here are some of the projects I've worked on that showcase my skills and creativity
          </p>
        </div>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className={`group relative bg-slate-800/50 rounded-2xl overflow-hidden border border-slate-700 hover:border-cyan-400/50 transition-all duration-300 hover:transform hover:scale-105 ${
                project.featured ? 'ring-2 ring-cyan-400/20' : ''
              }`}
            >
              {project.featured && (
                <div className="absolute top-4 left-4 z-10">
                  <span className="flex items-center gap-1 bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                    <Zap size={12} />
                    Featured
                  </span>
                </div>
              )}

              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-200">
                  {project.title}
                </h3>
                
                <p className="text-slate-300 text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-slate-700 text-slate-300 rounded text-xs border border-slate-600"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex justify-between items-center pt-4 border-t border-slate-700">
                  <a
                    href={project.demoUrl}
                    className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors duration-200 text-sm font-medium"
                  >
                    <ExternalLink size={16} />
                    Live Demo
                  </a>
                  <a
                    href={project.githubUrl}
                    className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors duration-200 text-sm font-medium"
                  >
                    <Github size={16} />
                    Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://github.com/JigarParmar19"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-cyan-500/25"
          >
            <Github size={20} />
            View All Projects on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;