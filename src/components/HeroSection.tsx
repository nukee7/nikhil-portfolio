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
    { icon: Github, href: 'https://github.com/johndoe', label: 'GitHub Profile' },
    { icon: Linkedin, href: 'https://linkedin.com/in/johndoe', label: 'LinkedIn Profile' },
    { icon: Mail, href: 'mailto:john.doe@email.com', label: 'Email Contact' },
  ];

  // 🔹 Typewriter Effect Logic
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

  // 🔹 Skills data
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
      className="min-h-[80vh] flex flex-col items-center justify-center py-12 px-6 relative overflow-hidden"
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
        {/* Top Section (Photo + Text) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
          {/* Left Column - Image */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative mb-4 scale-in" style={{ animationDelay: '0.3s' }}>
              <div className="w-56 h-56 md:w-64 md:h-64 rounded-full overflow-hidden glass-card p-1.5">
                <img
                  src="/image.png"
                  alt="Nikhil Kumar - Professional headshot"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <div className="absolute inset-0 w-56 h-56 md:w-64 md:h-64 rounded-full border border-primary/20 animate-pulse"></div>
            </div>
          </div>

          {/* Right Column - Content (closer to image) */}
          <div className="text-center lg:text-left lg:ml-[-20px]">
            <h1 className="text-3xl md:text-5xl font-bold mb-3 fade-in">
              <span className="block text-foreground/90 mb-1">Hello, I'm Nikhil</span>
            </h1>

            {/* Typing animation */}
            <h2
              className="text-xl md:text-2xl text-primary font-semibold mb-6 whitespace-nowrap"
              style={{
                minHeight: '1.8rem',
                borderRight: '2px solid rgba(255,255,255,0.8)',
                display: 'inline-block',
                animation: 'blink 1s step-end infinite',
              }}
            >
              {text}
            </h2>

            <div className="mb-6 scale-in" style={{ animationDelay: '0.3s' }}>
              <p className="text-base md:text-lg text-foreground/80 leading-relaxed mb-3">
                I'm a passionate full stack developer with 5+ years of experience creating
                beautiful, functional, and user-centered digital experiences. I specialize
                in React, Node.js, and modern web technologies.
              </p>
              <p className="text-sm md:text-base text-muted-foreground">
                Currently building amazing products at{' '}
                <span className="text-primary font-semibold">TechCorp</span> and always
                open to new opportunities and collaborations.
              </p>
            </div>
          </div>
        </div>

        {/* 🔹 Skills Row (full-width below both columns) */}
        <div className="mt-10 flex flex-wrap justify-center gap-6 md:gap-10">
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