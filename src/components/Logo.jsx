import { motion } from "framer-motion";

const Logo = () => {
  return (
    <motion.div
      className="flex items-center gap-4 group cursor-pointer relative"
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
    >
      {/* Logo Image with Glow Animation */}
      <motion.div
        className="relative w-12 h-12"
        whileHover={{ scale: 1.1, rotate: [0, -2, 2, 0] }}
        transition={{ duration: 0.5 }}
      >
        {/* Animated Glow Effect */}
        <motion.div
          className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary to-secondary opacity-60 blur-md"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Enhanced Hover Glow */}
        <motion.div
          className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary/50 to-secondary/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-lg -z-10"
          initial={false}
        />

        {/* Logo Image */}
        <motion.img
          src="https://i.ibb.co.com/cKyjq19R/4897896.jpg"
          alt="Biswanath Sarker"
          className="relative z-10 w-full h-full object-cover rounded-xl border border-white/20 group-hover:border-primary/50 transition-colors duration-300"
          whileHover={{ brightness: 1.1 }}
          transition={{ duration: 0.3 }}
        />

        {/* Corner Accent Dots */}
        <motion.div
          className="absolute -top-1 -right-1 w-2 h-2 bg-primary rounded-full z-20"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.7, 1, 0.7],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute -bottom-1 -left-1 w-1.5 h-1.5 bg-secondary rounded-full z-20"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.5, 0.9, 0.5],
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5,
          }}
        />
      </motion.div>

      {/* Name and Title with Enhanced Animations */}
      <div className="flex flex-col">
        {/* Name */}
        <motion.div
          className="flex items-center gap-1"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <motion.span
            className="font-display font-bold text-lg text-white relative"
            whileHover={{
              scale: 1.05,
              textShadow: "0 0 8px rgba(255, 255, 255, 0.5)",
            }}
            transition={{ duration: 0.2 }}
          >
            Biswanath
            {/* Subtle underline animation */}
            <motion.div
              className="absolute -bottom-0.5 left-0 h-0.5 bg-white/30 rounded-full"
              initial={{ width: 0 }}
              whileHover={{ width: "100%" }}
              transition={{ duration: 0.3 }}
            />
          </motion.span>

          <motion.span
            className="font-display font-bold text-lg bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent relative"
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            whileHover={{
              scale: 1.05,
              filter: "brightness(1.2)",
            }}
          >
            Sarker
            {/* Gradient underline animation */}
            <motion.div
              className="absolute -bottom-0.5 left-0 h-0.5 bg-gradient-to-r from-primary to-secondary rounded-full"
              initial={{ width: 0 }}
              whileHover={{ width: "100%" }}
              transition={{ duration: 0.3 }}
            />
          </motion.span>
        </motion.div>

        {/* Subtitle with Typewriter Effect */}
        <motion.div
          className="text-xs text-gray-400 font-medium relative overflow-hidden"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          whileHover={{ color: "#eb4898" }}
        >
          <motion.span
            initial={{ width: 0 }}
            animate={{ width: "auto" }}
            transition={{ duration: 1.5, delay: 0.8, ease: "easeOut" }}
            className="inline-block overflow-hidden whitespace-nowrap"
          >
            MERN Stack Developer
          </motion.span>

          {/* Blinking cursor effect */}
          <motion.span
            className="inline-block w-[2px] h-4 bg-primary ml-1"
            animate={{ opacity: [1, 0, 1] }}
            transition={{ duration: 1, repeat: Infinity }}
          />
        </motion.div>
      </div>

      {/* Floating Particles */}
      <motion.div
        className="absolute -top-2 right-4 w-1 h-1 bg-primary/60 rounded-full"
        animate={{
          y: [0, -10, 0],
          opacity: [0.6, 1, 0.6],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute top-8 right-2 w-0.5 h-0.5 bg-secondary/40 rounded-full"
        animate={{
          y: [0, -8, 0],
          opacity: [0.4, 0.8, 0.4],
          scale: [1, 1.5, 1],
        }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />

      {/* Overall Hover Glow */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-secondary/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"
        initial={false}
      />
    </motion.div>
  );
};

export default Logo;
