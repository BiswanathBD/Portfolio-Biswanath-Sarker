import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

export const useGSAP = (animationFunction, dependencies = []) => {
  const ref = useRef();
  const animationRef = useRef();

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    // Store the animation context
    const ctx = gsap.context(() => {
      if (animationFunction) {
        animationRef.current = animationFunction(element);
      }
    }, element);

    return () => {
      // Cleanup
      ctx.revert();
    };
  }, dependencies);

  return ref;
};

export const useGSAPTimeline = (timelineFunction, dependencies = []) => {
  const ref = useRef();
  const timelineRef = useRef();

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const ctx = gsap.context(() => {
      if (timelineFunction) {
        timelineRef.current = timelineFunction(element);
      }
    }, element);

    return () => {
      ctx.revert();
    };
  }, dependencies);

  return { ref, timeline: timelineRef.current };
};
