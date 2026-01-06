import { motion } from "framer-motion";
import ProfileShowcase from "./ProfileShowcase";

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.1,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  return (
    <motion.section
      className="relative pt-12 pb-24 md:pt-20 md:pb-32 container mx-auto px-4 md:px-8 lg:px-16 xl:px-24"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div
        className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[100px] pointer-events-none -z-10 opacity-40"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.4, 0.5, 0.4],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          repeatType: "reverse",
        }}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <motion.div
          className="space-y-6 text-center md:text-left order-2 md:order-1"
          variants={itemVariants}
        >
          <motion.h1
            className="font-display text-2xl md:text-4xl tracking-tight text-primary font-bold"
            variants={itemVariants}
          >
            <motion.span
              className="inline-block text-4xl md:text-5xl"
              style={{ transformOrigin: "70% 70%" }}
              animate={{
                rotate: [0, 20, -10, 20, -5, 15, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatDelay: 1.5,
                ease: "easeInOut",
              }}
            >👋🏼
            </motion.span>{" "}
            Hi, I'm <br />
            <span className="text-5xl md:text-7xl text-white">Biswanath</span>
          </motion.h1>

          <motion.h2
            className="font-display font-semibold text-3xl md:text-4xl"
            variants={itemVariants}
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
              MERN Stack Web Developer
            </span>
          </motion.h2>

          <motion.p
            className="text-gray-400 text-lg max-w-lg mx-auto md:mx-0 leading-relaxed"
            variants={itemVariants}
          >
            Crafting modern, responsive, and user-friendly websites with passion
            and precision.
          </motion.p>

          <motion.div
            className="flex flex-col md:flex-row items-center gap-6 mt-8 justify-center md:justify-start"
            variants={itemVariants}
          >
            <motion.a
              className="group relative px-8 py-3 rounded-full bg-gradient-to-r from-primary to-secondary text-white font-medium shadow-lg transition-all hover:-translate-y-0.5 overflow-hidden"
              href="#"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10 flex items-center gap-2">
                Download Resume
                <span className="material-icons text-sm">download</span>
              </span>
              <div className="absolute inset-0 bg-white/20 group-hover:translate-x-full transition-transform duration-500 ease-in-out -skew-x-12 -translate-x-full"></div>
            </motion.a>

            <motion.div className="flex gap-4" variants={itemVariants}>
              {[
                {
                  href: "https://github.com/BiswanathBD",
                  icon: "fab fa-github",
                },
                {
                  href: "https://www.linkedin.com/in/biswanath-sarker-bd/",
                  icon: "fab fa-linkedin-in",
                },
                {
                  href: "mailto:biswanath.sarker.bd@gmail.com",
                  icon: "material-icons",
                  text: "email",
                },
              ].map((social, index) => (
                <motion.a
                  key={index}
                  className="w-10 h-10 rounded-full bg-surface-dark flex items-center justify-center text-gray-300 hover:bg-white hover:text-primary transition-all shadow-md"
                  href={social.href}
                  target={
                    social.href.startsWith("mailto:") ? "_self" : "_blank"
                  }
                  rel={
                    social.href.startsWith("mailto:")
                      ? ""
                      : "noopener noreferrer"
                  }
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {social.text ? (
                    <span className="material-icons text-lg">
                      {social.text}
                    </span>
                  ) : (
                    <i className={`${social.icon} text-xl`}></i>
                  )}
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>

        <ProfileShowcase />
      </div>
    </motion.section>
  );
};

export default Hero;
