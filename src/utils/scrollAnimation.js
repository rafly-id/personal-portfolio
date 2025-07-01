import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger);

export function useScrollAnimation({ ref, itemSelector = '.animate-item', gsapVars = {}, varsFn, triggerOptions = {} }) {
  useGSAP(() => {
    if (!ref.current) return;
    const items = ref.current.querySelectorAll(itemSelector);
    const animationVars = varsFn
      ? varsFn(items)
      : gsapVars;

    gsap.from(items, {
      // Default animation properties
      opacity: 0,
      y: 25,
      duration: 1,
      stagger: 0.2,
      ease: 'power2.inOut',
      // Merge ScrollTrigger options
      scrollTrigger: {
        scroller: '#wrapper-smooth',
        trigger: ref.current,
        start: 'top center',
        end: 'top center',
        toggleActions: 'play none reverse none',
        ...triggerOptions,
      },
      // Apply dynamic or static props
      ...animationVars,
    });
  }, []);
}