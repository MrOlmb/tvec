'use client';

import { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Plus } from 'lucide-react';

interface ImageGridProps {
  title?: string;
  images: Array<{
    id: string;
    src: string;
    alt: string;
    title?: string;
    description?: string;
  }>;
  maxImages?: number;
  className?: string;
  onImageClick?: (image: {
    id: string;
    src: string;
    alt: string;
    title?: string;
    description?: string;
  }) => void;
}

export function ImageGrid({ 
  title, 
  images, 
  maxImages = 6, 
  className = '', 
  onImageClick 
}: ImageGridProps) {
  const [hoveredImage, setHoveredImage] = useState<string | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const carouselRef = useRef<HTMLDivElement>(null);

  const displayImages = images.slice(0, maxImages);
  const remainingCount = Math.max(0, images.length - maxImages);

  const handleImageClick = (image: {
    id: string;
    src: string;
    alt: string;
    title?: string;
    description?: string;
  }) => {
    // Ne plus afficher le modal, seulement appeler le callback
    onImageClick?.(image);
  };

  // Navigation functions
  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % displayImages.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + displayImages.length) % displayImages.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying || displayImages.length <= 1) return;

    const interval = setInterval(() => {
      nextSlide();
    }, 4000); // Change slide every 4 seconds

    return () => clearInterval(interval);
  }, [isAutoPlaying, displayImages.length]);

  // Pause auto-play on hover
  const handleMouseEnter = () => {
    setIsAutoPlaying(false);
  };

  const handleMouseLeave = () => {
    setIsAutoPlaying(true);
  };


  return (
    <div className={`w-full ${className}`}>
      {title && (
        <h3 className="text-2xl font-bold text-tvec-navy mb-6 text-center">
          {title}
        </h3>
      )}
      
      {/* Carousel Container */}
      <div 
        className="relative w-full mx-auto"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {/* Main Carousel */}
        <div className="relative overflow-hidden rounded-2xl shadow-2xl">
          <div 
            ref={carouselRef}
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {displayImages.map((image, index) => (
              <div
                key={image.id}
                className="w-full flex-shrink-0 relative"
                style={{ aspectRatio: '16/9', minHeight: '500px' }}
              >
                <div
                  className="w-full h-full bg-cover bg-center transition-all duration-500 hover:scale-105 cursor-pointer"
                  style={{ backgroundImage: `url(${image.src})` }}
                ></div>
                
                {/* Enhanced Shadow Effect on Hover */}
                <div 
                  className={`absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent transition-all duration-500 cursor-pointer ${
                    hoveredImage === image.id ? 'opacity-100 shadow-2xl' : 'opacity-0'
                  }`}
                  onMouseEnter={() => setHoveredImage(image.id)}
                  onMouseLeave={() => setHoveredImage(null)}
                  onClick={() => handleImageClick(image)}
                >
                  <div className="absolute inset-0 bg-black/20 hover:bg-black/40 transition-all duration-300"></div>
                  
                  {/* Description overlay au centre - visible seulement au survol */}
                  {image.description && hoveredImage === image.id && (
                    <div className="absolute inset-0 flex items-center justify-center p-8">
                      <div className="rounded-xl p-8 max-w-2xl text-center">
                        <p className="text-white text-2xl leading-relaxed font-medium">
                          {image.description}
                        </p>
                      </div>
                    </div>
                  )}
                </div>

                {/* Title overlay */}
                {image.title && (
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-8">
                    <p className="text-white text-2xl font-bold">{image.title}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Arrows */}
        {displayImages.length > 1 && (
          <>
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-3 transition-all duration-300 hover:scale-110 shadow-lg z-10 cursor-pointer"
            >
              <ChevronLeft className="w-8 h-8 text-white" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-3 transition-all duration-300 hover:scale-110 shadow-lg z-10 cursor-pointer"
            >
              <ChevronRight className="w-8 h-8 text-white" />
            </button>
          </>
        )}

        {/* Dots Indicator */}
        {displayImages.length > 1 && (
          <div className="flex justify-center mt-6 space-x-3">
            {displayImages.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 cursor-pointer ${
                  index === currentIndex 
                    ? 'bg-tvec-green scale-125' 
                    : 'bg-gray-400 hover:bg-gray-600'
                }`}
              />
            ))}
          </div>
        )}

        {/* Additional Images Counter */}
        {remainingCount > 0 && (
          <div className="text-center mt-4">
            <span className="text-gray-600 text-lg">
              +{remainingCount} autres images disponibles
            </span>
          </div>
        )}
      </div>
    </div>
  );
}