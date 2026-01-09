import React, { memo, useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import MobileMenu from '@/components/MobileMenu';
import MegaMenu from '@/components/MegaMenu';
import { gsap } from 'gsap';
import { ChevronDown } from 'lucide-react';

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
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(navRef.current, 
        { y: -100, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power2.out" }
      );
      
      if (logoRef.current) {
        gsap.fromTo(logoRef.current,
          { scale: 0, rotation: -180 },
          { scale: 1, rotation: 0, duration: 0.8, delay: 0.2, ease: "back.out(1.7)" }
        );
      }
      
      if (menuRef.current) {
        gsap.fromTo(menuRef.current.children,
          { y: -20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.6, stagger: 0.1, delay: 0.4, ease: "power2.out" }
        );
      }
      
      if (buttonRef.current) {
        gsap.fromTo(buttonRef.current,
          { scale: 0, opacity: 0 },
          { scale: 1, opacity: 1, duration: 0.6, delay: 0.6, ease: "back.out(1.7)" }
        );
      }
    }, navRef);

    const updateScrollProgress = () => {
      const scrollTop = window.pageYOffset;
      const docHeight = document.body.scrollHeight - window.innerHeight;
      const progress = (scrollTop / docHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', updateScrollProgress);
    
    return () => {
      ctx.revert();
      window.removeEventListener('scroll', updateScrollProgress);
    };
  }, []);

  const menuItems = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#services", label: "Services", hasMega: true },
    { href: "#portfolio", label: "Portfolio" },
    { href: "#testimonials", label: "Reviews" },
    { href: "#contact", label: "Contact" }
  ];

  return (
    <nav ref={navRef} className="fixed top-4 left-4 right-4 z-50">
      <div className="max-w-6xl mx-auto">
        <div className="glass-navbar rounded-full px-6 py-3 flex justify-between items-center relative">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div 
              ref={logoRef} 
              className="relative w-10 h-10 rounded-full gradient-cyber flex items-center justify-center cursor-pointer transition-all duration-500 hover:scale-110 hover:neon-glow-cyan overflow-hidden group"
            >
              <span className="text-background font-bold text-lg z-10">R</span>
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-display font-bold text-foreground tracking-tight">Rehoman</span>
            </div>
          </div>
          
          {/* Center Navigation */}
          <div 
            ref={menuRef} 
            className="hidden lg:flex items-center space-x-1 absolute left-1/2 transform -translate-x-1/2"
          >
            {menuItems.map((item) => (
              <div
                key={item.href}
                className="relative"
                onMouseEnter={() => item.hasMega && setIsServicesOpen(true)}
                onMouseLeave={() => item.hasMega && setIsServicesOpen(false)}
              >
                <a 
                  href={item.href} 
                  className="relative px-4 py-2 text-foreground/80 hover:text-primary transition-all duration-300 font-medium text-sm flex items-center gap-1 group"
                >
                  <span className="relative z-10">{item.label}</span>
                  {item.hasMega && (
                    <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isServicesOpen ? 'rotate-180' : ''}`} />
                  )}
                  <div className="absolute inset-0 bg-white/5 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300" />
                </a>
              </div>
            ))}
          </div>
          
          {/* Right - CTA Button */}
          <div className="flex items-center space-x-4">
            <div ref={buttonRef}>
              <Button 
                onClick={scrollToContact} 
                className="hidden sm:flex btn-cyber text-sm px-6 py-2"
              >
                Let's Talk
              </Button>
            </div>
            <MobileMenu isOpen={isMobileMenuOpen} setIsOpen={setIsMobileMenuOpen} scrollToContact={scrollToContact} />
          </div>
          
          {/* Scroll Progress */}
          <div 
            className="absolute bottom-0 left-0 h-[2px] gradient-cyber rounded-full transition-all duration-150"
            style={{ width: `${scrollProgress}%` }}
          />
        </div>
        
        {/* Mega Menu */}
        <div
          onMouseEnter={() => setIsServicesOpen(true)}
          onMouseLeave={() => setIsServicesOpen(false)}
        >
          <MegaMenu isOpen={isServicesOpen} />
        </div>
      </div>
    </nav>
  );
});

Navigation.displayName = 'Navigation';

export default Navigation;
