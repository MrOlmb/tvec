'use client';

import { cn } from '@/lib/utils';

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg';
  color?: 'primary' | 'secondary' | 'tvec-green' | 'tvec-yellow';
  className?: string;
}

export function LoadingSpinner({ 
  size = 'md', 
  color = 'tvec-green',
  className 
}: LoadingSpinnerProps) {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12'
  };

  const colorClasses = {
    primary: 'border-blue-600',
    secondary: 'border-gray-600',
    'tvec-green': 'border-tvec-green',
    'tvec-yellow': 'border-tvec-yellow'
  };

  return (
    <div
      className={cn(
        'animate-spin rounded-full border-2 border-transparent',
        `border-t-current ${colorClasses[color]}`,
        sizeClasses[size],
        className
      )}
      role="status"
      aria-label="Loading"
    >
      <span className="sr-only">Loading...</span>
    </div>
  );
}

// Electric Grid Loading Animation (TVEC themed)
export function ElectricGridLoader({ className }: { className?: string }) {
  return (
    <div className={cn('flex items-center justify-center', className)}>
      <div className="relative">
        {/* Main Grid */}
        <div className="grid grid-cols-3 gap-1">
          {Array.from({ length: 9 }).map((_, i) => (
            <div
              key={i}
              className="w-3 h-3 bg-tvec-green rounded-sm animate-pulse"
              style={{
                animationDelay: `${i * 0.1}s`,
                animationDuration: '1.2s'
              }}
            />
          ))}
        </div>
        
        {/* Electric Lines */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-8 h-0.5 bg-tvec-yellow opacity-80 animate-pulse" />
        </div>
        <div className="absolute inset-0 flex items-center justify-center rotate-90">
          <div className="w-8 h-0.5 bg-tvec-yellow opacity-80 animate-pulse" />
        </div>
      </div>
    </div>
  );
}