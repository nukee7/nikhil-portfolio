import React from 'react';
import { MapPin, Calendar, ExternalLink } from 'lucide-react';

interface ExperienceSectionProps {}

const ExperienceSection: React.FC<ExperienceSectionProps> = () => {
  const experiences = [
    {
      "title": "AI/ML Intern",
      "company": "Hindustan Aeronauticals Limited",
      "location": "Bangalore, India",
      "period": "Jun 2025 – Aug 2025",
      "type": "Internship",
      "description": [
        "Developed a real-time cockpit voice detection and command recognition system for aircraft environments, focused on reliable voice-driven interaction.",
        "Integrated ASR, VAD, TTS, and low-latency streaming pipelines to handle continuous cockpit audio input and responsive command feedback.",
        "Engineered FastAPI and WebSocket backend services for bi-directional audio streaming between the ASR model and the user-facing interface.",
        "Implemented fuzzy NLP command matching with difflib and Whisper embeddings, then optimized ASR inference to reduce overall response latency."
      ],
      "technologies": [
        "Python",
        "Whisper",
        "FastAPI",
        "WebSocket",
        "Streamlit",
        "PyAudio",
        "VAD",
        "NLP",
        "TTS",
        "NumPy",
        "AsyncIO"
      ]
    },
    {
      "title": "Machine Learning Intern",
      "company": "Indian Institute of Technology, Dharwad",
      "location": "Dharwad, India",
      "period": "Nov 2024 - Dec 2024",
      "type": "Internship",
      "description": [
        "Implemented classical machine learning classifiers including k-NN, Reference Template methods, Bayes classifiers, and Gaussian Mixture Models.",
        "Compared Euclidean and Mahalanobis distance metrics to study class separability, model behavior, and resulting decision boundaries.",
        "Evaluated classification models on artificial and real-world datasets using structured Python-based machine learning pipelines.",
        "Built reproducible, well-documented implementations that supported clear research validation and easier review of experimental results."
      ],
      "technologies": [
        "Python", "NumPy", "Pandas", "Scikit-Learn", 
        "Gaussian Mixture Models", "k-NN", 
        "Probability-Based Classifiers", "Jupyter"
      ]
    }
  ];

  return (
    <section id="experience" className="section-padding">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground">
            Experience
          </h2>
        </div>

        {/* Experience items */}
        <div className="space-y-5">
          {experiences.map((exp, index) => (
            <div key={index} className="glass-card">
                    {/* Header */}
                    <div className="mb-4">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                        <h3 className="text-xl md:text-2xl font-semibold text-foreground">{exp.title}</h3>
                        <span className="text-primary font-medium text-sm px-3 py-1 bg-primary/10 rounded-full border border-primary/20 mt-2 sm:mt-0 self-start">
                          {exp.type}
                        </span>
                      </div>
                      
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-muted-foreground mb-2">
                        <div className="flex items-center">
                          <span className="font-semibold text-foreground">{exp.company}</span>
                          {exp.website && (
                            <a
                              href={exp.website}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="ml-2 text-primary hover:text-secondary transition-colors duration-300"
                              aria-label={`Visit ${exp.company} website`}
                            >
                              <ExternalLink className="w-4 h-4" aria-hidden="true" />
                            </a>
                          )}
                        </div>
                        <span className="hidden sm:inline">•</span>
                        <div className="flex items-center">
                          <MapPin className="w-4 h-4 mr-1" aria-hidden="true" />
                          {exp.location}
                        </div>
                        <span className="hidden sm:inline">•</span>
                        <div className="flex items-center">
                          <Calendar className="w-4 h-4 mr-1" aria-hidden="true" />
                          {exp.period}
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <div className="mb-4 space-y-2">
                      {exp.description.map((line, lineIndex) => (
                        <div key={lineIndex} className="flex items-start gap-3">
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                          <p className="text-foreground/80">{line}</p>
                        </div>
                      ))}
                    </div>

                    {/* Technologies */}
                    <div>
                      <p className="text-sm font-medium text-muted-foreground mb-2">Technologies:</p>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-2 py-1 bg-muted/50 text-foreground text-xs rounded border border-border hover:bg-primary/10 hover:border-primary/20 transition-colors duration-300"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
