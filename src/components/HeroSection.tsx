import React, { useEffect, useState } from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import {
  SiJavascript,
  SiReact,
  SiNodedotjs,
  SiMongodb,
  SiPython,
  SiFastapi,
  SiLangchain,
} from 'react-icons/si';

interface HeroSectionProps {}

const HeroSection: React.FC<HeroSectionProps> = () => {
  const socialLinks = [
    { icon: Github, href: 'https://github.com/nukee7', label: 'GitHub Profile' },
    { icon: Linkedin, href: 'https://linkedin.com/in/nikhil-kumar-678b59286', label: 'LinkedIn Profile' },
    { icon: Mail, href: 'mailto:nikhil14807@gmail.com', label: 'Email Contact' },
  ];

  const roles = ['Pre Final Year Student', 'ML Engineer', 'Full Stack Developer'];
  const [text, setText] = useState('');
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    const typingSpeed = isDeleting ? 50 : 100;

    const timeout = setTimeout(() => {
      if (!isDeleting && charIndex < currentRole.length) {
        setText(currentRole.slice(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      } else if (isDeleting && charIndex > 0) {
        setText(currentRole.slice(0, charIndex - 1));
        setCharIndex(charIndex - 1);
      } else if (!isDeleting && charIndex === currentRole.length) {
        setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, roleIndex]);

  const skills = [
    { name: 'JavaScript', icon: <SiJavascript className="text-yellow-400" /> },
    { name: 'React', icon: <SiReact className="text-blue-400" /> },
    { name: 'Node.js', icon: <SiNodedotjs className="text-green-500" /> },
    { name: 'MongoDB', icon: <SiMongodb className="text-green-600" /> },
    { name: 'Python', icon: <SiPython className="text-blue-500" /> },
    { name: 'FastAPI', icon: <SiFastapi className="text-teal-400" /> },
    { name: 'LangChain', icon: <SiLangchain className="text-purple-500" /> },
  ];

  return (
    <section
      id="about"
      className="relative overflow-hidden px-6 pt-32 md:pt-36 pb-8 flex items-center scroll-mt-24"
    >
      {/* Subtle background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-56 h-56 bg-primary/15 rounded-full blur-3xl animate-float"></div>
        <div
          className="absolute bottom-1/3 right-1/4 w-72 h-72 bg-secondary/15 rounded-full blur-3xl animate-float"
          style={{ animationDelay: '2s' }}
        ></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10 w-full">
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-start">
          
          {/* Left Column - Image + Social Links */}
          <div className="flex flex-col items-center space-y-5">
            <div className="relative scale-in" style={{ animationDelay: '0.3s' }}>
              <div className="w-64 h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden glass-card p-1.5">
                <img
                  src="/image.png"
                  alt="Nikhil Kumar - Professional headshot"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <div className="absolute inset-0 w-64 h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full border border-primary/20 animate-pulse"></div>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 scale-in" style={{ animationDelay: '0.4s' }}>
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-lg glass-card hover:scale-110 transition-transform"
                  aria-label={link.label}
                >
                  <link.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Right Column - Text Content */}
          <div className="text-center lg:text-left space-y-5">
            <div className="fade-in">
              <h1 className="text-3xl md:text-5xl font-bold mb-2">
                <span className="block text-foreground/90">Hello, I'm Nikhil</span>
              </h1>

              {/* Typing animation */}
              <h2
                className="text-xl md:text-2xl text-primary font-semibold h-8 flex items-center justify-center lg:justify-start"
              >
                <span className="inline-block" style={{ borderRight: '2px solid rgba(255,255,255,0.8)' }}>
                  {text}
                </span>
              </h2>
            </div>

            <div className="space-y-3 scale-in" style={{ animationDelay: '0.3s' }}>
              <p className="text-base md:text-lg text-foreground/80 leading-relaxed">
                I'm a pre-final year B.Tech student in Data Science & Artificial Intelligence at
                IIIT Dharwad, passionate about building intelligent systems that merge machine
                learning, full-stack engineering, and real-time applications. I love working across
                the stack — from designing scalable backend architectures and ML pipelines to
                crafting intuitive user-facing interfaces.
              </p>
              <p className="text-sm md:text-base text-muted-foreground">
                My interests span AI systems, LLMs, agentic workflows, real-time inference, and
                full-stack product development. I'm driven by a desire to ship meaningful projects,
                solve real problems with AI, and constantly push my technical boundaries.
              </p>
            </div>
          </div>
        </div>

        {/* Skills - Full Width Below */}
        <div className="mt-6 pt-5 border-t border-primary/10">
          <div className="flex flex-wrap justify-center gap-5 md:gap-8">
            {skills.map((skill) => (
              <div
                key={skill.name}
                className="flex flex-col items-center text-center transition-transform hover:scale-110"
              >
                <div className="text-4xl md:text-5xl">{skill.icon}</div>
                <p className="text-sm md:text-base text-foreground mt-2">{skill.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Inline CSS for cursor blink */}
      <style>
        {`
          @keyframes blink {
            50% { border-color: transparent; }
          }
        `}
      </style>
    </section>
  );
};

export default HeroSection;