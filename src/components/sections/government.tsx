'use client';

import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CheckCircle, Building, DollarSign, Zap, Globe } from 'lucide-react';

export function GovernmentSection() {
  return (
    <section id="gouvernements" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-tvec-navy mb-4">
            Soutien aux <span className="text-tvec-green">Gouvernements</span>
          </h2>
          <div className="w-24 h-1 bg-tvec-yellow mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Nous collaborons avec les gouvernements pour fournir des solutions 
            électriques fiables, économiques et alignées sur les politiques nationales.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <Card className="p-8 border-2 border-gray-100">
              <h3 className="text-2xl font-bold text-tvec-navy mb-4">
                Notre Mission Commune
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                TVEC est pleinement consciente de l&apos;énorme responsabilité des 
                gouvernements, des ministères de l&apos;Énergie et des compagnies d&apos;électricité 
                pour fournir une électricité fiable et économique.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Notre mission est alignée sur la vôtre, car nos solutions sont à la fois{' '}
                <span className="font-semibold text-tvec-green">fiables</span> et{' '}
                <span className="font-semibold text-tvec-green">économiques</span>.
              </p>
            </Card>

            <div>
              <h4 className="text-xl font-semibold text-tvec-navy mb-4">
                Engagement Gouvernemental
              </h4>
              <ul className="space-y-3">
                <li className="flex items-start"><CheckCircle className="w-5 h-5 text-tvec-green mr-3 mt-1 flex-shrink-0" />Solutions alignées avec les politiques énergétiques nationales</li>
                <li className="flex items-start"><CheckCircle className="w-5 h-5 text-tvec-green mr-3 mt-1 flex-shrink-0" />Réduction des coûts d&apos;infrastructure publique</li>
                <li className="flex items-start"><CheckCircle className="w-5 h-5 text-tvec-green mr-3 mt-1 flex-shrink-0" />Amélioration de l&apos;accès à l&apos;électricité pour les citoyens</li>
                <li className="flex items-start"><CheckCircle className="w-5 h-5 text-tvec-green mr-3 mt-1 flex-shrink-0" />Développement durable et responsable</li>
              </ul>
            </div>

            {/* <Button size="lg" className="bg-tvec-green text-white hover:bg-tvec-green/90 w-full sm:w-auto"> */}
              {/* Découvrir nos solutions gouvernementales */}
            {/* </Button> */}
          </div>

          {/* Right Visual */}
          <div className="space-y-8">
            <Card className="p-8 border-2 border-gray-100">
              <h3 className="text-2xl font-bold text-tvec-navy mb-6 text-center">
                Impact Gouvernemental
              </h3>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-4 rounded-lg bg-gray-50">
                  <div className="text-3xl font-bold text-tvec-green mb-2">65</div>
                  <div className="text-sm text-gray-600">Pays d&apos;intervention</div>
                </div>
                <div className="text-center p-4 rounded-lg bg-gray-50">
                  <div className="text-3xl font-bold text-tvec-green mb-2">25%</div>
                  <div className="text-sm text-gray-600">Coût vs nouvelle ligne</div>
                </div>
                <div className="text-center p-4 rounded-lg bg-gray-50">
                  <div className="text-3xl font-bold text-tvec-green mb-2">4X</div>
                  <div className="text-sm text-gray-600">Plus de capacité</div>
                </div>
                <div className="text-center p-4 rounded-lg bg-gray-50">
                  <div className="text-3xl font-bold text-tvec-green mb-2">0</div>
                  <div className="text-sm text-gray-600">Interruption</div>
                </div>
              </div>
            </Card>
            
            <Card className="p-8 border-2 border-gray-100">
              <h3 className="text-2xl font-bold text-tvec-navy mb-6 text-center">
                Partenaires Institutionnels
              </h3>
              <div className="flex flex-wrap justify-center gap-4">
                <div className="px-4 py-2 bg-gray-100 rounded-full text-sm font-medium text-gray-700">Banque Mondiale</div>
                <div className="px-4 py-2 bg-gray-100 rounded-full text-sm font-medium text-gray-700">BAD</div>
                <div className="px-4 py-2 bg-gray-100 rounded-full text-sm font-medium text-gray-700">USAID</div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}