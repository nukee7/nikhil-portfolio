import React, { useState } from 'react';
import { ExternalLink, Github, Eye, Filter } from 'lucide-react';

interface ProjectsSectionProps {}

const ProjectsSection: React.FC<ProjectsSectionProps> = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A full-featured e-commerce platform with React, Node.js, and Stripe integration. Features include user authentication, shopping cart, payment processing, and admin dashboard.',
      image: '/api/placeholder/600/400',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe', 'JWT'],
      category: 'fullstack',
      githubUrl: 'https://github.com/johndoe/ecommerce-platform',
      liveUrl: 'https://ecommerce-demo.johndoe.com',
      featured: true,
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.',
      image: '/api/placeholder/600/400',
      technologies: ['Vue.js', 'Express.js', 'Socket.io', 'PostgreSQL'],
      category: 'frontend',
      githubUrl: 'https://github.com/johndoe/task-manager',
      liveUrl: 'https://tasks.johndoe.com',
      featured: true,
    },
    {
      id: 3,
      title: 'Weather Dashboard',
      description: 'A responsive weather application with location-based forecasts, interactive maps, and detailed weather analytics.',
      image: '/api/placeholder/600/400',
      technologies: ['React', 'TypeScript', 'OpenWeather API', 'Chart.js'],
      category: 'frontend',
      githubUrl: 'https://github.com/johndoe/weather-dashboard',
      liveUrl: 'https://weather.johndoe.com',
      featured: false,
    },
    {
      id: 4,
      title: 'API Gateway Service',
      description: 'A microservices API gateway with rate limiting, authentication middleware, and comprehensive logging system.',
      image: '/api/placeholder/600/400',
      technologies: ['Node.js', 'Express.js', 'Redis', 'Docker', 'AWS'],
      category: 'backend',
      githubUrl: 'https://github.com/johndoe/api-gateway',
      liveUrl: null,
      featured: false,
    },
    {
      id: 5,
      title: 'Social Media Analytics',
      description: 'A data visualization dashboard for social media metrics with real-time updates and customizable reports.',
      image: '/api/placeholder/600/400',
      technologies: ['React', 'D3.js', 'Python', 'FastAPI', 'PostgreSQL'],
      category: 'fullstack',
      githubUrl: 'https://github.com/johndoe/social-analytics',
      liveUrl: 'https://analytics.johndoe.com',
      featured: true,
    },
    {
      id: 6,
      title: 'Mobile Banking UI',
      description: 'A modern mobile banking interface design with intuitive user experience and comprehensive financial features.',
      image: '/api/placeholder/600/400',
      technologies: ['React Native', 'Expo', 'Redux', 'Styled Components'],
      category: 'mobile',
      githubUrl: 'https://github.com/johndoe/banking-ui',
      liveUrl: null,
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