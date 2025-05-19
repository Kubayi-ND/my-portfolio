
import React, { useState, useEffect } from 'react';
import NavBar from '@/components/NavBar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import SkillsSection from '@/components/SkillsSection';
import ProjectsSection from '@/components/ProjectsSection';
import ContactSection from '@/components/ContactSection';


const Index = () => {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'skills', 'projects', 'contact'];
      
      // Find the section that is most visible in the viewport
      const current = sections.reduce((visible, section) => {
        const element = document.getElementById(section);
        if (!element) return visible;
        
        const rect = element.getBoundingClientRect();
        const viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);
        
        // Calculate how much of the section is visible as a percentage
        const visibleHeight = Math.min(rect.bottom, viewHeight) - Math.max(rect.top, 0);
        const visibilityPercentage = Math.max(0, visibleHeight) / element.offsetHeight;
        
        return visibilityPercentage > visible.percent ? { id: section, percent: visibilityPercentage } : visible;
      }, { id: activeSection, percent: 0 });

      if (current.id !== activeSection) {
        setActiveSection(current.id);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [activeSection]);

  return (
    <div className="bg-background min-h-screen">
      <NavBar activeSection={activeSection} />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
      
      <footer className="py-6 bg-secondary text-center">
        <div className="container mx-auto">
          <p className="text-sm text-foreground/70">
            © {new Date().getFullYear()} Ntsumi Kubayi. All Rights Reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
