import { Building2, Clock, DollarSign, GraduationCap, CheckCircle, Users } from 'lucide-react';
import { Card } from '@/components/ui/card';

export function ProjectsSection() {
  const epcServices = [
    {
      title: "Prix Fixe",
      description: "Tarification transparente et fixe pour tous nos projets EPC",
      icon: DollarSign,
      features: ["Pas de surprises budgétaires", "Devis détaillé et fixe", "Garantie de prix"]
    },
    {
      title: "Clé en Main",
      description: "Solution complète de A à Z pour vos projets électriques",
      icon: Building2,
      features: ["Conception complète", "Installation intégrale", "Mise en service"]
    },
    {
      title: "Formation",
      description: "Formation complète de vos équipes techniques",
      icon: GraduationCap,
      features: ["Formation théorique", "Formation pratique", "Certification"]
    },
    {
      title: "Support Continu",
      description: "Accompagnement et maintenance à long terme",
      icon: Users,
      features: ["Support 24/7", "Maintenance préventive", "Mise à jour technologique"]
    }
  ];

  const projectTypes = [
    {
      title: "Modernisation de Lignes Existantes",
      description: "Upgrade des conducteurs pour quadrupler la capacité de transport",
      benefits: ["Capacité x4", "Coût réduit 75%", "Installation rapide"]
    },
    {
      title: "Nouvelles Installations",
      description: "Conception et installation de nouvelles lignes haute performance",
      benefits: ["Technologie de pointe", "Durabilité maximale", "Efficacité optimale"]
    },
    {
      title: "Diagnostic et Optimisation",
      description: "Évaluation et amélioration des réseaux électriques existants",
      benefits: ["Analyse complète", "Recommandations précises", "ROI garanti"]
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-gray-100 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-tvec-navy mb-4">
            Projets <span className="text-tvec-green">EPC</span>
          </h2>
          <div className="w-24 h-1 bg-tvec-yellow mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Engineering, Procurement & Construction - Nous assumons tous les risques 
            pour garantir le succès de vos projets électriques.
          </p>
        </div>

        {/* EPC Promise */}
        <div className="bg-gradient-to-r from-tvec-green to-green-600 rounded-2xl p-8 md:p-12 mb-16 text-white">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold mb-4">Notre Engagement EPC</h3>
            <p className="text-lg text-green-100 max-w-2xl mx-auto">
              Nous prenons en charge l&apos;intégralité de vos projets, de la conception 
              à la mise en service, en assumant tous les risques techniques et financiers.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <Building2 className="w-12 h-12 mx-auto mb-4 text-tvec-yellow" />
              <h4 className="font-semibold mb-2">Engineering</h4>
              <p className="text-sm text-green-100">Conception technique complète</p>
            </div>
            <div className="text-center">
              <DollarSign className="w-12 h-12 mx-auto mb-4 text-tvec-yellow" />
              <h4 className="font-semibold mb-2">Procurement</h4>
              <p className="text-sm text-green-100">Approvisionnement optimisé</p>
            </div>
            <div className="text-center">
              <CheckCircle className="w-12 h-12 mx-auto mb-4 text-tvec-yellow" />
              <h4 className="font-semibold mb-2">Construction</h4>
              <p className="text-sm text-green-100">Installation et mise en service</p>
            </div>
          </div>
        </div>

        {/* EPC Services */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-tvec-navy text-center mb-12">
            Nos Services EPC
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {epcServices.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <Card key={index} className="p-6 border-2 border-gray-100 hover:border-tvec-green transition-all duration-300 hover:scale-105">
                  <div className="text-center mb-4">
                    <div className="bg-tvec-green/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="w-8 h-8 text-tvec-green" />
                    </div>
                    <h4 className="text-xl font-semibold text-tvec-navy mb-2">
                      {service.title}
                    </h4>
                    <p className="text-gray-600 text-sm mb-4">
                      {service.description}
                    </p>
                  </div>
                  
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-tvec-green mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Project Types */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-tvec-navy text-center mb-12">
            Types de Projets
          </h3>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {projectTypes.map((project, index) => (
              <Card key={index} className="p-8 border-2 border-gray-100 hover:border-tvec-navy transition-all duration-300">
                <h4 className="text-xl font-semibold text-tvec-navy mb-4">
                  {project.title}
                </h4>
                <p className="text-gray-600 mb-6">
                  {project.description}
                </p>
                
                <div className="space-y-3">
                  {project.benefits.map((benefit, benefitIndex) => (
                    <div key={benefitIndex} className="flex items-center">
                      <div className="w-2 h-2 bg-tvec-yellow rounded-full mr-3"></div>
                      <span className="text-sm text-gray-700">{benefit}</span>
                    </div>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Risk Management */}
        <div className="bg-gray-50 rounded-2xl p-8 md:p-12">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-tvec-navy mb-4">
              Gestion des Risques
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Notre approche EPC garantit une gestion complète des risques 
              pour assurer le succès de votre projet.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="bg-tvec-navy w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h4 className="font-semibold text-tvec-navy mb-2">Délais Garantis</h4>
              <p className="text-sm text-gray-600">Respect strict des planning</p>
            </div>

            <div className="text-center">
              <div className="bg-tvec-green w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <DollarSign className="w-8 h-8 text-white" />
              </div>
              <h4 className="font-semibold text-tvec-navy mb-2">Budget Maîtrisé</h4>
              <p className="text-sm text-gray-600">Prix fixe sans dépassement</p>
            </div>

            <div className="text-center">
              <div className="bg-tvec-yellow w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-tvec-navy" />
              </div>
              <h4 className="font-semibold text-tvec-navy mb-2">Qualité Assurée</h4>
              <p className="text-sm text-gray-600">Standards internationaux</p>
            </div>

            <div className="text-center">
              <div className="bg-tvec-navy w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h4 className="font-semibold text-tvec-navy mb-2">Support Complet</h4>
              <p className="text-sm text-gray-600">Accompagnement continu</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}