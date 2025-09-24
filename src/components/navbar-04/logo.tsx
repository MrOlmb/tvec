import { Zap } from "lucide-react";

export const Logo = () => (
  <div className="flex items-center group cursor-pointer">
    <span className="text-2xl font-bold text-tvec-navy transition-all duration-300 relative flex items-center">
      T<span className="relative flex items-center">V<Zap fill="#f59e0b" stroke="none" className="absolute -right-1 w-5 h-10 transition-all duration-300 animate-bounce group-hover:animate-pulse group-hover:scale-110" style={{animationDelay: '0s', animationDuration: '2s'}} /></span>EC
    </span>
  </div>
);
