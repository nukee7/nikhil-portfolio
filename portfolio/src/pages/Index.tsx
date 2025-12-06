import React from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import ResumeSection from '../components/ResumeSection';
import ExperienceSection from '../components/ExperienceSection';
import ProjectsSection from '../components/ProjectsSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

/**
 * Main portfolio page component
 * Features:
 * - Fixed navigation with scrollspy
 * - Smooth scrolling between sections
 * - Responsive design with mobile menu
 * - Glass morphism design elements
 * - Professional gradient theme
 */
const Index = () => {
  return (
    <main className="min-h-screen">
      {/* Fixed navigation bar with scrollspy functionality */}
      <Navbar />
      
      {/* Hero section with introduction and social links */}
      <HeroSection />
      
      {/* Experience section with timeline of work history */}
      <ExperienceSection />
      
      {/* Projects section with portfolio showcase and filtering */}
      <ProjectsSection />
      
      {/* Resume section with PDF link */}
      <ResumeSection />
      
      {/* Footer with additional links and information */}
      <Footer />
    </main>
  );
};

export default Index;
