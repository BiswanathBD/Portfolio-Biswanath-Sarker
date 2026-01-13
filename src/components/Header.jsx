import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Logo from "./Logo";
import Navigation from "./Navigation";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  const headerVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1,
        ease: "easeOut",
      },
    },
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      className={`w-full py-4 z-40 container mx-auto px-4 md:px-8 lg:px-16 xl:px-24 transition-all duration-300 fixed  ${
        isScrolled ? "top-0 left-0 right-0" : "top-0 left-0 right-0"
      }`}
      variants={headerVariants}
      initial="hidden"
      animate="visible"
    >
      <div
        className={`flex justify-between items-center transition-all duration-500 rounded-2xl border ${
          isScrolled
            ? "bg-background-dark/80 border-white/10 backdrop-blur-xl px-4 py-3 lg:mx-4"
            : "bg-background-dark/0 border-white/0"
        }`}
      >
        <Logo />
        <Navigation />
      </div>
    </motion.header>
  );
};

export default Header;
