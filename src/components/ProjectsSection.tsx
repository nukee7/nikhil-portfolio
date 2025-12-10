import React, { useState } from 'react';
import { ExternalLink, Github, Eye, Filter } from 'lucide-react';

interface ProjectsSectionProps {}

const ProjectsSection: React.FC<ProjectsSectionProps> = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'Cre8Hub – AI-Powered Content Creation Platform',
      description:
        'Backend infrastructure built with Node.js, Express.js, and MongoDB enabling secure authentication and RBAC. Includes a FastAPI-based AI microservice for persona extraction from YouTube transcripts with Redis caching and YouTube Data API integration.',
      image: '/api/placeholder/600/400',
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
      category: 'fullstack',
      githubUrl: 'https://github.com/nukee7', // Replace with actual repo if separate
      liveUrl: 'https://cre8-hub.vercel.app',
      featured: true,
    },
  
    {
      id: 2,
      title: 'Stocksage – AI-Powered Financial Analytics',
      description:
        'End-to-end financial analytics system integrating FastAPI, Streamlit, LangChain, Whisper, and YFinance. Supports real-time stock tracking, automated PnL analysis, dataset-upload workflows, and a modular AI pipeline with tool-calling agents.',
      image: '/api/placeholder/600/400',
      technologies: [
        'Python',
        'FastAPI',
        'LangChain',
        'Streamlit',
        'YFinance API',
        'TensorFlow',
      ],
      category: 'ai-ml',
      githubUrl: 'https://github.com/nukee7/stocksage',
      liveUrl: 'https://github.com/nukee7/stocksage', // No live link provided
      featured: true,
    },
  
    {
      id: 3,
      title: 'FitForge – Full-Stack Fitness Tracking App',
      description:
        'A fitness tracking web app with routine creation, workout logs, analytics dashboards, and a responsive React interface. Backend built with Node.js/Express and MongoDB featuring JWT auth, role-based access, and a searchable exercise database.',
      image: '/api/placeholder/600/400',
      technologies: [
        'React',
        'TypeScript',
        'Node.js',
        'Express.js',
        'MongoDB',
        'JWT',
      ],
      category: 'fullstack',
      githubUrl: 'https://github.com/nukee7', // Replace with actual repo once available
      liveUrl: '#', // Add live link when deployed
      featured: false,
    },
  ];

  const filterOptions = [
    { id: 'all', label: 'All Projects' },
    { id: 'fullstack', label: 'Full Stack' },
    { id: 'frontend', label: 'Frontend' },
    { id: 'backend', label: 'Backend' },
    { id: 'mobile', label: 'Mobile' },
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="section-padding bg-section-gradient">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            A showcase of my recent work and personal projects that demonstrate my skills and passion for development
          </p>

          {/* Filter buttons */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            <Filter className="w-5 h-5 text-muted-foreground mr-2 mt-2" aria-hidden="true" />
            {filterOptions.map((option) => (
              <button
                key={option.id}
                onClick={() => setActiveFilter(option.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeFilter === option.id
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-muted/50 text-muted-foreground hover:bg-primary/10 hover:text-primary'
                }`}
                aria-pressed={activeFilter === option.id}
              >
                {option.label}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
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
                  loading="lazy"
                />
                
                {/* Overlay with action buttons */}
                <div className="absolute inset-0 bg-background/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="glass-card p-3 hover:glow transition-all duration-300"
                      aria-label={`View live demo of ${project.title}`}
                    >
                      <Eye className="w-5 h-5 text-primary" aria-hidden="true" />
                    </a>
                  )}
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="glass-card p-3 hover:glow transition-all duration-300"
                    aria-label={`View source code of ${project.title}`}
                  >
                    <Github className="w-5 h-5 text-primary" aria-hidden="true" />
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
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium border border-primary/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action buttons */}
                <div className="flex gap-4">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-primary hover:text-secondary transition-colors duration-300 font-medium"
                    >
                      <ExternalLink className="w-4 h-4" aria-hidden="true" />
                      Live Demo
                    </a>
                  )}
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors duration-300 font-medium"
                  >
                    <Github className="w-4 h-4" aria-hidden="true" />
                    Source Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-6">
            Want to see more of my work or discuss a potential project?
          </p>
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn-gradient"
            aria-label="Get in touch to discuss projects"
          >
            Let's Work Together
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;