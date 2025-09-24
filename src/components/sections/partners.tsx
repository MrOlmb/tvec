import { Award, Globe, Users, Handshake, CheckCircle, Star } from 'lucide-react';
import { Card } from '@/components/ui/card';

export function PartnersSection() {
  return (
    <section id="partners" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-tvec-navy mb-4">
            Nos <span className="text-tvec-green">Partenaires</span>
          </h2>
          <div className="w-24 h-1 bg-tvec-yellow mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Des partenariats stratégiques avec les leaders mondiaux 
            pour vous offrir les meilleures solutions technologiques.
          </p>
        </div>

        {/* Government Support */}
        <div className="bg-gradient-to-r from-tvec-navy to-blue-900 rounded-2xl p-8 md:p-12 mb-16 text-white">
          <div className="text-center mb-8">
            <Award className="w-16 h-16 text-tvec-yellow mx-auto mb-6" />
            <h3 className="text-3xl font-bold mb-4">
              Soutien Gouvernemental
            </h3>
            <p className="text-lg text-gray-200 max-w-2xl mx-auto">
              Notre mission s&apos;aligne parfaitement avec les objectifs de développement 
              du gouvernement congolais pour moderniser l&apos;infrastructure électrique nationale.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <Users className="w-12 h-12 text-tvec-yellow mx-auto mb-4" />
              <h4 className="font-semibold mb-2">Mission Alignée</h4>
              <p className="text-sm text-gray-300">
                Objectifs communs de développement énergétique
              </p>
            </div>
            <div className="text-center">
              <Handshake className="w-12 h-12 text-tvec-yellow mx-auto mb-4" />
              <h4 className="font-semibold mb-2">Collaboration Étroite</h4>
              <p className="text-sm text-gray-300">
                Partenariat stratégique avec les institutions
              </p>
            </div>
            <div className="text-center">
              <CheckCircle className="w-12 h-12 text-tvec-yellow mx-auto mb-4" />
              <h4 className="font-semibold mb-2">Validation Officielle</h4>
              <p className="text-sm text-gray-300">
                Reconnaissance et soutien des autorités
              </p>
            </div>
          </div>
        </div>

        {/* CTC Global Partnership */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <Card className="p-8 border-2 border-tvec-green">
            <div className="text-center mb-6">
              <div className="bg-tvec-green w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-tvec-navy mb-2">CTC Global</h3>
              <p className="text-tvec-green font-semibold">Partenaire Technologique Principal</p>
            </div>
            
            <div className="space-y-4">
              <p className="text-gray-700">
                Leader mondial des conducteurs haute performance, CTC Global 
                est notre partenaire exclusif pour apporter au Congo la technologie 
                de transmission électrique la plus avancée.
              </p>
              
              <div className="space-y-2">
                <div className="flex items-center">
                  <Star className="w-4 h-4 text-tvec-yellow mr-2" />
                  <span className="text-sm text-gray-700">Sélectionné par Google pour ses projets</span>
                </div>
                <div className="flex items-center">
                  <Star className="w-4 h-4 text-tvec-yellow mr-2" />
                  <span className="text-sm text-gray-700">Plus de 20 ans d&apos;innovation</span>
                </div>
                <div className="flex items-center">
                  <Star className="w-4 h-4 text-tvec-yellow mr-2" />
                  <span className="text-sm text-gray-700">Technologie dans 65 pays</span>
                </div>
                <div className="flex items-center">
                  <Star className="w-4 h-4 text-tvec-yellow mr-2" />
                  <span className="text-sm text-gray-700">1,350+ lignes équipées</span>
                </div>
              </div>
            </div>
          </Card>

          <Card className="p-8 border-2 border-tvec-navy">
            <div className="text-center mb-6">
              <div className="bg-tvec-navy w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-tvec-navy mb-2">Electra Power</h3>
              <p className="text-tvec-navy font-semibold">Partenaire Implémentation</p>
            </div>
            
            <div className="space-y-4">
              <p className="text-gray-700">
                Spécialiste de l&apos;installation et de la maintenance des 
                systèmes électriques haute tension, Electra Power nous accompagne 
                dans la réalisation de vos projets.
              </p>
              
              <div className="space-y-2">
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-tvec-green mr-2" />
                  <span className="text-sm text-gray-700">Expertise technique approfondie</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-tvec-green mr-2" />
                  <span className="text-sm text-gray-700">Équipes certifiées</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-tvec-green mr-2" />
                  <span className="text-sm text-gray-700">Standards de sécurité élevés</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-tvec-green mr-2" />
                  <span className="text-sm text-gray-700">Support technique 24/7</span>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Partnership Benefits */}
        <div className="bg-gray-50 rounded-2xl p-8 md:p-12">
          <h3 className="text-3xl font-bold text-tvec-navy text-center mb-12">
            Avantages de Nos Partenariats
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="bg-tvec-green w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-lg font-semibold text-tvec-navy mb-2">
                Technologie Mondiale
              </h4>
              <p className="text-gray-600 text-sm">
                Accès aux innovations les plus récentes
              </p>
            </div>

            <div className="text-center">
              <div className="bg-tvec-navy w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-lg font-semibold text-tvec-navy mb-2">
                Expertise Reconnue
              </h4>
              <p className="text-gray-600 text-sm">
                Partenaires leaders dans leurs domaines
              </p>
            </div>

            <div className="text-center">
              <div className="bg-tvec-yellow w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-tvec-navy" />
              </div>
              <h4 className="text-lg font-semibold text-tvec-navy mb-2">
                Support Complet
              </h4>
              <p className="text-gray-600 text-sm">
                Accompagnement de A à Z
              </p>
            </div>

            <div className="text-center">
              <div className="bg-tvec-green w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Handshake className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-lg font-semibold text-tvec-navy mb-2">
                Garantie Qualité
              </h4>
              <p className="text-gray-600 text-sm">
                Standards internationaux assurés
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}