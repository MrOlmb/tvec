import { Cpu, Globe, Award, CheckCircle, TrendingUp, Clock, DollarSign, Shield, Zap } from 'lucide-react';
import { Card } from '@/components/ui/card';
import WorldMap from '@/components/ui/world-map';
import { SlideIn, StaggeredSlideIn, SlideCard } from '@/components/animations/SlideIn';
import { FadeIn } from '@/components/animations/FadeIn';

export function TechnologySection() {
  const benefits = [
    {
      title: "Capacité Supérieure",
      description: "Transport jusqu'à 4 fois plus d'électricité sur les lignes existantes.",
      icon: TrendingUp
    },
    {
      title: "Installation Sans Interruption",
      description: "Remplacement des conducteurs sans coupure de courant.",
      icon: Clock
    },
    {
      title: "Coût Optimisé",
      description: "Seulement 25% du coût d'installation d'une nouvelle ligne.",
      icon: DollarSign
    },
    {
      title: "Fiabilité Prouvée",
      description: "Technologie éprouvée sur 1,350+ lignes dans 65 pays.",
      icon: Shield
    },
    {
      title: "Résistance Exceptionnelle",
      description: "Conducteurs haute température et résistants aux conditions extrêmes.",
      icon: Zap
    },
    {
      title: "Impact Environnemental Réduit",
      description: "Solution écologique sans infrastructure supplémentaire.",
      icon: Globe
    }
  ];

  return (
    <section id="technology" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-tvec-navy mb-4">
            Technologie de <span className="text-tvec-green">Pointe</span>
          </h2>
          <div className="w-24 h-1 bg-tvec-yellow mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Partenariat exclusif avec CTC Global pour apporter au Congo 
            la technologie de conducteurs la plus avancée au monde.
          </p>
        </div>

        {/* CTC Global Partnership */}
        <SlideIn direction="up" delay={0.2}>
          <div className="bg-gradient-to-r from-tvec-green to-green-600 rounded-2xl p-8 md:p-12 mb-16 text-white">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <FadeIn delay={0.4} direction="left">
                <div>
                  <div className="flex items-center space-x-3 mb-6">
                    <Award className="w-8 h-8 text-tvec-yellow" />
                    <h3 className="text-3xl font-bold">Partenariat CTC Global</h3>
                  </div>
                  <p className="text-lg mb-6 text-green-100">
                    CTC Global est le leader mondial des conducteurs haute performance, 
                    reconnu et choisi par Google pour ses projets d&apos;infrastructure énergétique.
                  </p>
                  <div className="space-y-3 text-green-100">
                    <div className="flex items-center"><CheckCircle className="w-5 h-5 text-tvec-yellow mr-3" />Leader mondial des conducteurs avancés</div>
                    <div className="flex items-center"><CheckCircle className="w-5 h-5 text-tvec-yellow mr-3" />Technologie sélectionnée par Google</div>
                    <div className="flex items-center"><CheckCircle className="w-5 h-5 text-tvec-yellow mr-3" />Plus de 20 ans d&apos;innovation</div>
                  </div>
                </div>
              </FadeIn>
              <FadeIn delay={0.6} direction="right">
                <div className="text-center lg:text-right">
                  <div className="bg-white/20 rounded-lg p-6 backdrop-blur-sm">
                    <Cpu className="w-16 h-16 text-tvec-yellow mx-auto lg:ml-auto lg:mr-0 mb-4" />
                    <h4 className="text-2xl font-bold mb-2">Innovation Continue</h4>
                    <p className="text-green-100">
                      Recherche et développement constants pour les solutions électriques de demain.
                    </p>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </SlideIn>

        {/* Technology Benefits */}
        <div className="mb-16">
          <FadeIn delay={0.3}>
            <h3 className="text-3xl font-bold text-tvec-navy text-center mb-12">
              Avantages de Notre Technologie
            </h3>
          </FadeIn>
          <StaggeredSlideIn 
            stagger={0.1} 
            direction="up" 
            containerClassName="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <SlideCard key={index} hoverDirection="up" hoverDistance="8px">
                  <Card className="p-6 border-2 border-gray-100 hover:border-tvec-green transition-all duration-300 hover:shadow-lg">
                    <div className="flex items-center justify-center w-12 h-12 bg-tvec-green/10 rounded-lg mb-4">
                      <Icon className="w-6 h-6 text-tvec-green" />
                    </div>
                    <h4 className="text-xl font-semibold text-tvec-navy mb-3">
                      {benefit.title}
                    </h4>
                    <p className="text-gray-600">
                      {benefit.description}
                    </p>
                  </Card>
                </SlideCard>
              );
            })}
          </StaggeredSlideIn>
        </div>

        {/* Congo Infrastructure Map */}
        {/* <SlideIn direction="up" delay={0.4}>
          <SlideCard className="bg-white rounded-2xl shadow-lg hover:shadow-xl">
            <div className="p-8 md:p-12">
              <FadeIn delay={0.6}>
                <div className="text-center mb-8">
                  <h3 className="text-3xl font-bold text-tvec-navy mb-4">
                    Infrastructure Électrique au Congo
                  </h3>
                  <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                    Visualisation des connexions électriques entre les principales villes du Congo.
                  </p>
                </div>
              </FadeIn>
              <FadeIn delay={0.8}>
                <div className="bg-gray-100 rounded-xl p-4 border border-gray-200">
                  <WorldMap />
                </div>
              </FadeIn>
            </div>
          </SlideCard>
        </SlideIn> */}
      </div>
    </section>
  );
}