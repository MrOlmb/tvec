'use client';

import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Logo } from "./logo";
import { NavMenu } from "./nav-menu";
import { NavigationSheet } from "./navigation-sheet";

const Navbar04 = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effect for navigation background
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleContactClick = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };


  return (
    <nav className={`fixed top-0 left-0 right-0 h-16 z-50 transition-all duration-300 electrical-grid electrical-particles relative overflow-hidden ${
      isScrolled 
        ? 'backdrop-blur-md shadow-elevated border-b border-tvec-blue/50' 
        : 'backdrop-blur-sm border-b border-tvec-blue/30'
    }`}>
      {/* Hero-like background effects */}
      <div className="absolute inset-0 gradient-electrical-flow opacity-40"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-tvec-navy/80 via-tvec-navy/60 to-tvec-navy/80"></div>
      
      {/* Animated background elements similar to hero */}
      <div className="absolute top-1/2 left-1/4 w-8 h-8 bg-tvec-blue/20 rounded-full blur-md animate-float opacity-60"></div>
      <div className="absolute top-1/2 right-1/4 w-6 h-6 bg-blue-300/20 rounded-full blur-sm animate-float opacity-50" style={{animationDelay: '1s'}}></div>
      
      <div className="relative z-10 h-full flex items-center justify-between max-w-7xl mx-auto px-6">
        <Logo />

        {/* Desktop Menu */}
        <NavMenu className="hidden lg:block" />

        <div className="flex items-center gap-3">
          <Button
            variant="outline"
            onClick={handleContactClick}
            className="hidden sm:inline-flex text-white"
          >
            Contact
          </Button>

          {/* Mobile Menu */}
          <div className="lg:hidden">
            <NavigationSheet />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar04;
