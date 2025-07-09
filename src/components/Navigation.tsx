import React, { memo, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import MobileMenu from '@/components/MobileMenu';
import { gsap } from 'gsap';
import { animations } from '@/hooks/useGSAP';

interface NavigationProps {
  isMobileMenuOpen: boolean;
  setIsMobileMenuOpen: (isOpen: boolean) => void;
  scrollToContact: () => void;
}

const Navigation = memo(({ isMobileMenuOpen, setIsMobileMenuOpen, scrollToContact }: NavigationProps) => {
  const navRef = useRef<HTMLElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Initial navigation slide down
      gsap.fromTo(navRef.current, 
        { y: -100, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power2.out" }
      );
      
      // Logo animation
      if (logoRef.current) {
        gsap.fromTo(logoRef.current,
          { scale: 0, rotation: -180 },
          { scale: 1, rotation: 0, duration: 0.8, delay: 0.2, ease: "back.out(1.7)" }
        );
      }
      
      // Menu items stagger
      if (menuRef.current) {
        gsap.fromTo(menuRef.current.children,
          { y: -20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.6, stagger: 0.1, delay: 0.4, ease: "power2.out" }
        );
      }
      
      // Button entrance
      if (buttonRef.current) {
        animations.scaleIn(buttonRef.current, 0.6);
      }
      
    }, navRef);
    
    return () => ctx.revert();
  }, []);

  useEffect(() => {
    if (logoRef.current) {
      animations.magneticHover(logoRef.current);
    }
  }, []);

  return (
    <nav ref={navRef} className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div ref={logoRef} className="w-10 h-10 rounded-full bg-gradient-primary flex items-center justify-center cursor-pointer">
              <span className="text-white font-bold text-lg">R</span>
            </div>
            <span className="text-xl sm:text-2xl font-bold text-foreground">Rehoman Alif</span>
          </div>
          
          <div ref={menuRef} className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-foreground hover:text-primary transition-all duration-300 font-medium">Home</a>
            <a href="#about" className="text-foreground hover:text-primary transition-all duration-300 font-medium">About</a>
            <a href="#services" className="text-foreground hover:text-primary transition-all duration-300 font-medium">Services</a>
            <a href="#portfolio" className="text-foreground hover:text-primary transition-all duration-300 font-medium">Portfolio</a>
            <a href="#testimonials" className="text-foreground hover:text-primary transition-all duration-300 font-medium">Reviews</a>
            <a href="#process" className="text-foreground hover:text-primary transition-all duration-300 font-medium">Process</a>
            <a href="#contact" className="text-foreground hover:text-primary transition-all duration-300 font-medium">Contact</a>
          </div>
          
          <div className="flex items-center space-x-4">
            <div ref={buttonRef}>
              <Button onClick={scrollToContact} variant="gradient" className="hidden sm:flex px-4 sm:px-6 py-2 rounded-full font-semibold">
                Let's Talk
              </Button>
            </div>
            <MobileMenu isOpen={isMobileMenuOpen} setIsOpen={setIsMobileMenuOpen} scrollToContact={scrollToContact} />
          </div>
        </div>
      </div>
    </nav>
  );
});

Navigation.displayName = 'Navigation';

export default Navigation;