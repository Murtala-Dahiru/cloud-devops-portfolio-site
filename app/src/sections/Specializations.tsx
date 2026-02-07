import { useEffect, useRef, useState } from 'react';
import { Cloud, FileCode, Zap, ShieldCheck, GitBranch, BarChart3 } from 'lucide-react';

const specializations = [
  {
    icon: Cloud,
    title: 'AWS Cloud Architecture',
    description: 'Designing scalable, secure, and cost-effective cloud infrastructure on AWS.',
  },
  {
    icon: FileCode,
    title: 'Infrastructure as Code (Terraform)',
    description: 'Automating infrastructure provisioning with modular, reusable Terraform configurations.',
  },
  {
    icon: Zap,
    title: 'Serverless & Event-Driven Systems',
    description: 'Building event-driven architectures using Lambda, API Gateway, and messaging services.',
  },
  {
    icon: ShieldCheck,
    title: 'Disaster Recovery & High Availability',
    description: 'Implementing multi-region failover strategies and business continuity solutions.',
  },
  {
    icon: GitBranch,
    title: 'CI/CD & Automation',
    description: 'Streamlining deployments with GitHub Actions and automated testing pipelines.',
  },
  {
    icon: BarChart3,
    title: 'Monitoring, Reliability & Cost Optimization',
    description: 'Ensuring system health with observability tools and FinOps best practices.',
  },
];

export default function Specializations() {
  const [visibleCards, setVisibleCards] = useState<number[]>([]);
  const sectionRef = useRef<HTMLElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = cardRefs.current.indexOf(entry.target as HTMLDivElement);
            if (index !== -1 && !visibleCards.includes(index)) {
              setVisibleCards((prev) => [...prev, index]);
            }
          }
        });
      },
      { threshold: 0.2, rootMargin: '0px 0px -50px 0px' }
    );

    cardRefs.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => observer.disconnect();
  }, [visibleCards]);

  return (
    <section
      ref={sectionRef}
      id="specializations"
      className="relative py-24 lg:py-32"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-navy" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            What I <span className="text-gradient">Specialize In</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Core competencies built through hands-on experience with production-grade cloud systems
          </p>
        </div>

        {/* Specializations grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {specializations.map((spec, index) => {
            const Icon = spec.icon;
            const isVisible = visibleCards.includes(index);
            
            return (
              <div
                key={index}
                ref={(el) => { cardRefs.current[index] = el; }}
                className={`group relative p-6 rounded-2xl transition-all duration-500 ${
                  isVisible 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-8'
                }`}
                style={{ 
                  transitionDelay: `${index * 0.1}s`,
                  perspective: '1000px'
                }}
              >
                {/* Card background with glass effect */}
                <div className="absolute inset-0 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-sm transition-all duration-300 group-hover:bg-white/[0.06] group-hover:border-primary-blue/30" />
                
                {/* Glow effect on hover */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-primary-blue/10 to-transparent" />

                {/* Content */}
                <div className="relative z-10">
                  {/* Icon */}
                  <div className="w-12 h-12 rounded-xl bg-primary-blue/10 border border-primary-blue/20 flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110 group-hover:bg-primary-blue/20">
                    <Icon className="w-6 h-6 text-primary-blue" />
                  </div>

                  {/* Title */}
                  <h3 className="font-display text-xl font-semibold text-white mb-2 group-hover:text-gradient transition-all duration-300">
                    {spec.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {spec.description}
                  </p>
                </div>

                {/* Corner accent */}
                <div className="absolute top-0 right-0 w-20 h-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute top-4 right-4 w-2 h-2 bg-accent-cyan rounded-full" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
