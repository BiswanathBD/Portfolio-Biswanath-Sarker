import { useEffect, useRef } from "react";
import Lenis from "lenis";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { gsap } from "gsap";

gsap.registerPlugin(ScrollTrigger);

const SmoothScroll = () => {
  const lenisRef = useRef(null);

  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.08, // ✅ better than duration
      smooth: true,
      smoothTouch: false,
    });

    lenisRef.current = lenis;

    // 🔥 GSAP + Lenis sync
    lenis.on("scroll", ScrollTrigger.update);

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // Anchor smooth scroll
    const handleSmoothScroll = (e) => {
      const target = e.target.closest('a[href^="#"]');
      if (!target) return;

      e.preventDefault();
      const id = target.getAttribute("href").replace("#", "");
      const el = id ? document.getElementById(id) : null;

      lenis.scrollTo(el || 0, {
        offset: -80,
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      });
    };

    document.addEventListener("click", handleSmoothScroll);

    return () => {
      document.removeEventListener("click", handleSmoothScroll);
      ScrollTrigger.getAll().forEach((t) => t.kill());
      lenis.destroy();
    };
  }, []);

  return null;
};

export default SmoothScroll;
