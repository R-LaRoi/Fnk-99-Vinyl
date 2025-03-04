import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface AnimationConfig {
  from?: gsap.TweenVars;
  to?: gsap.TweenVars;
  scrollTrigger?: ScrollTrigger;
}

export const useScrollReveal = (selector = '.reveal', animationConfig: AnimationConfig = {}) => {
  useEffect(() => {
    const elements = document.querySelectorAll(selector);

    elements.forEach((element) => {
      gsap.fromTo(
        element,
        { opacity: 0, y: 50, ...animationConfig.from },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          scrollTrigger: {
            trigger: element,
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse',
            ...animationConfig.scrollTrigger,
          },
          ...animationConfig.to,
        }
      );
    });
  }, [selector, JSON.stringify(animationConfig)]);
};