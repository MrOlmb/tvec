import { Zap, TrendingUp, Clock, Shield } from 'lucide-react';
import { Card, CardFeature } from '@/components/ui/card';
import { ImageGrid } from '@/components/ui/image-grid';
import { CompanyStat } from '@/types';

const stats: CompanyStat[] = [
  {
    value: "400%",
    label: "Plus rapide",
    description: "que les solutions existantes"
  },
  {
    value: "25%",
    label: "Coût réduit",
    description: "par rapport à une nouvelle ligne"
  },
  {
    value: "1,350",
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
  // Sample images for team and company photos - ready for real images
  const companyImages = [
    {
      id: '1',
      src: '/power-grid-1.jpeg',
      alt: 'Équipe TVEC sur le terrain',
      title: 'Notre équipe d\'experts'
    },
    {
      id: '2', 
      src: '/project-1.png',
      alt: 'Bureau TVEC Kinshasa',
      title: 'Nos bureaux à Kinshasa'
    },
    {
      id: '3',
      src: '/power-grid-2.jpeg', 
      alt: 'Formation technique',
      title: 'Formation continue'
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Subtle Background decorative elements */}
      <div className="absolute top-10 right-10 w-64 h-64 bg-tvec-blue/5 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-10 left-10 w-48 h-48 bg-blue-300/10 rounded-full blur-2xl animate-float" style={{animationDelay: '1s'}}></div>
      <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-tvec-blue-light/5 rounded-full blur-xl animate-pulse"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header with Blue Electrical Theme */}
        <div className="text-center mb-16 scroll-reveal">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            À Propos de <span className="text-tvec-blue relative">
              TVEC
              <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-tvec-blue to-blue-300 transform scale-x-0 animate-scale-in" style={{animationDelay: '600ms'}}></span>
            </span>
          </h2>
          <div className="w-24 h-1 bg-tvec-blue mx-auto mb-6 animate-scale-in" style={{animationDelay: '400ms'}}></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Transport Vert d&apos;Électricité au Congo - Pionnier des solutions 
            électriques durables et innovantes en République Démocratique du Congo.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Description with Blue Electrical Theme */}
          <div className="scroll-reveal">
            <h3 className="text-3xl font-bold text-gray-900 mb-6 relative">
              Excellence et Innovation
              <span className="absolute bottom-0 left-0 w-12 h-1 bg-tvec-blue rounded-full"></span>
            </h3>
            <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
              <p className="animate-slide-up" style={{animationDelay: '200ms'}}>
                TVEC est votre partenaire de confiance pour les solutions de transport 
                d&apos;électricité au Congo. Nous nous spécialisons dans l&apos;implémentation 
                de technologies de pointe qui révolutionnent la transmission électrique.
              </p>
              <p className="animate-slide-up" style={{animationDelay: '400ms'}}>
                Notre expertise s&apos;appuie sur un partenariat stratégique avec CTC Global, 
                leader mondial en conducteurs haute performance, permettant de transporter 
                jusqu&apos;à 4 fois plus d&apos;électricité sans interruption de service.
              </p>
              <p className="animate-slide-up" style={{animationDelay: '600ms'}}>
                Avec une technologie éprouvée dans 65 pays sur plus de 1,350 lignes 
                de transmission, nous offrons des solutions fiables, économiques et 
                respectueuses de l&apos;environnement.
              </p>
            </div>

            {/* Key Features with Blue Electrical Theme */}
            <div className="mt-8 space-y-4">
              <div className="flex items-center space-x-3 group animate-slide-up" style={{animationDelay: '800ms'}}>
                <div className="p-2 rounded-lg bg-tvec-blue/20 group-hover:bg-tvec-blue/30 transition-colors electric-glow">
                  <Zap className="w-6 h-6 text-blue-300 lightning-glow" />
                </div>
                <span className="text-gray-600 font-medium">Technologie éprouvée mondialement</span>
              </div>
              <div className="flex items-center space-x-3 group animate-slide-up" style={{animationDelay: '900ms'}}>
                <div className="p-2 rounded-lg bg-tvec-blue/20 group-hover:bg-tvec-blue/30 transition-colors electric-glow">
                  <TrendingUp className="w-6 h-6 text-tvec-blue-light electric-glow" />
                </div>
                <span className="text-gray-600 font-medium">Performance 4x supérieure</span>
              </div>
              <div className="flex items-center space-x-3 group animate-slide-up" style={{animationDelay: '1000ms'}}>
                <div className="p-2 rounded-lg bg-tvec-blue/20 group-hover:bg-tvec-blue/30 transition-colors electric-glow">
                  <Clock className="w-6 h-6 text-blue-300 lightning-glow" />
                </div>
                <span className="text-gray-600 font-medium">Installation sans interruption</span>
              </div>
              <div className="flex items-center space-x-3 group animate-slide-up" style={{animationDelay: '1100ms'}}>
                <div className="p-2 rounded-lg bg-tvec-blue/20 group-hover:bg-tvec-blue/30 transition-colors electric-glow">
                  <Shield className="w-6 h-6 text-tvec-blue-light electric-glow" />
                </div>
                <span className="text-gray-600 font-medium">Solutions durables et fiables</span>
              </div>
            </div>
          </div>

          {/* Mission Statement with Blue Electrical Theme */}
          <div className="scroll-reveal">
            <CardFeature className="p-8 glass-blue lightning-border electrical-particles">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 electric-glow">Notre Mission</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Fournir des solutions électriques innovantes qui permettent au Congo 
                de développer une infrastructure énergétique moderne, durable et efficace, 
                contribuant ainsi au développement économique et social du pays.
              </p>
              
              <h4 className="text-xl font-semibold text-blue-300 mb-4 lightning-glow">Nos Valeurs</h4>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center space-x-3 group">
                  <div className="w-3 h-3 bg-blue-300 rounded-full group-hover:scale-110 transition-transform lightning-glow animate-pulse"></div>
                  <span className="font-medium">Excellence technique</span>
                </li>
                <li className="flex items-center space-x-3 group">
                  <div className="w-3 h-3 bg-blue-300 rounded-full group-hover:scale-110 transition-transform lightning-glow animate-pulse" style={{animationDelay: '0.5s'}}></div>
                  <span className="font-medium">Durabilité environnementale</span>
                </li>
                <li className="flex items-center space-x-3 group">
                  <div className="w-3 h-3 bg-blue-300 rounded-full group-hover:scale-110 transition-transform lightning-glow animate-pulse" style={{animationDelay: '1s'}}></div>
                  <span className="font-medium">Innovation continue</span>
                </li>
                <li className="flex items-center space-x-3 group">
                  <div className="w-3 h-3 bg-blue-300 rounded-full group-hover:scale-110 transition-transform lightning-glow animate-pulse" style={{animationDelay: '1.5s'}}></div>
                  <span className="font-medium">Partenariat de confiance</span>
                </li>
              </ul>
            </CardFeature>
          </div>
        </div>

        {/* Statistics with Blue Electrical Theme */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16 scroll-reveal">
          {stats.map((stat, index) => (
            <Card 
              key={index} 
              className={`text-center p-6 glass-blue lightning-border hover:electric-glow transition-all duration-300 group animate-scale-in electrical-particles`}
              style={{animationDelay: `${index * 100}ms`}}
            >
              <div className="text-4xl font-bold text-gray-900 mb-2 group-hover:text-blue-300 transition-colors group-hover:scale-110 transform duration-300 electric-glow">
                {stat.value}
              </div>
              <div className="text-lg font-semibold text-tvec-blue-light mb-1 lightning-glow">
                {stat.label}
              </div>
              <div className="text-sm text-gray-500 leading-relaxed">
                {stat.description}
              </div>
            </Card>
          ))}
        </div>

        {/* Company Images with Blue Electrical Theme */}
        <div className="scroll-reveal">
          <CardFeature className="p-8 glass-blue lightning-border electrical-particles">
            <ImageGrid
              title="Notre Entreprise en Images"
              images={companyImages}
              maxImages={6}
              className="mb-4"
            />
            <p className="text-center text-gray-300 text-sm">
              Plus de photos d&apos;équipe, de bureaux et d&apos;activités seront ajoutées ici
            </p>
          </CardFeature>
        </div>
      </div>
    </section>
  );
}