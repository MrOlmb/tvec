'use client';

import { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight, Loader2 } from 'lucide-react';

interface CarouselItem {
  id: string;
  title: string;
  description: string;
  image: string;
  category: 'project' | 'powerGrid';
}

interface CarouselProps {
  items: CarouselItem[];
  autoPlay?: boolean;
  interval?: number;
  className?: string;
}

export function Carousel({ items, autoPlay = true, interval = 5000, className = '' }: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [loadedImages, setLoadedImages] = useState<Set<string>>(new Set());

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
  }, [items.length]);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const handleImageLoad = useCallback((imageSrc: string) => {
    setLoadedImages(prev => {
      const newSet = new Set(prev);
      newSet.add(imageSrc);
      if (newSet.size === items.length) {
        setIsLoading(false);
      }
      return newSet;
    });
  }, [items.length]);

  useEffect(() => {
    if (autoPlay && items.length > 1 && !isLoading) {
      const timer = setInterval(nextSlide, interval);
      return () => clearInterval(timer);
    }
  }, [autoPlay, interval, items.length, nextSlide, isLoading]);

  // Preload images
  useEffect(() => {
    items.forEach(item => {
      const img = new Image();
      img.onload = () => handleImageLoad(item.image);
      img.src = item.image;
    });
  }, [items, handleImageLoad]);

  if (!items.length) return null;

  return (
    <div className={`relative w-full h-full overflow-hidden rounded-2xl ${className}`}>
      {/* Loading state */}
      {isLoading && (
        <div className="absolute inset-0 bg-gray-900 flex items-center justify-center z-50">
          <div className="text-center text-white">
            <Loader2 className="w-12 h-12 animate-spin mx-auto mb-4 text-tvec-green" />
            <p className="text-gray-300">Chargement des images...</p>
          </div>
        </div>
      )}

      {/* Main slides */}
      <div 
        className={`flex transition-transform duration-500 ease-in-out h-full ${isLoading ? 'opacity-0' : 'opacity-100'}`}
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {items.map((item, index) => (
          <div key={item.id} className="w-full h-full flex-shrink-0 relative">
            {/* Image with overlay */}
            <div 
              className={`w-full h-full relative flex items-center justify-center overflow-hidden bg-gray-900 transition-opacity duration-500 ${
                loadedImages.has(item.image) ? 'opacity-100' : 'opacity-0'
              }`}
              style={{
                backgroundImage: `url(${item.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
              }}
            >
              {/* Gradient overlay for readability */}
              <div 
                className="absolute inset-0 transition-opacity duration-300"
                style={{
                  background: item.category === 'powerGrid' 
                    ? 'linear-gradient(135deg, rgba(30, 58, 138, 0.7), rgba(22, 163, 74, 0.5))'
                    : 'linear-gradient(135deg, rgba(22, 163, 74, 0.7), rgba(30, 58, 138, 0.5))'
                }}
              ></div>
              {/* Content overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              
              <div className={`relative z-10 text-center text-white p-8 max-w-2xl transition-all duration-700 ${
                index === currentIndex ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-90'
              }`}>
                <div className="inline-block px-4 py-2 bg-tvec-yellow text-tvec-navy rounded-full text-sm font-semibold mb-4 shadow-professional animate-fade-in">
                  {item.category === 'project' ? 'Projet Réalisé' : 'Infrastructure Électrique'}
                </div>
                <h3 className="text-2xl md:text-3xl font-bold mb-4 animate-slide-up">{item.title}</h3>
                <p className="text-gray-200 text-lg leading-relaxed animate-slide-up" style={{animationDelay: '200ms'}}>{item.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation arrows */}
      {items.length > 1 && !isLoading && (
        <>
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/40 hover:scale-110 rounded-full p-3 transition-all duration-300 backdrop-blur-sm shadow-professional group"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-6 h-6 text-white group-hover:text-tvec-yellow transition-colors" />
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/40 hover:scale-110 rounded-full p-3 transition-all duration-300 backdrop-blur-sm shadow-professional group"
            aria-label="Next slide"
          >
            <ChevronRight className="w-6 h-6 text-white group-hover:text-tvec-yellow transition-colors" />
          </button>
        </>
      )}

      {/* Dots indicator */}
      {items.length > 1 && !isLoading && (
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-3">
          {items.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 hover:scale-125 ${
                index === currentIndex 
                  ? 'bg-tvec-yellow shadow-glow' 
                  : 'bg-white/50 hover:bg-white/70'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}