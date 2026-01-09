import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface MobileMenuProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  scrollToContact: () => void;
}

const menuItems = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#portfolio", label: "Portfolio" },
  { href: "#testimonials", label: "Reviews" },
  { href: "#contact", label: "Contact" }
];

const MobileMenu = ({ isOpen, setIsOpen, scrollToContact }: MobileMenuProps) => {
  const handleLinkClick = () => setIsOpen(false);

  return (
    <>
      <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden relative w-10 h-10 flex items-center justify-center rounded-full glass-card hover:neon-glow-cyan transition-all duration-300" aria-label="Toggle menu">
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
              <X className="w-5 h-5 text-primary" />
            </motion.div>
          ) : (
            <motion.div key="menu" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}>
              <Menu className="w-5 h-5 text-foreground" />
            </motion.div>
          )}
        </AnimatePresence>
      </button>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setIsOpen(false)} className="fixed inset-0 bg-background/80 backdrop-blur-sm z-40 lg:hidden" />
            <motion.div initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }} transition={{ type: 'spring', damping: 25, stiffness: 200 }} className="fixed top-0 right-0 bottom-0 w-80 glass-navbar z-50 lg:hidden overflow-y-auto">
              <div className="p-6">
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-full gradient-cyber flex items-center justify-center">
                      <span className="text-background font-bold text-lg">R</span>
                    </div>
                    <span className="font-display font-bold text-foreground">Rehoman</span>
                  </div>
                  <button onClick={() => setIsOpen(false)} className="w-10 h-10 rounded-full glass-card flex items-center justify-center hover:neon-glow-cyan transition-all">
                    <X className="w-5 h-5 text-foreground" />
                  </button>
                </div>
                <nav className="mb-8">
                  {menuItems.map((item, index) => (
                    <motion.a key={item.href} href={item.href} onClick={handleLinkClick} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: index * 0.05 }} className="block py-3 px-4 text-foreground hover:text-primary hover:bg-white/5 rounded-xl transition-all duration-300 font-medium">
                      {item.label}
                    </motion.a>
                  ))}
                </nav>
                <motion.button onClick={() => { scrollToContact(); setIsOpen(false); }} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} className="w-full btn-cyber text-center">
                  Let's Talk
                </motion.button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default MobileMenu;
