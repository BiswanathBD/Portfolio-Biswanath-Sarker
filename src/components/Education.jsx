import { motion } from "framer-motion";

const Education = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const cardVariants = {
    hidden: { x: -50, opacity: 0, scale: 0.9 },
    visible: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const educationData = [
    {
      degree: "Complete Web Development Course",
      field: "Full Stack Web Development",
      institution: "Programming Hero",
      location: "Dhaka, Bangladesh",
      duration: "2025",
      description:
        "Completed an intensive 6-month programming course focusing on modern web development technologies including React, Node.js, MongoDB, and Express.js (MERN Stack).",
      icon: "fas fa-code",
      color: "from-primary to-secondary",
      achievements: [
        "Mastered MERN Stack Development",
        "Built multiple full-stack projects",
        "Learned modern JavaScript frameworks",
        "Gained hands-on industry experience",
      ],
    },
    {
      degree: "Bachelor of Arts (BA)",
      field: "Bengali Literature",
      institution: "Govt. B.L. College, Khulna",
      location: "Khulna, Bangladesh",
      duration: "2013 - 2018",
      description:
        "Completed Bachelor of Arts degree with specialization in Bengali Literature, developing strong analytical, communication, and critical thinking skills.",
      icon: "fas fa-graduation-cap",
      color: "from-secondary to-primary",
      achievements: [
        "Strong foundation in Bengali Literature and Language",
        "Developed excellent communication skills",
        "Enhanced analytical and critical thinking abilities",
        "Cultural and literary research experience",
      ],
    },
  ];

  return (
    <motion.section
      className="py-20 container mx-auto px-4 md:px-8 lg:px-16 xl:px-24 relative"
      id="education"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      {/* Background Elements */}
      <motion.div
        className="absolute top-10 left-10 w-80 h-80 bg-primary/10 rounded-full blur-[100px] pointer-events-none -z-10"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-10 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-[120px] pointer-events-none -z-10"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

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
            🎓
          </motion.span>
          Education
        </motion.h2>
        <motion.div
          className="h-1 w-20 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"
          initial={{ width: 0 }}
          whileInView={{ width: 80 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        />
        <motion.p
          className="text-gray-400 mt-6 max-w-2xl mx-auto"
          variants={itemVariants}
        >
          My educational journey from literature to programming, combining
          analytical thinking with technical expertise
        </motion.p>
      </motion.div>

      <motion.div className="max-w-4xl mx-auto" variants={containerVariants}>
        {educationData.map((edu, index) => (
          <motion.div
            key={index}
            className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 rounded-3xl p-8 shadow-2xl transition-all duration-700 hover:border-primary/40 mb-8"
            variants={cardVariants}
            whileHover={{ y: -10, scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            {/* Animated Background Gradient */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 opacity-0 hover:opacity-100 transition-opacity duration-500 rounded-3xl"
              initial={false}
            />

            {/* Glowing Border Effect */}
            <motion.div
              className="absolute inset-0 rounded-3xl bg-gradient-to-r from-primary/20 to-secondary/20 opacity-0 hover:opacity-100 transition-opacity duration-500 blur-sm -z-10"
              initial={false}
            />

            <div className="relative z-10">
              {/* Header Section */}
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                <div className="flex items-start space-x-4 mb-4 md:mb-0">
                  <motion.div
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${edu.color} flex items-center justify-center text-white shadow-lg`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <i className={`${edu.icon} text-2xl`}></i>
                  </motion.div>

                  <div className="flex-1">
                    <motion.h3
                      className="font-display font-bold text-2xl md:text-3xl text-white mb-2"
                      variants={itemVariants}
                    >
                      {edu.degree}
                    </motion.h3>
                    <motion.p
                      className="text-primary font-semibold text-lg mb-1"
                      variants={itemVariants}
                    >
                      {edu.field}
                    </motion.p>
                    <motion.p
                      className="text-gray-300 font-medium"
                      variants={itemVariants}
                    >
                      {edu.institution}
                    </motion.p>
                    <motion.p
                      className="text-gray-400 text-sm"
                      variants={itemVariants}
                    >
                      {edu.location}
                    </motion.p>
                  </div>
                </div>

                <motion.div
                  className="flex items-center space-x-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-4 py-2"
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                >
                  <i className="fas fa-calendar-alt text-primary"></i>
                  <span className="text-gray-300 font-medium text-sm">
                    {edu.duration}
                  </span>
                </motion.div>
              </div>

              {/* Description */}
              <motion.p
                className="text-gray-300 leading-relaxed mb-6"
                variants={itemVariants}
              >
                {edu.description}
              </motion.p>

              {/* Achievements */}
              <motion.div variants={itemVariants}>
                <h4 className="text-white font-semibold mb-4 flex items-center">
                  <i className="fas fa-star text-yellow-400 mr-2"></i>
                  Key Learning Areas
                </h4>
                <motion.div
                  className="grid grid-cols-1 md:grid-cols-2 gap-3"
                  variants={containerVariants}
                >
                  {edu.achievements.map((achievement, achIndex) => (
                    <motion.div
                      key={achIndex}
                      className="flex items-center space-x-3 p-3 rounded-xl bg-white/5 border border-white/10 hover:border-primary/30 transition-all duration-300"
                      variants={itemVariants}
                      whileHover={{ x: 5, scale: 1.02 }}
                      transition={{ duration: 0.2 }}
                    >
                      <motion.div
                        className="w-2 h-2 rounded-full bg-gradient-to-r from-primary to-secondary"
                        animate={{
                          scale: [1, 1.2, 1],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: achIndex * 0.2,
                        }}
                      />
                      <span className="text-gray-200 text-sm">
                        {achievement}
                      </span>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>

              {/* Decorative Elements */}
              <motion.div
                className="absolute top-4 right-4 w-20 h-20 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-full opacity-0 hover:opacity-100 transition-opacity duration-500"
                initial={false}
              />
              <motion.div
                className="absolute bottom-4 left-4 w-16 h-16 bg-gradient-to-tr from-secondary/10 to-primary/10 rounded-full opacity-0 hover:opacity-100 transition-opacity duration-500"
                initial={false}
              />
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Additional Info Section */}
      <motion.div
        className="mt-12 text-center bg-gradient-to-r from-white/5 w-fit mx-auto to-white/10 backdrop-blur-md border border-white/10 rounded-2xl p-8"
        variants={cardVariants}
        whileHover={{ y: -5, scale: 1.02 }}
        transition={{ duration: 0.3 }}
      >
        <motion.div
          className="flex items-center justify-center mb-4"
          variants={itemVariants}
        >
          <motion.div
            className="w-12 h-12 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center mr-4"
            animate={{
              rotate: [0, 360],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            <i className="fas fa-book text-white"></i>
          </motion.div>
          <h3 className="text-white font-bold text-xl">
            Continuous Learning Journey
          </h3>
        </motion.div>
        <motion.p
          className="text-gray-300 max-w-4xl mx-auto"
          variants={itemVariants}
        >
          My educational journey combines the analytical thinking and
          communication skills from my Bengali Literature background with
          intensive technical training from Programming Hero. This unique blend
          of liberal arts foundation and modern programming expertise allows me
          to create user-centered solutions with attention to detail, clear
          communication, and deep technical proficiency in full-stack
          development.
        </motion.p>
      </motion.div>
    </motion.section>
  );
};

export default Education;
