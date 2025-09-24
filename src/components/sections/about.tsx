import { Zap, TrendingUp, Clock, Shield, CheckCircle } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { ImageGrid } from '@/components/ui/image-grid';
import { CompanyStat } from '@/types';

const stats: CompanyStat[] = [
  {
    value: "4X",
    label: "Plus de capacité",
    description: "que les solutions existantes"
  },
  {
    value: "25%",
    label: "Coût réduit",
    description: "par rapport à une nouvelle ligne"
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
            électriques durables et innovantes en République Démocratique du Congo.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Description */}
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
                Notre expertise s&apos;appuie sur un partenariat stratégique avec CTC Global, 
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

          {/* Mission & Values */}
          <Card className="p-8 border-2 border-gray-100">
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
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center p-6 border-2 border-gray-100 hover:border-tvec-green transition-all duration-300">
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
          ))}
        </div>

        {/* Company Images */}
        <div>
          <Card className="p-8 border-2 border-gray-100">
            <ImageGrid
              title="Notre Entreprise en Images"
              images={companyImages}
              maxImages={3}
            />
          </Card>
        </div>
      </div>
    </section>
  );
}
