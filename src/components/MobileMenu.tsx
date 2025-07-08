import React from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface MobileMenuProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  scrollToContact: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, setIsOpen, scrollToContact }) => {
  const handleLinkClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <>
      {/* Mobile Menu Button */}
      <Button
        variant="ghost"
        size="sm"
        className="md:hidden"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </Button>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          <div 
            className="fixed inset-0 bg-black/60 backdrop-blur-sm animate-fade-in" 
            onClick={() => setIsOpen(false)} 
          />
          <div className="fixed top-0 left-0 w-full bg-gradient-to-b from-white via-white to-white/95 shadow-2xl animate-slide-down">
            <div className="px-6 py-8">
              <div className="flex justify-between items-center mb-8">
                <span className="text-xl font-bold text-foreground">Menu</span>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsOpen(false)}
                  className="hover:bg-primary/10"
                >
                  <X className="w-6 h-6" />
                </Button>
              </div>
              
              <nav className="space-y-2">
                {[
                  { href: '#home', label: 'Home' },
                  { href: '#about', label: 'About' },
                  { href: '#services', label: 'Services' },
                  { href: '#portfolio', label: 'Portfolio' },
                  { href: '#testimonials', label: 'Reviews' },
                  { href: '#process', label: 'Process' },
                  { href: '#contact', label: 'Contact' }
                ].map((item, index) => (
                  <button
                    key={item.href}
                    onClick={() => handleLinkClick(item.href)}
                    className="block w-full text-left py-4 px-4 text-foreground hover:text-primary hover:bg-primary/5 rounded-xl transition-all duration-300 font-medium text-lg animate-stagger-in"
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    {item.label}
                  </button>
                ))}
                
                <div className="pt-6 border-t border-border/20">
                  <Button 
                    onClick={() => {
                      scrollToContact();
                      setIsOpen(false);
                    }}
                    variant="gradient"
                    className="w-full rounded-full font-semibold text-lg py-4 animate-stagger-in shadow-lg"
                    style={{ animationDelay: '350ms' }}
                  >
                    Let's Talk
                  </Button>
                </div>
              </nav>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default MobileMenu;