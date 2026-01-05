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
          className="font-display font-bold text-4xl md:text-5xl text-white"
          variants={itemVariants}
        >
          About Me
        </motion.h2>
        <motion.div
          className="h-1 w-20 bg-gradient-to-r from-primary to-secondary mx-auto mt-4 rounded-full"
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
          <motion.div
            className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary rounded-full blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"
            animate={{
              rotate: 360,
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear",
            }}
          />
          <motion.div
            className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-surface-dark shadow-2xl"
            whileHover={{ scale: 1.05, rotate: 2 }}
            transition={{ duration: 0.3 }}
          >
            <img
              alt="Biswanath Sarker"
              className="h-full w-full object-cover"
              src="https://i.ibb.co.com/ym449tPb/20240122-111131-1.jpg"
            />
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
                color: "purple-400",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className={`group flex items-center p-4 rounded-xl border border-gray-800 bg-surface-dark hover:border-${item.color}/50 transition-all cursor-default shadow-sm hover:shadow-md hover:shadow-${item.color}/10`}
                variants={itemVariants}
                whileHover={{ x: 10, scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
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
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default About;
