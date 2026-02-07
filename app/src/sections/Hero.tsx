import { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Github, Linkedin, ChevronDown, Cloud, Server, Database, Shield, Cpu, Code } from 'lucide-react';

const floatingIcons = [
  { Icon: Cloud, delay: 0, size: 48, x: 75, y: 20 },
  { Icon: Server, delay: 0.5, size: 40, x: 85, y: 45 },
  { Icon: Database, delay: 1, size: 44, x: 70, y: 65 },
  { Icon: Shield, delay: 1.5, size: 36, x: 88, y: 75 },
  { Icon: Cpu, delay: 2, size: 42, x: 78, y: 40 },
  { Icon: Code, delay: 2.5, size: 38, x: 82, y: 55 },
];

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      ref={heroRef}
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background gradient mesh */}
      <div className="absolute inset-0 bg-navy">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-blue/10 via-transparent to-accent-cyan/5" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-blue/10 rounded-full blur-[120px] animate-pulse-glow" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent-cyan/5 rounded-full blur-[100px] animate-pulse-glow" style={{ animationDelay: '1s' }} />
      </div>

      {/* Grid pattern overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}
      />

      {/* Floating icons */}
      <div className="absolute inset-0 pointer-events-none">
        {floatingIcons.map(({ Icon, delay, size, x, y }, index) => (
          <div
            key={index}
            className={`absolute transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
            style={{
              left: `${x}%`,
              top: `${y}%`,
              transitionDelay: `${delay + 0.2}s`,
              animation: `float ${3 + index * 0.5}s ease-in-out infinite`,
              animationDelay: `${delay}s`,
            }}
          >
            <Icon 
              size={size} 
              className="text-primary-blue/30"
              strokeWidth={1.5}
            />
          </div>
        ))}
      </div>

      {/* Main content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-5 gap-12 items-center">
          {/* Text content - takes 3 columns */}
          <div className="lg:col-span-3 text-center lg:text-left">
            {/* Badge */}
            <div 
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-blue/10 border border-primary-blue/20 mb-6 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
              style={{ transitionDelay: '0.1s' }}
            >
              <div className="w-2 h-2 rounded-full bg-accent-cyan animate-pulse" />
              <span className="text-sm text-primary-blue font-medium">Available for opportunities</span>
            </div>

            {/* Headline */}
            <h1 
              className={`font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: '0.2s' }}
            >
              Cloud & DevOps{' '}
              <span className="text-gradient">Engineer</span>
            </h1>

            {/* Sub-headline */}
            <p 
              className={`text-lg sm:text-xl text-gray-300 mb-4 max-w-2xl transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: '0.3s' }}
            >
              I design and automate production-grade AWS infrastructure using Terraform, 
              serverless architectures, and reliability-first design principles.
            </p>

            {/* Description */}
            <p 
              className={`text-base text-gray-400 mb-8 max-w-xl transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: '0.4s' }}
            >
              Hands-on engineer focused on real-world cloud systems multi-region disaster recovery, 
              cost optimization platforms, and event-driven pipelines.
            </p>

            {/* CTA Buttons */}
            <div 
              className={`flex flex-col sm:flex-row gap-4 justify-center lg:justify-start transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: '0.5s' }}
            >
              <Button 
                size="lg" 
                onClick={scrollToProjects}
                className="bg-primary-blue hover:bg-primary-blue/90 text-white px-8 py-6 text-base font-medium transition-all duration-300 hover:shadow-glow hover:scale-105"
              >
                View Projects
                <ChevronDown className="ml-2 w-4 h-4" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-white/20 text-white hover:bg-white/10 px-8 py-6 text-base font-medium transition-all duration-300"
                onClick={() => window.open('https://github.com/Murtala-Dahiru', '_blank')}
              >
                <Github className="mr-2 w-5 h-5" />
                GitHub
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-white/20 text-white hover:bg-white/10 px-8 py-6 text-base font-medium transition-all duration-300"
                onClick={() => window.open('www.linkedin.com/in/murtala-kawu-dahiru-129962265', '_blank')}
              >
                <Linkedin className="mr-2 w-5 h-5" />
                LinkedIn
              </Button>
            </div>
          </div>

          {/* Decorative element - takes 2 columns */}
          <div className="lg:col-span-2 hidden lg:flex items-center justify-center">
            <div 
              className={`relative w-80 h-80 transition-all duration-1000 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}
              style={{ transitionDelay: '0.6s' }}
            >
              {/* Orbital rings */}
              <div className="absolute inset-0 border border-primary-blue/20 rounded-full animate-orbit" style={{ animationDuration: '30s' }} />
              <div className="absolute inset-4 border border-primary-blue/15 rounded-full animate-orbit" style={{ animationDuration: '25s', animationDirection: 'reverse' }} />
              <div className="absolute inset-8 border border-primary-blue/10 rounded-full animate-orbit" style={{ animationDuration: '20s' }} />
              
              {/* Center element */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-32 h-32 rounded-full bg-gradient-to-br from-primary-blue/20 to-accent-cyan/20 backdrop-blur-sm border border-primary-blue/30 flex items-center justify-center">
                  <Cloud size={48} className="text-primary-blue" />
                </div>
              </div>

              {/* Orbiting dots */}
              {[0, 60, 120, 180, 240, 300].map((deg, i) => (
                <div
                  key={i}
                  className="absolute w-3 h-3 bg-accent-cyan rounded-full"
                  style={{
                    top: '50%',
                    left: '50%',
                    transform: `rotate(${deg}deg) translateX(140px) translateY(-50%)`,
                    transformOrigin: '0 0',
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-navy to-transparent" />
    </section>
  );
}
