import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { motion } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';

interface HeroSectionProps {
  scrollToContact: () => void;
}

const HeroSection = ({ scrollToContact }: HeroSectionProps) => {
  const heroRef = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.5 });
      if (headlineRef.current) {
        const words = headlineRef.current.querySelectorAll('.word');
        tl.fromTo(words, { y: 100, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: "power3.out" });
      }
    }, heroRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={heroRef} id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative z-10">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-6">
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-sm text-muted-foreground">Available for new projects</span>
            </motion.div>

            <h1 ref={headlineRef} className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light leading-[1.1] mb-6">
              <span className="word inline-block text-foreground">Building</span>{' '}
              <span className="word inline-block text-foreground">the</span>{' '}
              <span className="word inline-block text-gradient-cyber">Future</span>{' '}
              <span className="word inline-block text-foreground">of</span>{' '}
              <span className="word inline-block text-foreground">Digital</span>{' '}
              <span className="word inline-block text-gradient-pink">Intelligence.</span>
            </h1>

            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }} className="text-lg sm:text-xl text-muted-foreground max-w-xl mb-8 leading-relaxed">
              Expert Digital Marketing & AI Automation Solutions. Transform your business with cutting-edge strategies.
            </motion.p>

            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }} className="flex flex-wrap gap-4">
              <button onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })} className="btn-cyber group flex items-center gap-2">
                <span>View Work</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <button onClick={scrollToContact} className="btn-cyber-outline">Contact Me</button>
            </motion.div>

            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.4 }} className="flex flex-wrap gap-8 mt-12 pt-8 border-t border-white/10">
              {[{ value: '340%', label: 'Avg ROAS' }, { value: '100+', label: 'Happy Clients' }, { value: '5+', label: 'Years Experience' }].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-2xl sm:text-3xl font-display font-bold text-gradient-cyber">{stat.value}</div>
                  <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          <div className="relative hidden lg:flex items-center justify-center">
            <div className="relative w-96 h-96">
              <div className="absolute inset-0 rounded-full border border-primary/20 animate-orb-rotate">
                <div className="absolute top-0 left-1/2 w-3 h-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary neon-glow-cyan" />
              </div>
              <div className="absolute inset-8 rounded-full border border-secondary/20 animate-orb-rotate" style={{ animationDirection: 'reverse', animationDuration: '15s' }}>
                <div className="absolute bottom-0 left-1/2 w-2 h-2 -translate-x-1/2 translate-y-1/2 rounded-full bg-secondary neon-glow-purple" />
              </div>
              <div className="absolute inset-16 rounded-full gradient-cyber-pink opacity-20 blur-xl animate-glow-pulse" />
              <div className="absolute inset-20 rounded-full glass-card flex items-center justify-center">
                <div className="w-32 h-32 rounded-full gradient-cyber opacity-80 blur-md" />
              </div>
              <motion.div animate={{ y: [-10, 10, -10] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} className="absolute top-10 right-10 w-12 h-12 rounded-xl glass-card flex items-center justify-center neon-glow-cyan">
                <Play className="w-5 h-5 text-primary" />
              </motion.div>
              <motion.div animate={{ y: [10, -10, 10] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }} className="absolute bottom-10 left-10 w-16 h-16 rounded-xl glass-card flex items-center justify-center neon-glow-purple">
                <div className="text-2xl font-display font-bold text-secondary">AI</div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 }} className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 1.5, repeat: Infinity }} className="w-6 h-10 rounded-full border border-white/20 flex items-start justify-center p-2">
          <div className="w-1 h-2 rounded-full bg-primary" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
