import { useEffect, useRef, useState } from 'react';
import { Server, Code, Shield, Scale } from 'lucide-react';

const principles = [
  {
    icon: Server,
    title: 'Why Serverless?',
    content: 'Serverless architectures eliminate infrastructure management overhead, enabling teams to focus on business logic. With automatic scaling, pay-per-use pricing, and built-in high availability, serverless is ideal for event-driven workloads, APIs, and data processing pipelines.',
  },
  {
    icon: Code,
    title: 'Why Terraform?',
    content: 'Infrastructure as Code through Terraform provides version-controlled, repeatable, and auditable infrastructure deployments. Its declarative syntax, modular design, and extensive provider ecosystem make it the industry standard for cloud resource management.',
  },
  {
    icon: Shield,
    title: 'Design for Failure',
    content: 'Every system component will fail eventually. By designing for failure from day one — implementing retries, circuit breakers, graceful degradations, and automated recovery — we build systems that are resilient and self-healing.',
  },
  {
    icon: Scale,
    title: 'Balance Cost, Performance, and Reliability',
    content: 'Engineering is about trade-offs. The right balance depends on business requirements: a startup prototype needs different considerations than a financial trading platform. I evaluate each decision through the lens of business value and technical debt.',
  },
];

export default function Philosophy() {
  const [visibleItems, setVisibleItems] = useState<number[]>([]);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = itemRefs.current.indexOf(entry.target as HTMLDivElement);
            if (index !== -1 && !visibleItems.includes(index)) {
              setVisibleItems((prev) => [...prev, index]);
            }
          }
        });
      },
      { threshold: 0.3, rootMargin: '0px 0px -50px 0px' }
    );

    itemRefs.current.forEach((item) => {
      if (item) observer.observe(item);
    });

    return () => observer.disconnect();
  }, [visibleItems]);

  return (
    <section
      id="philosophy"
      className="relative py-24 lg:py-32"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-navy" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-blue/5 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-accent-cyan/5 rounded-full blur-[100px]" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Architecture & <span className="text-gradient">Engineering Depth</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            How I think about building cloud systems
          </p>
        </div>

        {/* Principles grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {principles.map((principle, index) => {
            const Icon = principle.icon;
            const isVisible = visibleItems.includes(index);
            const isLeft = index % 2 === 0;

            return (
              <div
                key={index}
                ref={(el) => { itemRefs.current[index] = el; }}
                className={`group relative p-6 rounded-2xl transition-all duration-600 ${
                  isVisible 
                    ? 'opacity-100 translate-x-0' 
                    : `opacity-0 ${isLeft ? '-translate-x-8' : 'translate-x-8'}`
                }`}
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                {/* Card background */}
                <div className="absolute inset-0 rounded-2xl bg-white/[0.02] border border-white/10 backdrop-blur-sm transition-all duration-300 group-hover:bg-white/[0.05] group-hover:border-primary-blue/20" />

                {/* Content */}
                <div className="relative z-10">
                  {/* Icon and title */}
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-primary-blue/10 border border-primary-blue/20 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-5 h-5 text-primary-blue" />
                    </div>
                    <h3 className="font-display text-lg font-semibold text-white">
                      {principle.title}
                    </h3>
                  </div>

                  {/* Content text */}
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {principle.content}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom quote */}
        <div 
          className={`mt-12 text-center transition-all duration-700 ${
            visibleItems.length === principles.length 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionDelay: '0.4s' }}
        >
          <blockquote className="relative">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 text-6xl text-primary-blue/20 font-serif">
              "
            </div>
            <p className="text-gray-300 text-lg italic max-w-2xl mx-auto pt-4">
              Good engineers write code that works. Great engineers write code that works 
              <span className="text-primary-blue"> when everything else fails</span>.
            </p>
          </blockquote>
        </div>
      </div>
    </section>
  );
}
