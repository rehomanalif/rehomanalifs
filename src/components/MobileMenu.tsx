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
          <div className="fixed inset-0 bg-black/50" onClick={() => setIsOpen(false)} />
          <div className="fixed top-0 right-0 h-full w-64 bg-white shadow-xl transform transition-transform duration-300">
            <div className="p-6">
              <div className="flex justify-between items-center mb-8">
                <span className="text-xl font-bold text-foreground">Menu</span>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsOpen(false)}
                >
                  <X className="w-6 h-6" />
                </Button>
              </div>
              
              <nav className="space-y-4">
                {[
                  { href: '#home', label: 'Home' },
                  { href: '#about', label: 'About' },
                  { href: '#services', label: 'Services' },
                  { href: '#portfolio', label: 'Portfolio' },
                  { href: '#testimonials', label: 'Reviews' },
                  { href: '#process', label: 'Process' },
                  { href: '#contact', label: 'Contact' }
                ].map((item) => (
                  <button
                    key={item.href}
                    onClick={() => handleLinkClick(item.href)}
                    className="block w-full text-left py-3 px-4 text-foreground hover:text-primary hover:bg-primary/5 rounded-lg transition-all duration-300 font-medium"
                  >
                    {item.label}
                  </button>
                ))}
                
                <div className="pt-4 border-t">
                  <Button 
                    onClick={() => {
                      scrollToContact();
                      setIsOpen(false);
                    }}
                    className="w-full bg-gradient-primary hover:opacity-90 text-white rounded-full font-semibold"
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