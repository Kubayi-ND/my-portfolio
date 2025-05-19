import React from 'react';
import SectionHeading from './SectionHeading';
import StackIcon from 'tech-stack-icons';
import { 
  Code, 
  FileJson,
  Trophy,
  AreaChart, 
  Github,
  FileType,
  Palette,
  Server, 
  Database, 
  Globe,
  GitBranch,
  Terminal,
  Languages
} from 'lucide-react';

interface Skill {
  name: string;
  icon: React.FC<{ className?: string }>;
  category: 'frontend' | 'backend' | 'tools' | 'languages';
}

const SkillsSection: React.FC = () => {
  // HTML icon wrapper component to match our Skill interface
  const HtmlIcon: React.FC<{ className?: string }> = ({ className }) => (
    <div className={className}>
      <StackIcon name="html5" />
    </div>
  );
  const CssIcon: React.FC<{ className?: string }> = ({ className }) => (
    <div className={className}>
      <StackIcon name="css3" />
    </div>
  );
    const Bootstrap: React.FC<{ className?: string }> = ({ className }) => (
    <div className={className}>
      <StackIcon name="bootstrap5" />
    </div>
  );
  const React: React.FC<{ className?: string }> = ({ className }) => (
    <div className={className}>
      <StackIcon name="reactjs" />
    </div>
  );
  const Next: React.FC<{ className?: string }> = ({ className }) => (
    <div className={className}>
      <StackIcon name="nextjs" />
    </div>
  );
  const Vite: React.FC<{ className?: string }> = ({ className }) => (
    <div className={className}>
      <StackIcon name="vitejs" />
    </div>
  );
  const Tailwind: React.FC<{ className?: string }> = ({ className }) => (
    <div className={className}>
      <StackIcon name="tailwindcss" />
    </div>
  );
  const Node: React.FC<{ className?: string }> = ({ className }) => (
    <div className={className}>
      <StackIcon name="nodejs" />
    </div>
  );
  const Supabase: React.FC<{ className?: string }> = ({ className }) => (
    <div className={className}>
      <StackIcon name="supabase" />
    </div>
  );
  const Postgresql: React.FC<{ className?: string }> = ({ className }) => (
    <div className={className}>
      <StackIcon name="postgresql" />
    </div>
  );
  const Auth: React.FC<{ className?: string }> = ({ className }) => (
    <div className={className}>
      <StackIcon name="auth0" />
    </div>
  );
 
  const Csharp: React.FC<{ className?: string }> = ({ className }) => (
    <div className={className}>
      <StackIcon name="csharp" />
    </div>
  );
  const JavaScript: React.FC<{ className?: string }> = ({ className }) => (
    <div className={className}>
      <StackIcon name="js" />
    </div>
  );
  const Typescript: React.FC<{ className?: string }> = ({ className }) => (
    <div className={className}>
      <StackIcon name="typescript" />
    </div>
  );
  const Git: React.FC<{ className?: string }> = ({ className }) => (
    <div className={className}>
      <StackIcon name="git" />
    </div>
  );
  const Github: React.FC<{ className?: string }> = ({ className }) => (
    <div className={className}>
      <StackIcon name="github" />
    </div>
  );
  const Vscode: React.FC<{ className?: string }> = ({ className }) => (
    <div className={className}>
      <StackIcon name="vscode" />
    </div>
  );
  const Postman: React.FC<{ className?: string }> = ({ className }) => (
    <div className={className}>
      <StackIcon name="postman" />
    </div>
  );



  const skills: Skill[] = [
    // Frontend
    { name: 'HTML', icon: HtmlIcon, category: 'frontend' },
    { name: 'CSS', icon: CssIcon, category: 'frontend' },
    { name: 'React.js', icon: React, category: 'frontend' },
    { name: 'Next.js', icon: Next, category: 'frontend' },
    { name: 'Vite.js', icon: Vite, category: 'frontend' }, 
    { name: 'Tailwind CSS', icon: Tailwind, category: 'frontend' },
    
    // Backend
    { name: 'Node.js', icon: Node, category: 'backend' },
    { name: 'Supabase', icon: Supabase, category: 'backend' },
    { name: 'SQL Server', icon: Server, category: 'backend' },
    { name: 'PostgreSQL', icon: Postgresql, category: 'backend' },
    { name: 'Auth0', icon: Auth, category: 'backend' },
    
    //programming languages
    {name: 'C#', icon: Csharp, category: 'languages'},
    {name: 'JavaScript', icon: JavaScript, category: 'languages'},
    { name: 'TypeScript', icon: Typescript, category: 'languages' },
    {name: 'SQL', icon: FileJson, category: 'languages'},
    
    // Tools
    { name: 'Git Version Control', icon: Git, category: 'tools' },
    { name: 'GitHub', icon: Github, category: 'tools' },
    { name: 'VS Code', icon: Vscode, category: 'tools' },
    { name: 'Supabase', icon: Supabase, category: 'tools' },
    { name: 'SQl Server', icon: Database, category: 'tools' },
    { name: 'Postman', icon: Postman, category: 'tools' },
    
  ];

  // Group skills by category
  const groupedSkills = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<string, Skill[]>);

  const categories = {
    frontend: 'Frontend Development',
    backend: 'Backend Development',
    languages: 'Programming Languages',
    tools: 'Tools & Technologies',
  };

  return (
    <section id="skills" className="section-container pt-16">
      <div className="container mx-auto ">
        <SectionHeading 
          title="Skills & Expertise" 
          subtitle="My technical skills and technologies I work with"
        />
        
        <div className="space-y-12">
          {Object.entries(groupedSkills).map(([category, skills], categoryIndex) => (
            <div 
              key={category} 
              className="opacity-0 animate-fade-in"
              style={{ animationDelay: `${categoryIndex * 200}ms` }}
            >
              <h3 className="text-2xl font-bold mb-6 text-center text-white/85">
                {categories[category as keyof typeof categories]}
              </h3>
              
              <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-6 gap-6 h-24">
                {skills.map((skill, index) => (
                  <div 
                    key={skill.name}
                    className="skill-card flex flex-col items-center justify-center p-2.5 bg-white/20"
                    style={{ animationDelay: `${index * 100 + 200}ms` }}
                  >
                    <skill.icon className="h-10 w-12 mb-3 text-primary" />
                    <h4 className="font-medium text-lg text-center text-white/80">{skill.name}</h4>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
