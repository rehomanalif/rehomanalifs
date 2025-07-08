import React, { memo } from 'react';
import { Button } from '@/components/ui/button';
import MobileMenu from '@/components/MobileMenu';

interface NavigationProps {
  isMobileMenuOpen: boolean;
  setIsMobileMenuOpen: (isOpen: boolean) => void;
  scrollToContact: () => void;
}

const Navigation = memo(({ isMobileMenuOpen, setIsMobileMenuOpen, scrollToContact }: NavigationProps) => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 rounded-full bg-gradient-primary flex items-center justify-center">
              <span className="text-white font-bold text-lg">R</span>
            </div>
            <span className="text-xl sm:text-2xl font-bold text-foreground">Rehoman Alif</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-foreground hover:text-primary transition-all duration-300 font-medium">Home</a>
            <a href="#about" className="text-foreground hover:text-primary transition-all duration-300 font-medium">About</a>
            <a href="#services" className="text-foreground hover:text-primary transition-all duration-300 font-medium">Services</a>
            <a href="#portfolio" className="text-foreground hover:text-primary transition-all duration-300 font-medium">Portfolio</a>
            <a href="#testimonials" className="text-foreground hover:text-primary transition-all duration-300 font-medium">Reviews</a>
            <a href="#process" className="text-foreground hover:text-primary transition-all duration-300 font-medium">Process</a>
            <a href="#contact" className="text-foreground hover:text-primary transition-all duration-300 font-medium">Contact</a>
          </div>
          
          <div className="flex items-center space-x-4">
            <Button onClick={scrollToContact} variant="gradient" className="hidden sm:flex px-4 sm:px-6 py-2 rounded-full font-semibold">
              Let's Talk
            </Button>
            <MobileMenu isOpen={isMobileMenuOpen} setIsOpen={setIsMobileMenuOpen} scrollToContact={scrollToContact} />
          </div>
        </div>
      </div>
    </nav>
  );
});

Navigation.displayName = 'Navigation';

export default Navigation;