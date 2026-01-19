import { motion } from "framer-motion";

const Footer = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const socialLinks = [
    {
      name: "GitHub",
      icon: "fab fa-github",
      url: "https://github.com/BiswanathBD",
      color: "hover:text-white",
    },
    {
      name: "LinkedIn",
      icon: "fab fa-linkedin-in",
      url: "https://www.linkedin.com/in/biswanath-sarker-bd/",
      color: "hover:text-blue-400",
    },
    {
      name: "Facebook",
      icon: "fab fa-facebook-f",
      url: "https://web.facebook.com/Biswanath.Sarker.BD",
      color: "hover:text-blue-500",
    },
    {
      name: "Twitter",
      icon: "fab fa-twitter",
      url: "https://x.com/Biswanath08BD",
      color: "hover:text-blue-300",
    },
    {
      name: "Instagram",
      icon: "fab fa-instagram",
      url: "https://www.instagram.com/biswanath.sarker.bd/",
      color: "hover:text-pink-400",
    },
  ];

  const quickLinks = [
    { name: "Home", href: "#" },
    { name: "About", href: "#about" },
    { name: "Education", href: "#education" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <motion.footer
      className="relative mt-20 border-t border-white/10 bg-gradient-to-t from-black/20 to-transparent"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      {/* Background Elements */}
      <motion.div
        className="absolute top-0 left-1/4 bg-primary/5 rounded-full blur-[100px] pointer-events-none -z-10"
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 50, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute bottom-0 right-1/4 w-80 h-80 bg-secondary/5 rounded-full blur-[100px] pointer-events-none -z-10"
        animate={{
          scale: [1.2, 1, 1.2],
          x: [0, -30, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="container mx-auto px-4 md:px-8 lg:px-16 xl:px-24 py-8">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
        >
          {/* Logo & Description */}
          <motion.div
            className="text-center md:text-left space-y-3"
            variants={itemVariants}
          >
            {/* Name and Title in one line */}
            <motion.div
              className="flex items-center justify-center md:justify-start gap-3"
              whileHover={{ x: 3 }}
              transition={{ duration: 0.3 }}
            >
              <div className="font-display font-bold text-xl tracking-wide">
                <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  Biswanath
                </span>
              </div>

              <div className="h-6 w-px bg-gradient-to-b from-primary/50 to-secondary/50 ani" />

              <div className="text-sm font-medium">
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent animate-pulse">
                  MERN Stack Developer
                </span>
              </div>
            </motion.div>

            {/* Stylish Subtitle */}
            <motion.p
              className="text-sm leading-relaxed max-w-xs mx-auto md:mx-0 bg-gradient-to-r from-gray-400 via-gray-300 to-gray-400 bg-clip-text text-transparent"
              variants={itemVariants}
              style={{ backgroundSize: "200% auto" }}
              animate={{
                backgroundPosition: ["0% center", "200% center"],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              "Building modern web applications with clean code and creative
              solutions."
            </motion.p>
          </motion.div>

          {/* Quick Links */}
          <motion.div className="text-center" variants={itemVariants}>
            <motion.h3
              className="font-bold mb-4 text-lg bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent"
              variants={itemVariants}
            >
              Quick Links
            </motion.h3>
            <motion.div
              className="flex flex-wrap justify-center gap-4"
              variants={containerVariants}
            >
              {quickLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  className="text-gray-400 hover:text-primary transition-colors duration-300 text-sm font-medium"
                  variants={itemVariants}
                  whileHover={{ scale: 1.1, y: -2 }}
                  transition={{ duration: 0.2 }}
                >
                  {link.name}
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Social Links */}
          <motion.div
            className="text-center md:text-right"
            variants={itemVariants}
          >
            <motion.h3
              className="font-bold mb-4 text-lg bg-gradient-to-r from-secondary via-primary to-secondary bg-clip-text text-transparent"
              variants={itemVariants}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              Connect With Me
            </motion.h3>
            <motion.div
              className="flex justify-center md:justify-end space-x-3"
              variants={containerVariants}
            >
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative"
                  title={social.name}
                  variants={itemVariants}
                  whileHover={{ y: -5, scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                >
                  {/* Glow effect on hover */}
                  <motion.div
                    className="absolute inset-0 rounded-lg bg-gradient-to-r from-primary/20 to-secondary/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={false}
                  />

                  {/* Icon container */}
                  <div
                    className={`relative w-8 h-8 rounded-lg bg-gradient-to-br from-white/5 to-white/10 border border-white/10 flex items-center justify-center text-gray-400 ${social.color} transition-all duration-300 group-hover:border-primary/50 group-hover:shadow-lg group-hover:shadow-primary/20`}
                  >
                    <i className={`${social.icon} text-base`}></i>
                  </div>
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Divider */}
        <motion.div
          className="my-8 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: true }}
        />

        {/* Copyright */}
        <motion.div
          className="text-center text-gray-400 text-sm"
          variants={itemVariants}
        >
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            viewport={{ once: true }}
          >
            © {new Date().getFullYear()} Biswanath Sarker. All rights reserved.
          </motion.p>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;
