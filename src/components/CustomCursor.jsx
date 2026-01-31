import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const CustomCursor = () => {
  const cursorDotRef = useRef(null);
  const cursorCircleRef = useRef(null);

  useEffect(() => {
    if (window.innerWidth < 768) return;

    const cursorDot = cursorDotRef.current;
    const cursorCircle = cursorCircleRef.current;

    const moveCursor = (e) => {
      gsap.to(cursorDot, {
        x: e.clientX - 8,
        y: e.clientY - 8,
        duration: 0.15,
        ease: "power2.out",
      });

      gsap.to(cursorCircle, {
        x: e.clientX - 16,
        y: e.clientY - 16,
        duration: 0.3,
        ease: "power2.out",
      });
    };

    const handleMouseEnter = (e) => {
      if (e.target.dataset.cursorDisabled === "true") return;

      gsap.to(cursorDot, { scale: 1.5, duration: 0.3, ease: "back.out(1.7)" });
      gsap.to(cursorCircle, { scale: 2, duration: 0.3, ease: "back.out(1.7)" });
    };

    const handleMouseLeave = () => {
      gsap.to([cursorDot, cursorCircle], {
        scale: 1,
        duration: 0.3,
        ease: "power2.out",
      });
    };

    const handleBodyLeave = () => {
      gsap.to([cursorDot, cursorCircle], { opacity: 0, duration: 0.2 });
    };

    const handleBodyEnter = () => {
      gsap.to([cursorDot, cursorCircle], { opacity: 1, duration: 0.2 });
    };

    window.addEventListener("mousemove", moveCursor);
    document.body.addEventListener("mouseleave", handleBodyLeave);
    document.body.addEventListener("mouseenter", handleBodyEnter);

    const addHoverListeners = () => {
      const elements = document.querySelectorAll(
        'a, button, [role="button"], input, textarea, select',
      );
      elements.forEach((el) => {
        el.addEventListener("mouseenter", handleMouseEnter);
        el.addEventListener("mouseleave", handleMouseLeave);
      });
      return elements;
    };

    let elements = addHoverListeners();

    const observer = new MutationObserver(() => {
      elements.forEach((el) => {
        el.removeEventListener("mouseenter", handleMouseEnter);
        el.removeEventListener("mouseleave", handleMouseLeave);
      });
      elements = addHoverListeners();
    });

    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      document.body.removeEventListener("mouseleave", handleBodyLeave);
      document.body.removeEventListener("mouseenter", handleBodyEnter);
      elements.forEach((el) => {
        el.removeEventListener("mouseenter", handleMouseEnter);
        el.removeEventListener("mouseleave", handleMouseLeave);
      });
      observer.disconnect();
    };
  }, []);

  if (window.innerWidth < 768) return null;

  return (
    <>
      <div
        ref={cursorDotRef}
        className="fixed top-0 left-0 w-4 h-4 bg-gradient-to-r from-primary to-secondary rounded-full pointer-events-none z-[9999] mix-blend-difference"
        style={{ opacity: 0 }}
      />
      <div
        ref={cursorCircleRef}
        className="fixed top-0 left-0 w-8 h-8 border border-primary/30 rounded-full pointer-events-none z-[9998]"
        style={{
          opacity: 0,
          background:
            "radial-gradient(circle, rgba(168, 85, 247, 0.1) 0%, transparent 70%)",
        }}
      />
    </>
  );
};

export default CustomCursor;
