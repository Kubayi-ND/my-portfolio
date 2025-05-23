
import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import SectionHeading from './SectionHeading';
import ProjectCard, { ProjectProps } from './ProjectCard';
import { Code, Computer } from 'lucide-react';


const ProjectsSection: React.FC = () => {
  const projects: ProjectProps[] = [
     {
      title: 'Portfolio Website',
      description: 'A responsive developer portfolio website built with modern web technologies and hosted in Vercel. It feattures an interactive UI and smooth animations.',
      image: "portfolio.gif",
      technologies: ['Vite', 'TypeScript', 'Tailwind CSS', 'Vercel'],
      githubUrl: 'https://github.com/Kubayi-ND/ntsumis-portfolio',
      liveUrl: 'https://ntsumis-portfolio.vercel.app',
      type: 'web',
    },
    {
      title: 'AnimeVerse',
      description: 'AnimeVerse is a web application that allows users to search for anime. The results feature a synopsis, trailers, rating among few other anime related information. It provides a user-friendly interface and utilizes the Jikan API to fetch data.',
      image: "animeverse.gif",
      technologies: ['Next.jst', 'JavaScrip', 'Tailwind CSS', 'REST API', 'Vercel'],
      githubUrl: 'https://github.com/Kubayi-ND/animesearch',
      liveUrl: 'https://animeverse-sand.vercel.app/',
      type: 'web',
    },
    {
      title: 'Mobile QR Code Generator',
      description: 'Makes use of node.js to create a 2D Qr Code for the URL inserted in the TextBox, when "Generato Qr Code" button is click. The download button uses html2canvas to create an image when pressed.This project is hosted in GitHub Pages.',
      image: "QrCode.gif",
      technologies: ['JavaScript', 'HTML5', 'CSS3', 'Bootstrap5', 'GitHub Pages'],
      githubUrl: 'https://github.com/Kubayi-ND/QRCodeGenerator',
      liveUrl: 'https://kubayi-nd.github.io/QRCodeGenerator/',
      type: 'web',
    },

    {
      title: 'Calculator',
      description: 'A simple calculator application built with Html and Css. It supports basic arithmetic operations with the use of JavaScript eval function.',
      image: "calculator.gif",
      technologies: ['HTML', 'CSS', 'JavaScript', 'GitHub Pages'],
      githubUrl: 'https://github.com/Kubayi-ND/Calculator',
      liveUrl: 'https://kubayi-nd.github.io/Calculator/',
      type: 'web',
    },
    {
      title: 'React Clock',
      description: 'Makes use of javascript, setInterval function to dynamically update the time on the digital and analogue clock every second.',
      image: "clock.gif",
      technologies: ['JavaScript', 'React.js', 'Html5', 'Css3', 'GitHub Pages'],
      githubUrl: 'https://github.com/Kubayi-ND/React_Clock/tree/master',
      liveUrl: 'https://kubayi-nd.github.io/React_Clock/',
      type: 'web',
    },
    {
      title: 'Upcoming Full Stack Finance Manager',
      description: 'This project Will make use of Vite Framework, RestAPI, and Supabase to create a full stack finance manager application. The application will allow users to manage their finances, track expenses, and generate reports. It will feature dark and light modes',
      image: "financeManager.gif",
      technologies: ['Vite', 'React.js', 'Supabase', 'REST API'],
      githubUrl: '#',
      liveUrl: '#',
      type: 'web',
    }
  ];

  const webProjects = projects.filter(project => project.type === 'web');
  const desktopProjects = projects.filter(project => project.type === 'desktop');

  return (
    <section id="projects" className="section-container bg-secondary/10 pt-16">
      <div className="container mx-auto">
        <SectionHeading 
          title="My Projects" 
          subtitle="Showcasing my best work in web and desktop application development"
        />
        
        <Tabs defaultValue="web" className="w-full opacity-0 animate-fade-in">
          <TabsList className="grid grid-cols-2 w-full max-w-md mx-auto mb-8">
            <TabsTrigger value="web" className="flex items-center gap-2">
              <Code className="h-4 w-4" /> Web Apps
            </TabsTrigger>
            <TabsTrigger value="desktop" className="flex items-center gap-2">
              <Computer className="h-4 w-4" /> Desktop Apps
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="web" className="mt-0 focus-visible:outline-ring-0 focus-visible:ring-0 ">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
              {webProjects.map((project, index) => (
                <div 
                  key={project.title} 
                  className="opacity-0 animate-scale-up shadow-md shadow-primary/20"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <ProjectCard {...project} />
                </div>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="desktop" className="mt-0 focus-visible:outline-none focus-visible:ring-0">
            <h1 className="text-center text-4xl font-bold">No Projects yet</h1>
            <h1 className='text-center text-3xl underline'>Project still under Development...</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {desktopProjects.map((project, index) => (
                <div 
                  key={project.title} 
                  className="opacity-0 animate-scale-up shadow-md shadow-primary/20"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <ProjectCard {...project} />
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default ProjectsSection;
