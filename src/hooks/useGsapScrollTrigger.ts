'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

interface UseGsapScrollTriggerOptions {
  trigger?: string;
  start?: string;
  end?: string;
  scrub?: boolean | number;
  pin?: boolean;
  markers?: boolean;
  animation?: (element: HTMLElement) => gsap.core.Timeline;
  onEnter?: () => void;
  onLeave?: () => void;
  onEnterBack?: () => void;
  onLeaveBack?: () => void;
}

export function useGsapScrollTrigger(options: UseGsapScrollTriggerOptions = {}) {
  const elementRef = useRef<HTMLElement>(null);

  useEffect(() => {
    // Dynamically import ScrollTrigger to avoid SSR issues
    const loadScrollTrigger = async () => {
      const { ScrollTrigger } = await import('gsap/ScrollTrigger');
      gsap.registerPlugin(ScrollTrigger);

      if (!elementRef.current) return;

      const element = elementRef.current;
      const {
        trigger = element,
        start = 'top 80%',
        end = 'bottom 20%',
        scrub = false,
        pin = false,
        markers = false,
        animation,
        onEnter,
        onLeave,
        onEnterBack,
        onLeaveBack
      } = options;

      // Default animation if none provided
      const defaultAnimation = () => {
        return gsap.timeline()
          .fromTo(element, 
            { 
              opacity: 0, 
              y: 50,
              scale: 0.95
            },
            { 
              opacity: 1, 
              y: 0,
              scale: 1,
              duration: 1,
              ease: 'power2.out'
            }
          );
      };

      const tl = animation ? animation(element) : defaultAnimation();

      ScrollTrigger.create({
        trigger: typeof trigger === 'string' ? trigger : element,
        start,
        end,
        scrub,
        pin,
        markers,
        animation: tl,
        onEnter,
        onLeave,
        onEnterBack,
        onLeaveBack,
      });

      // Cleanup function
      return () => {
        ScrollTrigger.getAll().forEach(trigger => {
          if (trigger.trigger === element || trigger.trigger === trigger) {
            trigger.kill();
          }
        });
      };
    };

    loadScrollTrigger();
  }, [options]);

  return elementRef;
}

// Predefined animations for common use cases
export const gsapAnimations = {
  fadeInUp: (element: HTMLElement) => {
    return gsap.timeline()
      .fromTo(element,
        { opacity: 0, y: 60 },
        { opacity: 1, y: 0, duration: 1, ease: 'power2.out' }
      );
  },

  fadeInLeft: (element: HTMLElement) => {
    return gsap.timeline()
      .fromTo(element,
        { opacity: 0, x: -60 },
        { opacity: 1, x: 0, duration: 1, ease: 'power2.out' }
      );
  },

  fadeInRight: (element: HTMLElement) => {
    return gsap.timeline()
      .fromTo(element,
        { opacity: 0, x: 60 },
        { opacity: 1, x: 0, duration: 1, ease: 'power2.out' }
      );
  },

  scaleIn: (element: HTMLElement) => {
    return gsap.timeline()
      .fromTo(element,
        { opacity: 0, scale: 0.8 },
        { opacity: 1, scale: 1, duration: 0.8, ease: 'back.out(1.7)' }
      );
  },

  electricalReveal: (element: HTMLElement) => {
    return gsap.timeline()
      .fromTo(element,
        { 
          opacity: 0, 
          y: 30,
          filter: 'brightness(0.5) drop-shadow(0 0 0px rgba(59, 130, 246, 0))'
        },
        { 
          opacity: 1, 
          y: 0,
          filter: 'brightness(1) drop-shadow(0 0 10px rgba(59, 130, 246, 0.4))',
          duration: 1.2, 
          ease: 'power2.out' 
        }
      );
  },

  lightningFlash: (element: HTMLElement) => {
    return gsap.timeline()
      .fromTo(element,
        { 
          opacity: 0,
          boxShadow: '0 0 0px rgba(251, 191, 36, 0)'
        },
        { 
          opacity: 1,
          boxShadow: '0 0 20px rgba(251, 191, 36, 0.6)',
          duration: 0.1,
          ease: 'power2.inOut'
        }
      )
      .to(element,
        { 
          boxShadow: '0 0 5px rgba(251, 191, 36, 0.3)',
          duration: 0.5,
          ease: 'power2.out'
        }
      );
  },

  countUp: (element: HTMLElement, endValue: number) => {
    const counter = { value: 0 };
    return gsap.timeline()
      .to(counter, {
        value: endValue,
        duration: 2,
        ease: 'power2.out',
        onUpdate: () => {
          element.textContent = Math.round(counter.value).toString();
        }
      });
  },

  typeWriter: (element: HTMLElement, text: string) => {
    const chars = text.split('');
    element.textContent = '';
    
    return gsap.timeline()
      .to({}, {
        duration: chars.length * 0.05,
        ease: 'none',
        onUpdate: function() {
          const progress = this.progress();
          const currentChar = Math.floor(progress * chars.length);
          element.textContent = chars.slice(0, currentChar).join('');
        }
      });
  },

  parallaxMove: (element: HTMLElement, yPercent: number = -50) => {
    return gsap.timeline()
      .to(element, {
        yPercent,
        ease: 'none'
      });
  },

  staggerChildren: (element: HTMLElement, childSelector: string = '.stagger-child') => {
    const children = element.querySelectorAll(childSelector);
    
    return gsap.timeline()
      .fromTo(children,
        { opacity: 0, y: 30 },
        { 
          opacity: 1, 
          y: 0, 
          duration: 0.6, 
          stagger: 0.1,
          ease: 'power2.out' 
        }
      );
  }
};

// Hook for complex scroll-triggered sequences
export function useGsapSequence() {
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const loadScrollTrigger = async () => {
      const { ScrollTrigger } = await import('gsap/ScrollTrigger');
      gsap.registerPlugin(ScrollTrigger);

      if (!containerRef.current) return;

      const container = containerRef.current;
      const children = container.children;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container,
          start: 'top 80%',
          end: 'bottom 20%',
          scrub: 1,
        }
      });

      // Animate each child with stagger
      tl.fromTo(children,
        { opacity: 0, y: 50 },
        { 
          opacity: 1, 
          y: 0, 
          duration: 1, 
          stagger: 0.2,
          ease: 'power2.out'
        }
      );

      return () => {
        ScrollTrigger.getAll().forEach(trigger => {
          if (trigger.trigger === container) {
            trigger.kill();
          }
        });
      };
    };

    loadScrollTrigger();
  }, []);

  return containerRef;
}