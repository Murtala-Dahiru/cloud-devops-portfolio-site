import { useEffect, useRef, useState } from 'react';
import { Cloud, Code2, GitBranch, Terminal, Database, Shield, LineChart, FileCode, Workflow, Monitor, Server } from 'lucide-react';

const skillCategories = [
  {
    title: 'Cloud & DevOps',
    icon: Cloud,
    skills: [
      { name: 'AWS', level: 'Advanced' },
      { name: 'EC2', level: 'Advanced' },
      { name: 'S3', level: 'Advanced' },
      { name: 'RDS', level: 'Advanced' },
      { name: 'Lambda', level: 'Advanced' },
      { name: 'API Gateway', level: 'Intermediate' },
      { name: 'IAM', level: 'Advanced' },
      { name: 'CloudWatch', level: 'Intermediate' },
      { name: 'Terraform', level: 'Intermediate' },
      { name: 'GitHub Actions', level: 'Intermediate' },
    ],
  },
  {
    title: 'Languages & Tools',
    icon: Code2,
    skills: [
      { name: 'Python', level: 'Advanced' },
      { name: 'Bash', level: 'Intermediate' },
      { name: 'Git', level: 'Advanced' },
      { name: 'Linux', level: 'Intermediate' },
      { name: 'YAML/JSON', level: 'Advanced' },
      { name: 'Docker', level: 'Intermediate' },
      { name: 'VS Code', level: 'Advanced' },
    ],
  },
  {
    title: 'Engineering Practices',
    icon: Workflow,
    skills: [
      { name: 'Infrastructure as Code', level: 'Intermediate' },
      { name: 'CI/CD Pipelines', level: 'Intermediate' },
      { name: 'Monitoring & Logging', level: 'Intermediate' },
      { name: 'Cost Optimization', level: 'Advanced' },
      { name: 'Documentation', level: 'Advanced' },
      { name: 'Version Control', level: 'Advanced' },
      { name: 'Security Best Practices', level: 'Intermediate' },
    ],
  },
];

const skillIcons: Record<string, React.ElementType> = {
  'AWS': Cloud,
  'EC2': Server,
  'S3': Database,
  'RDS': Database,
  'Lambda': Code2,
  'API Gateway': Terminal,
  'IAM': Shield,
  'CloudWatch': Monitor,
  'Terraform': FileCode,
  'GitHub Actions': GitBranch,
  'Python': Code2,
  'Bash': Terminal,
  'Git': GitBranch,
  'Linux': Terminal,
  'Docker': Container,
  'Infrastructure as Code': FileCode,
  'CI/CD Pipelines': Workflow,
  'Monitoring & Logging': LineChart,
  'Cost Optimization': LineChart,
  'Documentation': FileCode,
  'Version Control': GitBranch,
  'Security Best Practices': Shield,
};

function Container({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

export default function Skills() {
  const [visibleCategories, setVisibleCategories] = useState<number[]>([]);
  const categoryRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = categoryRefs.current.indexOf(entry.target as HTMLDivElement);
            if (index !== -1 && !visibleCategories.includes(index)) {
              setVisibleCategories((prev) => [...prev, index]);
            }
          }
        });
      },
      { threshold: 0.2, rootMargin: '0px 0px -50px 0px' }
    );

    categoryRefs.current.forEach((category) => {
      if (category) observer.observe(category);
    });

    return () => observer.disconnect();
  }, [visibleCategories]);

  return (
    <section
      id="skills"
      className="relative py-24 lg:py-32"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-navy" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Skills & <span className="text-gradient">Tools</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Technologies and practices I use to build production-grade cloud systems
          </p>
        </div>

        {/* Skills categories */}
        <div className="grid lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => {
            const CategoryIcon = category.icon;
            const isVisible = visibleCategories.includes(categoryIndex);

            return (
              <div
                key={categoryIndex}
                ref={(el) => { categoryRefs.current[categoryIndex] = el; }}
                className={`relative transition-all duration-600 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${categoryIndex * 0.15}s` }}
              >
                {/* Card background */}
                <div className="absolute inset-0 rounded-2xl bg-white/[0.02] border border-white/10 backdrop-blur-sm" />

                {/* Content */}
                <div className="relative z-10 p-6">
                  {/* Category header */}
                  <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/10">
                    <div className="w-10 h-10 rounded-lg bg-primary-blue/10 border border-primary-blue/20 flex items-center justify-center">
                      <CategoryIcon className="w-5 h-5 text-primary-blue" />
                    </div>
                    <h3 className="font-display text-lg font-semibold text-white">
                      {category.title}
                    </h3>
                  </div>

                  {/* Skills list */}
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => {
                      const SkillIcon = skillIcons[skill.name] || Code2;
                      return (
                        <div
                          key={skillIndex}
                          className="group relative flex items-center gap-2 px-3 py-2 rounded-lg bg-white/5 border border-white/10 hover:border-primary-blue/30 hover:bg-primary-blue/5 transition-all duration-300"
                          title={`${skill.name} - ${skill.level}`}
                        >
                          <SkillIcon className="w-3.5 h-3.5 text-gray-500 group-hover:text-primary-blue transition-colors" />
                          <span className="text-sm text-gray-300 group-hover:text-white transition-colors">
                            {skill.name}
                          </span>
                          
                          {/* Level indicator */}
                          <div className="absolute -top-1 -right-1 w-2 h-2 rounded-full">
                            <div className={`w-full h-full rounded-full ${
                              skill.level === 'Advanced' 
                                ? 'bg-accent-cyan' 
                                : 'bg-primary-blue/60'
                            }`} />
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Connector line (except for last item) */}
                {categoryIndex < skillCategories.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-px">
                    <div className="w-full h-full bg-gradient-to-r from-white/20 to-transparent" />
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Legend */}
        <div className="flex justify-center gap-6 mt-8">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-accent-cyan" />
            <span className="text-sm text-gray-400">Advanced</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-primary-blue/60" />
            <span className="text-sm text-gray-400">Intermediate</span>
          </div>
        </div>
      </div>
    </section>
  );
}
