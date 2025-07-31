import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const contactInfo = [
    {
      icon: <Mail className="text-cyan-400" size={24} />,
      title: 'Email',
      details: 'jigarparmar7166@gmail.com',
      link: 'mailto:jigarparmar7166@gmail.com'
    },
    {
      icon: <Phone className="text-purple-400" size={24} />,
      title: 'Phone',
      details: '+91 7096791919',
      link: 'tel:+917096791919'
    },
    {
      icon: <MapPin className="text-blue-400" size={24} />,
      title: 'Location',
      details: 'Surat, Gujarat, India',
      link: null
    }
  ];

  return (
    <section id="contact" className="py-20 bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Get In <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto rounded-full"></div>
          <p className="text-slate-300 max-w-2xl mx-auto mt-6 text-lg">
            I'm always open to discussing new opportunities and interesting projects. Let's connect!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-white mb-6">Let's Talk</h3>
              <p className="text-slate-300 text-lg leading-relaxed mb-8">
                I'm currently looking for new opportunities and would love to hear from you. 
                Whether you have a project in mind, want to collaborate, or just want to say hello, 
                feel free to reach out!
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-4 p-4 bg-slate-900/50 rounded-lg border border-slate-700 hover:border-cyan-400/50 transition-all duration-300"
                >
                  <div className="flex-shrink-0">
                    {info.icon}
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-1">{info.title}</h4>
                    {info.link ? (
                      <a
                        href={info.link}
                        className="text-slate-300 hover:text-cyan-400 transition-colors duration-200"
                      >
                        {info.details}
                      </a>
                    ) : (
                      <p className="text-slate-300">{info.details}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div className="pt-8">
              <h4 className="text-white font-medium mb-4">Connect with me</h4>
              <div className="flex space-x-4">
                <a
                  href="https://github.com/JigarParmar19"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-12 h-12 bg-slate-700 hover:bg-slate-600 text-slate-400 hover:text-white rounded-lg transition-all duration-200 hover:scale-110"
                >
                  <Github size={20} />
                </a>
                <a
                  href="mailto:jigarparmar7166@gmail.com"
                  className="flex items-center justify-center w-12 h-12 bg-slate-700 hover:bg-slate-600 text-slate-400 hover:text-white rounded-lg transition-all duration-200 hover:scale-110"
                >
                  <Mail size={20} />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-slate-900/50 p-8 rounded-2xl border border-slate-700">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-white font-medium mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-200"
                    placeholder="Enter your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-white font-medium mb-2">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-200"
                    placeholder="Enter your email"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-white font-medium mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-200"
                  placeholder="What's this about?"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-white font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-200 resize-none"
                  placeholder="Tell me about your project or just say hello!"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-cyan-500/25"
              >
                <Send size={20} />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;