import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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

  const navVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        delay: 0.3,
        ease: "easeOut",
      },
    },
  };

  const mobileMenuVariants = {
    hidden: {
      opacity: 0,
      y: -20,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
    exit: {
      opacity: 0,
      y: -20,
      scale: 0.95,
      transition: {
        duration: 0.2,
        ease: "easeIn",
      },
    },
  };

  const menuItemVariants = {
    hidden: { x: -20, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
  };

  const navItems = [
    { name: "Home", href: "#", active: true, icon: "fas fa-home" },
    { name: "About", href: "#about", active: false, icon: "fas fa-user" },
    {
      name: "Education",
      href: "#education",
      active: false,
      icon: "fas fa-graduation-cap",
    },
    { name: "Skills", href: "#skills", active: false, icon: "fas fa-code" },
    {
      name: "Projects",
      href: "#projects",
      active: false,
      icon: "fas fa-folder-open",
    },
    {
      name: "Contact",
      href: "#contact",
      active: false,
      icon: "fas fa-envelope",
    },
  ];

  return (
    <motion.header
      className="w-full py-6 relative z-40"
      variants={headerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="container mx-auto px-4 md:px-8 lg:px-16 xl:px-24 flex justify-between items-center">
        <motion.div
          className="font-display font-bold text-2xl tracking-wide group cursor-pointer relative"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        >
          <motion.span
            className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300"
            whileHover={{ rotate: [0, -10, 10, 0] }}
            transition={{ duration: 0.5 }}
          >
            &lt;
          </motion.span>
          <motion.span
            className="bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent mx-1 text-3xl font-extrabold tracking-tight"
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            Biswanath
          </motion.span>
          <motion.span
            className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300"
            whileHover={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 0.5 }}
          >
            /&gt;
          </motion.span>
          <motion.div
            className="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-primary to-secondary"
            initial={{ width: 0 }}
            whileHover={{ width: "100%" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          />
        </motion.div>

        {/* Desktop Navigation */}
        <motion.nav
          className="hidden md:flex space-x-8 font-medium text-sm bg-white/5 backdrop-blur-md border border-white/10 rounded-full px-8 py-3 shadow-lg"
          variants={navVariants}
        >
          {navItems.map((item, index) => (
            <motion.a
              key={item.name}
              className={`flex items-center gap-2 transition-colors ${
                item.active
                  ? "text-primary hover:text-secondary"
                  : "text-gray-300 hover:text-primary"
              }`}
              href={item.href}
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.3,
                delay: index * 0.1,
                ease: "easeOut",
              }}
            >
              <motion.i
                className={`${item.icon} text-xs`}
                whileHover={{ rotate: [0, -10, 10, 0] }}
                transition={{ duration: 0.5 }}
              />
              <span>{item.name}</span>
            </motion.a>
          ))}
        </motion.nav>

        {/* Mobile menu button */}
        <motion.button
          className="md:hidden text-white bg-white/5 backdrop-blur-md border border-white/10 rounded-full p-2 flex justify-center items-center shadow-lg"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          animate={{ rotate: isMenuOpen ? 90 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <motion.span
            className="material-icons"
            animate={{ rotate: isMenuOpen ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            {isMenuOpen ? "close" : "menu"}
          </motion.span>
        </motion.button>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              className="absolute top-full left-0 right-0 mt-4 mx-6 md:hidden"
              variants={mobileMenuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <motion.nav className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 shadow-2xl">
                <div className="flex flex-col space-y-4 font-medium text-sm">
                  {navItems.map((item, index) => (
                    <motion.a
                      key={item.name}
                      className={`flex items-center gap-3 transition-colors py-2 ${
                        item.active
                          ? "text-primary hover:text-secondary"
                          : "text-gray-300 hover:text-primary"
                      }`}
                      href={item.href}
                      onClick={() => setIsMenuOpen(false)}
                      variants={menuItemVariants}
                      initial="hidden"
                      animate="visible"
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ x: 10, scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <motion.div
                        className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center"
                        whileHover={{
                          backgroundColor: "rgba(249, 115, 22, 0.1)",
                          borderColor: "rgba(249, 115, 22, 0.3)",
                        }}
                        transition={{ duration: 0.3 }}
                      >
                        <i className={`${item.icon} text-xs`} />
                      </motion.div>
                      <span>{item.name}</span>
                    </motion.a>
                  ))}
                </div>
              </motion.nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
};

export default Header;
