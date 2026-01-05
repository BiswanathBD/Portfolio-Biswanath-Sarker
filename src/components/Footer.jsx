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
        className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[100px] pointer-events-none -z-10"
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

      <div className="container mx-auto px-4 md:px-8 lg:px-16 xl:px-24 py-12">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center"
          variants={containerVariants}
        >
          {/* Logo & Description */}
          <motion.div
            className="text-center md:text-left"
            variants={itemVariants}
          >
            <motion.div
              className="font-display font-bold text-2xl tracking-wide mb-3"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <span className="text-gray-400">
                &lt;
                <motion.span
                  className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
                  animate={{
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  {" "}
                  Biswanath{" "}
                </motion.span>
                /&gt;
              </span>
            </motion.div>
            <motion.p
              className="text-gray-400 text-sm leading-relaxed max-w-xs mx-auto md:mx-0"
              variants={itemVariants}
            >
              MREN Stack Developer crafting modern web experiences with passion
              and precision.
            </motion.p>
          </motion.div>

          {/* Quick Links */}
          <motion.div className="text-center" variants={itemVariants}>
            <motion.h3
              className="text-white font-semibold mb-4 text-sm"
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
              className="text-white font-semibold mb-4 text-sm"
              variants={itemVariants}
            >
              Connect With Me
            </motion.h3>
            <motion.div
              className="flex justify-center md:justify-end space-x-4"
              variants={containerVariants}
            >
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 ${social.color} transition-all duration-300 hover:bg-white/10 hover:border-primary/30`}
                  title={social.name}
                  variants={itemVariants}
                  whileHover={{ scale: 1.2, rotate: 360, y: -3 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                >
                  <i className={`${social.icon} text-sm`}></i>
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
            Built with ❤️ using React & Tailwind CSS
          </motion.p>
        </motion.div>
      </div>

      {/* Scroll to Top Button */}
      <motion.button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="absolute bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center text-white shadow-lg hover:shadow-primary/30 transition-all duration-300"
        title="Scroll to Top"
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.1, y: -3 }}
        whileTap={{ scale: 0.9 }}
        transition={{ duration: 0.3 }}
        viewport={{ once: true }}
      >
        <motion.i
          className="fas fa-arrow-up text-sm"
          animate={{ y: [0, -2, 0] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </motion.button>
    </motion.footer>
  );
};

export default Footer;
