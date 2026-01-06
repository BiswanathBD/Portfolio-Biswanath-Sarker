import { useState } from "react";
import { motion } from "framer-motion";
import ProjectDetail from "./ProjectDetail";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

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
    hidden: { y: 50, opacity: 0, scale: 0.9 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const projects = [
    {
      id: 1,
      title: "AidEx – Blood Donation & Funding Platform",
      description:
        "Full-stack web platform connecting blood donors with recipients and enabling secure online funding for life-saving causes. Features blood donation system, Stripe payment integration, and comprehensive admin panel.",
      detailedDescription:
        "AidEx is a comprehensive blood donation and funding platform designed to bridge the gap between blood donors and recipients while enabling secure online funding for life-saving medical causes. The platform features a sophisticated matching system for blood donors and recipients, integrated Stripe payment processing for secure donations, real-time notifications, and a comprehensive admin dashboard for managing all platform activities. Built with modern web technologies, it ensures scalability, security, and an intuitive user experience.",
      image: "https://i.ibb.co.com/zhBTyLgK/image.png",
      technologies: [
        "React",
        "Node.js",
        "MongoDB",
        "Express",
        "Firebase",
        "Stripe",
        "Tailwind CSS",
        "Framer Motion",
      ],
      features: [
        "Blood donor and recipient matching system",
        "Secure Stripe payment integration",
        "Real-time notifications and alerts",
        "Comprehensive admin dashboard",
        "User profile management",
        "Donation tracking and history",
        "Responsive design for all devices",
        "Email notification system",
      ],
      challenges: [
        "Implementing secure payment processing with Stripe while ensuring PCI compliance and handling various payment scenarios including failed transactions and refunds.",
        "Designing an efficient blood donor-recipient matching algorithm that considers blood type compatibility, location proximity, and availability status.",
        "Building a real-time notification system that works across different devices and browsers while maintaining performance and reliability.",
      ],
      improvements: [
        "Implement AI-powered donor-recipient matching based on historical data and success rates to improve compatibility predictions.",
        "Add mobile app versions for iOS and Android to increase accessibility and user engagement.",
        "Integrate with hospital management systems for seamless blood inventory tracking and automated requests.",
        "Implement blockchain technology for transparent donation tracking and building donor trust.",
      ],
      liveUrl: "https://aidex-by-biswanath.netlify.app/",
      githubUrl: "https://github.com/BiswanathBD/AidEx-Frontend",
      category: "Full Stack",
    },
    {
      id: 2,
      title: "WeCare — Volunteer Event Management Platform",
      description:
        "Community-driven platform connecting volunteers with meaningful causes. Features event creation, smart search & filtering, personal dashboard, and secure Firebase authentication with responsive animated UI.",
      detailedDescription:
        "WeCare is a comprehensive volunteer event management platform that connects passionate volunteers with meaningful community causes. The platform enables organizations to create and manage volunteer events while providing volunteers with an intuitive interface to discover, join, and track their volunteer activities. Built with React and powered by Firebase, it features advanced search and filtering capabilities, personal dashboards, real-time event updates, and a beautiful animated user interface that enhances user engagement.",
      image: "https://i.ibb.co.com/VWq9FbB2/image.png",
      technologies: [
        "React",
        "Node.js",
        "MongoDB",
        "Express",
        "Firebase",
        "Tailwind CSS",
        "Framer Motion",
        "Vite",
      ],
      features: [
        "Event creation and management system",
        "Advanced search and filtering",
        "Personal volunteer dashboard",
        "Real-time event updates",
        "Secure Firebase authentication",
        "Responsive animated UI",
        "Volunteer hour tracking",
        "Organization profile management",
      ],
      challenges: [
        "Creating a sophisticated search and filtering system that allows volunteers to find relevant events based on multiple criteria including location, cause type, time commitment, and skills required.",
        "Implementing real-time updates for event information, volunteer registrations, and cancellations while maintaining data consistency across all users.",
        "Designing an intuitive dashboard that displays relevant information for both volunteers and organizations without overwhelming the user interface.",
      ],
      improvements: [
        "Add gamification elements like volunteer badges, leaderboards, and achievement systems to increase engagement and retention.",
        "Implement machine learning recommendations to suggest relevant volunteer opportunities based on user history and preferences.",
        "Create a mobile app with offline capabilities for volunteers to access event information and check-in even without internet connectivity.",
        "Add integration with social media platforms for easy event sharing and volunteer recruitment.",
      ],
      liveUrl: "https://wecare-biswanath.netlify.app/",
      githubUrl: "https://github.com/BiswanathBD/weCare-Client-Site",
      category: "Full Stack",
    },
    {
      id: 3,
      title: "Smart Deals — Next-Gen eCommerce Platform",
      description:
        "Futuristic eCommerce web app with neon glow aesthetics and glassmorphism design. Features one-click Google login, responsive layouts, and smooth user experience with modern UI/UX principles.",
      detailedDescription:
        "Smart Deals is a cutting-edge eCommerce platform that combines futuristic design with practical functionality. The platform features a stunning neon glow aesthetic with glassmorphism design elements, creating an immersive shopping experience. Built with modern web technologies, it offers seamless user authentication through Google Sign-In, responsive layouts that work perfectly across all devices, and smooth animations that enhance user engagement. The platform demonstrates advanced UI/UX principles while maintaining excellent performance and accessibility.",
      image: "https://i.ibb.co.com/mCgFmvhr/image.png",
      technologies: [
        "React",
        "Node.js",
        "MongoDB",
        "Express",
        "Firebase",
        "Tailwind CSS",
        "Framer Motion",
      ],
      features: [
        "Futuristic neon glow design",
        "Glassmorphism UI elements",
        "One-click Google authentication",
        "Responsive design system",
        "Smooth animations and transitions",
        "Product catalog management",
        "Shopping cart functionality",
        "Modern checkout process",
      ],
      challenges: [
        "Creating a visually stunning neon glow and glassmorphism design while maintaining excellent performance and accessibility standards across all devices and browsers.",
        "Implementing smooth animations and transitions using Framer Motion without compromising page load times and overall user experience.",
        "Balancing the futuristic aesthetic with practical eCommerce functionality to ensure the design enhances rather than hinders the shopping experience.",
      ],
      improvements: [
        "Implement advanced product recommendation algorithms using machine learning to suggest relevant products based on user behavior and purchase history.",
        "Add augmented reality (AR) features for product visualization, allowing customers to see how products would look in their environment.",
        "Integrate with multiple payment gateways and cryptocurrency options to provide flexible payment methods for modern consumers.",
        "Develop a progressive web app (PWA) version with offline capabilities for browsing products and managing wishlists without internet connectivity.",
      ],
      liveUrl: "https://smart-deals-by-biswanath.netlify.app/",
      githubUrl: "https://github.com/BiswanathBD/Smart-Deals",
      category: "Full Stack",
    },
  ];

  const categories = ["All", "Full Stack"];
  const [activeCategory, setActiveCategory] = useState("All");
  const [filteredProjects, setFilteredProjects] = useState(projects);

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

      {/* Filter Buttons */}
      <motion.div className="flex justify-center mb-12" variants={itemVariants}>
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

      {/* Projects Grid */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        variants={containerVariants}
      >
        {filteredProjects.map((project, index) => (
          <motion.div
            key={project.id}
            className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 rounded-3xl overflow-hidden shadow-2xl transition-all duration-700 hover:border-primary/40"
            variants={cardVariants}
            whileHover={{ y: -15, scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            {/* Animated Background Gradient */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              initial={false}
            />

            {/* Glowing Border Effect */}
            <motion.div
              className="absolute inset-0 rounded-3xl bg-gradient-to-r from-primary/20 to-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm -z-10"
              initial={false}
            />

            {/* Project Image */}
            <div className="relative overflow-hidden rounded-t-3xl">
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10"></div>
              <motion.img
                src={project.image}
                alt={project.title}
                className="w-full h-56 object-cover filter group-hover:brightness-110"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.7 }}
              />

              {/* Floating Action Buttons */}
              <motion.div
                className="absolute top-6 right-6 flex flex-col space-y-3 opacity-0 group-hover:opacity-100 transition-all duration-500 z-20"
                initial={{ x: 20 }}
                whileHover={{ x: 0 }}
              >
                <motion.a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center text-white hover:bg-primary hover:scale-110 transition-all duration-300 shadow-lg"
                  title="Live Demo"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.3 }}
                >
                  <i className="fas fa-external-link-alt text-sm"></i>
                </motion.a>
                <motion.a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center text-white hover:bg-secondary hover:scale-110 transition-all duration-300 shadow-lg"
                  title="View Code"
                  whileHover={{ rotate: -360 }}
                  transition={{ duration: 0.3 }}
                >
                  <i className="fab fa-github text-sm"></i>
                </motion.a>
              </motion.div>

              {/* Modern Category Badge */}
              <motion.div
                className="absolute bottom-6 left-6 z-20"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="relative">
                  <div className="absolute inset-0 bg-primary/20 rounded-2xl blur-sm"></div>
                  <span className="relative px-4 py-2 bg-gradient-to-r from-primary/80 to-secondary/80 backdrop-blur-sm text-white text-sm font-semibold rounded-2xl border border-white/20 shadow-lg">
                    {project.category}
                  </span>
                </div>
              </motion.div>

              {/* Animated Corner Accent */}
              <motion.div
                className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-primary/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                initial={false}
              />
            </div>

            {/* Project Content */}
            <div className="relative p-8 z-10">
              {/* Title with Gradient Underline */}
              <div className="relative mb-4">
                <motion.h3
                  className="font-display font-bold text-2xl text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-secondary transition-all duration-300"
                  whileHover={{ scale: 1.02 }}
                >
                  {project.title}
                </motion.h3>
                <motion.div
                  className="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-primary to-secondary"
                  initial={{ width: 0 }}
                  whileHover={{ width: "100%" }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                />
              </div>

              <motion.p
                className="text-gray-300 text-sm leading-relaxed mb-6 group-hover:text-gray-200 transition-colors duration-300"
                variants={itemVariants}
              >
                {project.description}
              </motion.p>

              {/* Modern Technology Pills */}
              <motion.div
                className="flex flex-wrap gap-2 mb-6"
                variants={containerVariants}
              >
                {project.technologies.map((tech, techIndex) => (
                  <motion.span
                    key={techIndex}
                    className="relative px-3 py-1.5 bg-gradient-to-r from-gray-800/80 to-gray-700/80 text-gray-200 text-xs font-medium rounded-full border border-gray-600/50 backdrop-blur-sm hover:border-primary/50 hover:text-white transition-all duration-300 cursor-default"
                    variants={itemVariants}
                    whileHover={{ scale: 1.1, y: -2 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-full opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                    <span className="relative">{tech}</span>
                  </motion.span>
                ))}
              </motion.div>

              {/* Enhanced Action Buttons */}
              <div className="flex space-x-4">
                <motion.button
                  onClick={() => openProjectDetail(project)}
                  className="flex-1 relative overflow-hidden bg-gradient-to-r from-purple-600 to-blue-600 text-white text-center py-3 px-6 rounded-2xl font-semibold text-sm shadow-lg transition-all duration-300"
                  whileHover={{ y: -2, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    View Details
                    <motion.i
                      className="fas fa-info-circle text-xs"
                      animate={{ rotate: [0, 360] }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                    />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                </motion.button>
                <motion.a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 relative overflow-hidden bg-gradient-to-r from-primary to-secondary text-white text-center py-3 px-6 rounded-2xl font-semibold text-sm shadow-lg transition-all duration-300"
                  whileHover={{ y: -2, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    Live Demo
                    <motion.i
                      className="fas fa-rocket text-xs"
                      animate={{ x: [0, 3, 0] }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-secondary to-primary opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
                </motion.a>
              </div>
            </div>

            {/* Decorative Elements */}
            <motion.div
              className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-secondary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-tl-full"
              initial={false}
            />
            <motion.div
              className="absolute top-1/2 left-0 w-1 h-16 bg-gradient-to-b from-primary to-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-r-full"
              initial={false}
            />
          </motion.div>
        ))}
      </motion.div>

      {/* View More Button */}
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
