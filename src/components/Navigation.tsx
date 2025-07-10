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

    // Scroll progress indicator
    const updateScrollProgress = () => {
      const scrollProgress = document.getElementById('scroll-progress');
      if (scrollProgress) {
        const scrollTop = window.pageYOffset;
        const docHeight = document.body.scrollHeight - window.innerHeight;
        const scrollPercent = (scrollTop / docHeight) * 100;
        scrollProgress.style.transform = `scaleX(${scrollPercent / 100})`;
      }
    };

    window.addEventListener('scroll', updateScrollProgress);
    
    return () => {
      ctx.revert();
      window.removeEventListener('scroll', updateScrollProgress);
    };
  }, []);

  useEffect(() => {
    if (logoRef.current) {
      animations.magneticHover(logoRef.current);
    }
  }, []);

  return (
    <nav ref={navRef} className="fixed top-0 left-0 right-0 z-50 glass-effect shadow-lg border-b border-white/20 transition-all duration-300">
      <div className="container mx-auto px-4 sm:px-6 py-3">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <div ref={logoRef} className="relative w-12 h-12 rounded-2xl bg-gradient-primary flex items-center justify-center cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-110 hover:rotate-6 overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <span className="text-white font-bold text-xl z-10 group-hover:scale-110 transition-transform duration-300">R</span>
              <div className="absolute -inset-1 bg-gradient-to-r from-primary via-secondary to-accent rounded-2xl opacity-0 group-hover:opacity-20 blur transition-all duration-500"></div>
            </div>
            <div className="flex flex-col">
              <span className="text-xl sm:text-2xl font-bold text-foreground tracking-tight">Rehoman Alif</span>
              <span className="text-xs text-muted-foreground font-medium hidden sm:block">Digital Marketing Expert</span>
            </div>
          </div>
          
          <div ref={menuRef} className="hidden lg:flex items-center space-x-1">
            {[
              { href: "#home", label: "Home" },
              { href: "#about", label: "About" },
              { href: "#services", label: "Services" },
              { href: "#portfolio", label: "Portfolio" },
              { href: "#testimonials", label: "Reviews" },
              { href: "#process", label: "Process" },
              { href: "#contact", label: "Contact" }
            ].map((item, index) => (
              <a 
                key={item.href}
                href={item.href} 
                className="relative px-4 py-2 text-foreground hover:text-primary transition-all duration-300 font-medium rounded-lg hover:bg-primary/5 group overflow-hidden"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <span className="relative z-10">{item.label}</span>
                <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-lg"></div>
                <div className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-primary to-secondary group-hover:w-full group-hover:left-0 transition-all duration-300"></div>
              </a>
            ))}
          </div>
          
          <div className="flex items-center space-x-4">
            <div ref={buttonRef}>
              <Button 
                onClick={scrollToContact} 
                variant="gradient" 
                className="hidden sm:flex px-6 py-2.5 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 relative overflow-hidden group"
              >
                <span className="relative z-10">Let's Talk</span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Button>
            </div>
            <MobileMenu isOpen={isMobileMenuOpen} setIsOpen={setIsMobileMenuOpen} scrollToContact={scrollToContact} />
          </div>
        </div>
        
        {/* Scroll Progress Indicator */}
        <div className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-primary via-secondary to-accent transform scale-x-0 origin-left transition-transform duration-300" id="scroll-progress"></div>
      </div>
    </nav>
  );
});

Navigation.displayName = 'Navigation';

export default Navigation;