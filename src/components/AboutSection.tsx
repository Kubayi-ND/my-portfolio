
import React from 'react';
import SectionHeading from './SectionHeading';
import { Card, CardContent } from '@/components/ui/card';
import { User } from 'lucide-react';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="section-container bg-secondary/10  pt-16">
      <div className="container mx-auto">
        <SectionHeading 
          title="About Ntsumi Kubayi" 
          subtitle="Learn more about my background and passion for software development"
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div 
            className="relative rounded-[30px] overflow-hidden aspect-square max-w-md mx-auto lg:mx-0 opacity-0 animate-fade-in"
            style={{animationDelay: '100ms'}}
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 to-blue-500/30 mix-blend-overlay"></div>
            <div className="w-full h-full flex items-center justify-center bg-secondary">
              <img  src="/profile.jpg" alt="Ntsumi Kubayi" />
              <span className="sr-only">Developer Profile Image</span>
            </div>
          </div>
          
          <div className="space-y-6 opacity-0 animate-fade-in" style={{animationDelay: '300ms'}}>
            <Card className="bg-background/50 backdrop-blur-sm border-primary/10">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-4 text-primary">My Story</h3>
                <p className="mb-4">
                  I'm a passionate graduate software developer with expertise in creating efficient, scalable, 
                  and user-friendly applications. With a strong foundation in both front-end and 
                  back-end technologies, I enjoy solving complex problems and delivering high-quality software solutions.
                </p>
                <p>
                  My journey in software development began during my studies, where I developed a 
                  keen interest in coding and technology. Since then, I am constantly learning, building
                   projects, and adapting to new technologies to improve my skill set.
                </p>
              </CardContent>
            </Card>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-secondary/50 p-4 rounded-lg border border-primary/10">
                <h4 className="font-bold mb-2">Education</h4>
                <p className="text-sm text-foreground/80">Bachelor of Computer Information Systems <span className='block font-bold'>University of the Free State</span></p>
              </div>
              <div className="bg-secondary/50 p-4 rounded-lg border border-primary/10">
                <h4 className="font-bold mb-2">Certifications</h4>
                <p className="text-sm text-foreground/80">The complete 2024 Web Development Bootcamp <span className='block font-bold'>By Dr Angela Yu</span></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
