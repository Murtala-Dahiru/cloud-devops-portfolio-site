import { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Github, Linkedin, Mail, Download, ArrowUpRight, Terminal } from 'lucide-react';

const contactLinks = [
  {
    name: 'GitHub',
    description: 'View my code repositories',
    icon: Github,
    url: 'https://github.com/Murtala-Dahiru',
    color: 'hover:text-white',
  },
  {
    name: 'LinkedIn',
    description: 'Connect professionally',
    icon: Linkedin,
    url: 'www.linkedin.com/in/murtala-kawu-dahiru-129962265',
    color: 'hover:text-[#0A66C2]',
  },
  {
    name: 'Email',
    description: 'Get in touch directly',
    icon: Mail,
    url: 'mailto:murtaladahiru25@gmail.com',
    color: 'hover:text-primary-blue',
  },
];

export default function Contact() {
  const [isVisible, setIsVisible] = useState(false);
  const [cursorVisible, setCursorVisible] = useState(true);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Blinking cursor effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCursorVisible((prev) => !prev);
    }, 530);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="relative py-24 lg:py-32"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-navy" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main content */}
        <div 
          className={`text-center mb-12 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {/* Terminal-style heading */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-dark-gray border border-white/10 mb-6">
            <Terminal className="w-4 h-4 text-primary-blue" />
            <span className="text-sm text-gray-400 font-mono">~/contact</span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Let's <span className="text-gradient">Connect</span>
            <span className={`inline-block w-0.5 h-8 bg-primary-blue ml-1 align-middle ${cursorVisible ? 'opacity-100' : 'opacity-0'} transition-opacity`} />
          </h2>

          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            Open to opportunities in cloud infrastructure, DevOps engineering, and platform teams.
          </p>
        </div>

        {/* Contact links */}
        <div 
          className={`grid sm:grid-cols-3 gap-4 mb-12 transition-all duration-700 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {contactLinks.map((link, index) => {
            const Icon = link.icon;
            return (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative p-6 rounded-xl bg-white/[0.02] border border-white/10 hover:border-primary-blue/30 hover:bg-white/[0.04] transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-lg bg-primary-blue/10 border border-primary-blue/20 flex items-center justify-center group-hover:bg-primary-blue/20 transition-colors">
                    <Icon className="w-6 h-6 text-primary-blue" />
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-gray-500 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </div>
                <h3 className={`font-display text-lg font-semibold text-white mb-1 ${link.color} transition-colors`}>
                  {link.name}
                </h3>
                <p className="text-gray-500 text-sm">
                  {link.description}
                </p>
              </a>
            );
          })}
        </div>

        {/* CV Download */}
        <div 
          className={`text-center transition-all duration-700 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <Button
            variant="outline"
            size="lg"
            className="border-primary-blue/30 text-primary-blue hover:bg-primary-blue/10 px-8"
            onClick={() => alert('Reach me directly at murtaladahiru25@gmail.com to get a copy right away!')}
          >
            <Download className="w-5 h-5 mr-2" />
            Download CV
          </Button>
        </div>
      </div>

      {/* Footer */}
      <footer className="relative z-10 mt-24 pt-8 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            {/* Logo/Name */}
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-primary-blue/20 border border-primary-blue/30 flex items-center justify-center">
                <span className="text-sm font-display font-bold text-primary-blue">DE</span>
              </div>
              <span className="text-white font-medium">DevOps Engineer</span>
            </div>

            {/* Copyright */}
            <p className="text-gray-500 text-sm">
              Built with React, Tailwind CSS & attention to detail
            </p>

            {/* Back to top */}
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="text-gray-500 hover:text-white text-sm transition-colors flex items-center gap-1"
            >
              Back to top
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </footer>
    </section>
  );
}
