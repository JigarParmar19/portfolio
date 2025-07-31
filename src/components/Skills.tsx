import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend Development',
      skills: [
        { name: 'HTML', level: 90 },
        { name: 'CSS', level: 85 },
        { name: 'JavaScript', level: 80 },
        { name: 'React.js', level: 75 },
        { name: 'Bootstrap', level: 85 }
      ]
    },
    {
      title: 'Backend Development',
      skills: [
        { name: 'Node.js', level: 70 },
        { name: 'Express.js', level: 70 }
      ]
    },
    {
      title: 'Database Management',
      skills: [
        { name: 'MongoDB', level: 75 },
        { name: 'MySQL', level: 65 }
      ]
    },
    {
      title: 'Tools & Technologies',
      skills: [
        { name: 'Git', level: 80 },
        { name: 'GitHub', level: 85 },
        { name: 'C Programming', level: 70 },
        { name: 'DSA', level: 60 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            My <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto rounded-full"></div>
          <p className="text-slate-300 max-w-2xl mx-auto mt-6 text-lg">
            Here are the technologies and tools I work with to bring ideas to life
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className="bg-slate-900/50 p-8 rounded-2xl border border-slate-700 hover:border-cyan-400/30 transition-all duration-300"
            >
              <h3 className="text-2xl font-semibold text-white mb-6 flex items-center">
                <span className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full mr-3"></span>
                {category.title}
              </h3>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="group">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-slate-200 font-medium">{skill.name}</span>
                      <span className="text-cyan-400 text-sm font-semibold">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-slate-700 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-cyan-400 to-purple-500 h-2 rounded-full transition-all duration-1000 ease-out group-hover:from-cyan-300 group-hover:to-purple-400"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Technologies */}
        <div className="mt-16">
          <h3 className="text-2xl font-semibold text-white text-center mb-8">
            Technologies I Work With
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              'React', 'Node.js', 'MongoDB', 'Express.js', 'JavaScript', 'HTML5', 'CSS3',
              'Bootstrap', 'Git', 'GitHub', 'MySQL', 'C Programming', 'DSA'
            ].map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 bg-slate-700 text-slate-200 rounded-full border border-slate-600 hover:border-cyan-400 hover:text-cyan-400 hover:bg-slate-800 transition-all duration-200 cursor-default"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;