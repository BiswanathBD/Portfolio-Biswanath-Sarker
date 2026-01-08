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
    hidden: { opacity: 0, y: 30 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const cardVariants = {
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

  const educationData = [
    {
      year: "2025 - 2026",
      degree: "Complete Web Development Course",
      field: "Full Stack Web Development",
      institution: "Programming Hero",
      location: "Dhaka, Bangladesh",
      description:
        "Completed an intensive 6-month programming course focusing on modern web development technologies including React, Node.js, MongoDB, and Express.js (MERN Stack).",
      achievements: [
        "Mastered MERN Stack Development",
        "Built multiple full-stack projects",
        "Learned modern JavaScript frameworks",
        "Gained hands-on industry experience",
      ],
      icon: "fas fa-code",
    },
    {
      year: "2013 - 2018",
      degree: "Bachelor of Arts (BA)",
      field: "Bengali Literature",
      institution: "Govt. B.L. College, Khulna",
      location: "Khulna, Bangladesh",
      description:
        "Completed Bachelor of Arts degree with specialization in Bengali Literature, developing strong analytical, communication, and critical thinking skills.",
      achievements: [
        "Strong foundation in Bengali Literature and Language",
        "Developed excellent communication skills",
        "Enhanced analytical and critical thinking abilities",
        "Cultural and literary research experience",
      ],
      icon: "fas fa-graduation-cap",
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

      {/* Header Section */}
      <motion.div className="text-center mb-20" variants={itemVariants}>
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
          className="h-1 w-24 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"
          initial={{ width: 0 }}
          whileInView={{ width: 96 }}
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

      {/* Timeline Container */}
      <div className="relative max-w-4xl mx-auto flex justify-center">
        <div className="relative w-full max-w-3xl">
          {/* Vertical Timeline Line - Left Side */}
          <motion.div
            className="absolute left-20 top-0 w-1 bg-gradient-to-b from-primary via-secondary to-primary h-full rounded-full"
            initial={{ height: 0 }}
            whileInView={{ height: "100%" }}
            transition={{ duration: 1.5, delay: 0.5 }}
          />

          {/* Timeline Items */}
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              className="relative flex items-start mb-20 last:mb-0"
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.8,
                delay: index * 0.3,
                ease: "easeOut",
              }}
              viewport={{ once: true, amount: 0.3 }}
            >
              {/* Timeline Dot */}
              <motion.div
                className="absolute left-[76px] top-8 w-6 h-6 bg-gradient-to-r from-primary to-secondary rounded-full border-4 border-gray-900 z-10 shadow-lg"
                initial={{ scale: 0, rotate: -180 }}
                whileInView={{ scale: 1, rotate: 0 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.3 + 0.2,
                  type: "spring",
                  stiffness: 200,
                }}
                whileHover={{
                  scale: 1.3,
                  boxShadow: "0 0 20px rgba(249, 115, 22, 0.6)",
                }}
              >
                <motion.div
                  className="absolute inset-1 bg-gradient-to-r from-primary to-secondary rounded-full"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.7, 1, 0.7],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              </motion.div>

              {/* Year Badge - Left Side of Timeline */}
              <motion.div
                className="absolute -left-6 top-7 bg-gradient-to-r from-primary to-secondary text-white px-3 py-1.5 rounded-full text-xs font-bold shadow-lg z-10"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.3 + 0.4,
                  type: "spring",
                }}
                whileHover={{ scale: 1.1 }}
              >
                {edu.year}
              </motion.div>

              {/* Education Card */}
              <motion.div
                className="ml-28 w-full max-w-2xl"
                whileHover={{
                  scale: 1.01,
                  y: -3,
                }}
                transition={{ duration: 0.3 }}
              >
                <div className="relative group">
                  {/* Main Card */}
                  <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 rounded-3xl overflow-hidden shadow-2xl transition-all hover:border-primary/40 duration-500 p-6">
                    {/* Card Header */}
                    <div className="relative z-10">
                      <div className="flex items-start gap-6 mb-6">
                        <motion.div
                          className="relative"
                          whileHover={{ rotate: 360, scale: 1.1 }}
                          transition={{ duration: 0.6 }}
                        >
                          <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-xl flex items-center justify-center border border-primary/30 backdrop-blur-sm">
                            <i
                              className={`${edu.icon} text-primary text-lg`}
                            ></i>
                          </div>
                          <motion.div
                            className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl"
                            animate={{
                              scale: [1, 1.2, 1],
                              opacity: [0, 0.5, 0],
                            }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                              ease: "easeInOut",
                            }}
                          />
                        </motion.div>

                        <div className="flex-1">
                          <motion.h3
                            className="text-white font-bold text-xl md:text-2xl mb-2 leading-tight"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.3 + 0.6 }}
                          >
                            {edu.degree}
                          </motion.h3>
                          <motion.p
                            className="text-primary font-semibold text-base mb-2 flex items-center gap-2"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.3 + 0.7 }}
                          >
                            <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
                            {edu.field}
                          </motion.p>
                        </div>
                      </div>

                      {/* Institution Info with Icons */}
                      <motion.div
                        className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-4"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.3 + 0.8 }}
                      >
                        <div className="flex items-center gap-2 bg-white/5 backdrop-blur-sm rounded-lg p-2 border border-white/10 hover:border-primary/30 transition-all duration-300">
                          <div className="w-6 h-6 bg-primary/20 rounded-md flex items-center justify-center">
                            <i className="fas fa-university text-primary text-xs"></i>
                          </div>
                          <span className="text-gray-300 text-xs font-medium">
                            {edu.institution}
                          </span>
                        </div>
                        <div className="flex items-center gap-2 bg-white/5 backdrop-blur-sm rounded-lg p-2 border border-white/10 hover:border-secondary/30 transition-all duration-300">
                          <div className="w-6 h-6 bg-secondary/20 rounded-md flex items-center justify-center">
                            <i className="fas fa-map-marker-alt text-secondary text-xs"></i>
                          </div>
                          <span className="text-gray-300 text-xs font-medium">
                            {edu.location}
                          </span>
                        </div>
                      </motion.div>

                      {/* Description */}
                      <motion.p
                        className="text-gray-300 leading-relaxed mb-6 text-sm"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.3 + 0.9 }}
                      >
                        {edu.description}
                      </motion.p>

                      {/* Key Learning Areas */}
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.3 + 1.0 }}
                      >
                        <h4 className="text-white font-bold text-base mb-3 flex items-center gap-2">
                          <div className="w-6 h-6 bg-gradient-to-r from-primary to-secondary rounded-md flex items-center justify-center">
                            <span className="text-white text-xs">📚</span>
                          </div>
                          Key Learning Areas
                        </h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                          {edu.achievements.map((achievement, achIndex) => (
                            <motion.div
                              key={achIndex}
                              className="group flex items-center gap-2 p-3 rounded-lg bg-gradient-to-r from-white/5 to-white/10 border border-white/10 hover:border-primary/30 hover:from-primary/5 hover:to-secondary/5 transition-all duration-300 cursor-default"
                              initial={{ opacity: 0 }}
                              whileInView={{ opacity: 1 }}
                              transition={{
                                delay: index * 0.3 + 1.1 + achIndex * 0.1,
                                duration: 0.5,
                              }}
                              whileHover={{ scale: 1.01, x: 3 }}
                            >
                              <motion.div
                                className="w-2 h-2 bg-gradient-to-r from-primary to-secondary rounded-full"
                                animate={{
                                  scale: [1, 1.2, 1],
                                }}
                                transition={{
                                  duration: 2,
                                  repeat: Infinity,
                                  delay: achIndex * 0.3,
                                }}
                              />
                              <span className="text-gray-200 text-xs font-medium group-hover:text-white transition-colors duration-300">
                                {achievement}
                              </span>
                            </motion.div>
                          ))}
                        </div>
                      </motion.div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Continuous Learning Section */}
      <motion.div className="mt-20 max-w-4xl mx-auto" variants={cardVariants}>
        <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 rounded-3xl overflow-hidden shadow-2xl transition-all hover:border-primary/40 duration-500 p-8 text-center">
          <motion.h3
            className="text-white font-bold text-2xl mb-4"
            variants={itemVariants}
          >
            Continuous Learning Journey
          </motion.h3>
          <motion.p
            className="text-gray-300 leading-relaxed"
            variants={itemVariants}
          >
            My educational journey combines the analytical thinking and
            communication skills from my Bengali Literature background with
            intensive technical training from Programming Hero. This unique
            blend allows me to create user- centered solutions with attention to
            detail and deep technical proficiency.
          </motion.p>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Education;
