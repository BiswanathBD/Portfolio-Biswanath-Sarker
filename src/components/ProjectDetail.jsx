import { motion, AnimatePresence } from "framer-motion";
import { useEffect } from "react";

const ProjectDetail = ({ project, isOpen, onClose }) => {
  if (!project) return null;

  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      // Disable body scroll
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";

      // Add escape key listener
      const handleEscape = (e) => {
        if (e.key === "Escape") {
          onClose();
        }
      };

      document.addEventListener("keydown", handleEscape);

      return () => {
        document.removeEventListener("keydown", handleEscape);
      };
    } else {
      // Re-enable body scroll
      document.body.style.overflow = "unset";
      document.documentElement.style.overflow = "unset";
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = "unset";
      document.documentElement.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

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
          onWheel={(e) => e.stopPropagation()} // Prevent wheel events from bubbling
        >
          {/* Backdrop */}
          <motion.div
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Modal Content */}
          <motion.div
            className="relative w-full max-w-4xl max-h-[90vh] bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 rounded-3xl shadow-2xl overflow-hidden"
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onWheel={(e) => e.stopPropagation()} // Prevent wheel events from bubbling
            onClick={(e) => e.stopPropagation()} // Prevent clicks from closing modal
          >
            {/* Close Button */}
            <motion.button
              className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-gray-300 hover:text-white hover:bg-primary/20 hover:border-primary/40 transition-all duration-300 z-10"
              onClick={onClose}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <i className="fas fa-times"></i>
            </motion.button>

            {/* Scrollable Content */}
            <div
              className="max-h-[90vh] overflow-y-auto modal-scroll p-8"
              onWheel={(e) => {
                // Allow scrolling within the modal content
                e.stopPropagation();

                // Check if we're at the top or bottom and prevent further propagation
                const target = e.currentTarget;
                const { scrollTop, scrollHeight, clientHeight } = target;

                if (
                  (e.deltaY < 0 && scrollTop === 0) ||
                  (e.deltaY > 0 && scrollTop + clientHeight >= scrollHeight)
                ) {
                  e.preventDefault();
                }
              }}
            >
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
                className="mb-8 rounded-2xl overflow-hidden shadow-2xl border border-white/5"
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full aspect-[16/9] object-cover object-top"
                />
              </motion.div>

              {/* Main Technology Stack */}
              <motion.div className="mb-8" variants={itemVariants}>
                <h3 className="text-white font-bold mb-4 flex items-center">
                  <i className="fas fa-code text-primary mr-3"></i>
                  Main Technology Stack
                </h3>
                <div className="flex flex-wrap gap-3">
                  {project.technologies.map((tech, index) => (
                    <motion.span
                      key={index}
                      className="px-3 py-1 bg-gradient-to-r from-primary/20 to-secondary/20 text-white text-sm font-medium rounded-lg border border-primary/30 backdrop-blur-sm"
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
                    <i className="fas fa-star text-primary mr-3"></i>
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
                    <i className="fas fa-mountain text-secondary mr-3"></i>
                    Challenges Faced
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {project.challenges.map((challenge, index) => (
                      <motion.div
                        key={index}
                        className="p-4 rounded-xl bg-primary/10 border border-primary/20"
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
                    <i className="fas fa-lightbulb text-secondary mr-3"></i>
                    Future Improvements
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {project.improvements.map((improvement, index) => (
                      <motion.div
                        key={index}
                        className="p-4 rounded-xl bg-secondary/10 border border-secondary/20"
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
                  className="flex-1 px-6 py-3 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-lg border border-primary/30 transition-all overflow-hidden text-primary flex items-center justify-center font-semibold"
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
                  className="flex-1 bg-black/10 text-gray-300 text-center py-3 px-6 rounded-lg font-semibold border border-white/10 backdrop-blur-sm hover:bg-primary/20 hover:text-white hover:border-primary/40 transition-all duration-300"
                  whileHover={{ y: -2, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <i className="fab fa-github mr-2"></i>
                  Frontend Code
                </motion.a>
                {project.serverUrl && (
                  <motion.a
                    href={project.serverUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-black/10 text-gray-300 text-center py-3 px-6 rounded-lg font-semibold border border-white/20 backdrop-blur-sm hover:bg-secondary/20 hover:text-white hover:border-secondary/40 transition-all duration-300"
                    whileHover={{ y: -2, scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <i className="fas fa-server mr-2"></i>
                    Backend Code
                  </motion.a>
                )}
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ProjectDetail;
