import { motion } from "framer-motion";
import ProfileShowcase from "./ProfileShowcase";

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.4,
        staggerChildren: 0.2,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  const itemVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 1,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  const socialLinks = [
    { href: "https://github.com/BiswanathBD", icon: "fab fa-github" },
    {
      href: "https://www.linkedin.com/in/biswanath-sarker-bd/",
      icon: "fab fa-linkedin-in",
    },
    {
      href: "mailto:biswanath.sarker.bd@gmail.com",
      icon: "material-icons",
      text: "email",
    },
  ];

  return (
    <motion.section
      className="relative pt-12 pb-24 md:pt-20 md:pb-32 container mx-auto px-4 md:px-8 lg:px-16 xl:px-24 mt-24"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >

      <div className="flex flex-col-reverse lg:flex-row gap-20 lg:gap-8 items-center relative">
        <div className="flex-1 flex flex-col-reverse sm:flex-row items-center gap-6 sm:gap-0">
          {/* Social icons vertical on left */}
          <motion.div
            className="flex sm:flex-col items-center gap-6 px-2"
            variants={itemVariants}
          >
            <div className="w-px h-20 bg-white/5 hidden sm:block"></div>
            {socialLinks.map((social, idx) => (
              <motion.a
                key={idx}
                className="w-8 h-8 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-full border border-primary/20 flex items-center justify-center text-white hover:from-primary/20 hover:to-secondary/20 transition-all"
                href={social.href}
                target={social.href.startsWith("mailto:") ? "_self" : "_blank"}
                rel={
                  social.href.startsWith("mailto:") ? "" : "noopener noreferrer"
                }
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                {social.text ? (
                  <span className="material-icons text-lg">{social.text}</span>
                ) : (
                  <i className={`${social.icon}`}></i>
                )}
              </motion.a>
            ))}
            <div className="w-px h-20 bg-white/5 hidden sm:block"></div>
          </motion.div>

          {/* Text content */}
          <motion.div
            className="space-y-4 text-center md:text-left md:ml-12 order-2 md:order-1"
            variants={itemVariants}
          >
            <motion.h1
              className="font-display text-2xl md:text-4xl tracking-tight text-primary font-bold"
              variants={itemVariants}
            >
              <motion.span
                className="inline-block text-4xl md:text-5xl"
                style={{ transformOrigin: "70% 70%" }}
                animate={{ rotate: [0, 20, -10, 20, -5, 15, 0] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatDelay: 1.5,
                  ease: "easeInOut",
                }}
              >
                👋🏼
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
              Crafting modern, responsive, and user-friendly websites with
              passion and precision.
            </motion.p>

            <motion.div
              className="flex flex-col md:flex-row items-center gap-6 mt-8 justify-center md:justify-start"
              variants={itemVariants}
            >
              <motion.a
                className="group relative px-6 py-2 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-lg border border-primary/30 transition-all hover:-translate-y-0.5 overflow-hidden text-primary"
                href="#"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10 flex items-center gap-2">
                  Download Resume
                  <span className="material-icons text-sm">download</span>
                </span>
              </motion.a>
            </motion.div>
          </motion.div>
        </div>

        {/* Profile showcase */}
        <div className="flex-1">
          <ProfileShowcase />
        </div>
      </div>
    </motion.section>
  );
};

export default Hero;
