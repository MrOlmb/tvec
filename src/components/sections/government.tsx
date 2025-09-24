'use client';

import { ScrollReveal } from '@/components/ui/scroll-reveal';
import { CardGradient } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export function GovernmentSection() {
  return (
    <section id="gouvernements" className="py-20 relative overflow-hidden bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-yellow-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-green-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Soutien aux{' '}
              <span className="text-yellow-500">Gouvernements</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-yellow-500 mx-auto mb-8"></div>
          </div>
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <ScrollReveal delay={200}>
            <div className="space-y-8">
              <CardGradient className="p-8">
                <div className="bg-blue-600 text-white p-6 rounded-lg mb-6">
                  <p className="text-lg leading-relaxed">
                    TVEC est pleinement consciente de l&apos;énorme responsabilité des 
                    gouvernements, des ministères de l&apos;Énergie et des compagnies d&apos;électricité 
                    pour fournir une électricité fiable et économique.
                  </p>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-blue-900 mb-4">
                    La mission de TVEC
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    est pleinement alignée sur la sienne, car ses solutions sont à la fois{' '}
                    <span className="font-semibold text-green-600">fiables</span> et{' '}
                    <span className="font-semibold text-green-600">économiques</span>.
                  </p>
                </div>
              </CardGradient>

              <div className="space-y-4">
                <h4 className="text-xl font-semibold text-blue-900">
                  Engagement gouvernemental
                </h4>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700">
                      Solutions alignées avec les politiques énergétiques nationales
                    </span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700">
                      Réduction des coûts d&apos;infrastructure publique
                    </span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700">
                      Amélioration de l&apos;accès à l&apos;électricité pour les citoyens
                    </span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700">
                      Développement durable et environnementalement responsable
                    </span>
                  </li>
                </ul>
              </div>

              <Button variant="primary" size="lg" className="w-full sm:w-auto">
                Découvrir nos solutions gouvernementales
              </Button>
            </div>
          </ScrollReveal>

          {/* Right Visual */}
          <ScrollReveal delay={400}>
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl p-8 text-white relative overflow-hidden">
                {/* African continent silhouette */}
                <div className="absolute right-4 top-4 opacity-20">
                  <svg 
                    width="200" 
                    height="240" 
                    viewBox="0 0 200 240" 
                    fill="currentColor"
                    className="text-white"
                  >
                    <path d="M100 10c-20 0-35 15-35 35 0 25 15 45 35 45s35-20 35-45c0-20-15-35-35-35z M90 95c-30 5-50 20-60 40-10 25-5 50 10 70 20 25 45 30 70 25 20-5 35-20 40-40 5-15 0-30-10-40-15-15-30-25-50-25z M110 160c15 10 25 25 20 45-5 15-20 25-35 25-20 0-35-15-35-35 0-15 10-25 25-30 10-5 20-5 25-5z"/>
                  </svg>
                </div>

                <div className="relative z-10">
                  <h3 className="text-2xl font-bold mb-6">
                    Impact Gouvernemental
                  </h3>
                  
                  <div className="grid grid-cols-2 gap-6">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-yellow-400 mb-2">65</div>
                      <div className="text-sm opacity-90">Pays d&apos;intervention</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-yellow-400 mb-2">25%</div>
                      <div className="text-sm opacity-90">Coût vs nouvelle ligne</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-yellow-400 mb-2">400%</div>
                      <div className="text-sm opacity-90">Plus rapide</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-yellow-400 mb-2">4X</div>
                      <div className="text-sm opacity-90">Plus d&apos;électricité</div>
                    </div>
                  </div>

                  <div className="mt-8 p-4 bg-white/10 rounded-lg">
                    <div className="text-sm opacity-90 mb-2">Partenaires institutionnels</div>
                    <div className="flex space-x-2">
                      <div className="px-3 py-1 bg-white/20 rounded-full text-xs">Banque Mondiale</div>
                      <div className="px-3 py-1 bg-white/20 rounded-full text-xs">BAD</div>
                      <div className="px-3 py-1 bg-white/20 rounded-full text-xs">USAID</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}