import { useEffect, useRef, useState } from 'react';
import { Target, Lightbulb, Rocket } from 'lucide-react';

const highlights = [
  {
    icon: Target,
    title: 'Focus',
    description: 'Production-ready systems that scale',
  },
  {
    icon: Lightbulb,
    title: 'Approach',
    description: 'Reliability-first design thinking',
  },
  {
    icon: Rocket,
    title: 'Mindset',
    description: 'Continuous improvement through hands-on projects',
  },
];

export default function About() {
  const [isVisible, setIsVisible] = useState(false);
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

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative py-24 lg:py-32"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-navy" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary-blue/5 rounded-full blur-[150px]" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
        </div>

        {/* Main content */}
        <div 
          className={`grid lg:grid-cols-5 gap-12 items-center transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {/* Profile image area - takes 2 columns */}
          <div className="lg:col-span-2 flex justify-center">
            <div className="relative">
              {/* Decorative rings */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-64 h-64 rounded-full border border-primary-blue/20 animate-pulse-glow" />
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-56 h-56 rounded-full border border-primary-blue/10" style={{ animationDelay: '0.5s' }} />
              </div>
              
              {/* Profile placeholder */}
              <div className="relative w-48 h-48 rounded-full bg-gradient-to-br from-primary-blue/20 to-accent-cyan/20 border-2 border-primary-blue/30 flex items-center justify-center overflow-hidden">
                <div className="text-center">
                  <div className="w-20 h-20 mx-auto mb-2 rounded-full bg-primary-blue/20 flex items-center justify-center">
                    <span className="text-3xl font-display font-bold text-primary-blue">DE</span>
                  </div>
                  <span className="text-sm text-gray-400">Cloud&DevOps Engineer</span>
                </div>
              </div>

              {/* Floating badges */}
              <div className="absolute -top-2 -right-2 px-3 py-1 rounded-full bg-primary-blue/20 border border-primary-blue/30 text-xs text-primary-blue font-medium">
                AWS
              </div>
              <div className="absolute -bottom-2 -left-2 px-3 py-1 rounded-full bg-accent-cyan/20 border border-accent-cyan/30 text-xs text-accent-cyan font-medium">
                Terraform
              </div>
            </div>
          </div>

          {/* Text content - takes 3 columns */}
          <div className="lg:col-span-3">
            <div 
              className={`transition-all duration-700 delay-200 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                I’m Murtala Dahiru Kawu, <span className="text-white font-medium"> a Cloud & DevOps Engineer</span> focused on building 
                real, production-ready systems. I enjoy designing cloud infrastructure that is 
                <span className="text-primary-blue"> scalable</span>, 
                <span className="text-primary-blue"> reliable</span>, and 
                <span className="text-primary-blue"> cost-efficient</span>, and I'm continuously 
                improving my skills through hands-on projects and learning.
              </p>

              <p className="text-gray-400 leading-relaxed mb-8">
                My approach combines technical depth with practical problem-solving. I believe in 
                infrastructure that not only works but is also maintainable, well-documented, and 
                designed with failure in mind. Every system I build is an opportunity to apply 
                best practices and learn something new.
              </p>
            </div>

            {/* Highlights */}
            <div 
              className={`grid sm:grid-cols-3 gap-4 transition-all duration-700 delay-400 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              {highlights.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div
                    key={index}
                    className="group p-4 rounded-xl bg-white/[0.02] border border-white/10 hover:border-primary-blue/20 hover:bg-white/[0.04] transition-all duration-300"
                  >
                    <Icon className="w-5 h-5 text-primary-blue mb-2 group-hover:scale-110 transition-transform" />
                    <h4 className="text-white font-medium text-sm mb-1">{item.title}</h4>
                    <p className="text-gray-500 text-xs">{item.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
