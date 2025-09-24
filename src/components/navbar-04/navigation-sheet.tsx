import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, X } from "lucide-react";
import { Logo } from "./logo";
import { NavMenu } from "./nav-menu";
import { useState } from "react";

export const NavigationSheet = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleContactClick = () => {
    setIsOpen(false);
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleQuoteClick = () => {
    setIsOpen(false);
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button 
          variant="outline" 
          size="icon" 
          className="rounded-full border-tvec-blue/50 text-white hover:text-tvec-yellow hover:bg-tvec-blue/20 hover:border-tvec-yellow/50 transition-all duration-300 group"
        >
          <Menu className="group-hover:lightning-glow transition-all duration-300" />
        </Button>
      </SheetTrigger>
      <SheetContent className="px-6 py-8 bg-tvec-navy/95 backdrop-blur-md border-tvec-blue/30 electrical-grid-dense">
        <div className="flex items-center justify-between mb-8">
          <Logo />
          <Button
            variant="outline"
            size="icon"
            onClick={() => setIsOpen(false)}
            className="rounded-full border-tvec-blue/50 text-white hover:text-tvec-yellow hover:bg-tvec-blue/20 hover:border-tvec-yellow/50 transition-all duration-300"
          >
            <X className="w-4 h-4" />
          </Button>
        </div>
        
        <NavMenu orientation="vertical" className="mb-8 [&>div]:h-full" />
        
        <div className="flex flex-col gap-4 mt-8 pt-8 border-t border-tvec-blue/30">
          <Button
            variant="outline"
            onClick={handleContactClick}
            className="w-full rounded-full border-tvec-blue/50 text-white hover:text-tvec-yellow hover:bg-tvec-blue/20 hover:border-tvec-yellow/50 transition-all duration-300 group"
          >
            <span className="group-hover:lightning-glow transition-all duration-300">Contact</span>
          </Button>
          <Button 
            onClick={handleQuoteClick}
            className="w-full rounded-full bg-gradient-to-r from-tvec-blue to-tvec-blue-light hover:from-tvec-blue-light hover:to-tvec-yellow text-white border-0 electric-glow hover:scale-105 transition-all duration-300 group"
          >
            <span className="group-hover:animate-pulse">Devis Gratuit</span>
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  );
};
