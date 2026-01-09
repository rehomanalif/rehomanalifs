import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const AnimatedBackground = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const blobs = containerRef.current.querySelectorAll('.blob');
    
    blobs.forEach((blob, index) => {
      gsap.to(blob, {
        x: () => Math.random() * 400 - 200,
        y: () => Math.random() * 400 - 200,
        duration: 20 + index * 5,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
      });
      
      gsap.to(blob, {
        scale: () => 0.8 + Math.random() * 0.4,
        duration: 15 + index * 3,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
      });
    });

    return () => {
      gsap.killTweensOf(blobs);
    };
  }, []);

  return (
    <div ref={containerRef} className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 grid-pattern opacity-30" />
      
      {/* Animated gradient blobs */}
      <div 
        className="blob absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full opacity-20"
        style={{
          background: 'radial-gradient(circle, hsl(186 100% 50% / 0.4) 0%, transparent 70%)',
          filter: 'blur(80px)',
        }}
      />
      <div 
        className="blob absolute top-1/2 right-1/4 w-[500px] h-[500px] rounded-full opacity-20"
        style={{
          background: 'radial-gradient(circle, hsl(262 83% 58% / 0.4) 0%, transparent 70%)',
          filter: 'blur(80px)',
        }}
      />
      <div 
        className="blob absolute bottom-1/4 left-1/3 w-[400px] h-[400px] rounded-full opacity-15"
        style={{
          background: 'radial-gradient(circle, hsl(330 100% 50% / 0.3) 0%, transparent 70%)',
          filter: 'blur(80px)',
        }}
      />
      
      {/* Subtle noise texture */}
      <div 
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />
    </div>
  );
};

export default AnimatedBackground;
