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

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button 
          variant="outline" 
          size="icon" 
          className="border-gray-300 text-tvec-navy hover:bg-gray-100"
        >
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent className="px-6 py-8 bg-white">
        <div className="flex items-center justify-between mb-8">
          <Logo />
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsOpen(false)}
            className="text-gray-500 hover:bg-gray-100"
          >
            <X className="w-4 h-4" />
          </Button>
        </div>
        
        <NavMenu orientation="vertical" />
        
        <div className="flex flex-col gap-4 mt-8 pt-8 border-t border-gray-200">
          <Button
            variant="default"
            onClick={handleContactClick}
            className="w-full bg-tvec-green text-white hover:bg-tvec-green/90"
          >
            Contact
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  );
};