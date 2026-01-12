import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// Animation configurations
export const animationConfig = {
  duration: 0.8,
  ease: "power2.out",
  stagger: 0.1,
};

// Fade in from bottom animation
export const fadeInUp = (element, options = {}) => {
  const config = { ...animationConfig, ...options };

  gsap.fromTo(
    element,
    {
      y: 50,
      opacity: 0,
    },
    {
      y: 0,
      opacity: 1,
      duration: config.duration,
      ease: config.ease,
      scrollTrigger: {
        trigger: element,
        start: "top 85%",
        end: "bottom 15%",
        toggleActions: "play none none reverse",
        ...config.scrollTrigger,
      },
    }
  );
};

// Fade in from left animation
export const fadeInLeft = (element, options = {}) => {
  const config = { ...animationConfig, ...options };

  gsap.fromTo(
    element,
    {
      x: -50,
      opacity: 0,
    },
    {
      x: 0,
      opacity: 1,
      duration: config.duration,
      ease: config.ease,
      scrollTrigger: {
        trigger: element,
        start: "top 85%",
        end: "bottom 15%",
        toggleActions: "play none none reverse",
        ...config.scrollTrigger,
      },
    }
  );
};

// Fade in from right animation
export const fadeInRight = (element, options = {}) => {
  const config = { ...animationConfig, ...options };

  gsap.fromTo(
    element,
    {
      x: 50,
      opacity: 0,
    },
    {
      x: 0,
      opacity: 1,
      duration: config.duration,
      ease: config.ease,
      scrollTrigger: {
        trigger: element,
        start: "top 85%",
        end: "bottom 15%",
        toggleActions: "play none none reverse",
        ...config.scrollTrigger,
      },
    }
  );
};

// Scale in animation
export const scaleIn = (element, options = {}) => {
  const config = { ...animationConfig, ...options };

  gsap.fromTo(
    element,
    {
      scale: 0.8,
      opacity: 0,
    },
    {
      scale: 1,
      opacity: 1,
      duration: config.duration,
      ease: config.ease,
      scrollTrigger: {
        trigger: element,
        start: "top 85%",
        end: "bottom 15%",
        toggleActions: "play none none reverse",
        ...config.scrollTrigger,
      },
    }
  );
};

// Stagger animation for multiple elements
export const staggerAnimation = (elements, options = {}) => {
  const config = { ...animationConfig, ...options };

  gsap.fromTo(
    elements,
    {
      y: 30,
      opacity: 0,
    },
    {
      y: 0,
      opacity: 1,
      duration: config.duration,
      ease: config.ease,
      stagger: config.stagger,
      scrollTrigger: {
        trigger: elements[0],
        start: "top 85%",
        end: "bottom 15%",
        toggleActions: "play none none reverse",
        ...config.scrollTrigger,
      },
    }
  );
};

// Progress bar animation
export const progressBar = (element, width, options = {}) => {
  const config = { ...animationConfig, ...options };

  gsap.fromTo(
    element,
    {
      width: "0%",
    },
    {
      width: `${width}%`,
      duration: config.duration * 1.5,
      ease: config.ease,
      scrollTrigger: {
        trigger: element,
        start: "top 85%",
        end: "bottom 15%",
        toggleActions: "play none none reverse",
        ...config.scrollTrigger,
      },
    }
  );
};

// Counter animation
export const counterAnimation = (element, endValue, options = {}) => {
  const config = { ...animationConfig, ...options };

  gsap.fromTo(
    element,
    {
      textContent: 0,
    },
    {
      textContent: endValue,
      duration: config.duration * 2,
      ease: config.ease,
      snap: { textContent: 1 },
      scrollTrigger: {
        trigger: element,
        start: "top 85%",
        end: "bottom 15%",
        toggleActions: "play none none reverse",
        ...config.scrollTrigger,
      },
    }
  );
};

// Parallax effect
export const parallax = (element, yPercent = -50, options = {}) => {
  gsap.to(element, {
    yPercent: yPercent,
    ease: "none",
    scrollTrigger: {
      trigger: element,
      start: "top bottom",
      end: "bottom top",
      scrub: true,
      ...options.scrollTrigger,
    },
  });
};

// Reveal text animation
export const revealText = (element, options = {}) => {
  const config = { ...animationConfig, ...options };

  gsap.fromTo(
    element,
    {
      clipPath: "inset(0 100% 0 0)",
    },
    {
      clipPath: "inset(0 0% 0 0)",
      duration: config.duration,
      ease: config.ease,
      scrollTrigger: {
        trigger: element,
        start: "top 85%",
        end: "bottom 15%",
        toggleActions: "play none none reverse",
        ...config.scrollTrigger,
      },
    }
  );
};

// Cleanup function
export const cleanupScrollTriggers = () => {
  ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
};

// Refresh ScrollTrigger (useful after dynamic content changes)
export const refreshScrollTrigger = () => {
  ScrollTrigger.refresh();
};
