import React from 'react';
import { FileText } from 'lucide-react';

interface ResumeSectionProps {}

const ResumeSection: React.FC<ResumeSectionProps> = () => {
  const handleViewResume = () => {
    // Open PDF in new tab
    window.open('/resume.pdf', '_blank');
  };

  return (
    <section id="resume" className="section-padding bg-muted/30">
      <div className="max-w-4xl mx-auto text-center">
        {/* Section Header */}
        <div className="mb-12 fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Resume
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            View my complete professional resume with detailed work experience, 
            skills, and achievements.
          </p>
        </div>

        {/* Resume PDF Link */}
        <div className="glass-card p-12 scale-in" style={{ animationDelay: '0.2s' }}>
          <div className="flex flex-col items-center">
            <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mb-6">
              <FileText className="w-12 h-12 text-primary" />
            </div>
            
            <h3 className="text-2xl font-bold text-foreground mb-4">
              John Doe - Professional Resume
            </h3>
            
            <p className="text-muted-foreground mb-8 max-w-md">
              Click below to view my complete resume in PDF format with all professional 
              details, work history, and technical expertise.
            </p>
            
            <button 
              onClick={handleViewResume}
              className="btn-gradient flex items-center justify-center gap-3"
              aria-label="View complete resume PDF"
            >
              <FileText className="w-6 h-6" aria-hidden="true" />
              View Resume PDF
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResumeSection;