import React from 'react';
import { Code2, Lightbulb, Users, Zap } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: <Code2 className="text-cyan-400" size={24} />,
      title: 'Clean Code',
      description: 'Writing maintainable, scalable, and efficient code'
    },
    {
      icon: <Lightbulb className="text-purple-400" size={24} />,
      title: 'Problem Solving',
      description: 'Creative solutions to complex technical challenges'
    },
    {
      icon: <Users className="text-blue-400" size={24} />,
      title: 'Team Player',
      description: 'Collaborative mindset with excellent communication'
    },
    {
      icon: <Zap className="text-yellow-400" size={24} />,
      title: 'Fast Learner',
      description: 'Quickly adapting to new technologies and frameworks'
    }
  ];

  return (
    <section id="about" className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            About <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <p className="text-lg text-slate-300 leading-relaxed">
              I'm a passionate Full Stack Developer with expertise in modern web technologies. 
              Currently pursuing my Diploma in IT at BHAGWAN MAHAVIR POLYTECHNIC and enhancing 
              my skills through advanced courses at Red & White Skill Education.
            </p>
            <p className="text-lg text-slate-300 leading-relaxed">
              I specialize in creating responsive, user-friendly web applications using React.js, 
              Node.js, and MongoDB. My goal is to build digital experiences that are not only 
              functional but also beautiful and intuitive.
            </p>
            <p className="text-lg text-slate-300 leading-relaxed">
              I'm eager to apply my technical skills and enthusiasm for learning in a dynamic team. 
              I aim to contribute to innovative projects while continuously developing my knowledge and expertise.
            </p>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-2xl border border-slate-600 shadow-2xl">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-cyan-400 mb-2">2+</div>
                  <div className="text-slate-300">Years Learning</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-400 mb-2">10+</div>
                  <div className="text-slate-300">Projects Built</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-400 mb-2">5+</div>
                  <div className="text-slate-300">Technologies</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-yellow-400 mb-2">100%</div>
                  <div className="text-slate-300">Dedication</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, index) => (
            <div
              key={index}
              className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 hover:border-cyan-400/50 transition-all duration-300 hover:transform hover:scale-105 group"
            >
              <div className="mb-4 group-hover:scale-110 transition-transform duration-200">
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
              <p className="text-slate-400">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;