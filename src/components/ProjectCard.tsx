
import React from 'react';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Github, ExternalLink } from 'lucide-react';

export interface ProjectProps {
  title: string;
  description: string;
  image?: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  type: 'web' | 'desktop';
}

const ProjectCard: React.FC<ProjectProps> = ({
  title,
  description,
  image,
  technologies,
  githubUrl,
  liveUrl,
  type,
}) => {
  return (
    <Card className="overflow-hidden card-hover-effect h-full flex flex-col bg-secondary/20 border border-primary/10">
      <div className="aspect-video relative bg-muted">
        {image ? (
          <img src={image} alt={title} className="object-cover w-full h-full" />
        ) : (
          <div className="flex items-center justify-center h-full bg-secondary">
            <span className="text-muted-foreground">Project Preview</span>
          </div>
        )}
        <div className="absolute top-2 right-2">
          <Badge variant="outline" className="bg-background/80 backdrop-blur-sm">
            {type === 'web' ? 'Web App' : 'Desktop App'}
          </Badge>
        </div>
      </div>
      <CardHeader className="pb-2">
        <h3 className="text-xl font-bold text-green">{title}</h3>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-white/70-foreground mb-4">{description}</p>
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <Badge key={tech} variant="secondary" className="bg-primary/10">
              {tech}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="border-t border-border/10 pt-4 gap-2 flex">
        {liveUrl && (
          <Button size="sm" className="flex-1" asChild>
            <a href={liveUrl} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="mr-2 h-4 w-4" /> Live
            </a>
          </Button>
        )}

         {githubUrl && (
          <Button variant="outline" size="sm" className="flex-1" asChild>
            <a href={githubUrl} target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-4 w-4" /> Source Code
            </a>
          </Button>
        )}
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;
