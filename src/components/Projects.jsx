import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ProjectDetail from "./ProjectDetail";

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const projectsRef = useRef();
  const titleRef = useRef();
  const filterRef = useRef();
  const carouselRef = useRef();

  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [direction, setDirection] = useState(0);

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

  // GSAP Scroll-Controlled Animations
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animation controlled by scroll
      gsap.fromTo(
        titleRef.current,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          ease: "none",
          scrollTrigger: {
            trigger: titleRef.current,
            start: "top 90%",
            end: "top 60%",
            scrub: 1,
          },
        }
      );

      // Filter buttons animation controlled by scroll
      if (filterRef.current) {
        gsap.fromTo(
          filterRef.current,
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            ease: "none",
            scrollTrigger: {
              trigger: filterRef.current,
              start: "top 85%",
              end: "top 65%",
              scrub: 1,
            },
          }
        );
      }

      // Carousel section animation controlled by scroll
      if (carouselRef.current) {
        gsap.fromTo(
          carouselRef.current,
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            ease: "none",
            scrollTrigger: {
              trigger: carouselRef.current,
              start: "top 85%",
              end: "top 55%",
              scrub: 1.5,
            },
          }
        );
      }
    }, projectsRef);

    return () => ctx.revert();
  }, [projects]);

  const openProjectDetail = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeProjectDetail = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  const categories = ["All", "Full Stack"];
  const [activeCategory, setActiveCategory] = useState("All");
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (projects.length > 0) {
      setFilteredProjects(projects);
      setCurrentIndex(0);
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
    setCurrentIndex(0);
    setDirection(0);
  };

  const nextSlide = () => {
    setDirection(1);
    setCurrentIndex((prev) =>
      prev === filteredProjects.length - 1 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentIndex((prev) =>
      prev === 0 ? filteredProjects.length - 1 : prev - 1
    );
  };

  const goToSlide = (index) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  const getNextIndex = () => {
    return (currentIndex + 1) % filteredProjects.length;
  };

  // --- Animation Variants ---

  // Variants for the Main (Left/Focused) Card
  const focusedVariants = {
    enter: (dir) => ({
      // If Next (dir 1): Slide in from the Right (where the side card was)
      // If Prev (dir -1): Fade in from Center/Left (Scale Up)
      x: dir > 0 ? "50%" : -100,
      opacity: dir > 0 ? 0.6 : 0,
      scale: dir > 0 ? 0.8 : 0.85,
      zIndex: 5,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      zIndex: 10,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }, // Custom cubic bezier for smooth snapping
    },
    exit: (dir) => ({
      // If Next (dir 1): Fade out / Scale Down
      // If Prev (dir -1): Slide to the Right (becoming the side card)
      x: dir > 0 ? -100 : "50%",
      opacity: dir > 0 ? 0 : 0.6,
      scale: dir > 0 ? 0.85 : 0.8,
      zIndex: 5,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    }),
  };

  // Variants for the Side (Right/Next) Card
  const sideVariants = {
    enter: (dir) => ({
      // If Next: Standard Fade In from right
      // If Prev: Start from the Center (where the Focused card was)
      x: dir > 0 ? 100 : "-100%", // -100% relative to itself puts it roughly in the center slot
      opacity: 0,
      scale: dir > 0 ? 0.8 : 1,
    }),
    center: {
      x: 0,
      opacity: 0.6,
      scale: 0.8, // Keep it smaller than focused
      zIndex: 5,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
    exit: (dir) => ({
      // Standard exit
      x: dir > 0 ? -100 : 100,
      opacity: 0,
      scale: 0.8,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    }),
  };

  return (
    <motion.section
      ref={projectsRef}
      className="py-20 container mx-auto px-4 md:px-8 lg:px-16 xl:px-24 relative overflow-hidden"
      id="projects"
    >
      {/* Background Elements */}
      <motion.div
        className="absolute top-20 left-10 w-80 h-80 bg-primary/10 rounded-full blur-[100px] pointer-events-none -z-10"
        animate={{ x: [0, 50, 0], y: [0, -30, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-[120px] pointer-events-none -z-10"
        animate={{ x: [0, -40, 0], y: [0, 40, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div ref={titleRef} className="text-center mb-16">
        <motion.h2 className="font-display font-bold text-4xl md:text-5xl text-white mb-4">
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
        <motion.p className="text-gray-400 mt-6 max-w-2xl mx-auto">
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
        <motion.div ref={filterRef} className="flex justify-center mb-12">
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

      {/* Projects Carousel */}
      {!loading && filteredProjects.length > 0 && (
        <div ref={carouselRef} className="relative">
          <div className="flex items-center justify-center overflow-visible py-12">
            <div className="relative w-full px-4">
              <div className="flex items-center justify-center gap-6">
                {/* Using mode="popLayout" ensures that as one exits and one enters, 
                  they don't wait for each other, creating the "swap" effect 
                */}
                <AnimatePresence
                  mode="popLayout"
                  custom={direction}
                  initial={false}
                >
                  {/* FOCUSED CARD (Left) */}
                  <motion.div
                    key={`focused-${currentIndex}`}
                    custom={direction}
                    variants={focusedVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    className="w-full max-w-[32rem] bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-lg border border-primary/40 shadow-2xl z-20 ml-8"
                    layout
                  >
                    <div className="grid grid-cols-2 aspect-[4/3]">
                      <div>
                        <img
                          src={filteredProjects[currentIndex].image}
                          alt={filteredProjects[currentIndex].title}
                          className="w-[50%] aspect-[3/4] object-cover border border-white/20 absolute top-1/2 -translate-y-1/2 -left-6 shadow-2xl rounded-md group-hover:scale-y-105 transition-all duration-300"
                        />
                      </div>

                      <div className="py-8 pr-4 flex flex-col justify-between">
                        <div className="flex-1">
                          <div className="relative mb-4">
                            <h3 className="font-extrabold text-3xl lg:text-4xl bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-2 hover:scale-105 hover:translate-x-2 transition-transform duration-300">
                              {filteredProjects[currentIndex].title}
                            </h3>
                            {filteredProjects[currentIndex].subtitle && (
                              <p className="text-lg lg:text-xl font-medium text-white">
                                {filteredProjects[currentIndex].subtitle}
                              </p>
                            )}
                          </div>

                          <p className="text-sm leading-relaxed mb-4 text-primary line-clamp-3">
                            {filteredProjects[currentIndex].description}
                          </p>

                          <div className="mb-6">
                            <div className="flex flex-wrap gap-2">
                              {filteredProjects[currentIndex].technologies
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
                              {filteredProjects[currentIndex].technologies
                                .length > 5 && (
                                <span className="relative px-3 py-1.5 bg-gradient-to-r from-secondary/30 to-primary/30 text-white text-xs font-medium rounded-md border border-secondary/50 backdrop-blur-sm cursor-default animate-pulse">
                                  <div className="absolute inset-0 bg-gradient-to-r from-secondary/20 to-primary/20 rounded-md"></div>
                                  <span className="relative">
                                    +
                                    {filteredProjects[currentIndex].technologies
                                      .length - 5}
                                  </span>
                                </span>
                              )}
                            </div>
                          </div>
                        </div>

                        <div className="flex gap-4">
                          <button
                            onClick={() =>
                              openProjectDetail(filteredProjects[currentIndex])
                            }
                            className="w-full relative overflow-hidden px-4 py-2.5 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-lg border border-primary/30 hover:from-primary/30 hover:to-secondary/30 hover:border-primary/40 text-primary transition-all duration-300 hover:-translate-y-1"
                          >
                            <span className="flex items-center justify-center gap-2 text-sm font-medium">
                              Details
                            </span>
                          </button>

                          <a
                            href={filteredProjects[currentIndex].liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full relative overflow-hidden bg-gradient-to-r from-primary to-secondary text-white text-center py-2.5 px-4 rounded-lg text-sm shadow-lg transition-all duration-300 hover:-translate-y-1 hover:scale-105"
                          >
                            Live Demo
                          </a>
                        </div>
                      </div>
                    </div>
                  </motion.div>

                  {/* NON-FOCUSED CARD (Right) */}
                  {filteredProjects.length > 1 && (
                    <motion.div
                      key={`next-${getNextIndex()}`}
                      custom={direction}
                      variants={sideVariants}
                      initial="enter"
                      animate="center"
                      exit="exit"
                      onClick={nextSlide}
                      className="w-full max-w-[28rem] bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-lg border border-white/10 shadow-2xl cursor-pointer hover:opacity-80 transition-opacity z-10 hidden lg:block ml-8"
                      layout
                    >
                      <div className="grid grid-cols-2 aspect-[4/3]">
                        <div>
                          <img
                            src={filteredProjects[getNextIndex()].image}
                            alt={filteredProjects[getNextIndex()].title}
                            className="w-[50%] aspect-[3/4] object-cover border border-white/20 absolute top-1/2 -translate-y-1/2 -left-6 shadow-2xl rounded-md"
                          />
                        </div>

                        <div className="py-8 pr-4 flex flex-col justify-between">
                          <div className="flex-1">
                            <div className="relative mb-4">
                              <h3 className="font-extrabold text-2xl lg:text-3xl bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-2">
                                {filteredProjects[getNextIndex()].title}
                              </h3>
                              {filteredProjects[getNextIndex()].subtitle && (
                                <p className="text-base lg:text-lg font-medium text-white">
                                  {filteredProjects[getNextIndex()].subtitle}
                                </p>
                              )}
                            </div>

                            <p className="text-xs leading-relaxed mb-4 text-primary line-clamp-2">
                              {filteredProjects[getNextIndex()].description}
                            </p>

                            <div className="mb-4">
                              <div className="flex flex-wrap gap-1.5">
                                {filteredProjects[getNextIndex()].technologies
                                  .slice(0, 4)
                                  .map((tech, techIndex) => (
                                    <span
                                      key={techIndex}
                                      className="relative px-2 py-1 bg-gradient-to-r from-primary/20 to-secondary/20 text-secondary text-xs font-medium rounded-md border border-primary/30"
                                    >
                                      <span className="relative">{tech}</span>
                                    </span>
                                  ))}
                                {filteredProjects[getNextIndex()].technologies
                                  .length > 4 && (
                                  <span className="relative px-2 py-1 bg-gradient-to-r from-secondary/30 to-primary/30 text-white text-xs font-medium rounded-md">
                                    +
                                    {filteredProjects[getNextIndex()]
                                      .technologies.length - 4}
                                  </span>
                                )}
                              </div>
                            </div>
                          </div>

                          <div className="text-xs px-3 py-1 bg-gradient-to-r from-primary/20 to-secondary/20 text-primary border border-white/10 rounded-md mt-2 w-fit mx-auto animate-pulse">
                            Click to view
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Navigation Arrows */}
              <div className="absolute inset-0 flex items-center justify-between pointer-events-none z-30 px-4">
                <button
                  onClick={prevSlide}
                  className="pointer-events-auto w-12 h-12 bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-primary hover:border-primary transition-all duration-300 hover:scale-110"
                >
                  <i className="fas fa-chevron-left"></i>
                </button>
                <button
                  onClick={nextSlide}
                  className="pointer-events-auto w-12 h-12 bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-primary hover:border-primary transition-all duration-300 hover:scale-110"
                >
                  <i className="fas fa-chevron-right"></i>
                </button>
              </div>
            </div>
          </div>

          {/* Dots Navigation */}
          <div className="flex items-center justify-center gap-2 mt-8">
            {filteredProjects.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`transition-all duration-300 rounded-full ${
                  index === currentIndex
                    ? "w-8 h-2 bg-gradient-to-r from-primary to-secondary"
                    : "w-2 h-2 bg-white/30 hover:bg-white/50"
                }`}
              />
            ))}
          </div>
        </div>
      )}

      {/* View More Button */}
      {!loading && projects.length > 0 && (
        <motion.div className="text-center mt-12">
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

      <ProjectDetail
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={closeProjectDetail}
      />
    </motion.section>
  );
};

export default Projects;
