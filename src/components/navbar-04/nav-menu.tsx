import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import { ComponentProps, useState, useEffect } from "react";

const navItems = [
  { id: 'accueil', label: 'Accueil', href: '#hero' },
  { id: 'apropos', label: 'À Propos', href: '#about' },
  { id: 'technologie', label: 'Technologie', href: '#technology' },
  { id: 'solutions', label: 'Solutions', href: '#solutions' },
  { id: 'galerie', label: 'Galerie', href: '#gallery' },
  { id: 'financement', label: 'Financement', href: '#financing' },
  { id: 'gouvernements', label: 'Gouvernements', href: '#gouvernements' },
  { id: 'partenaires', label: 'Partenaires', href: '#partners' },
  { id: 'contact', label: 'Contact', href: '#contact' },
];

export const NavMenu = (props: ComponentProps<typeof NavigationMenu>) => {
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
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <NavigationMenu {...props}>
      <NavigationMenuList className="gap-1 space-x-0 data-[orientation=vertical]:flex-col data-[orientation=vertical]:items-start data-[orientation=vertical]:justify-start">
        {navItems.map((item) => {
          const isActive = activeSection === item.href.substring(1);
          return (
            <NavigationMenuItem key={item.id}>
              <NavigationMenuLink asChild>
                <button
                  onClick={() => handleNavClick(item.href)}
                  className={`relative px-4 py-2 rounded-lg font-medium transition-all duration-300 hover:scale-105 group ${
                    isActive 
                      ? 'text-blue-300 bg-tvec-blue/20 shadow-professional electric-glow lightning-border' 
                      : 'text-white hover:text-blue-300 hover:bg-tvec-blue/10'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-2 h-0.5 bg-blue-300 rounded-full lightning-glow animate-pulse"></span>
                  )}
                  {/* Electrical hover effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-tvec-blue/10 to-blue-300/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
                </button>
              </NavigationMenuLink>
            </NavigationMenuItem>
          );
        })}
      </NavigationMenuList>
    </NavigationMenu>
  );
};
