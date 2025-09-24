import { Search, BarChart3, Wrench, Shield, Zap, TrendingUp } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { ServiceFeature } from '@/types';

const solutions: ServiceFeature[] = [
  {
    title: "Diagnostic des Réseaux",
    description: "Analyse complète de l'état de vos lignes électriques existantes avec évaluation des capacités actuelles et potentielles d'amélioration."
  },
  {
    title: "Augmentation de Capacité",
    description: "Upgrade de vos lignes existantes pour transporter jusqu'à 4 fois plus d'électricité sans construction de nouvelles infrastructures."
  },
  {
    title: "Maintenance Préventive",
    description: "Programmes de maintenance avancée pour assurer la longévité et la performance optimale de vos installations électriques."
  },
  {
    title: "Surveillance Continue",
    description: "Systèmes de monitoring en temps réel pour détecter et prévenir les problèmes avant qu'ils n'affectent votre réseau."
  },
  {
    title: "Optimisation Énergétique",
    description: "Solutions pour améliorer l'efficacité de transmission et réduire les pertes énergétiques sur votre réseau."
  },
  {
    title: "Support Technique 24/7",
    description: "Équipe d'experts disponible en permanence pour assurer le bon fonctionnement de vos installations."
  }
];

export function SolutionsSection() {
  return (
    <section id="solutions" className="py-20 bg-gradient-to-b from-white to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-tvec-navy mb-4">
            Nos <span className="text-tvec-green">Solutions</span>
          </h2>
          <div className="w-24 h-1 bg-tvec-yellow mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Des solutions complètes pour optimiser, maintenir et moderniser 
            votre infrastructure électrique avec la technologie la plus avancée.
          </p>
        </div>

        {/* Main Solutions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {solutions.map((solution, index) => {
            const icons = [Search, TrendingUp, Wrench, BarChart3, Zap, Shield];
            const IconComponent = icons[index % icons.length];
            
            return (
              <Card key={index} className="p-6 bg-white border-2 border-gray-100 hover:border-tvec-green transition-all duration-300 hover:scale-105 group">
                <div className="flex items-center justify-center w-12 h-12 bg-tvec-green/10 rounded-lg mb-4 group-hover:bg-tvec-green group-hover:text-white transition-colors duration-300">
                  <IconComponent className="w-6 h-6 text-tvec-green group-hover:text-white" />
                </div>
                <h3 className="text-xl font-semibold text-tvec-navy mb-3">
                  {solution.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {solution.description}
                </p>
              </Card>
            );
          })}
        </div>

        {/* Process Flow */}
        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg">
          <h3 className="text-3xl font-bold text-tvec-navy text-center mb-12">
            Notre Processus d&apos;Intervention
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Step 1 */}
            <div className="text-center">
              <div className="bg-tvec-green w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">1</span>
              </div>
              <h4 className="text-lg font-semibold text-tvec-navy mb-2">Évaluation</h4>
              <p className="text-gray-600 text-sm">
                Analyse complète de votre infrastructure existante
              </p>
            </div>

            {/* Step 2 */}
            <div className="text-center">
              <div className="bg-tvec-navy w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">2</span>
              </div>
              <h4 className="text-lg font-semibold text-tvec-navy mb-2">Planification</h4>
              <p className="text-gray-600 text-sm">
                Conception de la solution optimale pour vos besoins
              </p>
            </div>

            {/* Step 3 */}
            <div className="text-center">
              <div className="bg-tvec-yellow w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-tvec-navy font-bold text-xl">3</span>
              </div>
              <h4 className="text-lg font-semibold text-tvec-navy mb-2">Implémentation</h4>
              <p className="text-gray-600 text-sm">
                Installation et mise en service sans interruption
              </p>
            </div>

            {/* Step 4 */}
            <div className="text-center">
              <div className="bg-tvec-green w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">4</span>
              </div>
              <h4 className="text-lg font-semibold text-tvec-navy mb-2">Suivi</h4>
              <p className="text-gray-600 text-sm">
                Maintenance et support continu
              </p>
            </div>
          </div>
        </div>

        {/* Key Benefits Summary */}
        <div className="mt-16 bg-gradient-to-r from-tvec-navy to-blue-900 rounded-2xl p-8 md:p-12 text-white">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold mb-4">
              Pourquoi Choisir TVEC ?
            </h3>
            <p className="text-gray-200 text-lg">
              Nos solutions apportent des avantages concrets et mesurables
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-tvec-yellow mb-2">4X</div>
              <div className="text-sm text-gray-200">Plus de capacité</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-tvec-green mb-2">75%</div>
              <div className="text-sm text-gray-200">Économies réalisées</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-tvec-yellow mb-2">0</div>
              <div className="text-sm text-gray-200">Interruption de service</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-tvec-green mb-2">24/7</div>
              <div className="text-sm text-gray-200">Support technique</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}