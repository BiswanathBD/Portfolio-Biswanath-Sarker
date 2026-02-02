import { useCallback, useEffect, useState, useRef } from "react";
import useEmblaCarousel from "embla-carousel-react";
import ProjectCard from "./ProjectCard";
import { motion } from "framer-motion";
import ProjectDetail from "./ProjectDetail";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const sectionRef = useRef();
  const titleRef = useRef();
  const projectContainerRef = useRef();
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

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

  // GSAP Scroll-Controlled Animation for Title and Project Container
  useEffect(() => {
    if (loading) return;

    const ctx = gsap.context(() => {
      // Title Animation
      gsap.fromTo(
        titleRef.current,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          ease: "none",
          scrollTrigger: {
            trigger: titleRef.current,
            start: "top 80%",
            end: "top 50%",
            scrub: 1,
            id: "projects-title",
          },
        },
      );

      // Project Container Fade Animation
      gsap.fromTo(
        projectContainerRef.current,
        { opacity: 0 },
        {
          opacity: 1,
          ease: "none",
          scrollTrigger: {
            trigger: projectContainerRef.current,
            start: "top 85%",
            end: "top 60%",
            scrub: 1,
            id: "projects-container",
          },
        },
      );
    }, sectionRef);

    return () => ctx.revert();
  }, [loading]);

  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "center",
    loop: true,
  });

  const [activeIndex, setActiveIndex] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setActiveIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
  }, [emblaApi, onSelect]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const scrollTo = useCallback(
    (index) => {
      if (emblaApi) emblaApi.scrollTo(index);
    },
    [emblaApi],
  );

  const openProjectDetail = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeProjectDetail = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <section
      id="projects"
      className="py-20 px-4 md:px-6 lg:px-8"
      ref={sectionRef}
    >
      <div className="text-center mb-8 md:mb-16 relative" ref={titleRef}>
        {/* Background decorative elements */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-full blur-3xl pointer-events-none" />

        <div className="relative inline-block">
          {/* Main Title */}
          <div className="relative">
            <h2 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-white mb-2 relative z-10 tracking-tight">
              Featured{" "}
              <span className="relative inline-block">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-primary bg-[length:200%_100%] animate-gradient">
                  Projects
                </span>
              </span>
            </h2>

            {/* Decorative corner brackets */}
            <div className="absolute -top-2 -left-4 w-6 h-6 border-l-2 border-t-2 border-primary/40 rounded-tl-xl animate-pulse" />
            <div className="absolute -top-2 -right-4 w-6 h-6 border-r-2 border-t-2 border-secondary/40 rounded-tr-xl animate-pulse" />
            <div className="absolute -bottom-2 -left-4 w-6 h-6 border-l-2 border-b-2 border-secondary/40 rounded-bl-xl animate-pulse" />
            <div className="absolute -bottom-2 -right-4 w-6 h-6 border-r-2 border-b-2 border-primary/40 rounded-br-xl animate-pulse" />

            {/* Floating dots */}
            <motion.div
              className="absolute -top-2 left-1/4 w-2 h-2 bg-primary rounded-full"
              animate={{
                y: [-5, 5, -5],
                opacity: [0.3, 1, 0.3],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <motion.div
              className="absolute -bottom-2 right-1/4 w-2 h-2 bg-secondary rounded-full"
              animate={{
                y: [5, -5, 5],
                opacity: [0.3, 1, 0.3],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1.5,
              }}
            />
          </div>
        </div>
      </div>

      <div className="relative" ref={emblaRef}>
        <div className="flex gap-4" ref={projectContainerRef}>
          {projects.map((project, index) => {
            const isActive = index === activeIndex;

            return (
              <div
                key={index}
                className="flex-[0_0_100%] sm:flex-[0_0_85%] md:flex-[0_0_75%] lg:flex-[0_0_60%] xl:flex-[0_0_50%] 2xl:flex-[0_0_40%] flex justify-center"
              >
                <ProjectCard
                  project={project}
                  isActive={isActive}
                  openProjectDetail={openProjectDetail}
                />
              </div>
            );
          })}
        </div>

        {/* Left Fade Gradient */}
        <div className="absolute -left-4 md:-left-6 lg:-left-8 top-0 bottom-0 w-32 bg-gradient-to-r from-[#0f0518] to-transparent pointer-events-none z-10 hidden md:block"></div>

        {/* Right Fade Gradient */}
        <div className="absolute -right-4 md:-right-6 lg:-right-8 top-0 bottom-0 w-32 bg-gradient-to-l from-[#0f0518] to-transparent pointer-events-none z-10 hidden md:block"></div>

        {/* Navigation Arrows - Hidden on mobile */}
        <button
          onClick={scrollPrev}
          className="hidden md:flex absolute left-4 md:left-4 lg:left-16 xl:left-24 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-gradient-to-r from-primary/50 to-secondary/50 hover:from-primary hover:to-secondary backdrop-blur-md border border-white/20 rounded-full items-center justify-center text-white transition-all duration-300 hover:scale-110"
          aria-label="Previous slide"
        >
          <i className="fas fa-chevron-left"></i>
        </button>
        <button
          onClick={scrollNext}
          className="hidden md:flex absolute right-4 md:right-8 lg:right-16 xl:right-24 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-gradient-to-r from-primary/50 to-secondary/50 hover:from-primary hover:to-secondary backdrop-blur-md border border-white/20 rounded-full items-center justify-center text-white transition-all duration-300 hover:scale-110"
          aria-label="Next slide"
        >
          <i className="fas fa-chevron-right"></i>
        </button>
      </div>

      {/* Pagination Dots with Mobile Arrows */}
      <div className="flex items-center justify-center gap-4 mt-8">
        {/* Left Arrow - Mobile only */}
        <button
          onClick={scrollPrev}
          className="md:hidden w-8 h-8 bg-gradient-to-r from-primary/50 to-secondary/50 hover:from-primary hover:to-secondary backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center text-white transition-all duration-300 hover:scale-110"
          aria-label="Previous slide"
        >
          <i className="fas fa-chevron-left text-sm"></i>
        </button>

        {/* Dots */}
        <div className="flex items-center gap-2">
          {projects.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollTo(index)}
              className={`transition-all duration-1000 rounded-full bg-gradient-to-r h-2 ${
                index === activeIndex
                  ? "w-8 from-primary to-secondary"
                  : "w-2 from-white/30 to-white/30"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Right Arrow - Mobile only */}
        <button
          onClick={scrollNext}
          className="md:hidden w-8 h-8 bg-gradient-to-r from-primary/50 to-secondary/50 hover:from-primary hover:to-secondary backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center text-white transition-all duration-300 hover:scale-110"
          aria-label="Next slide"
        >
          <i className="fas fa-chevron-right text-sm"></i>
        </button>
      </div>

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
    </section>
  );
};

export default Projects;
