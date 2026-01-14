import { motion } from "framer-motion";

const WelcomeLoader = () => {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-background-dark"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut", delay: 0.5 }}
    >
      {/* Welcome Text with Light Animation */}
      <motion.div
        className="relative"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{
          opacity: { duration: 0.6, ease: "easeInOut" },
          exit: { duration: 0.4, ease: "easeIn" },
        }}
      >
        {/* Background Text (Dark) */}
        <h1 className="text-4xl sm:text-6xl md:text-8xl font-light text-white/5 font-display select-none">
          Welcome
        </h1>

        {/* Animated Light Reveal Text */}
        <motion.div
          className="absolute inset-0 overflow-hidden"
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{
            duration: 1.8,
            ease: "easeInOut",
            delay: 0.2,
          }}
        >
          <h1 className="text-4xl sm:text-6xl md:text-8xl font-light bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent font-display select-none">
            Welcome
          </h1>
        </motion.div>

        {/* Subtle Glow Effect */}
        <motion.div
          className="absolute inset-0 -z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 0.3, 0] }}
          transition={{
            duration: 1.8,
            ease: "easeInOut",
            delay: 0.6,
          }}
        >
          <div className="w-full h-full bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10 blur-3xl" />
        </motion.div>
      </motion.div>

      {/* Simple Loading Indicator */}
      <motion.div
        className="absolute bottom-20 flex items-center justify-center space-x-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{
          opacity: { duration: 0.5, delay: 0.5 },
          exit: { duration: 0.3, ease: "easeIn" },
        }}
      >
        {[0, 1, 2].map((index) => (
          <motion.div
            key={index}
            className="w-2 h-2 bg-primary/60 rounded-full"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.4, 1, 0.4],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              delay: index * 0.2,
              ease: "easeInOut",
            }}
          />
        ))}
      </motion.div>
    </motion.div>
  );
};

export default WelcomeLoader;
