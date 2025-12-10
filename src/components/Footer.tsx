import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const socialLinks = [
    { icon: Github, href: 'https://github.com/nukee7', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com/in/nikhil-kumar-678b59286', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:nikhil14807@gmail.com', label: 'Email' },
  ];

  return (
    <footer className="bg-muted/20 border-t border-border py-10">
      <div className="max-w-4xl mx-auto px-4">

        {/* Let's Connect Section */}
        <div className="text-center mb-8">
          <h3 className="text-xl font-semibold text-foreground mb-4">Let's Connect</h3>
          <a
            href="mailto:nikhil14807@gmail.com"
            className="block text-muted-foreground hover:text-primary transition-colors duration-300 mb-4"
          >
            nikhil14807@gmail.com
          </a>

          {/* Availability Indicator */}
          <div className="flex justify-center items-center mb-6">
            <div className="w-3 h-3 bg-green-500 rounded-full mr-2 animate-pulse"></div>
            <span className="text-muted-foreground">Available for new projects</span>
          </div>

          {/* Social Icons */}
          <div className="flex justify-center space-x-5 mb-8">
            {socialLinks.map((social, index) => {
              const IconComponent = social.icon;
              return (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-10 h-10 glass-card flex items-center justify-center hover:glow transition-all duration-300 group"
                >
                  <IconComponent
                    className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors duration-300"
                  />
                </a>
              );
            })}
          </div>
        </div>

        {/* Back to Top */}
        <div className="text-center border-t border-border pt-6">
          <button
            onClick={scrollToTop}
            className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
            aria-label="Back to top"
          >
            Back to Top ↑
          </button>
        </div>

      </div>
    </footer>
  );
};

export default Footer;