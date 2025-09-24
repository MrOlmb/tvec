import { Cpu, Globe, Award, CheckCircle } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { WorldMap } from '@/components/ui/world-map';

export function TechnologySection() {
  const benefits = [
    {
      title: "Capacité Supérieure",
      description: "Transport jusqu'à 4 fois plus d'électricité sur les lignes existantes",
      highlight: true
    },
    {
      title: "Installation Sans Interruption",
      description: "Remplacement des conducteurs sans coupure de courant",
      highlight: false
    },
    {
      title: "Coût Optimisé",
      description: "Seulement 25% du coût d'installation d'une nouvelle ligne",
      highlight: true
    },
    {
      title: "Fiabilité Prouvée",
      description: "Technologie éprouvée sur 1,350+ lignes dans 65 pays",
      highlight: false
    },
    {
      title: "Résistance Exceptionnelle",
      description: "Conducteurs haute température et résistants aux conditions extrêmes",
      highlight: false
    },
    {
      title: "Impact Environnemental Réduit",
      description: "Solution écologique sans infrastructure supplémentaire",
      highlight: true
    }
  ];

  return (
    <section id="technology" className="py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Subtle Background decorative elements */}
      <div className="absolute top-10 right-10 w-64 h-64 bg-blue-300/5 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 left-10 w-48 h-48 bg-tvec-blue/10 rounded-full blur-2xl animate-float" style={{animationDelay: '1.5s'}}></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header with Blue Electrical Theme */}
        <div className="text-center mb-16 scroll-reveal">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 electric-glow">
            Technologie de <span className="text-blue-300 electric-glow">Pointe</span>
          </h2>
          <div className="w-24 h-1 bg-blue-300 mx-auto mb-6 electric-glow animate-pulse"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Partenariat exclusif avec CTC Global pour apporter au Congo 
            la technologie de conducteurs la plus avancée au monde.
          </p>
        </div>

        {/* CTC Global Partnership with Enhanced Electrical Theme */}
        <div className="gradient-accent rounded-2xl p-8 md:p-12 mb-16 text-white shadow-lg scroll-reveal">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <Award className="w-8 h-8 text-blue-200 animate-pulse" />
                <h3 className="text-3xl font-bold text-white">Partenariat CTC Global</h3>
              </div>
              <p className="text-lg mb-6 text-blue-100">
                CTC Global est le leader mondial des conducteurs haute performance, 
                reconnu et choisi par Google pour ses projets d&apos;infrastructure énergétique.
              </p>
              <div className="space-y-3 text-blue-100">
                <div className="flex items-center space-x-3 group">
                  <CheckCircle className="w-5 h-5 text-blue-200 transition-all duration-300" />
                  <span>Leader mondial des conducteurs avancés</span>
                </div>
                <div className="flex items-center space-x-3 group">
                  <CheckCircle className="w-5 h-5 text-blue-200 transition-all duration-300" />
                  <span>Technologie sélectionnée par Google</span>
                </div>
                <div className="flex items-center space-x-3 group">
                  <CheckCircle className="w-5 h-5 text-blue-200 transition-all duration-300" />
                  <span>Plus de 20 ans d&apos;innovation</span>
                </div>
                <div className="flex items-center space-x-3 group">
                  <CheckCircle className="w-5 h-5 text-blue-200 transition-all duration-300" />
                  <span>Présence dans 65 pays</span>
                </div>
              </div>
            </div>
            
            <div className="text-center lg:text-right">
              <div className="bg-white/20 rounded-lg p-6 backdrop-blur-sm border border-white/30">
                <Cpu className="w-16 h-16 text-blue-200 mx-auto lg:ml-auto lg:mr-0 mb-4 animate-pulse" />
                <h4 className="text-2xl font-bold mb-2 text-white">Innovation Continue</h4>
                <p className="text-blue-100">
                  Recherche et développement constants pour les solutions 
                  électriques de demain
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Technology Benefits with Blue Electrical Theme */}
        <div className="mb-16 scroll-reveal">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12 electric-glow">
            Avantages de Notre Technologie
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <Card 
                key={index} 
                className={`p-6 transition-all duration-300 hover:scale-105 electrical-particles ${
                  benefit.highlight 
                    ? 'gradient-accent text-white shadow-lg' 
                    : 'bg-gradient-to-br from-blue-50 to-blue-100 hover:from-blue-100 hover:to-blue-200 border-blue-200'
                }`}
                style={{animationDelay: `${index * 100}ms`}}
              >
                <h4 className={`text-xl font-semibold mb-3 ${benefit.highlight ? 'text-white' : 'text-gray-900'}`}>
                  {benefit.title}
                </h4>
                <p className={`${benefit.highlight ? 'text-blue-100' : 'text-gray-600'}`}>
                  {benefit.description}
                </p>
                {benefit.highlight && (
                  <div className="mt-4 inline-flex items-center text-blue-100 text-sm font-medium">
                    <CheckCircle className="w-4 h-4 mr-2 animate-pulse" />
                    Avantage clé
                  </div>
                )}
              </Card>
            ))}
          </div>
        </div>

        {/* Congo Infrastructure Map */}
        <div className="mb-16 scroll-reveal">
          <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-2xl p-8 border border-blue-200 shadow-lg">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                Infrastructure Électrique au Congo
              </h3>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Visualisation des connexions électriques entre les principales villes 
                du Congo et de la République Démocratique du Congo.
              </p>
            </div>
            <div className="bg-white rounded-xl p-4 shadow-inner border border-blue-200">
              <WorldMap />
            </div>
          </div>
        </div>

        {/* Global Presence with Blue Electrical Theme */}
        <div className="glass-blue rounded-2xl p-8 md:p-12 lightning-border electrical-particles scroll-reveal">
          <div className="text-center">
            <Globe className="w-16 h-16 text-blue-300 mx-auto mb-6 electric-glow animate-float" />
            <h3 className="text-3xl font-bold text-gray-900 mb-4 electric-glow">
              Présence Mondiale
            </h3>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Notre technologie est déployée avec succès dans le monde entier, 
              de l&apos;Amérique du Nord à l&apos;Asie, en passant par l&apos;Europe et l&apos;Afrique.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center group">
                <div className="text-4xl font-bold text-tvec-blue-light mb-2 electric-glow group-hover:lightning-glow transition-all duration-300">1,350+</div>
                <div className="text-gray-500">Lignes de transmission actives</div>
              </div>
              <div className="text-center group">
                <div className="text-4xl font-bold text-blue-300 mb-2 electric-glow group-hover:lightning-glow transition-all duration-300">65</div>
                <div className="text-gray-500">Pays utilisateurs</div>
              </div>
              <div className="text-center group">
                <div className="text-4xl font-bold text-tvec-blue-light mb-2 electric-glow group-hover:lightning-glow transition-all duration-300">20+</div>
                <div className="text-gray-500">Années d&apos;expérience</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}