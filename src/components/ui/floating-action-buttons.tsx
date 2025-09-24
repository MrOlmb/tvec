'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect, useCallback } from 'react';
import { Phone, Mail, MessageCircle, Zap, X, ChevronUp } from 'lucide-react';

interface FABAction {
  icon: React.ElementType;
  label: string;
  href?: string;
  onClick?: () => void;
  color: string;
}

const actions: FABAction[] = [
  {
    icon: Phone,
    label: 'Appeler',
    href: 'tel:+242064444444',
    color: 'from-green-500 to-green-600',
  },
  {
    icon: Mail,
    label: 'Email',
    href: 'mailto:contact@tvec-congo.com',
    color: 'from-tvec-blue to-tvec-blue-light',
  },
  {
    icon: MessageCircle,
    label: 'WhatsApp',
    href: 'https://wa.me/242064444444',
    color: 'from-green-400 to-green-500',
  },
  {
    icon: ChevronUp,
    label: 'Haut de page',
    onClick: () => window.scrollTo({ top: 0, behavior: 'smooth' }),
    color: 'from-blue-300 to-blue-400',
  },
];

export function FloatingActionButtons() {
  const [isOpen, setIsOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Show scroll to top button when user scrolls down
  const handleScroll = useCallback(() => {
    const scrolled = window.scrollY > 400;
    setShowScrollTop(prev => prev !== scrolled ? scrolled : prev);
  }, []);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    
    const throttledHandleScroll = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(handleScroll, 100);
    };

    window.addEventListener('scroll', throttledHandleScroll, { passive: true });
    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener('scroll', throttledHandleScroll);
    };
  }, [handleScroll]);

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleActionClick = (action: FABAction) => {
    if (action.onClick) {
      action.onClick();
    } else if (action.href) {
      window.open(action.href, '_blank');
    }
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Backdrop */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 bg-black/20 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Action buttons */}
      <AnimatePresence>
        {isOpen && (
          <motion.div className="absolute bottom-20 right-0 space-y-4">
            {actions.map((action, index) => (
              <motion.button
                key={action.label}
                onClick={() => handleActionClick(action)}
                className={`flex items-center gap-3 p-3 rounded-full shadow-lg backdrop-blur-md bg-gradient-to-r ${action.color} text-white hover:scale-110 transition-all duration-300 group electric-glow`}
                initial={{ 
                  opacity: 0, 
                  y: 20,
                  x: 20,
                  scale: 0.8 
                }}
                animate={{ 
                  opacity: 1, 
                  y: 0,
                  x: 0,
                  scale: 1 
                }}
                exit={{ 
                  opacity: 0, 
                  y: 20,
                  x: 20,
                  scale: 0.8 
                }}
                transition={{ 
                  duration: 0.3, 
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 300,
                  damping: 25
                }}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 0 20px rgba(59, 130, 246, 0.5)"
                }}
                whileTap={{ scale: 0.95 }}
              >
                <action.icon className="w-5 h-5 group-hover:animate-pulse" />
                <span className="text-sm font-medium whitespace-nowrap pr-2 group-hover:lightning-glow">
                  {action.label}
                </span>
                
                {/* Electrical effect on hover */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-tvec-blue/20 to-blue-300/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 electrical-particles"></div>
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main FAB */}
      <motion.button
        onClick={toggleMenu}
        className={`relative w-14 h-14 rounded-full shadow-lg backdrop-blur-md transition-all duration-300 group ${
          isOpen 
            ? 'bg-gradient-to-r from-red-500 to-red-600 text-white' 
            : 'bg-gradient-to-r from-tvec-blue to-tvec-blue-light text-white hover:from-tvec-blue-light hover:to-blue-300'
        } electric-glow`}
        whileHover={{ 
          scale: 1.1,
          boxShadow: "0 0 25px rgba(59, 130, 246, 0.6)"
        }}
        whileTap={{ scale: 0.9 }}
        animate={{
          rotate: isOpen ? 45 : 0,
        }}
        transition={{ duration: 0.3 }}
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ opacity: 0, rotate: -90 }}
              animate={{ opacity: 1, rotate: 0 }}
              exit={{ opacity: 0, rotate: 90 }}
              transition={{ duration: 0.2 }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <X className="w-6 h-6" />
            </motion.div>
          ) : (
            <motion.div
              key="open"
              initial={{ opacity: 0, rotate: -90 }}
              animate={{ opacity: 1, rotate: 0 }}
              exit={{ opacity: 0, rotate: 90 }}
              transition={{ duration: 0.2 }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <Zap className="w-6 h-6 group-hover:animate-pulse lightning-glow" />
            </motion.div>
          )}
        </AnimatePresence>
        
        {/* Electrical pulse ring */}
        <motion.div
          className="absolute inset-0 rounded-full border-2 border-blue-300"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.8, 0, 0.8],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        {/* Background electrical grid */}
        <div className="absolute inset-0 rounded-full electrical-grid opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
      </motion.button>

      {/* Quick scroll to top button (always visible when scrolled) */}
      <AnimatePresence>
        {showScrollTop && !isOpen && (
          <motion.button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="absolute -top-16 right-0 w-12 h-12 rounded-full bg-gradient-to-r from-blue-300 to-blue-400 text-white shadow-lg backdrop-blur-md hover:scale-110 transition-all duration-300 group electric-glow"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            whileHover={{ 
              scale: 1.1,
              boxShadow: "0 0 20px rgba(147, 197, 253, 0.6)"
            }}
            whileTap={{ scale: 0.9 }}
          >
            <ChevronUp className="w-5 h-5 mx-auto group-hover:animate-bounce" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}