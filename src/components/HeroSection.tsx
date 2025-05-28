import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';
import { TypingText } from './ui/TypingText';
import { InteractiveRobotSpline } from './ui/interactive-3d-robot';

const HeroSection: React.FC = () => {
  // Use a real Spline scene URL
  const ROBOT_SCENE_URL = "https://prod.spline.design/PyzDhpQ9E5f1E3MT/scene.splinecode";
  
  return (
    <section id="hero" className="section-container relative overflow-hidden min-h-screen">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-transparent opacity-20"></div>
      
      {/* Interactive 3D Robot Background */}
      <div className="absolute inset-0 z-0">
        <InteractiveRobotSpline 
          scene={ROBOT_SCENE_URL} 
          className="w-full h-full object-cover" 
        />
      </div>
      
      <div className="container mx-auto flex flex-col items-center justify-center text-center z-10 relative h-full py-20 mt-24">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 opacity-0 animate-fade-in">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-400">
            Ntsumi Kubayi 
          </span>
        </h1>
        {/* Typing animation and glowing effect for h2 */}
        <h2 className="text-3xl pb-8 typing-glow">
          <TypingText typingSpeed={60} />
        </h2>

        <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto text-foreground/80 opacity-0 animate-fade-in animate-delay-200 font-bold">
          Building innovative solutions with modern technologies
        </p>
        <div className="flex flex-col sm:flex-row gap-4 opacity-0 animate-fade-in animate-delay-300">
          <Button asChild size="lg" variant="default" className="animate-pulse-subtle">
            <a href="#projects">
              View Projects
            </a>
          </Button>
          <Button asChild size="lg" variant="outline">
            <a href="#contact">
              Contact Me
            </a>
          </Button>
        </div>

        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 animate-bounce">
          <a href="#about" aria-label="Scroll down">
            <ArrowDown className="h-6 w-6 text-primary" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
