import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isNavVisible, setIsNavVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // Always show the button except when at the very top
      setIsVisible(window.pageYOffset > 100);
    };

    const checkNavVisibility = () => {
      // Check if we're at the top where navigation is visible
      setIsNavVisible(window.pageYOffset < 50);
    };

    const handleScroll = () => {
      toggleVisibility();
      checkNavVisibility();
    };

    window.addEventListener("scroll", handleScroll);

    // Initial check
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <motion.button
      onClick={scrollToTop}
      className={`fixed bottom-8 right-8 w-14 h-14 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center text-white shadow-lg transition-all duration-300 z-40 ${
        isNavVisible ? "opacity-0 pointer-events-none" : ""
      }`}
      title="Scroll to Top"
      initial={{ opacity: 0, scale: 0 }}
      animate={{
        opacity: isVisible && !isNavVisible ? 1 : 0,
        scale: isVisible && !isNavVisible ? 1 : 0,
      }}
      whileHover={{
        scale: 1.1,
        y: -3,
      }}
      whileTap={{ scale: 0.9 }}
      transition={{ duration: 0.3 }}
    >
      {/* Background Glow */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-full blur-md opacity-50"
        animate={{
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Arrow Icon */}
      <motion.i
        className="fas fa-arrow-up text-lg relative z-10"
        animate={{
          y: [0, -3, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Hover Ring */}
      <motion.div
        className="absolute inset-0 border-2 border-white/20 rounded-full"
        whileHover={{
          scale: 1.2,
          borderColor: "rgba(255, 255, 255, 0.4)",
        }}
        transition={{ duration: 0.2 }}
      />
    </motion.button>
  );
};

export default ScrollToTop;
