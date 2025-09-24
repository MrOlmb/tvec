'use client';

import { ArrowRight, Zap, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Carousel } from '@/components/ui/carousel';
import { ElectricalParticles, ElectricalGrid, ElectricalLightning } from '@/components/ui/electrical-particles';

export function HeroSection() {
  const handleContact = () => {
    const contactSection = document.querySelector('#contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleServices = () => {
    const servicesSection = document.querySelector('#solutions');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Carousel items with new electrical infrastructure images
  const carouselItems = [
    {
      id: '1',
      title: 'Connexion Numérique Africaine',
      description: 'Infrastructure électrique moderne pour connecter le continent',
      image: '/africa_digital_connection.jpg',
      category: 'infrastructure' as const
    },
    {
      id: '2',
      title: 'Lignes Haute Tension Avancées',
      description: 'Technologie de pointe pour maximiser la transmission électrique',
      image: '/high_voltage_power_lines.jpg',
      category: 'powerGrid' as const
    },
    {
      id: '3',
      title: 'Infrastructure Électrique Solide',
      description: 'Poteaux et lignes électriques pour un réseau fiable',
      image: '/electricity pole.jpg',
      category: 'infrastructure' as const
    },
    {
      id: '4',
      title: 'Expertise Technique Professionnelle',
      description: 'Techniciens qualifiés pour installations de haute qualité',
      image: '/technician.jpg',
      category: 'expertise' as const
    },
    {
      id: '5',
      title: 'Vision Électrique du Futur',
      description: 'Solutions innovantes pour l\'avenir énergétique du Congo',
      image: '/silhouette.jpg',
      category: 'vision' as const
    },
    {
      id: '6',
      title: 'Modernisation Ligne Kinshasa-Matadi',
      description: 'Upgrade complet avec technologie CTC Global - Capacité multipliée par 4',
      image: '/project-1.png',
      category: 'project' as const
    },
    {
      id: '7',
      title: 'Formation Technique Spécialisée',
      description: 'Développement des compétences locales en électricité haute tension',
      image: '/project-4.png',
      category: 'project' as const
    }
  ];

  return (
    <section id="hero" className="relative min-h-screen overflow-hidden pt-16">
      {/* Advanced Electrical Background Effects */}
      <ElectricalParticles count={40} className="opacity-60" />
      <ElectricalGrid intensity={0.4} />
      <ElectricalLightning count={5} className="opacity-50" />
      
      {/* Dynamic Background with Blue Electrical Gradients */}
      <div className="absolute inset-0 gradient-electrical-flow opacity-80"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-tvec-navy/40 via-transparent to-tvec-blue/30"></div>
      
      {/* Enhanced Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-tvec-blue/15 rounded-full blur-3xl animate-float electric-glow"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-tvec-yellow/15 rounded-full blur-3xl animate-float lightning-glow" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-tvec-navy/8 rounded-full blur-3xl animate-pulse"></div>
        
        {/* Electrical Circuit Lines */}
        <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-tvec-blue to-transparent opacity-60 animate-pulse"></div>
        <div className="absolute bottom-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-tvec-yellow to-transparent opacity-40" style={{animationDelay: '1.5s'}}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 min-h-screen items-center">
          
          {/* Left Column - Company Info */}
          <div className="text-center lg:text-left order-2 lg:order-1 animate-slide-in-left">
            {/* Logo with Enhanced Blue Electrical Effects */}
            <div className="flex justify-center lg:justify-start items-center mb-8">
              <div className="relative group">
                <span className="text-5xl md:text-7xl tvec-logo text-white drop-shadow-2xl tracking-tight animate-fade-in group-hover:animate-electrical-pulse transition-all duration-500">
                  T<Zap className="tvec-lightning w-12 h-12 md:w-16 md:h-16 text-tvec-yellow animate-float lightning-glow transition-all duration-300 group-hover:scale-110 group-hover:animate-lightning-glow" />EC
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-tvec-blue/30 to-tvec-yellow/30 blur-2xl -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 electric-glow"></div>
                <div className="absolute inset-0 lightning-border opacity-0 group-hover:opacity-60 transition-opacity duration-500 rounded-lg"></div>
              </div>
            </div>

            {/* Tagline */}
            <h1 className="text-tvec-yellow text-lg md:text-xl font-semibold mb-4 tracking-wide animate-slide-up uppercase">
              FOURNISSEURS DE SOLUTIONS RÉSEAUX ÉLECTRIQUES
            </h1>
            
            {/* Main Headline with Blue Theme */}
            <h2 className="text-white text-3xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight animate-slide-up" style={{animationDelay: '200ms'}}>
              Notre expertise à<br />
              <span className="text-tvec-blue-light relative electric-glow">
                votre service
                <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-blue-electric transform scale-x-0 animate-scale-in" style={{animationDelay: '800ms'}}></span>
              </span>
            </h2>

            {/* Description */}
            <p className="text-gray-200 text-lg md:text-xl mb-8 leading-relaxed animate-slide-up max-w-2xl mx-auto lg:mx-0" style={{animationDelay: '400ms'}}>
              Transport Vert d&apos;Électricité au Congo - Solutions électriques avancées 
              pour un avenir durable. Technologie éprouvée dans 65 pays.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center mb-8 animate-slide-up" style={{animationDelay: '600ms'}}>
              <Button
                onClick={handleContact}
                variant="hero-primary"
                size="lg"
                className="group relative overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-2">
                  <Phone className="w-5 h-5 transition-transform group-hover:rotate-12" />
                  Contactez-nous
                </span>
              </Button>
              
              <Button
                onClick={handleServices}
                variant="hero-outline"
                size="lg"
                className="group"
              >
                <span className="flex items-center gap-2">
                  Nos Solutions
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </span>
              </Button>
            </div>

            {/* Key Stats with Blue Electrical Theme */}
            <div className="grid grid-cols-3 gap-6 max-w-md mx-auto lg:mx-0 animate-slide-up" style={{animationDelay: '800ms'}}>
              <div className="text-center lg:text-left group hover-lift p-4 rounded-lg glass-blue lightning-border">
                <div className="text-2xl md:text-3xl font-bold text-tvec-yellow mb-1 group-hover:scale-110 transition-transform lightning-glow">4X</div>
                <div className="text-gray-200 text-sm">Plus de capacité</div>
              </div>
              <div className="text-center lg:text-left group hover-lift p-4 rounded-lg glass-blue lightning-border">
                <div className="text-2xl md:text-3xl font-bold text-tvec-blue-light mb-1 group-hover:scale-110 transition-transform electric-glow">25%</div>
                <div className="text-gray-200 text-sm">Du coût standard</div>
              </div>
              <div className="text-center lg:text-left group hover-lift p-4 rounded-lg glass-blue lightning-border">
                <div className="text-2xl md:text-3xl font-bold text-tvec-yellow mb-1 group-hover:scale-110 transition-transform lightning-glow">65</div>
                <div className="text-gray-200 text-sm">Pays utilisateurs</div>
              </div>
            </div>
          </div>

          {/* Right Column - Carousel with Electrical Effects */}
          <div className="order-1 lg:order-2 h-96 lg:h-[600px] animate-slide-in-right">
            <div className="relative h-full group">
              <Carousel 
                items={carouselItems}
                autoPlay={true}
                interval={6000}
                className="h-full shadow-floating rounded-2xl overflow-hidden hover:scale-105 transition-transform duration-500 lightning-border"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-tvec-navy/30 via-transparent to-transparent rounded-2xl pointer-events-none"></div>
              <div className="absolute -inset-2 bg-gradient-to-r from-tvec-blue via-tvec-yellow to-tvec-blue rounded-2xl opacity-0 group-hover:opacity-40 blur-xl transition-opacity duration-500 electric-glow"></div>
              <div className="absolute inset-0 electrical-particles opacity-0 group-hover:opacity-30 transition-opacity duration-500 rounded-2xl"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="relative group cursor-pointer">
          <div className="w-6 h-10 border-2 border-white/60 rounded-full flex justify-center group-hover:border-tvec-yellow transition-colors">
            <div className="w-1 h-3 bg-white/80 rounded-full mt-2 animate-pulse group-hover:bg-tvec-yellow"></div>
          </div>
          <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-white/60 text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity">
            Découvrir
          </div>
        </div>
      </div>

      {/* Additional floating elements for visual interest */}
      <div className="absolute top-1/4 right-1/4 w-2 h-2 bg-tvec-yellow rounded-full animate-ping opacity-70"></div>
      <div className="absolute bottom-1/3 left-1/4 w-1 h-1 bg-tvec-green rounded-full animate-pulse opacity-60" style={{animationDelay: '2s'}}></div>
      <div className="absolute top-2/3 right-1/3 w-3 h-3 bg-tvec-yellow/50 rounded-full animate-float opacity-50" style={{animationDelay: '3s'}}></div>
    </section>
  );
}