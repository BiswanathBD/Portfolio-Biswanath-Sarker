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
  const carouselContainerRef = useRef();
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

  // GSAP Scroll-Controlled Animation for Title
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
        }
      );

      // Carousel Animation
      if (carouselContainerRef.current) {
        gsap.fromTo(
          carouselContainerRef.current,
          { y: 60, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            ease: "none",
            scrollTrigger: {
              trigger: carouselContainerRef.current,
              start: "top 85%",
              end: "top 55%",
              scrub: 1.5,
              id: "projects-carousel",
            },
          }
        );
      }
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
    [emblaApi]
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
      <div className="text-center mb-20" ref={titleRef}>
        <h2 className="font-display font-bold text-4xl md:text-5xl text-white mb-4">
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
            🎯
          </motion.span>
          Featured Projects
        </h2>
        <motion.div
          className="h-1 w-24 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"
          initial={{ width: 0 }}
          whileInView={{ width: 96 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        />
        <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
          Here are some of my recent projects that showcase my skills and
          experience in web development
        </p>
      </div>

      <div className="relative" ref={emblaRef}>
        <div className="flex gap-4" ref={carouselContainerRef}>
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
