import { Search, BarChart3, Wrench, Shield, Zap, TrendingUp } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { ServiceFeature } from '@/types';
import { SlideIn, StaggeredSlideIn, SlideCard } from '@/components/animations/SlideIn';
import { FadeIn } from '@/components/animations/FadeIn';

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
        <StaggeredSlideIn 
          stagger={0.12} 
          direction="up" 
          containerClassName="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
        >
          {solutions.map((solution, index) => {
            const icons = [Search, TrendingUp, Wrench, BarChart3, Zap, Shield];
            const IconComponent = icons[index % icons.length];
            
            return (
              <SlideCard key={index} hoverDirection="up" hoverDistance="10px">
                <Card className="p-6 bg-white border-2 border-gray-100 hover:border-tvec-green transition-all duration-300 hover:shadow-xl group">
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
              </SlideCard>
            );
          })}
        </StaggeredSlideIn>

        {/* Process Flow */}
        <SlideIn direction="up" delay={0.2}>
          <SlideCard className="bg-white rounded-2xl shadow-lg hover:shadow-xl">
            <div className="p-8 md:p-12">
              <FadeIn delay={0.4}>
                <h3 className="text-3xl font-bold text-tvec-navy text-center mb-12">
                  Notre Processus d&apos;Intervention
                </h3>
              </FadeIn>
              
              <StaggeredSlideIn 
                stagger={0.2} 
                direction="up" 
                containerClassName="grid grid-cols-1 md:grid-cols-4 gap-8"
              >
                {[
                  { step: "1", title: "Évaluation", desc: "Analyse complète de votre infrastructure existante" },
                  { step: "2", title: "Planification", desc: "Conception de la solution optimale pour vos besoins" },
                  { step: "3", title: "Implémentation", desc: "Installation et mise en service sans interruption" },
                  { step: "4", title: "Suivi", desc: "Maintenance et support continu" }
                ].map((item, index) => (
                  <div key={index} className="text-center">
                    <div className="bg-gray-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 hover:bg-tvec-green hover:text-white transition-colors duration-300">
                      <span className="text-tvec-green font-bold text-xl hover:text-white">{item.step}</span>
                    </div>
                    <h4 className="text-lg font-semibold text-tvec-navy mb-2">{item.title}</h4>
                    <p className="text-gray-600 text-sm">{item.desc}</p>
                  </div>
                ))}
              </StaggeredSlideIn>
            </div>
          </SlideCard>
        </SlideIn>

        {/* Key Benefits Summary */}
        <SlideIn direction="up" delay={0.3}>
          <SlideCard className="mt-16 bg-white rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl">
            <div className="p-8 md:p-12">
              <FadeIn delay={0.5}>
                <div className="text-center mb-8">
                  <h3 className="text-3xl font-bold text-tvec-navy mb-4">
                    Pourquoi Choisir TVEC ?
                  </h3>
                  <p className="text-gray-600 text-lg">
                    Nos solutions apportent des avantages concrets et mesurables
                  </p>
                </div>
              </FadeIn>

              <StaggeredSlideIn 
                stagger={0.1} 
                direction="up" 
                containerClassName="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
              >
                {[
                  { value: "4X", label: "Plus de capacité" },
                  { value: "75%", label: "Économies réalisées" },
                  { value: "0", label: "Interruption de service" },
                  { value: "24/7", label: "Support technique" }
                ].map((benefit, index) => (
                  <SlideCard key={index} hoverDirection="up" hoverDistance="8px">
                    <Card className="text-center p-6 border-2 border-gray-100 hover:border-tvec-green transition-all duration-300 hover:shadow-lg">
                      <div className="text-3xl font-bold text-tvec-green mb-2">{benefit.value}</div>
                      <div className="text-sm text-gray-600">{benefit.label}</div>
                    </Card>
                  </SlideCard>
                ))}
              </StaggeredSlideIn>
            </div>
          </SlideCard>
        </SlideIn>
      </div>
    </section>
  );
}