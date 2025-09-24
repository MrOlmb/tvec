'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface ElectricalSkeletonProps {
  className?: string;
  variant?: 'text' | 'card' | 'image' | 'button' | 'circle';
  lines?: number;
  width?: string | number;
  height?: string | number;
}

export function ElectricalSkeleton({
  className = '',
  variant = 'text',
  lines = 1,
  width = '100%',
  height = 'auto'
}: ElectricalSkeletonProps) {
  const baseClasses = "bg-gradient-to-r from-tvec-blue/20 via-tvec-blue-light/30 to-tvec-blue/20 relative overflow-hidden";
  
  const variants = {
    text: "h-4 rounded",
    card: "h-48 rounded-lg",
    image: "aspect-video rounded-lg",
    button: "h-10 rounded-full px-6",
    circle: "aspect-square rounded-full"
  };

  const getSkeletonElement = (index: number = 0) => (
    <motion.div
      key={index}
      className={cn(baseClasses, variants[variant], className)}
      style={{ width, height: variant === 'text' ? '1rem' : height }}
      initial={{ opacity: 0.3 }}
      animate={{ opacity: [0.3, 0.8, 0.3] }}
      transition={{
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut",
        delay: index * 0.1
      }}
    >
      {/* Electrical flow animation */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-tvec-yellow/40 to-transparent"
        initial={{ x: '-100%' }}
        animate={{ x: '100%' }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: index * 0.2
        }}
      />
      
      {/* Lightning effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-tvec-blue-light/20 to-transparent"
        initial={{ x: '-100%', opacity: 0 }}
        animate={{ 
          x: '100%',
          opacity: [0, 1, 0]
        }}
        transition={{
          duration: 0.8,
          repeat: Infinity,
          repeatDelay: 2,
          ease: "easeOut",
          delay: 1 + index * 0.1
        }}
      />
    </motion.div>
  );

  if (variant === 'text' && lines > 1) {
    return (
      <div className="space-y-2">
        {Array.from({ length: lines }, (_, i) => 
          getSkeletonElement(i)
        )}
      </div>
    );
  }

  return getSkeletonElement();
}

export function ElectricalCardSkeleton({ className = '' }: { className?: string }) {
  return (
    <div className={cn("p-6 bg-tvec-navy/10 rounded-lg border border-tvec-blue/20 electrical-grid", className)}>
      <ElectricalSkeleton variant="circle" className="w-12 h-12 mb-4" />
      <ElectricalSkeleton variant="text" className="h-6 mb-3" width="80%" />
      <ElectricalSkeleton variant="text" lines={3} className="mb-4" />
      <ElectricalSkeleton variant="button" width="120px" />
    </div>
  );
}

export function ElectricalImageSkeleton({ className = '' }: { className?: string }) {
  return (
    <div className={cn("relative", className)}>
      <ElectricalSkeleton variant="image" />
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-tvec-blue/20 to-tvec-yellow/20 rounded-lg"
        animate={{
          opacity: [0.2, 0.5, 0.2]
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </div>
  );
}

export function ElectricalGallerySkeleton({ 
  items = 6, 
  columns = 3,
  className = '' 
}: { 
  items?: number;
  columns?: number;
  className?: string;
}) {
  return (
    <div 
      className={cn("grid gap-4", className)}
      style={{ gridTemplateColumns: `repeat(${columns}, 1fr)` }}
    >
      {Array.from({ length: items }, (_, i) => (
        <ElectricalImageSkeleton key={i} />
      ))}
    </div>
  );
}

export function ElectricalFormSkeleton({ className = '' }: { className?: string }) {
  return (
    <div className={cn("space-y-6 p-6 bg-tvec-navy/10 rounded-lg border border-tvec-blue/20", className)}>
      <ElectricalSkeleton variant="text" className="h-8 mb-6" width="60%" />
      
      <div className="space-y-4">
        <div>
          <ElectricalSkeleton variant="text" className="h-4 mb-2" width="25%" />
          <ElectricalSkeleton className="h-10 rounded" />
        </div>
        
        <div>
          <ElectricalSkeleton variant="text" className="h-4 mb-2" width="20%" />
          <ElectricalSkeleton className="h-10 rounded" />
        </div>
        
        <div>
          <ElectricalSkeleton variant="text" className="h-4 mb-2" width="30%" />
          <ElectricalSkeleton className="h-24 rounded" />
        </div>
      </div>
      
      <ElectricalSkeleton variant="button" width="140px" className="h-12" />
    </div>
  );
}

export function ElectricalTableSkeleton({ 
  rows = 5, 
  columns = 4,
  className = '' 
}: { 
  rows?: number;
  columns?: number;
  className?: string;
}) {
  return (
    <div className={cn("w-full", className)}>
      {/* Header */}
      <div className="grid gap-4 p-4 bg-tvec-navy/20 rounded-t-lg border-b border-tvec-blue/20" style={{ gridTemplateColumns: `repeat(${columns}, 1fr)` }}>
        {Array.from({ length: columns }, (_, i) => (
          <ElectricalSkeleton key={i} variant="text" className="h-5" width="80%" />
        ))}
      </div>
      
      {/* Rows */}
      <div className="space-y-2">
        {Array.from({ length: rows }, (_, rowIndex) => (
          <div 
            key={rowIndex}
            className="grid gap-4 p-4 border-b border-tvec-blue/10 hover:bg-tvec-blue/5"
            style={{ gridTemplateColumns: `repeat(${columns}, 1fr)` }}
          >
            {Array.from({ length: columns }, (_, colIndex) => (
              <ElectricalSkeleton 
                key={colIndex} 
                variant="text" 
                className="h-4" 
                width={`${60 + Math.random() * 30}%`}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

interface ElectricalLoadingOverlayProps {
  isLoading: boolean;
  children: React.ReactNode;
  skeletonComponent?: React.ReactNode;
  className?: string;
}

export function ElectricalLoadingOverlay({
  isLoading,
  children,
  skeletonComponent,
  className = ''
}: ElectricalLoadingOverlayProps) {
  return (
    <div className={cn("relative", className)}>
      {isLoading ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="electrical-particles"
        >
          {skeletonComponent || <ElectricalSkeleton />}
        </motion.div>
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {children}
        </motion.div>
      )}
    </div>
  );
}