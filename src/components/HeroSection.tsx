import React, { memo } from 'react';
import { Button } from '@/components/ui/button';
import { CheckCircle, Star } from 'lucide-react';
import heroImage from '@/assets/hero-image.png';

interface HeroSectionProps {
  scrollToContact: () => void;
}

const HeroSection = memo(({ scrollToContact }: HeroSectionProps) => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-20 bg-gradient-to-br from-white via-primary/5 to-secondary/5 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-20 right-10 w-12 sm:w-20 h-12 sm:h-20 rounded-full bg-primary/20 animate-bounce"></div>
      <div className="absolute bottom-32 left-10 w-10 sm:w-16 h-10 sm:h-16 rounded-full bg-secondary/20 animate-pulse"></div>
      <div className="absolute top-1/2 right-1/4 w-4 h-4 rounded-full bg-accent/40"></div>
      <div className="absolute bottom-1/4 left-1/3 w-6 h-6 rounded-full bg-primary/30"></div>
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left Content */}
          <div data-aos="fade-right" className="space-y-6 sm:space-y-8">
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
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button onClick={scrollToContact} size="lg" variant="gradient" className="px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg rounded-full transform hover:scale-105">
                Let's Scale Your Business
              </Button>
              <Button variant="gradient-outline" size="lg" className="px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg rounded-full" onClick={() => window.open('https://www.fiverr.com/alifpixelpro', '_blank')}>
                View My Work
              </Button>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
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
          <div data-aos="fade-left" className="relative">
            <div className="relative">
              {/* Main Image Container */}
              <div className="relative z-10 bg-gradient-to-br from-white to-gray-50 rounded-3xl p-8 shadow-2xl">
                <img 
                  src={heroImage} 
                  alt="Rehoman Alif - Digital Marketing Expert" 
                  className="w-full max-w-sm mx-auto rounded-2xl"
                  loading="eager"
                />
                
                {/* Floating Elements */}
                <div className="absolute -top-4 -right-4 bg-green-500 text-white p-3 rounded-full shadow-lg">
                  <CheckCircle className="w-6 h-6" />
                </div>
                
                <div className="absolute -bottom-4 -left-4 bg-gradient-primary text-white p-4 rounded-2xl shadow-lg">
                  <div className="text-xs font-semibold">Best Design Awards</div>
                  <div className="flex items-center mt-1">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  </div>
                </div>
                
                <div className="absolute top-1/2 -right-8 bg-white p-3 rounded-xl shadow-lg border">
                  <div className="text-xs text-muted-foreground">24 hours active</div>
                  <div className="text-sm font-semibold text-primary">Quick Response</div>
                </div>
              </div>
              
              {/* Background Decorations */}
              <div className="absolute -top-8 -right-8 w-32 h-32 bg-gradient-accent/20 rounded-full blur-2xl"></div>
              <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-gradient-primary/20 rounded-full blur-2xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

HeroSection.displayName = 'HeroSection';

export default HeroSection;