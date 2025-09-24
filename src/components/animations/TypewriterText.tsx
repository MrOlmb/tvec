'use client';

import { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';

interface TypewriterTextProps {
  text: string | string[];
  className?: string;
  speed?: number;
  delay?: number;
  loop?: boolean;
  cursor?: boolean;
  trigger?: 'scroll' | 'immediate';
}

export function TypewriterText({ 
  text, 
  className, 
  speed = 50, 
  delay = 0,
  loop = false,
  cursor = true,
  trigger = 'scroll'
}: TypewriterTextProps) {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(false);
  const [isVisible, setIsVisible] = useState(trigger === 'immediate');
  const elementRef = useRef<HTMLDivElement>(null);
  
  const textArray = Array.isArray(text) ? text : [text];
  const currentText = textArray[currentIndex] || '';

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
    if (!isVisible) return;

    const timer = setTimeout(() => {
      setIsTyping(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [isVisible, delay]);

  useEffect(() => {
    if (!isTyping) return;

    let i = 0;
    const typingInterval = setInterval(() => {
      if (i <= currentText.length) {
        setDisplayText(currentText.slice(0, i));
        i++;
      } else {
        clearInterval(typingInterval);
        
        if (loop && textArray.length > 1) {
          setTimeout(() => {
            // Start erasing
            const erasingInterval = setInterval(() => {
              setDisplayText(prev => {
                if (prev.length === 0) {
                  clearInterval(erasingInterval);
                  setCurrentIndex(prevIndex => 
                    (prevIndex + 1) % textArray.length
                  );
                  return '';
                }
                return prev.slice(0, -1);
              });
            }, speed / 2);
          }, 2000);
        }
      }
    }, speed);

    return () => clearInterval(typingInterval);
  }, [currentText, isTyping, speed, loop, textArray.length]);

  return (
    <div ref={elementRef} className={cn('inline-block', className)}>
      <span>{displayText}</span>
      {cursor && (
        <span className="animate-pulse text-tvec-green ml-1">|</span>
      )}
    </div>
  );
}

// Electric Typewriter (TVEC themed)
export function ElectricTypewriter({ 
  text, 
  className,
  speed = 80 
}: { 
  text: string; 
  className?: string;
  speed?: number;
}) {
  const [displayText, setDisplayText] = useState('');
  const [showSpark, setShowSpark] = useState(false);

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      if (i <= text.length) {
        setDisplayText(text.slice(0, i));
        setShowSpark(true);
        setTimeout(() => setShowSpark(false), 100);
        i++;
      } else {
        clearInterval(interval);
        setShowSpark(false);
      }
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed]);

  return (
    <div className={cn('relative inline-block', className)}>
      <span>{displayText}</span>
      {showSpark && (
        <span className="absolute -top-1 -right-1">
          <span className="text-tvec-yellow text-xs animate-ping">⚡</span>
        </span>
      )}
      <span className="animate-pulse text-tvec-green ml-1">|</span>
    </div>
  );
}