import React from 'react';
import { FileText, ExternalLink, Download } from 'lucide-react';

const ResumeSection: React.FC = () => {
  const resumeUrl =
    'https://drive.google.com/file/d/16O3REQlg-lu3H5qX2kbJhVYdVe8G19eh/view?usp=sharing';

  const handleViewResume = () => {
    window.open(resumeUrl, '_blank');
  };

  return (
    <section id="resume" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto text-center">

        <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-foreground">Resume</h2>

        <p className="text-muted-foreground text-lg mb-10">
          Click below to open my latest resume for a detailed overview of my experience and skills
        </p>

        <div className="relative w-full max-w-lg mx-auto group cursor-pointer" onClick={handleViewResume}>
          {/* Resume image */}
          <img
            src="/resume.png"
            alt="Resume preview"
            className="w-full aspect-[4/3] object-cover object-top rounded-2xl border border-border shadow-sm blur-[2px]"
          />

          {/* Overlay with button */}
          <div className="absolute inset-0 bg-background/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl flex items-center justify-center">
            <button className="px-6 py-2.5 rounded-lg bg-primary text-primary-foreground text-sm font-medium shadow-md flex items-center gap-2">
              <ExternalLink className="w-4 h-4" />
              View Resume
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResumeSection;
