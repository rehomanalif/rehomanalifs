import React, { memo, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { CheckCircle, Star } from 'lucide-react';
import heroImage from '@/assets/hero-image.png';
import { gsap } from 'gsap';
import { animations } from '@/hooks/useGSAP';

interface HeroSectionProps {
  scrollToContact: () => void;
}

const HeroSection = memo(({ scrollToContact }: HeroSectionProps) => {
  const heroRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const floatingRef1 = useRef<HTMLDivElement>(null);
  const floatingRef2 = useRef<HTMLDivElement>(null);
  const floatingRef3 = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Main timeline for hero entrance
      const tl = gsap.timeline();
      
      // Background elements animation
      if (floatingRef1.current && floatingRef2.current && floatingRef3.current) {
        tl.fromTo([floatingRef1.current, floatingRef2.current, floatingRef3.current], 
          { scale: 0, opacity: 0 },
          { scale: 1, opacity: 1, duration: 0.8, stagger: 0.2, ease: "back.out(1.7)" }
        );
      }
      
      // Text content reveal
      if (textRef.current) {
        tl.fromTo(textRef.current.children,
          { y: 50, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: "power2.out" },
          "-=0.4"
        );
      }
      
      // Image container with clip-path reveal
      if (imageRef.current) {
        tl.fromTo(imageRef.current,
          { clipPath: "circle(0% at 50% 50%)", scale: 0.8 },
          { clipPath: "circle(100% at 50% 50%)", scale: 1, duration: 1.2, ease: "power2.out" },
          "-=0.6"
        );
      }
      
      // Buttons entrance
      if (buttonsRef.current) {
        tl.fromTo(buttonsRef.current.children,
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.6, stagger: 0.1, ease: "power2.out" },
          "-=0.4"
        );
      }
      
      // Stats animation
      if (statsRef.current) {
        tl.fromTo(statsRef.current.children,
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.6, stagger: 0.1, ease: "power2.out" },
          "-=0.2"
        );
      }
      
      // Floating animations for badges
      animations.floatingAnimation(".floating-badge-1");
      animations.floatingAnimation(".floating-badge-2");
      animations.floatingAnimation(".floating-badge-3");
      
      // Continuous floating for background elements
      gsap.to(floatingRef1.current, {
        y: -20,
        duration: 3,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1
      });
      
      gsap.to(floatingRef2.current, {
        y: 15,
        duration: 2.5,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
        delay: 0.5
      });
      
    }, heroRef);
    
    return () => ctx.revert();
  }, []);

  return (
    <section ref={heroRef} id="home" className="min-h-screen flex items-center pt-20 bg-gradient-to-br from-white via-primary/5 to-secondary/5 relative overflow-hidden">
      {/* Background Elements */}
      <div ref={floatingRef1} className="absolute top-20 right-10 w-12 sm:w-20 h-12 sm:h-20 rounded-full bg-primary/20"></div>
      <div ref={floatingRef2} className="absolute bottom-32 left-10 w-10 sm:w-16 h-10 sm:h-16 rounded-full bg-secondary/20"></div>
      <div ref={floatingRef3} className="absolute top-1/2 right-1/4 w-4 h-4 rounded-full bg-accent/40"></div>
      <div className="absolute bottom-1/4 left-1/3 w-6 h-6 rounded-full bg-primary/30"></div>
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left Content */}
          <div ref={textRef} className="space-y-6 sm:space-y-8">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-primary/10 border border-primary/20">
              <div className="w-2 h-2 rounded-full bg-accent mr-2 animate-pulse"></div>
              <span className="text-primary font-semibold text-sm">Available for new projects</span>
            </div>
            
            <div className="space-y-4 sm:space-y-6">
              <h1 className="text-3xl sm:text-5xl font-black leading-tight lg:text-5xl">
                Let's build{' '}
                <span className="text-gradient bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                  Ads that Sell
                </span>{' '}
                and{' '}
                <span className="text-gradient bg-gradient-to-r from-accent via-primary to-secondary bg-clip-text text-transparent">
                  Design that Convert
                </span>
              </h1>
              
              <p className="text-lg leading-relaxed max-w-lg sm:text-xl font-medium text-gray-600 text-justify">
                I help businesses scale with strategic digital marketing, high-converting Meta ads, 
                and stunning web designs that actually drive results.
              </p>
            </div>
            
            <div ref={buttonsRef} className="flex flex-col sm:flex-row gap-4">
              <Button onClick={scrollToContact} size="lg" variant="gradient" className="magnetic-button px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg rounded-full transform hover:scale-105">
                Let's Scale Your Business
              </Button>
              <Button variant="gradient-outline" size="lg" className="magnetic-button px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg rounded-full" onClick={() => window.open('https://www.fiverr.com/alifpixelpro', '_blank')}>
                View My Work
              </Button>
            </div>
            
            {/* Stats */}
            <div ref={statsRef} className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">100+</div>
                <div className="text-sm text-muted-foreground">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-secondary">99%</div>
                <div className="text-sm text-muted-foreground">Client Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent">2+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
            </div>
          </div>
          
          {/* Right Image */}
          <div className="relative">
            <div className="relative">
              {/* Main Image Container - Optimized sizing */}
              <div ref={imageRef} className="relative z-10 bg-gradient-to-br from-white to-gray-50 rounded-3xl p-4 shadow-2xl max-w-md mx-auto">
                <img 
                  src={heroImage} 
                  alt="Rehoman Alif - Digital Marketing Expert" 
                  className="w-full rounded-2xl"
                  loading="eager"
                />
                
                {/* Floating Elements with GSAP classes */}
                <div className="floating-badge-1 absolute -top-3 -right-3 bg-green-500 text-white p-2.5 rounded-full shadow-lg">
                  <CheckCircle className="w-5 h-5" />
                </div>
                
                <div className="floating-badge-2 absolute -bottom-3 -left-3 bg-gradient-primary text-white p-3 rounded-2xl shadow-lg">
                  <div className="text-xs font-semibold">Best Design Awards</div>
                  <div className="flex items-center mt-1">
                    <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                    <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                    <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                  </div>
                </div>
                
                <div className="floating-badge-3 absolute top-1/2 -right-6 bg-white p-2.5 rounded-xl shadow-lg border">
                  <div className="text-xs text-muted-foreground">24h active</div>
                  <div className="text-sm font-semibold text-primary">Quick Response</div>
                </div>
              </div>
              
              {/* Background Decorations - Reduced size */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-accent/20 rounded-full blur-xl"></div>
              <div className="absolute -bottom-6 -left-6 w-28 h-28 bg-gradient-primary/20 rounded-full blur-xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

HeroSection.displayName = 'HeroSection';

export default HeroSection;