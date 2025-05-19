
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { 
  Menu, 
  X, 
  Home, 
  User, 
  Code2, 
  FolderKanban, 
  MailPlus 
} from 'lucide-react';

interface NavBarProps {
  activeSection: string;
}

const NavBar: React.FC<NavBarProps> = ({ activeSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      // Close mobile menu if open
      if (isMenuOpen) {
        setIsMenuOpen(false);
      }
      
      // Calculate header height to offset the scroll position
      const header = document.querySelector('header');
      const headerHeight = header ? header.offsetHeight : 0;
      
      // Get the target position with offset
      const targetPosition = element.offsetTop - headerHeight - 20;
      const startPosition = window.pageYOffset;
      const distance = targetPosition - startPosition;
      
      // Animate scroll with custom easing
      const duration = 1000; // ms
      const startTime = performance.now();
      
      const animateScroll = (currentTime: number) => {
        const elapsedTime = currentTime - startTime;
        const progress = Math.min(elapsedTime / duration, 1);
        
        // Apply easing - easeInOutCubic
        const easeProgress = progress < 0.5
          ? 4 * progress * progress * progress
          : 1 - Math.pow(-2 * progress + 2, 3) / 2;
        
        window.scrollTo(0, startPosition + distance * easeProgress);
        
        if (progress < 1) {
          requestAnimationFrame(animateScroll);
        }
      };
      
      requestAnimationFrame(animateScroll);
    }
  };
  const navItems = [
    { id: 'hero', label: 'Home', icon: Home },
    { id: 'about', label: 'About', icon: User },
    { id: 'skills', label: 'Skills', icon: Code2 },
    { id: 'projects', label: 'Projects', icon: FolderKanban },
    { id: 'contact', label: 'Contact', icon: MailPlus },
  ];

  return (
    <header
      className={cn(
        'fixed top-2 left-0 right-0 z-50 py-4 px-6 mx-16  rounded-full transition-all duration-300',
        isScrolled ? 'bg-background/90 backdrop-blur-md shadow-md' : 'bg-transparent'
      )}
    >
      <div className="container mx-auto flex justify-between items-center">
        <div className="font-bold text-xl tracking-tight text-primary">
          <span className="gradient-text">PORT</span>
          <span className="text-foreground">FOLIO</span>
        </div>

        {/* Mobile menu toggle button */}
        <button 
          className="md:hidden flex items-center text-foreground"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex items-center space-x-4 font-bold">
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className={`nav-item ${activeSection === item.id ? 'active' : ''} flex items-center`}
                  onClick={(e) => handleSmoothScroll(e, item.id)}
                >
                  <item.icon className="mr-4 h-4 w-4" />

                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      
      {/* Mobile Navigation */}
      <div className={cn(
        "fixed inset-x-0 bg-background/95 backdrop-blur-sm shadow-lg transition-all duration-300 ease-in-out z-40",
        isMenuOpen ? "top-[72px] opacity-100" : "top-[-400px] opacity-0"
      )}>
        <nav className="container mx-auto py-5">
          <ul className="flex flex-col items-center space-y-4">
            {navItems.map((item) => (              <li key={item.id} className="w-full">                <a
                  href={`#${item.id}`}
                  className={cn(
                    "block text-center py-2 text-lg font-medium transition-colors flex items-center justify-center", 
                    activeSection === item.id 
                      ? "text-primary font-semibold" 
                      : "text-foreground hover:text-primary"
                  )}
                  onClick={(e) => handleSmoothScroll(e, item.id)}
                >
                  <item.icon className="mr-4 h-5 w-5" />

                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default NavBar;
