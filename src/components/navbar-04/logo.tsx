import { Zap } from "lucide-react";

export const Logo = () => (
  <div className="flex items-center group cursor-pointer">
    <div className="relative">
      <span className="text-2xl tvec-logo-nav transition-all duration-300 text-white group-hover:animate-electrical-pulse electric-glow">
        T<Zap className="tvec-lightning-nav w-5 h-5 text-tvec-yellow transition-all duration-300 animate-pulse lightning-glow group-hover:animate-lightning-glow group-hover:scale-110" />EC
      </span>
      {/* Enhanced electrical glow effect on hover */}
      <div className="absolute inset-0 bg-gradient-to-r from-tvec-blue/30 to-tvec-yellow/30 blur-xl -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 electric-glow"></div>
      <div className="absolute inset-0 lightning-border opacity-0 group-hover:opacity-40 transition-opacity duration-500 rounded-lg"></div>
    </div>
  </div>
);
