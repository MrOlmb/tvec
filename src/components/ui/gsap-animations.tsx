'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { useGsapScrollTrigger, gsapAnimations } from '@/hooks/useGsapScrollTrigger';

interface AnimatedElementProps {
  children: React.ReactNode;
  animation?: 'fadeInUp' | 'fadeInLeft' | 'fadeInRight' | 'scaleIn' | 'electricalReveal' | 'lightningFlash';
  delay?: number;
  className?: string;
  trigger?: string;
  start?: string;
  end?: string;
}

export function AnimatedElement({
  children,
  animation = 'fadeInUp',
  delay = 0,
  className = '',
  trigger,
  start = 'top 80%',
  end = 'bottom 20%'
}: AnimatedElementProps) {
  const elementRef = useGsapScrollTrigger({
    trigger,
    start,
    end,
    animation: (element) => {
      const timeline = gsapAnimations[animation](element);
      if (delay > 0) {
        timeline.delay(delay);
      }
      return timeline;
    }
  });

  return (
    <div ref={elementRef} className={className}>
      {children}
    </div>
  );
}

interface ElectricalCounterProps {
  endValue: number;
  prefix?: string;
  suffix?: string;
  className?: string;
  duration?: number;
}

export function ElectricalCounter({
  endValue,
  prefix = '',
  suffix = '',
  className = '',
  duration = 2
}: ElectricalCounterProps) {
  const counterRef = useRef<HTMLSpanElement>(null);

  useGsapScrollTrigger({
    start: 'top 80%',
    animation: (element) => {
      const counter = { value: 0 };
      return gsap.timeline()
        .to(counter, {
          value: endValue,
          duration,
          ease: 'power2.out',
          onUpdate: () => {
            if (counterRef.current) {
              counterRef.current.textContent = `${prefix}${Math.round(counter.value)}${suffix}`;
            }
          }
        })
        .to(element, {
          boxShadow: '0 0 15px rgba(59, 130, 246, 0.4)',
          duration: 0.3,
          ease: 'power2.out'
        }, '<');
    }
  });

  return (
    <span ref={counterRef} className={`electric-glow ${className}`}>
      {prefix}0{suffix}
    </span>
  );
}

interface ElectricalTypewriterProps {
  text: string;
  className?: string;
  speed?: number;
  cursor?: boolean;
}

export function ElectricalTypewriter({
  text,
  className = '',
  speed = 0.05,
  cursor = true
}: ElectricalTypewriterProps) {
  const textRef = useRef<HTMLSpanElement>(null);
  const cursorRef = useRef<HTMLSpanElement>(null);

  useGsapScrollTrigger({
    start: 'top 80%',
    animation: (element) => {
      if (!textRef.current) return gsap.timeline();
      
      const chars = text.split('');
      textRef.current.textContent = '';
      
      const tl = gsap.timeline();
      
      // Typewriter effect
      tl.to({}, {
        duration: chars.length * speed,
        ease: 'none',
        onUpdate: function() {
          if (!textRef.current) return;
          const progress = this.progress();
          const currentChar = Math.floor(progress * chars.length);
          textRef.current.textContent = chars.slice(0, currentChar).join('');
        }
      });

      // Cursor blinking
      if (cursor && cursorRef.current) {
        tl.to(cursorRef.current, {
          opacity: 0,
          duration: 0.5,
          repeat: -1,
          yoyo: true,
          ease: 'power2.inOut'
        }, '<');
      }

      return tl;
    }
  });

  return (
    <span className={`lightning-glow ${className}`}>
      <span ref={textRef}></span>
      {cursor && <span ref={cursorRef} className="text-tvec-yellow">|</span>}
    </span>
  );
}

interface StaggeredChildrenProps {
  children: React.ReactNode;
  staggerDelay?: number;
  className?: string;
  childSelector?: string;
}

export function StaggeredChildren({
  children,
  staggerDelay = 0.1,
  className = '',
  childSelector = '.stagger-child'
}: StaggeredChildrenProps) {
  const containerRef = useGsapScrollTrigger({
    start: 'top 80%',
    animation: (element) => {
      const children = element.querySelectorAll(childSelector);
      
      return gsap.timeline()
        .fromTo(children,
          { opacity: 0, y: 30, scale: 0.95 },
          { 
            opacity: 1, 
            y: 0, 
            scale: 1,
            duration: 0.6, 
            stagger: staggerDelay,
            ease: 'power2.out' 
          }
        );
    }
  });

  return (
    <div ref={containerRef} className={className}>
      {children}
    </div>
  );
}

