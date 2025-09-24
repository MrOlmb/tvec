'use client';

import { ArrowRight, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import WorldMap from '@/components/ui/world-map';
import { TypewriterText } from '@/components/animations/TypewriterText';
import { FadeIn, StaggeredFadeIn } from '@/components/animations/FadeIn';
import { SplitText } from '@/components/animations/TextReveal';
import { FadeContentShimmer, ElectricFade } from '@/components/animations/FadeContent';

export function HeroSection() {
  // Continental connections for global electrical grid visualization
  const continentalConnections = [
    // Congo (Africa) to Europe
    { start: { lat: -4.0383, lng: 21.7587 }, end: { lat: 48.8566, lng: 2.3522 } },
    // Congo (Africa) to North America
    { start: { lat: -4.0383, lng: 21.7587 }, end: { lat: 40.7128, lng: -74.0060 } },
    // Congo (Africa) to Asia (China)
    { start: { lat: -4.0383, lng: 21.7587 }, end: { lat: 39.9042, lng: 116.4074 } },
    // Europe to Asia
    { start: { lat: 48.8566, lng: 2.3522 }, end: { lat: 39.9042, lng: 116.4074 } },
    // North America to South America
    { start: { lat: 40.7128, lng: -74.0060 }, end: { lat: -23.5505, lng: -46.6333 } },
    // Asia to Australia
    { start: { lat: 39.9042, lng: 116.4074 }, end: { lat: -33.8688, lng: 151.2093 } },
  ];

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

  return (
    <section 
      id="hero" 
      className="relative min-h-screen flex items-center justify-center text-white pt-24 overflow-hidden"
    >
      {/* WorldMap Background */}
      <div className="absolute inset-0 z-0 w-full h-full">
        <ElectricFade delay={0.5} className="w-full h-screen">
          <FadeContentShimmer delay={0.8} className="w-full h-full">
            <WorldMap 
              dots={continentalConnections} 
              lineColor="#10b981" 
            />
          </FadeContentShimmer>
        </ElectricFade>
      </div>

      {/* Dark Overlay for text readability - temporarily disabled for debugging */}
      {/* <div className="absolute inset-0 z-10 bg-tvec-navy bg-opacity-60"></div> */}

      <div className="relative z-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <FadeIn delay={0.3} direction="down">
          <TypewriterText 
            text="FOURNISSEURS DE SOLUTIONS RÉSEAUX ÉLECTRIQUES"
            className="text-tvec-yellow text-lg md:text-xl font-bold mb-4 tracking-wide uppercase drop-shadow-lg"
            trigger="immediate"
            speed={30}
          />
        </FadeIn>
        
        <FadeIn delay={1.5} direction="up">
          <SplitText 
            text="Notre expertise à votre service"
            className="text-tvec-navy text-4xl md:text-6xl font-bold mb-6 leading-tight drop-shadow-2xl"
            delay={0.2}
            stagger={0.05}
            trigger="immediate"
          />
        </FadeIn>

        <FadeIn delay={2.5} direction="up">
          <p className="text-tvec-navy text-lg md:text-xl mb-8 leading-relaxed max-w-3xl mx-auto drop-shadow-lg font-medium">
            Transport Vert d&apos;Électricité au Congo - Solutions électriques avancées 
            pour un avenir durable. Technologie éprouvée dans plus de 60 pays.
          </p>
        </FadeIn>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <StaggeredFadeIn stagger={0.2}>
            {[
              <Button
                key="services"
                onClick={handleServices}
                size="lg"
                className="bg-tvec-navy text-white border-2 border-tvec-navy hover:bg-tvec-navy/90 hover:text-white shadow-2xl"
              >
                Nos Solutions
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            ]}
          </StaggeredFadeIn>
        </div>
      </div>
    </section>
  );
}