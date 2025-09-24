'use client';

import { useState } from 'react';
import { ZoomIn, Plus } from 'lucide-react';

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

  const displayImages = images.slice(0, maxImages);
  const remainingCount = Math.max(0, images.length - maxImages);

  return (
    <div className={`w-full ${className}`}>
      {title && (
        <h3 className="text-2xl font-bold text-tvec-navy mb-6 text-center">
          {title}
        </h3>
      )}
      
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {displayImages.map((image) => (
          <div
            key={image.id}
            className="relative aspect-square bg-gray-200 rounded-lg overflow-hidden cursor-pointer group"
            onMouseEnter={() => setHoveredImage(image.id)}
            onMouseLeave={() => setHoveredImage(null)}
            onClick={() => onImageClick?.(image)}
          >
            <div
              className="w-full h-full bg-cover bg-center transition-transform duration-300 group-hover:scale-110"
              style={{ backgroundImage: `url(${image.src})` }}
            ></div>
            
            {/* Overlay */}
            <div className={`absolute inset-0 bg-black/40 flex items-center justify-center transition-opacity duration-300 ${
              hoveredImage === image.id ? 'opacity-100' : 'opacity-0'
            }`}>
              <ZoomIn className="w-8 h-8 text-white" />
            </div>

            {/* Title overlay */}
            {image.title && (
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-3">
                <p className="text-white text-sm font-medium">{image.title}</p>
              </div>
            )}
          </div>
        ))}

        {/* Add more images placeholder */}
        {remainingCount > 0 && (
          <div className="aspect-square bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg flex flex-col items-center justify-center text-gray-500 hover:border-tvec-green hover:text-tvec-green transition-colors cursor-pointer group">
            <Plus className="w-8 h-8 mb-2 group-hover:scale-110 transition-transform" />
            <span className="text-sm font-medium">+{remainingCount}</span>
            <span className="text-xs">Plus d&apos;images</span>
          </div>
        )}

        {/* Placeholder for future images */}
        {images.length < maxImages && (
          <div className="aspect-square bg-gray-50 border-2 border-dashed border-gray-300 rounded-lg flex flex-col items-center justify-center text-gray-400 hover:border-tvec-green hover:text-tvec-green transition-colors">
            <Plus className="w-6 h-6 mb-2" />
            <span className="text-xs text-center">Espace réservé<br />pour images</span>
          </div>
        )}
      </div>
    </div>
  );
}