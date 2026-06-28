import React from 'react';
import { ExternalLink, GitHubLogoIcon } from 'lucide-react';
import { Eye, Layers, Brain, Code2 } from 'lucide-react';

const ProjectsSection: React.FC = () => {
  const projects = [
    {
      id: 1,
      title: 'Cre8Hub',
      subtitle: 'AI-Powered Content Creation Platform',
      description:
        'Backend infrastructure built with Node.js, Express.js, and MongoDB enabling secure authentication and RBAC. Includes a FastAPI-based AI microservice for persona extraction from YouTube transcripts with Redis caching and YouTube Data API integration.',
      image: '/cre8hub.png',
      technologies: [
        'Node.js',
        'Express.js',
        'FastAPI',
        'MongoDB',
        'Redis',
        'JWT',
        'Axios',
        'YouTube Data API',
      ],
      githubUrl: 'https://github.com/nukee7',
      liveUrl: 'https://cre8-hub.vercel.app',
      category: 'Full-Stack',
      categoryIcon: Layers,
    },
    {
      id: 2,
      title: 'Stocksage',
      subtitle: 'AI-Powered Financial Analytics',
      description:
        'End-to-end financial analytics system integrating FastAPI, Streamlit, LangChain, Whisper, and YFinance. Supports real-time stock tracking, automated PnL analysis, dataset-upload workflows, and a modular AI pipeline with tool-calling agents.',
      image: '/stocksage.png',
      technologies: [
        'Python',
        'FastAPI',
        'LangChain',
        'Streamlit',
        'YFinance API',
        'TensorFlow',
      ],
      githubUrl: 'https://github.com/nukee7/stocksage',
      liveUrl: 'https://github.com/nukee7/stocksage',
      category: 'AI / ML',
      categoryIcon: Brain,
    },
    {
      id: 3,
      title: 'Automate',
      subtitle: 'Full-Stack Automation Platform',
      description:
        'An automation platform for streamlining workflows and tasks. Built with a modern full-stack architecture featuring a responsive React interface and a robust backend.',
      image: '/automate.png',
      technologies: [
        'React',
        'TypeScript',
        'Node.js',
        'Express.js',
        'MongoDB',
        'JWT',
      ],
      githubUrl: 'https://github.com/nukee7',
      liveUrl: '#',
      category: 'Full-Stack',
      categoryIcon: Code2,
    },
  ];

  return (
    <section id="projects" className="section-padding bg-transparent">
      <div className="max-w-7xl mx-auto">

        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-foreground">
            Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A showcase of my recent work and personal projects demonstrating my expertise
            in full-stack development and machine learning.
          </p>
        </div>

        {/* Projects — vertical stack */}
        <div className="flex flex-col gap-10">
          {projects.map((project, index) => {
            const CategoryIcon = project.categoryIcon;
            return (
              <div
                key={project.id}
                className="glass-card group relative overflow-hidden flex flex-col md:flex-row gap-6"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Project image — left side */}
                <div className="relative overflow-hidden rounded-xl bg-muted/20 md:w-72 h-48 md:h-auto shrink-0">
                  <img
                    src={project.image}
                    alt={`Screenshot of ${project.title}`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />

                  {/* Overlay actions */}
                  <div className="absolute inset-0 bg-background/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                    {project.liveUrl && project.liveUrl !== '#' && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="glass-card p-3 hover:glow transition-all duration-300"
                      >
                        <Eye className="w-5 h-5 text-primary" />
                      </a>
                    )}
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="glass-card p-3 hover:glow transition-all duration-300"
                    >
                      <svg className="w-5 h-5 text-primary" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
                    </a>
                  </div>
                </div>

                {/* Project content — right side */}
                <div className="flex flex-col flex-1 min-w-0">
                  {/* Category badge & title */}
                  <div className="flex items-center gap-2 mb-2">
                    <span className="flex items-center gap-1.5 bg-primary/15 text-primary px-2.5 py-0.5 rounded-full text-xs font-semibold border border-primary/20 tracking-wide uppercase">
                      <CategoryIcon className="w-3 h-3" />
                      {project.category}
                    </span>
                  </div>

                  <h3 className="text-xl font-semibold text-foreground mb-1 group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-3 font-medium">
                    {project.subtitle}
                  </p>

                  {/* Description */}
                  <p className="text-foreground/80 text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-0.5 bg-primary/10 text-primary rounded-full text-xs font-medium border border-primary/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Links — pinned to bottom */}
                  <div className="flex gap-4 mt-auto pt-2 border-t border-border/40">
                    {project.liveUrl && project.liveUrl !== '#' && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-primary hover:text-secondary transition-colors duration-300 text-sm font-medium"
                      >
                        <ExternalLink className="w-4 h-4" />
                        Live Demo
                      </a>
                    )}
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors duration-300 text-sm font-medium"
                    >
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
                      Source Code
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default ProjectsSection;
