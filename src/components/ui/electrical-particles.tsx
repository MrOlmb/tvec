'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  color: string;
  duration: number;
  delay: number;
}

interface ElectricalParticlesProps {
  count?: number;
  colors?: string[];
  className?: string;
}

export function ElectricalParticles({ 
  count = 30, 
  colors = ['#3b82f6', '#60a5fa', '#93c5fd'], // Removed yellow, using only blues
  className = ''
}: ElectricalParticlesProps) {
  const [particles, setParticles] = useState<Particle[]>([]);
  const [containerSize, setContainerSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const updateContainerSize = () => {
      setContainerSize(prev => {
        const newSize = {
          width: window.innerWidth,
          height: window.innerHeight
        };
        // Only update if size actually changed
        if (prev.width !== newSize.width || prev.height !== newSize.height) {
          return newSize;
        }
        return prev;
      });
    };

    updateContainerSize();
    window.addEventListener('resize', updateContainerSize);

    return () => window.removeEventListener('resize', updateContainerSize);
  }, []);

  useEffect(() => {
    const generateParticles = (): Particle[] => {
      return Array.from({ length: count }, (_, i) => ({
        id: i,
        x: Math.random() * containerSize.width,
        y: Math.random() * containerSize.height,
        size: Math.random() * 4 + 1,
        color: colors[Math.floor(Math.random() * colors.length)],
        duration: Math.random() * 3 + 2,
        delay: Math.random() * 2
      }));
    };

    if (containerSize.width > 0 && containerSize.height > 0) {
      setParticles(generateParticles());
    }
  }, [count, colors, containerSize.width, containerSize.height]);

  return (
    <div className={`fixed inset-0 pointer-events-none overflow-hidden ${className}`}>
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full"
          style={{
            width: particle.size,
            height: particle.size,
            backgroundColor: particle.color,
            boxShadow: `0 0 ${particle.size * 3}px ${particle.color}`,
          }}
          initial={{
            x: particle.x,
            y: particle.y,
            opacity: 0,
            scale: 0
          }}
          animate={{
            x: [
              particle.x,
              particle.x + (Math.random() - 0.5) * 200,
              particle.x + (Math.random() - 0.5) * 300,
              particle.x
            ],
            y: [
              particle.y,
              particle.y + (Math.random() - 0.5) * 150,
              particle.y + (Math.random() - 0.5) * 200,
              particle.y
            ],
            opacity: [0, 1, 0.8, 0],
            scale: [0, 1, 1.2, 0]
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      ))}
    </div>
  );
}

export function ElectricalGrid({ 
  className = '',
  intensity = 0.3
}: { 
  className?: string;
  intensity?: number;
}) {
  return (
    <div className={`absolute inset-0 pointer-events-none ${className}`}>
      <svg 
        width="100%" 
        height="100%" 
        className="absolute inset-0"
        style={{ 
          background: `
            linear-gradient(rgba(59, 130, 246, ${intensity}) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59, 130, 246, ${intensity}) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }}
      >
        {/* Animated electrical lines */}
        <motion.line
          x1="0%"
          y1="20%"
          x2="100%"
          y2="25%"
          stroke="rgba(251, 191, 36, 0.4)"
          strokeWidth="2"
          strokeDasharray="10,5"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
        />
        <motion.line
          x1="0%"
          y1="60%"
          x2="100%"
          y2="65%"
          stroke="rgba(251, 191, 36, 0.3)"
          strokeWidth="1"
          strokeDasharray="5,10"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 4, repeat: Infinity, ease: "linear", delay: 1 }}
        />
        <motion.line
          x1="0%"
          y1="80%"
          x2="100%"
          y2="85%"
          stroke="rgba(59, 130, 246, 0.4)"
          strokeWidth="1.5"
          strokeDasharray="8,3"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "linear", delay: 0.5 }}
        />
      </svg>
    </div>
  );
}

export function ElectricalLightning({ 
  className = '',
  count = 3
}: {
  className?: string;
  count?: number;
}) {
  const [bolts, setBolts] = useState<Array<{ id: number; path: string; delay: number }>>([]);

  useEffect(() => {
    const generateLightningPath = (index: number): string => {
      const startX = Math.random() * 100;
      const segments = 8;
      let path = `M ${startX} 0`;
      
      for (let i = 1; i <= segments; i++) {
        const x = startX + (Math.random() - 0.5) * 20;
        const y = (i / segments) * 100;
        path += ` L ${x} ${y}`;
      }
      
      return path;
    };

    const lightningBolts = Array.from({ length: count }, (_, i) => ({
      id: i,
      path: generateLightningPath(i),
      delay: Math.random() * 3
    }));

    setBolts(lightningBolts);
  }, [count]);

  return (
    <div className={`absolute inset-0 pointer-events-none ${className}`}>
      <svg width="100%" height="100%" className="absolute inset-0">
        {bolts.map((bolt) => (
          <motion.path
            key={bolt.id}
            d={bolt.path}
            fill="none"
            stroke="rgba(251, 191, 36, 0.8)"
            strokeWidth="2"
            strokeLinecap="round"
            filter="url(#electricGlow)"
            initial={{ 
              pathLength: 0, 
              opacity: 0,
              strokeWidth: 0
            }}
            animate={{ 
              pathLength: [0, 1, 0], 
              opacity: [0, 1, 0],
              strokeWidth: [0, 3, 0]
            }}
            transition={{
              duration: 0.8,
              delay: bolt.delay,
              repeat: Infinity,
              repeatDelay: 4,
              ease: "easeInOut"
            }}
          />
        ))}
        
        {/* Glow filter definition */}
        <defs>
          <filter id="electricGlow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
            <feMerge> 
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
      </svg>
    </div>
  );
}