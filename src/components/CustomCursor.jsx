import { useState, useEffect } from "react";
import { motion, useReducedMotion } from "framer-motion";

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    if (shouldReduceMotion) return;

    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);

    // Add event listeners for mouse movement
    window.addEventListener("mousemove", updateMousePosition);

    // Add hover effects for interactive elements
    const interactiveElements = document.querySelectorAll(
      'a, button, [role="button"]'
    );
    interactiveElements.forEach((el) => {
      el.addEventListener("mouseenter", handleMouseEnter);
      el.addEventListener("mouseleave", handleMouseLeave);
    });

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
      interactiveElements.forEach((el) => {
        el.removeEventListener("mouseenter", handleMouseEnter);
        el.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, [shouldReduceMotion]);

  if (shouldReduceMotion) return null;

  return (
    <>
      {/* Main cursor dot */}
      <motion.div
        className="fixed top-0 left-0 w-4 h-4 bg-gradient-to-r from-primary to-secondary rounded-full pointer-events-none z-[9999] mix-blend-difference"
        animate={{
          x: mousePosition.x - 8,
          y: mousePosition.y - 8,
          scale: isHovering ? 1.5 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 800,
          damping: 35,
          mass: 0.3,
        }}
      />

      {/* Glowing background circle */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 border border-primary/30 rounded-full pointer-events-none z-[9998]"
        animate={{
          x: mousePosition.x - 16,
          y: mousePosition.y - 16,
          scale: isHovering ? 2 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 200,
          damping: 20,
          mass: 0.1,
        }}
        style={{
          background:
            "radial-gradient(circle, rgba(168, 85, 247, 0.1) 0%, transparent 70%)",
        }}
      />
    </>
  );
};

export default CustomCursor;
