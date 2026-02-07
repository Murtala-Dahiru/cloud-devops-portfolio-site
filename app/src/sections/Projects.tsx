import { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Github, ExternalLink, ChevronRight } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'AWS Production Platform',
    subtitle: 'Terraform-Driven Infrastructure',
    problem: 'Design and manage a production-ready AWS environment using Infrastructure as Code.',
    architecture: [
      'Terraform modules and environments',
      'VPC networking with public/private subnets',
      'ECS services for containerized workloads',
      'RDS database with automated backups',
      'IAM & security boundaries',
      'CI/CD-ready structure',
    ],
    demonstrates: [
      'Real Infrastructure as Code',
      'Modular Terraform design',
      'Production cloud thinking',
    ],
    image: '/project1-aws-platform.jpg',
    githubUrl: 'https://github.com/Murtala-Dahiru/AWS-Production-Platform.git',
    tags: ['Terraform', 'AWS', 'ECS', 'RDS', 'VPC'],
  },
  {
    id: 2,
    title: 'Multi-Region Disaster Recovery',
    subtitle: 'High Availability System',
    problem: 'Ensure high availability and business continuity during regional outages.',
    architecture: [
      'Primary and DR AWS regions',
      'RDS cross-region read replicas',
      'Route 53 health checks and failover',
      'Lambda-based failover orchestration',
      'SNS notifications for incidents',
    ],
    demonstrates: [
      'Reliability engineering',
      'Disaster recovery planning',
      'Automated failover logic',
      'Real-world cloud resilience',
    ],
    image: '/project2-disaster-recovery.jpg',
    githubUrl: 'https://github.com/Murtala-Dahiru/-Multi-Region-Disaster-Recovery-System.git',
    tags: ['DR', 'Route 53', 'Lambda', 'RDS', 'SNS'],
  },
  {
    id: 3,
    title: 'Cost Optimization Platform',
    subtitle: 'FinOps & Governance',
    problem: 'Help organizations monitor, analyze, and reduce unnecessary cloud spending.',
    architecture: [
      'Lambda-based cost scanners',
      'Idle resource detection',
      'Rightsizing analysis',
      'Tag compliance enforcement',
      'Automated alerts and reporting',
    ],
    demonstrates: [
      'FinOps mindset',
      'Cost-aware engineering',
      'Automation for efficiency',
      'Cloud governance principles',
    ],
    image: '/project3-cost-optimization.jpg',
    githubUrl: 'https://github.com/Murtala-Dahiru/Cost-Optimization-FinOps-Platform.git',
    tags: ['FinOps', 'Lambda', 'Cost Explorer', 'Python'],
  },
  {
    id: 4,
    title: 'Serverless Data Pipeline',
    subtitle: 'Event-Driven Architecture',
    problem: 'Process data and events at scale without managing servers.',
    architecture: [
      'API Gateway webhooks',
      'S3 event triggers',
      'Lambda processing functions',
      'SQS queues for buffering',
      'Step Functions workflows',
      'DynamoDB streams',
    ],
    demonstrates: [
      'Serverless architecture design',
      'Event-driven systems',
      'Decoupled and scalable workflows',
      'Modern cloud-native patterns',
    ],
    image: '/project4-serverless-pipeline.jpg',
    githubUrl: 'https://github.com/Murtala-Dahiru/Serverless-Data-Pipeline-Event-Driven-Architecture-.git',
    tags: ['Lambda', 'S3', 'SQS', 'Step Functions', 'DynamoDB'],
  },
];

