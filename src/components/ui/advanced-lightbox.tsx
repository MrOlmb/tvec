'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, ZoomIn, ZoomOut, RotateCw, Download } from 'lucide-react';
import Image from 'next/image';

interface GalleryImage {
  src: string;
  alt: string;
  title?: string;
  description?: string;
}

interface AdvancedLightboxProps {
  images: GalleryImage[];
  isOpen: boolean;
  currentIndex: number;
  onClose: () => void;
  onNext: () => void;
  onPrevious: () => void;
}

export function AdvancedLightbox({
  images,
  isOpen,
  currentIndex,
  onClose,
  onNext,
  onPrevious
}: AdvancedLightboxProps) {
  const [zoom, setZoom] = useState(1);
  const [rotation, setRotation] = useState(0);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);

  const currentImage = images[currentIndex];

  // Reset transformations when image changes
  useEffect(() => {
    setZoom(1);
    setRotation(0);
    setPosition({ x: 0, y: 0 });
  }, [currentIndex]);

  // Keyboard navigation
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      switch (e.key) {
        case 'Escape':
          onClose();
          break;
        case 'ArrowLeft':
          onPrevious();
          break;
        case 'ArrowRight':
          onNext();
          break;
        case '+':
        case '=':
          setZoom(prev => Math.min(prev + 0.25, 3));
          break;
        case '-':
          setZoom(prev => Math.max(prev - 0.25, 0.5));
          break;
        case 'r':
        case 'R':
          setRotation(prev => prev + 90);
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose, onNext, onPrevious]);

  const handleZoomIn = () => setZoom(prev => Math.min(prev + 0.25, 3));
  const handleZoomOut = () => setZoom(prev => Math.max(prev - 0.25, 0.5));
  const handleRotate = () => setRotation(prev => prev + 90);
  
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = currentImage.src;
    link.download = currentImage.title || 'image';
    link.click();
  };

  const resetTransform = () => {
    setZoom(1);
    setRotation(0);
    setPosition({ x: 0, y: 0 });
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          {/* Electrical grid overlay */}
          <div className="absolute inset-0 electrical-grid opacity-20 pointer-events-none" />
          
          {/* Main content */}
          <div 
            className="relative w-full h-full flex items-center justify-center p-4"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Image container */}
            <motion.div
              className="relative max-w-[90vw] max-h-[90vh] overflow-hidden rounded-lg electrical-particles"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                className="relative cursor-move"
                style={{
                  transform: `scale(${zoom}) rotate(${rotation}deg) translate(${position.x}px, ${position.y}px)`
                }}
                drag={zoom > 1}
                dragMomentum={false}
                onDragStart={() => setIsDragging(true)}
                onDragEnd={() => setIsDragging(false)}
                onDrag={(_, info) => {
                  setPosition({
                    x: position.x + info.delta.x,
                    y: position.y + info.delta.y
                  });
                }}
                whileHover={{ 
                  boxShadow: "0 0 30px rgba(59, 130, 246, 0.5)"
                }}
              >
                <Image
                  src={currentImage.src}
                  alt={currentImage.alt}
                  width={800}
                  height={600}
                  className="max-w-none electric-glow rounded-lg"
                  style={{ 
                    maxWidth: '90vw', 
                    maxHeight: '80vh',
                    objectFit: 'contain'
                  }}
                />
                
                {/* Electrical border effect */}
                <div className="absolute inset-0 rounded-lg lightning-border opacity-50 pointer-events-none" />
              </motion.div>
            </motion.div>

            {/* Navigation arrows */}
            <motion.button
              onClick={onPrevious}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-tvec-navy/80 backdrop-blur-md text-white hover:bg-tvec-blue/80 transition-all duration-300 group electric-glow"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              disabled={images.length <= 1}
            >
              <ChevronLeft className="w-6 h-6 mx-auto group-hover:lightning-glow" />
            </motion.button>

            <motion.button
              onClick={onNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-tvec-navy/80 backdrop-blur-md text-white hover:bg-tvec-blue/80 transition-all duration-300 group electric-glow"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              disabled={images.length <= 1}
            >
              <ChevronRight className="w-6 h-6 mx-auto group-hover:lightning-glow" />
            </motion.button>

            {/* Control panel */}
            <motion.div
              className="absolute top-4 right-4 flex flex-col gap-2"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <motion.button
                onClick={onClose}
                className="w-10 h-10 rounded-full bg-red-500/80 backdrop-blur-md text-white hover:bg-red-600/80 transition-all duration-300 group"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <X className="w-5 h-5 mx-auto group-hover:rotate-90 transition-transform duration-300" />
              </motion.button>

              <motion.button
                onClick={handleZoomIn}
                className="w-10 h-10 rounded-full bg-tvec-navy/80 backdrop-blur-md text-white hover:bg-tvec-blue/80 transition-all duration-300 group electric-glow"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <ZoomIn className="w-5 h-5 mx-auto group-hover:lightning-glow" />
              </motion.button>

              <motion.button
                onClick={handleZoomOut}
                className="w-10 h-10 rounded-full bg-tvec-navy/80 backdrop-blur-md text-white hover:bg-tvec-blue/80 transition-all duration-300 group electric-glow"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <ZoomOut className="w-5 h-5 mx-auto group-hover:lightning-glow" />
              </motion.button>

              <motion.button
                onClick={handleRotate}
                className="w-10 h-10 rounded-full bg-tvec-navy/80 backdrop-blur-md text-white hover:bg-tvec-blue/80 transition-all duration-300 group electric-glow"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <RotateCw className="w-5 h-5 mx-auto group-hover:lightning-glow" />
              </motion.button>

              <motion.button
                onClick={handleDownload}
                className="w-10 h-10 rounded-full bg-tvec-yellow/80 backdrop-blur-md text-tvec-navy hover:bg-tvec-yellow transition-all duration-300 group"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Download className="w-5 h-5 mx-auto group-hover:animate-bounce" />
              </motion.button>

              <motion.button
                onClick={resetTransform}
                className="w-10 h-10 rounded-full bg-gray-500/80 backdrop-blur-md text-white hover:bg-gray-600/80 transition-all duration-300 text-xs font-bold"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                1:1
              </motion.button>
            </motion.div>

            {/* Image info */}
            {(currentImage.title || currentImage.description) && (
              <motion.div
                className="absolute bottom-4 left-4 right-4 bg-tvec-navy/90 backdrop-blur-md rounded-lg p-4 glass-blue border border-tvec-blue/30"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                {currentImage.title && (
                  <h3 className="text-lg font-bold text-tvec-yellow mb-1 lightning-glow">
                    {currentImage.title}
                  </h3>
                )}
                {currentImage.description && (
                  <p className="text-white text-sm">
                    {currentImage.description}
                  </p>
                )}
                <div className="flex justify-between items-center mt-2">
                  <span className="text-tvec-blue-light text-xs">
                    {currentIndex + 1} / {images.length}
                  </span>
                  <span className="text-tvec-blue-light text-xs">
                    Zoom: {Math.round(zoom * 100)}%
                  </span>
                </div>
              </motion.div>
            )}

            {/* Thumbnail strip */}
            {images.length > 1 && (
              <motion.div
                className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 p-2 bg-tvec-navy/80 backdrop-blur-md rounded-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                {images.map((image, index) => (
                  <motion.button
                    key={index}
                    onClick={() => {
                      const diff = index - currentIndex;
                      if (diff > 0) {
                        for (let i = 0; i < diff; i++) onNext();
                      } else if (diff < 0) {
                        for (let i = 0; i < Math.abs(diff); i++) onPrevious();
                      }
                    }}
                    className={`relative w-12 h-12 rounded overflow-hidden transition-all duration-300 ${
                      index === currentIndex 
                        ? 'ring-2 ring-tvec-yellow scale-110 electric-glow' 
                        : 'hover:scale-105 opacity-70 hover:opacity-100'
                    }`}
                    whileHover={{ scale: index === currentIndex ? 1.1 : 1.05 }}
                  >
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-cover"
                    />
                  </motion.button>
                ))}
              </motion.div>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

interface ImageGalleryProps {
  images: GalleryImage[];
  className?: string;
  columns?: number;
}

export function ImageGallery({ 
  images, 
  className = '',
  columns = 3
}: ImageGalleryProps) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openLightbox = (index: number) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
  };

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const previousImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <>
      <div className={`grid gap-4 ${className}`} style={{ gridTemplateColumns: `repeat(${columns}, 1fr)` }}>
        {images.map((image, index) => (
          <motion.div
            key={index}
            className="relative group cursor-pointer overflow-hidden rounded-lg electrical-particles"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            onClick={() => openLightbox(index)}
          >
            <Image
              src={image.src}
              alt={image.alt}
              width={400}
              height={300}
              className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
            />
            
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-tvec-navy/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute bottom-4 left-4 right-4">
                {image.title && (
                  <h3 className="text-white font-bold text-sm mb-1">
                    {image.title}
                  </h3>
                )}
                <p className="text-tvec-yellow text-xs">Cliquer pour agrandir</p>
              </div>
            </div>

            {/* Electrical border */}
            <div className="absolute inset-0 lightning-border opacity-0 group-hover:opacity-60 transition-opacity duration-300 rounded-lg"></div>
          </motion.div>
        ))}
      </div>

      <AdvancedLightbox
        images={images}
        isOpen={lightboxOpen}
        currentIndex={currentIndex}
        onClose={() => setLightboxOpen(false)}
        onNext={nextImage}
        onPrevious={previousImage}
      />
    </>
  );
}