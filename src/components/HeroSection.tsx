import React, { useEffect, useState } from "react";
import { Github, Linkedin, Mail } from "lucide-react";
import {
  SiJavascript,
  SiReact,
  SiNodedotjs,
  SiMongodb,
  SiPostgresql,
  SiPython,
  SiFastapi,
  SiLangchain,
  SiPrisma,
  SiDocker,
  SiKubernetes,
  SiCplusplus,
} from "react-icons/si";

const roles = ["Pre Final Year Student", "ML Engineer", "Full Stack Developer"];

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
    { name: "PostgreSQL", icon: <SiPostgresql className="text-sky-400" /> },
    { name: "Python", icon: <SiPython className="text-blue-500" /> },
    { name: "FastAPI", icon: <SiFastapi className="text-teal-400" /> },
    { name: "LangChain", icon: <SiLangchain className="text-purple-500" /> },
    { name: "Prisma", icon: <SiPrisma className="text-purple-500" /> },
    { name: "Docker", icon: <SiDocker className="text-sky-400" /> },
    { name: "Kubernetes", icon: <SiKubernetes className="text-blue-500" /> },
    { name: "C++", icon: <SiCplusplus className="text-blue-400" /> },
  ];

  return (
    <section
      id="about"
      className="relative flex min-h-[100svh] items-center overflow-hidden bg-transparent px-4 pb-6 pt-20 text-foreground scroll-mt-24 sm:px-6 md:pt-24"
    >
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-56 h-56 bg-primary/5 rounded-full blur-3xl animate-float" />
        <div
          className="absolute bottom-1/3 right-1/4 w-72 h-72 bg-secondary/5 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "2s" }}
        />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl">
        {/* INTRO GRID */}
        <div className="grid grid-cols-1 items-center gap-6 lg:grid-cols-[auto_1fr] lg:gap-10">
          {/* Profile */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative group">
              <div className="absolute -inset-1 bg-primary/20 rounded-full blur opacity-50 group-hover:opacity-75 transition" />
              <img
                src="/profile.png"
                alt="Nikhil Kumar"
                className="relative h-32 w-32 rounded-full border-4 border-background object-cover shadow-xl sm:h-40 sm:w-40 md:h-52 md:w-52"
              />
            </div>
          </div>

          {/* Intro Content */}
          <div className="space-y-4 text-center lg:text-left">
            <div className="flex justify-center gap-3 lg:justify-start">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass rounded-lg p-3 transition-transform hover:scale-105"
                >
                  <link.icon className="w-5 h-5" />
                </a>
              ))}
            </div>

            <h1 className="text-3xl font-semibold md:text-5xl">
              Hello, I&apos;m Nikhil
            </h1>

            <h2 className="text-xl md:text-2xl text-muted-foreground font-medium h-8">
              <span
                className="inline-block pr-1"
                style={{ borderRight: "2px solid rgba(255,255,255,0.8)" }}
              >
                {text}
              </span>
            </h2>

            <p className="mx-auto max-w-3xl text-sm leading-relaxed text-foreground/80 sm:text-base md:text-lg lg:mx-0">
              I&apos;m a CS undergrad passionate about building intelligent
              systems that merge machine learning, full-stack engineering, and
              real-time applications.
            </p>
          </div>
        </div>

        {/* Skills */}
        <div className="mt-8 md:mt-10">
          <div className="w-full">
            <div className="mb-3 text-center md:text-left">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-primary">
                Core Skills
              </p>
            </div>

            <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-6">
              {skills.map((skill) => (
                <div
                  key={skill.name}
                  className="flex min-h-14 items-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-3 py-2 backdrop-blur-sm transition-colors hover:border-primary/35 hover:bg-white/[0.08]"
                >
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white/[0.06] text-xl">
                    {skill.icon}
                  </span>
                  <span className="text-sm font-medium leading-tight text-foreground/90">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
