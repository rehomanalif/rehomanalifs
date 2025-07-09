import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface ScrollAnimationsProps {
  children: React.ReactNode;
  className?: string;
  animation?: 'fadeUp' | 'fadeLeft' | 'fadeRight' | 'scale' | 'stagger';
  delay?: number;
  trigger?: string;
}

const ScrollAnimations: React.FC<ScrollAnimationsProps> = ({
  children,
  className = '',
  animation = 'fadeUp',
  delay = 0,
  trigger
}) => {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!elementRef.current) return;

    const element = elementRef.current;
    const triggerElement = trigger ? document.querySelector(trigger) : element;

    let animationConfig = {};

    switch (animation) {
      case 'fadeUp':
        gsap.fromTo(element, 
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            delay,
            ease: "power2.out",
            scrollTrigger: {
              trigger: triggerElement,
              start: "top 80%",
              toggleActions: "play none none reverse"
            }
          }
        );
        break;
        
      case 'fadeLeft':
        gsap.fromTo(element,
          { x: -50, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 0.8,
            delay,
            ease: "power2.out",
            scrollTrigger: {
              trigger: triggerElement,
              start: "top 80%",
              toggleActions: "play none none reverse"
            }
          }
        );
        break;
        
      case 'fadeRight':
        gsap.fromTo(element,
          { x: 50, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 0.8,
            delay,
            ease: "power2.out",
            scrollTrigger: {
              trigger: triggerElement,
              start: "top 80%",
              toggleActions: "play none none reverse"
            }
          }
        );
        break;
        
      case 'scale':
        gsap.fromTo(element,
          { scale: 0.8, opacity: 0 },
          {
            scale: 1,
            opacity: 1,
            duration: 0.8,
            delay,
            ease: "back.out(1.7)",
            scrollTrigger: {
              trigger: triggerElement,
              start: "top 80%",
              toggleActions: "play none none reverse"
            }
          }
        );
        break;
        
      case 'stagger':
        gsap.fromTo(element.children,
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.6,
            stagger: 0.1,
            delay,
            ease: "power2.out",
            scrollTrigger: {
              trigger: triggerElement,
              start: "top 80%",
              toggleActions: "play none none reverse"
            }
          }
        );
        break;
    }

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [animation, delay, trigger]);

  return (
    <div ref={elementRef} className={className}>
      {children}
    </div>
  );
};

export default ScrollAnimations;