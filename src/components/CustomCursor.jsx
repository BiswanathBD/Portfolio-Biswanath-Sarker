import { useState, useEffect } from "react";
import { motion, useReducedMotion } from "framer-motion";

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    // Check screen size and hide cursor on small screens
    const checkScreenSize = () => {
      setIsSmallScreen(window.innerWidth < 768); // Hide on screens smaller than md (768px)
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  useEffect(() => {
    if (shouldReduceMotion || isSmallScreen) return;

    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseEnter = (e) => {
      // Check if element is disabled via data attribute
      if (e.target.dataset.cursorDisabled === "true") {
        return;
      }
      setIsHovering(true);
    };
    const handleMouseLeave = () => setIsHovering(false);

    // Hide cursor when mouse leaves the page
    const handleMouseLeaveBody = () => setIsVisible(false);
    const handleMouseEnterBody = () => setIsVisible(true);

    // Add event listeners for mouse movement
    window.addEventListener("mousemove", updateMousePosition);
    document.body.addEventListener("mouseleave", handleMouseLeaveBody);
    document.body.addEventListener("mouseenter", handleMouseEnterBody);

    // Function to add hover listeners to interactive elements
    const addHoverListeners = () => {
      const interactiveElements = document.querySelectorAll(
        'a, button, [role="button"], input, textarea, select',
      );
      interactiveElements.forEach((el) => {
        el.addEventListener("mouseenter", handleMouseEnter);
        el.addEventListener("mouseleave", handleMouseLeave);
      });
      return interactiveElements;
    };

    // Initial setup
    let interactiveElements = addHoverListeners();

    // Use MutationObserver to detect DOM changes and re-attach listeners
    const observer = new MutationObserver(() => {
      // Remove old listeners
      interactiveElements.forEach((el) => {
        el.removeEventListener("mouseenter", handleMouseEnter);
        el.removeEventListener("mouseleave", handleMouseLeave);
      });
      // Add new listeners
      interactiveElements = addHoverListeners();
    });

    // Observe the entire document for changes
    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
      document.body.removeEventListener("mouseleave", handleMouseLeaveBody);
      document.body.removeEventListener("mouseenter", handleMouseEnterBody);
      interactiveElements.forEach((el) => {
        el.removeEventListener("mouseenter", handleMouseEnter);
        el.removeEventListener("mouseleave", handleMouseLeave);
      });
      observer.disconnect();
    };
  }, [shouldReduceMotion, isSmallScreen]);

  // Hide cursor on small screens or when motion is reduced
  if (shouldReduceMotion || isSmallScreen) return null;

  return (
    <>
      {/* Main cursor dot */}
      <motion.div
        className="fixed top-0 left-0 w-4 h-4 bg-gradient-to-r from-primary to-secondary rounded-full pointer-events-none z-[9999] mix-blend-difference"
        animate={{
          x: mousePosition.x - 8,
          y: mousePosition.y - 8,
          scale: isHovering ? 1.5 : 1,
          opacity: isVisible ? 1 : 0,
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
          opacity: isVisible ? 1 : 0,
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
