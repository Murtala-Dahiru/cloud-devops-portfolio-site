import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Cloud } from 'lucide-react';

const navLinks = [
  { name: 'Specializations', href: '#specializations' },
  { name: 'Projects', href: '#projects' },
  { name: 'Philosophy', href: '#philosophy' },
  { name: 'Skills', href: '#skills' },
  { name: 'About', href: '#about' },
  { name: 'Contact', href: '#contact' },
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-navy/80 backdrop-blur-xl border-b border-white/10'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <a 
              href="#hero" 
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('#hero');
              }}
              className="flex items-center gap-2 group"
            >
              <div className="w-8 h-8 rounded-lg bg-primary-blue/20 border border-primary-blue/30 flex items-center justify-center group-hover:bg-primary-blue/30 transition-colors">
                <Cloud className="w-4 h-4 text-primary-blue" />
              </div>
              <span className="font-display font-semibold text-white hidden sm:block">
                Cloud&DevOps Engineer
              </span>
            </a>

            {/* Desktop navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.href)}
                  className="px-3 py-2 text-sm text-gray-300 hover:text-white transition-colors rounded-lg hover:bg-white/5"
                >
                  {link.name}
                </button>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden lg:block">
              <Button
                size="sm"
                className="bg-primary-blue hover:bg-primary-blue/90 text-white"
                onClick={() => scrollToSection('#contact')}
              >
                Get in Touch
              </Button>
            </div>

            {/* Mobile menu button */}
            <button
              className="lg:hidden p-2 text-gray-300 hover:text-white"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-300 ${
          isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Backdrop */}
        <div 
          className="absolute inset-0 bg-navy/95 backdrop-blur-xl"
          onClick={() => setIsMobileMenuOpen(false)}
        />

        {/* Menu content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full">
          <div className="space-y-4">
            {navLinks.map((link, index) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.href)}
                className={`block text-2xl font-display text-white hover:text-primary-blue transition-all duration-300 ${
                  isMobileMenuOpen 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-4'
                }`}
                style={{ transitionDelay: `${index * 0.05}s` }}
              >
                {link.name}
              </button>
            ))}
          </div>

          <Button
            size="lg"
            className="mt-8 bg-primary-blue hover:bg-primary-blue/90 text-white"
            onClick={() => scrollToSection('#contact')}
          >
            Get in Touch
          </Button>
        </div>
      </div>
    </>
  );
}
