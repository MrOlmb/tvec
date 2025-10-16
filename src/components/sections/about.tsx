import { Zap, TrendingUp, Clock, Shield, CheckCircle } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { ImageGrid } from '@/components/ui/image-grid';
import { CompanyStat } from '@/types';
import { SlideIn, StaggeredSlideIn, SlideCard } from '@/components/animations/SlideIn';

const stats: CompanyStat[] = [
  {
    value: "2 à 4X",
    label: "Plus de capacité",
    description: "que les solutions existantes"
  },
  {
    value: "75%",
    label: "Réduction des coûts",
    description: "reconduction des lignes"
  },
  {
    value: "1,350+",
    label: "Lignes de transmission",
    description: "utilisant notre technologie"
  },
  {
    value: "65",
    label: "Pays",
    description: "font confiance à nos solutions"
  }
];

export function AboutSection() {
  const companyImages = [
    {
      id: '1',
      src: '/image1.webp',
      alt: 'Infrastructure électrique moderne',
      title: 'Infrastructure électrique moderne',
      description: 'Notre infrastructure électrique utilise les dernières technologies pour assurer une transmission efficace et fiable de l\'électricité à travers le Congo.'
    },
    {
      id: '2',
      src: '/image2.webp',
      alt: 'Technologies de pointe',
      title: 'Technologies de pointe',
      description: 'TVEC utilise les produits CTC Global et le conducteur ACCC. Ce câble révolutionnaire est deux fois plus résistant que l\'acier et transporte deux fois plus d\'électricité que les câbles existants.'
    },
    {
      id: '3',
      src: '/image3.webp',
      alt: 'Solutions durables',
      title: 'Solutions durables',
      description: 'Nos solutions respectent l\'environnement tout en garantissant une performance optimale pour les générations futures.'
    },
    {
      id: '4',
      src: '/image5.webp',
      alt: 'Excellence technique',
      title: 'Excellence technique',
      description: 'Notre équipe d\'experts techniques assure une mise en œuvre parfaite de nos solutions avec un suivi rigoureux de la qualité.'
    },
    {
      id: '5',
      src: '/project-1.png',
      alt: 'Conducteurs ACCC ultra modernes',
      title: 'Conducteurs ACCC ultra modernes',
      description: 'Les conducteurs ACCC permettent de transporter jusqu\'à 4 fois plus d\'électricité sans interruption de service.'
    },
    {
      id: '6', 
      src: '/silhouette.jpg',
      alt: 'Technicien TVEC',
      title: 'Une équipe qualifiée',
      description: 'Notre équipe de techniciens expérimentés assure l\'installation et la maintenance de nos équipements avec expertise.'
    },
    {
      id: '7',
      src: '/high_voltage_power_lines.jpg', 
      alt: 'Résultats satisfaisants',
      title: 'Des résultats satisfaisants',
      description: 'Nos projets démontrent des résultats concrets avec une amélioration significative de la capacité de transmission électrique.'
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-tvec-navy mb-4">
            À Propos de <span className="text-tvec-green">TVEC</span>
          </h2>
          <div className="w-24 h-1 bg-tvec-yellow mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transport Vert d&apos;Électricité au Congo - Pionnier des solutions 
            électriques durables et innovantes en République du Congo.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Description */}
          <SlideIn direction="left" delay={0.2}>
            <div>
              <h3 className="text-3xl font-bold text-tvec-navy mb-6">
                Excellence et Innovation
              </h3>
              <div className="space-y-6 text-gray-600 text-lg">
                <p>
                  TVEC est votre partenaire de confiance pour les solutions de transport 
                  d&apos;électricité au Congo. Nous nous spécialisons dans l&apos;implémentation 
                  de technologies de pointe qui révolutionnent la transmission électrique.
                </p>
                <p>
                  Notre expertise s&apos;appuie sur un partenariat stratégique avec <b>CTC Global</b>, 
                  leader mondial en conducteurs haute performance, permettant de transporter 
                  jusqu&apos;à 4 fois plus d&apos;électricité sans interruption de service.
                </p>
                <p>
                  Avec une technologie éprouvée dans 65 pays sur plus de 1,350 lignes 
                  de transmission, nous offrons des solutions fiables, économiques et 
                  respectueuses de l&apos;environnement.
                </p>
              </div>
            </div>
          </SlideIn>

          {/* Mission & Values */}
          <SlideIn direction="right" delay={0.4}>
            <SlideCard className="hover:border-tvec-green">
              <Card className="p-8 border-2 border-gray-100 transition-all duration-300">
                <h3 className="text-2xl font-bold text-tvec-navy mb-4">Notre Mission</h3>
                <p className="text-gray-600 mb-6">
                  Fournir des solutions électriques innovantes qui permettent au Congo 
                  de développer une infrastructure énergétique moderne, durable et efficace.
                </p>
                
                <h4 className="text-xl font-semibold text-tvec-green mb-4">Nos Valeurs</h4>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-center"><CheckCircle className="w-5 h-5 text-tvec-green mr-3" />Excellence technique</li>
                  <li className="flex items-center"><CheckCircle className="w-5 h-5 text-tvec-green mr-3" />Durabilité environnementale</li>
                  <li className="flex items-center"><CheckCircle className="w-5 h-5 text-tvec-green mr-3" />Innovation continue</li>
                  <li className="flex items-center"><CheckCircle className="w-5 h-5 text-tvec-green mr-3" />Partenariat de confiance</li>
                </ul>
              </Card>
            </SlideCard>
          </SlideIn>
        </div>

        {/* Statistics */}
        <StaggeredSlideIn 
          stagger={0.15} 
          direction="up" 
          containerClassName="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {stats.map((stat, index) => (
            <SlideCard key={index} hoverDirection="up" hoverDistance="12px">
              <Card className="text-center p-6 border-2 border-gray-100 hover:border-tvec-green transition-all duration-300 hover:shadow-xl">
                <div className="text-4xl font-bold text-tvec-green mb-2">
                  {stat.value}
                </div>
                <div className="text-lg font-semibold text-tvec-navy mb-1">
                  {stat.label}
                </div>
                <div className="text-sm text-gray-500">
                  {stat.description}
                </div>
              </Card>
            </SlideCard>
          ))}
        </StaggeredSlideIn>

        {/* Company Images */}
        <SlideIn direction="up" delay={0.3}>
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold text-tvec-navy mb-4">
              Notre Entreprise en Images
            </h3>
            <div className="w-32 h-1 bg-tvec-yellow mx-auto"></div>
          </div>
          <div className="w-full px-4 sm:px-6 lg:px-8">
            <ImageGrid
              images={companyImages}
              maxImages={7}
            />
          </div>
        </SlideIn>
      </div>
    </section>
  );
}