interface ParallaxElementProps {
  children: React.ReactNode;
  yPercent?: number;
  className?: string;
  speed?: number;
}

export function ParallaxElement({
  children,
  yPercent = -50,
  className = '',
  speed = 1
}: ParallaxElementProps) {
  const elementRef = useGsapScrollTrigger({
    start: 'top bottom',
    end: 'bottom top',
    scrub: speed,
    animation: (element) => {
      return gsap.timeline()
        .to(element, {
          yPercent,
          ease: 'none'
        });
    }
  });

  return (
    <div ref={elementRef} className={className}>
      {children}
    </div>
  );
}

interface ElectricalProgressBarProps {
  progress: number;
  className?: string;
  color?: 'blue' | 'yellow' | 'green';
  height?: string;
  animated?: boolean;
}

export function ElectricalProgressBar({
  progress,
  className = '',
  color = 'blue',
  height = 'h-2',
  animated = true
}: ElectricalProgressBarProps) {
  const progressRef = useRef<HTMLDivElement>(null);
  const barRef = useRef<HTMLDivElement>(null);

  const colorClasses = {
    blue: 'bg-tvec-blue electric-glow',
    yellow: 'bg-tvec-yellow lightning-glow',
    green: 'bg-tvec-green'
  };

  useGsapScrollTrigger({
    start: 'top 80%',
    animation: (element) => {
      if (!barRef.current) return gsap.timeline();
      
      const tl = gsap.timeline();
      
      if (animated) {
        tl.fromTo(barRef.current,
          { width: '0%' },
          { 
            width: `${progress}%`, 
            duration: 1.5, 
            ease: 'power2.out' 
          }
        );
      }

      return tl;
    }
  });

  return (
    <div 
      ref={progressRef} 
      className={`w-full bg-gray-700 rounded-full overflow-hidden ${height} ${className}`}
    >
      <div
        ref={barRef}
        className={`${height} rounded-full transition-all duration-300 ${colorClasses[color]}`}
        style={{ width: animated ? '0%' : `${progress}%` }}
      />
    </div>
  );
}

interface ElectricalRevealProps {
  children: React.ReactNode;
  direction?: 'up' | 'down' | 'left' | 'right';
  className?: string;
  delay?: number;
}

export function ElectricalReveal({
  children,
  direction = 'up',
  className = '',
  delay = 0
}: ElectricalRevealProps) {
  const directionMap = {
    up: { y: 50, x: 0 },
    down: { y: -50, x: 0 },
    left: { y: 0, x: 50 },
    right: { y: 0, x: -50 }
  };

  const elementRef = useGsapScrollTrigger({
    start: 'top 80%',
    animation: (element) => {
      const { x, y } = directionMap[direction];
      
      return gsap.timeline()
        .fromTo(element,
          { 
            opacity: 0, 
            x, 
            y,
            filter: 'brightness(0.5) drop-shadow(0 0 0px rgba(59, 130, 246, 0))'
          },
          { 
            opacity: 1, 
            x: 0, 
            y: 0,
            filter: 'brightness(1) drop-shadow(0 0 10px rgba(59, 130, 246, 0.4))',
            duration: 1, 
            delay,
            ease: 'power2.out' 
          }
        );
    }
  });

  return (
    <div ref={elementRef} className={className}>
      {children}
    </div>
  );
}

interface ElectricalHoverCardProps {
  children: React.ReactNode;
  className?: string;
  glowColor?: 'blue' | 'yellow';
}

export function ElectricalHoverCard({
  children,
  className = '',
  glowColor = 'blue'
}: ElectricalHoverCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!cardRef.current) return;

    const card = cardRef.current;
    const glowClass = glowColor === 'blue' ? 'electric-glow' : 'lightning-glow';

    const handleMouseEnter = () => {
      gsap.to(card, {
        scale: 1.05,
        rotationY: 5,
        rotationX: 5,
        duration: 0.3,
        ease: 'power2.out'
      });
      card.classList.add(glowClass);
    };

    const handleMouseLeave = () => {
      gsap.to(card, {
        scale: 1,
        rotationY: 0,
        rotationX: 0,
        duration: 0.3,
        ease: 'power2.out'
      });
      card.classList.remove(glowClass);
    };

    card.addEventListener('mouseenter', handleMouseEnter);
    card.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      card.removeEventListener('mouseenter', handleMouseEnter);
      card.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [glowColor]);

  return (
    <div 
      ref={cardRef} 
      className={`transition-all duration-300 transform-gpu ${className}`}
      style={{ transformStyle: 'preserve-3d' }}
    >
      {children}
    </div>
  );
}