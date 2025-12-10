import React from 'react';
import { FileText } from 'lucide-react';

const ResumeSection: React.FC = () => {
  const handleViewResume = () => {
    window.open(
      'https://drive.google.com/file/d/16O3REQlg-lu3H5qX2kbJhVYdVe8G19eh/view?usp=sharing',
      '_blank'
    );
  };

  return (
    <section id="resume" className="py-20 bg-muted/30">
      <div className="max-w-3xl mx-auto text-center">

        <h2 className="text-4xl md:text-5xl font-bold mb-6">Resume</h2>

        <p className="text-muted-foreground text-lg mb-10">
        Click below to open my latest resume for a detailed overview of my experience and skills
        </p>

        <div className="glass-card p-12 flex flex-col items-center gap-8 mx-auto w-full md:w-2/3 rounded-2xl shadow-lg">

  {/* Icon Circle */}
  <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center">
    <FileText className="w-10 h-10 text-primary" />
  </div>

  {/* Button */}
  <button
    onClick={handleViewResume}
    className="px-8 py-3 rounded-xl bg-gradient-to-r from-primary to-secondary 
               text-white text-lg font-semibold shadow-md hover:shadow-xl 
               transition-all flex items-center gap-3"
  >
    <FileText className="w-6 h-6" />
    View Resume
  </button>

</div>
      </div>
    </section>
  );
};

export default ResumeSection;