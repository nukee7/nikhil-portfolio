import React, { useEffect, useState } from "react";
import { Github, Linkedin, Mail } from "lucide-react";
import {
  SiJavascript,
  SiReact,
  SiNodedotjs,
  SiMongodb,
  SiPython,
  SiFastapi,
  SiLangchain,
  SiPrisma,
} from "react-icons/si";

const HeroSection: React.FC = () => {
  const socialLinks = [
    { icon: Github, href: "https://github.com/nukee7", label: "GitHub Profile" },
    {
      icon: Linkedin,
      href: "https://linkedin.com/in/nikhil-kumar-678b59286",
      label: "LinkedIn Profile",
    },
    { icon: Mail, href: "mailto:nikhil14807@gmail.com", label: "Email Contact" },
  ];

  const roles = ["Pre Final Year Student", "ML Engineer", "Full Stack Developer"];
  const [text, setText] = useState("");
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
  }, [charIndex, isDeleting, roleIndex, roles]);

  const skills = [
    { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
    { name: "React", icon: <SiReact className="text-blue-400" /> },
    { name: "Node.js", icon: <SiNodedotjs className="text-green-500" /> },
    { name: "MongoDB", icon: <SiMongodb className="text-green-600" /> },
    { name: "PostgreSQL", icon: <SiMongodb className="text-green-600" /> },
    { name: "Python", icon: <SiPython className="text-blue-500" /> },
    { name: "FastAPI", icon: <SiFastapi className="text-teal-400" /> },
    { name: "LangChain", icon: <SiLangchain className="text-purple-500" /> },
    { name: "Prisma", icon: <SiPrisma className="text-purple-500" /> },
  ];

  return (
    <section
      id="about"
      className="relative min-h-screen bg-transparent text-foreground overflow-hidden px-6 pt-32 md:pt-36 pb-12 scroll-mt-24"
    >
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-56 h-56 bg-primary/15 rounded-full blur-3xl animate-float" />
        <div
          className="absolute bottom-1/3 right-1/4 w-72 h-72 bg-secondary/15 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "2s" }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full pt-16 md:pt-24">
        {/* INTRO GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-[auto_1fr] gap-10 items-center">
          {/* Profile */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary rounded-full blur opacity-75 group-hover:opacity-100 transition" />
              <img
                src="/profile.png"
                alt="Nikhil Kumar"
                className="relative w-48 h-48 md:w-64 md:h-64 rounded-full object-cover border-4 border-background shadow-xl"
              />
            </div>
          </div>

          {/* Intro Content */}
          <div className="space-y-6">
            <div className="flex gap-4 justify-center lg:justify-start">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-lg glass-card hover:scale-110 transition-transform"
                >
                  <link.icon className="w-5 h-5" />
                </a>
              ))}
            </div>

            <h1 className="text-3xl md:text-5xl font-bold">
              Hello, I&apos;m Nikhil
            </h1>

            <h2 className="text-xl md:text-2xl text-primary font-semibold h-8">
              <span
                className="inline-block pr-1"
                style={{ borderRight: "2px solid rgba(255,255,255,0.8)" }}
              >
                {text}
              </span>
            </h2>

            <p className="text-base md:text-lg text-foreground/80 leading-relaxed">
              I&apos;m a CS undergrad passionate about building intelligent
              systems that merge machine learning, full-stack engineering, and
              real-time applications.
            </p>
          </div>
        </div>

        {/* 🔥 CONTINUOUS SKILLS MARQUEE */}
        <div className="mt-24 md:mt-32 relative overflow-hidden">
          {/* Fade edges */}
          <div className="absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-background to-transparent z-10" />
          <div className="absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-background to-transparent z-10" />

          <div className="flex gap-6 animate-marquee hover:[animation-play-state:paused]">
            {[...skills, ...skills].map((skill, index) => (
              <div
                key={`${skill.name}-${index}`}
                className="flex items-center gap-2 min-w-max px-5 py-2 rounded-xl glass-card"
              >
                <span className="text-2xl">{skill.icon}</span>
                <span className="text-sm font-medium">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;