import { Loader2, Zap } from 'lucide-react';
import { cn } from '@/lib/utils';

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'default' | 'tvec' | 'minimal';
  text?: string;
  className?: string;
}

const sizeClasses = {
  sm: 'w-4 h-4',
  md: 'w-6 h-6',
  lg: 'w-8 h-8',
  xl: 'w-12 h-12'
};

const textSizeClasses = {
  sm: 'text-sm',
  md: 'text-base',
  lg: 'text-lg',
  xl: 'text-xl'
};

export function LoadingSpinner({ 
  size = 'md', 
  variant = 'default', 
  text, 
  className 
}: LoadingSpinnerProps) {
  if (variant === 'tvec') {
    return (
      <div className={cn('flex flex-col items-center justify-center space-y-4', className)}>
        <div className="relative">
          <div className={cn('animate-spin text-tvec-green', sizeClasses[size])}>
            <Loader2 className="w-full h-full" />
          </div>
          <div className={cn('absolute inset-0 animate-ping text-tvec-yellow opacity-30', sizeClasses[size])}>
            <Zap className="w-full h-full" />
          </div>
        </div>
        {text && (
          <p className={cn('text-gray-600 font-medium animate-pulse', textSizeClasses[size])}>
            {text}
          </p>
        )}
      </div>
    );
  }

  if (variant === 'minimal') {
    return (
      <div className={cn('inline-flex items-center space-x-2', className)}>
        <Loader2 className={cn('animate-spin text-tvec-green', sizeClasses[size])} />
        {text && (
          <span className={cn('text-gray-600', textSizeClasses[size])}>{text}</span>
        )}
      </div>
    );
  }

  return (
    <div className={cn('flex flex-col items-center justify-center space-y-3', className)}>
      <div className="relative">
        <div className={cn('animate-spin text-tvec-green', sizeClasses[size])}>
          <Loader2 className="w-full h-full" />
        </div>
        <div className={cn('absolute inset-0 animate-pulse text-tvec-green/20', sizeClasses[size])}>
          <div className="w-full h-full rounded-full border-2 border-current"></div>
        </div>
      </div>
      {text && (
        <p className={cn('text-gray-600 animate-fade-in', textSizeClasses[size])}>
          {text}
        </p>
      )}
    </div>
  );
}

// Full page loading overlay
export function LoadingOverlay({ text = 'Chargement...' }: { text?: string }) {
  return (
    <div className="fixed inset-0 bg-white/80 backdrop-blur-sm flex items-center justify-center z-50">
      <LoadingSpinner variant="tvec" size="xl" text={text} />
    </div>
  );
}

// Card loading skeleton
export function LoadingSkeleton({ className }: { className?: string }) {
  return (
    <div className={cn('animate-pulse', className)}>
      <div className="loading-shimmer h-4 rounded mb-2"></div>
      <div className="loading-shimmer h-4 rounded mb-2 w-3/4"></div>
      <div className="loading-shimmer h-4 rounded w-1/2"></div>
    </div>
  );
}