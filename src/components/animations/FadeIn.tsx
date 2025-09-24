'use client';

import { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';

interface FadeInProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  distance?: number;
  trigger?: 'scroll' | 'immediate';
  threshold?: number;
}

export function FadeIn({ 
  children,
  className,
  delay = 0,
  duration = 0.6,
  direction = 'up',
  distance = 30,
  trigger = 'scroll',
  threshold = 0.1
}: FadeInProps) {
  const [isVisible, setIsVisible] = useState(trigger === 'immediate');
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (trigger === 'scroll') {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        },
        { threshold }
      );

      if (elementRef.current) {
        observer.observe(elementRef.current);
      }

      return () => observer.disconnect();
    }
  }, [trigger, threshold]);

  const getTransformClasses = () => {
    if (isVisible) return 'translate-x-0 translate-y-0';
    
    switch (direction) {
      case 'up':
        return `translate-y-${distance}`;
      case 'down':
        return `-translate-y-${distance}`;
      case 'left':
        return `translate-x-${distance}`;
      case 'right':
        return `-translate-x-${distance}`;
      default:
        return '';
    }
  };

  return (
    <div
      ref={elementRef}
      className={cn(
        'transition-all ease-out',
        isVisible ? 'opacity-100' : 'opacity-0',
        getTransformClasses(),
        className
      )}
      style={{
        transitionDuration: `${duration}s`,
        transitionDelay: `${delay}s`
      }}
    >
      {children}
    </div>
  );
}

// Staggered Fade In for lists
interface StaggeredFadeInProps {
  children: React.ReactNode[];
  className?: string;
  stagger?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  trigger?: 'scroll' | 'immediate';
}

export function StaggeredFadeIn({
  children,
  className,
  stagger = 0.1,
  direction = 'up',
  trigger = 'scroll'
}: StaggeredFadeInProps) {
  return (
    <div className={className}>
      {children.map((child, index) => (
        <FadeIn
          key={index}
          delay={index * stagger}
          direction={direction}
          trigger={trigger}
        >
          {child}
        </FadeIn>
      ))}
    </div>
  );
}

// Electric Surge Animation (TVEC themed)
export function ElectricSurge({ 
  children,
  className,
  delay = 0
}: { 
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay * 1000);
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [delay]);

  return (
    <div
      ref={elementRef}
      className={cn(
        'relative transition-all duration-700 ease-out',
        isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95',
        className
      )}
    >
      {isVisible && (
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-tvec-yellow/20 to-transparent animate-pulse" />
          <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-tvec-green to-transparent animate-pulse" />
          <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-tvec-green to-transparent animate-pulse" />
        </div>
      )}
      {children}
    </div>
  );
}