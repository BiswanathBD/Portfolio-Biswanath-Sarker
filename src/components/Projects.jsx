import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import ProjectDetail from "./ProjectDetail";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch("/projects.json");
        const data = await response.json();
        setProjects(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching projects:", error);
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  const openProjectDetail = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeProjectDetail = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

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
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const categories = ["All", "Full Stack"];
  const [activeCategory, setActiveCategory] = useState("All");
  const [filteredProjects, setFilteredProjects] = useState([]);

  useEffect(() => {
    if (projects.length > 0) {
      setFilteredProjects(projects);
    }
  }, [projects]);

  const filterProjects = (category) => {
    setActiveCategory(category);
    if (category === "All") {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(
        projects.filter((project) => project.category === category)
      );
    }
  };

  return (
    <motion.section
      className="py-20 container mx-auto px-4 md:px-8 lg:px-16 xl:px-24 relative"
      id="projects"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      {/* Background Elements */}
      <motion.div
        className="absolute top-20 left-10 w-80 h-80 bg-primary/10 rounded-full blur-[100px] pointer-events-none -z-10"
        animate={{
          x: [0, 50, 0],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-[120px] pointer-events-none -z-10"
        animate={{
          x: [0, -40, 0],
          y: [0, 40, 0],
        }}
        transition={{
          duration: 12,
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
              scale: [1, 1.2, 1],
              rotate: [0, 5, -5, 0],
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              repeatDelay: 1,
              ease: "easeInOut",
            }}
          >
            🎯
          </motion.span>
          Featured Projects
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
          Here are some of my recent projects that showcase my skills and
          experience in web development
        </motion.p>
      </motion.div>

      {/* Loading State */}
      {loading && (
        <div className="flex justify-center items-center min-h-[400px]">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
        </div>
      )}

      {/* Filter Buttons */}
      {!loading && projects.length > 0 && (
        <motion.div
          className="flex justify-center mb-12"
          variants={itemVariants}
        >
          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-full p-2 shadow-lg">
            <div className="flex space-x-2">
              {categories.map((category) => (
                <motion.button
                  key={category}
                  onClick={() => filterProjects(category)}
                  className={`px-6 py-2 rounded-full font-medium text-sm transition-all duration-300 ${
                    activeCategory === category
                      ? "bg-gradient-to-r from-primary to-secondary text-white shadow-lg"
                      : "text-gray-300 hover:text-white hover:bg-white/10"
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {category}
                </motion.button>
              ))}
            </div>
          </div>
        </motion.div>
      )}

      {/* Projects Grid */}
      {!loading && projects.length > 0 && (
        <div className="flex flex-col justify-center items-center gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-lg border border-white/10 shadow-2xl transition-all duration-700 hover:border-primary/40 grid grid-cols-2 w-[32rem] aspect-[4/3] ml-8 hover:scale-105"
            >
              <div>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-[50%] aspect-[3/4] object-cover border border-white/20 absolute top-1/2 -translate-y-1/2 -left-6 shadow-2xl rounded-md group-hover:scale-y-105 transition-all duration-300"
                />
              </div>

              {/* Project Content - Right Side */}
              <div className="py-8 pr-4 flex flex-col justify-between">
                {/* Content Area */}
                <div className="flex-1">
                  <div className="relative mb-4">
                    <h3 className="font-extrabold text-3xl lg:text-4xl bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-2 hover:scale-105 hover:translate-x-2 transition-transform duration-300">
                      {project.title}
                    </h3>
                    {project.subtitle && (
                      <p className="text-lg lg:text-xl font-medium text-white">
                        {project.subtitle}
                      </p>
                    )}
                  </div>

                  {/* Description */}
                  <p className="text-sm leading-relaxed mb-4 text-primary line-clamp-3">
                    {project.description}
                  </p>

                  {/* Technology Pills - 2 Lines with Remaining Count */}
                  <div className="mb-6">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies
                        .slice(0, 5)
                        .map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="relative px-3 py-1.5 bg-gradient-to-r from-primary/20 to-secondary/20 text-secondary text-xs font-medium rounded-md border border-primary/30 backdrop-blur-sm hover:border-primary/50 hover:text-white hover:from-primary/30 hover:to-secondary/30 transition-all duration-300 cursor-default hover:-translate-y-1"
                          >
                            <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-md opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                            <span className="relative">{tech}</span>
                          </span>
                        ))}
                      {project.technologies.length > 5 && (
                        <span className="relative px-3 py-1.5 bg-gradient-to-r from-secondary/30 to-primary/30 text-white text-xs font-medium rounded-md border border-secondary/50 backdrop-blur-sm cursor-default animate-pulse">
                          <div className="absolute inset-0 bg-gradient-to-r from-secondary/20 to-primary/20 rounded-md"></div>
                          <span className="relative">
                            +{project.technologies.length - 5}
                          </span>
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4">
                  <button
                    onClick={() => openProjectDetail(project)}
                    className="w-full relative overflow-hidden px-4 py-2.5 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-lg border border-primary/30 hover:from-primary/30 hover:to-secondary/30 hover:border-primary/40 text-primary transition-all duration-300 hover:-translate-y-1"
                  >
                    <span className="flex items-center justify-center gap-2 text-sm font-medium">
                      Details
                    </span>
                  </button>

                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full relative overflow-hidden bg-gradient-to-r from-primary to-secondary text-white text-center py-2.5 px-4 rounded-lg text-sm shadow-lg transition-all duration-300 hover:-translate-y-1 hover:scale-105"
                  >
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* View More Button */}
      {!loading && projects.length > 0 && (
        <motion.div
          className="text-center mt-12"
          variants={itemVariants}
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.a
            href="https://github.com/BiswanathBD?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-md border border-white/10 text-gray-300 px-8 py-3 rounded-full font-medium hover:bg-white/10 hover:text-white hover:border-primary/30 transition-all duration-300"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            View All Projects on GitHub
            <motion.i
              className="fas fa-arrow-right text-sm"
              animate={{ x: [0, 5, 0] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </motion.a>
        </motion.div>
      )}

      {/* Project Detail Modal */}
      <ProjectDetail
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={closeProjectDetail}
      />
    </motion.section>
  );
};

export default Projects;