export default function Projects() {
  const [visibleProjects, setVisibleProjects] = useState<number[]>([]);
  const projectRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = projectRefs.current.indexOf(entry.target as HTMLDivElement);
            if (index !== -1 && !visibleProjects.includes(index)) {
              setVisibleProjects((prev) => [...prev, index]);
            }
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -100px 0px' }
    );

    projectRefs.current.forEach((project) => {
      if (project) observer.observe(project);
    });

    return () => observer.disconnect();
  }, [visibleProjects]);

  return (
    <section
      id="projects"
      className="relative py-24 lg:py-32"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-navy" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary-blue/5 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Production-grade cloud architectures demonstrating real-world engineering capabilities
          </p>
        </div>

        {/* Projects list */}
        <div className="space-y-20">
          {projects.map((project, index) => {
            const isVisible = visibleProjects.includes(index);
            const isEven = index % 2 === 0;

            return (
              <div
                key={project.id}
                ref={(el) => { projectRefs.current[index] = el; }}
                className={`transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                }`}
                style={{ transitionDelay: '0.1s' }}
              >
                <div className={`grid lg:grid-cols-2 gap-8 lg:gap-12 items-center ${isEven ? '' : 'lg:flex-row-reverse'}`}>
                  {/* Image */}
                  <div className={`relative group ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                    <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-dark-gray">
                      {/* Image container */}
                      <div className="aspect-video overflow-hidden">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>
                      
                      {/* Overlay gradient */}
                      <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-transparent to-transparent opacity-60" />
                      
                      {/* Blueprint grid overlay on hover */}
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                        <div 
                          className="absolute inset-0"
                          style={{
                            backgroundImage: `linear-gradient(rgba(44, 80, 238, 0.1) 1px, transparent 1px),
                                             linear-gradient(90deg, rgba(44, 80, 238, 0.1) 1px, transparent 1px)`,
                            backgroundSize: '20px 20px'
                          }}
                        />
                      </div>
                    </div>

                    {/* Floating tags */}
                    <div className="flex flex-wrap gap-2 mt-4">
                      {project.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-3 py-1 text-xs font-medium rounded-full bg-primary-blue/10 text-primary-blue border border-primary-blue/20"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Content */}
                  <div className={`${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                    {/* Title */}
                    <div className="mb-4">
                      <span className="text-accent-cyan text-sm font-medium uppercase tracking-wider">
                        {project.subtitle}
                      </span>
                      <h3 className="font-display text-2xl sm:text-3xl font-bold text-white mt-1">
                        {project.title}
                      </h3>
                    </div>

                    {/* Problem statement */}
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-gray-300 uppercase tracking-wider mb-2">
                        Problem
                      </h4>
                      <p className="text-gray-400">
                        {project.problem}
                      </p>
                    </div>

                    {/* Architecture */}
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-gray-300 uppercase tracking-wider mb-2">
                        Architecture & Features
                      </h4>
                      <ul className="space-y-1">
                        {project.architecture.map((item, itemIndex) => (
                          <li key={itemIndex} className="flex items-start gap-2 text-gray-400 text-sm">
                            <ChevronRight className="w-4 h-4 text-primary-blue mt-0.5 flex-shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* What it demonstrates */}
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-gray-300 uppercase tracking-wider mb-2">
                        What This Demonstrates
                      </h4>
                      <ul className="space-y-1">
                        {project.demonstrates.map((item, itemIndex) => (
                          <li key={itemIndex} className="flex items-start gap-2 text-gray-400 text-sm">
                            <div className="w-1.5 h-1.5 rounded-full bg-accent-cyan mt-1.5 flex-shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* CTA Buttons */}
                    <div className="flex flex-wrap gap-3">
                      <Button
                        variant="outline"
                        size="sm"
                        className="border-white/20 text-white hover:bg-white/10"
                        onClick={() => window.open(project.githubUrl, '_blank')}
                      >
                        <Github className="w-4 h-4 mr-2" />
                        View Code
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        className="border-primary-blue/30 text-primary-blue hover:bg-primary-blue/10"
                        onClick={() => window.open(project.githubUrl, '_blank')}
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Documentation
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Divider */}
                {index < projects.length - 1 && (
                  <div className="hidden lg:block mt-20">
                    <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
