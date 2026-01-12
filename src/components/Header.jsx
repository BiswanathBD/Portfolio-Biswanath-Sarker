import { motion } from "framer-motion";
import Logo from "./Logo";
import Navigation from "./Navigation";

const Header = () => {
  const headerVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.header
      className="w-full py-6 relative z-40"
      variants={headerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="container mx-auto px-4 md:px-8 lg:px-16 xl:px-24 flex justify-between items-center">
        <Logo />
        <Navigation />
      </div>
    </motion.header>
  );
};

export default Header;
