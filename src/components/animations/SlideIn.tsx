'use client';

import { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';

interface SlideInProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  direction?: 'left' | 'right' | 'up' | 'down';
  distance?: string;
  trigger?: 'scroll' | 'immediate';
  threshold?: number;
}

export function SlideIn({ 
  children,
  className,
  delay = 0,
  duration = 0.6,
  direction = 'left',
  distance = '100px',
  trigger = 'scroll',
  threshold = 0.1
}: SlideInProps) {
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

  const getInitialTransform = () => {
    if (isVisible) return 'translate3d(0, 0, 0)';
    
    switch (direction) {
      case 'left':
        return `translate3d(-${distance}, 0, 0)`;
      case 'right':
        return `translate3d(${distance}, 0, 0)`;
      case 'up':
        return `translate3d(0, -${distance}, 0)`;
      case 'down':
        return `translate3d(0, ${distance}, 0)`;
      default:
        return 'translate3d(0, 0, 0)';
    }
  };

  return (
    <div
      ref={elementRef}
      className={cn(
        'transition-all ease-out will-change-transform',
        isVisible ? 'opacity-100' : 'opacity-0',
        className
      )}
      style={{
        transform: getInitialTransform(),
        transitionDuration: `${duration}s`,
        transitionDelay: `${delay}s`
      }}
    >
      {children}
    </div>
  );
}

// Staggered Slide In for multiple cards
interface StaggeredSlideInProps {
  children: React.ReactNode[];
  className?: string;
  stagger?: number;
  direction?: 'left' | 'right' | 'up' | 'down';
  trigger?: 'scroll' | 'immediate';
  containerClassName?: string;
}

export function StaggeredSlideIn({
  children,
  className,
  stagger = 0.1,
  direction = 'left',
  trigger = 'scroll',
  containerClassName
}: StaggeredSlideInProps) {
  return (
    <div className={containerClassName}>
      {children.map((child, index) => (
        <SlideIn
          key={index}
          delay={index * stagger}
          direction={direction}
          trigger={trigger}
          className={className}
        >
          {child}
        </SlideIn>
      ))}
    </div>
  );
}

// Card Hover Slide Animation
interface SlideCardProps {
  children: React.ReactNode;
  className?: string;
  hoverDirection?: 'left' | 'right' | 'up' | 'down';
  hoverDistance?: string;
}

export function SlideCard({ 
  children,
  className,
  hoverDirection = 'up',
  hoverDistance = '8px'
}: SlideCardProps) {
  const getHoverTransform = () => {
    switch (hoverDirection) {
      case 'left':
        return `translate3d(-${hoverDistance}, 0, 0)`;
      case 'right':
        return `translate3d(${hoverDistance}, 0, 0)`;
      case 'up':
        return `translate3d(0, -${hoverDistance}, 0)`;
      case 'down':
        return `translate3d(0, ${hoverDistance}, 0)`;
      default:
        return 'translate3d(0, 0, 0)';
    }
  };

  return (
    <div
      className={cn(
        'transition-all duration-300 ease-out will-change-transform hover:shadow-lg',
        className
      )}
      style={{
        transform: 'translate3d(0, 0, 0)'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = getHoverTransform();
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translate3d(0, 0, 0)';
      }}
    >
      {children}
    </div>
  );
}

// Electric Slide (TVEC themed)
export function ElectricSlide({ 
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
        'relative transition-all duration-700 ease-out will-change-transform',
        isVisible 
          ? 'opacity-100 translate-x-0' 
          : 'opacity-0 translate-x-8',
        className
      )}
    >
      {/* Electric trail effect */}
      {isVisible && (
        <div className="absolute -left-2 top-1/2 -translate-y-1/2 w-1 h-full bg-gradient-to-b from-transparent via-tvec-green to-transparent opacity-50 animate-pulse" />
      )}
      {children}
    </div>
  );
}