import { motion } from "framer-motion";

const About = () => {
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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  const imageVariants = {
    hidden: { scale: 0.95, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  return (
    <motion.section
      className="py-20 container mx-auto px-4 md:px-8 lg:px-16 xl:px-24 relative"
      id="about"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <motion.div className="text-center mb-16" variants={itemVariants}>
        <motion.h2
          className="font-display font-bold text-4xl md:text-5xl text-white mb-4"
          variants={itemVariants}
        >
          <motion.span
            className="inline-block mr-3"
            animate={{
              rotate: [0, 10, -10, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              repeatDelay: 2,
              ease: "easeInOut",
            }}
          >
            👨🏻‍💻
          </motion.span>
          About Me
        </motion.h2>
        <motion.div
          className="h-1 w-20 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"
          variants={itemVariants}
          initial={{ width: 0 }}
          whileInView={{ width: 80 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        />
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <motion.div
          className="relative flex justify-center group order-2 md:order-1"
          variants={imageVariants}
        >
          {/* Outer Glow */}
          <motion.div
            className="absolute -inset-6 bg-gradient-to-br from-primary/15 via-secondary/15 to-primary/15 rounded-3xl blur-xl opacity-50 group-hover:opacity-70 transition-all duration-700"
            animate={{
              scale: [1, 1.05, 1],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          {/* Main Image Container */}
          <motion.div
            className="relative w-3/4"
            whileHover={{
              scale: 1.02,
              y: -5,
            }}
            transition={{ duration: 0.4 }}
          >
            {/* Image Container */}
            <div className="relative w-full border border-primary/50 p-1 bg-transparent rounded-2xl overflow-hidden">
              {/* Profile Image */}
              <img
                alt="Biswanath Sarker"
                className="w-full h-full object-cover rounded-xl"
                src="https://i.ibb.co.com/ym449tPb/20240122-111131-1.jpg"
              />

              {/* Subtle Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-primary/5" />
            </div>

            {/* Corner Accent Elements */}
            <div className="absolute -top-3 -left-3 w-8 h-8 border-l-3 border-t-3 border-primary rounded-tl-lg opacity-80" />
            <div className="absolute -top-3 -right-3 w-8 h-8 border-r-3 border-t-3 border-secondary rounded-tr-lg opacity-80" />
            <div className="absolute -bottom-3 -left-3 w-8 h-8 border-l-3 border-b-3 border-primary rounded-bl-lg opacity-80" />
            <div className="absolute -bottom-3 -right-3 w-8 h-8 border-r-3 border-b-3 border-secondary rounded-br-lg opacity-80" />

            {/* Side Accent Lines */}
            <div className="absolute top-8 -left-1 w-6 h-0.5 bg-gradient-to-r from-primary to-transparent opacity-60" />
            <div className="absolute top-16 -left-1 w-4 h-0.5 bg-gradient-to-r from-secondary to-transparent opacity-60" />
            <div className="absolute bottom-8 -right-1 w-6 h-0.5 bg-gradient-to-l from-primary to-transparent opacity-60" />
            <div className="absolute bottom-16 -right-1 w-4 h-0.5 bg-gradient-to-l from-secondary to-transparent opacity-60" />

            {/* Top and Bottom Accent Lines */}
            <div className="absolute -top-1 left-8 h-6 w-0.5 bg-gradient-to-b from-primary to-transparent opacity-60" />
            <div className="absolute -top-1 left-16 h-4 w-0.5 bg-gradient-to-b from-secondary to-transparent opacity-60" />
            <div className="absolute -bottom-1 right-8 h-6 w-0.5 bg-gradient-to-t from-primary to-transparent opacity-60" />
            <div className="absolute -bottom-1 right-16 h-4 w-0.5 bg-gradient-to-t from-secondary to-transparent opacity-60" />
          </motion.div>

          {/* Floating Tech Icons - Simplified */}
          <motion.div
            className="absolute top-6 right-6 w-10 h-10 bg-primary/10 backdrop-blur-sm rounded-xl flex items-center justify-center border border-primary/20 shadow-lg"
            animate={{
              y: [0, -8, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <i className="fas fa-code text-primary text-sm"></i>
          </motion.div>

          <motion.div
            className="absolute bottom-6 left-6 w-10 h-10 bg-secondary/10 backdrop-blur-sm rounded-xl flex items-center justify-center border border-secondary/20 shadow-lg"
            animate={{
              y: [0, 8, 0],
            }}
            transition={{
              duration: 3.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <i className="fas fa-laptop-code text-secondary text-sm"></i>
          </motion.div>

          <motion.div
            className="absolute top-1/2 -right-6 w-10 h-10 bg-primary/10 backdrop-blur-sm rounded-xl flex items-center justify-center border border-primary/20 shadow-lg"
            animate={{
              x: [0, 8, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <i className="fas fa-rocket text-primary text-sm"></i>
          </motion.div>
        </motion.div>

        <motion.div
          className="space-y-6 order-1 md:order-2"
          variants={containerVariants}
        >
          <motion.h3
            className="font-display font-bold text-2xl md:text-3xl text-secondary"
            variants={itemVariants}
          >
            I'm Biswanath Sarker
          </motion.h3>
          <motion.div
            className="space-y-4 text-gray-300 leading-relaxed"
            variants={itemVariants}
          >
            <p>
              Hi! I'm Biswanath Sarker, a passionate Full Stack Web Developer
              with a unique journey from Bengali Literature to modern web
              development. My educational background in literature has given me
              strong analytical thinking and excellent communication skills.
            </p>
            <p>
              I specialize in building modern, scalable web applications using
              the MERN stack (MongoDB, Express.js, React, Node.js). I enjoy
              working on full-stack projects that challenge me to think both
              creatively and analytically, from designing intuitive user
              interfaces to architecting robust backend systems.
            </p>
            <p>
              When I'm not coding, I love reading Bengali literature, exploring
              new technologies, playing cricket, and spending time with family
              and friends. I believe in continuous learning and am always
              excited to take on new challenges.
            </p>
          </motion.div>

          <motion.div
            className="flex flex-col gap-4 mt-8"
            variants={containerVariants}
          >
            {[
              {
                icon: "laptop_mac",
                text: "Full Stack Web Development",
                color: "primary",
              },
              {
                icon: "smartphone",
                text: "Responsive Design & Mobile-First",
                color: "secondary",
              },
              {
                icon: "psychology",
                text: "Problem Solving & Innovation",
                color: "secondary",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className={`group relative flex items-center p-4 rounded-xl border border-gray-800 bg-surface-dark hover:border-${item.color}/50 transition-all cursor-default shadow-sm overflow-hidden`}
                variants={itemVariants}
                whileHover={{ x: 10, scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                {/* Animated Background Gradient */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl"
                  initial={false}
                />

                {/* Glowing Border Effect */}
                <motion.div
                  className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary/20 to-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm -z-10"
                  initial={false}
                />

                <div className="relative z-10 flex items-center w-full">
                  <motion.div
                    className={`p-2 rounded-lg bg-${item.color}/10 text-${item.color} group-hover:bg-${item.color} group-hover:text-white transition-colors`}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <span className="material-icons">{item.icon}</span>
                  </motion.div>
                  <span className="ml-4 font-medium text-gray-200">
                    {item.text}
                  </span>
                </div>

                {/* Decorative Elements */}
                <motion.div
                  className="absolute bottom-0 right-0 w-12 h-12 bg-gradient-to-tl from-secondary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-tl-full"
                  initial={false}
                />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default About;
