import { Banknote, TrendingUp, Shield, Globe, CheckCircle } from 'lucide-react';
import { Card } from '@/components/ui/card';

export function FinancingSection() {
  const financingPartners = [
    {
      name: "Banques Internationales",
      description: "Partenariats avec les principales institutions financières mondiales",
      features: ["Financement à long terme", "Taux préférentiels", "Garanties internationales"]
    },
    {
      name: "Institutions de Développement",
      description: "Collaboration avec les organismes de développement africains",
      features: ["Fonds de développement", "Programmes spéciaux", "Support technique"]
    },
    {
      name: "Investisseurs Privés",
      description: "Réseau d'investisseurs spécialisés dans l'infrastructure",
      features: ["Capital d'investissement", "Expertise sectorielle", "Vision long terme"]
    }
  ];

  const financingBenefits = [
    {
      title: "Financement Complet",
      description: "Jusqu'à 100% du financement de votre projet",
      icon: Banknote
    },
    {
      title: "Conditions Optimales",
      description: "Taux compétitifs et conditions adaptées à vos besoins",
      icon: TrendingUp
    },
    {
      title: "Garanties Solides",
      description: "Sécurisation complète de vos investissements",
      icon: Shield
    },
    {
      title: "Portée Internationale",
      description: "Accès aux marchés financiers mondiaux",
      icon: Globe
    }
  ];

  return (
    <section id="financing" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-tvec-navy mb-4">
            Financements <span className="text-tvec-green">Colossaux</span>
          </h2>
          <div className="w-24 h-1 bg-tvec-yellow mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Grâce à nos partenariats avec les plus grandes institutions financières, 
            nous rendons vos projets d&apos;infrastructure réalisables.
          </p>
        </div>

        {/* Financing Promise */}
        <div className="bg-gradient-to-r from-tvec-navy to-blue-900 rounded-2xl p-8 md:p-12 mb-16 text-white">
          <div className="text-center mb-8">
            <Banknote className="w-16 h-16 text-tvec-yellow mx-auto mb-6" />
            <h3 className="text-3xl font-bold mb-4">
              Solutions de Financement Exceptionnelles
            </h3>
            <p className="text-lg text-gray-200 max-w-2xl mx-auto">
              Notre réseau de partenaires financiers nous permet de proposer 
              des solutions de financement adaptées à tous vos projets, 
              quelle que soit leur envergure.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-tvec-yellow mb-2">100%</div>
              <div className="text-tvec-green font-semibold mb-1">Financement</div>
              <div className="text-sm text-gray-300">De votre projet</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-tvec-green mb-2">25</div>
              <div className="text-tvec-yellow font-semibold mb-1">Années</div>
              <div className="text-sm text-gray-300">Durée maximale</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-tvec-yellow mb-2">48h</div>
              <div className="text-tvec-green font-semibold mb-1">Réponse</div>
              <div className="text-sm text-gray-300">Délai de traitement</div>
            </div>
          </div>
        </div>

        {/* Financing Benefits */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {financingBenefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <Card key={index} className="p-6 text-center border-2 border-gray-100 hover:border-tvec-green transition-all duration-300 hover:scale-105">
                <div className="bg-tvec-green/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <IconComponent className="w-8 h-8 text-tvec-green" />
                </div>
                <h4 className="text-lg font-semibold text-tvec-navy mb-3">
                  {benefit.title}
                </h4>
                <p className="text-gray-600 text-sm">
                  {benefit.description}
                </p>
              </Card>
            );
          })}
        </div>

        {/* Financing Partners */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-tvec-navy text-center mb-12">
            Nos Partenaires Financiers
          </h3>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {financingPartners.map((partner, index) => (
              <Card key={index} className="p-8 border-2 border-gray-100 hover:border-tvec-navy transition-all duration-300">
                <h4 className="text-xl font-semibold text-tvec-navy mb-4">
                  {partner.name}
                </h4>
                <p className="text-gray-600 mb-6">
                  {partner.description}
                </p>
                
                <ul className="space-y-3">
                  {partner.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-700">
                      <CheckCircle className="w-4 h-4 text-tvec-green mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>

        {/* Process */}
        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg">
          <h3 className="text-3xl font-bold text-tvec-navy text-center mb-12">
            Processus de Financement
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-tvec-green w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">1</span>
              </div>
              <h4 className="text-lg font-semibold text-tvec-navy mb-2">
                Analyse du Projet
              </h4>
              <p className="text-gray-600 text-sm">
                Évaluation complète de votre projet et de vos besoins financiers
              </p>
            </div>

            <div className="text-center">
              <div className="bg-tvec-navy w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">2</span>
              </div>
              <h4 className="text-lg font-semibold text-tvec-navy mb-2">
                Structuration
              </h4>
              <p className="text-gray-600 text-sm">
                Conception de la solution de financement optimale
              </p>
            </div>

            <div className="text-center">
              <div className="bg-tvec-yellow w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-tvec-navy font-bold text-xl">3</span>
              </div>
              <h4 className="text-lg font-semibold text-tvec-navy mb-2">
                Négociation
              </h4>
              <p className="text-gray-600 text-sm">
                Obtention des meilleures conditions auprès de nos partenaires
              </p>
            </div>

            <div className="text-center">
              <div className="bg-tvec-green w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">4</span>
              </div>
              <h4 className="text-lg font-semibold text-tvec-navy mb-2">
                Déblocage
              </h4>
              <p className="text-gray-600 text-sm">
                Mise à disposition des fonds et démarrage du projet
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}