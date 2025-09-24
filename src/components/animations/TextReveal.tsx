'use client';

import { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';

interface TextRevealProps {
  text: string;
  className?: string;
  delay?: number;
  duration?: number;
  trigger?: 'scroll' | 'immediate';
}

export function TextReveal({ 
  text, 
  className, 
  delay = 0, 
  duration = 0.05,
  trigger = 'scroll'
}: TextRevealProps) {
  const [isVisible, setIsVisible] = useState(trigger === 'immediate');
  const [visibleChars, setVisibleChars] = useState(0);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (trigger === 'scroll') {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        },
        { threshold: 0.1 }
      );

      if (elementRef.current) {
        observer.observe(elementRef.current);
      }

      return () => observer.disconnect();
    }
  }, [trigger]);

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        const interval = setInterval(() => {
          setVisibleChars(prev => {
            if (prev >= text.length) {
              clearInterval(interval);
              return prev;
            }
            return prev + 1;
          });
        }, duration * 1000);

        return () => clearInterval(interval);
      }, delay * 1000);

      return () => clearTimeout(timer);
    }
  }, [isVisible, text.length, delay, duration]);

  return (
    <div ref={elementRef} className={cn('overflow-hidden', className)}>
      <span>
        <span className="opacity-100">
          {text.slice(0, visibleChars)}
        </span>
        <span className="opacity-20">
          {text.slice(visibleChars)}
        </span>
        {visibleChars < text.length && (
          <span className="animate-pulse text-tvec-green">|</span>
        )}
      </span>
    </div>
  );
}

// Split Text Animation
interface SplitTextProps {
  text: string;
  className?: string;
  delay?: number;
  stagger?: number;
  trigger?: 'scroll' | 'immediate';
}

export function SplitText({ 
  text, 
  className, 
  delay = 0, 
  stagger = 0.1,
  trigger = 'scroll'
}: SplitTextProps) {
  const [isVisible, setIsVisible] = useState(trigger === 'immediate');
  const elementRef = useRef<HTMLDivElement>(null);
  const words = text.split(' ');

  useEffect(() => {
    if (trigger === 'scroll') {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        },
        { threshold: 0.1 }
      );

      if (elementRef.current) {
        observer.observe(elementRef.current);
      }

      return () => observer.disconnect();
    }
  }, [trigger]);

  return (
    <div ref={elementRef} className={cn('overflow-hidden', className)}>
      {words.map((word, wordIndex) => (
        <span key={wordIndex} className="inline-block mr-2">
          {word.split('').map((char, charIndex) => (
            <span
              key={charIndex}
              className={cn(
                'inline-block transition-all duration-700 ease-out',
                isVisible 
                  ? 'transform translate-y-0 opacity-100' 
                  : 'transform translate-y-8 opacity-0'
              )}
              style={{
                transitionDelay: `${delay + (wordIndex * words.length + charIndex) * stagger}s`
              }}
            >
              {char}
            </span>
          ))}
        </span>
      ))}
    </div>
  );
}