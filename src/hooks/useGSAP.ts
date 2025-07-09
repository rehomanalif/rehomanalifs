import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

export const useGSAP = () => {
  const ctx = useRef<gsap.Context>();

  useEffect(() => {
    ctx.current = gsap.context(() => {});
    return () => ctx.current?.revert();
  }, []);

  return ctx.current;
};

export const useGSAPTimeline = (dependencies: any[] = []) => {
  const tl = useRef<gsap.core.Timeline>();
  
  useEffect(() => {
    tl.current = gsap.timeline();
    return () => {
      if (tl.current) {
        tl.current.kill();
      }
    };
  }, dependencies);

  return tl.current;
};

// Animation presets
export const animations = {
  fadeInUp: (element: string | Element, delay = 0) => {
    return gsap.fromTo(element, 
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, delay, ease: "power2.out" }
    );
  },
  
  scaleIn: (element: string | Element, delay = 0) => {
    return gsap.fromTo(element,
      { scale: 0.8, opacity: 0 },
      { scale: 1, opacity: 1, duration: 0.6, delay, ease: "back.out(1.7)" }
    );
  },
  
  slideInRight: (element: string | Element, delay = 0) => {
    return gsap.fromTo(element,
      { x: 100, opacity: 0 },
      { x: 0, opacity: 1, duration: 0.8, delay, ease: "power2.out" }
    );
  },
  
  floatingAnimation: (element: string | Element) => {
    return gsap.to(element, {
      y: -15,
      duration: 2,
      ease: "power1.inOut",
      yoyo: true,
      repeat: -1
    });
  },
  
  magneticHover: (element: string | Element) => {
    const el = typeof element === 'string' ? document.querySelector(element) : element;
    if (!el) return;
    
    const handleMouseEnter = () => {
      gsap.to(el, { scale: 1.05, duration: 0.3, ease: "power2.out" });
    };
    
    const handleMouseLeave = () => {
      gsap.to(el, { scale: 1, duration: 0.3, ease: "power2.out" });
    };
    
    el.addEventListener('mouseenter', handleMouseEnter);
    el.addEventListener('mouseleave', handleMouseLeave);
    
    return () => {
      el.removeEventListener('mouseenter', handleMouseEnter);
      el.removeEventListener('mouseleave', handleMouseLeave);
    };
  },
  
  staggerIn: (elements: string | Element[], delay = 0.1) => {
    return gsap.fromTo(elements,
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6, stagger: delay, ease: "power2.out" }
    );
  },
  
  textReveal: (element: string | Element) => {
    return gsap.fromTo(element,
      { clipPath: "inset(0 100% 0 0)" },
      { clipPath: "inset(0 0% 0 0)", duration: 1.2, ease: "power2.out" }
    );
  }
};