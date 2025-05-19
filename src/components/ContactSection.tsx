
import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, Github, Linkedin } from 'lucide-react';
import SectionHeading from './SectionHeading';
import { useToast } from '@/hooks/use-toast';

const ContactSection: React.FC = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "Thanks for reaching out. I'll get back to you soon.",
      });
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitting(false);
    }, 1500);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'kubayintsumid@gmail.com',
      link: 'mailto:kubayintsumid@gmail.com',
      onClick: (e: React.MouseEvent) => {
        // Prevent default if mail client fails to open
        const hasMailto = navigator.userAgent.indexOf('Mac') !== -1 || 
                         document.querySelectorAll('a[href^="mailto:"]').length > 0;
        if (!hasMailto) {
          e.preventDefault();
          // Copy email to clipboard as fallback
          navigator.clipboard.writeText('kubayintsumid@gmail.com');
          toast({
            title: "Email copied to clipboard!",
            description: "Your email app couldn't be launched. The email address has been copied instead.",
          });
        }
      },
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+27 649952400',
      link: 'tel:+27649952400',
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'github.com/Kubayi-ND',
      link: 'https://github.com/Kubayi-ND',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'linkedin.com/in/ntsumi-kubayi',
      link: 'https://www.linkedin.com/in/ntsumi-kubayi',
    },
  ];

  return (
    <section id="contact" className="section-container pt-16">
      <div className="container mx-auto">
        <SectionHeading 
          title="Get In Touch" 
          subtitle="Have a question or want to work together? Reach out to me"
        />
        
        <div className="grid gap-8">
         
          
          <div className="flex flex-col justify-center space-y-4 opacity-0 animate-fade-in" style={{animationDelay: '200ms'}}>
            <h3 className="text-xl font-bold mb-2">Contact Information</h3>
            <p className="text-muted-foreground mb-6">Feel free to contact me via any of the following methods:</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {contactInfo.map((contact, index) => (
                <a
                  key={contact.label}
                  href={contact.link}
                  target={contact.label !== 'Email' ? "_blank" : undefined}
                  rel={contact.label !== 'Email' ? "noopener noreferrer" : undefined}
                  onClick={contact.onClick}
                  className="flex items-center p-4 rounded-lg bg-secondary/30 hover:bg-secondary/50 transition-colors border border-primary/10 group"
                  style={{ animationDelay: `${index * 100 + 300}ms` }}
                >
                  <contact.icon className="h-5 w-5 mr-3 text-primary group-hover:scale-110 transition-transform" />
                  <div>
                    <div className="text-sm font-medium">{contact.label}</div>
                    <div className="text-sm text-muted-foreground">
                      {contact.value}
                    </div>
                    {contact.label === 'Email' && (
                      <div className="text-xs text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                        Click to copy or open email app
                      </div>
                    )}
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
