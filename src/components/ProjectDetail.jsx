import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const ProjectDetail = ({ project, isOpen, onClose }) => {
  if (!project) return null;

  const modalVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
      y: 50,
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      y: 50,
      transition: {
        duration: 0.2,
        ease: "easeIn",
      },
    },
  };

  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          variants={overlayVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          {/* Backdrop */}
          <motion.div
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Modal Content */}
          <motion.div
            className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-gradient-to-br from-gray-900/95 to-gray-800/95 backdrop-blur-xl border border-white/20 rounded-3xl shadow-2xl"
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {/* Close Button */}
            <motion.button
              className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-gray-300 hover:text-white hover:bg-white/20 transition-all duration-300 z-10"
              onClick={onClose}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <i className="fas fa-times"></i>
            </motion.button>

            <div className="p-8">
              {/* Header */}
              <motion.div className="mb-8" variants={itemVariants}>
                <motion.h2
                  className="font-display font-bold text-3xl md:text-4xl text-white mb-4"
                  variants={itemVariants}
                >
                  {project.title}
                </motion.h2>
                <motion.div
                  className="h-1 w-20 bg-gradient-to-r from-primary to-secondary rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: 80 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                />
              </motion.div>

              {/* Project Image */}
              <motion.div
                className="mb-8 rounded-2xl overflow-hidden shadow-2xl"
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 md:h-80 object-cover"
                />
              </motion.div>

              {/* Main Technology Stack */}
              <motion.div className="mb-8" variants={itemVariants}>
                <h3 className="text-white font-bold text-xl mb-4 flex items-center">
                  <i className="fas fa-code text-primary mr-3"></i>
                  Main Technology Stack
                </h3>
                <div className="flex flex-wrap gap-3">
                  {project.technologies.map((tech, index) => (
                    <motion.span
                      key={index}
                      className="px-4 py-2 bg-gradient-to-r from-primary/20 to-secondary/20 text-white text-sm font-medium rounded-full border border-primary/30 backdrop-blur-sm"
                      whileHover={{ scale: 1.05, y: -2 }}
                      transition={{ duration: 0.2 }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </motion.div>

              {/* Description */}
              <motion.div className="mb-8" variants={itemVariants}>
                <h3 className="text-white font-bold text-xl mb-4 flex items-center">
                  <i className="fas fa-info-circle text-secondary mr-3"></i>
                  Project Description
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {project.detailedDescription || project.description}
                </p>
              </motion.div>

              {/* Key Features */}
              {project.features && (
                <motion.div className="mb-8" variants={itemVariants}>
                  <h3 className="text-white font-bold text-xl mb-4 flex items-center">
                    <i className="fas fa-star text-yellow-400 mr-3"></i>
                    Key Features
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {project.features.map((feature, index) => (
                      <motion.div
                        key={index}
                        className="flex items-center space-x-3 p-3 rounded-xl bg-white/5 border border-white/10"
                        whileHover={{ x: 5, scale: 1.02 }}
                        transition={{ duration: 0.2 }}
                      >
                        <div className="w-2 h-2 rounded-full bg-gradient-to-r from-primary to-secondary"></div>
                        <span className="text-gray-200 text-sm">{feature}</span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* Challenges */}
              {project.challenges && (
                <motion.div className="mb-8" variants={itemVariants}>
                  <h3 className="text-white font-bold text-xl mb-4 flex items-center">
                    <i className="fas fa-mountain text-orange-400 mr-3"></i>
                    Challenges Faced
                  </h3>
                  <div className="space-y-3">
                    {project.challenges.map((challenge, index) => (
                      <motion.div
                        key={index}
                        className="p-4 rounded-xl bg-orange-500/10 border border-orange-500/20"
                        whileHover={{ scale: 1.02 }}
                        transition={{ duration: 0.2 }}
                      >
                        <p className="text-gray-200 text-sm leading-relaxed">
                          {challenge}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* Future Improvements */}
              {project.improvements && (
                <motion.div className="mb-8" variants={itemVariants}>
                  <h3 className="text-white font-bold text-xl mb-4 flex items-center">
                    <i className="fas fa-lightbulb text-green-400 mr-3"></i>
                    Future Improvements
                  </h3>
                  <div className="space-y-3">
                    {project.improvements.map((improvement, index) => (
                      <motion.div
                        key={index}
                        className="p-4 rounded-xl bg-green-500/10 border border-green-500/20"
                        whileHover={{ scale: 1.02 }}
                        transition={{ duration: 0.2 }}
                      >
                        <p className="text-gray-200 text-sm leading-relaxed">
                          {improvement}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* Action Buttons */}
              <motion.div
                className="flex flex-col sm:flex-row gap-4"
                variants={itemVariants}
              >
                <motion.a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-gradient-to-r from-primary to-secondary text-white text-center py-4 px-6 rounded-2xl font-semibold shadow-lg hover:shadow-primary/40 transition-all duration-300"
                  whileHover={{ y: -2, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <i className="fas fa-external-link-alt mr-2"></i>
                  View Live Project
                </motion.a>
                <motion.a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-white/10 text-gray-300 text-center py-4 px-6 rounded-2xl font-semibold border border-white/20 backdrop-blur-sm hover:bg-white/20 hover:text-white transition-all duration-300"
                  whileHover={{ y: -2, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <i className="fab fa-github mr-2"></i>
                  View Source Code
                </motion.a>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ProjectDetail;
