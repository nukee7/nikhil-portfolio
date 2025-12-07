import React from 'react';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

interface FooterProps {}

const Footer: React.FC<FooterProps> = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: 'https://github.com/johndoe', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com/in/johndoe', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:john.doe@email.com', label: 'Email' },
  ];

  const quickLinks = [
    { label: 'About', href: '#about' },
    { label: 'Resume', href: '#resume' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId.replace('#', ''));
    if (element) {
      const offset = 80;
      const elementPosition = element.offsetTop - offset;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-muted/20 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand and description */}
          <div className="md:col-span-1">
            <button
              onClick={scrollToTop}
              className="text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent hover:scale-105 transition-transform duration-300 mb-4"
              aria-label="Go to top of page"
            >
              John Doe
            </button>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Full Stack Developer passionate about creating beautiful, functional, 
              and user-centered digital experiences. Always learning, always building.
            </p>
            
            {/* Social links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 glass-card flex items-center justify-center hover:glow transition-all duration-300 group"
                    aria-label={social.label}
                  >
                    <IconComponent 
                      className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors duration-300" 
                      aria-hidden="true" 
                    />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick links */}
          <div className="md:col-span-1">
            <h3 className="text-lg font-semibold text-foreground mb-4">Quick Links</h3>
            <nav className="space-y-2" aria-label="Footer navigation">
              {quickLinks.map((link, index) => (
                <button
                  key={index}
                  onClick={() => scrollToSection(link.href)}
                  className="block text-muted-foreground hover:text-primary transition-colors duration-300"
                >
                  {link.label}
                </button>
              ))}
            </nav>
          </div>

          {/* Contact info and availability */}
          <div className="md:col-span-1">
            <h3 className="text-lg font-semibold text-foreground mb-4">Let's Connect</h3>
            <div className="space-y-4">
              <a
                href="mailto:john.doe@email.com"
                className="block text-muted-foreground hover:text-primary transition-colors duration-300"
              >
                john.doe@email.com
              </a>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                <span className="text-muted-foreground">Available for new projects</span>
              </div>
              <button
                onClick={() => scrollToSection('#contact')}
                className="btn-outline text-sm px-4 py-2"
                aria-label="Go to contact section"
              >
                Get In Touch
              </button>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center text-muted-foreground mb-4 md:mb-0">
              <span>© {currentYear} John Doe. Made with</span>
              <Heart className="w-4 h-4 text-red-500 mx-1 animate-pulse" aria-hidden="true" />
              <span>and lots of coffee</span>
            </div>
            
            <div className="flex space-x-6 text-sm text-muted-foreground">
              <button
                onClick={scrollToTop}
                className="hover:text-primary transition-colors duration-300"
                aria-label="Back to top"
              >
                Back to Top ↑
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;