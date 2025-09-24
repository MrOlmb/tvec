import { Zap, Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-tvec-navy text-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-tvec-green/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-tvec-yellow/10 rounded-full blur-2xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4 group">
              <div className="relative">
                <span className="text-2xl font-bold text-tvec-green group-hover:text-white transition-colors duration-300">TVEC</span>
                <Zap className="absolute -top-1 -right-1 w-4 h-4 text-tvec-yellow animate-pulse" />
              </div>
            </div>
            <p className="text-tvec-yellow font-semibold mb-2 uppercase tracking-wide">
              FOURNISSEURS DE SOLUTIONS RÉSEAUX ÉLECTRIQUES
            </p>
            <p className="text-gray-300 max-w-md leading-relaxed">
              Transport Vert d&apos;Électricité au Congo - Votre partenaire de confiance 
              pour les solutions électriques avancées et durables.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-tvec-green relative">
              Liens Rapides
              <span className="absolute bottom-0 left-0 w-8 h-0.5 bg-tvec-yellow rounded-full"></span>
            </h3>
            <ul className="space-y-3">
              <li>
                <a href="#about" className="text-gray-300 hover:text-tvec-yellow transition-all duration-300 hover:translate-x-1 inline-block">
                  À Propos
                </a>
              </li>
              <li>
                <a href="#technology" className="text-gray-300 hover:text-tvec-yellow transition-all duration-300 hover:translate-x-1 inline-block">
                  Technologie
                </a>
              </li>
              <li>
                <a href="#solutions" className="text-gray-300 hover:text-tvec-yellow transition-all duration-300 hover:translate-x-1 inline-block">
                  Solutions
                </a>
              </li>
              <li>
                <a href="#projects" className="text-gray-300 hover:text-tvec-yellow transition-all duration-300 hover:translate-x-1 inline-block">
                  Projets
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-tvec-green relative">
              Contact
              <span className="absolute bottom-0 left-0 w-8 h-0.5 bg-tvec-yellow rounded-full"></span>
            </h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3 group">
                <div className="p-1 rounded bg-tvec-yellow/10 group-hover:bg-tvec-yellow/20 transition-colors">
                  <MapPin className="w-4 h-4 text-tvec-yellow" />
                </div>
                <span className="text-gray-300 text-sm leading-relaxed">
                  Kinshasa, République Démocratique du Congo
                </span>
              </div>
              <div className="flex items-center space-x-3 group">
                <div className="p-1 rounded bg-tvec-yellow/10 group-hover:bg-tvec-yellow/20 transition-colors">
                  <Phone className="w-4 h-4 text-tvec-yellow" />
                </div>
                <span className="text-gray-300 text-sm">+243 XXX XXX XXX</span>
              </div>
              <div className="flex items-center space-x-3 group">
                <div className="p-1 rounded bg-tvec-yellow/10 group-hover:bg-tvec-yellow/20 transition-colors">
                  <Mail className="w-4 h-4 text-tvec-yellow" />
                </div>
                <span className="text-gray-300 text-sm">contact@tvec.cd</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-600/50 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-300 text-sm font-medium">
            &copy; {new Date().getFullYear()} TVEC. Tous droits réservés.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-300 hover:text-tvec-yellow text-sm transition-all duration-300 hover:translate-y-[-1px]">
              Politique de Confidentialité
            </a>
            <a href="#" className="text-gray-300 hover:text-tvec-yellow text-sm transition-all duration-300 hover:translate-y-[-1px]">
              Conditions d&apos;Utilisation
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}