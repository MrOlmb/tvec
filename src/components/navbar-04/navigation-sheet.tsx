import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Menu, X } from "lucide-react";
import { Logo } from "./logo";
import { useState, useEffect } from "react";

const navItems = [
  { id: 'accueil', label: 'Accueil', href: '#hero' },
  { id: 'apropos', label: 'À Propos', href: '#about' },
  { id: 'technologie', label: 'Technologie', href: '#technology' },
  { id: 'solutions', label: 'Solutions', href: '#solutions' },
  { id: 'gouvernements', label: 'Gouvernements', href: '#gouvernements' },
  { id: 'partenaires', label: 'Partenaires', href: '#partners' },
];

export const NavigationSheet = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  // Handle scroll effect for active section detection
  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => item.href.substring(1));
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 100) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleContactClick = () => {
    setIsOpen(false);
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button 
          variant="outline" 
          size="icon" 
          className="border-gray-300 text-tvec-navy hover:bg-gray-100"
        >
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent className="px-6 py-8 bg-white">
        <SheetTitle className="sr-only">Menu de navigation</SheetTitle>
        <div className="flex items-center justify-between mb-8">
          <Logo />
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsOpen(false)}
            className="text-gray-500 hover:bg-gray-100"
          >
            <X className="w-4 h-4" />
          </Button>
        </div>
        
        <nav className="flex flex-col gap-2">
          {navItems.map((item) => {
            const isActive = activeSection === item.href.substring(1);
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.href)}
                className={`w-full text-left px-4 py-3 rounded-lg font-medium transition-all duration-300 ${
                  isActive 
                    ? 'text-tvec-green bg-tvec-green/10 border-l-4 border-tvec-green' 
                    : 'text-tvec-navy hover:text-tvec-green hover:bg-gray-50'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>
        
        <div className="flex flex-col gap-4 mt-8 pt-8 border-t border-gray-200">
          <Button
            variant="default"
            onClick={handleContactClick}
            className="w-full bg-tvec-green text-white hover:bg-tvec-green/90"
          >
            Contact
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  );
};