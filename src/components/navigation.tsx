'use client';

import { useState, useEffect } from 'react';
import { Menu, X, Zap } from 'lucide-react';
import { NavItem } from '@/types';

const navItems: NavItem[] = [
  { id: 'accueil', label: 'Accueil', href: '#hero' },
  { id: 'apropos', label: 'À Propos', href: '#about' },
  { id: 'technologie', label: 'Technologie', href: '#technology' },
  { id: 'solutions', label: 'Solutions', href: '#solutions' },
  { id: 'projets', label: 'Projets', href: '#projects' },
  { id: 'galerie', label: 'Galerie', href: '#gallery' },
  { id: 'gouvernements', label: 'Gouvernements', href: '#gouvernements' },
  { id: 'partenaires', label: 'Partenaires', href: '#partners' },
  { id: 'contact', label: 'Contact', href: '#contact' },
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  // Handle scroll effect for navigation background
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 20);

      // Update active section based on scroll position
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

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    // Smooth scroll to section
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 electrical-grid ${
      isScrolled 
        ? 'bg-tvec-navy/95 backdrop-blur-md shadow-elevated border-b border-tvec-blue/50 glass-blue' 
        : 'bg-tvec-navy/80 backdrop-blur-sm glass-blue'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo with Enhanced Blue Electrical Effects */}
          <div className="flex items-center group cursor-pointer" onClick={() => handleNavClick('#hero')}>
            <div className="relative">
              <span className={`text-2xl tvec-logo-nav transition-all duration-300 ${
                isScrolled ? 'text-white' : 'text-white'
              } group-hover:animate-electrical-pulse electric-glow`}>
                T<Zap className={`tvec-lightning-nav w-5 h-5 text-tvec-yellow transition-all duration-300 ${
                  isScrolled ? 'animate-pulse lightning-glow' : 'lightning-glow'
                } group-hover:animate-lightning-glow group-hover:scale-110`} />EC
              </span>
              {/* Enhanced electrical glow effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-tvec-blue/30 to-tvec-yellow/30 blur-xl -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 electric-glow"></div>
              <div className="absolute inset-0 lightning-border opacity-0 group-hover:opacity-40 transition-opacity duration-500 rounded-lg"></div>
            </div>
          </div>

          {/* Desktop Navigation with Blue Electrical Theme */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.substring(1);
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.href)}
                  className={`relative px-4 py-2 rounded-lg font-medium transition-all duration-300 hover:scale-105 group ${
                    isActive 
                      ? 'text-tvec-yellow bg-tvec-blue/20 shadow-professional electric-glow lightning-border' 
                      : 'text-white hover:text-tvec-yellow hover:bg-tvec-blue/10'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-2 h-0.5 bg-tvec-yellow rounded-full lightning-glow animate-pulse"></span>
                  )}
                  {/* Electrical hover effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-tvec-blue/10 to-tvec-yellow/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
                </button>
              );
            })}
          </div>

          {/* Mobile menu button with Electrical Effects */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className={`p-2 rounded-lg transition-all duration-300 hover:scale-105 group ${
                isOpen 
                  ? 'text-tvec-yellow bg-tvec-blue/20 electric-glow lightning-border' 
                  : 'text-white hover:text-tvec-yellow hover:bg-tvec-blue/10'
              }`}
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X className="w-6 h-6 transition-transform duration-300 rotate-90 lightning-glow" />
              ) : (
                <Menu className="w-6 h-6 transition-transform duration-300 group-hover:lightning-glow" />
              )}
              <div className="absolute inset-0 bg-tvec-blue/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
            </button>
          </div>
        </div>

        {/* Mobile Navigation with Blue Electrical Theme */}
        <div className={`md:hidden overflow-hidden transition-all duration-300 ease-out ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="border-t border-tvec-blue/30 bg-tvec-navy/95 backdrop-blur-md glass-blue electrical-grid-dense">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item, index) => {
                const isActive = activeSection === item.href.substring(1);
                return (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.href)}
                    className={`block w-full text-left px-4 py-3 rounded-lg font-medium transition-all duration-300 hover:scale-105 group relative ${
                      isActive 
                        ? 'text-tvec-yellow bg-tvec-blue/20 shadow-professional border-l-4 border-tvec-yellow lightning-border electric-glow' 
                        : 'text-white hover:text-tvec-yellow hover:bg-tvec-blue/10'
                    }`}
                    style={{
                      transitionDelay: isOpen ? `${index * 50}ms` : '0ms'
                    }}
                  >
                    {item.label}
                    {/* Electrical hover effect for mobile */}
                    <div className="absolute inset-0 bg-gradient-to-r from-tvec-blue/5 to-tvec-yellow/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}