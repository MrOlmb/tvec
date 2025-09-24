'use client';

import { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';

interface FadeContentProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  trigger?: 'scroll' | 'immediate';
  threshold?: number;
  blur?: boolean;
  scale?: boolean;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
}

export function FadeContent({ 
  children,
  className,
  delay = 0,
  duration = 0.8,
  trigger = 'scroll',
  threshold = 0.1,
  blur = true,
  scale = false,
  direction = 'up'
}: FadeContentProps) {
  const [isVisible, setIsVisible] = useState(trigger === 'immediate');
  const [isLoaded, setIsLoaded] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (trigger === 'scroll') {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              setIsVisible(true);
              // Additional delay for content load simulation
              setTimeout(() => setIsLoaded(true), 200);
            }, delay * 1000);
          }
        },
        { threshold }
      );

      if (elementRef.current) {
        observer.observe(elementRef.current);
      }

      return () => observer.disconnect();
    } else {
      setTimeout(() => {
        setIsVisible(true);
        setTimeout(() => setIsLoaded(true), 200);
      }, delay * 1000);
    }
  }, [trigger, threshold, delay]);

  const getTransformClasses = () => {
    if (!isVisible) {
      switch (direction) {
        case 'up':
          return 'translate-y-8';
        case 'down':
          return '-translate-y-8';
        case 'left':
          return 'translate-x-8';
        case 'right':
          return '-translate-x-8';
        default:
          return '';
      }
    }
    return 'translate-x-0 translate-y-0';
  };

  return (
    <div
      ref={elementRef}
      className={cn(
        'transition-all ease-out will-change-transform',
        isVisible ? 'opacity-100' : 'opacity-0',
        blur && !isVisible ? 'blur-sm' : 'blur-0',
        scale && !isVisible ? 'scale-95' : 'scale-100',
        getTransformClasses(),
        className
      )}
      style={{
        transitionDuration: `${duration}s`,
        transitionProperty: 'opacity, transform, filter'
      }}
    >
      {/* Content with loading state */}
      <div className={cn(
        'relative transition-opacity duration-300',
        isLoaded ? 'opacity-100' : 'opacity-60'
      )}>
        {children}
        
        {/* Loading overlay */}
        {isVisible && !isLoaded && (
          <div className="absolute inset-0 flex items-center justify-center bg-white/10 backdrop-blur-sm rounded-lg">
            <div className="flex items-center space-x-2 text-white">
              <div className="w-2 h-2 bg-tvec-green rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
              <div className="w-2 h-2 bg-tvec-yellow rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
              <div className="w-2 h-2 bg-tvec-green rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

// Advanced Fade Content with Shimmer Effect
export function FadeContentShimmer({ 
  children,
  className,
  delay = 0
}: { 
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const [isVisible, setIsVisible] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
            setTimeout(() => setIsLoaded(true), 800);
          }, delay * 1000);
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
        'relative transition-all duration-1000 ease-out',
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6',
        className
      )}
    >
      {/* Shimmer loading effect */}
      {isVisible && !isLoaded && (
        <div className="absolute inset-0 overflow-hidden rounded-lg">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full animate-shimmer" 
               style={{
                 animation: 'shimmer 1.5s infinite',
                 background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)'
               }} />
        </div>
      )}
      
      {/* Content */}
      <div className={cn(
        'transition-all duration-500',
        isLoaded ? 'opacity-100 blur-0' : 'opacity-70 blur-[1px]'
      )}>
        {children}
      </div>
    </div>
  );
}

// Electric Fade (TVEC themed)
export function ElectricFade({ 
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
        'relative transition-all duration-1000 ease-out',
        isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95',
        className
      )}
    >
      {/* Electric border effect */}
      {isVisible && (
        <div className="absolute inset-0 -z-10 rounded-lg">
          <div className="absolute inset-0 bg-gradient-to-r from-tvec-green/20 via-tvec-yellow/20 to-tvec-green/20 blur-md animate-pulse" />
          <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-tvec-yellow to-transparent animate-pulse" />
          <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-tvec-green to-transparent animate-pulse" />
        </div>
      )}
      
      {children}
    </div>
  );
}