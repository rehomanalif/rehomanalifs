import { motion, AnimatePresence } from 'framer-motion';
import { TrendingUp, MessageSquare, Zap, Bot, Code, ArrowRight } from 'lucide-react';

interface MegaMenuProps {
  isOpen: boolean;
}

const services = [
  {
    icon: TrendingUp,
    title: 'Digital Marketing',
    description: 'ROI-driven ad campaigns',
    href: '#services',
  },
  {
    icon: MessageSquare,
    title: 'Social Media Marketing',
    description: 'Curating your digital voice',
    href: '#services',
  },
  {
    icon: Zap,
    title: 'AI Automation',
    description: 'Replacing manual tasks with intelligent workflows',
    href: '#services',
  },
  {
    icon: Bot,
    title: 'AI Agents',
    description: 'Autonomous agents that work while you sleep',
    href: '#services',
  },
  {
    icon: Code,
    title: 'Application Development',
    description: 'High-performance web and mobile apps',
    href: '#services',
  },
];

const MegaMenu = ({ isOpen }: MegaMenuProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2, ease: 'easeOut' }}
          className="absolute top-full left-0 right-0 mt-2 glass-navbar rounded-2xl overflow-hidden"
        >
          <div className="container mx-auto px-6 py-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Left side - Tagline */}
              <div className="lg:col-span-1 flex flex-col justify-center">
                <h3 className="text-2xl font-display font-bold text-foreground mb-4">
                  Empowering Growth with{' '}
                  <span className="text-gradient-cyber">AI & Digital Strategy</span>
                </h3>
                <p className="text-muted-foreground text-sm">
                  Transform your business with cutting-edge digital solutions and intelligent automation.
                </p>
              </div>
              
              {/* Right side - Service Links */}
              <div className="lg:col-span-2">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {services.map((service, index) => (
                    <motion.a
                      key={service.title}
                      href={service.href}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                      className="group flex items-center gap-4 p-4 rounded-xl hover:bg-white/5 transition-all duration-300"
                    >
                      <div className="w-12 h-12 rounded-xl glass-card flex items-center justify-center group-hover:neon-glow-cyan transition-all duration-300">
                        <service.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <motion.div
                            initial={{ width: 0, opacity: 0 }}
                            whileHover={{ width: 16, opacity: 1 }}
                            className="overflow-hidden"
                          >
                            <ArrowRight className="w-4 h-4 text-primary" />
                          </motion.div>
                          <h4 className="font-display font-semibold text-foreground group-hover:text-primary transition-colors">
                            {service.title}
                          </h4>
                        </div>
                        <p className="text-sm text-muted-foreground mt-0.5">
                          {service.description}
                        </p>
                      </div>
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MegaMenu;
