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
  { id: 'projets', label: 'Projets', href: '#projects' },
  { id: 'gouvernements', label: 'Gouvernements', href: '#gouvernements' },
  { id: 'partenaires', label: 'Partenaires', href: '#partners' },
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
      <NavigationMenuList className="gap-1">
        {navItems.map((item) => {
          const isActive = activeSection === item.href.substring(1);
          return (
            <NavigationMenuItem key={item.id}>
              <NavigationMenuLink asChild>
                <button
                  onClick={() => handleNavClick(item.href)}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                    isActive 
                      ? 'text-tvec-green' 
                      : 'text-tvec-navy hover:text-tvec-green'
                  }`}
                >
                  {item.label}
                </button>
              </NavigationMenuLink>
            </NavigationMenuItem>
          );
        })}
      </NavigationMenuList>
    </NavigationMenu>
  );
};