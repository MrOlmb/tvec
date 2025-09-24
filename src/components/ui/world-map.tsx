'use client';

import { motion } from 'framer-motion';
import { useEffect, useState, useMemo } from 'react';
import { ComposableMap, Geographies, Geography, Marker, Line } from 'react-simple-maps';
import { useSpring, animated } from 'react-spring';

// Africa-focused topojson URL (Natural Earth data)
const geoUrl = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

interface City {
  name: string;
  coordinates: [number, number];
  isCapital: boolean;
  country: string;
}

interface Connection {
  from: City;
  to: City;
  delay: number;
}

export function WorldMap() {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedCity, setSelectedCity] = useState<City | null>(null);

  // Congo cities with correct geographical coordinates - memoized to prevent re-renders
  const cities: City[] = useMemo(() => [
    { 
      name: 'Brazzaville', 
      coordinates: [15.2429, -4.2634], 
      isCapital: true,
      country: 'Republic of Congo'
    },
    { 
      name: 'Pointe-Noire', 
      coordinates: [11.8514, -4.7692], 
      isCapital: false,
      country: 'Republic of Congo'
    },
    { 
      name: 'Kinshasa', 
      coordinates: [15.2663, -4.4419], 
      isCapital: true,
      country: 'Democratic Republic of Congo'
    },
  ], []);

  const connections: Connection[] = useMemo(() => [
    { from: cities[0], to: cities[1], delay: 0 }, // Brazzaville to Pointe-Noire
    { from: cities[0], to: cities[2], delay: 0.5 }, // Brazzaville to Kinshasa
    { from: cities[1], to: cities[2], delay: 1 }, // Pointe-Noire to Kinshasa
  ], [cities]);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 500);
    return () => clearTimeout(timer);
  }, []);

  // Animation for electrical pulses
  const pulseAnimation = useSpring({
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'scale(1)' : 'scale(0)',
    config: { tension: 300, friction: 10 }
  });

  return (
    <div className="relative w-full h-[600px] bg-gradient-to-b from-tvec-navy/20 to-transparent rounded-xl overflow-hidden electrical-grid">
      <motion.div
        className="w-full h-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: isVisible ? 1 : 0 }}
        transition={{ duration: 1 }}
      >
        <ComposableMap
          projection="geoMercator"
          projectionConfig={{
            center: [15, -5], // Centered on Congo region
            scale: 800, // Zoomed to show Africa with focus on Congo
          }}
          width={800}
          height={600}
          className="w-full h-full"
        >
          <defs>
            {/* Electrical glow filters */}
            <filter id="electricGlow">
              <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
              <feMerge> 
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>

            <filter id="lightningGlow">
              <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
              <feMerge> 
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>

            {/* Electrical grid pattern */}
            <pattern id="electricGrid" patternUnits="userSpaceOnUse" width="20" height="20">
              <path
                d="M 20 0 L 0 0 0 20"
                fill="none"
                stroke="rgba(59, 130, 246, 0.1)"
                strokeWidth="0.5"
              />
            </pattern>

            {/* Animated electrical gradient */}
            <linearGradient id="electricalFlow" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgba(59, 130, 246, 0.8)">
                <animate attributeName="stop-color" 
                  values="rgba(59, 130, 246, 0.8);rgba(147, 197, 253, 1);rgba(59, 130, 246, 0.8)" 
                  dur="2s" 
                  repeatCount="indefinite"/>
              </stop>
              <stop offset="50%" stopColor="rgba(147, 197, 253, 1)">
                <animate attributeName="stop-color" 
                  values="rgba(147, 197, 253, 1);rgba(59, 130, 246, 0.8);rgba(147, 197, 253, 1)" 
                  dur="2s" 
                  repeatCount="indefinite"/>
              </stop>
              <stop offset="100%" stopColor="rgba(59, 130, 246, 0.8)">
                <animate attributeName="stop-color" 
                  values="rgba(59, 130, 246, 0.8);rgba(147, 197, 253, 1);rgba(59, 130, 246, 0.8)" 
                  dur="2s" 
                  repeatCount="indefinite"/>
              </stop>
            </linearGradient>
          </defs>

          {/* Background grid */}
          <rect width="100%" height="100%" fill="url(#electricGrid)" opacity="0.3" />

          {/* Africa continent countries */}
          <Geographies geography={geoUrl}>
            {({ geographies }) =>
              geographies
                .filter((geo) => {
                  // Filter to show only African countries
                  const africaCountries = [
                    'Algeria', 'Angola', 'Benin', 'Botswana', 'Burkina Faso', 
                    'Burundi', 'Cameroon', 'Cape Verde', 'Central African Republic',
                    'Chad', 'Comoros', 'Democratic Republic of the Congo', 'Republic of the Congo',
                    'Djibouti', 'Egypt', 'Equatorial Guinea', 'Eritrea', 'Ethiopia',
                    'Gabon', 'Gambia', 'Ghana', 'Guinea', 'Guinea-Bissau', 'Ivory Coast',
                    'Kenya', 'Lesotho', 'Liberia', 'Libya', 'Madagascar', 'Malawi',
                    'Mali', 'Mauritania', 'Mauritius', 'Morocco', 'Mozambique', 
                    'Namibia', 'Niger', 'Nigeria', 'Rwanda', 'Sao Tome and Principe',
                    'Senegal', 'Seychelles', 'Sierra Leone', 'Somalia', 'South Africa',
                    'South Sudan', 'Sudan', 'Swaziland', 'Tanzania', 'Togo', 'Tunisia',
                    'Uganda', 'Zambia', 'Zimbabwe'
                  ];
                  return africaCountries.includes(geo.properties.NAME);
                })
                .map((geo) => {
                  const isCongoCountry = 
                    geo.properties.NAME === 'Democratic Republic of the Congo' || 
                    geo.properties.NAME === 'Republic of the Congo';
                  
                  return (
                    <Geography
                      key={geo.rsmKey}
                      geography={geo}
                      fill={isCongoCountry ? "rgba(59, 130, 246, 0.2)" : "rgba(30, 64, 175, 0.1)"}
                      stroke={isCongoCountry ? "rgba(59, 130, 246, 0.8)" : "rgba(59, 130, 246, 0.3)"}
                      strokeWidth={isCongoCountry ? 2 : 1}
                      style={{
                        default: { outline: "none" },
                        hover: { 
                          fill: isCongoCountry ? "rgba(59, 130, 246, 0.3)" : "rgba(30, 64, 175, 0.15)",
                          outline: "none" 
                        },
                        pressed: { outline: "none" },
                      }}
                      className={isCongoCountry ? "drop-shadow-lg" : ""}
                    />
                  );
                })
            }
          </Geographies>

          {/* Electrical connections between cities */}
          {isVisible && connections.map((connection, index) => (
            <g key={index}>
              {/* Main connection line */}
              <motion.line
                x1={connection.from.coordinates[0]}
                y1={connection.from.coordinates[1]}
                x2={connection.to.coordinates[0]}
                y2={connection.to.coordinates[1]}
                stroke="url(#electricalFlow)"
                strokeWidth="3"
                filter="url(#electricGlow)"
                strokeLinecap="round"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ 
                  pathLength: 1,
                  opacity: 1 
                }}
                transition={{ duration: 1.5, delay: 2 + connection.delay }}
              />
              
              {/* Animated electrical pulse */}
              <motion.circle
                r="3"
                fill="rgba(147, 197, 253, 1)"
                filter="url(#lightningGlow)"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: [0, 1, 0],
                  cx: [connection.from.coordinates[0], connection.to.coordinates[0]],
                  cy: [connection.from.coordinates[1], connection.to.coordinates[1]],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: 3 + connection.delay,
                  ease: "easeInOut"
                }}
              />
            </g>
          ))}

          {/* City markers */}
          {cities.map((city, index) => (
            <Marker key={city.name} coordinates={city.coordinates}>
              <g>
                {/* City glow effect */}
                <motion.circle
                  r={city.isCapital ? 12 : 8}
                  fill="rgba(59, 130, 246, 0.3)"
                  filter="url(#electricGlow)"
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ 
                    scale: isVisible ? [1, 1.2, 1] : 0,
                    opacity: isVisible ? [0.3, 0.6, 0.3] : 0
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: 1.5 + index * 0.2,
                    ease: "easeInOut"
                  }}
                />
                
                {/* Main city marker */}
                <motion.circle
                  r={city.isCapital ? 6 : 4}
                  fill={city.isCapital ? "rgba(147, 197, 253, 1)" : "rgba(59, 130, 246, 1)"}
                  stroke="#ffffff"
                  strokeWidth="2"
                  filter="url(#lightningGlow)"
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ 
                    scale: isVisible ? 1 : 0,
                    opacity: isVisible ? 1 : 0
                  }}
                  transition={{ duration: 0.8, delay: 1.5 + index * 0.2 }}
                  className="cursor-pointer"
                  onMouseEnter={() => setSelectedCity(city)}
                  onMouseLeave={() => setSelectedCity(null)}
                />

                {/* Capital indicator */}
                {city.isCapital && (
                  <motion.circle
                    r="10"
                    fill="none"
                    stroke="rgba(147, 197, 253, 1)"
                    strokeWidth="2"
                    strokeDasharray="4,4"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ 
                      scale: isVisible ? 1 : 0,
                      opacity: isVisible ? [0.5, 1, 0.5] : 0,
                      rotate: isVisible ? 360 : 0
                    }}
                    transition={{
                      scale: { duration: 0.5, delay: 2.5 + index * 0.1 },
                      opacity: { duration: 2, repeat: Infinity, ease: "easeInOut" },
                      rotate: { duration: 15, repeat: Infinity, ease: "linear" }
                    }}
                  />
                )}

                {/* City label */}
                <motion.text
                  textAnchor="middle"
                  y={-15}
                  className="fill-white text-xs font-bold drop-shadow-lg pointer-events-none"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ 
                    opacity: isVisible ? 1 : 0,
                    y: isVisible ? -15 : -10
                  }}
                  transition={{ duration: 0.6, delay: 2 + index * 0.1 }}
                >
                  {city.name}
                </motion.text>
              </g>
            </Marker>
          ))}

          {/* Electrical sparks animation */}
          {isVisible && [...Array(8)].map((_, i) => (
            <motion.circle
              key={i}
              r="1.5"
              fill="rgba(147, 197, 253, 1)"
              filter="url(#lightningGlow)"
              initial={{ opacity: 0 }}
              animate={{
                opacity: [0, 1, 0],
                cx: 10 + Math.random() * 20,
                cy: -10 + Math.random() * 20,
                scale: [0.5, 1.5, 0.5]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: Math.random() * 2 + 4,
                ease: "easeInOut"
              }}
            />
          ))}
        </ComposableMap>
      </motion.div>

      {/* Overlay information */}
      <motion.div
        className="absolute bottom-8 left-8 bg-tvec-navy/90 backdrop-blur-md rounded-lg p-6 glass-blue border border-tvec-blue/30"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
        transition={{ duration: 0.8, delay: 4 }}
      >
        <h3 className="text-lg font-bold text-white mb-2 electric-glow">
          Réseau Électrique Congo
        </h3>
        <p className="text-gray-200 text-sm mb-3">
          Connexions inter-urbaines haute tension
        </p>
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-blue-300 electric-glow"></div>
            <span className="text-white text-xs">Capitales</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-tvec-blue electric-glow"></div>
            <span className="text-white text-xs">Villes</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-6 h-0.5 bg-tvec-blue"></div>
            <span className="text-white text-xs">Lignes HT</span>
          </div>
        </div>
      </motion.div>

      {/* Title overlay */}
      <motion.div
        className="absolute top-8 left-1/2 transform -translate-x-1/2 text-center"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.8 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-2 tvec-logo electric-glow">
          Infrastructure Électrique Africaine
        </h2>
        <p className="text-blue-300 font-medium electric-glow">
          Transport d'Énergie Haute Tension - Congo
        </p>
      </motion.div>

      {/* City tooltip */}
      {selectedCity && (
        <motion.div
          className="absolute top-4 right-4 bg-tvec-navy/95 backdrop-blur-md rounded-lg p-4 glass-blue border border-tvec-blue/30"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
        >
          <h4 className="text-white font-bold text-sm">{selectedCity.name}</h4>
          <p className="text-gray-300 text-xs">{selectedCity.country}</p>
          <p className="text-blue-300 text-xs">
            {selectedCity.isCapital ? 'Capitale' : 'Ville'}
          </p>
        </motion.div>
      )}
    </div>
  );
}