import React, { useState } from 'react';
import { ExternalLink, Github, Eye } from 'lucide-react';

interface ProjectsSectionProps {}

const ProjectsSection: React.FC<ProjectsSectionProps> = () => {
  const projects = [
    {
      id: 1,
      title: 'Cre8Hub – AI-Powered Content Creation Platform',
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
      featured: true,
      category: 'fullstack',
    },

    {
      id: 2,
      title: 'Stocksage – AI-Powered Financial Analytics',
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
      featured: true,
      category: 'ai-ml',
    },

    {
      id: 3,
      title: 'FitForge – Full-Stack Fitness Tracking App',
      description:
        'A fitness tracking web app with routine creation, workout logs, analytics dashboards, and a responsive React interface. Backend built with Node.js/Express and MongoDB featuring JWT auth, role-based access, and a searchable exercise database.',
      image: '/fitforge.png',
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
      featured: false,
      category: 'fullstack',
    },
  ];

  return (
    <section id="projects" className="section-padding bg-section-gradient">
      <div className="max-w-7xl mx-auto">

        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A showcase of my recent work and personal projects demonstrating my expertise
            in full-stack development and machine learning.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`glass-card group relative overflow-hidden ${
                project.featured ? 'md:col-span-2 xl:col-span-2' : ''
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Featured badge */}
              {project.featured && (
                <div className="absolute top-4 right-4 z-10 bg-gradient-to-r from-primary to-secondary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                  Featured
                </div>
              )}

              {/* Project image */}
              <div className="relative overflow-hidden rounded-xl mb-6 bg-muted/20 h-48">
                <img
                  src={project.image}
                  alt={`Screenshot of ${project.title}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />

                {/* Overlay actions */}
                <div className="absolute inset-0 bg-background/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  {project.liveUrl && (
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
                    <Github className="w-5 h-5 text-primary" />
                  </a>
                </div>
              </div>

              {/* Project content */}
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </h3>

                <p className="text-foreground/80 mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium border border-primary/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-primary hover:text-secondary transition-colors duration-300 font-medium"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </a>
                  )}
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors duration-300 font-medium"
                  >
                    <Github className="w-4 h-4" />
                    Source Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ProjectsSection;