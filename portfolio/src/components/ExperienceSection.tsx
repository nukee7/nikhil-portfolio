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
      "description": "Developed a real-time cockpit voice detection and command recognition system for aircraft environments, integrating ASR, VAD, TTS, and low-latency streaming pipelines.",
      "achievements": [
        "Built a real-time voice-controlled assistant using Whisper ASR, VAD, and PyAudio for robust trigger-word detection and command recognition in noisy cockpit-like conditions.",
        "Engineered FastAPI and WebSocket-based backend services enabling low-latency bi-directional audio streaming between the ASR model and the Streamlit dashboard.",
        "Integrated backend and frontend Text-to-Speech pipelines (pyttsx3 & browser SpeechSynthesis API) to enable instant audio feedback and command confirmation.",
        "Implemented fuzzy command matching using NLP techniques (difflib & Whisper embeddings), improving natural-language command accuracy and tolerance to pilot speech variations.",
        "Collaborated with engineers to test, benchmark, and optimize ASR inference speed, reducing response latency across the system."
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
      "title": "AI/ML Intern",
      "company": "Indian Institute of Technology, Dharwad",
      "location": "Dharwad, India",
      "period": "Nov 2024 - Dec 2024",
      "type": "Internship",
      "description": "Worked on implementing and evaluating classical machine learning classification algorithms for research under the guidance of IIT Dharwad faculty.",
      "achievements": [
        "Implemented ML classification models including k-NN, Reference Template methods, Bayes Classifier with Gaussian density, and Gaussian Mixture Models (GMM).",
        "Conducted experiments comparing distance metrics (Euclidean, Mahalanobis) to analyze class separability and decision boundaries.",
        "Evaluated models on artificial and real-world datasets using Python-based ML pipelines, improving understanding of supervised learning fundamentals.",
        "Developed reproducible, well-documented implementations in a public GitHub repository demonstrating strong ML engineering practices."
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
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Experience
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            My professional journey and the impact I've made at each step
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary to-secondary transform md:-translate-x-0.5"></div>

          {/* Experience items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div 
                key={index} 
                className={`relative flex flex-col md:flex-row items-start ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-6 md:left-1/2 w-4 h-4 bg-gradient-to-br from-primary to-secondary rounded-full transform md:-translate-x-2 z-10">
                  <div className="w-full h-full bg-gradient-to-br from-primary to-secondary rounded-full animate-pulse"></div>
                </div>

                {/* Content card */}
                <div className={`ml-16 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                  <div className="glass-card">
                    {/* Header */}
                    <div className="mb-4">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                        <h3 className="text-xl md:text-2xl font-bold text-foreground">{exp.title}</h3>
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
                    <p className="text-foreground/80 mb-4">{exp.description}</p>

                    {/* Achievements */}
                    <div className="mb-4">
                      <h4 className="text-lg font-semibold text-foreground mb-3">Key Achievements:</h4>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, achIndex) => (
                          <li key={achIndex} className="flex items-start">
                            <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                            <span className="text-foreground/80">{achievement}</span>
                          </li>
                        ))}
                      </ul>
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
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;